import { Link } from 'react-router-dom';

const lifecycle = [
  ['客户建立', ['开户', 'KYC / AML', 'PI', '风险评估']],
  ['客户管理', ['客户资料', '家庭关系', '账户', '资产视图']],
  ['投资服务', ['投资建议', '资产配置', '模型组合', '投资机会']],
  ['产品与交易', ['产品筛选', '报价 / 询价', '订单', '交易执行']],
  ['组合管理', ['持仓', '组合表现', '风险', '偏离', '再平衡']],
  ['持续服务', ['到期管理', '客户沟通', '投资报告', '结单']],
  ['运营与合规', ['审批', '适当性', '权限', '审计记录']],
] as const;

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="wealth-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, variant = 'dashboard' }: { title: string; variant?: 'dashboard' | 'research' | 'portfolio' }) {
  return <div className={`wealth-ui wealth-ui-${variant}`} role="img" aria-label={`${title}界面占位`}>
    <aside><b>F</b>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside>
    <div className="wealth-ui-main"><header><strong>{title}</strong><span /></header><div className="wealth-ui-stats">{[1, 2, 3].map(i => <i key={i} />)}</div><div className="wealth-ui-content"><section>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5, 6].map(i => <i key={i} />)}</figure></div></div>
  </div>;
}

function FlowVisual({ labels, center }: { labels: string[]; center?: string }) {
  return <div className="wealth-scene-flow" role="img" aria-label={`${labels.join('到')}流程示意`}>{labels.map((label, i) => <div className={label === center ? 'primary' : ''} key={label}><span>{String(i + 1).padStart(2, '0')}</span><strong>{label}</strong>{i < labels.length - 1 && <b aria-hidden="true">↓</b>}</div>)}</div>;
}

