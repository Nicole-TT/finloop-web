import { Link } from 'react-router-dom';

const shifts=[['多终端','机构平台、客户 App、企业平台与嵌入式财富'],['多资产','基金、债券、票据、另类资产与 Web3 / RWA'],['多业务模式','SaaS、白标、API 与嵌入式服务'],['AI 驱动','研究、产品、交易、运营与营销']];
const businesses=[['FinEAM','EAM 与家族办公室'],['星企通','企业财富'],['白标财富 / 股票应用','自有品牌财富体验'],['嵌入式财富','合作伙伴平台'],['其他财富应用','其他业务终端']];
const operations=[['Unified Account','统一账户','让不同财富终端共享一致的账户基础'],['Product Operations','金融产品运营','统一金融产品准入、配置、上线与渠道同步'],['Transaction','交易与清结算连接','将产品连接到订单、交易与后端金融基础设施'],['Asset & Operations','资产与运营','连接持仓、资产数据与后续业务运营']];

function CoreVisual(){return <div className="f1-core-visual" aria-label="FinOne 财富核心业务流示意"><div className="f1-orbit a"/><div className="f1-orbit b"/><div className="f1-core"><small>FINONE</small><strong>财富<br/>核心</strong></div>{['开户','产品','交易','运营'].map((x,i)=><span className={`f1-node n${i+1}`} key={x}>{x}</span>)}</div>}
function UiPlaceholder({title,tone='account'}:{title:string,tone?:string}){return <div className={`f1-interface ${tone}`} aria-label={`${title}占位图`}><aside><b>F1</b><span className="active">总览</span><span>配置</span><span>运营</span></aside><div><header><strong>{title}</strong><i>界面占位</i></header><section><div/><div/><div/></section><figure><span/><span/><span/><span/><i/></figure></div></div>}
function SectionHead({label,title,copy}:{label?:string,title:string,copy:string}){return <>{label&&<p className="f1-eyebrow">{label}</p>}<h2>{title}</h2><p className="f1-lead">{copy}</p></>}

