import { Link } from 'react-router-dom';

const frictions = ['资金分散', '闲置资金', '投资和银行信息分离', '资金数据依赖人工汇总', '流动性与投资管理难平衡'];
const outcomes = [
  ['01', 'See Cash Clearly', '看清企业资金状态', '将账户、资金与资产信息归集到统一视图。'],
  ['02', 'Manage Liquidity', '持续管理流动性', '围绕日常资金需要，保持现金管理与使用节奏清晰。'],
  ['03', 'Connect Cash to Investment', '连接现金与投资', '将适当的闲置资金连接到企业投资产品与流程。'],
];
const workflow = ['企业数字开户', '银行 / 资金账户', '资金进入', 'Cash Visibility', '现金管理 / 产品', '风险评估', '投资', 'Asset Monitoring', '赎回 / 资金退出'];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="enterprise-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, variant }: { title: string; variant: 'account' | 'cash' | 'assets' }) {
  return <div className={`enterprise-ui enterprise-ui-${variant}`} role="img" aria-label={`${title}界面占位`}>
    <header><i /><strong>{title}</strong><span /></header>
    <div className="enterprise-ui-body"><aside>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside><div className="enterprise-ui-canvas">
      <div className="enterprise-ui-metrics">{[1, 2, 3].map(i => <i key={i} />)}</div>
      <div className="enterprise-ui-content"><section>{[1, 2, 3, 4].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5, 6].map(i => <i key={i} />)}</figure></div>
    </div></div>
  </div>;
}

