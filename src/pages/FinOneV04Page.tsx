import { useState } from 'react';
import { Link } from 'react-router-dom';

const lifecycle = [
  ['客户与账户', ['开户', '客户资料', '账户', '客户状态']],
  ['产品', ['产品接入', '产品资料', '产品配置', '上下架']],
  ['投资交易', ['订单', '交易处理', '交易状态', '交易记录']],
  ['资产持仓', ['持仓', '资产', '资金', '交易记录']],
  ['持续运营', ['结单', '业务配置', '内容与数据', '客户服务']],
];

const legacyOperations=[['Unified Account','统一账户','让不同财富终端共享一致的账户基础'],['Product Operations','金融产品运营','统一金融产品准入、配置、上线与渠道同步'],['Transaction','交易与清结算连接','将产品连接到订单、交易与后端金融基础设施'],['Asset & Operations','资产与运营','连接持仓、资产数据与后续业务运营']];

function Head({label,title,copy}:{label:string,title:string,copy:string}) {
  return <div className="f104-head"><p>{label}</p><h2>{title}</h2><span>{copy}</span></div>;
}

function ProductFrame({title='FinOne 财富运营中台'}:{title?:string}) {
  return <div className="f104-product-frame" aria-label={`${title}界面占位`}>
    <aside><strong>F1</strong>{['客户','账户','产品','交易','资产','运营'].map((item,i)=><i className={i===2?'active':''} key={item}>{item}</i>)}</aside>
    <div><header><b>{title}</b><span>产品界面占位</span></header><section><div/><div/><div/></section><figure><div><i/><i/><i/></div><div><i/><i/></div></figure></div>
  </div>;
}

