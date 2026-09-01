import { useState } from 'react';
import { Link } from 'react-router-dom';

const coreValues=[['业务全链路闭环','从开户、产品到交易、资产与运营，一套核心贯穿完整财富业务流程','更少系统衔接 · 更高运营效率'],['数据天然贯通','统一账户、产品、订单与资产数据，为业务分析和 AI 提供一致的数据基础','减少数据孤岛 · AI Ready'],['核心能力复用','账户、产品、交易等底层能力可以被不同平台和财富场景持续共享','减少重复建设 · 降低系统成本'],['业务快速扩展','在同一核心逻辑上持续增加新品类、新渠道和新业务，无需重新建设核心系统','更快上线 · 持续扩展']];
const operations=[['Unified Account','统一账户','让不同财富终端共享一致的账户基础'],['Product Operations','金融产品运营','统一金融产品准入、配置、上线与渠道同步'],['Transaction','交易与清结算连接','将产品连接到订单、交易与后端金融基础设施'],['Asset & Operations','资产与运营','连接持仓、资产数据与后续业务运营']];

function CoreVisual(){return <div className="f1-core-visual" aria-label="FinOne 财富核心业务流示意"><div className="f1-orbit a"/><div className="f1-orbit b"/><div className="f1-core"><small>FINONE</small><strong>财富<br/>核心</strong></div>{['开户','产品','交易','运营'].map((x,i)=><span className={`f1-node n${i+1}`} key={x}>{x}</span>)}</div>}
function UiPlaceholder({title,tone='account'}:{title:string,tone?:string}){return <div className={`f1-interface ${tone}`} aria-label={`${title}占位图`}><aside><b>F1</b><span className="active">总览</span><span>配置</span><span>运营</span></aside><div><header><strong>{title}</strong><i>界面占位</i></header><section><div/><div/><div/></section><figure><span/><span/><span/><span/><i/></figure></div></div>}
function SectionHead({label,title,copy}:{label?:string,title:string,copy:string}){return <>{label&&<p className="f1-eyebrow">{label}</p>}<h2>{title}</h2><p className="f1-lead">{copy}</p></>}

function OperationsSection(){
  const [active,setActive]=useState(0);
  const interfaceStates=[['统一账户管理界面','account'],['金融产品运营界面','product'],['交易与清结算界面','transaction'],['资产与运营界面','system']];
  return <section className="f1-ops f1-section"><div className="f1-shell"><SectionHead label="UNIFIED WEALTH OPERATIONS" title="统一核心，连接账户与交易" copy="FinOne 统一的不只是账户，还包括金融产品准入、交易连接、资产数据与持续运营"/><div className="f1-ops-grid"><div className="f1-ops-tabs" role="tablist" aria-label="统一财富运营能力">{operations.map(([e,t,p],i)=><button type="button" role="tab" aria-selected={active===i} key={e} onClick={()=>setActive(i)}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></button>)}</div><div className="f1-ops-visual" role="tabpanel" aria-live="polite"><UiPlaceholder key={active} title={interfaceStates[active][0]} tone={interfaceStates[active][1]}/></div></div></div></section>
}

