import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection, PlatformTrustSection } from '../components/PlatformProofSections';

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

function AppScreen({ type }: { type: 'onboarding' | 'home' | 'products' | 'stocks' | 'assets' | 'service' }) {
  const content = {
    onboarding: ['开户注册', '开户注册进度', ['身份资料', '风险评估', '申请状态']],
    home: ['首页与总览', '总资产', ['常用服务', '投资组合', '精选产品']],
    products: ['财富产品', '产品筛选', ['基金产品', '债券产品', '产品详情']],
    stocks: ['股票投资', '市场行情', ['自选股票', '股票详情', '买入 / 卖出']],
    assets: ['资产与持仓', '资产分析', ['资产配置', '持仓明细', '交易记录']],
    service: ['持续服务', '账户服务', ['结单与报告', '消息通知', '客户服务']],
  }[type];
  return <div className={`wl-showcase-phone showcase-${type}`} role="img" aria-label={`${content[0]}产品页面示意`}><div className="wl-showcase-screen"><header><b>FINLOOP</b><i /></header><small>{content[1]}</small><strong>{type === 'stocks' ? '恒生指数 25,321.42' : 'HKD 1,286,420'}</strong><div className="wl-showcase-visual">{type === 'stocks' ? <svg viewBox="0 0 240 90" aria-hidden="true"><path d="M2 68L34 52L62 61L91 35L121 43L151 18L181 32L210 11L238 22" /></svg> : <div>{[32, 47, 39, 65, 56, 82, 73].map((x, i) => <i key={i} style={{ height: `${x}%` }} />)}</div>}</div><section>{content[2].map((item, i) => <article key={item}><i /><div><b>{item}</b><span /></div><em>{i === 0 ? '查看' : '›'}</em></article>)}</section><footer><i /><i /><i /><i /></footer></div></div>;
}

