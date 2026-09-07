import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const capabilities = [
  { title: '快速建立面向客户的数字财富渠道', copy: '从财富前端、产品展示到投资账户、交易及资产服务，快速补齐客户侧数字化能力。', items: ['白标财富 App', '财富 H5', '开户', '产品展示', '交易', '持仓', '资产', '结单与报表'], links: [['机构财富管理', '/solutions/digital-wealth-management'], ['FinOne', '/products/finone']], visualTitle: 'DIGITAL WEALTH', visualItems: ['品牌财富入口', '账户与交易', '持仓与资产服务'] },
  { title: '统一管理客户、投顾、组合与交易', copy: '为 EAM、财富管理机构及专业投资顾问团队提供覆盖客户全生命周期的财富管理能力。', items: ['客户开户', 'KYC / PI', '客户管理', '投顾服务', '产品管理', '资产配置', '组合管理', '交易执行', '合规管理', '报表', '客户互动'], links: [['FinEAM', '/products/fineam']], visualTitle: 'EAM', visualItems: ['客户与投顾', '配置与组合', '交易与合规'] },
  { title: '让更多机构与投资者连接您的产品', copy: '帮助基金公司、资产管理机构及其他产品发行方连接财富分销网络，提高产品触达与交易效率。', items: ['产品接入', '产品资料管理', '产品展示', '机构分销', 'API 分销', '订单管理', '交易与结算', '产品运营'], links: [['机构财富管理', '/solutions/digital-wealth-management']], visualTitle: 'DISTRIBUTION', visualItems: ['产品发行方', '统一产品网络', '机构与投资者'] },
  { title: '统一管理产品、客户、订单和运营', copy: '通过标准中后台支撑财富业务日常配置、交易、运营和客户管理，减少多系统间的重复操作。', items: ['产品配置', '产品上架', '客户管理', '账户管理', '订单管理', '交易管理', '权限管理', '运营管理', '数据与报表'], links: [['FinOne', '/products/finone'], ['FinEAM', '/products/fineam']], visualTitle: 'WEALTH CORE', visualItems: ['统一数据与配置', '订单与交易运营', '权限与报表'] },
  { title: '连接传统财富与数字资产生态', copy: '传统基金与资管机构可拓展资产代币化、RWA 发行与分销；数字资产机构亦可连接传统金融产品与财富基础设施。', items: ['RWA', '资产代币化', '数字资产产品', '产品发行', '产品分销', 'TaaS', 'API'], links: [['数字产业与代币化', '/solutions/rwa-web3']], visualTitle: 'RWA', visualItems: ['传统资产与产品', '代币化与发行', '市场接入与分销'] },
  { title: '以 AI 辅助投顾、运营与客户服务', copy: '将 AI 应用于产品理解、投资研究、客户服务和内部运营，提高专业人员工作效率。', items: ['产品分析', '产品检索', '投顾辅助', '客户洞察', '内容生成', '运营自动化', '智能 Agent', '内部知识助手'], links: [['Finloop AI', '/ai']], visualTitle: 'AI', visualItems: ['知识与产品理解', '专业人员辅助', '服务与运营自动化'] },
];

const plans = [
  { title: '综合财富管理机构', copy: '建设完整的客户渠道、财富核心与开放连接能力。', stack: ['白标财富 App / H5', 'FinOne', 'Web Portal', 'API', 'AI'] },
  { title: 'EAM / 投顾机构', copy: '围绕客户全生命周期和专业投顾工作展开。', stack: ['EAM App', 'FinEAM', 'Web Portal', 'AI'] },
  { title: '基金 / 资管机构', copy: '以产品发行与机构分销为主，也可增加面向客户的财富服务。', stack: ['产品接入', 'Web Portal', 'API', 'AI', '白标财富 App / H5 + FinOne（可选）'] },
  { title: '数字资产机构', copy: '连接数字资产能力，并按需接入传统财富产品与分销网络。', stack: ['TaaS', 'FinRWA', 'API', 'AI'] },
  { title: '大型专业机构', copy: '适配复杂架构、部署环境与现有业务流程。', stack: ['财富中台', 'API', 'AI', '定制集成 / 本地化部署'] },
  { title: '成长型专业机构', copy: '以标准化产品快速形成完整财富业务基础。', stack: ['标准 SaaS', '标准财富前端', '标准中后台'] },
];

