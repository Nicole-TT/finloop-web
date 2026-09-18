import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const wealthLifecycle = [
  { title: '洞察', description: '发现客户需求与市场信号。', ability: '智能筛选' },
  { title: '理解', description: '形成客户、产品与风险认知。', ability: '智能 KYP' },
  { title: '评估', description: '分析产品、组合与风险表现。', ability: '智能投研' },
  { title: '匹配', description: '辅助产品匹配与配置判断。', ability: '配置辅助' },
  { title: '触达', description: '生成更贴近客户的沟通内容。', ability: '智能营销' },
  { title: '运营', description: '持续分析绩效与业务数据。', ability: '智能数据分析' },
];

const faiAgents = [
  { name: '产品尽调 Agent', description: '读取产品资料，提取关键条款、风险因素与 KYP 要点。' },
  { name: '资产筛选 Agent', description: '按业务目标与筛选条件，从金融产品中发现值得关注的资产。' },
  { name: '新闻资讯 Agent', description: '聚合并梳理市场资讯，识别可能影响产品、资产或客户的变化。' },
  { name: '视觉营销 Agent', description: '将金融观点、产品材料与数据组织为更易理解的内容方案。' },
  { name: '更多 Agent', description: '' },
  { name: 'FAI运营中台', description: '' },
];

function Head({ title, copy }: { title: string; copy?: string }) {
  return <div className="ai-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyWorkspace({ title, output }: { title: string; output: string }) {
  return <div className="ai-grey-ui" aria-label={`${title}界面占位`}>
    <aside><b>AI</b>{[1, 2, 3, 4].map(i => <i key={i} />)}</aside>
    <div className="ai-grey-main"><header><strong>{title}</strong><span /></header><div className="ai-grey-metrics"><i /><i /><i /></div><div className="ai-grey-content"><section><span /><span /><span /><span /></section><figure><small>{output}</small><i /><i /><i /><i /></figure></div></div>
  </div>;
}