export function EnterpriseSolutionPage() {
  return <main className="enterprise-page" id="main">
    <section className="enterprise-hero" data-header-theme="inverse"><div className="enterprise-shell enterprise-hero-grid">
      <div className="enterprise-hero-copy"><p className="enterprise-label">CORPORATE CLIENTS</p><h1>企业客户解决方案</h1><p>将企业开户、资金、现金管理、投资和资产信息连接到统一数字平台，帮助财务团队更清楚、更高效地管理企业资金。</p><div className="enterprise-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div></div>
      <div className="enterprise-hero-visual" aria-label="企业现金、投资与资产统一管理示意"><div className="enterprise-hero-balance"><small>CASH VISIBILITY</small><strong>企业资金全景</strong><span>账户 · 现金 · 投资 · 资产</span></div><div className="enterprise-hero-path"><i /><span>统一连接</span><i /></div><div className="enterprise-hero-modules"><article><small>LIQUIDITY</small><strong>现金管理</strong></article><article><small>INVESTMENT</small><strong>企业投资</strong></article><article><small>ASSETS</small><strong>资产查看</strong></article></div></div>
    </div></section>

    <section className="enterprise-section enterprise-white"><div className="enterprise-shell"><SectionHead title="企业有现金，不代表资金正在被有效管理" copy="当账户、投资与资金信息分散在不同系统和表格中，财务团队很难持续掌握真实的资金状态。" /><div className="enterprise-frictions"><div className="enterprise-friction-lead"><small>CASH ≠ VISIBILITY</small><strong>从拥有现金<br />到看清现金</strong></div><div>{frictions.map((item, i) => <article key={item}><span>{String(i + 1).padStart(2, '0')}</span><h3>{item}</h3></article>)}</div></div></div></section>

    <section className="enterprise-section"><div className="enterprise-shell"><SectionHead title="让企业资金管理形成三个连续结果" /><div className="enterprise-outcomes">{outcomes.map(([n, en, title, copy]) => <article key={n}><span>{n}</span><small>{en}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="enterprise-section enterprise-flow-section" id="workflow"><div className="enterprise-shell"><SectionHead title="从企业开户到资金退出，沿一条链路持续管理" copy="把开户、资金可见性、流动性管理、投资与资产查看连接起来，减少业务环节之间的信息断点。" /><div className="enterprise-workflow">{workflow.map((item, i) => <article className={i === 3 || i === 7 ? 'active' : ''} key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < workflow.length - 1 && <i>→</i>}</article>)}</div></div></section>

    <section className="enterprise-section enterprise-white" id="capabilities"><div className="enterprise-shell"><SectionHead title="围绕企业资金，连接账户、投资与资产视图" copy="三组能力共享同一条企业资金主线，并根据财务团队的实际管理需要组合使用。" />
      <div className="enterprise-capability"><div className="enterprise-capability-copy"><span>01</span><small>CORPORATE ACCOUNT &amp; FUNDS</small><h3>企业账户与资金</h3><p>支持企业数字开户及持续资金操作，让企业资料、账户与入出金进入统一流程。</p><div>{['企业信息', '股东 / UBO', '税务', '绑卡', '入金 / 出金'].map(x => <i key={x}>{x}</i>)}</div></div><GreyUI title="企业账户与资金" variant="account" /></div>
      <div className="enterprise-capability reverse"><div className="enterprise-capability-copy"><span>02</span><small>CASH &amp; INVESTMENT</small><h3>现金与投资管理</h3><p>以流动性管理为优先，连接现金管理产品、基金浏览、风险测评与申购赎回流程。</p><div>{['现金管理产品', '基金浏览', '风险测评', '申购 / 赎回'].map(x => <i key={x}>{x}</i>)}</div></div><GreyUI title="现金与投资管理" variant="cash" /></div>
      <div className="enterprise-capability"><div className="enterprise-capability-copy"><span>03</span><small>ASSET OVERVIEW</small><h3>企业资产全景</h3><p>集中查看企业资产、投资、交易与资金明细，让财务团队持续掌握企业资金状态。</p><div>{['资产', '投资', '交易', '资金明细', '基金收益相关信息'].map(x => <i key={x}>{x}</i>)}</div></div><GreyUI title="企业资产全景" variant="assets" /></div>
    </div></section>

    <section className="enterprise-section enterprise-stack-section"><div className="enterprise-shell"><SectionHead title="Powered by Finloop" copy="从企业使用体验到财富核心、交易基础设施与金融产品，形成完整的能力层级。" /><div className="enterprise-stack">{[['星企通', 'CORPORATE TREASURY EXPERIENCE'], ['FinOne', 'WEALTH CORE'], ['Trading & Financial Infrastructure', 'TRANSACTION & OPERATIONS'], ['Wealth Products', 'FINANCIAL PRODUCTS']].map(([title, label], i) => <article className={i === 0 ? 'active' : ''} key={title}><span>{String(i + 1).padStart(2, '0')}</span><small>{label}</small><strong>{title}</strong><i>{i < 3 ? '↓' : 'CONNECTED'}</i></article>)}</div></div></section>

    <section className="enterprise-section"><div className="enterprise-shell"><SectionHead title="企业资金管理，不止是一个产品入口" /><div className="enterprise-why">{[['01', '企业直接使用', '以完整独立平台承接企业财务团队的日常使用。'], ['02', '资金 + 投资', '将现金管理与财富投资连接在同一条业务链路。'], ['03', '财富产品基础', '连接真实金融产品与对应的投资流程。'], ['04', '数字化流程', '从企业开户到资产查看形成连续业务链路。']].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="enterprise-section enterprise-case-section"><div className="enterprise-shell"><SectionHead title="让分散的企业资金信息回到同一处" /><div className="enterprise-case"><div><small>CORPORATE SCENARIO</small><strong>跨境 / 中型企业</strong><p>将日常资金管理与企业投资从分散工具迁移到连续的数字平台。</p></div><ol><li><span>BEFORE</span><p>多个银行账户 + Excel + 人工投资记录</p></li><li><span>AFTER</span><p>Cash → Investment → Assets 集中进入星企通</p></li></ol></div></div></section>

    <section className="enterprise-cta"><div className="enterprise-shell"><h2>让企业资金管理<br />更加清晰、连续</h2><p>与 Finloop 团队讨论适合企业财务、资金与投资管理需求的独立平台方案。</p><Link className="button button-light" to="/contact">咨询企业资金管理方案 →</Link></div></section>
  </main>;
}
