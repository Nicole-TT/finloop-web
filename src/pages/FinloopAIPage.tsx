import { useState } from 'react';
import { Link } from 'react-router-dom';

const taskGroups = [
  { name: '产品研究', en: 'Product Intelligence', tasks: ['产品尽调', 'KYP', '产品洞察', '资产筛选'], output: '产品尽调摘要' },
  { name: '投研分析', en: 'Investment Research', tasks: ['基本面分析', '研究资料整理', '投资信息分析'], output: '研究要点与风险' },
  { name: '客户与配置', en: 'Client & Portfolio', tasks: ['GAP 分析', '产品配置辅助', '客户需求分析'], output: '配置差距分析' },
  { name: '风险洞察', en: 'Risk Intelligence', tasks: ['市场变化', '产品风险', '相关事件提醒'], output: '风险信号清单' },
  { name: '市场资讯', en: 'Market Intelligence', tasks: ['新闻资讯', '热点检索', '社媒洞察', '竞品信息'], output: '市场影响摘要' },
  { name: '内容与营销', en: 'Content & Marketing', tasks: ['视觉营销', '产品材料', '投资内容生成'], output: '内容框架草案' },
];

const flow = [
  ['01', 'Connect', '连接文件、产品、市场与企业知识'],
  ['02', 'Understand', '识别事实、关系、语境与风险信号'],
  ['03', 'Reason', '比较、评估、研究并形成判断依据'],
  ['04', 'Act', '生成报告、提醒、内容与流程任务'],
  ['05', 'Human Review', '由专业人员审核关键结论'],
  ['06', 'Workflow', '将结果带入后续业务流程'],
];

function Head({ title, copy }: { title: string; copy?: string }) {
  return <div className="ai-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyWorkspace({ title, output }: { title: string; output: string }) {
  return <div className="ai-grey-ui" aria-label={`${title}界面占位`}>
    <aside><b>AI</b>{[1, 2, 3, 4].map(i => <i key={i} />)}</aside>
    <div className="ai-grey-main"><header><strong>{title}</strong><span /></header><div className="ai-grey-metrics"><i /><i /><i /></div><div className="ai-grey-content"><section><span /><span /><span /><span /></section><figure><small>{output}</small><i /><i /><i /><i /></figure></div></div>
  </div>;
}

