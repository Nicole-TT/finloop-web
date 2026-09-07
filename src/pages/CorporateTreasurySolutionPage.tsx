import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CalendarClock, CircleDollarSign, createIcons, Landmark, Network, ShieldCheck, WalletCards } from 'lucide';

const challenges = [
  { icon: 'landmark', title: '资金与投资资产分散，难以统一掌握？', copy: '连接企业账户、现金、投资和持仓信息，形成企业自身的资金与投资资产视图。' },
  { icon: 'circle-dollar-sign', title: '有闲置资金，但哪些钱适合投资？', copy: '从经营资金与流动性安排出发，更清晰地区分日常经营、流动性储备和阶段性可投资资金。' },
  { icon: 'wallet-cards', title: '理财产品分散，选择与交易成本高？', copy: '通过统一的企业财富产品入口，围绕币种、期限、流动性和风险选择适用产品。' },
  { icon: 'calendar-clock', title: '投资以后，资金回笼不够清晰？', copy: '将持仓、赎回、到期、派息和资金流水纳入同一资产管理过程。' },
];

const capabilities = [
  { title: '企业账户', heading: '建立企业理财投资的统一账户基础', copy: '围绕企业资料、身份识别、最终受益人信息、专业投资者认证、企业账户与用户权限，连接后续资金管理和投资操作。', items: ['企业开户', '企业资料', '身份识别与反洗钱', '专业投资者认证', '用户与权限'], system: '主要业务入口：星企通', visual: ['企业主体', '账户与权限', '投资入口'] },
  { title: '资金管理', heading: '看清资金状态，再安排投资', copy: '统一查看现金余额、多币种资金、入金与出金、资金流水和可用资金。资金分层作为业务视角呈现，具体能力以实际项目配置为准。', items: ['现金余额', '多币种资金', '入金与出金', '资金流水', '可用资金'], system: '业务链路：经营资金 → 储备资金 → 可投资资金', visual: ['日常经营资金', '流动性储备', '阶段性可投资资金'] },
  { title: '理财配置', heading: '按资金期限与流动性选择适用产品', copy: '连接现金管理、基金、债券、结构性产品及其他适用财富产品，并结合币种、期限、流动性、风险和申赎规则配置产品范围。', items: ['现金管理', '基金', '债券', '结构性产品', '其他适用产品'], system: '产品范围按企业资格、需求与准入条件确定', visual: ['高流动性配置', '中短期配置', '特定期限配置'] },
  { title: '投资交易', heading: '在统一入口完成理财投资操作', copy: '企业可在统一业务入口查看产品与详情，完成申购、订单跟踪、交易记录查询和赎回；部分产品可根据实际业务涉及询价或报价。', items: ['产品选择', '产品详情', '申购', '订单状态', '赎回'], system: '企业投资平台：星企通', visual: ['选择产品', '提交交易', '跟踪订单'] },
  { title: '资产与流动性', heading: '持续掌握资产和未来资金安排', copy: '将总资产、持仓、资金流水、到期、赎回、派息与结单放在连续的资产管理视角中，帮助企业关注投资资产何时重新成为可用资金。', items: ['总资产与持仓', '资产结构', '资金流水', '到期与赎回', '结单'], system: '持续管理：投资资产 → 到期或赎回 → 可用资金', visual: ['当前投资资产', '预计到期与赎回', '未来可用资金'] },
];

const platforms = [
  { name: '星企通', type: '企业理财投资平台', position: '企业客户直接使用的理财投资与资产管理入口', flow: ['企业账户', '资金', '产品', '投资', '资产'] },
  { name: 'FinOne', type: '财富产品与运营中台', position: '为星企通提供产品、账户、订单与运营配置支撑', flow: ['产品配置', '用户与账户', '订单', '运营配置'] },
  { name: 'FinMix', type: '金融交易与账户基础设施', position: '为账户、交易、清结算与数据提供底层金融能力', flow: ['账户', '交易', '清结算', '数据'] },
];

const delivery = [
  ['企业需求与资金情况了解', '了解企业类型、资金规模、币种、资金用途、流动性需求、投资期限与风险偏好。'],
  ['企业开户与业务配置', '完成企业开户、身份识别、专业投资者认证、账户、产品范围、权限与业务设置。'],
  ['开始理财投资', '通过星企通查看资金、浏览产品、选择产品、完成交易并跟踪订单。'],
  ['持续资产管理', '持续查看资产、持仓、到期、赎回、资金流水与结单，并获得运营支持。'],
];

