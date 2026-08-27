import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type CatalogType = 'agent' | 'skill';
type CatalogItem = {
  slug: string;
  type: CatalogType;
  name: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
};

const agents: CatalogItem[] = ([
  ['product-due-diligence','产品尽调 Agent','快速看清一只金融产品的底细','产品研究',['KYP','尽调','风险']],
  ['visual-marketing','视觉营销 Agent','把结论变成好看、易懂、可发布的金融物料','内容营销',['视觉','营销','金融'],true],
  ['asset-screening','资产筛选 Agent','从海量金融产品里挑好货','投资研究',['筛选','资产','对比']],
  ['market-news','新闻资讯 Agent','及时获取并整理金融市场最新资讯','资讯',['新闻','摘要','市场']],
  ['investment-research','投研分析 Agent','深度拆解核心投资价值','投资研究',['投研','估值','报告']],
  ['document-analysis','文档解析 Agent','智能解析文档，定位关键信息','文档',['PDF','提取','审阅']],
  ['wealth-service','星财富 AI 客服 Agent','7×24 小时智能答疑','客户服务',['客服','问答','财富']],
  ['hr-relations','HR 员工关系 Agent','高效查询人事信息','企业运营',['HR','员工','政策']],
  ['ifa-adviser','IFA 理财师 Agent','专属理财产品智能答疑','理财服务',['IFA','产品','问答']],
  ['risk-control','风控监管 Agent','监管与风控问答助手','风险合规',['风控','监管','问答']],
  ['finloop-bi','星路 AI BI','金融数据智能分析看板','数据分析',['BI','数据','看板']],
  ['hk-ipo','港股 IPO 打新 Agent','港股打新专业分析报告','投资研究',['IPO','港股','报告']],
  ['compliance-qa','合规问答 Agent','内控合规问答助手','风险合规',['合规','内控','审核']],
  ['hot-topic','热点深度解读 Agent','金融热点的背景、影响与观点整理','资讯',['热点','解读','观点']],
  ['demand-intake','需求自动录入 Agent','需求自动录入、补全并流转','企业运营',['需求','录入','流程']],
  ['migration-adviser','星途旅居 Agent','星途移民智能专家','专业服务',['旅居','咨询','问答']],
  ['competitor-social','竞品社媒洞察 Agent','竞品社媒舆情监控与洞察','内容营销',['竞品','社媒','舆情']],
] as any[]).map(([slug,name,description,category,tags,featured])=>({slug,name,description,category,tags,featured,type:'agent'} as CatalogItem));

const skills: CatalogItem[] = ([
  ['jobsdb-ai','JobsDB AI 招聘','自动筛选 SEEK HK 后台候选人，读取简历并按岗位判断','人力资源',['AI招聘','HR','筛选']],
  ['jd-portrait','JD 画像助手','将岗位描述总结为简练的岗位画像','人力资源',['JD','招聘','HR']],
  ['new-project','新项目上手','快速理解项目结构、约定与关键上下文','通用',['项目','上手']],
  ['skills-bridge','agent-skills-bridge','将 Agent 的 Skills 自动分发或同步到其他应用','通用',['Agent','Skill','同步']],
  ['okr','AI-OKR','按模板和上下文快速生成可执行的 OKR','企业效能',['OKR','目标']],
  ['task-handoff','AI 任务交接','面向真实工程项目的 AI Coding 工作流技能包','工程',['治理','通用','交接']],
  ['contract-standardize','SFC 合同标准化','将香港 SFC 持牌机构合同草稿转换为可入库模板','风险合规',['SFC','合同','合规']],
  ['available-models','available-models','获取并整理当前环境可用的 AI 模型列表','通用',['模型','API']],
  ['testcase','AI 生成测试用例','从 PRD 和验收标准生成结构化测试用例','工程',['测试','PRD','Python']],
  ['market-data','finloop-mktdata-skills','提供全球金融数据查询与分析能力','金融数据',['数据','金融','查询']],
  ['fastapi','python-fastapi-scaffold','Python 业务工程快速脚手架','工程',['Python','FastAPI']],
  ['vue-design','vue3-detailed-design','Vue3 项目详细设计与工程实践','工程',['Vue3','前端','设计']],
  ['python-design','python-detailed-design','Python 详细设计模板与工程化实践','工程',['Python','设计']],
  ['java-design','java-detailed-design','Java 详细设计、模块划分与接口设计','工程',['Java','设计']],
  ['domain-modeling','arch-domain-modeling','从业务需求完成领域划分与领域建模','架构',['DDD','领域建模','架构']],
  ['assess-requirement','arch-assess-requirement','进入方案设计前，对需求做技术澄清、复杂度估点与风险摸底','架构',['需求','架构','评估'],true],
  ['review-architecture','arch-review-architecture','对设计说明、代码变更或合并请求进行架构审查','架构',['审查','架构','代码']],
  ['design-draft','设计稿还原 Skill','准确还原 Figma 设计稿，提升页面开发效率','设计',['Figma','前端']],
  ['react-practice','react-best-practices','React 和 Next.js 性能优化与工程实践','工程',['React','前端']],
  ['news-skill','finloop-news-skills','基于 Finloop 数据源提供金融资讯检索与实时行情查询','金融数据',['AI资讯','金融','新闻']],
  ['liepin-ai','猎聘 AI 招聘','支持主动搜索与候选人批量处理的招聘自动化能力','人力资源',['AI招聘','HR','猎聘']],
  ['boss-ai','Boss 直聘 AI 招聘','按条件筛选候选人并辅助批量沟通','人力资源',['Boss直聘','AI招聘','HR']],
  ['locust-benchmark','finloop-locust-benchmark','一键式 HTTP 接口性能测试与结果整理','工程',['Locust','性能','Python']],
  ['karpathy','andrej-karpathy-skill','受 Karpathy 启发的 AI 编程规范与最佳实践','工程',['编程','规范','最佳实践']],
  ['track-governance','arch-track-governance','跟踪评审结论，推动闭环、例外处理与责任交接','架构',['治理','架构','跟踪']],
  ['curate-knowledge','arch-curate-knowledge','将设计、评审与治理产出沉淀为可检索知识','架构',['知识','架构','沉淀']],
  ['generate-design','arch-generate-design','在需求边界清晰后产出或推荐技术方案','架构',['方案','架构','设计']],
  ['sdd-x','finloop-SDD-X-toolkit','开发实施阶段的流程编排入口','工程',['SDD','开发','最佳实践']],
  ['sdd-r','finloop-SDD-R-toolkit','需求分析阶段的流程编排入口','工程',['SDD','需求','最佳实践']],
  ['sdd-a','finloop-SDD-A-toolkit','开发设计阶段的流程编排入口','工程',['SDD','设计','最佳实践']],
  ['vue-practice','vue-best-practices','Vue3 项目结构化工作流与最佳实践','工程',['Vue3','前端','最佳实践']],
  ['yapi','flp-yapi-integration','在 AI 编程环境中通过对话查阅 YApi 接口文档','工程',['YApi','接口','通用']],
] as any[]).map(([slug,name,description,category,tags,featured])=>({slug,name,description,category,tags,featured,type:'skill'} as CatalogItem));

