import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseBusiness, createIcons, Network, ShieldCheck, WalletCards } from 'lucide';

const challenges = [
  ['客户、账户与资产分散，难以统一管理？', '统一连接客户资料、账户、风险属性、资产与投资信息，形成更完整的客户财富视图。', '/assets/wealth-challenge-unified-data.png'],
  ['投资管理与交易割裂，协作成本高？', '贯通产品选择、投资建议、订单、执行与运营流程，让不同角色共享业务状态。', '/assets/wealth-challenge-connected-workflow.png'],
  ['多资产产品接入复杂，持续维护成本高？', '通过统一产品与交易能力，按需接入基金、债券、结构性产品等不同金融品类。', '/assets/wealth-challenge-product-access.png'],
  ['业务持续扩展，现有系统难以支撑？', '保留机构已有业务基础，通过灵活配置与系统连接补充所需能力，支持后续扩展。', '/assets/wealth-challenge-system-expansion.png'],
];

const integratedCapabilities = [
  { title: '客户与账户', heading: '建立统一的客户与账户基础', copy: '连接客户资料、身份审查、风险属性、账户、资产与持仓信息，形成完整的客户财富视图，并为后续投资管理与持续服务提供统一基础。', items: ['数字开户', '客户资料管理', '身份与反洗钱审查', '风险画像', '账户与资产'], systems: ['财富管理系统：FinEAM'], image: '/assets/wealth-solution-client-account-v2.png', alt: '统一客户、账户、资产与持仓信息的财富管理解决方案示意图' },
  { title: '投资与组合', heading: '连接资产、目标与投资组合', copy: '将客户资产、投资目标、资产配置与投资组合连接起来，支持组合跟踪、持续监控和投资记录管理，帮助机构建立连贯的投资管理流程。', items: ['客户资产视图', '投资组合', '资产配置', '组合监控', '投资记录'], systems: ['财富管理系统：FinEAM'], image: '/assets/wealth-solution-portfolio-v2.png', alt: '投资组合、资产配置与持续监控解决方案示意图' },
  { title: '全品类产品', heading: '按需连接全品类财富产品', copy: '通过统一财富产品体系连接现金管理、基金、债券、结构性产品及其他适用产品，机构可根据目标客户与发展阶段灵活选择产品范围。', items: ['现金管理', '公募与私募基金', '债券', '结构性产品', '其他适用产品'], systems: ['财富管理系统：FinEAM', '机构交易系统：Web Portal'], image: '/assets/wealth-solution-products-v2.png', alt: '全品类财富产品统一接入解决方案示意图' },
  { title: '专业交易', heading: '贯通产品发现与专业交易流程', copy: '把产品浏览、详情、询价、订单、执行与状态跟踪纳入专业交易流程，并可根据不同金融品类配置适用的交易链路。', items: ['产品浏览', '产品详情', '询价', '订单管理', '执行状态'], systems: ['机构交易系统：Web Portal'], image: '/assets/wealth-solution-trading-v2.png', alt: '从产品发现到订单执行的专业交易解决方案示意图' },
  { title: '持续运营', heading: '让财富服务延伸至交易之后', copy: '将持仓、资金、清结算、产品生命周期、结单与报告持续纳入财富业务运营体系，使交易后的资产服务与业务状态保持连贯。', items: ['持仓管理', '资金流水', '清结算状态', '结单与报告', '审计记录'], systems: ['财富管理系统：FinEAM', '机构交易系统：Web Portal'], image: '/assets/wealth-solution-operations-v2.png', alt: '持仓、清结算、报告与资产服务持续运营解决方案示意图' },
];

const platforms = [
  { name: 'FinEAM', type: '数字财富管理平台', position: '面向专业财富管理机构的数字财富管理平台', image: '/assets/account-architecture-light.png', alt: 'FinEAM 客户、账户与资产管理平台示意图', href: '/products/fineam' },
  { name: 'Web Portal', type: '多资产产品与交易平台', position: '面向专业机构的多资产财富产品与交易平台', image: '/assets/product-template-labeled.png', alt: 'Web Portal 多资产产品与专业交易平台示意图', href: '/products/web-portal' },
  { name: 'FinOne', type: '财富运营中台', position: '支撑 FinEAM 的统一财富运营中台', image: '/assets/finone-onboarding.png', alt: 'FinOne 财富业务运营管理平台界面', href: '/products/finone' },
  { name: 'FinMix', type: '金融基础设施', position: '星路自研金融交易与账户基础设施', image: '/assets/finmix-infrastructure-light.png', alt: 'FinMix 金融交易与账户基础设施示意图' },
];

