import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection } from '../components/PlatformProofSections';

const frictions = [
  ['产品资料繁杂', '尽调和 KYP 往往需要阅读大量金融产品资料。'],
  ['客户需求难结构化', '客户现状、目标和产品之间需要反复比较。'],
  ['风险信息持续变化', '产品、市场和外部事件需要持续关注。'],
  ['市场信息噪声高', '资讯、社媒及竞品信息分散在不同渠道。'],
];

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

    <section className="xlt-section xlt-reality" id="overview"><div className="xlt-shell"><Heading title="专业判断，常被信息整理拖慢" copy="金融专业工作中的信息分散在文档、表格、资讯和不同业务系统中。" /><div className="xlt-frictions">{frictions.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

    <section className="xlt-section xlt-human"><div className="xlt-shell"><Heading title="AI 加速信息处理，专业人员保留最终判断" copy="星路通减少重复的信息查找、整理和初步分析工作，让专业人员把更多时间投入评估、沟通与决策。" /><div className="xlt-human-grid"><article><small>AI</small><h3>提取 · 整理 · 比较 · 提示</h3><p>处理高重复、耗时的信息工作。</p></article><article className="active"><small>HUMAN REVIEW</small><h3>审核 · 判断 · 解释 · 决定</h3><p>专业人员确认结果并承担最终判断。</p></article><article><small>WORKFLOW</small><h3>保留任务和结果上下文</h3><p>让分析结果持续进入下一步工作。</p></article></div></div></section>

    <Capability id="kyp" number="01" title="更快看懂金融产品" copy="星路通辅助读取和组织产品资料，提取关键事实、提示信息缺口，并形成可供专业人员审核的 KYP 与尽调工作成果。" type="document" points={['减少重复阅读', '结构化产品信息', '提示待确认内容', '辅助形成尽调材料']} />
    <Capability id="scheduled-tasks" number="02" title="让重复任务定时执行" copy="将资料抓取、信息整理和持续监控等任务设为定时运行，按计划自动更新结果，并提醒专业人员查看与处理。" type="alert" points={['灵活设置执行时间', '自动运行任务流程', '持续更新任务结果', '完成与异常提醒']} />
    <Capability id="risk" number="03" title="持续发现市场与风险变化" copy="聚合产品、市场、新闻与社媒信息，过滤低价值信息干扰，识别值得关注的变化并提供风险提醒，帮助专业人员及时评估与行动。" type="alert" points={['聚合外部信息', '过滤信息噪声', '识别重要变化', '提供风险提醒']} />

    <section className="xlt-section xlt-tool-market" id="tools"><div className="xlt-shell"><Heading title="金融垂类 AI 能力" copy="星路通提供金融 AI 工具广场，让机构可以围绕实际任务选择和扩展专业能力，并将这些能力统一带入日常工作流。" /><div className="xlt-tool-overview"><div className="xlt-tool-points">{[
      ['专业能力持续扩展','围绕金融业务需要持续接入新的垂类 AI 能力。'],
      ['根据任务灵活调用','不同任务可以选择适合的工具，无需在多个系统间切换。'],
      ['统一进入工作流程','工具运行保留任务上下文，并将结果带入后续审核与行动。'],
    ].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="xlt-tool-stage" role="img" aria-label="金融 AI 工具广场能力示意"><div><small>FINANCIAL AI TOOLKIT</small><strong>工具广场</strong><p>按任务调用专业能力</p></div>{['资料处理','专业分析','持续监控','数据与任务'].map(item=><span key={item}>{item}</span>)}</div></div></div></section>

    <PlatformCasesSection sectionClass="xlt-section" shellClass="xlt-shell" title="他们如何用星路通完成专业金融任务" copy="了解金融专业人员如何将资料读取、分析判断和持续关注带入同一个 AI 工作环境。" cases={[{mark:'AI',name:'典型金融专业任务场景',type:'场景示例 · 非特定客户案例',copy:'围绕产品资料、客户需求与市场风险信息，连接资料整理、比较分析和专业人员复核。',details:[['原有方式','资料、表格和外部信息分散，需要人工反复查找与整理。'],['星路通应用','辅助读取资料、提取关键信息、比较差异并提示值得关注的变化。'],['工作变化','减少重复的信息处理，让专业人员把更多时间投入审核、判断与行动。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、应用任务、上线范围、工作流程变化与已确认的业务结果。',pending:true}]} />

    <section className="xlt-cta"><div className="xlt-shell"><h2>把更多时间留给真正需要专业判断的工作</h2><p>从产品尽调和 GAP 分析，到风险与市场洞察，星路通帮助金融专业人员在统一工作台中持续完成专业任务。</p><div><Link className="button button-light" to="/contact">预约星路通演示 →</Link><a href="mailto:CS@finloop.hk">联系 AI 团队</a></div></div></section>
  </main>;
}
