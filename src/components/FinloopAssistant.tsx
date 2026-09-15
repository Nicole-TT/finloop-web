import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type AssistantMode = 'hidden' | 'modal' | 'sidebar';

type AssistantAnswer = {
  body: string;
  detailHref: string;
  detailLabel: string;
};

type AssistantExchange = AssistantAnswer & {
  id: number;
  question: string;
};

type FinloopAssistantContextValue = {
  ask: (question: string) => void;
  hasConversation: boolean;
};

const FinloopAssistantContext = createContext<FinloopAssistantContextValue | null>(null);

const presetAnswers: Record<string, AssistantAnswer> = {
  '如何上线数字财富业务？': {
    body: 'Finloop 可将现实资产、Tokenization、链上部署、钱包与 KYT、产品运营和机构分销连接成一条完整链路。方案可根据资产方、产品需求方或分销方的角色，组合 FinRWA、FinTaaS、FinOne 与 FinMix 等能力，支持从产品设计、数字化发行到持续运营与访问分销。',
    detailHref: '/solutions/rwa-web3',
    detailLabel: '查看数字资产与代币化解决方案详情',
  },
  '如何管理企业闲置资金？': {
    body: '星企通将企业开户、资金流转、投资交易和资产信息集中在一个平台。企业可根据流动性和风险需求，通过货币基金、固定票息票据、债券基金等路径配置闲置资金，并统一查看资产、交易记录和资金流水，提升资金使用效率。',
    detailHref: '/products/xingqitong',
    detailLabel: '查看星企通详情',
  },
  'AI 如何进入金融业务流程？': {
    body: 'Finloop 从业务场景诊断开始，将企业资料、知识、权限、系统与高价值任务连接起来，再通过 FAI、星路通、AI PaaS、星智通 MaaS、Agent 与 Skills 构建可控工作流。由 FDE 团队推进设计、集成、部署和持续运营，让 AI 从问答工具进入产品研究、风险、运营、订单与对账等真实流程。',
    detailHref: '/solutions/enterprise-ai',
    detailLabel: '查看金融 AI 企业落地解决方案详情',
  },
};

const defaultAnswer: AssistantAnswer = {
  body: 'Finloop AI 可以根据您的业务目标，帮助定位金融产品、平台与解决方案。您可以从机构财富管理、企业资金管理、数字资产与代币化或企业 AI 落地等方向继续了解，也可以联系团队获取针对性建议。',
  detailHref: '/solutions',
  detailLabel: '查看全部解决方案',
};

function resolveAnswer(question: string) {
  if (presetAnswers[question]) return presetAnswers[question];
  if (/闲置资金|企业资金|现金管理/.test(question)) return presetAnswers['如何管理企业闲置资金？'];
  if (/代币|RWA|数字资产|Web3/i.test(question)) return presetAnswers['如何上线数字财富业务？'];
  if (/AI|人工智能|智能化/i.test(question)) return presetAnswers['AI 如何进入金融业务流程？'];
  return defaultAnswer;
}

export function useFinloopAssistant() {
  const value = useContext(FinloopAssistantContext);
  if (!value) throw new Error('useFinloopAssistant must be used inside FinloopAssistantProvider');
  return value;
}

export function FinloopAssistantProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AssistantMode>('hidden');
  const location = useLocation();
  const navigate = useNavigate();
  const [exchanges, setExchanges] = useState<AssistantExchange[]>([]);
  const [draft, setDraft] = useState('');
  const [showFloatingLauncher, setShowFloatingLauncher] = useState(location.pathname !== '/');
  const nextId = useRef(1);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function ask(question: string) {
    const nextQuestion = question.trim();
    if (!nextQuestion) return;
    const answer = resolveAnswer(nextQuestion);
    setExchanges(current => [
      ...current,
      { id: nextId.current++, question: nextQuestion, ...answer },
    ]);
    setDraft('');
    setMode('sidebar');
  }

  function submitDraft(event: FormEvent) {
    event.preventDefault();
    ask(draft);
  }

  function navigateToDetail(href: string) {
    setMode('sidebar');
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(href);
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
      inputRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [exchanges, mode]);

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
    <FinloopAssistantContext.Provider value={{ ask, hasConversation }}>
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
            onDetailNavigate={navigateToDetail}
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
          onDetailNavigate={navigateToDetail}
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
  onDetailNavigate: (href: string) => void;
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
  onDetailNavigate,
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
              <p>{exchange.body}</p>
              <button
                className="finloop-assistant-detail"
                type="button"
                aria-label={exchange.detailLabel}
                onClick={() => onDetailNavigate(exchange.detailHref)}
              >
                查看详情 <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>

      <form className="finloop-assistant-form" onSubmit={submitDraft}>
        <label className="sr-only" htmlFor={`finloop-assistant-input-${mode}`}>继续输入您的业务问题</label>
        <input
          ref={inputRef}
          id={`finloop-assistant-input-${mode}`}
          value={draft}
          onChange={event => setDraft(event.target.value)}
          placeholder="继续输入您的业务问题…"
        />
        <button type="submit" aria-label="发送问题" disabled={!draft.trim()}>↑</button>
      </form>
    </section>
  );
}
