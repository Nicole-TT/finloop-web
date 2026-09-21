import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection } from '../components/PlatformProofSections';

const problems = [
  ['01', 'AI 能力分散', '不同团队分别使用不同模型、Agent 和工具，能力难以统一沉淀。'],
  ['02', '企业知识难复用', '资料、数据和经验分散在个人与不同业务系统中，AI 难获得稳定上下文。'],
  ['03', 'AI 难进入真实流程', '大量 AI 使用仍停留在问答和内容生成，无法持续参与业务任务。'],
  ['04', 'AI 缺乏组织治理', '企业难统一管理成员可使用的 Agent、Skill 和数据，也难掌握实际使用情况。'],
];

const workflow = [
  ['Knowledge & Data', '企业业务上下文'], ['Skills', '可复用能力'], ['AI Employees', '岗位与目标'],
  ['Workflow', '组合人与 AI 步骤'], ['Tasks', '持续业务任务'], ['Business Action', '分析·报告·业务处理'],
];

const capabilities = [
  ['01', 'AI Employees', '构建面向不同业务岗位的 AI 员工', '围绕角色、任务与业务目标配置 AI 能力，连接 Skills、企业知识与工作流。'],
  ['02', 'Skills', '将企业能力沉淀为可复用 Skills', '将资料检索、文档分析、数据处理、内容与报告生成等能力标准化。'],
  ['03', 'Workflow & Tasks', '让 AI 真正进入业务流程', '把 AI 员工、Skills、企业数据和人工步骤组织为可运行、可追踪的任务。'],
  ['04', 'Data & Knowledge', '让 AI 理解企业自己的知识与数据', '统一连接企业资料、知识库、业务数据、外部资讯与文件。'],
  ['05', 'Governance', '在统一平台管理企业 AI 能力', '管理 AI 员工、Skills、Workflow、知识数据、成员权限、使用情况与操作记录。'],
];

const capabilityVisuals = [
  ['Role', 'AI Employee', 'Goal', 'Skills', 'Knowledge'],
  ['Input', 'Reusable Skill', 'Output', 'Search', 'Analyze'],
  ['Trigger', 'Workflow', 'Result', 'AI Task', 'Human Review'],
  ['Files', 'Knowledge', 'Context', 'Business Data', 'External Info'],
  ['Members', 'Governance', 'Audit', 'Permission', 'Usage'],
];

function CapabilityVisual({ index }: { index: number }) {
  const [left, core, right, bottomLeft, bottomRight] = capabilityVisuals[index];
  return <div className={`fai-cap-visual fai-cap-visual-${index + 1}`} aria-hidden="true">
    <div className="fai-cap-visual-top"><span>{left}</span><i/><span>{right}</span></div>
    <strong><small>0{index + 1}</small>{core}</strong>
    <div className="fai-cap-visual-bottom"><span>{bottomLeft}</span><span>{bottomRight}</span></div>
  </div>;
}