const proof = [
  { icon: 'wallet-cards', title: '多资产财富产品', copy: '根据企业实际需求与准入条件，连接现金管理、基金、债券、结构性产品及其他适用资产。' },
  { icon: 'building-2', title: '企业级账户与资产管理', copy: '围绕企业账户、现金、持仓、交易与结单，形成企业自身的资金与资产视图。' },
  { icon: 'network', title: '金融交易与运营基础设施', copy: '通过星企通、FinOne 与 FinMix，连接产品、订单、交易、清结算与资产管理。' },
  { icon: 'shield-check', title: '合规与风险控制', copy: '将企业身份识别、反洗钱、最终受益人识别、投资者认证、产品准入与交易记录纳入业务流程。' },
];

const customerCase = {
  label: '案例信息待公开',
  title: '企业资金与理财投资的一体化管理场景',
  intro: '企业客户名称、资产规模、使用产品与业务成效仍待公开授权，以下内容用于展示案例模块的信息结构。',
  items: [
    ['企业需求', '在保障日常经营和流动性的前提下，更清晰地识别阶段性可投资资金。'],
    ['方案配置', '通过星企通连接企业账户、资金、适用理财产品、投资交易与资产管理。'],
    ['管理视角', '持续查看持仓、到期、赎回与资金流水，将投资资产和未来现金安排放在同一视角。'],
  ],
};

const faq = [
  ['企业可以直接注册使用星企通吗？', '可以。星企通是面向企业客户开放的公共平台，不同企业可自行注册，并根据开户要求完成企业资料提交及相关审核流程。'],
  ['企业可以投资哪些理财产品？', '根据企业资格、投资者属性、产品准入及实际业务范围，可提供现金管理、基金、债券、结构性产品等适用理财产品。'],
  ['企业是否需要使用全部理财产品？', '不需要。平台中的产品用于满足不同资金期限、流动性需求和投资目标，企业可自主浏览并选择适合自身情况的产品进行投资。'],
  ['企业理财投资和个人理财有什么区别？', '企业理财以企业主体、企业账户和企业资金为基础，在开户、授权、资金来源、产品准入和合规要求等方面与个人理财存在差异。'],
  ['是否支持多币种资金？', '根据企业账户及星企通当前支持范围提供相应币种能力，具体范围需结合实际业务确认。'],
  ['是否可以查看企业当前所有投资资产？', '星企通可提供企业账户下的资产、持仓、交易及相关资金信息，具体展示范围根据账户和产品类型确定。'],
  ['产品赎回或到期后多久可以收到资金？', '不同产品的赎回、到期和结算周期不同，具体到账时间以相应产品规则为准。'],
  ['星企通和支付平台里的企业财富 Web 有什么区别？', '星企通是企业客户可直接注册和使用的公共平台；支付平台中的企业财富 Web 属于白标与嵌入式财富方案，由相应平台面向其客户提供服务。'],
  ['企业是否需要购买或部署星企通系统？', '不需要。星企通不是由单个机构采购后独立部署的系统，不同企业进入同一公共平台，并分别管理本企业的账户、资金与理财投资。'],
];

function Heading({ title, copy }: { title: string; copy?: string }) {
  return <header className="goal-head goal-head-plain"><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></header>;
}

export function CorporateTreasurySolutionPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const capability = capabilities[activeCapability];

  useEffect(() => {
    createIcons({ icons: { Building2, CalendarClock, CircleDollarSign, Landmark, Network, ShieldCheck, WalletCards } });
  }, []);

  return <main className="goal-page iw-page iw-v3 ct-page" id="main">
    <section className="goal-hero iw-hero ct-hero" data-header-theme="inverse"><div className="goal-shell">
      <p className="goal-eyebrow">企业理财投资解决方案</p>
      <h1>盘活企业闲置资金</h1>
      <p className="goal-intro">为企业提供从账户与资金管理，到多资产理财产品、投资交易和资产跟踪的一体化能力，帮助企业在兼顾流动性的同时，更高效地管理阶段性闲置资金。</p>
      <div className="goal-hero-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div>
    </div></section>

    <section className="goal-section" id="challenges"><div className="goal-shell"><header className="iw-challenge-head"><h2>帮助企业统筹资金、流动性与投资</h2><p>从看清企业资金状态，到选择适用理财产品和掌握未来资金回笼，让经营安排与理财投资保持协调。</p></header><div className="ct-challenges">{challenges.map(({ icon, title, copy }) => <article key={title}><i data-lucide={icon} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="goal-section" id="trust"><div className="goal-shell"><Heading title="支撑企业理财投资的专业基础" copy="以产品、企业账户、交易运营和合规风控能力，支撑企业自身资金的理财投资。" /><div className="iw-proof">{proof.map(({ icon, title, copy }) => <article key={title}><i data-lucide={icon} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="goal-section iw-integrated" id="capabilities"><div className="goal-shell"><header className="iw-integrated-head"><div><h2>打通企业资金与理财投资全流程</h2><p>从企业账户和资金，到理财产品、投资交易和资产管理，星路将企业资金与投资连接在统一业务体系中，让企业更清晰地管理每一笔可投资资金。</p></div></header><div className="iw-capability-tabs" role="tablist" aria-label="企业理财投资能力">{capabilities.map((item, i) => <button key={item.title} id={`treasury-tab-${i}`} role="tab" aria-selected={activeCapability === i} aria-controls="treasury-capability-panel" onClick={() => setActiveCapability(i)}>{item.title}</button>)}</div><article className="iw-capability-panel ct-capability-panel" id="treasury-capability-panel" role="tabpanel" aria-labelledby={`treasury-tab-${activeCapability}`}><figure className="ct-capability-visual" aria-hidden="true"><div className="ct-visual-core">{capability.title}</div><div className="ct-visual-steps">{capability.visual.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div></figure><div className="iw-capability-copy"><h3>{capability.heading}</h3><p>{capability.copy}</p><div className="iw-capability-items">{capability.items.map(x => <span key={x}>{x}</span>)}</div><footer><b>{capability.system}</b></footer></div></article></div></section>

    <section className="goal-section ct-platforms" id="platforms"><div className="goal-shell"><Heading title="平台与基础设施支撑" copy="从企业端投资平台，到产品运营和底层金融基础设施，为企业理财投资提供完整技术与业务支撑。" /><div className="ct-platform-cards">{platforms.map((item, i) => <article key={item.name}><div><small>{item.type}</small><h3>{item.name}</h3><p>{item.position}</p>{i < 2 && <Link to={i === 0 ? '/products/xingqitong' : '/products/finone'}>了解 {item.name} →</Link>}</div><figure aria-hidden="true">{item.flow.map((x, j) => <span key={x}><b>0{j + 1}</b>{x}</span>)}</figure></article>)}</div></div></section>

    <section className="goal-section goal-soft" id="delivery"><div className="goal-shell"><Heading title="我们的服务流程" copy="从企业资金情况与投资需求出发，完成开户配置、理财投资和持续资产管理。" /><ol className="goal-timeline iw-delivery">{delivery.map(([title, copy], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>

    <section className="goal-section iw-customer-case" id="case"><div className="goal-shell"><Heading title="客户案例" copy="从企业资金安排出发，展示理财投资方案如何进入实际管理流程。" /><article className="iw-case-study"><header><small>{customerCase.label}</small><h3>{customerCase.title}</h3><p>{customerCase.intro}</p></header><div>{customerCase.items.map(([title, copy], i) => <section key={title}><span>0{i + 1}</span><h4>{title}</h4><p>{copy}</p></section>)}</div></article></div></section>

    <section className="goal-section goal-soft" id="faq"><div className="goal-shell"><Heading title="常见问题" /><div className="goal-faq">{faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="goal-cta"><div className="goal-shell"><div className="iw-cta-copy"><h2>让企业闲置资金更高效地运转</h2><p>根据企业资金规模、流动性需求和投资目标，配置适合的理财产品与投资方式，更清晰地管理资金、投资和未来现金安排。</p></div><div><Link className="button button-light" to="/contact">咨询企业理财投资方案</Link></div></div></section>
  </main>;
}