function LegacyUiPlaceholder({title,tone='account'}:{title:string,tone?:string}){return <div className={`f1-interface ${tone}`} aria-label={`${title}占位图`}><aside><b>F1</b><span className="active">总览</span><span>配置</span><span>运营</span></aside><div><header><strong>{title}</strong><i>界面占位</i></header><section><div/><div/><div/></section><figure><span/><span/><span/><span/><i/></figure></div></div>}
function LegacySectionHead({label,title,copy}:{label:string,title:string,copy:string}){return <><p className="f1-eyebrow">{label}</p><h2>{title}</h2><p className="f1-lead">{copy}</p></>}
function LegacyOperationsSection(){const [active,setActive]=useState(0);const states=[['统一账户管理界面','account'],['金融产品运营界面','product'],['交易与清结算界面','transaction'],['资产与运营界面','system']];return <section className="f1-ops f1-section"><div className="f1-shell"><LegacySectionHead label="UNIFIED WEALTH OPERATIONS" title="统一核心，连接账户与交易" copy="FinOne 统一的不只是账户，还包括金融产品准入、交易连接、资产数据与持续运营"/><div className="f1-ops-grid"><div className="f1-ops-tabs" role="tablist" aria-label="统一财富运营能力">{legacyOperations.map(([e,t,p],i)=><button type="button" role="tab" aria-selected={active===i} key={e} onClick={()=>setActive(i)}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></button>)}</div><div className="f1-ops-visual" role="tabpanel" aria-live="polite"><LegacyUiPlaceholder key={active} title={states[active][0]} tone={states[active][1]}/></div></div></div></section>}
function LegacyAiSection(){return <section className="f1-ai f1-section"><div className="f1-shell"><LegacySectionHead label="AI NATIVE" title="从数据到行动，让 AI 进入财富业务工作流" copy="FinOne 基于开放 API 与可靠数据底座，将资讯、推荐、订单与对账连接为可执行的业务流程"/><div className="f1-ai-old-layout"><LegacyUiPlaceholder title="AI 工作流界面" tone="ai"/><div className="f1-ai-flow">{[['01','AI 资讯','从金融资讯中提取与业务相关的信息'],['02','AI 推荐','辅助完成产品与客户需求匹配'],['03','智能订单','让 AI 参与订单处理与流程衔接'],['04','AI 对账','辅助处理数据核对与异常识别']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>}

export function FinOneV04Page(){return <main className="f104-page" id="main">
  <section className="f104-hero" data-header-theme="inverse"><div className="f104-shell f104-hero-grid"><div className="f104-hero-copy"><p>FINONE · AI-NATIVE WEALTH PLATFORM</p><h1>FinOne 一站式财富智能运营中台</h1><span>统一管理客户、账户、产品、交易、资产与运营，并将 AI 融入财富业务流程，为机构自有 App / H5 提供持续可扩展的数字财富能力。</span><div className="f104-tags"><i>统一账户</i><i>灵活全品类</i><i>AI Native</i></div><div className="f104-actions"><Link className="button button-accent" to="/contact">咨询 FinOne →</Link><Link to="/products/white-label-app">了解白标财富 App</Link></div></div><div className="f104-hero-visual" aria-label="财富 App 与 FinOne 数据及业务流示意"><div className="app"><small>您的财富 App / H5</small><strong>客户体验</strong><p>{['客户','产品','交易','资产'].map(x=><span key={x}>{x}</span>)}</p></div><div className="flow"><span>数据与业务流</span><i>↕</i></div><div className="platform"><small>FINONE</small><strong>财富运营中台</strong><p>Client · Product · Trading · Asset · Operations</p><div>AI Native <span>Insight · Recommendation · Automation</span></div></div></div></div></section>

  <section className="f104-frontback f104-section"><div className="f104-shell"><Head label="APP × FINONE" title="财富 App 不只是一个前端界面" copy="客户看到的每一次开户、产品浏览、投资交易和资产查询，背后都需要完整的业务管理、运营和数据能力。"/><div className="f104-frontback-grid"><div className="f104-client-screen"><img src="/assets/finone-onboarding.png" alt="FinOne 客户开户与账户管理界面"/><span>客户使用 App / H5</span></div><div className="f104-mapping"><span>客户开户<b>客户与账户管理</b></span><span>浏览产品<b>产品接入与配置</b></span><span>提交交易<b>订单与交易运营</b></span><span>查询资产<b>持仓与资产数据</b></span></div><ProductFrame/></div><blockquote>前端负责客户体验，FinOne 负责让整套财富业务持续运转</blockquote></div></section>

  <section className="f104-lifecycle f104-section"><div className="f104-shell"><Head label="FRONT-TO-BACK" title="从客户进入到持续资产服务，在一个体系中运营" copy="让客户、产品、交易、资产与运营不再分散在彼此割裂的流程中。"/><div className="f104-life-rail">{lifecycle.map(([title,items],i)=><article key={title as string}><span>0{i+1}</span><h3>{title as string}</h3><div>{(items as string[]).map(item=><i key={item}>{item}</i>)}</div></article>)}</div><div className="f104-intelligence"><strong>AI Native Intelligence Layer</strong><div>{['资讯理解','产品洞察','智能推荐','订单辅助','自动对账','运营分析'].map(item=><span key={item}>{item}</span>)}</div></div></div></section>

  <LegacyOperationsSection/>

  <LegacyAiSection/>

  <section className="f104-config f104-section"><div className="f104-shell"><Head label="BUSINESS CONFIGURATION" title="根据您的业务，配置属于自己的财富服务" copy="产品、功能与智能能力可以根据实际财富业务逐步扩展，而无需重新建设整套系统。"/><div className="f104-config-stage"><div className="f104-config-columns">{[['产品配置',['基金','债券','结构化产品','私募','其他财富产品']],['功能配置',['开户','产品','交易','资产','结单','其他服务']],['AI 能力配置',['资讯','产品洞察','推荐','订单','对账']]].map(([title,items],i)=><article key={title as string}><span>0{i+1}</span><h3>{title as string}</h3><div>{(items as string[]).map(item=><i key={item}>{item}</i>)}</div></article>)}</div><div className="f104-config-flow"><span>按业务选择</span><b>FINONE</b><span>持续配置与扩展</span></div></div></div></section>

  <section className="f104-channels f104-section"><div className="f104-shell"><Head label="MULTI-CHANNEL" title="前端灵活变化，核心运营能力持续复用" copy="一个 FinOne 后台，可以持续支撑不同品牌、终端和数字财富服务形态。"/><div className="f104-channel-map"><div>{['白标财富 App','财富 H5','H5 嵌入已有 App','白标股票 App'].map((item,i)=><article key={item}><span>0{i+1}</span><strong>{item}</strong></article>)}</div><section><small>统一运营后台</small><strong>FinOne</strong><p>客户 · 产品 · 交易 · 资产 · 运营</p><i>AI Native</i></section></div><p className="f104-reuse">核心能力已被复用于 FinEAM、星企通及嵌入式财富等多个数字财富业务场景</p></div></section>

  <section className="f104-infra f104-section"><div className="f104-shell"><Head label="WEALTH INFRASTRUCTURE" title="从智能财富运营连接到底层金融基础设施" copy="FinOne 向上支撑数字财富终端，向下连接交易运营基础设施与金融机构网络。"/><div className="f104-infra-stack"><div><small>数字财富终端</small><p>{['App','H5','Embedded'].map(x=><span key={x}>{x}</span>)}</p></div><div className="finone"><small>AI Native Wealth Operations</small><strong>FinOne</strong><p>客户 · 账户 · 产品 · 交易 · 资产 · 运营</p></div><div className="intelligence"><small>横向智能能力</small><strong>AI · Agent · Data</strong></div><div><small>交易与运营基础设施</small><strong>FinMix</strong></div><div><small>金融机构网络</small><p>{['银行','券商','基金公司','产品机构','交易对手'].map(x=><span key={x}>{x}</span>)}</p></div></div><div className="f104-traits">{[['Unified Account','一个账户与数据核心','统一连接客户、账户、资产与不同数字财富业务'],['Multi-asset','财富产品灵活扩展','基于统一平台持续配置和扩展不同财富产品'],['AI Native','智能能力原生进入业务流','AI 参与资讯、产品、推荐、订单、对账及运营']].map(([en,t,p])=><article key={en}><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div><div className="f104-proof"><div><small>真实业务验证</small><h3>已上线白标财富业务</h3><p>FinOne 的核心能力已在白标财富、机构财富、企业财富与嵌入式财富等业务场景中持续复用。</p></div><strong>陆浦财富 App</strong></div></div></section>

  <section className="f104-cta"><div className="f104-shell"><h2>用 AI Native 财富中台<br/>运营下一代数字财富业务</h2><p>基于 FinOne 统一配置客户、产品、交易和资产服务，并将 AI 融入日常财富运营，为您的 App / H5 提供持续可扩展的数字财富能力。</p><div><Link className="button button-light" to="/contact">咨询 FinOne →</Link><Link to="/products/white-label-app">了解白标财富 App</Link></div></div></section>
</main>}
