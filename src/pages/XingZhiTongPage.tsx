import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection } from '../components/PlatformProofSections';

const multiModelDrivers = [
  ['模型选择持续增加', '不同模型在文本、推理、多模态和特定业务任务中各有所长。'],
  ['AI 进入真实业务', '应用需要按任务选择模型，并保持稳定、连续的服务。'],
  ['企业管理要求提高', '成本、权限、凭证与使用记录需要集中管理。'],
];

function Head({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="xzt-head"><small>{label}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function ProductUI({ title, variant = 'table' }: { title: string; variant?: 'table' | 'code' | 'chart' | 'keys' }) {
  return <div className={`xzt-ui xzt-ui-${variant}`} role="img" aria-label={`${title}产品界面占位`}>
    <aside><b>X</b>{[1,2,3,4,5].map(i => <i key={i}/>)}</aside>
    <div className="xzt-ui-main"><header><strong>{title}</strong><span/><span/></header><div className="xzt-ui-tools"><i/><i/><i/></div>
      {variant === 'chart' ? <div className="xzt-chart"><i/><i/><i/><i/><i/><b/></div> : variant === 'keys' ? <div className="xzt-key-tree">{['Organization','Project','Virtual Key','Model'].map((x,i)=><div key={x}><span>{x}</span><i style={{width:`${82-i*12}%`}}/></div>)}</div> : variant === 'code' ? <pre>{['POST /v1/chat/completions','model: selected_model','messages: [...]','stream: true'].map((x,i)=><code key={x}>{i+1}&nbsp;&nbsp;{x}</code>)}</pre> : <div className="xzt-ui-table">{[1,2,3,4,5].map(i=><div key={i}><b/><span/><span/><em/></div>)}</div>}
    </div>
  </div>;
}

export function XingZhiTongPage() {
  return <main className="xzt-page" id="main">
    <section className="xzt-hero product-hero-standard" data-header-theme="inverse"><div className="xzt-shell xzt-hero-grid"><ProductHeroContent className="xzt-hero-copy" category="星智通 · 企业多模型服务平台" title="连接和管理企业所需的 AI 模型" description="通过统一接口连接不同 AI 模型，集中管理模型路由、使用量、成本与访问权限，为企业 AI 应用提供稳定的模型服务层。" ctaLabel="开始接入"/><div className="xzt-routing" aria-label="统一入口连接多模型服务示意"><div className="xzt-request">APPLICATION <i/></div><strong><small>ONE API</small>星智通</strong><div className="xzt-models">{['TEXT','REASONING','IMAGE','VIDEO'].map(x=><span key={x}>{x}</span>)}</div></div></div></section>
    <section className="xzt-section xzt-multimodel" id="platform"><div className="xzt-shell"><Head label="多模型服务平台" title="多模型成为常态，企业需要统一接入与管理" copy="不同模型适合不同任务，但企业不应为每个模型重复建设接入、成本和权限管理。星智通将模型接入、路由与治理集中到统一服务层。"/><div className="xzt-multimodel-drivers">{multiModelDrivers.map(([title, copy], i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="xzt-section xzt-marketplace" id="marketplace"><div className="xzt-shell"><Head label="模型市场" title="在一个地方发现和比较不同 AI 模型" copy="集中查看不同模型的能力、输入输出与价格，根据具体任务完成选择并进入接入。"/><div className="xzt-feature"><ProductUI title="模型市场"/><div className="xzt-feature-copy">{[['发现模型','按模型、供应商、端点和标签搜索。'],['比较能力','比较模型能力、输入输出与价格。'],['完成选型','根据具体任务选择适合的模型。'],['开始接入','从模型选择直接进入 API 使用。']].map(([a,b])=><article key={a}><small>{a}</small><p>{b}</p></article>)}</div></div></div></section>
    <section className="xzt-section xzt-api" id="api"><div className="xzt-shell"><Head label="UNIFIED API" title="一套接口，调用不同模型" copy="通过统一 API 和兼容协议，让开发团队减少针对不同模型重复编写和维护接入代码的成本。"/><div className="xzt-api-grid"><div className="xzt-api-list">{[['OPENAI-COMPATIBLE','兼容常见 OpenAI 接口形式'],['NATIVE PROTOCOLS','支持 Anthropic、Gemini 等相关协议'],['SDK & CLI','支持主流开发 SDK、CLI 及开发工具'],['ONE CONNECTION','减少模型切换与迁移成本']].map(([a,b])=><article key={a}><small>{a}</small><strong>{b}</strong></article>)}</div><ProductUI title="API 接入" variant="code"/></div></div></section>
    <section className="xzt-section xzt-routing-section" id="routing"><div className="xzt-shell"><Head label="INTELLIGENT ROUTING" title="不让应用依赖单一模型线路"/><div className="xzt-route-map"><div>应用请求</div><strong>智能路由<small>ROUTING LAYER</small></strong><div>{['通道 A','通道 B','通道 C'].map(x=><span key={x}>{x}<i/></span>)}</div></div><div className="xzt-route-values">{[['RELIABLE ACCESS','提高模型服务连续性'],['FLEXIBLE ROUTING','根据线路状态和配置调度请求'],['AUTOMATIC FAILOVER','单一路径异常时切换其他可用线路'],['SCALE','支持更大规模的 AI 应用调用']].map(([a,b])=><article key={a}><small>{a}</small><p>{b}</p></article>)}</div></div></section>
    <section className="xzt-section xzt-cost"><div className="xzt-shell"><Head label="USAGE & COST CONTROL" title="让 AI 使用量和成本变得可见"/><div className="xzt-feature xzt-feature-reverse"><ProductUI title="Usage & Cost" variant="chart"/><div className="xzt-feature-copy">{[['KNOW','知道团队用了多少。'],['UNDERSTAND','知道成本花在哪些模型。'],['CONTROL','设置相应额度和预算。'],['OPTIMIZE','通过价格、缓存及路由策略优化使用成本。']].map(([a,b])=><article key={a}><small>{a}</small><p>{b}</p></article>)}</div></div></div></section>
    <section className="xzt-section xzt-governance" id="governance"><div className="xzt-shell"><Head label="ENTERPRISE GOVERNANCE" title="从个人 API Key，升级为企业 AI 治理" copy="将模型访问按组织、项目和虚拟密钥统一管理，让权限、凭证和使用记录保持清晰。"/><div className="xzt-govern-grid"><ProductUI title="Enterprise Governance" variant="keys"/><div className="xzt-govern-list">{[['CONTROL ACCESS','控制谁可以使用什么模型'],['SEPARATE PROJECTS','不同团队和项目分别管理'],['AUDIT USAGE','保留调用和使用记录'],['PROTECT CREDENTIALS','减少上游真实 API Key 的分散暴露']].map(([a,b],i)=><article key={a}><span>0{i+1}</span><small>{a}</small><h3>{b}</h3></article>)}</div></div></div></section>
    <section className="xzt-section xzt-platform-features" id="workflow"><div className="xzt-shell"><div className="xzt-platform-feature-grid">{[['gauge','高性能','支持高并发和自动负载均衡'],['circle-dollar-sign','透明计费','按量计费，实时查看使用情况'],['users','团队协作','多用户管理，灵活分配权限']].map(([icon,title,copy])=><article key={title}><i data-lucide={icon} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <PlatformCasesSection sectionClass="xzt-section xzt-cases" shellClass="xzt-shell" title="他们如何用星智通管理企业模型服务" copy="了解企业如何通过星智通统一连接模型、管理调用并控制使用成本。" cases={[{mark:'AI',name:'典型企业多模型应用场景',type:'场景示例 · 非特定客户案例',copy:'围绕企业 AI 应用，将分散的模型接口、调用线路、使用量和权限带回统一平台管理。',details:[['原有方式','不同团队分别接入模型供应商，接口、凭证和使用记录较为分散。'],['星智通应用','通过统一接口连接多模型服务，并集中管理路由、用量、成本与访问权限。'],['工作变化','减少重复接入和分散管理，让团队更清晰地运营企业模型服务。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、应用场景、接入范围、使用方式与已确认的业务结果。',pending:true}]} />
    <section className="xzt-cta"><div className="xzt-shell"><h2>统一连接多模型，开始构建企业 AI 应用</h2><p>无论您正在构建企业 AI 应用、Agent、智能客服还是开发工具，星智通都可以通过统一模型服务帮助团队更简单地连接和管理多模型能力。</p><div><Link className="button button-light" to="/contact">联系我们</Link></div></div></section>
  </main>;
}
