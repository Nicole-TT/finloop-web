import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformTrustSection } from '../components/PlatformProofSections';

const coreValues=[['更快上线新业务','复用账户、产品、交易与运营能力，支持债券、基金、交易及 AI 等业务按需扩展，减少从零建设和外部系统衔接','完整业务闭环 · 提升自主运营能力'],['减少重复建设','通过一套可复用的核心逻辑支撑不同业务平台、客户终端和服务渠道，降低多套系统重复建设的复杂度','统一核心逻辑 · 支持多种业务场景'],['提升运营与智能化效率','统一客户、账户、产品、订单和资产数据口径，减少跨系统操作与人工核对，并为 AI 进入业务流程提供一致的数据基础','贯通业务数据 · 夯实 AI 基础'],['持续扩展业务','在现有核心之上持续增加新的产品品类、服务渠道和业务模式，让新需求能够更快进入实施与运营','复用已有能力 · 加快需求落地']];
const operations=[['客户与账户','统一管理客户、机构及相关账户，为不同平台与终端提供一致的账户基础'],['产品管理','管理金融产品从准入、配置到渠道发布的完整过程'],['订单与交易','连接询价、订单处理、交易执行及状态跟踪'],['资产与运营','连接交易后的持仓、资产数据与持续运营任务']];
const clientCases=[
  {name:'星财富',logo:'/assets/client-logos/xingcaifu.png',type:'证券及经纪机构',summary:'“统一的业务流程，让产品上线与日常运营衔接得更加顺畅。”',background:'面向证券及经纪业务团队，通过数字化平台承接客户服务、金融产品与交易运营。',challenges:['客户、产品与交易信息分散在不同流程','产品上线涉及多个团队协同','日常运营需要减少跨系统操作'],applications:['客户与账户管理','金融产品运营','订单与交易流程','统一运营后台'],values:['统一关键业务流程与数据口径','提升产品上线和团队协作效率','为后续业务扩展提供统一基础']},
  {name:'陆浦',logo:'/assets/client-logos/lupu.png',type:'专业财富管理机构',summary:'“客户、产品和资产信息集中管理后，团队协作更加清晰高效。”',background:'服务专业投资者及财富管理团队，需要持续管理客户、产品、订单与资产运营。',challenges:['客户与资产信息需要集中管理','产品配置及服务流程较为复杂','不同角色之间需要高效协作'],applications:['客户关系与账户管理','产品准入与配置','订单及资产数据管理','多角色权限控制'],values:['形成统一的客户与资产视图','减少重复录入与人工核对','支持专业财富服务持续运营']},
  {name:'中泰',logo:'/assets/client-logos/zhongtai.png',type:'金融机构',summary:'“FinOne 帮助我们以统一能力支持不同财富业务场景的持续运营。”',background:'金融机构需要在现有 IT 与合规框架内，为不同团队和服务渠道提供财富业务能力。',challenges:['既有系统之间需要有效衔接','多渠道需要共享一致业务能力','业务扩展需兼顾权限与数据要求'],applications:['统一财富业务核心','标准化系统连接','产品与交易运营','权限及数据管理'],values:['连接现有系统与财富业务流程','为不同渠道提供一致能力','降低重复建设与维护复杂度']},
  {name:'WinSmart',logo:'/assets/client-logos/winsmart.png',type:'数字化财富平台',summary:'“灵活的产品与运营能力，让新服务能够更快进入客户使用场景。”',background:'数字化财富平台需要快速连接产品、交易和客户服务，并支持新场景持续上线。',challenges:['新产品与服务需要快速配置','客户终端与运营后台需要协同','业务增长要求平台具备扩展能力'],applications:['白标财富终端','金融产品管理','交易流程连接','资产与运营数据'],values:['缩短新服务进入客户场景的路径','保持前后台业务逻辑一致','支持产品和渠道持续扩展']},
];

function CoreVisual(){return <div className="f1-core-visual" aria-label="FinOne 财富核心业务流示意"><div className="f1-orbit a"/><div className="f1-orbit b"/><div className="f1-core"><small>FINONE</small><strong>财富<br/>核心</strong></div>{['开户','产品','交易','运营'].map((x,i)=><span className={`f1-node n${i+1}`} key={x}>{x}</span>)}</div>}
function UiPlaceholder({title,tone='account'}:{title:string,tone?:string}){return <div className={`f1-interface ${tone}`} aria-label={`${title}占位图`}><aside><b>F1</b><span className="active">总览</span><span>配置</span><span>运营</span></aside><div><header><strong>{title}</strong><i>界面占位</i></header><section><div/><div/><div/></section><figure><span/><span/><span/><span/><i/></figure></div></div>}
function SectionHead({label,title,copy}:{label?:string,title:string,copy:string}){return <>{label&&<p className="f1-eyebrow">{label}</p>}<h2>{title}</h2><p className="f1-lead">{copy}</p></>}

