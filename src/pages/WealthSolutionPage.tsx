import { Link } from 'react-router-dom';

const workflow = ['客户准入', 'KYC / AML / PI', '账户', '产品研究', '投资配置', '单产品 / 组合交易', '持仓与 Portfolio', '报告', '持续客户服务'];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="wealth-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, variant = 'dashboard' }: { title: string; variant?: 'dashboard' | 'research' | 'portfolio' }) {
  return <div className={`wealth-ui wealth-ui-${variant}`} role="img" aria-label={`${title}界面占位`}>
    <aside><b>F</b>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside>
    <div className="wealth-ui-main"><header><strong>{title}</strong><span /></header><div className="wealth-ui-stats">{[1, 2, 3].map(i => <i key={i} />)}</div><div className="wealth-ui-content"><section>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5, 6].map(i => <i key={i} />)}</figure></div></div>
  </div>;
}

export function WealthSolutionPage() {
  return <main className="wealth-page" id="main">
    <section className="wealth-hero" data-header-theme="inverse"><div className="wealth-shell wealth-hero-grid"><div className="wealth-hero-copy"><p className="wealth-label">WEALTH &amp; ASSET MANAGEMENT</p><h1>从客户准入到投资及持续管理，构建一体化财富业务</h1><p>将客户与账户、财富产品、投资交易、资产管理和客户服务连接到统一数字体系，帮助财富与资产管理机构更高效地经营客户财富。</p><div className="wealth-actions"><Link className="button button-accent" to="/contact">讨论您的财富业务需求 →</Link><a href="#workflow">探索完整业务流程 ↓</a></div></div><div className="wealth-network" aria-label="财富服务关系网络"><div className="wealth-network-core"><small>ONE CLIENT VIEW</small><strong>Client</strong><span>客户与账户</span></div>{[['Investment','产品与配置'],['Trade','订单与执行'],['Portfolio','持仓与报告'],['Service','持续客户服务']].map(([a,b],i)=><div className={`wealth-network-node node-${i+1}`} key={a}><small>0{i+1}</small><strong>{a}</strong><span>{b}</span></div>)}</div></div></section>

    <section className="wealth-section wealth-white"><div className="wealth-shell"><SectionHead title="服务一个客户，背后往往需要多个系统协同" copy="客户资料、产品研究、投资建议、交易执行与资产报告分散在不同系统中，使财富顾问需要在多个工作界面和人工流程之间反复切换。"/><div className="wealth-reality"><div className="wealth-fragment"><div className="wealth-adviser"><small>RELATIONSHIP MANAGER</small><strong>客户服务工作台</strong></div>{['客户与账户','产品与研究','建议与订单','持仓与报告'].map((x,i)=><span className={`fragment-${i+1}`} key={x}>{x}</span>)}</div><div className="wealth-friction">{[['客户和账户信息分散','难以形成统一客户视图。'],['产品信息来自多个平台','研究和筛选需要跨系统完成。'],['投资建议与交易执行存在断点','服务流程难以连续推进。'],['持仓与报告依赖人工整合','持续服务消耗大量运营时间。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div></div></div></section>

    <section className="wealth-section"><div className="wealth-shell"><SectionHead title="让财富业务围绕客户连续运转"/><div className="wealth-outcomes">{[['01','服务更多客户','Digitize Client Operations','从开户、KYC / AML 到账户及持续服务形成数字化流程。'],['02','扩展财富服务','Expand Investment Offering','连接更多财富产品，并支持产品研究、投资配置和交易。'],['03','提高运营效率','Operate More Efficiently','将交易、持仓、报告和机构运营带入连续工作流。']].map(([n,t,en,p])=><article key={n}><span>{n}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="wealth-section wealth-flow-section" id="workflow"><div className="wealth-shell"><SectionHead title="从客户进入，到持续财富服务" copy="以客户为起点，将准入、研究、配置、交易、资产与服务连接为一条完整业务主线。"/><div className="wealth-workflow"><div className="wealth-flow-client"><small>CLIENT</small><strong>统一客户关系</strong></div><div className="wealth-flow-track">{workflow.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></div></section>

    <section className="wealth-section wealth-white" id="capabilities"><div className="wealth-shell"><SectionHead title="一套体系，覆盖财富业务的关键能力" copy="让客户运营、投资交易和资产服务共享同一条数据与业务链路。"/><div className="wealth-capability"><div className="wealth-capability-copy"><span>01</span><small>CLIENT &amp; ACCOUNT OPERATIONS</small><h3>客户与账户运营</h3><p>围绕客户统一管理开户、KYC / AML、PI、客户资料、账户与机构团队。</p><div>{['开户','KYC / AML','PI','客户资料','账户','机构团队'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="客户与账户运营"/></div><div className="wealth-capability reverse"><div className="wealth-capability-copy"><span>02</span><small>INVESTMENT &amp; TRADING</small><h3>投资与交易</h3><p>连接财富产品、AI 资讯与产品分析、投资配置、RFQ 及交易执行。</p><div>{['财富产品','AI 资讯','产品分析','Portfolio Order','RFQ','交易执行'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="投资研究与交易" variant="research"/></div><div className="wealth-capability"><div className="wealth-capability-copy"><span>03</span><small>PORTFOLIO &amp; ONGOING SERVICE</small><h3>合规、资产与持续服务</h3><p>持续连接持仓、Portfolio、Statement、交易记录、适当性节点与投资者数字体验。</p><div>{['持仓','Portfolio','Statement','交易记录','适当性','投资者体验'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="资产与持续服务" variant="portfolio"/></div></div></section>

    <section className="wealth-section wealth-infrastructure"><div className="wealth-shell"><SectionHead title="完整财富业务背后，是可复用的金融科技基础设施" copy="从机构工作界面到底层交易与运营，各层能力可以围绕实际业务需要进行组合。"/><div className="wealth-stack">{[['WEALTH WORKSPACE','FinEAM','EAM 财富业务工作平台'],['WEALTH CORE','FinOne','统一财富核心'],['PRODUCT & TRADING','Web Portal','机构产品与交易工作台'],['TRADING INFRASTRUCTURE','FinMix','底层交易与运营基础设施'],['OPEN ECOSYSTEM','金融产品及机构生态','连接产品与金融服务网络']].map(([a,b,c],i)=><article className={i===0?'active':''} key={a}><small>{a}</small><strong>{b}</strong><span>{c}</span><i>0{i+1}</i></article>)}</div></div></section>

    <section className="wealth-section"><div className="wealth-shell"><SectionHead title="为机构财富业务建立更完整的连接"/><div className="wealth-why">{[['丰富产品供给','连接传统财富与数字资产产品。'],['完整财富链路','不只提供客户管理，也连接交易和资产流程。'],['B2B2C','机构端和最终投资者体验可以同时连接。'],['金融基础设施','连接相关持牌金融及交易体系。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="wealth-section wealth-white"><div className="wealth-shell"><SectionHead title="一家财富机构，如何减少跨系统操作"/><div className="wealth-story"><div className="wealth-story-profile"><small>CUSTOMER STORY</small><strong>某 EAM / 家族办公室</strong><p>围绕客户持续完成财富服务，让客户、产品、订单和资产信息进入同一条业务链路。</p></div><div className="wealth-story-flow">{[['Challenge','客户数据、产品研究、订单及资产报告分别存在多个系统。'],['Solution','客户 → 产品 → 投资 → 交易 → Portfolio → Investor Experience。'],['Outcome','减少跨系统操作，让机构围绕客户持续完成财富服务。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><small>{t}</small><p>{p}</p></article>)}</div></div></div></section>

    <section className="wealth-cta"><div className="wealth-shell"><h2>让财富业务从客户准入开始，持续连接每一次投资与服务</h2><p>与 Finloop 团队讨论您的客户运营、投资交易与资产服务需求。</p><div><Link className="button button-light" to="/contact">讨论您的财富业务需求 →</Link><a href="#workflow">查看完整业务流程</a></div></div></section>
  </main>;
}
