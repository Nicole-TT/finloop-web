import { Link } from 'react-router-dom';

const changes = [
  ['01', '产品类别', '财富产品与服务范围持续扩展'],
  ['02', '数字渠道', 'Web、App 与新型财富触点持续演进'],
  ['03', '服务模式', '从产品提供向数字投资服务延伸'],
  ['04', '新技术', 'AI 与数字资产进入金融业务'],
  ['05', '上线速度', '新业务需要更快进入真实运营'],
];

const outcomes = [
  ['01', 'Expand Wealth Capabilities', '扩展财富能力', '在现有业务体系中连接更多金融产品与财富流程。'],
  ['02', 'Integrate with Existing Systems', '更灵活地集成', '通过 API 与平台能力与机构已有系统协同。'],
  ['03', 'Build Digital Wealth Experiences', '建设数字财富体验', '支持机构新的 Web、App 与财富业务渠道。'],
];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="bank-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, variant }: { title: string; variant: 'catalog' | 'integration' | 'channel' }) {
  return <div className={`bank-ui bank-ui-${variant}`} role="img" aria-label={`${title}界面占位`}>
    <header><i /><strong>{title}</strong><span /></header>
    <div className="bank-ui-body">
      <aside>{[1, 2, 3, 4].map(i => <i key={i} />)}</aside>
      <div className="bank-ui-main">
        <div className="bank-ui-stats">{[1, 2, 3].map(i => <i key={i} />)}</div>
        <div className="bank-ui-content"><section>{[1, 2, 3, 4].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</figure></div>
      </div>
    </div>
  </div>;
}

export function BankSolutionPage() {
  return <main className="bank-page" id="main">
    <section className="bank-hero" data-header-theme="inverse">
      <div className="bank-shell bank-hero-grid">
        <div className="bank-hero-copy">
          <p className="bank-label">BANKS &amp; FINANCIAL INSTITUTIONS</p>
          <h1>银行及金融机构解决方案</h1>
          <p>通过财富核心、开放接口与金融产品能力，帮助银行及金融机构在现有技术体系中更灵活地扩展财富产品和数字投资服务。</p>
          <div className="bank-actions"><Link className="button button-accent" to="/contact">预约咨询 →</Link></div>
        </div>
        <div className="bank-hero-visual" aria-label="Finloop 作为现有银行系统之上的财富扩展层">
          <div className="bank-core"><small>EXISTING INFRASTRUCTURE</small><strong>机构现有核心系统</strong><span>账户 · 客户 · 业务系统</span></div>
          <div className="bank-bridge"><span>API / INTEGRATION</span><i /></div>
          <div className="bank-extension"><small>WEALTH EXTENSION LAYER</small><strong>Finloop Wealth Capabilities</strong><div><span>Product</span><span>Transaction</span><span>Digital Channel</span></div></div>
        </div>
      </div>
    </section>

    <section className="bank-section bank-white"><div className="bank-shell">
      <SectionHead title="财富业务持续变化，核心系统不需要每次都重新建设" copy="在保留现有技术体系的同时，通过可组合的能力层响应产品、渠道与服务模式的持续变化。" />
      <div className="bank-change-grid"><div className="bank-change-lead"><small>EXTEND, NOT REPLACE</small><strong>不替换核心<br />灵活扩展财富能力</strong></div><div className="bank-change-list">{changes.map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div>
    </div></section>

    <section className="bank-section"><div className="bank-shell"><SectionHead title="将开放架构转化为三项业务成果" /><div className="bank-outcomes">{outcomes.map(([n,en,t,p])=><article key={n}><span>{n}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="bank-section bank-flow-section" id="workflow"><div className="bank-shell"><SectionHead title="在现有金融基础设施之上，延伸到最终客户" copy="Finloop 位于机构已有系统与数字渠道之间，让产品、账户与交易能力通过统一链路被复用。" /><div className="bank-workflow">{['Existing Banking Infrastructure','API / Integration','Finloop Wealth Capabilities','Product / Account / Transaction','Digital Channel','Customer'].map((x,i)=><article className={i===2?'active':''} key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <section className="bank-section bank-white" id="capabilities"><div className="bank-shell">
      <SectionHead title="一套能力底座，支持不同的财富建设路径" copy="按机构已有架构与业务目标，组合产品能力、开放集成与数字渠道。" />
      <div className="bank-capability"><div className="bank-capability-copy"><span>01</span><small>WEALTH CAPABILITIES</small><h3>财富能力接入</h3><p>连接财富产品、产品管理、账户相关能力以及投资和交易服务。</p><div>{['财富产品','产品管理','账户能力','投资与交易'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="财富能力管理" variant="catalog" /></div>
      <div className="bank-capability reverse"><div className="bank-capability-copy"><span>02</span><small>OPEN INTEGRATION</small><h3>开放 API 与系统集成</h3><p>通过开放接口连接不同业务系统，并适配 SaaS 或本地部署等企业架构场景。</p><div>{['API','系统连接','SaaS','On-premise'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="API 与集成管理" variant="integration" /></div>
      <div className="bank-capability"><div className="bank-capability-copy"><span>03</span><small>DIGITAL WEALTH</small><h3>数字财富建设</h3><p>支持机构自有财富终端、白标体验、新业务渠道与财富运营平台。</p><div>{['自有终端','White-label','新业务渠道','财富运营'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="数字财富终端" variant="channel" /></div>
    </div></section>

    <section className="bank-section bank-stack-section"><div className="bank-shell"><SectionHead title="Powered by Finloop" copy="将机构现有系统、财富核心、交易运营与金融产品生态按层连接。" /><div className="bank-stack">{[['机构现有系统','EXISTING SYSTEMS'],['API / Integration Layer','OPEN CONNECTION'],['FinOne','WEALTH CORE'],['FinMix','TRADING & OPERATIONS'],['产品与金融机构生态','FINANCIAL ECOSYSTEM']].map(([t,s],i)=><article className={i===1?'active':''} key={t}><span>{String(i+1).padStart(2,'0')}</span><small>{s}</small><strong>{t}</strong><i>{i<4?'↓':'OPEN ECOSYSTEM'}</i></article>)}</div></div></section>

    <section className="bank-section"><div className="bank-shell"><SectionHead title="面向机构架构的企业级能力" copy="围绕部署、隔离与业务连续性要求，为银行及大型金融机构提供可适配的技术基础。" /><div className="bank-trust">{[['01','Deployment','支持 SaaS 与本地部署等企业架构场景。'],['02','Availability','围绕机构业务的稳定运行要求设计。'],['03','Tenant & Isolation','支持多租户与数据隔离能力。'],['04','Business Continuity','结合项目要求规划业务连续性机制。'],['05','Financial Infrastructure','连接金融产品、交易与机构运营体系。']].map(([n,t,p])=><article key={n}><span>{n}</span><small>{t}</small><p>{p}</p></article>)}</div></div></section>

    <section className="bank-cta"><div className="bank-shell"><h2>在现有金融体系上，<br />扩展下一代财富能力</h2><p>与 Finloop 机构团队讨论适合现有系统与业务路径的数字财富方案。</p><Link className="button button-light" to="/contact">讨论银行数字财富方案 →</Link></div></section>
  </main>;
}