function CapabilityVisual({ title, items }: { title: string; items: string[] }) {
  return <figure className="pwi-visual" aria-label={`${title} 能力结构`}><strong>{title}</strong><div>{items.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div></figure>;
}

export function ProfessionalWealthSolutionPage() {
  return <main className="pwi-page" id="main">
    <section className="pwi-hero" data-header-theme="inverse"><div className="pwi-shell pwi-hero-grid"><div><h1>从单一财富能力，<br />到完整专业财富管理平台</h1><p>面向基金、资管、财富管理、EAM、保险及数字资产等专业机构，根据牌照、业务模式与机构规模灵活建设客户、产品、交易、资产管理及运营能力。</p><div className="pwi-actions"><a className="button button-accent" href="#capabilities">探索适合您的能力</a><Link to="/contact">联系我们</Link></div></div><div className="pwi-hero-map" aria-label="专业财富管理平台能力图"><strong>PROFESSIONAL<br />WEALTH</strong>{['客户', '产品', '交易', '资产', '运营', 'AI / RWA'].map((item, index) => <span key={item} style={{ '--index': index } as CSSProperties}>{item}</span>)}</div></div></section>

    <section className="pwi-intro" id="capabilities"><div className="pwi-shell"><h2>按业务目标，组合专业财富能力</h2><p>从面向客户的数字渠道，到专业投顾、产品分销、财富中后台、数字资产与 AI，选择当前所需能力，并为后续业务扩展保留空间。</p></div></section>

    <div className="pwi-capabilities">{capabilities.map((item, index) => <section className={`pwi-capability${index % 2 ? ' reverse' : ''}`} key={item.title}><div className="pwi-shell pwi-capability-grid"><div className="pwi-capability-copy"><h2>{item.title}</h2><p>{item.copy}</p><div className="pwi-tags">{item.items.map(value => <span key={value}>{value}</span>)}</div><div className="pwi-links">{item.links.map(([label, href]) => <Link to={href} key={label}>{label} <span>→</span></Link>)}</div></div><CapabilityVisual title={item.visualTitle} items={item.visualItems} /></div></section>)}</div>

    <section className="pwi-plans"><div className="pwi-shell"><header><h2>根据业务模式与规模灵活组合</h2><p>不同机构无需从同一个起点开始。基于现有渠道、系统和团队，选择更适合的建设方式。</p></header><div className="pwi-plan-grid">{plans.map(plan => <article key={plan.title}><h3>{plan.title}</h3><p>{plan.copy}</p><div>{plan.stack.map((item, index) => <span key={item}>{index > 0 && <i>＋</i>}{item}</span>)}</div></article>)}</div></div></section>

    <section className="pwi-related"><div className="pwi-shell"><h2>继续了解相关能力</h2><div>{[['机构财富管理', '建设完整财富业务', '/solutions/digital-wealth-management'], ['FinEAM', '管理客户、投顾、交易与资产', '/products/fineam'], ['数字产业与代币化', '进入 RWA 与数字资产市场', '/solutions/rwa-web3'], ['Finloop AI', '提升财富服务效率', '/ai']].map(([title, copy, href]) => <Link to={href} key={title}><h3>{title}</h3><p>{copy}</p><span>→</span></Link>)}</div></div></section>

    <section className="pwi-cta"><div className="pwi-shell"><div><h2>构建适合您的专业财富平台</h2><p>从现有业务与系统出发，与 Finloop 团队共同规划下一步能力组合。</p></div><Link className="button button-light" to="/contact">联系我们</Link></div></section>
  </main>;
}
