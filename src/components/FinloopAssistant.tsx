import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { readAssistantStream, readPartialAnswer } from '../data/finloopAssistantStream';
import { Link, useLocation } from 'react-router-dom';
import { assistantPages, parseAssistantReply } from '../data/finloopAssistantKnowledge';

type AssistantMode = 'hidden' | 'modal' | 'sidebar';

type AssistantExchange = {
  id: number;
  question: string;
  body: string;
  links: string[];
  status: 'pending' | 'complete' | 'error';
};

type FinloopAssistantContextValue = {
  ask: (question: string) => void;
  hasConversation: boolean;
  isLoading: boolean;
};

const FinloopAssistantContext = createContext<FinloopAssistantContextValue | null>(null);

export function useFinloopAssistant() {
  const value = useContext(FinloopAssistantContext);
  if (!value) throw new Error('useFinloopAssistant must be used inside FinloopAssistantProvider');
  return value;
}

export function FinloopAssistantProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AssistantMode>('hidden');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Remove credentials left by the former browser-direct implementation.
    try { localStorage.removeItem('finloop-ai-api-key'); } catch { /* Storage may be disabled. */ }
  }, []);

  useEffect(() => () => requestRef.current?.abort(), []);
  const [exchanges, setExchanges] = useState<AssistantExchange[]>([]);
  const [draft, setDraft] = useState('');
  const [showFloatingLauncher, setShowFloatingLauncher] = useState(location.pathname !== '/');
  const nextId = useRef(1);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function ask(question: string) {
    const nextQuestion = question.trim();
    if (!nextQuestion || requestRef.current) return;
    const id = nextId.current++;
    const controller = new AbortController();
    requestRef.current = controller;
    setIsLoading(true);
    const messages = exchanges.filter(item => item.status === 'complete').slice(-10).flatMap(item => [
      { role: 'user', content: item.question },
      { role: 'assistant', content: JSON.stringify({ answer: item.body, links: item.links }) },
    ]);
    messages.push({ role: 'user', content: nextQuestion });
    setExchanges(current => [...current, { id, question: nextQuestion, body: '', links: [], status: 'pending' }]);
    setDraft('');
    setMode('sidebar');
    const timeout = window.setTimeout(() => controller.abort(), 90000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, currentPath: location.pathname + location.hash }),
        signal: controller.signal,
      });
      if (!response.ok) {
        const failure = await response.json().catch(() => null);
        throw new Error(typeof failure?.error === 'string' ? failure.error : `请求失败（HTTP ${response.status}），请稍后重试。`);
      }
      const content = await readAssistantStream(response, partial => {
        const body = readPartialAnswer(partial);
        setExchanges(current => current.map(item => item.id === id ? { ...item, body } : item));
      });
      if (typeof content !== 'string' || !content.trim()) throw new Error('接口未返回有效的回答，请重试。');
      const reply = parseAssistantReply(content);
      setExchanges(current => current.map(item => item.id === id ? { ...item, body: reply.answer, links: reply.links, status: 'complete' } : item));
    } catch (error) {
      const message = controller.signal.aborted ? '请求超时，请稍后重试。'
        : error instanceof TypeError ? '无法连接 AI 服务，请检查网络或服务端接口后重试。'
        : error instanceof SyntaxError ? '接口响应格式异常，请稍后重试。'
        : error instanceof Error ? error.message : '请求失败，请稍后重试。';
      setExchanges(current => current.map(item => item.id === id ? { ...item, body: item.body ? `${item.body}\n\n${message}` : message, status: 'error' } : item));
    } finally {
      window.clearTimeout(timeout);
      requestRef.current = null;
      setIsLoading(false);
    }
  }

  function submitDraft(event: FormEvent) {
    event.preventDefault();
    ask(draft);
  }

  useEffect(() => {
    document.body.classList.toggle('assistant-modal-open', mode === 'modal');
    document.body.classList.toggle('assistant-sidebar-open', mode === 'sidebar');

    return () => {
      document.body.classList.remove('assistant-modal-open');
      document.body.classList.remove('assistant-sidebar-open');
    };
  }, [mode]);

  useEffect(() => {
    if (mode === 'hidden') return undefined;
    const frame = window.requestAnimationFrame(() => {
      messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });

    });
    return () => window.cancelAnimationFrame(frame);
  }, [exchanges, mode]);

  useEffect(() => {
    if (mode !== 'hidden') inputRef.current?.focus();
  }, [mode]);

  useEffect(() => {
    if (mode === 'hidden') return undefined;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMode('hidden');
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowFloatingLauncher(true);
      return undefined;
    }

    function syncFloatingLauncher() {
      const hero = document.querySelector<HTMLElement>('.hero');
      setShowFloatingLauncher(!hero || hero.getBoundingClientRect().bottom <= 0);
    }

    syncFloatingLauncher();
    window.addEventListener('scroll', syncFloatingLauncher, { passive: true });
    window.addEventListener('resize', syncFloatingLauncher);
    return () => {
      window.removeEventListener('scroll', syncFloatingLauncher);
      window.removeEventListener('resize', syncFloatingLauncher);
    };
  }, [location.pathname]);

  const hasConversation = exchanges.length > 0;

  return (
    <FinloopAssistantContext.Provider value={{ ask, hasConversation, isLoading }}>
      {children}
      {mode === 'modal' && (
        <div className="finloop-assistant-overlay" onMouseDown={event => {
          if (event.target === event.currentTarget) setMode('hidden');
        }}>
          <AssistantPanel
            mode="modal"
            exchanges={exchanges}
            draft={draft}
            setDraft={setDraft}
            submitDraft={submitDraft}
            messagesRef={messagesRef}
            inputRef={inputRef}
            onMinimize={() => setMode('sidebar')}
            onClose={() => setMode('hidden')}
            isLoading={isLoading}
            onRetry={question => void ask(question)}
          />
        </div>
      )}

      {mode === 'sidebar' && (
        <AssistantPanel
          mode="sidebar"
          exchanges={exchanges}
          draft={draft}
          setDraft={setDraft}
          submitDraft={submitDraft}
          messagesRef={messagesRef}
          inputRef={inputRef}
          onClose={() => setMode('hidden')}
          isLoading={isLoading}
            onRetry={question => void ask(question)}
        />
      )}

      {mode === 'hidden' && showFloatingLauncher && (
        <button
          className="finloop-assistant-floating"
          type="button"
          aria-label={hasConversation ? '继续向 Finloop AI 提问' : '向 Finloop AI 提问'}
          onClick={() => setMode('sidebar')}
        >
          <span aria-hidden="true"><i />AI</span>
          <span className="finloop-assistant-floating-copy">
            <small>{hasConversation ? '对话已为您保留' : '想快速找到产品或解决方案？'}</small>
            <strong>{hasConversation ? '继续向 Finloop AI 提问' : '向 Finloop AI 提问'}</strong>
          </span>
          <b aria-hidden="true">→</b>
        </button>
      )}
    </FinloopAssistantContext.Provider>
  );
}