const delivery = [
  ['业务与方案设计', '确认业务目标、客户类型、产品范围、系统架构与合作边界。'],
  ['配置与系统连接', '完成系统与产品配置、接口、数据连接及权限设置。'],
  ['测试与正式上线', '完成用户验收测试、合规检查、培训与正式上线。'],
  ['持续运营与优化', '根据合作模式持续提供产品、系统、运营支持与优化。'],
];

const proof = [
  ['wallet-cards', '全品类产品能力', '覆盖现金管理、基金、债券、结构性产品、私募市场及其他适用资产方向。'],
  ['briefcase-business', '专业机构服务经验', '服务场景覆盖银行、券商、支付平台、家族办公室及财富管理机构等客户类型。'],
  ['network', '财富科技基础设施', '连接财富平台、产品、交易、账户基础设施、运营与数据。'],
  ['shield-check', '合规与专业运营', '将客户身份识别与反洗钱、专业投资者认定、适当性、交易记录、审计、结单和运营纳入项目设计。'],
];

const customerCase = {
  label: '匿名客户案例',
  title: '某 EAM / 家族办公室连接完整财富服务流程',
  intro: '客户名称、上线周期与业务成果数据尚待公开授权，本案例仅展示已确认的项目场景与方案结构。',
  items: [
    ['业务背景', '客户数据、产品研究、订单与资产报告分散在不同系统，日常服务需要频繁切换。'],
    ['方案配置', '以 FinEAM 连接客户、产品、投资、交易、投资组合与投资者体验。'],
    ['业务变化', '让机构围绕同一客户持续完成财富服务，减少流程与信息在多个系统之间断开。'],
  ],
};

const faq = [
  ['FinEAM 和 Web Portal 有什么区别？', 'FinEAM 更侧重客户财富管理、账户、资产和投资组合等完整财富管理流程；Web Portal 更侧重多资产产品接入、专业交易、订单与机构运营。两者可根据机构业务需要独立或组合使用。'],
  ['是否必须使用全部财富产品？', '不需要。机构可以根据自身业务范围选择所需金融品类和交易能力，并随着业务发展逐步扩展。'],
  ['可以只接入债券或结构性产品吗？', '可根据具体合作模式、产品准入及业务范围配置相应金融品类。'],
  ['可以连接我们现有的系统吗？', '可根据项目通过 API、数据接口等方式连接客户现有业务系统，具体对接范围根据项目架构确定。'],
  ['是否必须使用 FinMix？', '不一定。实际账户、交易及柜台架构根据机构现有系统和合作模式确定。'],
  ['支持哪些财富产品？', '根据业务需求可提供现金管理、基金、债券、结构性产品等多种财富产品能力。其他资产类别的可用范围根据机构资质、账户及产品准入确定。'],
  ['是否适合已经有财富系统的机构？', '可以。无需完全替换已有系统，可根据现有业务基础补充产品、交易、财富管理、运营和数据连接能力。'],
];

function Heading({ title, copy }: { title: string; copy?: string }) {
  return <header className="goal-head goal-head-plain"><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></header>;
}

export function InstitutionalWealthSolutionPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const capability = integratedCapabilities[activeCapability];

  useEffect(() => {
    createIcons({ icons: { BriefcaseBusiness, Network, ShieldCheck, WalletCards } });
  }, []);

  return <main className="goal-page iw-page iw-v3" id="main">
    <section className="goal-hero iw-hero" data-header-theme="inverse"><div className="goal-shell">
      <p className="goal-eyebrow">一站式财富管理平台</p>
      <h1>机构财富管理解决方案</h1>
      <p className="goal-intro">为EAM、家族办公室、私人银行等专业金融投资机构，提供客户管理、投资组合、多品类金融产品的专业交易及管理能力，构建适合自身业务模式的财富管理体系。</p>
      <div className="goal-hero-actions"><Link className="button button-accent" to="/contact">联系我们</Link><a href="#capabilities">了解财富业务能力 ↓</a></div>
    </div></section>

    <section className="goal-section iw-audience"><div className="goal-shell"><div className="iw-audience-copy"><small>背景现状</small><h2>机构财富管理正在走向全链路协同</h2><p>随着客户需求、资产类别与业务规模持续增长，机构财富管理需要让客户、账户、投资组合、金融产品、交易与运营在同一业务链路中协同，分散的系统和人工流程越来越难以支撑业务持续发展。</p></div><figure><img src="/assets/wealth-challenge-unified-data.png" alt="客户、账户、资产与投资信息汇聚为统一财富管理视图的示意图" /></figure></div></section>

    <section className="goal-section" id="challenges"><div className="goal-shell"><header className="iw-challenge-head"><h2>破解财富业务增长中的复杂问题</h2><p>从分散的客户与资产信息，到多产品接入和持续运营，为每一个业务问题配置对应能力。</p></header><div className="iw-challenges">{challenges.map(([title, copy, image]) => <article key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

    <section className="goal-section iw-integrated" id="capabilities"><div className="goal-shell"><header className="iw-integrated-head"><div><h2>打通财富管理全链路</h2><p>从客户与账户、投资组合，到全品类产品、专业交易和持续运营，星路通过 FinEAM、Web Portal 及统一中后台与金融基础设施，为专业机构构建可按需组合的一体化财富管理能力。</p></div></header><div className="iw-capability-tabs" role="tablist" aria-label="财富管理能力">{integratedCapabilities.map((item, i) => <button key={item.title} id={`capability-tab-${i}`} role="tab" aria-selected={activeCapability === i} aria-controls="capability-panel" onClick={() => setActiveCapability(i)}>{item.title}</button>)}</div><article className="iw-capability-panel" id="capability-panel" role="tabpanel" aria-labelledby={`capability-tab-${activeCapability}`}><figure><img src={capability.image} alt={capability.alt} /></figure><div className="iw-capability-copy"><h3>{capability.heading}</h3><p>{capability.copy}</p><div className="iw-capability-items">{capability.items.map(x => <span key={x}>{x}</span>)}</div><footer>{capability.systems.map(x => <b key={x}>{x}</b>)}</footer></div></article></div></section>

    <section className="goal-section" id="platforms"><div className="goal-shell"><Heading title="平台与基础设施支撑" copy="根据机构业务需求，可由不同平台独立或组合支撑；平台是能力载体，不是方案分类依据。" /><div className="iw-platform-cards">{platforms.map(item => <article key={item.name}><div><small>{item.type}</small><h3>{item.name}</h3><strong>{item.position}</strong>{item.href && <Link to={item.href}>了解 {item.name} →</Link>}</div><figure aria-hidden="true" /></article>)}</div></div></section>

    <section className="goal-section goal-soft" id="delivery"><div className="goal-shell"><Heading title="我们的服务流程链路" copy="从业务规划、方案配置与系统连接，到测试上线和持续运营，推动机构财富管理方案真正落地。" /><ol className="goal-timeline iw-delivery">{delivery.map(([title, copy], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>

    <section className="goal-section" id="trust"><div className="goal-shell"><Heading title="支撑机构财富业务的专业基础" copy="信任来自真实的产品、交易、基础设施、运营和合规能力，而不是未经核验的数字承诺。" /><div className="iw-proof">{proof.map(([icon, title, copy]) => <article key={title}><i data-lucide={icon} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="goal-section iw-customer-case" id="case"><div className="goal-shell"><Heading title="客户案例" copy="从真实业务场景理解机构如何连接客户、投资与持续服务。" /><article className="iw-case-study"><header><small>{customerCase.label}</small><h3>{customerCase.title}</h3><p>{customerCase.intro}</p></header><div>{customerCase.items.map(([title, copy], i) => <section key={title}><span>0{i + 1}</span><h4>{title}</h4><p>{copy}</p></section>)}</div></article></div></section>

    <section className="goal-section goal-soft" id="faq"><div className="goal-shell"><Heading title="常见问题" /><div className="goal-faq">{faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="goal-cta"><div className="goal-shell"><div className="iw-cta-copy"><h2>构建适合你的机构财富业务</h2><p>从客户财富管理到多资产产品与专业交易，根据你的业务基础、产品范围和现有系统，组合适合的财富管理能力。</p></div><div><Link className="button button-light" to="/contact">咨询机构财富解决方案</Link></div></div></section>
  </main>;
}
