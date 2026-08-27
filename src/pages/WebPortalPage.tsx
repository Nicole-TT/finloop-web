import { Link } from 'react-router-dom';

const flow = ['寻找产品', '查看信息', '发起询价', '比较报价', '形成订单', '交易执行', '状态跟踪', '成交后运营'];

function SectionHead({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="portal-section-head"><small>{label}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function PortalUI({ title, mode = 'table' }: { title: string; mode?: 'table' | 'quote' | 'order' }) {
  return <div className={`portal-ui portal-ui-${mode}`} aria-label={`${title}界面占位`}>
    <aside><b>WP</b>{[1, 2, 3, 4, 5].map(x => <i key={x} />)}</aside>
    <div className="portal-ui-main">
      <header><strong>{title}</strong><span /><span /></header>
      <div className="portal-ui-toolbar"><i /><i /><i /></div>
      <div className="portal-ui-grid">
        {[1, 2, 3, 4].map(row => <div key={row}><b /><span /><span /><span /><em /></div>)}
      </div>
    </div>
  </div>;
}

export function WebPortalPage() {
  return <main className="portal-page" id="main">
    <section className="portal-hero" data-header-theme="inverse"><div className="portal-shell portal-hero-grid">
      <div className="portal-hero-copy"><p className="portal-kicker">WEB PORTAL <span>·</span> PROFESSIONAL WORKSPACE</p><h1>一个机构工作台，<br />连接产品、询价与交易</h1><p>面向 RM、投资顾问、交易员及运营人员，将金融产品、询价、报价、订单与交易流程连接到统一工作环境。</p><div className="portal-actions"><Link className="button button-accent" to="/contact">预约 Web Portal 演示 →</Link><a href="#workflow">探索交易流程 ↓</a></div>
      </div>
      <div className="portal-hero-stage"><PortalUI title="Product & Trading Workspace" /><div className="portal-live"><i /> LIVE QUOTES</div><div className="portal-status">订单状态 <strong>EXECUTED</strong></div></div>
    </div></section>

    <section className="portal-reality portal-section"><div className="portal-shell"><SectionHead label="INSTITUTIONAL TRADING" title="一笔交易，往往需要跨越多个系统和沟通渠道" copy="从寻找金融产品、向上游机构询价，到比较报价、提交订单和跟踪交易状态，业务人员常常需要在分散的工具之间协调。" /><div className="portal-fragmented"><div className="portal-channels">{['产品平台', '邮件', '即时沟通 / 询价', '人工表格', '订单系统', '运营系统'].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div><div className="portal-converge"><i /><i /><i /><strong>Web Portal</strong><span>一笔交易的完整上下文</span></div></div></div></section>

    <section className="portal-flow portal-section" id="workflow"><div className="portal-shell"><SectionHead label="FROM OPPORTUNITY TO EXECUTION" title="从找到产品，到完成交易" copy="同一笔交易沿着连续工作流向前推进，产品、报价和订单上下文始终保留。" /><div className="portal-flow-rail">{flow.map((x, i) => <article key={x}><span>{String(i + 1).padStart(2, '0')}</span><strong>{x}</strong></article>)}</div><div className="portal-object"><span>PRODUCT</span><b>USD Structured Note</b><i /> <span>RFQ</span><b>3 Quotes</b><i /> <span>ORDER</span><b>Executed</b></div></div></section>

    <section className="portal-products portal-section"><div className="portal-shell"><SectionHead label="PRODUCT DISCOVERY" title="更快找到进入交易流程的金融产品" copy="围绕机构决策和交易所需信息组织产品，并从产品信息直接进入询价或订单流程。" /><div className="portal-product-layout"><div className="portal-product-list">{[['STRUCTURED NOTES', '结构化票据', '结构、币种、期限、标的与关键条款'], ['BONDS', '债券', '发行人、ISIN、票息、到期日与市场报价'], ['FUNDS', '基金', '份额类别、币种、NAV 与申购赎回信息']].map(([e, t, p], i) => <article key={e}><span>0{i + 1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div><PortalUI title="Product Discovery" /></div></div></section>

    <section className="portal-rfq portal-section"><div className="portal-shell"><SectionHead label="RFQ & PRICING" title="从询价到报价，让交易机会更快变得可执行" copy="将产品信息、询价和报价连接起来，业务人员可以围绕同一交易需求集中处理报价。" /><div className="portal-feature-split"><PortalUI title="RFQ & Quote History" mode="quote" /><div>{[['Create RFQ', '从产品或交易需求发起询价。'], ['Compare Quotes', '集中查看与比较报价。'], ['Keep Context', '报价继续关联原始产品和需求。'], ['Move to Order', '从报价直接进入订单流程。']].map(([t, p], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>

    <section className="portal-orders portal-section"><div className="portal-shell"><SectionHead label="ORDERS & OPERATIONS" title="把报价转化为可持续跟踪的交易订单" copy="从订单形成、执行状态到成交后事件，关键信息继续留在同一工作环境中。" /><div className="portal-order-stage"><div><h3>交易完成后，业务仍然持续</h3><p>查看产品、客户或账户、条款、报价、执行与关键时间节点，并继续跟踪订单状态和收益事件。</p><div>{['CREATE 形成订单', 'TRACK 跟踪状态', 'REVIEW 查看记录', 'OPERATE 后续运营'].map(x => <span key={x}>{x}</span>)}</div></div><PortalUI title="Order Detail & Timeline" mode="order" /></div></div></section>

    <section className="portal-professional portal-section"><div className="portal-shell"><SectionHead label="PROFESSIONAL WORKFLOW" title="关键准入要求和专业角色，都在业务流程中" copy="不同角色围绕同一交易协作，并在需要的节点连接专业投资者认证、KYT 及钱包信息等相关能力。" /><div className="portal-role-grid">{[['RM', '客户需求、产品与后续跟进'], ['INVESTMENT ADVISER', '产品研究、条款与比较'], ['TRADER', '询价、报价、订单与执行'], ['OPERATIONS', '状态、结算与后续事件']].map(([t, p], i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{p}</p></article>)}</div><div className="portal-compliance-rail">{['PRODUCT ELIGIBILITY', 'ORDER', 'RISK CHECK', 'EXECUTION'].map((x, i) => <div key={x}><span>{x}</span>{i < 3 && <i>→</i>}</div>)}</div></div></section>

    <section className="portal-stack portal-section"><div className="portal-shell"><SectionHead label="BUILT ON FINLOOP" title="一个机构工作台，连接完整财富与交易基础设施" /><div className="portal-stack-map"><div><small>PROFESSIONAL WORKSPACE</small><strong>Web Portal</strong><p>产品、询价、报价、订单与运营界面</p></div><i>↓</i><div><small>WEALTH CORE</small><strong>FinOne</strong><p>账户、产品、交易与资产能力</p></div><i>↓</i><div><small>TRADING & OPERATIONS CORE</small><strong>FinMix</strong><p>连接交易、运营及金融机构生态</p></div></div></div></section>

    <section className="portal-cta"><div className="portal-shell"><h2>让您的团队更直接地<br />连接产品与交易</h2><p>了解 Web Portal 如何将产品发现、询价、订单和后续运营连接到一个专业工作台。</p><Link className="button button-light" to="/contact">预约 Web Portal 演示 →</Link></div></section>
  </main>;
}