type AssistantPanelProps = {
  mode: 'modal' | 'sidebar';
  exchanges: AssistantExchange[];
  draft: string;
  setDraft: (value: string) => void;
  submitDraft: (event: FormEvent) => void;
  messagesRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  onClose: () => void;
  isLoading: boolean;
  onRetry: (question: string) => void;
  onMinimize?: () => void;
  onExpand?: () => void;
};

function AssistantPanel({
  mode,
  exchanges,
  draft,
  setDraft,
  submitDraft,
  messagesRef,
  inputRef,
  onClose,
  isLoading,
  onRetry,
  onMinimize,
  onExpand,
}: AssistantPanelProps) {
  const isModal = mode === 'modal';

  return (
    <section
      className={`finloop-assistant-panel finloop-assistant-${mode}`}
      role={isModal ? 'dialog' : 'complementary'}
      aria-modal={isModal ? true : undefined}
      aria-label="Finloop AI 对话"
    >
      <header className="finloop-assistant-head">
        <div>
          <span><i aria-hidden="true" />Finloop AI</span>
          <small>业务助手</small>
        </div>
        <nav aria-label="对话窗口操作">
          {isModal ? (
            <button type="button" onClick={onMinimize} aria-label="收起至页面右侧边栏">收起至侧边栏</button>
          ) : onExpand ? (
            <button type="button" onClick={onExpand} aria-label="展开沉浸式对话">展开</button>
          ) : null}
          <button className="finloop-assistant-close" type="button" onClick={onClose} aria-label="关闭并收起对话">×</button>
        </nav>
      </header>

      <div className="finloop-assistant-conversation">
        <div className="finloop-assistant-intro">
          <h2>Finloop AI 能为您做什么？</h2>
          <p>从业务目标出发，快速了解适合您的金融产品、平台与解决方案。</p>
        </div>
        <div className="finloop-assistant-messages" ref={messagesRef} aria-live="polite">
        <div className="finloop-assistant-message is-assistant">
          <b>Finloop AI</b>
          <p>您想了解哪类财富科技能力？我可以帮您快速找到对应的产品与解决方案。</p>
        </div>
        {exchanges.map(exchange => (
          <div className="finloop-assistant-exchange" key={exchange.id}>
            <div className="finloop-assistant-message is-user"><p>{exchange.question}</p></div>
            <div className="finloop-assistant-message is-assistant">
              <b>Finloop AI</b>
              <p role={exchange.status === 'error' ? 'alert' : undefined}>{exchange.body || (exchange.status === 'pending' ? '正在思考…' : '')}</p>
              {exchange.status === 'pending' && exchange.body && <small className="finloop-assistant-streaming">正在回答…</small>}
              {exchange.status === 'complete' && exchange.links.length > 0 && <nav className="finloop-assistant-links" aria-label="相关官网页面">
                {exchange.links.map(href => {
                  const page = assistantPages.find(item => item.href === href)!;
                  return href.startsWith('https://')
                    ? <a key={href} href={href} target="_blank" rel="noopener noreferrer">{page.title} <span aria-hidden="true">↗</span><span className="sr-only">（新窗口打开）</span></a>
                    : <Link key={href} to={href}>{page.title} <span aria-hidden="true">→</span></Link>;
                })}
              </nav>}
              {exchange.status === 'error' && <button className="finloop-assistant-detail" type="button" disabled={isLoading} onClick={() => onRetry(exchange.question)}>重试</button>}
            </div>
          </div>
        ))}
        </div>
      </div>

      <form className="finloop-assistant-form" autoComplete="off" onSubmit={submitDraft}>
        <label className="sr-only" htmlFor={`finloop-assistant-input-${mode}`}>继续输入您的业务问题</label>
        <input
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          id={`finloop-assistant-input-${mode}`}
          value={draft}
          onChange={event => setDraft(event.target.value)}
          placeholder="继续输入您的业务问题…"
        />
        <button type="submit" aria-label="发送问题" disabled={isLoading || !draft.trim()}>↑</button>
      </form>
    </section>
  );
}
