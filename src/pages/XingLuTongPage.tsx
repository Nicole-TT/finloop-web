import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';

const frictions = [
  ['产品资料繁杂', '尽调和 KYP 往往需要阅读大量金融产品资料。'],
  ['客户需求难结构化', '客户现状、目标和产品之间需要反复比较。'],
  ['风险信息持续变化', '产品、市场和外部事件需要持续关注。'],
  ['市场信息噪声高', '资讯、社媒及竞品信息分散在不同渠道。'],
];

const workflow = ['连接资料', '理解与提取', '分析任务', '形成洞察', '专业人员确认', '进入后续行动'];

function Heading({ title, copy }: { title: string; copy?: string }) {
  return <div className="xlt-heading"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function WorkspaceUI({ title, type = 'dashboard' }: { title: string; type?: 'dashboard' | 'document' | 'compare' | 'alert' | 'feed' }) {
  return <div className={`xlt-ui xlt-ui-${type}`} role="img" aria-label={`${title}界面占位`}>
    <aside><b>XL</b>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside>
    <div className="xlt-ui-main"><header><strong>{title}</strong><span /></header><div className="xlt-ui-body"><nav>{[1, 2, 3].map(i => <i key={i} />)}</nav><section>{[1, 2, 3, 4].map(i => <span key={i} />)}</section><figure>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</figure></div></div>
  </div>;
}

function Capability({ id, number, title, copy, type, points }: { id: string; number: string; title: string; copy: string; type: 'document' | 'compare' | 'alert' | 'feed'; points: string[] }) {
  return <section className="xlt-section xlt-capability" id={id}><div className="xlt-shell"><div className="xlt-cap-grid"><div className="xlt-cap-copy"><span>{number}</span><h2>{title}</h2><p>{copy}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></div><WorkspaceUI title={title} type={type} /></div></div></section>;
}

export function XingLuTongPage() {
  return <main className="xlt-page" id="main">
    <section className="xlt-hero product-hero-standard" data-header-theme="inverse"><div className="xlt-shell xlt-hero-grid"><ProductHeroContent className="xlt-hero-copy" category="星路通 · 金融专业 AI 工作台" title="让 AI 进入金融专业人员的真实工作流程" description="连接金融产品资料、客户需求、市场信息与风险数据，辅助专业人员完成产品尽调、比较分析、配置判断和风险识别。" ctaLabel="预约产品演示"/><div className="xlt-hero-stage"><WorkspaceUI title="金融任务工作台" /><div className="xlt-inputs"><span>产品资料</span><span>客户需求</span><span>风险数据</span></div><div className="xlt-outputs"><span>报告</span><span>洞察</span><span>提醒</span></div></div></div></section>

    <section className="xlt-section xlt-reality" id="overview"><div className="xlt-shell"><Heading title="专业判断之前，往往先要花大量时间找资料和整理信息" copy="金融专业工作中的信息分散在文档、表格、资讯和不同业务系统中。星路通把重复的信息处理带进统一任务环境，让专业人员把时间重新投入判断与行动。" /><div className="xlt-frictions">{frictions.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

    <section className="xlt-section xlt-workspace"><div className="xlt-shell"><Heading title="把金融资料、分析与任务带回一个工作环境" copy="围绕具体金融任务，处理资料、识别信息、形成分析，并把经过确认的结果带入下一步业务行动。" /><div className="xlt-domain"><div>{[['Understand', '理解产品'], ['Compare', '比较需求与产品'], ['Monitor', '监控风险'], ['Discover', '发现市场信息']].map(([en, cn], i) => <article key={en}><span>0{i + 1}</span><small>{en}</small><strong>{cn}</strong></article>)}</div><div className="xlt-domain-core"><small>ONE FINANCIAL AI WORKSPACE</small><strong>星路通</strong><p>不是多一个对话框，<br />而是让 AI 进入金融任务。</p></div></div></div></section>

    <section className="xlt-section xlt-flow" id="workflow"><div className="xlt-shell"><Heading title="从原始信息，到专业人员可以行动的结果" copy="每个任务都保留专业人员确认环节，让 AI 负责加速信息处理，让判断和责任始终回到专业人员。" /><div className="xlt-flow-rail">{workflow.map((item, i) => <article className={i === 4 ? 'review' : ''} key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong></article>)}</div></div></section>

    <Capability id="kyp" number="01" title="从产品资料中，更快建立完整产品认知" copy="星路通辅助读取和组织产品资料，提取关键事实、提示信息缺口，并形成可供专业人员审核的 KYP 与尽调工作成果。" type="document" points={['减少重复阅读', '结构化产品信息', '提示待确认内容', '辅助形成尽调材料']} />
    <Capability id="gap" number="02" title="更清楚地看到客户需求与现有配置之间的差距" copy="将客户当前情况与目标需求放入同一分析框架，辅助识别差异，并为产品配置与财富服务提供分析参考。" type="compare" points={['梳理当前状态', '理解客户目标', '识别需求差距', '支持专业复核']} />
    <Capability id="risk" number="03" title="从被动查询风险，到持续关注变化" copy="持续关注产品与市场相关信息，识别值得注意的变化并提供风险提醒，帮助专业人员更有重点地进行后续评估。" type="alert" points={['持续关注信息', '识别重要变化', '梳理关注优先级', '提供风险提醒']} />
    <Capability id="market" number="04" title="从分散市场信息中发现值得关注的变化" copy="聚合市场、新闻与社媒信息，减少低价值信息干扰，帮助专业人员持续关注竞品与市场对象。" type="feed" points={['聚合外部信息', '过滤信息噪声', '持续跟踪对象', '发现变化与趋势']} />

    <section className="xlt-section xlt-agents" id="agents"><div className="xlt-shell"><Heading title="让专业 Agent 围绕金融任务协同工作" copy="星路通可基于星路 AI Agent 技术生态，将不同专业能力引入金融工作流；每个 Agent 都服务于任务，而不是作为孤立工具出现。" /><div className="xlt-agent-system"><div className="xlt-task"><small>FINANCIAL TASK</small><strong>产品尽调 / GAP 分析 / 风险关注 / 市场洞察</strong></div><div className="xlt-agent-grid">{[['Product Insight', '产品洞察'], ['Document Analysis', '文书分析'], ['Data Query', '取数查询'], ['Social Intelligence', '社媒洞察']].map(([en, cn]) => <article key={en}><small>{en}</small><strong>{cn}</strong></article>)}</div><div className="xlt-result"><span>资料读取</span><span>分析与比较</span><span>报告与提醒</span></div></div></div></section>

    <section className="xlt-section xlt-human"><div className="xlt-shell"><Heading title="AI 加速信息处理，专业人员保留最终判断" copy="星路通减少重复的信息查找、整理和初步分析工作，让专业人员把更多时间投入评估、沟通与决策。" /><div className="xlt-human-grid"><article><small>AI</small><h3>提取 · 整理 · 比较 · 提示</h3><p>处理高重复、耗时的信息工作。</p></article><article className="active"><small>HUMAN REVIEW</small><h3>审核 · 判断 · 解释 · 决定</h3><p>专业人员确认结果并承担最终判断。</p></article><article><small>WORKFLOW</small><h3>保留任务和结果上下文</h3><p>让分析结果持续进入下一步工作。</p></article></div></div></section>

    <section className="xlt-section xlt-stack"><div className="xlt-shell"><Heading title="专业金融应用背后，是完整企业 AI 技术栈" copy="星路通建立在可持续扩展的 Agent、工作流、数据与模型基础设施之上，不直接绑定单一模型。" /><div className="xlt-stack-map">{[['FINANCIAL APPLICATION', '星路通', 'KYP · GAP · Risk · Market Intelligence'], ['FINANCIAL AGENTS', '专业 Agent / Skills', '资料读取 · 分析 · 取数'], ['AI OPERATIONS PLATFORM', 'AI 运营平台 PaaS', 'Workflow · Knowledge · Data · Permissions'], ['MODEL SERVICES', '星智通 MaaS', '多模型服务与统一能力']].map(([label, title, copy], i) => <article className={i === 0 ? 'primary' : ''} key={label}><small>{label}</small><strong>{title}</strong><span>{copy}</span></article>)}</div></div></section>

    <section className="xlt-cta"><div className="xlt-shell"><h2>把更多时间留给真正需要专业判断的工作</h2><p>从产品尽调和 GAP 分析，到风险与市场洞察，星路通帮助金融专业人员在统一工作台中持续完成专业任务。</p><div><Link className="button button-light" to="/contact">预约星路通演示 →</Link><a href="mailto:CS@finloop.hk">联系 AI 团队</a></div></div></section>
  </main>;
}