export function FinloopAIPage() {
  const appStackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: appStackRef, offset: ['start 96px', 'end 780px'] });
  const maasScale = useTransform(scrollYProgress, [0, .45, .9], reduceMotion ? [1, 1, 1] : [1, .955, .91]);
  const paasScale = useTransform(scrollYProgress, [.1, .45, .9], reduceMotion ? [1, 1, 1] : [1, 1, .955]);

  return <main className="ai-page" id="main">
    <section className="ai-hero"><div className="ai-shell ai-hero-grid">
      <div className="ai-hero-copy"><h1>Finloop AI</h1><p>让 AI 真正进入金融业务</p><span className="ai-hero-intro">理解金融问题，调用专业能力，并将结果带入下一步业务流程。</span></div>
      <div className="ai-demo">
        <form className="ai-demo-form" action="https://kamino.finloop.ai/login"><input type="text" aria-label="输入金融问题或任务" placeholder="问一个金融问题，或交给 AI 一个任务…"/><span className="ai-demo-options" aria-hidden="true"><i>产品研究</i><i>投资分析</i><i>资讯洞察</i><i>风险识别</i></span><button type="submit">开始任务 →</button></form>
      </div>
    </div></section>

    <section className="ai-section ai-more" id="overview"><div className="ai-shell"><Head title="建立在财富专业知识之上的金融智能" copy="Finloop AI 将财富管理经验、金融数据与业务工作流连接起来，让 AI 不止理解问题，更能在真实业务环境中完成分析、协作与后续执行。" />
      <div className="ai-intelligence-map"><div className="ai-intelligence-sources">{[
        ['◎','财富专业智能','基于财富管理方法论与专业知识体系，理解产品、客户与投资场景，提供更贴近真实业务的判断能力。'],
        ['▤','金融数据连接','整合多源数据，贯通客户、账户、资产、产品、交易与市场信息，构建统一、可追溯的数据基础。'],
        ['⌘','工作流智能','将 AI 能力嵌入研究、分析、审批与运营流程，实现任务自动化、协同处理与人机配合。'],
      ].map(([icon,title,copy])=><article key={title}><i aria-hidden="true">{icon}</i><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="ai-intelligence-rail" aria-hidden="true"><span/><span/><span/></div><article className="ai-intelligence-core"><i aria-hidden="true">✦</i><div><h3>Finloop 金融智能中枢</h3><p>连接数据、模型、知识与工作流，让专业能力持续进入业务流程。</p></div></article></div>
    </div></section>

    <section className="ai-section ai-work" id="capabilities"><div className="ai-shell"><Head title="让 AI 贯穿财富管理全生命周期" copy="从发现需求、理解客户和评估产品，到方案匹配、客户触达与持续运营，Finloop AI 将专业能力嵌入每个关键环节，让信息处理更高效、判断依据更清晰、后续行动更连贯。" />
      <div className="ai-lifecycle-system">
        <div className="ai-lifecycle-power"><div><small>FINLOOP AI</small><strong>金融智能能力层</strong></div><div>{['数据','模型','知识','工作流'].map(item=><span key={item}>{item}</span>)}</div></div>
        <div className="ai-lifecycle-connectors" aria-hidden="true">{wealthLifecycle.map(item=><i key={item.title} />)}</div>
        <div className="ai-lifecycle">{wealthLifecycle.map(item=><article key={item.title}><header><h3>{item.title}</h3></header><p>{item.description}</p></article>)}</div>
      </div>
    </div></section>

    <section className="ai-section ai-apps ai-apps-compare" id="applications"><div className="ai-shell"><Head title="从底层 AI 能力，到真正可用的业务产品" copy="Finloop AI 既可以成为独立 AI 应用，也可以直接进入现有金融产品 Workflow。" /><div className="ai-stack-stage" ref={appStackRef}><div className="ai-app-grid">
        <motion.div className="ai-app-combo" data-ai-layer="AI 应用层">
          <article className="ai-app-feature"><div><h3>星路通</h3><p>面向金融专业工作的 AI 工作台</p><span>KYP · GAP · 风险 · 市场洞察</span></div><GreyWorkspace title="星路通" output="AI workflow" /></article>
          <div className="ai-embedded-products">{[['FinEAM','/products/fineam'],['星企通','/products/xingqitong'],['Webportal','/products/web-portal'],['FinOne','/products/finone'],['支付平台','/contact'],['AI 股票柜台','/contact']].map(([name,href],i)=><Link key={name} to={href}><span>{String(i+1).padStart(2,'0')}</span><small>AI 能力嵌入</small><strong>{name}</strong></Link>)}</div>
        </motion.div>
        <motion.article className="ai-app-wide" data-ai-layer="AI PaaS层" style={{ scale: paasScale }}><div><h3>FAI平台</h3><p>将 AI 变成企业组织能力</p><span>企业资料 · 任务 · AI 员工 · Workflow</span></div><div className="ai-fai-agents">{faiAgents.map((agent,i)=><section key={agent.name}><span>{String(i+1).padStart(2,'0')}</span><h4>{agent.name}</h4>{agent.description && <p>{agent.description}</p>}</section>)}</div></motion.article>
        <motion.article className="ai-app-wide" data-ai-layer="AI MaaS层" style={{ scale: maasScale }}><div><h3>星智通</h3><p>统一连接和管理多模型能力</p><span>模型市场 · 统一 API · 智能路由 · 成本治理</span></div><GreyWorkspace title="星智通" output="AI workflow" /></motion.article>
      </div></div></div></section>

    <section className="ai-cta"><div className="ai-shell"><h2>找到适合您业务的<br />AI 路径</h2><p>无论您需要模型基础设施、金融专业 Agent，还是希望将 AI 带入企业实际流程，Finloop AI 都可以从底层模型到最终应用提供相应能力。</p><div><Link className="button button-light" to="/contact">讨论 AI 业务场景 →</Link><a href="#applications">探索 AI 产品 ↓</a></div></div></section>
  </main>;
}