const allItems = [...agents, ...skills];

function ItemMark({ type }: { type: CatalogType }) {
  return <span className={`as-mark ${type}`} aria-hidden="true">{type === 'agent' ? 'A' : 'S'}</span>;
}

function CatalogCard({ item }: { item: CatalogItem }) {
  return <Link className="as-card" to={`/ai/marketplace/${item.type}/${item.slug}`}>
    <div className="as-card-head"><ItemMark type={item.type}/><span>{item.category}</span></div>
    <h2>{item.name}</h2><p>{item.description}</p>
    <div className="as-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    <span className="as-card-link">查看介绍 <i aria-hidden="true">→</i>
    </span>
  </Link>;
}

export function AgentSkillsPage() {
  const [type,setType] = useState<CatalogType>('agent');
  const [query,setQuery] = useState('');
  const [category,setCategory] = useState('全部');
  const source = type === 'agent' ? agents : skills;
  const categories = ['全部',...new Set(source.map(item=>item.category))];
  const filtered = useMemo(()=>source.filter(item => (category === '全部' || item.category === category) && `${item.name}${item.description}${item.tags.join('')}`.toLowerCase().includes(query.trim().toLowerCase())),[source,category,query]);
  function changeType(next: CatalogType){ setType(next); setCategory('全部'); }
  return <main className="as-page" id="main">
    <header className="as-hero" data-header-theme="inverse">
      <div className="as-shell as-hero-grid"><div><h1>把 AI 能力，<br/>带进每一个工作流</h1><p>Agent 直接承接岗位与业务任务，Skills 为它们提供可复用的专业能力。从金融研究、合规到营销与企业运营，在这里找到合适的 AI 协作方式。</p></div>
      <div className="as-orbit" aria-label="Agent 与 Skills 关系示意"><div className="as-core"><ItemMark type="agent"/><strong>Agent</strong><span>理解任务·组织交付</span></div><div className="as-skill-node n1">Research</div><div className="as-skill-node n2">Data</div><div className="as-skill-node n3">Compliance</div><div className="as-skill-node n4">Content</div></div></div>
    </header>
    <section className="as-browser" aria-labelledby="catalog-title"><div className="as-shell">
      <div className="as-browser-head"><div><h2 id="catalog-title">探索能力广场</h2><p>按工作目标搜索，查看每项能力的边界与交付物。</p></div><div className="as-tabs" role="tablist" aria-label="能力类型"><button onClick={()=>changeType('agent')} role="tab" aria-selected={type==='agent'}>Agent <span>{agents.length}</span></button><button onClick={()=>changeType('skill')} role="tab" aria-selected={type==='skill'}>Skills <span>{skills.length}</span></button></div></div>
      <div className="as-controls"><label><span className="sr-only">搜索 Agent 或 Skill</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索名称、场景或标签"/><i aria-hidden="true">⌕</i></label><div className="as-categories">{categories.map(item=><button key={item} className={category===item?'active':''} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div></div>
      <div className="as-result-line"><span>{type === 'agent' ? 'Agent' : 'Skills'}</span><strong>{filtered.length} 项能力</strong></div>
      {filtered.length ? <div className="as-grid">{filtered.map(item=><CatalogCard item={item} key={item.slug}/>)}</div> : <div className="as-empty"><strong>没有找到匹配内容</strong><p>试试更换关键词或清除当前分类。</p><button onClick={()=>{setQuery('');setCategory('全部')}}>重置筛选</button></div>}
    </div></section>
  </main>;
}

