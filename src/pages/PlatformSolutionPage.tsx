import { Link } from 'react-router-dom';

const capabilities = [
  { title: '拓展支付之外的资金增值场景', copy: '通过现金管理及投资产品，让用户在现有支付与跨境资金服务之外获得更多资金管理选择。', items: ['货币基金', '现金管理', '灵活申赎', '收益展示', '产品配置', '资金管理'], links: [['嵌入式财富', '/solutions/embedded-wealth']], kind: 'cash', core: 'CASH+' },
  { title: '无需重建 App，快速上线财富业务', copy: '通过 H5 或模块化方式，将开户、产品、交易及资产服务嵌入现有 App 或 Web，保持客户原有使用路径和品牌体验。', items: ['H5 嵌入', '品牌适配', '开户', '产品展示', '申购与赎回', '持仓', '资产展示'], links: [['嵌入式财富', '/solutions/embedded-wealth']], kind: 'h5', core: 'H5' },
  { title: '让财富能力成为平台原生能力', copy: '面向拥有成熟技术团队的平台，通过 API 将财富账户、产品、交易及资产数据直接接入现有业务系统。', items: ['开户 API', '产品 API', '账户 API', '订单 API', '交易 API', '资产 API', '数据 API'], links: [['API 与技术平台', '/technology-platform']], kind: 'api', core: 'API' },
  { title: '在用户前端之外，管理完整财富业务', copy: '通过统一中台进行产品、用户、订单和运营配置，让嵌入式财富服务持续可运营、可扩展。', items: ['产品配置', '产品范围管理', '用户管理', '订单管理', '运营管理', '权限配置', '数据查看'], links: [['FinOne', '/products/finone']], kind: 'core', core: 'FinOne' },
  { title: '用 AI 提升财富服务体验与运营效率', copy: '将 AI 接入产品理解、客户服务与用户运营流程，为平台补充智能交互和自动化能力。', items: ['产品理解', '智能问答', '内容生成', '客户服务', '用户运营', '智能 Agent'], links: [['Finloop AI', '/ai']], kind: 'ai', core: 'AI' },
];

const plans = [
  { title: '大型平台 / 成熟技术团队', copy: '希望财富服务深度融入现有产品与系统。', stack: ['API 原生集成', '财富基础设施', 'FinOne', 'AI'] },
  { title: '快速嵌入型平台', copy: '希望保持现有平台体验，并快速上线。', stack: ['财富 H5', 'FinOne', '标准 API'] },
  { title: '轻量业务验证', copy: '希望以较轻的投入验证财富业务需求。', stack: ['标准嵌入式财富服务', '标准产品能力'] },
];

function EmbedVisual({ kind, core }: { kind: string; core: string }) {
  const labels: Record<string, string[]> = {
    cash: ['支付账户', '现金管理', '投资产品'],
    h5: ['您的 App', '财富 H5', '账户与资产'],
    api: ['平台系统', '标准 API', '财富基础设施'],
    core: ['用户前端', 'FinOne', '产品 · 订单 · 运营'],
    ai: ['客户场景', 'AI', '知识 · 服务 · 运营'],
  };
  return <figure className={`psf-visual ${kind}`} aria-label={`${core} 接入结构`}><div className="psf-visual-line" />{labels[kind].map((label, index) => <div className={index === 1 ? 'active' : ''} key={label}><small>0{index + 1}</small><strong>{index === 1 ? core : label}</strong>{index === 1 && <span>{label}</span>}</div>)}</figure>;
}

export function PlatformSolutionPage() {
  return <main className="psf-page" id="main">
    <section className="psf-hero" data-header-theme="inverse"><div className="psf-shell psf-hero-grid"><div><h1>将财富服务嵌入<br />您已有的平台</h1><p>面向支付、跨境支付及拥有自有用户体系的平台机构，无需独立建设完整财富基础设施，即可增加现金管理、投资与财富服务。</p><div className="psf-actions"><a className="button button-accent" href="#capabilities">探索嵌入方式</a><Link to="/contact">联系我们</Link></div></div><div className="psf-hero-device" aria-label="财富服务嵌入平台示意"><div className="psf-device-shell"><small>YOUR PLATFORM</small><strong>原有用户体验</strong><span>支付 · 账户 · 用户</span><div className="psf-entry">WEALTH ENTRY <b>→</b></div></div><div className="psf-wealth-layer"><small>EMBEDDED</small><strong>Wealth</strong><span>产品 · 投资 · 资产服务</span></div></div></div></section>

    <section className="psf-intro" id="capabilities"><div className="psf-shell"><h2>从一个入口，延伸完整财富服务</h2><p>根据平台现有技术能力与上线目标，选择标准嵌入、模块化 H5 或 API 原生集成，并通过统一中台持续运营。</p></div></section>

    <div className="psf-capabilities">{capabilities.map((item, index) => <section className={`psf-capability${index % 2 ? ' reverse' : ''}`} key={item.title}><div className="psf-shell psf-capability-grid"><div className="psf-copy"><h2>{item.title}</h2><p>{item.copy}</p><div className="psf-tags">{item.items.map(value => <span key={value}>{value}</span>)}</div><div className="psf-links">{item.links.map(([label, href]) => <Link to={href} key={label}>{label} <span>→</span></Link>)}</div></div><EmbedVisual kind={item.kind} core={item.core} /></div></section>)}</div>

    <section className="psf-plans"><div className="psf-shell"><header><h2>根据平台基础选择接入方式</h2><p>接入深度取决于现有产品体验、技术团队与业务验证阶段，无需采用相同的建设路径。</p></header><div className="psf-plan-grid">{plans.map(plan => <article key={plan.title}><h3>{plan.title}</h3><p>{plan.copy}</p><div>{plan.stack.map((item, index) => <span key={item}>{index > 0 && <i>＋</i>}{item}</span>)}</div></article>)}</div></div></section>

    <section className="psf-cta"><div className="psf-shell"><div><h2>把财富服务带入<br />您已有的用户场景</h2><p>与 Finloop 团队讨论适合现有平台、技术架构与业务阶段的接入方式。</p></div><Link className="button button-light" to="/contact">联系我们</Link></div></section>
  </main>;
}
