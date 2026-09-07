import { Link } from 'react-router-dom';

const changes = [
  ['01', '客户基础', '复用已有银行或证券客户关系与账户基础'],
  ['02', '产品类别', '连接基金、债券、结构性产品等财富产品'],
  ['03', '交易能力', '让产品发现、询价、订单与执行进入连续流程'],
  ['04', '开放集成', '通过接口与机构已有核心及业务系统协同'],
  ['05', '数字渠道', '将财富服务延伸至 Web、App 与客户终端'],
];

const outcomes = [
  ['01', 'BROKERAGE EXPANSION', '券商财富业务扩展', '基于已有证券客户与账户，增加财富产品、专业交易和数字客户体验。'],
  ['02', 'BANKING INTEGRATION', '银行开放架构集成', '保留现有核心系统，通过 API 与平台能力扩展数字财富业务。'],
  ['03', 'SHARED FOUNDATION', '共用财富技术底座', '两类机构均可按需组合财富核心、交易运营、产品生态与数字渠道。'],
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
          <p className="bank-label">BANKING · SECURITIES · FINANCIAL INSTITUTIONS</p>
          <h1>银行、证券及金融机构解决方案</h1>
          <p>基于机构已有客户、账户与核心系统，连接财富产品、专业交易和数字渠道，帮助银行、券商及金融机构更灵活地扩展数字财富业务。</p>
          <div className="bank-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div>
        </div>
        <div className="bank-hero-visual" aria-label="Finloop 作为金融机构现有系统之上的财富扩展层">
          <div className="bank-core"><small>EXISTING INFRASTRUCTURE</small><strong>机构现有核心系统</strong><span>账户 · 客户 · 业务系统</span></div>
          <div className="bank-bridge"><span>API / INTEGRATION</span><i /></div>
          <div className="bank-extension"><small>WEALTH EXTENSION LAYER</small><strong>Finloop Wealth Capabilities</strong><div><span>Product</span><span>Transaction</span><span>Digital Channel</span></div></div>
        </div>
      </div>
    </section>

    <section className="bank-section bank-white"><div className="bank-shell">
      <SectionHead title="从现有客户与系统出发，扩展数字财富业务" copy="券商可基于已有证券客户与账户扩展财富服务；银行可保留核心系统，通过开放集成连接新的产品、交易与数字渠道。" />
      <div className="bank-change-grid"><div className="bank-change-lead"><small>EXTEND, NOT REPLACE</small><strong>不替换核心<br />灵活扩展财富能力</strong></div><div className="bank-change-list">{changes.map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div>
    </div></section>

    <section className="bank-section"><div className="bank-shell"><SectionHead title="两条业务路径，共用一套财富技术基础" /><div className="bank-outcomes">{outcomes.map(([n,en,t,p])=><article key={n}><span>{n}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="bank-section bank-flow-section" id="workflow"><div className="bank-shell"><SectionHead title="在现有客户与系统基础之上，延伸到最终客户" copy="Finloop 位于机构已有系统与数字渠道之间，让产品、账户与交易能力通过统一链路被复用。" /><div className="bank-workflow">{['Existing Clients & Systems','API / Integration','Finloop Wealth Capabilities','Product / Account / Transaction','Digital Channel','Customer'].map((x,i)=><article className={i===2?'active':''} key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <section className="bank-section bank-white" id="capabilities"><div className="bank-shell">
      <SectionHead title="一套能力底座，支持不同的财富建设路径" copy="按机构已有架构与业务目标，组合产品能力、开放集成与数字渠道。" />
      <div className="bank-capability"><div className="bank-capability-copy"><span>01</span><small>WEALTH CAPABILITIES</small><h3>财富能力接入</h3><p>连接财富产品、产品管理、账户相关能力以及投资和交易服务。</p><div>{['财富产品','产品管理','账户能力','投资与交易'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="财富能力管理" variant="catalog" /></div>
      <div className="bank-capability reverse"><div className="bank-capability-copy"><span>02</span><small>OPEN INTEGRATION</small><h3>开放 API 与系统集成</h3><p>通过开放接口连接不同业务系统，并适配 SaaS 或本地部署等企业架构场景。</p><div>{['API','系统连接','SaaS','On-premise'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="API 与集成管理" variant="integration" /></div>
      <div className="bank-capability"><div className="bank-capability-copy"><span>03</span><small>DIGITAL WEALTH</small><h3>数字财富建设</h3><p>支持机构自有财富终端、白标体验、新业务渠道与财富运营平台。</p><div>{['自有终端','White-label','新业务渠道','财富运营'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="数字财富终端" variant="channel" /></div>
    </div></section>

    <section className="bank-section bank-stack-section"><div className="bank-shell"><SectionHead title="相关产品与平台" copy="根据机构现有系统与业务目标，进入对应产品了解财富核心、专业交易、数字终端与底层技术能力。" /><div className="bank-product-links">{[
      ['01','财富业务核心','FinOne','统一支撑客户、账户、产品、交易、资产与运营管理。','/products/finone'],
      ['02','机构交易工作台','Web Portal','面向专业机构连接产品浏览、询价、订单与交易运营。','/products/web-portal'],
      ['03','品牌化投资终端','白标 App','以机构自有品牌快速构建财富与股票投资终端。','/products/white-label-app'],
      ['04','交易与技术基础设施','FinMix','连接账户、交易、清结算、数据与开放集成能力。','/technology-platform'],
    ].map(([n,type,name,copy,to])=><Link to={to} key={name}><span>{n}</span><small>{type}</small><h3>{name}</h3><p>{copy}</p><b>了解产品 →</b></Link>)}</div></div></section>

    <section className="bank-section"><div className="bank-shell"><SectionHead title="面向金融机构架构的企业级能力" copy="围绕部署、隔离与业务连续性要求，为银行、券商及大型金融机构提供可适配的技术基础。" /><div className="bank-trust">{[['01','Deployment','支持 SaaS 与本地部署等企业架构场景。'],['02','Availability','围绕机构业务的稳定运行要求设计。'],['03','Tenant & Isolation','支持多租户与数据隔离能力。'],['04','Business Continuity','结合项目要求规划业务连续性机制。'],['05','Financial Infrastructure','连接金融产品、交易与机构运营体系。']].map(([n,t,p])=><article key={n}><span>{n}</span><small>{t}</small><p>{p}</p></article>)}</div></div></section>

    <section className="bank-cta"><div className="bank-shell"><h2>在现有业务基础上，<br />扩展下一项财富能力</h2><p>与 Finloop 机构团队讨论适合现有系统与业务路径的数字财富方案。</p><Link className="button button-light" to="/contact">咨询金融机构财富方案 →</Link></div></section>
  </main>;
}