function OperationsSection(){
  const [active,setActive]=useState(0);
  const interfaceStates=[['客户与账户管理界面','account'],['金融产品管理界面','product'],['订单与交易管理界面','transaction'],['资产与运营界面','system']];
  return <section className="f1-ops f1-section"><div className="f1-shell"><SectionHead label="核心产品能力" title="贯通财富业务核心环节" copy="FinOne 将客户与账户、产品管理、订单与交易以及资产与运营整合在同一平台中，让各业务环节使用一致的流程和数据基础。"/><div className="f1-ops-grid"><div className="f1-ops-tabs" role="tablist" aria-label="统一财富运营能力">{operations.map(([title,copy],i)=><button type="button" role="tab" aria-selected={active===i} key={title} onClick={()=>setActive(i)}><h3>{title}</h3><p>{copy}</p></button>)}</div><div className="f1-ops-visual" role="tabpanel" aria-live="polite"><UiPlaceholder key={active} title={interfaceStates[active][0]} tone={interfaceStates[active][1]}/></div></div></div></section>
}

function AiSection(){
  const [active,setActive]=useState(0);
  const items=[
    {title:'AI 资讯',copy:'从金融资讯中提取与业务相关的信息',screen:'AI 资讯工作台',tone:'ai-news'},
    {title:'AI 推荐',copy:'辅助完成产品与客户需求匹配',screen:'AI 推荐工作台',tone:'ai-recommend'},
    {title:'智能订单',copy:'让 AI 参与订单处理与流程衔接',screen:'智能订单工作台',tone:'ai-order'},
    {title:'AI 对账',copy:'辅助处理数据核对与异常识别',screen:'AI 对账工作台',tone:'ai-reconcile'},
  ];
  return <section className="f1-ai f1-section"><div className="f1-shell"><SectionHead label="AI NATIVE" title="让 AI 进入财富业务工作流" copy="FinOne 将 AI 能力与产品、订单、资产和运营数据连接，在专业人员审核和权限控制下辅助处理高频业务任务。"/><div className="f1-ai-old-layout"><div className="f1-ai-visual" role="tabpanel" aria-live="polite"><UiPlaceholder key={active} title={items[active].screen} tone={items[active].tone}/></div><div className="f1-ai-flow" role="tablist" aria-label="FinOne AI 业务能力">{items.map((item,index)=><button type="button" role="tab" aria-selected={active===index} className={active===index?'active':''} key={item.title} onClick={()=>setActive(index)}><h3>{item.title}</h3><p>{item.copy}</p></button>)}</div></div></div></section>}

function ClientCasesSection(){
  const [activeCase,setActiveCase]=useState<(typeof clientCases)[number]|null>(null);
  const activeIndex=activeCase?clientCases.findIndex(item=>item.name===activeCase.name):-1;
  const moveCase=(step:number)=>setActiveCase(clientCases[(activeIndex+step+clientCases.length)%clientCases.length]);
  useEffect(()=>{
    if(!activeCase)return;
    const navigate=(event:KeyboardEvent)=>{
      if(event.key==='Escape')setActiveCase(null);
      if(event.key==='ArrowLeft')setActiveCase(clientCases[(activeIndex-1+clientCases.length)%clientCases.length]);
      if(event.key==='ArrowRight')setActiveCase(clientCases[(activeIndex+1)%clientCases.length]);
    };
    window.addEventListener('keydown',navigate);
    return()=>window.removeEventListener('keydown',navigate);
  },[activeCase]);
  return <section className="f1-proof platform-cases f1-section"><div className="f1-shell"><SectionHead label="客户案例" title="他们都使用 FinOne 运营管理财富业务" copy="从机构财富平台到企业财富服务，了解 FinOne 如何融入不同业务模式与运营流程"/><div className="f1-case-entries">{clientCases.map(item=><button type="button" key={item.name} onClick={()=>setActiveCase(item)} aria-haspopup="dialog"><div className="f1-client-logo"><img src={item.logo} alt={`${item.name} Logo`}/></div><h3>{item.name}</h3><small>{item.type}</small><p>{item.summary}</p></button>)}</div></div>{activeCase&&<div className="f1-case-modal" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setActiveCase(null)}}><button className="f1-case-side-nav prev" type="button" onClick={()=>moveCase(-1)} aria-label="上一个客户案例">←</button><article role="dialog" aria-modal="true" aria-labelledby="f1-case-title"><button className="f1-case-close" type="button" onClick={()=>setActiveCase(null)} aria-label="关闭案例详情">×</button><header><div className="f1-client-logo"><img src={activeCase.logo} alt=""/></div><div><small>{activeCase.type}</small><h2 id="f1-case-title">{activeCase.name}</h2></div></header><section className="f1-case-background"><h3>客户与业务背景</h3><p>{activeCase.background}</p></section><div className="f1-case-detail-grid"><section><h3>业务挑战</h3><ul>{activeCase.challenges.map(item=><li key={item}>{item}</li>)}</ul></section><section><h3>FinOne 应用</h3><ul>{activeCase.applications.map(item=><li key={item}>{item}</li>)}</ul></section><section><h3>业务价值</h3><ul>{activeCase.values.map(item=><li key={item}>{item}</li>)}</ul></section></div><blockquote>{activeCase.summary}</blockquote><div className="f1-case-modal-footer"><p className="f1-case-note">以上为页面展示用示例内容，具体项目范围、实施成果及客户评价须在正式发布前经客户确认。</p><span className="f1-case-count">{String(activeIndex+1).padStart(2,'0')} / {String(clientCases.length).padStart(2,'0')}</span></div></article><button className="f1-case-side-nav next" type="button" onClick={()=>moveCase(1)} aria-label="下一个客户案例">→</button></div>}</section>
}

