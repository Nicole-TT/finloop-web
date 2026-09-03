import { Link } from 'react-router-dom';

const workflow = ['账户 / 客户身份', '财富产品', '产品发现', 'RFQ / Quote', 'Order / Execution', 'Holdings', '数字财富体验'];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="broker-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyProductUI({ title, mode = 'products' }: { title: string; mode?: 'products' | 'trading' | 'mobile' }) {
  return <div className={`broker-ui broker-ui-${mode}`} role="img" aria-label={`${title}产品界面占位`}>
    <div className="broker-ui-bar"><span /><strong>{title}</strong><i /></div>
    <div className="broker-ui-body">
      <aside>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside>
      <div className="broker-ui-canvas">
        <div className="broker-ui-metrics">{[1, 2, 3].map(i => <i key={i} />)}</div>
        <div className="broker-ui-panels"><section>{[1, 2, 3, 4].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</figure></div>
      </div>
    </div>
  </div>;
}

export function BrokerSolutionPage() {
  return <main className="broker-page" id="main">
    <section className="broker-hero" data-header-theme="inverse">
      <div className="broker-shell broker-hero-grid">
        <div className="broker-hero-copy">
          <p className="broker-label">SECURITIES &amp; BROKERAGE</p>
          <h1>证券及经纪机构解决方案</h1>
          <p>在现有证券业务基础上连接更多财富产品、专业交易能力和数字客户体验，帮助机构更快推出和扩展财富业务。</p>
          <div className="broker-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div>
        </div>
        <div className="broker-hero-visual" aria-label="从证券经纪业务扩展至数字财富业务的能力路径">
          <div className="broker-hero-source"><small>EXISTING BUSINESS</small><strong>Brokerage</strong><span>已有证券客户与账户</span></div>
          <div className="broker-hero-line"><i /><i /><i /></div>
          <div className="broker-hero-target"><small>WEALTH EXPANSION</small><strong>Digital Wealth</strong><div><span>Products</span><span>Trading</span><span>Experience</span></div></div>
        </div>
      </div>
    </section>

    <section className="broker-section broker-white"><div className="broker-shell">
      <SectionHead title="已有证券客户，也可以承接更完整的财富需求" copy="客户需求正在从股票交易延伸至更丰富的财富配置。机构需要让新增产品、交易运营与客户体验进入同一条业务主线。" />
      <div className="broker-opportunity">
        <div className="broker-opportunity-lead"><small>BROKERAGE → WEALTH</small><strong>从交易关系<br />延伸至财富关系</strong><p>基于既有客户与账户基础，持续扩展可服务的产品与场景。</p></div>
        <div className="broker-opportunity-list">{[['01','需求延伸','客户需求从股票交易向财富配置延伸'],['02','品类增加','基金、债券与结构化产品持续进入服务范围'],['03','能力升级','新业务需要对应的交易与运营能力'],['04','体验统一','客户期望在同一数字终端完成更多服务']].map(([n,t,p])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div>
      </div>
    </div></section>

    <section className="broker-section"><div className="broker-shell">
      <SectionHead title="把业务扩展转化为三项可落地的能力" />
      <div className="broker-outcomes">{[['01','Expand Product Offering','扩展财富产品','让基金、债券、结构化产品等进入已有证券业务。'],['02','Enable Institutional Trading','提升交易能力','连接询价、报价、订单和执行流程。'],['03','Extend Digital Experience','建设数字客户终端','通过白标财富或股票 App 延伸客户服务。']].map(([n,en,t,p])=><article key={n}><span>{n}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="broker-section broker-flow-section" id="workflow"><div className="broker-shell">
      <SectionHead title="从已有证券客户，到新的财富业务" copy="保留既有客户关系，让产品发现、专业交易与持仓服务顺着同一条链路持续延伸。" />
      <div className="broker-workflow"><div className="broker-flow-start"><small>START</small><strong>Existing<br />Brokerage Client</strong></div><div className="broker-flow-track">{workflow.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div>
    </div></section>

    <section className="broker-section broker-white" id="capabilities"><div className="broker-shell">
      <SectionHead title="围绕增长路径，组合所需的产品与交易能力" copy="按业务阶段连接产品、专业工作终端和客户体验，无需为每个财富品类重复建设完整系统。" />
      <div className="broker-capability"><div className="broker-capability-copy"><span>01</span><small>PRODUCT EXPANSION</small><h3>财富产品扩展</h3><p>连接新的财富产品类别，并贯通产品接入、管理、发布与客户可见的完整过程。</p><div>{['产品接入','产品管理','产品发布','客户可见'].map(x=><i key={x}>{x}</i>)}</div></div><GreyProductUI title="财富产品管理" /></div>
      <div className="broker-capability reverse"><div className="broker-capability-copy"><span>02</span><small>INSTITUTIONAL EXECUTION</small><h3>机构交易执行</h3><p>从产品发现到询价、报价、订单与执行，让专业团队在连续工作流中完成交易。</p><div>{['Product','RFQ','Quote','Order','Execution'].map(x=><i key={x}>{x}</i>)}</div></div><GreyProductUI title="专业交易工作台" mode="trading" /></div>
      <div className="broker-capability"><div className="broker-capability-copy"><span>03</span><small>CLIENT EXPERIENCE</small><h3>客户数字终端</h3><p>基于统一财富核心，支持机构构建自有品牌的财富 App、股票与财富综合 App 及 H5 场景。</p><div>{['财富 App','股票 / 财富 App','H5','白标体验'].map(x=><i key={x}>{x}</i>)}</div></div><GreyProductUI title="数字客户终端" mode="mobile" /></div>
    </div></section>

    <section className="broker-section broker-stack-section"><div className="broker-shell">
      <SectionHead title="由 Finloop 的可组合技术栈提供支持" copy="客户体验、财富核心、专业工作终端与底层交易运营相互连接，并可围绕实际业务阶段灵活组合。" />
      <div className="broker-stack">
        <article className="client"><small>CLIENT EXPERIENCE</small><strong>White-label App</strong><span>机构自有品牌的数字客户体验</span></article>
        <div className="broker-stack-connector"><i /><span>统一连接</span><i /></div>
        <div className="broker-stack-middle"><article><small>WEALTH CORE</small><strong>FinOne</strong><span>统一财富核心</span></article><article><small>PROFESSIONAL WORKSPACE</small><strong>Web Portal</strong><span>机构产品与交易工作台</span></article></div>
        <div className="broker-stack-connector"><i /><span>交易与运营</span><i /></div>
        <article><small>TRADING &amp; OPERATIONS CORE</small><strong>FinMix</strong><span>底层交易与运营基础设施</span></article>
        <article className="source"><small>OPEN ECOSYSTEM</small><strong>金融产品 / 上游机构</strong><span>连接产品与金融服务网络</span></article>
      </div>
    </div></section>

    <section className="broker-section"><div className="broker-shell">
      <SectionHead title="让每一次扩展都复用同一套业务基础" />
      <div className="broker-why">{[['01','更快进入新业务','不为每个财富品类重复建设核心系统。'],['02','产品 + 交易','不仅提供产品货架，同时连接实际交易能力。'],['03','B2B + Client Experience','同时覆盖专业工作人员与最终客户。'],['04','可扩展核心','后续新增业务继续复用 FinOne 与 FinMix。']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="broker-cta"><div className="broker-shell"><h2>将下一项财富业务<br />更快带给您的客户</h2><p>与 Finloop 团队讨论产品扩展、交易执行与数字客户体验的组合方案。</p><Link className="button button-light" to="/contact">咨询券商财富业务方案 →</Link></div></section>
  </main>;
}
