import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { useFinloopAssistant } from './FinloopAssistant';
import { ArrowUp, RefreshCw, type IconNode } from 'lucide';

function HeroIcon({ icon }: { icon: IconNode }) {
  return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {icon[2]?.map(([tag, attrs], index) => React.createElement(tag, { ...attrs, key: index }))}
  </svg>;
}

const assetContent: Record<string, [string, string, string, string]> = {
  cash: ['企业流动性与现金管理', '连接多币种货币基金与机构运营流程，支持企业与金融机构进行现金配置、申赎和资产查看。', 'USD · HKD · CNH', '产品范围与规则以上线时核验信息为准'],
  fund: ['连接全球公募基金产品', '将基金产品、客户适当性、交易、持仓和运营连接在同一业务链路中。', 'GLOBAL FUNDS', '覆盖多类基金产品与管理人'],
  private: ['专业投资者产品服务', '支持私募基金产品货架与机构业务流程，具体可售范围按主体和地区确认。', 'PRIVATE MARKETS', '仅面向符合条件的专业投资者'],
  bond: ['固定收益产品与交易能力', '连接债券产品数据、询价、订单与存续管理，服务机构多资产配置场景。', 'FIXED INCOME', '市场、币种与起投规则以实际产品为准'],
  structured: ['从询价到存续管理', '覆盖结构性产品 RFQ、报价、订单及后续管理环节。', 'RFQ → ORDER', '具体产品和适用客户以持牌主体确认为准'],
  insurance: ['保险产品货架与运营', '区分保险产品供给与面向保险机构的科技解决方案，连接产品、渠道和服务流程。', 'PRODUCT · SERVICE', '具体服务范围以适用主体为准'],
  virtual: ['虚拟资产产品与服务', '连接虚拟资产产品、机构账户与交易流程，支持适用机构拓展数字资产业务。', 'VIRTUAL ASSETS', '具体服务范围以适用主体为准'],
  rwa: ['传统资产与数字基础设施', '连接 Tokenization、链上部署、持份管理、钱包、KYT 与分销流程。', 'ASSET → TOKEN', '覆盖资产上链与机构分销流程'],
};

const assetTabs: Array<[string, string]> = [
  ['cash', '现金管理'], ['fund', '公募基金'], ['private', '私募基金'],
  ['bond', '债券'], ['structured', '结构性产品'], ['insurance', '保险'],
  ['virtual', '虚拟资产'], ['rwa', 'RWA'],
];

const heroSuggestionBatches = [
  ['代币化平台 FinTaaS', '统一 AI API 网关 星智通', '企业如何管理闲置资金', '我想了解私募产品'],
  ['如何上线数字财富业务', '金融机构如何应用 AI', '了解 RWA 解决方案', '企业现金管理方案'],
];

const heroEntrance: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: .12, staggerChildren: .1 } },
};

const heroEntranceItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: .56, ease: [.22, 1, .36, 1] } },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [question, setQuestion] = useState('');
  const [suggestionBatch, setSuggestionBatch] = useState(0);
  const reduceMotion = useReducedMotion();
  const { ask, openApiSettings, isLoading } = useFinloopAssistant();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let active = false;
    let lastTime = 0;
    let lastTrailTime = 0;
    let trail: Array<{ x: number; y: number; time: number }> = [];

    const paint = (time: number) => {
      const moving = Math.hypot(targetX - x, targetY - y) > 1;
      if (moving && time - lastTrailTime > 50) {
        trail.push({ x, y, time });
        trail = trail.slice(-12);
        lastTrailTime = time;
      }
      trail = trail.filter(point => time - point.time < 650);
      hero.style.setProperty('--scan-trail', trail.length ? trail.map(point => {
        const opacity = .2 * (1 - (time - point.time) / 650) ** 2;
        return `radial-gradient(circle 360px at ${point.x}px ${point.y}px, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,${opacity * .65}) 28%, rgba(0,0,0,${opacity * .22}) 58%, transparent 100%)`;
      }).join(', ') : 'linear-gradient(transparent, transparent)');
      const blend = 1 - Math.exp(-Math.min(time - lastTime || 16, 64) / 65);
      lastTime = time;
      x += (targetX - x) * blend;
      y += (targetY - y) * blend;
      hero.style.setProperty('--scan-x', `${x}px`);
      hero.style.setProperty('--scan-y', `${y}px`);
      frame = active && (Math.hypot(targetX - x, targetY - y) > .2 || trail.length > 0)
        ? requestAnimationFrame(paint) : 0;
    };
    const leave = () => {
      active = false;
      hero.classList.remove('is-scanning');
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      trail = [];
      lastTrailTime = 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;
      if (!active) {
        x = targetX;
        y = targetY;
        active = true;
        hero.style.removeProperty('--scan-trail');
        hero.style.setProperty('--scan-x', `${x}px`);
        hero.style.setProperty('--scan-y', `${y}px`);
        hero.classList.add('is-scanning');
      }
      if (!frame) frame = requestAnimationFrame(paint);
    };
    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerleave', leave);
    hero.addEventListener('pointercancel', leave);
    window.addEventListener('blur', leave);
    window.addEventListener('scroll', leave, { passive: true });
    media.addEventListener('change', leave);
    return () => {
      leave();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
      hero.removeEventListener('pointercancel', leave);
      window.removeEventListener('blur', leave);
      window.removeEventListener('scroll', leave);
      media.removeEventListener('change', leave);
    };
  }, []);

  function submitQuestion(value: string) {
    const nextQuestion = value.trim();
    if (!nextQuestion) return;
    ask(nextQuestion);
    setQuestion('');
  }

  return (
    <section ref={heroRef} className="hero" data-header-theme="inverse" aria-label="香港城市与财富科技平台">
      <div className="hero-digital-scan" aria-hidden="true">
        <div className="hero-digital-field">{Array.from({ length: 240 }, (_, index) => {
          const codes = index % 3 === 0 ? ['01', '10', '11', '00', '01'] : index % 3 === 1 ? ['10', '00', '01', '11', '10'] : ['001', '110', '010', '101', '001'];
          return <span key={index}><b style={{ animationDelay: `${-(index % 11) * .27}s` }}>{codes.map((code, row) => <i key={row}>{code}</i>)}</b></span>;
        })}</div>
      </div>
      <div className="hero-grid">
        <motion.div className="hero-copy" variants={heroEntrance} initial={reduceMotion ? false : 'hidden'} animate="visible">
          <motion.p className="hero-kicker" variants={heroEntranceItem}>WEB2 × WEB3 × AI</motion.p>
          <motion.h1 variants={heroEntranceItem}>AI 驱动的 Web5 财富科技平台</motion.h1>
          <motion.p variants={heroEntranceItem}>您想了解哪类财富科技能力？我可以帮您快速找到对应的产品与解决方案</motion.p>
          <motion.div className="hero-ai-chat" aria-label="Finloop AI 业务助手" variants={heroEntranceItem}>
            <form autoComplete="off" onSubmit={event => { event.preventDefault(); submitQuestion(question); }}><label className="sr-only" htmlFor="hero-ai-question">输入您的业务问题</label><input id="hero-ai-question" name="finloop-business-question" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} value={question} onChange={event => setQuestion(event.target.value)} placeholder="请输入您的角色或您的业务问题，我们为你快速解决" /><button type="submit" aria-label="发送问题" disabled={isLoading || !question.trim()}><HeroIcon icon={ArrowUp} /></button></form>
            <div className="hero-ai-chat-footer">
              <div className="hero-ai-suggestions" aria-label="示例问题">{heroSuggestionBatches[suggestionBatch].map(item => <button type="button" key={item} onClick={() => submitQuestion(item)}>{item}</button>)}</div>
              <div className="hero-ai-tools"><button className="hero-ai-shuffle finloop-api-entry" type="button" aria-label="API Key 设置" onClick={openApiSettings}>API Key</button>
              <button className="hero-ai-shuffle" type="button" onClick={() => setSuggestionBatch(current => (current + 1) % heroSuggestionBatches.length)}><HeroIcon icon={RefreshCw} />换一批</button></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function CoverageSection() {
  const [activeAsset, setActiveAsset] = useState('cash');

  return (
    <section className="coverage section-pad" id="coverage">
      <div className="coverage-header">
        <div><h2>覆盖多元投资需求的财富产品货架</h2>
          <p>连接现金管理、公募基金、私募基金、债券、结构性产品、保险、虚拟资产与 RWA 等产品类别，为不同客户与资产配置场景提供多元选择。</p>
        </div>
        <a className="coverage-overview-link" href="/products">查看全部金融产品 <i data-lucide="arrow-right"></i></a>
      </div>

      <div className="product-universe" data-active={activeAsset}>
        <div className="product-globe" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
        <div className="product-orbits" aria-hidden="true"><i></i><i></i><i></i></div>
        <div className="product-nodes" aria-label="金融产品类别">
          {assetTabs.map(([id, label], index) => (
            <button
              type="button"
              key={id}
              className={`product-node node-${index + 1}${activeAsset === id ? ' active' : ''}`}
              aria-pressed={activeAsset === id}
              onClick={() => setActiveAsset(id)}
              onMouseEnter={() => setActiveAsset(id)}
              onFocus={() => setActiveAsset(id)}
            >
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <div><p>{assetContent[id][1]}</p><small>{assetContent[id][2]}</small></div>
            </button>
          ))}
        </div>
        <a className="product-universe-entry" href="/products">进入金融产品总览 <i data-lucide="arrow-right"></i></a>
      </div>
    </section>
  );
}

