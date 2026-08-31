import { Link } from 'react-router-dom';

const journey = [
  ['01', '开户注册', '开户注册 · KYC / AML · PI · 风险评估'],
  ['02', '账户与资金', '账户信息 · 入金出金 · 资金流水'],
  ['03', '产品与投资', '产品浏览 · 产品详情 · 投资交易'],
  ['04', '资产管理', '总资产 · 投资组合 · 持仓 · 资产变化'],
  ['05', '持续服务', '交易记录 · 结单 · 资产信息 · 客户服务'],
];

function Phone({ brand, tone, stock = false }: { brand: string; tone: string; stock?: boolean }) {
  return <div className={`wl-phone wl-phone-${tone}`} aria-label={`${brand} ${stock ? '财富与股票' : '财富'} App 示意`}>
    <div className="wl-phone-screen">
      <header><b>{brand}</b><i /></header>
      <small>{stock ? '财富 + 股票账户' : '总资产'}</small><strong>HKD 1,286,420</strong>
      <div className="wl-chart">{[1, 2, 3, 4, 5, 6].map(x => <i key={x} />)}</div>
      <div className="wl-phone-actions"><span>财富产品</span><span>{stock ? '股票' : '资产'}</span><span>{stock ? '交易' : '持仓'}</span></div>
      <section><b>{stock ? '市场行情' : '我的组合'}</b>{[1, 2, 3].map(x => <p key={x}><i /><span /><em /></p>)}</section>
    </div>
  </div>;
}

function Head({ title, copy }: { title: string; copy?: string }) {
  return <div className="wl-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function AppScreen({ type }: { type: 'home' | 'products' | 'stocks' | 'assets' }) {
  const content = {
    home: ['首页与总览', '总资产', ['常用服务', '投资组合', '精选产品']],
    products: ['财富产品', '产品筛选', ['基金产品', '债券产品', '产品详情']],
    stocks: ['股票投资', '市场行情', ['自选股票', '股票详情', '买入 / 卖出']],
    assets: ['资产与持仓', '资产分析', ['资产配置', '持仓明细', '交易记录']],
  }[type];
  return <div className={`wl-showcase-phone showcase-${type}`} role="img" aria-label={`${content[0]}产品页面示意`}><div className="wl-showcase-screen"><header><b>FINLOOP</b><i /></header><small>{content[1]}</small><strong>{type === 'stocks' ? '恒生指数 25,321.42' : 'HKD 1,286,420'}</strong><div className="wl-showcase-visual">{type === 'stocks' ? <svg viewBox="0 0 240 90" aria-hidden="true"><path d="M2 68L34 52L62 61L91 35L121 43L151 18L181 32L210 11L238 22" /></svg> : <div>{[32, 47, 39, 65, 56, 82, 73].map((x, i) => <i key={i} style={{ height: `${x}%` }} />)}</div>}</div><section>{content[2].map((item, i) => <article key={item}><i /><div><b>{item}</b><span /></div><em>{i === 0 ? '查看' : '›'}</em></article>)}</section><footer><i /><i /><i /><i /></footer></div></div>;
}