export function FinloopAIPage() {
  const [activeTask, setActiveTask] = useState(0);
  const [demoStarted, setDemoStarted] = useState(false);
  const active = taskGroups[activeTask];

  return <main className="ai-page" id="main">
    <section className="ai-hero" data-header-theme="inverse"><div className="ai-shell ai-hero-grid">
      <div className="ai-hero-copy"><p className="ai-kicker">FINLOOP AI</p><h1>让 AI 真正进入<br />金融业务</h1><p>从金融产品、市场资讯和企业数据，到专业 Agent 与业务 Workflow，Finloop AI 将模型能力转化为真正可以被金融和企业业务使用的智能能力。</p><div className="ai-hero-links"><a href="#capabilities">探索 AI 能力 ↓</a><Link to="/contact">讨论业务场景 →</Link></div></div>
      <div className={`ai-demo ${demoStarted ? 'running' : ''}`}>
        <div className="ai-demo-top"><span>FINANCIAL AI TASK</span><i>Demo workspace</i></div>
        <div className="ai-demo-task"><strong>分析这份基金资料，并整理产品尽调重点</strong><span>PDF · 产品说明书</span></div>
        <div className="ai-demo-progress">{['读取资料', '提取产品信息', '调用 KYP Skill', '形成分析结果'].map((x, i) => <div key={x} className={demoStarted ? 'active' : ''} style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}><i>{i + 1}</i><span>{x}</span></div>)}</div>
        <button type="button" onClick={() => setDemoStarted(true)}><span>问一个金融问题，或交给 AI 一个任务…</span><b aria-hidden="true">↑</b></button>
        <div className="ai-demo-prompts">{['产品尽调', '投资研究', '市场资讯', 'GAP 分析'].map(x => <span key={x}>{x}</span>)}</div>
      </div>
    </div></section>

    <nav className="ai-anchor" aria-label="页面导航"><div className="ai-shell">{[['概览','#overview'],['AI 能力','#capabilities'],['Agents','#agents'],['应用','#applications'],['AI Stack','#stack'],['企业 AI','#enterprise']].map(([t,h])=><a key={h} href={h}>{t}</a>)}</div></nav>

    <section className="ai-section ai-more" id="overview"><div className="ai-shell"><Head title="不只是回答问题，而是理解任务并完成工作" copy="金融业务中的 AI 价值，不只是生成一段文字。它需要理解资料、获取数据、调用专业能力、完成分析，并把结果带入后续业务流程。" />
      <div className="ai-transform"><div className="generic"><small>GENERIC AI</small><strong>Question</strong><i>→</i><strong>Answer</strong></div><div className="finloop"><small>FINLOOP AI</small>{['Business Task','Data / Documents','Skills','Agent','Workflow','Result','Next Action'].map((x,i)=><span key={x}><b>{String(i+1).padStart(2,'0')}</b>{x}</span>)}</div></div>
      <div className="ai-shifts">{[['Understand More','理解产品、文件、数据与市场信息'],['Do More','读取、分析、比较、查询与生成任务'],['Connect More','连接企业数据、金融系统与 Workflow']].map(([e,c])=><article key={e}><small>{e}</small><h3>{c}</h3></article>)}</div>
    </div></section>

    <section className="ai-section ai-work" id="capabilities"><div className="ai-shell"><Head title="把 AI 放进真正的金融工作" copy="从产品研究、投资分析到资讯、风险和营销，Finloop AI 将不同专业任务沉淀为可复用的 AI 能力。" />
      <div className="ai-workspace"><GreyWorkspace title={active.name} output={active.output} /><div className="ai-task-list" role="tablist" aria-label="金融 AI 任务">{taskGroups.map((item,i)=><button key={item.name} role="tab" aria-selected={activeTask===i} onClick={()=>setActiveTask(i)}><span>0{i+1}</span><div><small>{item.en}</small><strong>{item.name}</strong><p>{item.tasks.join(' · ')}</p></div></button>)}</div></div>
    </div></section>

    <section className="ai-section ai-flow"><div className="ai-shell"><Head title="从信息，到洞察，再到行动" copy="将分散的数据和资料转化为可审核、可继续执行的工作结果。AI 加速信息处理和分析，专业人员保留最终判断。" /><div className="ai-flow-rail">{flow.map(([n,t,p])=><article key={n}><span>{n}</span><small>{t}</small><strong>{p}</strong></article>)}</div></div></section>

    <section className="ai-section ai-agents" id="agents"><div className="ai-shell"><Head title="把专业经验，变成 AI 可以执行的能力" copy="Finloop 将金融标准作业流程与专业经验逐步沉淀为可复用的 Skills，并通过不同 Agent 组合这些能力，完成更复杂的专业任务。" /><div className="ai-agent-system"><div className="ai-skill"><small>SKILL</small><h3>可复用的专业能力单元</h3>{['读取产品说明书','提取产品条款','识别风险因素','生成 KYP 结构'].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div><div className="ai-agent-core"><span>Skills</span><span>Data</span><strong>Agent</strong><span>Models</span><span>Workflow</span></div><div className="ai-ecosystem"><small>AGENT ECOSYSTEM</small><h3>围绕不同任务组合能力</h3><div>{['新闻资讯','产品洞察','资产筛选','投研分析','文书分析','GAP 分析'].map(x=><span key={x}>{x}</span>)}</div><Link to="/ai/marketplace">探索 Agent & Skills →</Link></div></div></div></section>

    <section className="ai-section ai-apps" id="applications"><div className="ai-shell"><Head title="从底层 AI 能力，到真正可用的业务产品" copy="Finloop AI 既可以成为独立 AI 应用，也可以直接进入现有金融产品 Workflow。" /><div className="ai-app-grid">{[
        ['星路通','Financial AI Workspace','面向金融专业工作的 AI 工作台','KYP · GAP · 风险 · 市场洞察','/ai/xinglutong'],
        ['FAI','Enterprise Intelligence','将 AI 变成企业组织能力','企业资料 · 任务 · AI 员工 · Workflow','/contact'],
        ['Finloop Products','Embedded AI','让 AI 进入现有金融产品流程','FinOne AI Native · FinEAM AI','/products'],
      ].map(([name,en,title,tags,href],i)=><article key={name} className={i===0?'primary':''}><div><small>{en}</small><h3>{name}</h3><p>{title}</p><span>{tags}</span><Link to={href}>了解更多 →</Link></div><GreyWorkspace title={name} output="AI workflow" /></article>)}</div></div></section>

    <section className="ai-section ai-stack" id="stack"><div className="ai-shell"><Head title="从模型到应用，一套完整 AI 技术体系" copy="底层模型能力可以持续变化，上层 Agent 和业务应用不必随之重复建设。" /><div className="ai-stack-map">{[
        ['APPLICATIONS','业务应用','星路通 · FAI · FinOne AI · FinEAM AI'],
        ['AGENT LAYER','Agents & Skills','金融 Agent · 企业 Agent · 专业 Skills'],
        ['AI OPERATIONS','PaaS','Agent 编排 · Workflow · 数据与知识 · 审计'],
        ['MODEL SERVICES','星智通 · MaaS','模型市场 · 统一 API · 路由 · 成本与治理'],
        ['MODEL PROVIDERS','Multiple Models','连接不同模型服务与供应商'],
      ].map(([label,title,copy],i)=><article key={label} className={i===2?'focus':''}><span>{label}</span><strong>{title}</strong><p>{copy}</p></article>)}</div></div></section>

    <section className="ai-section ai-enterprise" id="enterprise"><div className="ai-shell"><Head title="让 AI 从个人工具，变成企业可以管理的能力" copy="统一管理谁可以使用、可以使用什么、可以访问哪些数据、使用多少，以及运行过程中发生了什么。" /><div className="ai-governance"><div className="ai-govern-ui"><GreyWorkspace title="AI Operations" output="Usage & audit" /></div><div className="ai-govern-list">{[['Who','用户、Key、项目与权限'],['What','模型、Agent 与 Workflow'],['How Much','调用量、Token 与预算'],['Which Data','知识与企业数据访问范围'],['What Happened','运行状态、记录与审计']].map(([e,c],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><strong>{c}</strong></article>)}</div></div></div></section>

    <section className="ai-section ai-why"><div className="ai-shell"><Head title="不只是懂 AI，也理解金融业务" copy="围绕金融产品、客户、交易、资产和风险，将模型能力组织为更贴近真实业务的工作方式。" /><div className="ai-why-grid">{[['01','金融业务理解','来自财富产品、交易、资产、企业财富与 RWA 等实际业务场景。'],['02','金融产品与数据基础','让 AI 能力围绕具体产品资料、市场信息和业务数据工作。'],['03','进入业务 Workflow','从产品尽调、研究和营销，继续连接后续运营流程。'],['04','完整 AI Stack','从 MaaS、PaaS、Agent 到 Application 形成完整技术层次。']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="ai-case"><div className="ai-shell ai-case-grid"><div><small>MARKET INTELLIGENCE</small><h2>从市场信息，<br />到业务行动</h2><p>AI 将分散资讯进行整理和分类，并进一步关联产品、资产或客户场景，帮助业务人员更快识别值得关注的变化。</p></div><div className="ai-case-flow">{['全网资讯聚合','智能分类','资产 / 客户关联','Opportunity','进入后续流程'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section>

    <section className="ai-cta"><div className="ai-shell"><h2>找到适合您业务的<br />AI 路径</h2><p>无论您需要模型基础设施、金融专业 Agent，还是希望将 AI 带入企业实际流程，Finloop AI 都可以从底层模型到最终应用提供相应能力。</p><div><Link className="button button-light" to="/contact">讨论 AI 业务场景 →</Link><a href="#applications">探索 AI 产品 ↓</a></div></div></section>
  </main>;
}