function AiSection(){return <section className="f1-ai f1-section"><div className="f1-shell"><SectionHead label="AI NATIVE" title="从数据到行动，让 AI 进入财富业务工作流" copy="FinOne 基于开放 API 与可靠数据底座，将资讯、推荐、订单与对账连接为可执行的业务流程"/><div className="f1-ai-old-layout"><UiPlaceholder title="AI 工作流界面" tone="ai"/><div className="f1-ai-flow">{[['01','AI 资讯','从金融资讯中提取与业务相关的信息'],['02','AI 推荐','辅助完成产品与客户需求匹配'],['03','智能订单','让 AI 参与订单处理与流程衔接'],['04','AI 对账','辅助处理数据核对与异常识别']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>}

export function FinOnePage(){return <main className="f1-page" id="main">
  <section className="f1-hero" data-header-theme="inverse"><div className="f1-shell f1-hero-grid"><div className="f1-hero-copy"><p className="f1-eyebrow">FINONE · 财富核心</p><h1>FinOne 支持不断变化的财富业务</h1><p>将账户、产品、交易与运营能力沉淀到统一财富核心，通过全品类产品与 AI Native，帮助机构更快上线和扩展财富业务。灵活支撑白标 App、机构财富、嵌入式财富及更多数字财富场景。</p></div><CoreVisual/></div></section>

  <section className="f1-shift f1-section"><div className="f1-shell"><SectionHead label="统一财富核心" title="贯通业务与数据，让财富能力持续复用与扩展" copy="从账户、产品到交易与数据，FinOne 将分散的财富业务能力整合在统一核心中，让不同业务共享能力、共享数据，并持续扩展。"/><div className="f1-core-value-system"><div className="f1-core-value-hub" aria-label="FinOne 统一财富核心示意"><div className="rings"><i/><i/><i/></div><small>FINONE</small><strong>财富核心</strong><p>{['账户','产品','交易','资产','运营','数据'].map(x=><span key={x}>{x}</span>)}</p><b>统一能力 · 统一数据 · 持续扩展</b></div><div className="f1-core-value-grid">{coreValues.map(([title,copy,result],i)=><article key={title}><span>0{i+1}</span><div className={`f1-value-glyph g${i+1}`} aria-hidden="true"><i/><i/><i/><i/></div><h3>{title}</h3><p>{copy}</p><strong>{result}</strong></article>)}</div></div></div></section>

  <section className="f1-approach f1-section"><div className="f1-shell"><SectionHead label="全场景运营中台" title="一套 FinOne，支撑业务运营与客户终端" copy="无论是面向内部团队的业务平台，还是直接服务客户的白标 App 与 H5，都可以共享 FinOne 的账户、产品、交易、资产和运营能力。"/><div className="f1-channel-operating"><div className="f1-channel-groups"><section><div className="head"><small>内部业务平台</small><strong>支持不同团队开展财富业务</strong></div><div>{[['FinEAM','EAM 与家族办公室'],['星企通','企业财富服务'],['机构工作台','产品、交易与运营']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section><section><div className="head"><small>白标移动端与客户渠道</small><strong>承接机构自有品牌的客户体验</strong></div><div>{[['白标财富 App','完整财富服务终端'],['财富 H5','轻量化业务入口'],['嵌入式财富','接入已有客户场景']].map(([t,p],i)=><article key={t}><span>0{i+4}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section></div><div className="f1-channel-connector"><span>内部运营</span><i>↓</i><strong>共享同一套运营后台</strong><i>↓</i><span>客户服务</span></div><div className="f1-channel-core"><div><small>FINONE</small><h3>财富智能运营中台</h3><p>让内部平台与白标移动端使用一致的业务逻辑和数据基础</p></div><section>{['客户与账户','金融产品','交易流程','资产数据','业务运营','AI Native'].map(x=><span key={x}>{x}</span>)}</section></div></div></div></section>

  <OperationsSection/>

  <AiSection/>


  <section className="f1-enterprise f1-section"><div className="f1-shell"><SectionHead label="企业级架构" title="为机构级财富业务构建的高可用架构" copy="机构可根据数据、安全、合规与 IT 架构选择部署方式，并通过多租户隔离、跨区域多集群和灾备保障业务连续性"/><div className="f1-deploy-grid">{[['灵活部署','SaaS 部署 / 本地部署'],['多租户与定制化','数据隔离、可选升级与差异化服务'],['DSU 部署架构','高性能、横向扩展、单元灰度发布与按需资源'],['跨区域多集群','降低单地域风险，定期灾备演练保障连续性']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div><div className="f1-enterprise-data">{[['99.9%','系统可用性'],['≤500ms','响应延时'],['≤5 min','RPO'],['≤30 min','RTO']].map(([d,t])=><article key={t}><strong>{d}</strong><span>{t}</span></article>)}</div></div></section>

  <section className="f1-proof f1-section"><div className="f1-shell"><SectionHead label="客户案例" title="FinOne 在不同财富业务场景中的实践" copy="从机构财富平台到企业财富服务，了解 FinOne 如何融入不同业务模式与运营流程"/><div className="f1-case-entries">{[['01','证券及经纪机构','星财富业务上线','连接开户、金融产品、交易与展业流程','/solutions/broker'],['02','EAM 与家族办公室','一体化财富运营','统一管理客户、产品、交易与资产运营','/products/fineam'],['03','企业财富服务','企业资金管理','支持企业客户开展现金管理与财富配置','/products/xingqitong'],['04','数字资产场景','新型资产服务','将数字资产接入统一的产品与运营流程','/products/finrwa']].map(([n,type,title,copy,to])=><Link key={n} to={to}><span>{n}</span><small>{type}</small><h3>{title}</h3><p>{copy}</p><b>查看相关实践 →</b></Link>)}</div></div></section>

  <section className="f1-cta"><div className="f1-shell"><h2>用一个财富核心<br/>支撑您的下一项财富业务</h2><p>从账户和金融产品，到交易、运营与 AI，FinOne 帮助机构在统一核心之上更快构建、上线和扩展财富业务</p><div><Link className="button button-light" to="/contact">预约 FinOne 演示 →</Link><a href="mailto:CS@finloop.hk">联系产品团队</a></div></div></section>
</main>}