export function WealthSolutionPage() {
  return <main className="wealth-page" id="main">
    <section className="wealth-hero" data-header-theme="inverse"><div className="wealth-shell wealth-hero-grid"><div className="wealth-hero-copy"><p className="wealth-label">WEALTH &amp; ASSET MANAGEMENT</p><h1>财富与资产管理解决方案</h1><p>连接客户、产品、投资、交易与运营能力，帮助 EAM、财富管理公司及家族办公室以统一平台管理客户资产、拓展全球投资产品并提升投资服务效率。</p><div className="wealth-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div></div><div className="wealth-network" aria-label="财富服务关系网络"><div className="wealth-network-core"><small>ONE CLIENT VIEW</small><strong>Client</strong><span>客户与账户</span></div>{[['Investment','产品与配置'],['Trade','订单与执行'],['Portfolio','持仓与报告'],['Service','持续客户服务']].map(([a,b],i)=><div className={`wealth-network-node node-${i+1}`} key={a}><small>0{i+1}</small><strong>{a}</strong><span>{b}</span></div>)}</div></div></section>

    <section className="wealth-section wealth-white"><div className="wealth-shell"><SectionHead title="财富管理机构需要面对多重难题" copy="随着客户资产、产品种类与监管要求持续增加，依靠分散系统与人工流程已经难以支撑财富管理业务规模化增长。"/><div className="wealth-complexity">{[['业务系统割裂','开户、资金、交易、托管与投后分散在不同系统和人工流程中。'],['系统建设成本高','传统财富系统实施周期长，中小机构缺少足够技术团队持续建设和维护。'],['产品选择有限','依赖少量银行或产品提供方，很难建立完整的全球产品体系。'],['专业服务难规模化','客户经理需要承担大量产品研究、客户跟进与运营工作。'],['客户体验难升级','资产、交易与收益信息缺乏统一数字化展示和持续服务工具。']].map(([t,p],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="wealth-section wealth-flow-section" id="workflow"><div className="wealth-shell"><SectionHead title="为财富管理提供完整业务生命周期管理" copy="从客户建立、投资服务和交易执行，到组合管理、持续服务及合规运营，让每个阶段在同一条业务链路中连续推进。"/><div className="wealth-lifecycle-layout"><figure className="wealth-lifecycle-media"><img src="/assets/finone-onboarding.png" alt="FinOne 客户开户与账户管理界面"/></figure><div className="wealth-lifecycle" aria-label="财富管理业务生命周期">{lifecycle.map(([title,items],i)=><article key={title}><div className="wealth-lifecycle-top"><span>{String(i+1).padStart(2,'0')}</span><small>{i===lifecycle.length-1?'OPERATIONS':'LIFECYCLE'}</small></div><div className="wealth-lifecycle-copy"><h3>{title}</h3><div className="wealth-lifecycle-detail">{items.map(item=><i key={item}>{item}</i>)}</div></div></article>)}</div></div></div></section>

    <section className="wealth-section wealth-white" id="capabilities"><div className="wealth-shell"><SectionHead title="围绕关键场景，解决财富业务增长难题" copy="从平台建设和产品供给到客户体验，帮助机构更快建立并持续扩展财富业务。"/>
      <div className="wealth-scene"><div className="wealth-scene-copy"><h3>快速建立财富平台</h3><p>通过标准化财富平台，将核心业务能力整合到统一体系，并根据机构需求灵活部署。降低系统建设与运营复杂度，更快启动和扩展财富业务。</p><div>{['数字开户','客户与账户','资金管理','产品管理','交易','持仓与投后','客户资产服务'].map(x=><i key={x}>{x}</i>)}</div></div><div className="wealth-system-compare"><div><small>传统模式</small>{['客户系统','交易系统','产品系统','资产系统','客户端'].map(x=><span key={x}>{x}</span>)}</div><b>→</b><div className="unified"><small>FINLOOP</small><strong>统一财富平台</strong><span>客户 · 产品 · 交易 · 资产</span></div></div></div>
      <div className="wealth-scene reverse"><div className="wealth-scene-copy"><h3>连接全品类金融产品</h3><p>通过统一产品基础设施连接多类全球财富产品，快速扩展产品货架和资产配置选择。连接 8,000+ 全球财富管理产品。</p><div>{['公募基金','私募基金','债券','结构化产品','现金管理','保险解决方案','其他资产'].map(x=><i key={x}>{x}</i>)}</div></div><FlowVisual labels={['产品提供方','Finloop Product Network','财富与资产管理机构','Client Portfolio']} center="Finloop Product Network"/></div>
      <div className="wealth-scene wealth-execution-scene"><div className="wealth-scene-copy"><small>RFQ &amp; ORDER WORKFLOW</small><h3>批量处理交易需求</h3><p>将产品、询价、报价与订单连接到统一工作流，支持专业团队集中处理多笔交易需求，减少重复录入与人工衔接。</p><div>{['批量询价','报价比较','批量下单','执行跟踪'].map(x=><i key={x}>{x}</i>)}</div></div><div className="wealth-execution-flow">{[['01','选择产品'],['02','批量询价'],['03','比较报价'],['04','批量下单'],['05','跟踪执行']].map(([number,label])=><span key={number}><small>{number}</small><strong>{label}</strong></span>)}</div></div>
      <div className="wealth-scene reverse"><div className="wealth-scene-copy"><h3>终端客户随时掌握财富动态</h3><p>连接机构工作端和终端客户服务端，使双方基于统一资产与交易数据提供持续服务。提升资产透明度和服务效率，建立更加持续的客户关系。</p><div>{['Customer 360','客户资产','持仓','交易','资金流水','风险状态','结单'].map(x=><i key={x}>{x}</i>)}</div></div><div className="wealth-dual-view"><GreyUI title="Institution View"/><GreyUI title="Client View" variant="portfolio"/></div></div>
    </div></section>

    <section className="wealth-section wealth-infrastructure"><div className="wealth-shell"><SectionHead title="按需构建适合您的财富解决方案" copy="根据机构现有系统和业务阶段，可灵活组合财富平台、交易基础设施、产品网络、AI 与 API / 数据能力，形成完整方案或按模块接入。"/><div className="wealth-platform-grid">{[
      ['01','WEALTH PLATFORM','FinEAM','客户、账户、资产及财富管理业务','/products/fineam'],
      ['02','WEALTH PLATFORM','FinOne','平台管理、白标及业务运营能力','/products/finone'],
      ['03','TRADING INFRASTRUCTURE','Web Portal','机构端产品与交易工作平台','/products/web-portal'],
      ['04','TRADING INFRASTRUCTURE','FinMix','自研交易与柜台基础设施','/technology-platform'],
      ['05','INTELLIGENCE','Finloop AI','AI、Agent 与智能业务能力','/ai'],
      ['06','TECHNOLOGY','API / Data Infrastructure','系统连接、数据及开放能力','/technology-platform'],
    ].map(([number,group,name,copy,to])=><Link to={to} key={name}><div><span>{number}</span><small>{group}</small></div><h3>{name}</h3><p>{copy}</p><b>进入产品 →</b></Link>)}</div></div></section>

    <section className="wealth-section wealth-delivery-section"><div className="wealth-shell wealth-delivery-layout"><SectionHead title="提供多方式接入现有系统业务" copy="无论从零建立财富业务，还是升级现有平台，都可以根据已有系统选择适合的接入方式。"/><div className="wealth-why wealth-delivery">{[
      ['完整平台','从客户、产品、交易到资产服务，快速上线完整财富业务。',[]],
      ['白标方案','以机构自有品牌，快速上线面向客户的数字财富服务。',[]],
      ['模块化接入','按需接入产品、交易、客户或 AI 等业务能力。',[]],
      ['API / 系统集成','通过 API 将星路能力连接至机构现有业务系统。',[]],
    ].map(([title,copy,items],i)=><article key={title as string}><span>0{i+1}</span><h3>{title as string}</h3><p>{copy as string}</p>{(items as string[]).length>0&&<div>{(items as string[]).map(item=><i key={item}>{item}</i>)}</div>}</article>)}</div></div></section>

    <section className="wealth-section wealth-white"><div className="wealth-shell"><SectionHead title="我们收到的使用反馈" copy="不同业务模式的机构，围绕系统连接、业务协同与客户服务，关注各自最需要改善的环节。"/><div className="wealth-feedback-wall">{[
      ['EAM / 家族办公室','系统协同','客户、产品、订单与资产信息集中后，日常服务中的跨系统切换明显减少。'],
      ['财富管理机构','灵活接入','可以根据现有业务阶段接入所需模块，无需一次性替换全部系统。'],
      ['证券及经纪机构','业务连续性','产品与交易流程连接后，客户经理可以更连续地跟进客户需求。'],
      ['企业财富服务团队','客户体验','机构端与客户端基于统一数据，资产与交易信息展示更加一致。'],
      ['EAM / 家族办公室','资产服务','客户持仓、交易与报告集中呈现，更便于围绕客户持续开展服务。'],
      ['财富管理机构','产品连接','通过统一入口管理多类财富产品，产品筛选与后续跟进更加顺畅。'],
    ].map(([institution,topic,copy])=><article key={`${institution}-${topic}`}><header><span aria-hidden="true">F</span><div><strong>{institution}</strong><small>{topic}</small></div></header><p>{copy}</p></article>)}</div></div></section>

    <section className="wealth-cta"><div className="wealth-shell"><h2>让财富业务从客户准入开始，持续连接每一次投资与服务</h2><p>与 Finloop 团队讨论您的客户运营、投资交易与资产服务需求。</p><div><Link className="button button-light" to="/contact">讨论您的财富业务需求 →</Link><a href="#workflow">查看完整业务流程</a></div></div></section>
  </main>;
}