export function WhiteLabelAppPage() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const scrollShowcase = (direction: number) => {
    const container = showcaseRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * Math.max(300, container.clientWidth * 0.75), behavior: 'smooth' });
  };

  return <main className="wl-page" id="main">
    <section className="wl-hero product-hero-standard" data-header-theme="inverse"><div className="wl-shell wl-hero-grid">
      <ProductHeroContent className="wl-hero-copy" category="白标 APP · 品牌化财富与投资终端" title="用您的品牌，更快上线数字财富服务" description="基于成熟的财富科技基础设施，为金融机构构建自有品牌投资终端，连接开户、产品、交易、持仓与资产服务。" ctaLabel="咨询白标方案"><div className="wl-hero-line"><span>灵活组合不同客户端</span><i /><span>一个财富核心</span></div></ProductHeroContent>
      <div className="wl-phone-stage wl-phone-stage-v2"><div><Phone brand="WEALTH" tone="blue" /><small>白标财富 App</small></div><b>+</b><div><Phone brand="WEALTH + STOCK" tone="green" stock /><small>白标股票 App</small></div><div className="wl-stage-label">POWERED BY FINLOOP WEALTH INFRASTRUCTURE</div></div>
    </div></section>

    <section className="wl-section wl-value"><div className="wl-shell"><Head title="更快建立属于自己的数字投资服务" copy="无需从零建设完整客户端与财富业务基础设施，并可根据业务阶段持续扩展。" /><div className="wl-value-grid">{[
      ['自有品牌', '以机构自身品牌直接服务最终投资者。'],
      ['灵活业务配置', '根据机构业务选择财富产品和功能模块。'],
      ['完整投资体验', '覆盖账户、资金、产品、资产和持续客户服务。'],
      ['持续业务扩展', '可以从财富业务开始，并根据需要进一步扩展股票业务。'],
    ].map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="wl-section wl-combination"><div className="wl-shell"><Head title="根据您的业务，组合适合的投资能力" copy="根据机构业务与客户需求，灵活组合财富产品、股票投资及相关服务能力，形成适合自身业务的品牌化投资终端。" /><div className="wl-combination-board">
      <article className="wl-combo-wealth"><span>01</span><small>白标财富 App</small><h3>从财富业务开始</h3><div>{['账户', '财富产品', '资产', '持仓', '结单'].map(x => <b key={x}>{x}</b>)}</div><p>财富产品品类根据机构业务需求选择，并由 FinOne 后台配置；具体支持资产类别以项目实际开放能力为准。</p></article>
      <div className="wl-combo-operator"><b>+</b><span>增加股票模块</span></div>
      <article className="wl-combo-stock"><span>02</span><small>白标财富 App + 股票模块</small><h3>扩展为白标股票 App</h3><div>{['股票行情', '股票详情', '买入 / 卖出', '委托', '成交记录', '股票持仓'].map(x => <b key={x}>{x}</b>)}</div><p>股票模块的具体功能范围与前端技术形态仍需根据实际项目确认。</p></article>
    </div></div></section>

    <section className="wl-section wl-app-showcase"><div className="wl-shell"><Head title="从开户到资产服务，连接完整投资者旅程" copy="围绕客户日常使用场景组织 App 页面，让财富发现、股票投资与资产管理保持连续体验。" /><div className="wl-showcase-controls" aria-label="切换投资者旅程场景"><button type="button" onClick={() => scrollShowcase(-1)} aria-label="查看前面的场景">←</button><button type="button" onClick={() => scrollShowcase(1)} aria-label="查看更多场景">→</button></div><div className="wl-showcase-grid" ref={showcaseRef} tabIndex={0}>{[
      ['01', '开户注册', '在线完成开户注册、身份资料提交与风险评估。', 'onboarding'],
      ['02', '首页与总览', '集中呈现资产概览、常用服务和投资入口。', 'home'],
      ['03', '财富产品', '浏览和筛选财富产品，并进入产品详情。', 'products'],
      ['04', '股票投资', '在股票模块中查看行情、股票详情与交易入口。', 'stocks'],
      ['05', '资产与持仓', '查看资产配置、投资组合、持仓与交易记录。', 'assets'],
      ['06', '持续服务', '持续查看结单、报告、通知并获得客户服务。', 'service'],
    ].map(([number, title, copy, type]) => <article key={number}><div><span>{number}</span><h3>{title}</h3><p>{copy}</p></div><AppScreen type={type as 'onboarding' | 'home' | 'products' | 'stocks' | 'assets' | 'service'} /></article>)}</div><p className="wl-note">以上界面用于展示建议产品结构；实际页面、资产类别及股票模块功能以具体白标项目开放范围为准。</p></div></section>

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

    <section className="wl-section wl-infrastructure" id="infrastructure"><div className="wl-shell wl-finone-ops-layout"><div className="wl-finone-ops-copy"><Head title="由 FinOne 统一运营管理" copy="通过 FinOne 运营中台统一管理白标 App 的客户、产品、交易、资产与日常运营。" /><Link className="wl-finone-ops" to="/products/finone"><small>APP OPERATIONS</small><strong>FinOne 运营中台 <span aria-hidden="true">→</span></strong><p>让机构在同一后台持续管理面向投资者的数字财富服务。</p></Link></div><div className="wl-finone-ui" role="img" aria-label="FinOne 运营中台界面占位示意"><aside><b>F1</b>{[1,2,3,4,5].map(item=><i key={item}/>)}</aside><div><header><strong>App 运营管理</strong><span>UI 占位示意</span></header><section>{[1,2,3].map(item=><i key={item}/>)}</section><main><div>{[1,2,3,4].map(item=><span key={item}/>)}</div><figure>{[1,2,3,4,5].map(item=><i key={item}/>)}</figure></main></div></div></div></section>

    <PlatformTrustSection sectionClass="wl-section" shellClass="wl-shell" />
    <PlatformCasesSection sectionClass="wl-section" shellClass="wl-shell" title="已经服务真实财富业务" copy="白标财富终端已进入实际业务场景，案例内容将根据公开授权持续补充。" cases={[{mark:'LP',name:'陆浦财富 App',type:'已上线 · 公开范围待确认',copy:'已上线的白标财富 App 案例，更多产品范围、上线时间及合作模式待确认后补充。',background:'陆浦财富 App 已作为白标财富终端进入实际业务场景。当前仅展示已确认的产品名称与上线状态。',details:[['品牌化终端','以机构自身品牌承接数字财富服务。'],['平台连接','围绕开户、产品、交易、持仓与资产服务连接业务流程。'],['待补充信息','页面截图、实际支持产品、上线时间及合作模式待确认公开范围。']]},{mark:'+',name:'更多客户案例',type:'待公开',copy:'待获得客户名称、品牌素材和公开授权后补充正式内容。',pending:true}]} />

    <section className="wl-cta"><div className="wl-shell"><h2>用您的品牌，开启数字财富与投资服务</h2><p>从白标财富 App、财富 H5 到股票能力扩展，基于 FinOne 构建适合机构业务的投资终端。</p><div><Link className="button button-light" to="/contact">咨询白标方案 →</Link><Link to="/products/finone">了解 FinOne</Link></div></div></section>
  </main>;
}