function AiSection(){return <section className="f1-ai f1-section"><div className="f1-shell"><SectionHead label="AI NATIVE" title="从数据到行动，让 AI 进入财富业务工作流" copy="FinOne 基于开放 API 与可靠数据底座，将资讯、推荐、订单与对账连接为可执行的业务流程"/><div className="f1-ai-old-layout"><div className="f1-ai-flow">{[['01','AI 资讯','从金融资讯中提取与业务相关的信息'],['02','AI 推荐','辅助完成产品与客户需求匹配'],['03','智能订单','让 AI 参与订单处理与流程衔接'],['04','AI 对账','辅助处理数据核对与异常识别']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div><UiPlaceholder title="AI 工作流界面" tone="ai"/></div></div></section>}

export function FinOnePage(){return <main className="f1-page" id="main">
  <section className="f1-hero" data-header-theme="inverse"><div className="f1-shell f1-hero-grid"><div className="f1-hero-copy"><p className="f1-eyebrow">FINONE · 财富核心</p><h1>一个财富核心<br/>支撑不断变化的财富业务</h1><p>将账户、产品、交易与运营能力沉淀到统一财富核心，通过全品类产品与 AI Native，帮助机构更快上线和扩展财富业务</p><div className="f1-pills"><span>Unified Account</span><span>Full Product</span><span>AI Native</span></div><div className="f1-actions"><Link className="button button-accent" to="/contact">预约产品演示 →</Link><a href="#capabilities">了解平台能力 ↓</a></div><small className="f1-hero-proof">从系统接入到业务展业，最快 3 个工作日*</small></div><CoreVisual/></div></section>

  <section className="f1-shift f1-section"><div className="f1-shell"><SectionHead label="业务变化" title="财富业务越丰富，核心系统越需要统一" copy="机构正在同时扩展多类产品与多种服务终端。业务不断增加，如果底层能力仍然分别建设，系统复杂度也会同步增加"/><div className="f1-complexity">{shifts.map(([t,p],i)=><article key={t}><div className={`f1-shift-visual v${i+1}`}><span>0{i+1}</span><i/><i/><i/></div><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="f1-golive f1-section"><div className="f1-shell"><SectionHead label="从复杂到上线" title="新业务上线，不应该经历一轮新的系统重建" copy="传统业务线通常需要经历 5 个环节，整体约 15–30 个工作日"/><div className="f1-golive-flow">{['系统对接','资质审核','账户开通','金融产品上线','业务展业'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><div className="f1-frictions">{[['系统对接成本高','新增业务意味着重新连接账户、产品、交易和运营系统'],['机构准入与账户准备耗时','多个参与方及流程导致业务准备时间增长'],['金融产品上线慢','产品准入、KYP、产品配置与渠道同步可能成为瓶颈'],['上线不等于展业','还需要将产品、渠道、客户经理与交易流程真正连接']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="f1-approach f1-section"><div className="f1-shell"><SectionHead label="FINONE 方法" title="把重复建设的能力，变成可复用的财富核心" copy="机构增加一个产品、一种渠道或新的财富业务时，不再重新搭建完整底层系统"/><div className="f1-core-model"><div><span>客户应用</span><span>企业平台</span><span>合作伙伴</span></div><section><small>FINONE</small><strong>财富核心</strong><p>{['账户','金融产品','交易','运营'].map(x=><span key={x}>{x}</span>)}</p></section><div><span>数据</span><span>工作流</span><span>连接能力</span></div></div></div></section>

  <section className="f1-business f1-section"><div className="f1-shell"><SectionHead title="一个核心，支撑多种财富业务" copy="同一套财富核心可以服务不同机构、渠道和终端，让业务扩展不再等于底层系统扩张"/><div className="f1-business-map"><div>{businesses.map(([t,p],i)=><article key={t}><span>0{i+1}</span><small>{p}</small><h3>{t}</h3></article>)}</div><section><small>所有业务应用共享</small><strong>FINONE</strong><span>财富核心</span></section></div></div></section>

  <section className="f1-ops f1-section"><div className="f1-shell"><SectionHead label="UNIFIED WEALTH OPERATIONS" title="从账户到交易，让财富业务运行在统一核心之上" copy="FinOne 统一的不只是账户，还包括金融产品准入、交易连接、资产数据与持续运营"/><div className="f1-ops-grid"><div>{operations.map(([e,t,p],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div><UiPlaceholder title="统一财富运营界面"/></div></div></section>

  <section className="f1-full-product f1-section"><div className="f1-shell"><SectionHead label="FULL PRODUCT" title="一个财富核心，承载不断扩展的金融产品" copy="不同资产类别无需分别建设产品系统，传统财富与数字资产可进入一致的业务和运营流程"/><div className="f1-full-grid"><div className="f1-product-groups"><div><small>传统财富</small><h3>覆盖主流财富产品</h3>{['现金管理','公募基金','私募基金','债券','结构性产品','保险产品'].map(x=><span key={x}>{x}</span>)}</div><div><small>数字资产</small><h3>面向新型资产扩展</h3>{['虚拟资产','代币化产品','RWA'].map(x=><span key={x}>{x}</span>)}</div></div><UiPlaceholder title="金融产品管理界面" tone="product"/></div></div></section>

  <AiSection/>


  <section className="f1-enterprise f1-section"><div className="f1-shell"><SectionHead label="企业级架构" title="为机构级财富业务构建的高可用架构" copy="机构可根据数据、安全、合规与 IT 架构选择部署方式，并通过多租户隔离、跨区域多集群和灾备保障业务连续性"/><div className="f1-deploy-grid">{[['灵活部署','SaaS 部署 / 本地部署'],['多租户与定制化','数据隔离、可选升级与差异化服务'],['DSU 部署架构','高性能、横向扩展、单元灰度发布与按需资源'],['跨区域多集群','降低单地域风险，定期灾备演练保障连续性']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div><div className="f1-enterprise-data">{[['99.9%','系统可用性'],['≤500ms','响应延时'],['≤5 min','RPO'],['≤30 min','RTO']].map(([d,t])=><article key={t}><strong>{d}</strong><span>{t}</span></article>)}</div><UiPlaceholder title="部署与系统状态" tone="system"/></div></section>

  <section className="f1-proof f1-section"><div className="f1-shell"><SectionHead label="客户案例" title="FinOne 在不同财富业务场景中的实践" copy="从机构财富平台到企业财富服务，了解 FinOne 如何融入不同业务模式与运营流程"/><div className="f1-case-entries">{[['01','证券及经纪机构','新财富业务上线','连接开户、金融产品、交易与展业流程','/solutions/broker'],['02','EAM 与家族办公室','一体化财富运营','统一管理客户、产品、交易与资产运营','/products/fineam'],['03','企业财富服务','企业资金管理','支持企业客户开展现金管理与财富配置','/products/xingqitong'],['04','数字资产场景','新型资产服务','将数字资产接入统一的产品与运营流程','/products/finrwa']].map(([n,type,title,copy,to])=><Link key={n} to={to}><span>{n}</span><small>{type}</small><h3>{title}</h3><p>{copy}</p><b>查看相关实践 →</b></Link>)}</div></div></section>

  <section className="f1-cta"><div className="f1-shell"><h2>用一个财富核心<br/>支撑您的下一项财富业务</h2><p>从账户和金融产品，到交易、运营与 AI，FinOne 帮助机构在统一核心之上更快构建、上线和扩展财富业务</p><div><Link className="button button-light" to="/contact">预约 FinOne 演示 →</Link><a href="mailto:CS@finloop.hk">联系产品团队</a></div></div></section>
</main>}