export function WhiteLabelAppPage() {
  return <main className="wl-page" id="main">
    <section className="wl-hero" data-header-theme="inverse"><div className="wl-shell wl-hero-grid">
      <div className="wl-hero-copy"><h1>快速构建数字财富与投资 App</h1><p>基于成熟的财富科技基础设施，为金融机构提供可配置的白标财富 / 股票投资终端，连接客户、产品、交易与资产服务。</p><div className="wl-actions"><Link className="button button-accent" to="/contact">咨询白标方案 →</Link><Link to="/products/finone">了解 FinOne →</Link></div><div className="wl-hero-line"><span>灵活组合不同客户端</span><i /><span>一个财富核心</span></div></div>
      <div className="wl-phone-stage wl-phone-stage-v2"><div><Phone brand="WEALTH" tone="blue" /><small>白标财富 App</small></div><b>+</b><div><Phone brand="WEALTH + STOCK" tone="green" stock /><small>白标股票 App</small></div><div className="wl-stage-label">POWERED BY FINLOOP WEALTH INFRASTRUCTURE</div></div>
    </div></section>

    <section className="wl-section wl-value"><div className="wl-shell"><Head title="更快建立属于自己的数字投资服务" copy="无需从零建设完整客户端与财富业务基础设施，并可根据业务阶段持续扩展。" /><div className="wl-value-grid">{[
      ['自有品牌', '以机构自身品牌直接服务最终投资者。'],
      ['灵活业务配置', '根据机构业务选择财富产品和功能模块。'],
      ['完整投资体验', '覆盖账户、资金、产品、资产和持续客户服务。'],
      ['持续业务扩展', '可以从财富业务开始，并根据需要进一步扩展股票业务。'],
    ].map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="wl-section wl-journey" id="journey"><div className="wl-shell"><Head title="从开户到资产服务，连接完整投资者旅程" copy="把客户进入、投资和持续服务连接到同一个品牌终端。" /><div className="wl-journey-rail wl-journey-five">{journey.map(([number, title, copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="wl-note">具体功能是否开放，由实际白标项目及 FinOne 后台配置决定。</p></div></section>

    <section className="wl-section wl-combination"><div className="wl-shell"><Head title="根据您的业务，组合适合的投资能力" copy="白标股票 App 不是另一套孤立产品，而是在完整财富客户端能力上增加股票投资模块。" /><div className="wl-combination-board">
      <article className="wl-combo-wealth"><span>01</span><small>白标财富 App</small><h3>从财富业务开始</h3><div>{['账户', '财富产品', '资产', '持仓', '结单'].map(x => <b key={x}>{x}</b>)}</div><p>财富产品品类根据机构业务需求选择，并由 FinOne 后台配置；具体支持资产类别以项目实际开放能力为准。</p></article>
      <div className="wl-combo-operator"><b>+</b><span>增加股票模块</span></div>
      <article className="wl-combo-stock"><span>02</span><small>白标财富 App + 股票模块</small><h3>扩展为白标股票 App</h3><div>{['股票行情', '股票详情', '买入 / 卖出', '委托', '成交记录', '股票持仓'].map(x => <b key={x}>{x}</b>)}</div><p>股票模块的具体功能范围与前端技术形态仍需根据实际项目确认。</p></article>
    </div></div></section>

    <section className="wl-section wl-app-showcase"><div className="wl-shell"><Head title="将关键投资服务带到客户手中" copy="围绕客户日常使用场景组织 App 页面，让财富发现、股票投资与资产管理保持连续体验。" /><div className="wl-showcase-grid">{[
      ['01', '首页与总览', '集中呈现资产概览、常用服务和投资入口。', 'home'],
      ['02', '财富产品', '浏览和筛选财富产品，并进入产品详情。', 'products'],
      ['03', '股票投资', '在股票模块中查看行情、股票详情与交易入口。', 'stocks'],
      ['04', '资产与持仓', '查看资产配置、投资组合、持仓与交易记录。', 'assets'],
    ].map(([number, title, copy, type]) => <article key={number}><div><span>{number}</span><h3>{title}</h3><p>{copy}</p></div><AppScreen type={type as 'home' | 'products' | 'stocks' | 'assets'} /></article>)}</div><p className="wl-note">以上界面用于展示建议产品结构；实际页面、资产类别及股票模块功能以具体白标项目开放范围为准。</p></div></section>

    <section className="wl-section wl-custom"><div className="wl-shell"><Head title="让数字财富体验保持您的品牌一致性" copy="在成熟产品体验基础上适配机构 Logo 与品牌视觉，快速形成符合机构品牌识别的数字投资终端。" /><div className="wl-brand-flow">
      <article><small>FINLOOP STANDARD UI</small><strong>成熟产品界面</strong><div className="wl-brand-swatch standard"><i /><i /><i /></div></article><b>+</b>
      <article><small>BRAND INPUT</small><strong>客户 Logo + 品牌主色</strong><div className="wl-brand-palette"><i /><i /><i /></div></article><b>→</b>
      <article className="result"><small>YOUR BRANDED APP</small><strong>机构品牌投资终端</strong><div className="wl-brand-swatch branded"><i /><i /><i /></div></article>
    </div><p className="wl-note">品牌视觉适配目前明确包括客户 Logo 与品牌主色，不对外承诺页面布局、组件结构或交互方式的自由修改。</p></div></section>

    <section className="wl-section wl-delivery"><div className="wl-shell"><Head title="适应不同数字渠道的财富体验" copy="客户不一定需要重新发布一套完整 App，也可以独立使用财富 H5，或嵌入已有客户端。" /><div className="wl-channel-grid">{[
      ['方案 A', '独立白标 App', '以独立移动 App 的形式面向最终投资者。'],
      ['方案 B', '独立财富 H5', '直接以移动 Web 终端提供财富体验。'],
      ['方案 C', '已有 App 嵌入财富 H5', '将财富 H5 接入机构现有数字客户端。'],
    ].map(([label, title, copy], i) => <article key={label}><span>{label}</span><div className={`wl-channel-device channel-${i}`}><i /><b>FINLOOP</b><em /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="wl-section wl-infrastructure" id="infrastructure"><div className="wl-shell"><Head title="前端灵活组合，后台统一运营" copy="一个财富核心，灵活支撑多种品牌终端和投资场景。" /><div className="wl-terminal-map"><div className="wl-terminal-row">{['白标财富 App', '白标股票 App', '财富 H5', '嵌入式财富 H5'].map(x => <span key={x}>{x}</span>)}</div><div className="wl-terminal-lines"><i /><i /><i /></div><article className="wl-finone-core"><small>财富核心 / ToC 运营中台</small><strong>FinOne</strong><p>账户 · 产品配置 · 交易 · 资产 · 客户 · 运营</p></article><b>↓</b><article className="wl-finmix-base"><small>金融基础设施</small><strong>FinMix</strong><p>交易 · 清结算 · 数据 · 上游机构连接</p></article></div></div></section>

    <section className="wl-section wl-case"><div className="wl-shell"><Head title="已经服务真实财富业务" copy="白标财富终端已进入实际业务场景，案例内容将根据公开授权持续补充。" /><div className="wl-case-grid"><div className="wl-case-card"><div className="wl-case-mark"><span>LP</span></div><div><span className="wl-case-status"><i /> 已上线</span><h3>陆浦财富 App</h3><p>已上线的白标财富 App 案例。App Logo、页面截图、实际支持产品、上线时间及合作模式等更多信息，待确认公开范围后补充。</p></div></div><div className="wl-case-card wl-case-pending"><div className="wl-case-mark"><span>02</span></div><div><span className="wl-case-status pending"><i /> 待公开</span><h3>更多客户案例</h3><p>第二个案例位置已预留，待获得客户名称、品牌素材和公开授权后补充正式内容。</p></div></div></div><p className="wl-note">股票 App 项目尚未确定或上线，当前不作为客户案例或成果展示。</p></div></section>

    <section className="wl-cta"><div className="wl-shell"><h2>用您的品牌，开启数字财富与投资服务</h2><p>从白标财富 App、财富 H5 到股票能力扩展，基于 FinOne 构建适合机构业务的投资终端。</p><div><Link className="button button-light" to="/contact">咨询白标方案 →</Link><Link to="/products/finone">了解 FinOne</Link></div></div></section>
  </main>;
}
