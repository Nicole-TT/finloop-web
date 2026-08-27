import { Link } from 'react-router-dom';

const gaps = [
  ['Models', '模型碎片化', '供应商、模型和版本越来越多，却缺少统一调度。'],
  ['Data', '数据割裂', '投管、OA、ERP、协同工具与历史文件无法直接被 AI 使用。'],
  ['Workflow', 'AI 停在对话框', '能回答问题，却无法完成业务流程里的真实任务。'],
  ['Governance', '治理缺位', '权限、数据、成本、安全与审计尚未形成统一规则。'],
];

const loop = [
  ['01', 'Discover', '场景诊断', '梳理流程、用户、系统与约束，形成 AI 改造地图。'],
  ['02', 'Validate', '原型验证', '用真实数据、样本和用户，先证明场景价值。'],
  ['03', 'Integrate', '系统集成', '连接存量系统、数据、权限、审计与工具链。'],
  ['04', 'Operate', '持续运营', '根据使用反馈、准确性与模型变化持续优化。'],
];

function Head({ title, copy }: { title: string; copy?: string }) {
  return <div className="fde-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function FDEAIPage() {
  return <main className="fde-page" id="main">
    <section className="fde-hero" data-header-theme="inverse">
      <div className="fde-shell fde-hero-grid">
        <div className="fde-hero-copy">
          <p className="fde-label">FDE-AI · FINANCIAL AI DEPLOYMENT</p>
          <h1>让业务真正把AI用起来</h1>
          <p>由兼具工程能力与金融业务 Know-how 的 FDE 团队深入业务一线，从场景诊断、原型验证、系统集成到持续运营，以真实业务结果作为交付目标。</p>
          <div className="fde-actions"><Link className="button button-light" to="/contact">申请 AI 场景诊断 →</Link><a href="#case">查看真实案例 ↓</a></div>
        </div>
        <div className="fde-hero-media">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=82" alt="企业团队在办公室协作" />
          <div className="fde-hero-flow"><span>Business systems</span><b>FDE</b><span>Production AI</span></div>
        </div>
      </div>
    </section>

    <section className="fde-section fde-gap" id="gap"><div className="fde-shell">
      <Head title="企业不缺 AI Demo，缺的是能持续运行的 AI" copy="从“看起来可用”到进入真实业务，数据、流程、系统与治理构成了一道部署断层。" />
      <div className="fde-gap-layout"><div className="fde-gap-list">{gaps.map(([en,t,p],i)=><article key={en}><span>0{i+1}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div><div className="fde-funnel"><div className="fde-funnel-top"><span>Models</span><span>Data</span><span>Demo</span></div><div className="fde-funnel-gap"><strong>THE DEPLOYMENT GAP</strong><span>Integration · Governance · Workflow</span></div><div className="fde-funnel-result">Production <b>AI</b></div><div className="fde-funnel-bridge">FDE</div></div></div>
    </div></section>

    <section className="fde-section fde-definition"><div className="fde-shell">
      <Head title="不是把 AI 交给客户，而是和客户一起把它做进业务" copy="FDE（Forward Deployed Engineer）深入客户真实业务现场，以业务目标倒推技术实现。" />
      <div className="fde-three">{[['Into the Business','深入业务','理解流程、岗位、隐性规则与决策方式。'],['Into the Systems','深入系统','进入投管、ERP、OA、数据仓库与协同工具。'],['Into Production','进入生产','把 Model、Knowledge、Skills 和 Agent 变成业务动作。']].map(([e,t,p],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div>
      <div className="fde-difference"><div><small>传统项目</small><strong>系统上线 = 项目完成</strong></div><i>→</i><div><small>FDE 交付</small><strong>业务变化 = 项目完成</strong></div></div>
    </div></section>

    <section className="fde-section fde-outcomes"><div className="fde-shell"><Head title="最终交付的，不是一套 AI 工具" />
      <div className="fde-outcome-grid">{[['01','把知识变成 AI 能力','让分散在系统、资料与文件中的知识可理解、可检索、可调用、可复用。'],['02','把 AI 放进工作流','从“问 AI 一个问题”，变为“让 Agent 完成一个业务任务”。'],['03','构建可治理的 AI','让模型、数据、权限、Agent、成本和日志进入组织级治理。']].map(([n,t,p],i)=><article key={n} className={`outcome-${i+1}`}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="fde-section fde-loop-section" id="method"><div className="fde-shell"><Head title="从场景诊断，到持续运营" copy="这不是一次性的瀑布流程。运营反馈会重新进入下一轮诊断，让 AI 与业务一起演进。" />
      <div className="fde-loop">{loop.map(([n,e,t,p])=><article key={n}><span>{n}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}<div className="fde-loop-return">运营反馈返回诊断 ↺</div></div>
    </div></section>

    <section className="fde-section fde-stack"><div className="fde-shell fde-stack-grid"><div><Head title="平台让能力可复用，FDE 让能力真正落地" copy="FDE 不是架构的第四层，而是纵向贯穿业务场景、应用、Agent、数据、平台与模型的工程层。" /><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=82" alt="数据中心服务器基础设施" /></div><div className="fde-stack-map"><div className="fde-stack-fde">FDE<br/><small>ENGINEERING LAYER</small></div>{[['Business Applications','企业知识 · 数据分析 · 金融 Agent'],['Agents & Skills','专业能力 · Workflow · 业务动作'],['FAI · PaaS','Agent 编排 · 知识 · 权限 · 审计'],['星智通 · MaaS','多模型 · 统一 API · 路由 · 成本'],['AI Models','连接不同模型服务与供应商']].map(([t,p])=><article key={t}><strong>{t}</strong><span>{p}</span></article>)}</div></div></section>

    <section className="fde-section fde-govern"><div className="fde-shell"><Head title="金融 AI 的第一原则，不是自动化，而是可控" />
      <div className="fde-govern-grid"><div className="fde-govern-image"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=82" alt="金融专业人员审核分析材料" /><strong>AI 起草，人工定稿</strong></div><div className="fde-govern-list">{[['01','金融合规优先','把权限、数据边界与审计纳入架构起点。'],['02','数据密级路由','绝密、内部与公开数据进入不同处理路径。'],['03','Human Review','AI 输出进入确认队列，专业人员保留最终判断。'],['04','分阶段私有化','根据数据敏感性与业务边界逐步演进部署方式。']].map(([n,t,p])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div></div>
    </div></section>

    <section className="fde-case" id="case"><div className="fde-shell"><div className="fde-case-header"><div><p>真实项目 · 建设中</p><h2>复星锐正投资：让 AI 进入 VC / PE 的真实工作流</h2></div><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82" alt="投资团队会议与项目协作" /></div><div className="fde-case-facts"><article><span>16</span><strong>P0 高频需求</strong><p>从全量需求中筛选一期核心建设内容。</p></article><article><span>01</span><strong>统一交互入口</strong><p>通过飞书进入用户原有工作环境。</p></article><article><span>03</span><strong>架构红线</strong><p>核心数据不出域、AI 不替代判断、不改变核心投管系统。</p></article></div><div className="fde-case-architecture">{['Feishu 统一入口','Agent Layer','Shared Platform','Integration / API','Data Foundation'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><p className="fde-case-note">当前为项目建设中，页面仅展示已确定的方法、架构与建设范围，不作完整效果承诺。</p></div></section>

    <section className="fde-section fde-model"><div className="fde-shell"><Head title="从“交付系统”，转向“交付业务结果”" /><div className="fde-compare"><div><small>常规 AI 项目</small>{['以功能清单作为起点','平台上线后由客户自行推广','场景之间容易重复建设','项目结束即交付结束'].map(x=><p key={x}>{x}</p>)}</div><div><small>FINLOOP FDE-AI</small>{['以值得改变的业务流程作为起点','工程师进入系统与用户工作现场','依托平台、Skills 与 Agent 持续沉淀','上线后继续根据业务反馈运营'].map(x=><p key={x}>{x}</p>)}</div></div></div></section>

    <section className="fde-section fde-scenes"><div className="fde-shell"><Head title="越复杂、越敏感、越非标准的业务，越需要深入落地" /><div className="fde-scene-grid">{[['投资与资产管理','投研、尽调、投后、募资 IR 与投资运营。','https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'],['财富管理与产品销售','KYP、产品筛选、配置、营销与风险监测。','https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'],['企业知识与智能运营','企业知识库、文档分析、搜索与协同工具集成。','https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80'],['数据敏感型 AI','适用于需要私有化、数据隔离、权限控制与审计的业务。','https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80']].map(([t,p,img],i)=><article key={t}><img src={img} alt="" /><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="fde-cta"><div className="fde-shell"><h2>从一个真正值得改变的业务流程开始</h2><p>FDE 团队将与您的业务和技术团队一起诊断现有流程，评估数据、系统、治理要求与潜在业务价值。</p><div><Link className="button button-light" to="/contact">申请 AI 场景诊断 →</Link><Link to="/contact">与 FDE 团队交流</Link></div></div></section>
  </main>;
}
