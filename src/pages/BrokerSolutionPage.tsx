import { Link } from 'react-router-dom';

type Capability = { label: string; title: string; copy: string; items: string[]; links: Array<[string, string]>; visual: 'products' | 'channels' | 'api' | 'ai' | 'rwa' };

const capabilities: Capability[] = [
  { label: '财富产品供给', title: '快速扩充财富产品与投资服务', copy: '连接多元财富产品，为现有个人、企业及机构客户补充不同风险、期限与资产类别的投资选择。', items: ['现金管理', '公募基金', '私募基金', '债券', '结构性产品', '多资产投资产品', '产品数据与运营'], links: [['机构财富管理', '/solutions/digital-wealth-management']], visual: 'products' },
  { label: '数字财富平台', title: '快速补充现有数字渠道的财富能力', copy: '在现有手机银行、证券 App 或 Web 服务中增加产品展示、投资账户、交易、持仓及资产服务，无需重新建设完整前端体系。', items: ['财富 H5', '模块化页面', '白标财富前端', '财富中台', '产品与交易能力', '资产展示'], links: [['机构财富管理', '/solutions/digital-wealth-management'], ['FinOne', '/products/finone']], visual: 'channels' },
  { label: '开放 API', title: 'API 灵活接入财富业务能力', copy: '保留现有账户、交易和运营系统，通过标准接口接入产品、订单、交易、持仓及资产数据。', items: ['产品 API', '账户 API', '订单 API', '交易 API', '持仓与资产 API', '数据 API', '系统集成'], links: [['API 与技术平台', '/technology-platform']], visual: 'api' },
  { label: '金融 AI', title: '让 AI 进入财富服务与业务运营', copy: '以 AI 辅助产品理解、投顾服务、客户运营及内部工作流程，提升专业服务与运营效率。', items: ['AI 产品检索', 'AI 产品解读', 'AI 投顾辅助', '客户服务', '智能运营', '智能 Agent', '数据洞察'], links: [['Finloop AI', '/ai']], visual: 'ai' },
  { label: 'RWA 与数字资产', title: '连接传统金融与数字资产市场', copy: '帮助银行与证券机构拓展资产代币化、RWA 发行与分销及 Web3 相关金融业务。', items: ['资产代币化', 'RWA 发行', 'RWA 分销', '数字资产接入', 'Web2 / Web3 连接', '相关技术基础设施'], links: [['数字产业与代币化', '/solutions/rwa-web3']], visual: 'rwa' },
];

const plans = [
  { type: '大型银行 / 券商', context: '已有成熟前端、核心账户及交易体系。', stack: ['API', '产品与财富能力', 'AI', 'RWA', '定制化 / 本地化部署'], note: '以能力和接口接入为主，减少对现有系统的改造。' },
  { type: '中型银行 / 券商', context: '已有基础金融系统，希望快速补齐数字财富能力。', stack: ['财富 H5', 'FinOne 财富中台', 'API', 'Web Portal', 'AI'] },
  { type: '成长型机构 / 新财富业务团队', context: '希望快速形成较完整的财富业务能力。', stack: ['白标财富 App / H5', 'FinOne', '标准 API', 'AI'] },
];

function CapabilityVisual({ type }: { type: Capability['visual'] }) {
  const items = { products: ['现金', '基金', '债券', '结构性产品'], channels: ['手机银行', '证券 App', 'Web', '财富 H5'], api: ['PRODUCT', 'ACCOUNT', 'ORDER', 'ASSET'], ai: ['产品理解', '投顾辅助', '智能运营', '数据洞察'], rwa: ['REAL ASSET', 'TOKENIZATION', 'DISTRIBUTION', 'WEB3'] }[type];
  const core = type === 'api' ? 'OPEN API' : type === 'ai' ? 'AI' : type === 'rwa' ? 'RWA' : 'WEALTH';
  return <figure className={`bfi-visual bfi-visual-${type}`} aria-label={`${items.join('、')}能力连接示意`}><div className="bfi-visual-core"><strong>{core}</strong></div><div className="bfi-visual-items">{items.map(item => <span key={item}>{item}</span>)}</div></figure>;
}

export function BrokerSolutionPage() {
  return <main className="bfi-page" id="main">
    <section className="bfi-hero" data-header-theme="inverse"><div className="bfi-shell bfi-hero-grid"><div className="bfi-hero-copy"><p className="bfi-kicker">银行与证券机构解决方案</p><h1>在现有金融体系上，持续扩展新的财富业务能力</h1><p>面向银行与证券机构，在已有客户、账户、交易及核心系统基础上，灵活接入财富产品、数字财富、AI、RWA 与开放 API 能力。</p><div className="bfi-actions"><a className="button button-accent" href="#capabilities">探索适合您的能力</a><Link to="/contact">联系我们</Link></div></div><div className="bfi-hero-system" aria-label="在机构现有金融体系上扩展财富能力的示意图"><div className="existing"><small>EXISTING FINANCIAL SYSTEM</small><strong>机构现有体系</strong><span>客户 · 账户 · 交易 · 核心系统</span></div><i>连接</i><div className="extensions">{['财富产品', '数字财富', 'AI', 'RWA', 'API'].map(item => <span key={item}>{item}</span>)}</div></div></div></section>

    <section className="bfi-capabilities-intro" id="capabilities"><div className="bfi-shell bfi-section-head"><h2>在现有体系上，按需组合新的业务能力</h2><p>从单项产品与接口接入，到数字财富、AI 与数字资产业务建设，根据现有架构选择合适的能力组合。</p></div></section>

    <div className="bfi-capability-list">{capabilities.map((item, index) => <section className={`bfi-capability ${index % 2 ? 'reverse' : ''}`} key={item.title}><div className="bfi-shell bfi-capability-grid"><div className="bfi-capability-copy"><h2>{item.title}</h2><p>{item.copy}</p><div className="bfi-tags">{item.items.map(capability => <span key={capability}>{capability}</span>)}</div><div className="bfi-links">{item.links.map(([label, href]) => <Link to={href} key={label}>{label} <span>→</span></Link>)}</div></div><CapabilityVisual type={item.visual} /></div></section>)}</div>

    <section className="bfi-custom"><div className="bfi-shell bfi-custom-grid"><div><h2>适配大型金融机构的复杂系统环境</h2><p>根据机构现有架构、监管要求、部署环境与业务流程，提供系统集成、功能定制及本地化部署。</p><div className="bfi-links"><Link to="/technology-platform">技术平台 <span>→</span></Link><Link to="/support">实施与服务 <span>→</span></Link></div></div><div className="bfi-custom-map">{['定制开发', '系统集成', '私有化部署', '本地化部署', '品牌适配', '权限与安全适配'].map(item => <span key={item}>{item}</span>)}</div></div></section>

    <section className="bfi-plans"><div className="bfi-shell"><header><h2>按机构基础灵活组合</h2></header><div className="bfi-plan-grid">{plans.map(plan => <article key={plan.type}><h3>{plan.type}</h3><p>{plan.context}</p><small>推荐方式</small><div>{plan.stack.map(item => <b key={item}>{item}</b>)}</div>{plan.note && <footer>{plan.note}</footer>}</article>)}</div></div></section>

    <section className="bfi-cta"><div className="bfi-shell"><h2>从现有系统出发，规划下一项业务能力</h2><Link className="button button-light" to="/contact">联系我们</Link></div></section>
  </main>;
}