export function FinOnePage(){return <main className="f1-page" id="main">
  <section className="f1-hero product-hero-standard" data-header-theme="inverse"><div className="f1-shell f1-hero-grid"><ProductHeroContent className="f1-hero-copy" category="FINONE · 财富业务核心" title={<>让财富业务更快上线<br />更易扩展</>} description="统一管理客户、账户、产品、交易与资产运营，支持机构按需构建白标财富、专业财富管理及嵌入式财富服务。" ctaLabel="预约产品演示"/><CoreVisual/></div></section>

  <section className="f1-shift f1-section"><div className="f1-shell"><SectionHead label="业务价值" title="用统一核心，降低财富业务建设复杂度" copy="将分散的业务能力和数据整合到统一平台，帮助机构减少重复建设，更快推出新产品、新渠道与新的财富服务。"/><div className="f1-core-value-system"><div className="f1-core-value-hub" aria-label="FinOne 统一财富核心示意"><div className="rings"><i/><i/><i/></div><small>FINONE</small><strong>财富核心</strong><p>{['账户','产品','交易','资产','运营','数据'].map(x=><span key={x}>{x}</span>)}</p><b>统一能力 · 统一数据 · 持续扩展</b></div><div className="f1-core-value-grid">{coreValues.map(([title,copy,result],i)=><article key={title}><span>0{i+1}</span><div className={`f1-value-glyph g${i+1}`} aria-hidden="true"><i/><i/><i/><i/></div><h3>{title}</h3><p>{copy}</p><strong>{result}</strong></article>)}</div></div></div></section>

  <section className="f1-approach f1-section"><div className="f1-shell"><SectionHead label="全场景运营中台" title="统一运营后台，连接内部平台与客户终端" copy="通过统一的业务能力、数据基础和连接方式，为内部运营平台与客户终端提供一致的财富业务支持。"/><div className="f1-channel-operating"><div className="f1-channel-groups"><section><div className="head"><small>内部业务平台</small><strong>支持不同团队开展财富业务</strong></div><div>{[['FinEAM','EAM 与家族办公室'],['星企通','企业财富服务'],['Web Portal','产品、交易与运营']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div></section><section><div className="head"><small>白标移动端与客户渠道</small><strong>承接机构自有品牌的客户体验</strong></div><div>{[['白标财富 App','完整财富服务终端'],['财富 H5','轻量化业务入口'],['嵌入式财富','接入已有客户场景']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div></section></div><div className="f1-channel-connector"><span>内部运营</span><i>↓</i><strong>共享同一套运营后台</strong><i>↓</i><span>客户服务</span></div><div className="f1-channel-core"><div><small>FINONE</small><h3>财富智能运营中台</h3><p>让内部平台与白标移动端使用一致的业务逻辑和数据基础</p></div><section>{['客户与账户','金融产品','交易流程','资产数据','业务运营','AI Native'].map(x=><span key={x}>{x}</span>)}</section></div></div></div></section>

  <OperationsSection/>

  <AiSection/>


  <section className="f1-enterprise f1-section"><div className="f1-shell"><SectionHead label="企业级架构" title="灵活部署，稳定支撑机构财富业务" copy="FinOne 支持机构根据现有 IT 架构、数据要求和业务规模选择适合的部署与集成方式。"/><div className="f1-deploy-grid">{[['灵活部署','SaaS 部署 / 本地部署'],['多租户与定制化','数据隔离、可选升级与差异化服务'],['DSU 部署架构','高性能、横向扩展、单元灰度发布与按需资源'],['跨区域多集群','降低单地域风险，定期灾备演练保障连续性']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div><div className="f1-enterprise-data">{[['99.9%','系统可用性'],['≤500ms','响应延时'],['≤5 min','RPO'],['≤30 min','RTO']].map(([d,t])=><article key={t}><strong>{d}</strong><span>{t}</span></article>)}</div></div></section>

  <PlatformTrustSection sectionClass="f1-section" shellClass="f1-shell" />
  <ClientCasesSection/>

  <section className="f1-cta"><div className="f1-shell"><h2>让下一项财富业务，更快上线</h2><p>从账户和金融产品，到交易、运营与 AI，FinOne 帮助机构在统一核心之上更快构建、上线和扩展财富业务</p><div><Link className="button button-light" to="/contact">预约 FinOne 演示 →</Link></div></div></section>
</main>}