type SolutionItem = [string, string, string];

const solutionImages: Record<string, { src: string; alt: string }> = {
  'digital-wealth-management': {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82',
    alt: '数字财富管理团队协作场景',
  },
  'embedded-wealth': {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    alt: '嵌入式财富服务数字场景',
  },
  'corporate-treasury': {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业财富管理场景',
  },
  'rwa-web3': {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    alt: 'RWA 与 Web3 技术基础设施',
  },
  'enterprise-ai': {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业 AI 落地项目协作场景',
  },
  wealth: {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82',
    alt: '财富与资产管理团队协作场景',
  },
  broker: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=82',
    alt: '证券与经纪机构办公建筑',
  },
  bank: {
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=82',
    alt: '银行数字金融服务场景',
  },
  platform: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    alt: '支付与数字平台的数据界面',
  },
  digital: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    alt: '数字资产技术基础设施',
  },
  enterprise: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业财富管理协作空间',
  },
  'fde-ai': {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业 AI 落地项目协作场景',
  },
};

type SolutionGroup = { id: string; label: string; title: string; description: string; items: SolutionItem[] };

export function SolutionsSection({ groups }: { groups: SolutionGroup[] }) {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? '');
  const activeGroup = groups.find(group => group.id === activeGroupId) ?? groups[0];
  const items = activeGroup?.items ?? [];
  const [activeId, setActiveId] = useState(items[0]?.[0] ?? '');
  const activeIndex = Math.max(0, items.findIndex(([id]) => id === activeId));
  const activeItem = items[activeIndex] ?? items[0] ?? ['', '', ''];
  const activeImage = solutionImages[activeItem[0]] ?? solutionImages.wealth;

  useEffect(() => {
    if (items.length < 2) return undefined;
    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      setActiveId(items[nextIndex][0]);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [activeId, activeIndex, items]);

  useEffect(() => setActiveId(items[0]?.[0] ?? ''), [activeGroupId]);

  return (
    <section className="solutions section-pad" id="solutions">
      <div className="solution-showcase">
        <div className="solution-copy">
          <div className="solution-heading">
            <h2>{activeGroup?.title}</h2>
            <p>{activeGroup?.description}</p>
          </div>
          <div className="solution-mode-tabs" role="tablist" aria-label="解决方案分类方式">
            {groups.map(group => <button key={group.id} type="button" role="tab" aria-selected={group.id === activeGroupId} onClick={() => setActiveGroupId(group.id)}>{group.label}</button>)}
          </div>
          <div className="solution-accordion">
            {items.map(([id, name, desc], index) => {
              const isActive = activeId === id;
              return (
                <article
                  className={`solution-option${isActive ? ' active' : ''}`}
                  key={id}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`solution-detail-${id}`}
                    onClick={() => setActiveId(id)}
                  >
                    <span>0{index + 1}</span>
                    <strong>{name}</strong>
                    <i aria-hidden="true">{isActive ? '−' : '+'}</i>
                  </button>
                  <div className="solution-option-detail" id={`solution-detail-${id}`} aria-hidden={!isActive}>
                    <p>{desc}</p>
                    <a href={`/solutions/${id}`}>了解方案 <i data-lucide="arrow-right"></i></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <figure className="solution-media">
          <img key={activeItem[0]} src={activeImage.src} alt={activeImage.alt} />
          <figcaption>
            <span>0{activeIndex + 1}</span>
            <strong>{activeItem[1]}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
