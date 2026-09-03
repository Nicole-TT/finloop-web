import { useState } from 'react';
import { Link } from 'react-router-dom';

const modes = [
  ['A', 'WHITE-LABEL APP', '白标财富与股票 App', '以你的品牌，推出完整财富终端', '独立 App・客户自主交易・合作机构自主运营・客户柜台 / FinMix', 'white-label'],
  ['B', 'EMBEDDED WEALTH H5', '嵌入式财富 H5', '无需重新建设 App，把财富服务接入现有用户旅程', 'H5 Embedded・客户线上开户・自主交易・通常由星路运营', 'embedded-h5'],
  ['C', 'ENTERPRISE WEALTH WEB', '企业财富 Web', '让企业客户在跨境资金场景中完成现金管理与投资', '企业账户・支付平台品牌・星企通能力・FinOne 运营', 'enterprise-web'],
] as const;

const rows = [
  ['采购方', '金融机构', '金融机构 / 数字平台', '跨境支付平台'],
  ['最终用户', 'C 端个人客户', 'C 端个人客户', '企业客户'],
  ['入口', '独立 App', '合作机构已有 App', '支付平台企业场景'],
  ['品牌', '合作机构品牌', '合作机构品牌', '支付平台品牌'],
  ['用户交易', '自主交易', '自主交易', '企业自主交易'],
  ['主要运营方', '合作机构', '通常由星路运营', '通常由星路运营'],
  ['开户主体', '根据柜台及合作模式确定', '根据柜台及合作模式确定', '企业名义开立星路金融账户'],
  ['主要中台', 'FinOne', 'FinOne', 'FinOne'],
];

const faq = [
  ['白标和嵌入有什么区别？', '白标以独立 App 承接完整终端，通常由合作机构运营；嵌入式 H5 进入已有 App 的用户旅程，通常由星路运营。'],
  ['我们已有柜台，还可以继续使用吗？', '白标 App 可按实际架构连接客户现有柜台，或使用星路自研 FinMix。'],
  ['白标客户是否拥有自己的管理后台？', '合作机构可通过 FinOne 管理产品、用户、账户、订单与运营配置。'],
  ['财富 H5 是否必须显示星路品牌？', '前端可保持合作机构品牌，但开户、协议、风险披露、交易等必要环节需按法律关系披露服务主体。'],
  ['企业财富 Web 是星企通吗？', '它不是企业版白标网站，而是在跨境支付平台企业场景中接入星企通业务能力和 FinOne 中台。'],
  ['支持哪些财富产品？', '产品范围按交付模式、目标客群、柜台和准入条件分别确认。'],
  ['是否支持港股 / 美股？', '港股与美股能力尚在开发中，不作为已上线能力表述。'],
  ['是否支持自定义 UI？', '当前可确认 Logo、品牌名称与主色；其他组件级定制范围待确认，不承诺“完全自定义 UI”。'],
  ['谁负责 App 上架？', 'App Store / Google Play 上架责任需在合作方案中确认。'],
  ['嵌入模式是否可以开放 FinOne 权限？', '嵌入模式通常由星路运营；是否开放部分 FinOne 权限待确认。'],
];

function Head({n: _n,title,copy}:{n:string;title:string;copy?:string}){return <header className="goal-head goal-head-plain"><div><h2>{title}</h2>{copy&&<p>{copy}</p>}</div></header>}

