import { Link } from 'react-router-dom';

const workflow = ['客户开户', '准入与合规', '产品研究', '投资判断', '订单与执行', '持仓与组合', '报告与结单', '持续服务'];
const friction = [
  ['客户与账户分散', '客户资料、证券账户、投资状态和服务记录分布在不同系统。'],
  ['产品研究效率低', '大量产品、市场资讯和资料需要业务人员人工整理和比较。'],
  ['投资与交易割裂', '从投资建议到下单、执行和持仓，需要跨多个系统协调。'],
  ['客户服务不连续', '机构完成操作后，投资者仍需通过其他渠道查看资产信息。'],
];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="eam-section-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, compact = false }: { title: string; compact?: boolean }) {
  return <div className={`eam-ui ${compact ? 'compact' : ''}`} aria-label={`${title}界面占位`}>
    <aside><b>FE</b>{[1, 2, 3, 4, 5].map(x => <i key={x} />)}</aside>
    <div className="eam-ui-main"><header><strong>{title}</strong><span /></header><div className="eam-ui-metrics"><i /><i /><i /></div><div className="eam-ui-content"><section>{[1, 2, 3, 4].map(x => <span key={x} />)}</section><figure><i /><i /><i /><i /><i /></figure></div></div>
  </div>;
}

export function FinEAMPage() {
  return <main className="eam-page" id="main">
    <section className="eam-hero" data-header-theme="inverse"><div className="eam-shell eam-hero-grid">
      <div className="eam-hero-copy"><p className="eam-kicker">FIN<span>EAM</span></p><h1>让 EAM 用一套平台<br />经营完整财富业务</h1><p>从客户与账户、投资产品和交易，到持仓、报告及投资者服务，FinEAM 将财富管理关键流程连接到统一平台，帮助 EAM 提升运营效率并扩展专业服务能力。</p><div className="eam-actions"><Link className="button button-accent" to="/contact">预约 FinEAM 演示 →</Link><a href="#workflow">探索业务流程 ↓</a></div><div className="eam-dual"><span>机构工作空间</span><i>×</i><span>投资者体验</span></div></div>
      <div className="eam-hero-visual"><GreyUI title="财富业务工作空间" /><div className="eam-float-card a" /><div className="eam-float-card b" /></div>
    </div></section>

    <section className="eam-reality eam-section"><div className="eam-shell"><SectionHead title="服务一个客户，往往需要跨越多个业务系统" copy="EAM 的日常工作并不止于客户关系管理。一个财富服务流程，往往需要在多个系统、机构和人工流程之间切换。" /><div className="eam-chaos-stage"><svg viewBox="0 0 1200 650" aria-hidden="true"><path d="M180 175C310 80 360 270 480 230S670 90 790 185 980 220 1080 125"/><path d="M120 430C250 360 330 550 470 465S710 350 805 445 1010 560 1110 450"/><path d="M570 95C520 210 635 320 570 580"/></svg><div className="eam-chaos-card client"><small>CLIENT & ACCOUNT</small><strong>客户资料分散</strong><i/><i/><i/><i/></div><div className="eam-chaos-card sheet"><small>SPREADSHEET</small><strong>人工整理产品</strong><div>{[1,2,3,4,5].map(x=><i key={x}/>)}</div></div><div className="eam-chaos-card product"><small>PRODUCT PORTAL</small><strong>产品研究与比较</strong><figure/><span/><span/></div><div className="eam-chaos-card mail"><small>EMAIL</small><strong>等待交易确认</strong><p>Re: Client order update</p></div><div className="eam-chaos-card trading"><small>TRADING</small><strong>跨系统执行订单</strong><figure>{[1,2,3,4].map(x=><i key={x}/>)}</figure></div><div className="eam-chaos-card report"><small>REPORT</small><strong>重新汇总客户报告</strong><span/><span/><span/></div><div className="eam-chaos-alert a">信息待补充</div><div className="eam-chaos-alert b">等待确认</div><div className="eam-chaos-center"><strong>一个客户</strong><span>六个工作环境</span></div></div><div className="eam-chaos-summary">{friction.map(([t],i)=><span key={t}><i>0{i+1}</i>{t}</span>)}</div></div></section>

    <section className="eam-workspace eam-section"><div className="eam-shell"><SectionHead title="把 EAM 的核心工作，带回一个平台" copy="业务人员围绕同一个客户，在同一个工作环境中连接客户、账户、投资产品、交易、持仓、报告和组织运营。" /><div className="eam-domain"><div>{[['Client', '客户与账户'], ['Investment', '产品与投资'], ['Portfolio', '交易与资产'], ['Operations', '机构运营与服务']].map(([e, c], i) => <article key={e}><span>0{i + 1}</span><small>{e}</small><h3>{c}</h3></article>)}</div><div className="eam-domain-core"><small>ONE WEALTH WORKSPACE</small><strong>FinEAM</strong><span>围绕同一位客户持续工作</span></div></div></div></section>

    <section className="eam-flow eam-section" id="workflow"><div className="eam-shell"><SectionHead title="从客户准入，到持续财富服务" copy="一笔财富业务在 FinEAM 中沿着连续流程向前推进，每个环节都回到同一客户关系和资产视图。" /><div className="eam-flow-rail">{workflow.map((x, i) => <article key={x}><span>{String(i + 1).padStart(2, '0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <section className="eam-capability eam-section"><div className="eam-shell"><SectionHead title="围绕客户，统一管理财富服务关系" copy="将客户资料、账户和财富业务关系组织在同一平台，从客户准入开始建立持续可管理的数字财富档案。" /><div className="eam-split"><div className="eam-feature-list">{[['客户集中视图', '围绕客户聚合账户和财富业务信息。'], ['账户运营', '从开户进入后续投资与资产流程。'], ['机构与团队管理', '管理 EAM 自身组织和业务人员。'], ['连接投资者端', '将机构侧操作延伸到投资者数字体验。']].map(([t, p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div><GreyUI title="客户与账户" /></div></div></section>

    <section className="eam-invest eam-section"><div className="eam-shell"><SectionHead title="从海量产品和资讯中，更快形成投资判断" copy="将财富产品、市场资讯与 AI 决策辅助连接起来，减少业务人员在产品库、资讯网站和人工表格之间来回切换。" /><div className="eam-invest-grid"><GreyUI title="产品研究与筛选" /><div><h3>不只是找到产品，<br />更快理解什么值得关注</h3><div className="eam-products">{['公募基金', '结构化票据', '债券', '代币化产品'].map(x => <span key={x}>{x}</span>)}</div><ol><li>AI 资讯服务</li><li>产品比较与筛选</li><li>多维度产品排名</li><li>资产配置辅助</li></ol></div></div></div></section>

    <section className="eam-execution eam-section"><div className="eam-shell"><SectionHead title="从投资判断，直接进入交易和资产管理" copy="产品选择、订单、持仓和报告连接在同一流程中，使投资判断可以持续向下执行，并重新回到客户服务。" /><div className="eam-outcomes">{[['Execute', '将投资决策转化为订单', '支持单产品和投资组合交易场景。'], ['Monitor', '持续查看客户资产状态', '了解客户持仓和投资组合变化。'], ['Report', '将投资结果带回客户服务', '通过持仓、报告和结单持续提供资产信息。']].map(([e, t, p]) => <article key={e}><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div><GreyUI title="交易、持仓与报告" compact /></div></section>

    <section className="eam-investor eam-section"><div className="eam-shell"><SectionHead title="把日常财富服务，放进投资者的手机" copy="最终投资者可以通过 App 完成账户开通，并持续查看资产配置、持仓、结单及费用等关键信息，让常用财富服务不再依赖线下沟通。" /><div className="eam-investor-focus"><div className="eam-investor-copy"><small>INVESTOR EXPERIENCE</small><h3>客户随时掌握自己的<br />账户与资产</h3><p>机构端完成的客户、账户和投资操作，将转化为投资者可持续访问的数字服务体验。</p><div>{[['线上开户', '在线提交开户资料并开通证券账户'], ['资产配置', '查看投资组合与资产配置情况'], ['持仓与结单', '持续查阅持仓明细及账户结单'], ['费用信息', '清晰查看账户相关费用信息']].map(([t, p]) => <article key={t}><strong>{t}</strong><span>{p}</span></article>)}</div></div><div className="eam-app-stage"><div className="eam-app-note"><span>机构工作台</span><i>同步客户与资产信息</i></div><div><small>INVESTOR APP</small><div className="eam-phone"><span /><span /><figure /><i /><i /><i /></div></div></div></div></div></section>

    <section className="eam-ai eam-section"><div className="eam-shell"><SectionHead title="让 AI 帮助业务人员更快发现、比较和行动" copy="AI 用于提升信息处理和投资决策支持效率，并在业务人员的工作流中形成从资讯发现到资产配置的连续辅助。" /><div className="eam-ai-rail">{[['Discover', 'AI 资讯'], ['Understand', '产品分析'], ['Compare', '产品排名'], ['Select', '产品选择'], ['Allocate', '资产配置']].map(([e, c], i) => <article key={e}><span>0{i + 1}</span><small>{e}</small><strong>{c}</strong></article>)}</div></div></section>

    <section className="eam-stack eam-section"><div className="eam-shell"><SectionHead title="一个 EAM 工作平台，连接完整财富技术栈" copy="FinEAM 建立在星路财富核心与交易运营基础设施之上，让机构无需重复建设完整底层系统。" /><div className="eam-foundation"><div className="eam-foundation-lead"><small>BUILT ON FINLOOP</small><strong>FinEAM</strong><h3>专注经营财富业务，<br />底层能力交给完整平台</h3><p>机构工作台与 Investor App 围绕同一个客户持续协作，并连接产品、交易及后续运营。</p><div><span>机构工作台</span><span>Investor App</span></div></div><div className="eam-foundation-points">{[['01', '专注业务体验', 'FinEAM 承载 EAM 团队的日常工作与最终投资者服务。'], ['02', '复用财富核心', '通过 FinOne 连接账户、产品、资产和通用财富运营能力。'], ['03', '连接交易执行', '通过 FinMix 衔接底层交易、运营及相关金融机构生态。']].map(([n, t, p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>

    <section className="eam-cta"><div className="eam-shell"><h2>把完整财富业务，<br />带回一个平台</h2><p>了解 FinEAM 如何连接机构运营与投资者财富体验。</p><Link className="button button-light" to="/contact">预约 FinEAM 演示 →</Link></div></section>
  </main>;
}