const specialAgent = {
  summary:'面向金融从业者和营销团队的视觉内容伙伴。它从一个主题、一份报告或一组数据出发，先提炼受众真正需要的结论，再将其组织为可发布的长图、社媒卡片、活动海报或简报视觉方案。',
  scenarios:[['研报可视化','将财报、行业报告与投资观点转换为清晰的叙事与图表层级。'],['社媒内容生产','根据平台、受众与品牌语气，组织多尺寸的内容方案。'],['产品与活动物料','用统一的信息架构呈现产品亮点、活动议程与招聘信息。']],
  inputs:['内容主题、原始资料或数据','目标受众与发布渠道','品牌语气、尺寸与格式要求'],
  outputs:['核心信息与叙事结构','文案、图表和视觉元素建议','可审阅的多版式物料方案'],
  steps:['理解任务与受众','核验资料与关键数据','搭建信息叙事','生成并按反馈迭代'],
  note:'适合辅助内容生产与创意探索。对外发布前，仍应由业务、品牌及合规人员确认数据、版权和表述。'
};

export function AgentSkillDetailPage(){
  const {type,slug}=useParams();
  const item=allItems.find(x=>x.type===type&&x.slug===slug);
  if(!item) return <main className="as-detail as-missing"><div className="as-shell"><h1>未找到该能力</h1><Link to="/ai/marketplace">返回 Agent & Skills 广场</Link></div></main>;
  const isVisual=item.slug==='visual-marketing';
  const isAssess=item.slug==='assess-requirement';
  const detail=isVisual?specialAgent:{
    summary:item.description+'。它将通用 AI 能力与具体的业务规则、输入材料和交付要求组合，帮助团队减少重复整理工作，并保留人工审阅节点。',
    scenarios:isAssess?[["需求澄清","识别目标、范围、约束与依赖中的信息缺口。"],["复杂度评估","从范围、数据、集成、交付与不确定性拆解复杂度。"],["风险摸底","列出待验证假设、风险等级与建议的起步动作。"]]:[["标准任务",item.description],["批量处理","对同类输入使用统一标准处理和输出。"],["团队协作","将结果整理为可审阅、可交接的结构。"]],
    inputs:isAssess?['需求摘要与业务背景','验收标准、约束与依赖','已知的安全、合规与发布边界']:['任务目标与背景','可用资料与数据','输出格式与审阅要求'],
    outputs:isAssess?['需求澄清项','复杂度拆解与估点建议','风险清单与下一步动作']:['结构化处理结果','关键发现与建议','可交接的输出文档'],
    steps:['确认目标与边界','检查输入是否完整','执行专业处理流程','输出结果并标记待审阅项'],
    note:'当输入信息不完整或需要专业判断时，结果应作为辅助材料，由对应责任人确认后使用。'
  };
  return <main className="as-detail" id="main"><header className="as-detail-hero"><div className="as-shell"><Link className="as-back" to="/ai/marketplace">← 返回广场</Link><div className="as-detail-title"><ItemMark type={item.type}/><div><span>{item.type==='agent'?'Agent':'Skill'} · {item.category}</span><h1>{item.name}</h1></div></div><p>{detail.summary}</p><div className="as-tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div></header>
  <section className="as-detail-body"><div className="as-shell as-detail-layout"><article className="as-detail-main"><section><h2>适合用在哪里</h2><div className="as-scenario-grid">{detail.scenarios.map(([title,copy],i)=><div key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section><section><h2>工作方式</h2><ol className="as-steps">{detail.steps.map((s,i)=><li key={s}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></li>)}</ol></section><section className="as-boundary"><h2>使用边界</h2><p>{detail.note}</p></section></article><aside><div className="as-io"><div><span>INPUT</span><h2>你需要提供</h2><ul>{detail.inputs.map(x=><li key={x}>{x}</li>)}</ul></div><div><span>OUTPUT</span><h2>你将获得</h2><ul>{detail.outputs.map(x=><li key={x}>{x}</li>)}</ul></div></div><Link className="as-contact" to="/contact">咨询如何接入 <i data-lucide="arrow-right"/></Link></aside></div></section></main>;
}