export function WhiteLabelEmbeddedSolutionPage(){
  const [activeMode, setActiveMode] = useState(0);
  const mode = modes[activeMode];
  return <main className="goal-page iw-page iw-v3 goal-modern wle-page" id="main">
  <section className="goal-hero iw-hero" data-header-theme="inverse"><div className="goal-shell"><p className="goal-eyebrow">白标与嵌入式金融解决方案</p><h1>财富服务，融入品牌与客户场景</h1><p className="goal-intro">通过白标 App、嵌入式财富 H5 和企业财富 Web，将多资产财富服务带入合作机构已有品牌、渠道与客户关系，并由统一财富中台持续支撑产品与运营。</p><div className="goal-hero-actions"><Link className="button button-accent" to="/contact">联系我们</Link><a href="#modes">了解接入模式 ↓</a></div></div></section>

  <section className="goal-section iw-audience wle-context"><div className="goal-shell"><div className="iw-audience-copy"><small>背景现状</small><h2>财富服务正在从独立平台进入已有客户场景</h2><p>金融机构和数字平台已经拥有自己的品牌、渠道与客户关系。相比从零建设一套财富系统，更高效的方式是将账户、产品、交易和资产能力接入现有用户旅程。</p></div><figure aria-label="品牌、渠道与财富能力连接示意图"><div><strong>你的品牌与渠道</strong><span>现有 App</span><span>数字平台</span><span>企业服务入口</span></div><b>连接</b><div><strong>财富服务能力</strong><span>账户</span><span>产品与交易</span><span>资产与运营</span></div></figure></div></section>

  <section className="goal-section wle-challenge-section"><div className="goal-shell"><Head n="" title="保留品牌与客户关系，快速补齐财富能力" copy="根据现有渠道、目标用户与运营方式，选择适合的终端和系统连接方式。"/><div className="wle-challenges">{[['无需重建完整系统','复用现有品牌、登录体系与用户入口，减少重复建设。'],['保持连续客户体验','让开户、产品、交易与持仓进入用户熟悉的渠道。'],['灵活连接现有基础','可根据项目连接现有柜台、FinOne、FinMix 及相关系统。'],['明确运营与合规边界','根据接入模式确定品牌展示、账户关系、运营责任与必要披露。']].map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

  <section className="goal-section iw-integrated" id="modes"><div className="goal-shell"><Head n="" title="选择适合你的财富服务模式" copy="三种模式共享 FinOne 财富核心，但采购目标、运营责任、账户关系与品牌披露不同。"/><div className="iw-capability-tabs wle-mode-tabs" role="tablist" aria-label="白标与嵌入式财富服务模式">{modes.map((item,i)=><button key={item[0]} id={`wle-mode-tab-${i}`} role="tab" aria-selected={activeMode===i} aria-controls="wle-mode-panel" onClick={()=>setActiveMode(i)}>{item[2]}</button>)}</div><article className="iw-capability-panel wle-mode-panel" id="wle-mode-panel" role="tabpanel" aria-labelledby={`wle-mode-tab-${activeMode}`}><figure aria-hidden="true"><div className="wle-mode-flow"><strong>{mode[2]}</strong>{mode[4].split('・').map((item,i)=><span key={item}><b>0{i+1}</b>{item}</span>)}</div></figure><div className="iw-capability-copy"><small>模式 {mode[0]}</small><h3>{mode[3]}</h3><p>{mode[2]}适用于需要在既有品牌和客户关系中增加财富服务的合作机构，并根据实际项目确定前端、账户、交易与运营安排。</p><div className="iw-capability-items">{mode[4].split('・').map(item=><span key={item}>{item}</span>)}</div><footer><a href="#comparison">查看模式对比 ↓</a></footer></div></article></div></section>
  <section className="goal-section goal-soft" id="comparison"><div className="goal-shell"><Head n="02" title="三种模式对比"/><div className="wle-table"><header><span>对比维度</span><strong>白标 App</strong><strong>嵌入式 H5</strong><strong>企业财富 Web</strong></header>{rows.map(row=><div key={row[0]}>{row.map((x,i)=>i?<span key={i}>{x}</span>:<strong key={i}>{x}</strong>)}</div>)}</div></div></section>
  <section className="goal-section goal-panorama-section" id="finone"><div className="goal-shell"><Head n="04" title="一个财富核心，支撑不同渠道与品牌" copy="白标模式下合作机构可通过 FinOne 自主运营；嵌入模式下通常由星路团队运营。"/><div className="wle-finone"><strong>FinOne<small>WEALTH CORE</small></strong>{[['Product','产品上架、范围、状态与渠道配置'],['Customer & Account','用户、账户与客户状态'],['Transaction','Orders、Asset、Holdings、Cash Flow 与 Statements'],['Experience & Operations','前端、内容、渠道与用户运营'],['Integration','Customer Brokerage System、FinMix 与 APIs']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <section className="goal-section" id="delivery"><div className="goal-shell"><Head n="05" title="从业务设计到持续运营"/><ol className="goal-timeline">{[['Business Design','确认业务模式、客群、产品范围、账户及柜台架构。'],['Product & Branding Configuration','配置品牌、功能、产品与运营方式。'],['System Integration & Compliance','完成 API、SSO / Login、Account、Fund Flow、Compliance 与 Disclosure。'],['Go Live & Continuous Operations','上线后持续进行产品、用户、交易运营与迭代。']].map(([t,p],i)=><li key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{p}</p></div></li>)}</ol></div></section>
  <section className="goal-section goal-soft"><div className="goal-shell"><Head n="06" title="客户案例"/><div className="wle-cases"><article><small>已上线·待授权补充</small><h3>陆浦财富 App</h3><p>授权素材、上线范围、产品范围和用户功能待补充。</p></article><article><small>待补充</small><h3>Embedded H5</h3><p>真实客户案例待补充。</p></article><article><small>待补充</small><h3>企业财富 Web</h3><p>跨境支付客户案例及公开授权待确认。</p></article></div></div></section>
  <section className="goal-section" id="faq"><div className="goal-shell"><Head n="07" title="常见问题"/><div className="goal-faq">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
  <section className="goal-cta"><div className="goal-shell"><h2>为你选择适合的品牌、渠道与财富服务模式</h2><div><Link className="button button-light" to="/contact">咨询合作方案</Link><a href="#comparison">查看三种模式对比 ↑</a></div></div></section>
</main>}
