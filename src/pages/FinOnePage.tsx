import { useState } from 'react';
import { Link } from 'react-router-dom';

const shifts=[['多终端','机构平台、客户 App、企业平台与嵌入式财富'],['多资产','基金、债券、票据、另类资产与 Web3 / RWA'],['多业务模式','SaaS、白标、API 与嵌入式服务'],['AI 驱动','研究、产品、交易、运营与营销']];
const businesses=[['FinEAM','EAM 与家族办公室'],['星企通','企业财富'],['白标财富 / 股票应用','自有品牌财富体验'],['嵌入式财富','合作伙伴平台']];
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
  <section className="f1-hero" data-header-theme="inverse"><div className="f1-shell f1-hero-grid"><div className="f1-hero-copy"><p className="f1-eyebrow">FINONE · 财富核心</p><h1>FinOne 支持不断变化的财富业务</h1><p>将账户、产品、交易与运营能力沉淀到统一财富核心，通过全品类产品与 AI Native，帮助机构更快上线和扩展财富业务</p><div className="f1-pills"><span>Unified Account</span><span>Full Product</span><span>AI Native</span></div><div className="f1-actions"><Link className="button button-accent" to="/contact">预约产品演示 →</Link><a href="#capabilities">了解平台能力 ↓</a></div></div><CoreVisual/></div></section>

  <section className="f1-shift f1-section"><div className="f1-shell"><SectionHead label="业务变化" title="财富业务越丰富，新业务越不应该重复建设" copy="产品、终端、业务模式与 AI 能力持续增加，但底层能力不必随之重复搭建。"/><div className="f1-shift-system f1-shift-system-simple"><div className="f1-complexity">{shifts.map(([t,p],i)=><article key={t}><div className={`f1-shift-visual v${i+1}`}><span>0{i+1}</span><i/><i/><i/></div><div><h3>{t}</h3><p>{p}</p></div></article>)}</div><div className="f1-shift-conclusion"><small>重复建设的结果</small><strong>每扩展一项业务，系统复杂度都会再次累积</strong><span>账户 · 产品 · 交易 · 运营</span></div></div></div></section>

  <section className="f1-approach f1-section"><div className="f1-shell"><SectionHead label="FINONE 方法" title="一个可复用的财富核心，支撑多种财富业务" copy="机构增加产品、渠道或新的财富业务时，可复用统一账户、金融产品、交易和运营能力，无需重新搭建完整底层系统"/><div className="f1-fusion-stage"><div className="f1-fusion-label"><span>业务应用</span><small>不同机构、渠道与终端</small></div><div className="f1-fusion-apps">{businesses.map(([t,p],i)=><article key={t}><span>0{i+1}</span><small>{p}</small><h3>{t}</h3></article>)}</div><div className="f1-fusion-core"><div><small>FINONE</small><strong>财富核心</strong><span>所有业务应用共享</span></div><p>{['账户','金融产品','交易','运营'].map(x=><span key={x}>{x}</span>)}</p></div><div className="f1-fusion-foundation">{[['数据','统一业务数据基础'],['工作流','连接财富业务全流程'],['连接能力','对接金融产品与机构生态']].map(([t,p])=><article key={t}><strong>{t}</strong><span>{p}</span></article>)}</div></div></div></section>

  <OperationsSection/>

  <AiSection/>


  <section className="f1-enterprise f1-section"><div className="f1-shell"><SectionHead label="企业级架构" title="为机构级财富业务构建的高可用架构" copy="机构可根据数据、安全、合规与 IT 架构选择部署方式，并通过多租户隔离、跨区域多集群和灾备保障业务连续性"/><div className="f1-deploy-grid">{[['灵活部署','SaaS 部署 / 本地部署'],['多租户与定制化','数据隔离、可选升级与差异化服务'],['DSU 部署架构','高性能、横向扩展、单元灰度发布与按需资源'],['跨区域多集群','降低单地域风险，定期灾备演练保障连续性']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div><div className="f1-enterprise-data">{[['99.9%','系统可用性'],['≤500ms','响应延时'],['≤5 min','RPO'],['≤30 min','RTO']].map(([d,t])=><article key={t}><strong>{d}</strong><span>{t}</span></article>)}</div></div></section>

  <section className="f1-proof f1-section"><div className="f1-shell"><SectionHead label="客户案例" title="FinOne 在不同财富业务场景中的实践" copy="从机构财富平台到企业财富服务，了解 FinOne 如何融入不同业务模式与运营流程"/><div className="f1-case-entries">{[['01','证券及经纪机构','星财富业务上线','连接开户、金融产品、交易与展业流程','/solutions/broker'],['02','EAM 与家族办公室','一体化财富运营','统一管理客户、产品、交易与资产运营','/products/fineam'],['03','企业财富服务','企业资金管理','支持企业客户开展现金管理与财富配置','/products/xingqitong'],['04','数字资产场景','新型资产服务','将数字资产接入统一的产品与运营流程','/products/finrwa']].map(([n,type,title,copy,to])=><Link key={n} to={to}><span>{n}</span><small>{type}</small><h3>{title}</h3><p>{copy}</p><b>查看相关实践 →</b></Link>)}</div></div></section>

  <section className="f1-cta"><div className="f1-shell"><h2>用一个财富核心<br/>支撑您的下一项财富业务</h2><p>从账户和金融产品，到交易、运营与 AI，FinOne 帮助机构在统一核心之上更快构建、上线和扩展财富业务</p><div><Link className="button button-light" to="/contact">预约 FinOne 演示 →</Link><a href="mailto:CS@finloop.hk">联系产品团队</a></div></div></section>
</main>}