export function FAIPage() {
  return <main className="fai-page" id="main">
    <section className="fai-hero product-hero-standard" data-header-theme="inverse"><div className="fai-shell fai-hero-grid">
      <ProductHeroContent className="fai-hero-copy" category="FAI · 企业 AI 工作平台" title="让 AI 员工协同完成企业任务" description="连接企业知识、数据、业务系统与专业 Skills，统一创建、编排和管理 AI 员工，让不同智能能力进入可执行、可追踪的业务流程。" ctaLabel="预约产品演示"/>
      <div className="fai-org" aria-label="FAI 组织企业 AI 能力示意图"><div className="fai-org-inputs"><span>企业知识</span><span>业务数据</span><span>企业系统</span></div><i aria-hidden="true"/><strong>FAI<small>ENTERPRISE AI PLATFORM</small></strong><i aria-hidden="true"/><div className="fai-org-resources"><span>AI Employees</span><span>Skills</span><span>Workflow</span></div><footer><span>研究</span><span>分析</span><span>运营</span><span>客服</span><span>营销</span></footer></div>
    </div></section>

    <section className="fai-section fai-problems"><div className="fai-shell"><header className="fai-head"><h2>企业 AI 建设，难在能力分散与缺乏治理</h2></header><div className="fai-problem-grid">{problems.map(([n,t,c], index)=><article key={n}><div className={`fai-problem-visual visual-${index + 1}`} aria-hidden="true"><span>{n}</span><i/><i/><strong>{['AI','DATA','FLOW','CONTROL'][index]}</strong></div><div className="fai-problem-copy"><h3>{t}</h3><p>{c}</p></div></article>)}</div></div></section>

    <section className="fai-section fai-how"><div className="fai-shell"><header className="fai-head"><h2>把模型能力组装成可执行的企业工作流</h2><p>每一层都可被企业配置、复用和管理，最终从 Prompt → Answer 升级为 Task → Process → Result。</p></header><div className="fai-flow">{workflow.map(([t,c],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="fai-section fai-capabilities" id="capabilities"><div className="fai-shell"><header className="fai-head"><h2>从 AI 员工到组织治理，在一个平台持续运营</h2><p>统一连接 AI 员工、Skills、工作流、知识数据与权限治理，让企业 AI 能力能够被配置、复用、追踪并持续优化。</p></header><div className="fai-cap-list">{capabilities.map(([n,en,t,c], index)=><article key={n}><div className="fai-cap-copy"><div className="fai-cap-meta"><span>{n}</span><small>{en}</small></div><h3>{t}</h3><p>{c}</p></div><CapabilityVisual index={index}/></article>)}</div></div></section>

    <section className="fai-section fai-govern"><div className="fai-shell"><header className="fai-head"><h2>把 AI 从个人能力，变成组织能力</h2><p>连接团队成员、AI 资源与统一治理，让 AI 能力成为可分配、可共享、可持续优化的企业数字资产。</p></header><div className="fai-govern-map">
      <section className="fai-govern-people"><small>组织成员</small><h3>团队与成员</h3><p>围绕企业组织结构管理成员及其 AI 使用边界。</p><ul>{['成员','团队','角色','权限'].map(item=><li key={item}>{item}</li>)}</ul></section>
      <i>×</i>
      <section className="primary fai-govern-resources"><small>AI 资源</small><h3>AI 资源统一分配</h3><p>将不同 AI 能力组合后，分配给对应业务团队。</p><div className="fai-team-allocations">{[
        ['投资团队','研究智能体','文档技能','投研知识库'],
        ['销售团队','产品智能体','内容技能','产品知识库'],
        ['运营团队','运营智能体','数据技能','业务数据'],
      ].map(([team,...resources])=><article key={team}><strong>{team}</strong><div>{resources.map(resource=><span key={resource}>{resource}</span>)}</div></article>)}</div><footer>智能体 / AI 员工 · 技能 · 知识 · 工作流</footer></section>
      <i>×</i>
      <section className="fai-govern-control"><small>组织治理</small><h3>统一治理</h3><p>让管理员持续了解 AI 的使用过程与结果。</p><ol>{['谁在使用什么 AI','使用了哪些企业资源','执行了哪些任务','产生了什么结果','是否符合组织权限'].map(item=><li key={item}>{item}</li>)}</ol></section>
    </div></div></section>

    <PlatformCasesSection sectionClass="fai-section" shellClass="fai-shell" title="他们如何用 FAI 构建企业 AI 工作体系" copy="了解企业如何连接知识、数据、AI 员工与工作流，让 AI 能力进入可执行、可管理的日常任务。" cases={[{mark:'AI',name:'典型企业 AI 应用场景',type:'场景示例 · 非特定客户案例',copy:'围绕企业知识、文档数据与重复任务，将分散的 AI 工具组织为统一的工作体系。',details:[['原有方式','不同团队分别使用模型和工具，企业知识、能力与任务流程难以统一沉淀。'],['FAI 应用','统一连接知识数据、AI 员工、Skills 与工作流，并按团队和任务进行配置。'],['工作变化','让 AI 从个人工具进入可复用、可追踪并可持续治理的企业工作流程。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、应用场景、上线范围、工作流程变化与已确认的业务结果。',pending:true}]} />

    <section className="fai-cta"><div className="fai-shell"><h2>开始构建企业自己的 AI 工作体系</h2><p>从 AI 员工、Skills 到企业工作流，在统一平台中构建、管理并持续运营企业 AI 能力。</p><div><Link className="button button-light" to="/contact">咨询 FAI →</Link><Link to="/solutions/fde-ai">了解企业 AI 解决方案</Link></div></div></section>
  </main>;
}
