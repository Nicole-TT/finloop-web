import './styles.css';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { animate } from 'motion';
import { createIcons, ArrowLeftRight, ArrowRight, ArrowUp, BadgeDollarSign, ChevronDown, ChevronRight, Database, FileChartColumn, Globe2, ListFilter, Menu, MoveRight, PackagePlus, PieChart, X, Building2, Landmark, Network, WalletCards, BriefcaseBusiness, Blocks, Bot, ShieldCheck, CircleCheck, CircleDollarSign, Gem, Orbit, Mail, MapPin } from 'lucide';
import { Markup } from './components/PageRegions';
import { CoverageSection, HeroSection, SolutionsSection } from './components/BusinessSections';
import { SiteLayout } from './layouts/SiteLayout';
import { NotFoundPage, SectionPage } from './pages/SectionPage';
import { ContactPage } from './pages/ContactPage';
import { FinancialProductsPage } from './pages/FinancialProductsPage';
import { FinOnePage } from './pages/FinOnePage';
import { FinEAMPage } from './pages/FinEAMPage';
import { XingQiTongPage } from './pages/XingQiTongPage';
import { FinRWAPage } from './pages/FinRWAPage';
import { WebPortalPage } from './pages/WebPortalPage';
import { XingLuTongPage } from './pages/XingLuTongPage';
import { XingZhiTongPage } from './pages/XingZhiTongPage';
import { WealthSolutionPage } from './pages/WealthSolutionPage';
import { BrokerSolutionPage } from './pages/BrokerSolutionPage';
import { BankSolutionPage } from './pages/BankSolutionPage';
import { PlatformSolutionPage } from './pages/PlatformSolutionPage';
import { DigitalAssetSolutionPage } from './pages/DigitalAssetSolutionPage';
import { EnterpriseSolutionPage } from './pages/EnterpriseSolutionPage';
import { FinloopAIPage } from './pages/FinloopAIPage';
import { FAIPage } from './pages/FAIPage';
import { LegacyNewsDetailRedirect, NewsDetailPage, NewsPage, ResourcesRedirect } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { FDEAIPage } from './pages/FDEAIPage';
import { SupportPage } from './pages/SupportPage';
import { TechnologyPlatformPage } from './pages/TechnologyPlatformPage';
import { CareersPage } from './pages/CareersPage';
import { WhiteLabelAppPage } from './pages/WhiteLabelAppPage';
import { WhiteLabelAppV1Page } from './pages/WhiteLabelAppV1Page';

const aiItems = [
  ['星路通', '面向金融专业人员的 AI 工作台'],
  ['FAI平台', '企业资料、任务与 AI 员工中枢'],
  ['星智通', '统一 AI API 网关与分发平台'],
];

const productGroups = [
  {
    title: '金融产品',
    items: [
      ['现金管理', '多币种现金配置与运营'],
      ['公募基金', '连接全球公募基金产品'],
      ['私募基金', '专业投资者产品服务'],
      ['债券', '固定收益产品与交易能力'],
      ['结构性产品', '询价、订单与存续管理'],
      ['保险', '保险产品货架与运营'],
      ['虚拟资产', '合规数字资产投资产品'],
      ['RWA', '真实资产数字化投资产品'],
    ],
  },
  {
    title: '科技平台',
    items: [
      ['FinOne', '账户、产品、交易与资产的财富核心'],
      ['FinEAM', 'EAM 与家办财富管理 SaaS'],
      ['星企通', '企业现金与财富管理平台'],
      ['Web Portal', '机构交易与运营工作台'],
      ['FinRWA', 'RWA 上线、发行与分销体系'],
      ['白标 App', '面向机构自有品牌的投资终端'],
      ...aiItems,
    ],
  },
];

const solutionItems: Array<[string, string, string]> = [
  ['wealth', '财富与资产管理机构', '从客户准入到投资及存续管理，构建一体化财富业务'],
  ['broker', '证券及经纪机构', '连接财富产品、机构交易与客户终端，拓展数字财富业务'],
  ['bank', '银行及金融机构', '通过开放的财富科技能力，加速数字财富业务建设'],
  ['platform', '支付与数字平台', '无需重建完整财富系统，将投资能力嵌入已有用户场景'],
  ['digital', '数字资产机构', '连接传统金融与数字资产，构建机构级 Web3 金融基础设施'],
  ['enterprise', '企业客户', '通过独立平台统一管理企业现金、投资与资产'],
  ['fde-ai', 'FDE-AI服务', '为企业提供AI落地解决方案'],
];

const footerGroups: Array<[string, string[]]> = [
  ['产品与平台', ['FinOne', 'FinEAM', '星企通', 'Web Portal', 'FinRWA']],
  ['解决方案', ['财富与资产管理机构', '证券及经纪机构', '银行及金融机构', '数字平台', '数字资产机构', '企业客户']],
  ['Finloop AI', ['FAI', '星路通', '星智通']],
  ['资源中心', ['公司动态', '产品资料', '开发者中心']],
  ['关于星路', ['公司介绍', '复星财富控股', '发展历程', '市场认可', '合作生态', '加入我们', '联系我们']],
];

type MobileNavGroup = [string, string, string[]];
const mobileNavGroups: MobileNavGroup[] = [
  ['产品与平台', '/products', productGroups.flatMap(g => g.items.map(i => i[0]))],
  ['解决方案', '/solutions', solutionItems.map(i => i[1])],
  ['Finloop AI', '/ai', aiItems.map(i => i[0])],
  ['技术与支持', '/technology-platform', []],
  ['新闻资讯', '/resources', ['公司动态']],
  ['关于星路', '/about', ['公司介绍', '加入我们', '联系我们']],
];

const headerMarkup = `
  <header class="site-header" id="top">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Finloop 星路科技首页">
        <img src="/assets/finloop-logo-transparent.png" alt="Finloop 星路科技" />
      </a>
      <nav class="desktop-nav" aria-label="主导航">
        <a class="nav-link active" href="/">首页</a>
        <button class="nav-link nav-trigger" data-menu="products" aria-expanded="false">产品与平台 <i data-lucide="chevron-down"></i></button>
        <button class="nav-link nav-trigger" data-menu="solutions" aria-expanded="false">解决方案 <i data-lucide="chevron-down"></i></button>
        <a class="nav-link" href="/ai">Finloop AI</a>
        <a class="nav-link" href="/technology-platform">技术与支持</a>
        <a class="nav-link" href="/resources">新闻资讯</a>
        <button class="nav-link nav-trigger" data-menu="about" aria-expanded="false">关于星路 <i data-lucide="chevron-down"></i></button>
      </nav>
      <div class="header-actions">
        <button class="language-button" aria-label="切换语言"><i data-lucide="globe-2"></i><span>简</span></button>
        <a class="button button-accent header-cta" href="/contact">预约咨询 <i data-lucide="arrow-right"></i></a>
        <button class="menu-button" aria-label="打开菜单" aria-expanded="false"><i data-lucide="menu"></i></button>
      </div>
    </div>
    <div class="mega-shell" aria-hidden="true">
      <div class="mega-panel" data-panel="products">
        <div class="mega-intro"><strong>连接财富业务全链路</strong><p>覆盖科技平台、数字资产与财富产品能力。</p><a href="/products">查看平台全景 <i data-lucide="arrow-right"></i></a></div>
        <div class="mega-grid">${productGroups.map(group => `<div><h3>${group.title}</h3>${group.items.map(([name, desc]) => `<a href="${name === 'FinOne' ? '/products/finone' : name === 'FinEAM' ? '/products/fineam' : name === '星企通' ? '/products/xingqitong' : name === '星路通' ? '/ai/xinglutong' : name === 'FAI平台' ? '/ai/fai' : name === '星智通' ? '/ai/xingzhitong' : name === 'Agent & Skills' ? '/ai/marketplace' : name === 'Web Portal' ? '/products/web-portal' : name === '白标 App' ? '/products/white-label-app' : name === 'FinRWA' ? '/products/finrwa' : `/products#${name === '现金管理' ? 'cash' : name === '公募基金' ? 'public' : name === '私募基金' ? 'private' : name === '债券' ? 'bonds' : name === '结构性产品' ? 'structured' : name === '保险' ? 'insurance' : name === '虚拟资产' ? 'virtual' : 'rwa'}`}"><span>${name}</span><small>${desc}</small><i data-lucide="arrow-right"></i></a>`).join('')}</div>`).join('')}</div>
      </div>
      <div class="mega-panel" data-panel="solutions">
        <div class="mega-intro"><strong>按业务身份找到组合方案</strong><p>不同机构，共享同一套可组合的财富科技底座。</p><a href="/solutions">查看解决方案 <i data-lucide="arrow-right"></i></a></div>
        <div class="mega-list">${solutionItems.map(([id, name, desc]) => `<a href="/solutions/${id}"><span>${name}</span><small>${desc}</small><i data-lucide="arrow-right"></i></a>`).join('')}</div>
      </div>
      <div class="mega-panel compact-panel" data-panel="about">
        <div class="mega-intro"><strong>关于星路</strong><p>总部位于香港的机构财富科技平台。</p><a href="/about">认识 Finloop <i data-lucide="arrow-right"></i></a></div>
        <div class="mega-list"><a href="/about"><span>公司介绍</span><small>公司定位、发展与市场认可、资质与牌照</small><i data-lucide="arrow-right"></i></a><a href="/careers"><span>加入我们</span><small>与星路一起连接财富科技的未来</small><i data-lucide="arrow-right"></i></a><a href="/contact"><span>联系我们</span><small>香港、上海与业务咨询</small><i data-lucide="arrow-right"></i></a></div>
      </div>
    </div>
  </header>
  <div class="mega-backdrop" aria-hidden="true"></div>
`;

const mobileDrawerMarkup = `
  <div class="mobile-drawer" aria-hidden="true">
    <div class="drawer-top"><img src="/assets/finloop-logo-transparent.png" alt="Finloop 星路科技" /><button class="drawer-close" aria-label="关闭菜单"><i data-lucide="x"></i></button></div>
    <nav class="mobile-nav" aria-label="移动端导航">
      <a href="/">首页</a>
      ${mobileNavGroups.map(([title, path, items]) => items.length === 0 || title === '新闻资讯' ? `<a href="${path}">${title}</a>` : `<div class="mobile-group"><button aria-expanded="false">${title}<i data-lucide="chevron-down"></i></button><div><a href="${path}">查看全部</a>${items.map(item => `<a href="${title === '关于星路' ? item === '加入我们' ? '/careers' : item === '联系我们' ? '/contact' : '/about' : title === '技术与支持' ? item === '技术平台' ? '/technology-platform' : '/support' : title === 'Finloop AI' ? item === '星智通' ? '/ai/xingzhitong' : item === '星路通' ? '/ai/xinglutong' : item === 'FAI平台' ? '/ai/fai' : item === 'Agent & Skills' ? '/ai/marketplace' : '/ai' : title === '产品与平台' && item === '白标 App' ? '/products/white-label-app' : title === '产品与平台' && ['现金管理','公募基金','私募基金','债券','结构性产品','保险','虚拟资产','RWA'].includes(item) ? `/products#${item === '现金管理' ? 'cash' : item === '公募基金' ? 'public' : item === '私募基金' ? 'private' : item === '债券' ? 'bonds' : item === '结构性产品' ? 'structured' : item === '保险' ? 'insurance' : item === '虚拟资产' ? 'virtual' : 'rwa'}` : path}">${item}</a>`).join('')}</div></div>`).join('')}
    </nav>
    <div class="drawer-bottom"><button class="language-button"><i data-lucide="globe-2"></i> 简体中文</button><a class="button button-accent" href="/contact">预约咨询 <i data-lucide="arrow-right"></i></a></div>
  </div>
`;

const mainMarkup = `
  <main id="main">
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <h1>AI 驱动的一站式<br /><span>Web5 财富科技平台</span></h1>
          <p>连接传统财富、数字资产与 AI，为金融机构、数字平台和企业提供财富管理、交易、RWA 与智能化能力。</p>
          <div class="hero-actions"><a class="button button-accent" href="#architecture">探索产品与平台 <i data-lucide="arrow-right"></i></a><a class="text-link" href="#contact">预约咨询 <i data-lucide="arrow-right"></i></a></div>
        </div>
        <div class="hero-system" aria-label="Finloop 平台连接财富业务的示意图">
          <svg viewBox="0 0 720 610" role="img" aria-labelledby="system-title system-desc">
            <title id="system-title">Finloop 平台连接网络</title><desc id="system-desc">FinOne 财富核心连接业务应用、交易基础设施、数字资产和 AI 能力。</desc>
            <g class="orbit-lines"><ellipse cx="360" cy="305" rx="278" ry="220"/><ellipse cx="360" cy="305" rx="208" ry="164"/><path d="M98 210C240 332 432 398 626 472"/><path d="M112 455C270 350 432 238 616 152"/></g>
            <g class="hub"><circle cx="360" cy="305" r="92"/><text x="360" y="296">FinOne</text><text class="sub" x="360" y="326">财富核心</text></g>
            <g class="node node-a"><circle cx="130" cy="175" r="54"/><text x="130" y="171">业务</text><text class="sub" x="130" y="193">应用</text></g>
            <g class="node node-b"><circle cx="590" cy="150" r="58"/><text x="590" y="146">Finloop</text><text class="sub" x="590" y="170">AI</text></g>
            <g class="node node-c"><circle cx="605" cy="470" r="62"/><text x="605" y="466">FinRWA</text><text class="sub" x="605" y="490">数字资产</text></g>
            <g class="node node-d"><circle cx="122" cy="458" r="58"/><text x="122" y="454">FinMix</text><text class="sub" x="122" y="478">交易设施</text></g>
            <g class="signal"><circle cx="260" cy="162" r="7"/><circle cx="520" cy="320" r="7"/><circle cx="262" cy="450" r="7"/></g>
          </svg>
          <div class="system-caption"><span>业务应用</span><span>财富核心</span><span>交易设施</span><span>AI 与 RWA</span></div>
        </div>
      </div>
      <div class="hero-proof">
        <p>服务对象</p><div><span>金融机构</span><span>数字平台</span><span>企业客户</span></div><p>总部位于香港</p>
      </div>
    </section>

    <section class="metrics section-pad" id="metrics">
      <div class="metric-grid">
        <article><strong data-count="8000" data-suffix="+"><span class="metric-value">0</span></strong><h3>财富产品</h3><p>覆盖多元财富产品体系</p></article>
        <article><strong data-count="250" data-suffix="+"><span class="metric-value">0</span></strong><h3>机构客户</h3><p>服务多类型专业机构</p></article>
        <article><strong data-count="50" data-suffix="B+"><span class="metric-value">0</span> <small>HKD</small></strong><h3>2025 年交易规模</h3><p>承载真实机构财富业务</p></article>
        <article><strong data-count="8"><span class="metric-value">0</span> <small>大</small></strong><h3>金融品类</h3><p>覆盖传统金融与 Web3</p></article>
      </div>
    </section>

    <section class="coverage section-pad" id="coverage">
      <div class="section-heading editorial-heading"><h2>财富业务与产品覆盖</h2><p>Finloop 具备真实金融产品和业务基础，而不仅是软件能力。平台覆盖现金管理、公募基金、私募基金、债券、结构性产品、保险与数字资产/RWA。</p></div>
      <div class="asset-browser" data-active="cash">
        <div class="asset-tabs" role="tablist" aria-label="金融产品类别">
          ${[['cash', '现金管理'], ['fund', '公募基金'], ['private', '私募基金'], ['bond', '债券'], ['structured', '结构性产品'], ['insurance', '保险'], ['rwa', '数字资产 / RWA']].map(([id, label], i) => `<button role="tab" aria-selected="${i === 0}" data-asset="${id}">${label}</button>`).join('')}
        </div>
        <div class="asset-stage">
          <div class="asset-copy"><h3 id="asset-title">企业流动性与现金管理</h3><p id="asset-desc">连接多币种货币基金与机构运营流程，支持企业与金融机构进行现金配置、申赎和资产查看。</p><a class="text-link dark" href="#contact">咨询相关方案 <i data-lucide="arrow-right"></i></a></div>
          <div class="asset-visual" aria-hidden="true"><div class="asset-rings"><span></span><span></span><span></span></div><strong id="asset-code">USD · HKD · CNH</strong><small id="asset-note">产品范围与规则以上线时核验信息为准</small></div>
        </div>
      </div>
    </section>

    <section class="solutions section-pad" id="solutions">
      <div class="section-heading"><h2>解决方案</h2><p>Finloop 按业务场景组合产品、平台与基础设施，为不同类型的机构和企业提供对应的财富科技方案。</p></div>
      <div class="solution-index">${solutionItems.map(([id, name, desc], i) => `<a href="/solutions/${id}" class="solution-row"><span class="solution-number">0${i + 1}</span><div><h3>${name}</h3><p>${desc}</p></div><i data-lucide="arrow-right"></i></a>`).join('')}</div>
    </section>

    <section class="architecture section-pad" id="architecture">
      <div class="architecture-top"><div><h2>选择适合业务场景的科技平台</h2></div><p>从财富核心、机构工作台和企业资金管理，到数字资产、AI 与交易基础设施，进入对应平台了解产品定位与能力范围。</p></div>
      <div class="platform-directory" aria-label="Finloop 科技平台入口">
        <a class="platform-card platform-featured" href="/products/finone"><i data-lucide="database"></i><div><h3>FinOne</h3><p>统一客户、账户、产品、交易、资产与运营的财富核心。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/fineam"><i data-lucide="briefcase-business"></i><div><h3>FinEAM</h3><p>EAM 与家族办公室财富管理工作平台。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/xingqitong"><i data-lucide="wallet-cards"></i><div><h3>星企通</h3><p>连接企业现金、投资与资产管理场景。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/web-portal"><i data-lucide="list-filter"></i><div><h3>Web Portal</h3><p>面向机构的产品、交易与运营工作台。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/finrwa"><i data-lucide="orbit"></i><div><h3>FinRWA</h3><p>连接 RWA 上线、资产数字化与机构分销。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/ai"><i data-lucide="bot"></i><div><h3>Finloop AI</h3><p>连接模型、Agent、Skills 与金融工作流。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products"><i data-lucide="arrow-left-right"></i><div><h3>FinMix</h3><p>机构级交易、账户、清结算与运营基础设施。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
      </div>
    </section>

    <section class="ai-section section-pad" id="ai">
      <div class="section-inner ai-layout">
        <div class="ai-copy"><h2>让 AI 从工具进入真实业务流程</h2><p>Finloop AI 从金融业务工作台、企业智能、模型基础设施到 Agent 与 Skills，将 AI 能力连接到具体岗位和工作流。</p><a class="button button-light" href="/ai">了解 Finloop AI <i data-lucide="arrow-right"></i></a></div>
        <div class="ai-product-grid" aria-label="Finloop AI 产品入口">
          <a href="/ai/xinglutong"><span>01</span><small>FINANCIAL AI WORKSPACE</small><h3>星路通</h3><p>KYP、GAP 分析、风险预警与竞品洞察。</p><strong>了解产品 <i data-lucide="arrow-right"></i></strong></a>
          <a href="/ai/fai"><span>02</span><small>ENTERPRISE INTELLIGENCE</small><h3>FAI</h3><p>连接资讯、资料、任务、AI 员工与 Skills。</p><strong>了解产品 <i data-lucide="arrow-right"></i></strong></a>
          <a href="/ai/xingzhitong"><span>03</span><small>AI INFRASTRUCTURE</small><h3>星智通</h3><p>统一 AI API 网关、智能路由与企业安全。</p><strong>了解产品 <i data-lucide="arrow-right"></i></strong></a>
          <a href="/ai/marketplace"><span>04</span><small>AGENT MARKETPLACE</small><h3>Agent &amp; Skills</h3><p>进入具体岗位与金融工作流。</p><strong>查看 Agent <i data-lucide="arrow-right"></i></strong></a>
        </div>
      </div>
    </section>

    <section class="why section-pad" id="why">
      <div class="section-heading editorial-heading"><h2>不止提供软件，更连接真实金融业务</h2><p>Finloop 以金融业务和产品能力为基础，连接业务应用、财富核心、交易基础设施、数字资产与 AI。</p></div>
      <div class="why-grid">
        <article class="why-feature"><i data-lucide="wallet-cards"></i><h3>金融业务和产品能力</h3><p>连接传统财富产品、机构交易与业务运营流程。</p></article>
        <article><i data-lucide="blocks"></i><h3>从应用到核心交易的完整技术栈</h3><p>覆盖业务应用、FinOne 财富核心与 FinMix 交易基础设施。</p></article>
        <article><i data-lucide="network"></i><h3>灵活部署与开放连接能力</h3><p>通过平台与 API 连接机构现有系统、产品网络和数字资产生态。</p></article>
        <article><i data-lucide="shield-check"></i><h3>金融级合规、安全和稳定性</h3><p>围绕机构业务要求，支持权限、治理与稳定的业务运营。</p></article>
        <article><i data-lucide="bot"></i><h3>Web2、Web3 与 AI 的组合能力</h3><p>连接传统财富、数字资产与进入真实金融工作流的 AI 能力。</p></article>
      </div>
    </section>

    <section class="ecosystem section-pad" id="ecosystem">
      <div class="section-inner">
        <div class="case-showcase-head"><h2>从真实项目，看见财富科技如何落地</h2><p>从机构交易连接、RWA 到企业 AI 落地，展示 Finloop 已公开披露的部分项目方向。具体合作范围与项目状态以正式披露为准。</p></div>
        <div class="case-showcase-grid">
          <article class="client-case client-case-featured"><div class="client-case-top"><span>01</span><small>机构交易连接</small></div><div><h3>Hundsun Ayers</h3><strong>证券交易柜台接入</strong><p>围绕机构证券交易场景，连接相关交易柜台与财富业务技术体系。</p></div><footer><span>Institutional Connectivity</span><i data-lucide="circle-check"></i></footer></article>
          <article class="client-case"><div class="client-case-top"><span>02</span><small>RWA 项目</small></div><div><h3>泰康资管香港 × OSL</h3><strong>代币化基金份额项目</strong><p>围绕基金份额代币化场景，探索传统资产与数字资产基础设施的连接。</p></div><footer><span>Tokenized Fund</span><i data-lucide="circle-check"></i></footer></article>
          <a class="client-case" href="/solutions/fde-ai#case"><div class="client-case-top"><span>03</span><small>AI 落地 · 建设中</small></div><div><h3>复星锐正投资</h3><strong>让 AI 进入 VC / PE 真实工作流</strong><p>以 FDE-AI 方法推进需求诊断、统一交互入口与 Agent 能力建设。</p></div><footer><span>查看项目介绍</span><i data-lucide="arrow-right"></i></footer></a>
        </div>
      </div>
    </section>

    <section class="trust section-pad" id="trust">
      <div class="section-inner trust-layout">
        <div class="trust-title"><h2>合规持牌，市场认可</h2><p>为机构财富、投资交易与相关金融服务提供合规基础支持，并持续获得香港政府及行业机构的市场认可。</p></div>
        <div class="trust-pillars">
          <article><h3>持牌金融体系</h3><p>依托复星财富控股旗下持牌金融机构体系，覆盖 1、2、4、6、9 号牌相关金融业务基础。</p></article>
          <article><h3>机构级合规支持</h3><p>围绕机构财富、投资交易与相关金融服务，连接产品、交易与运营流程。</p></article>
          <article><h3>政府与行业认可</h3><p>获得 OASES、香港数码港及多项金融科技与专业投资奖项认可。</p></article>
        </div>
        <div class="trust-awards" aria-label="Finloop 市场认可与奖项">
          <article><small>香港特区政府引进重点企业办公室</small><h3>重点企业办公室<br />（OASES）重点企业</h3></article>
          <article><small>香数码港培育计划</small><h3>香港数码港培育计划<br />培育企业</h3></article>
          <article><small>2025 年 11 月 · 香港 ICT 奖</small><h3>香港资讯及通讯科技奖金融科技奖及金奖</h3></article>
          <article><small>2025 年 3 月 · 香港经济通 ET Net</small><h3>“杰出一站式数智化<br />财富管理平台”大奖</h3></article>
          <article><small>2026 年 5 月 · I&amp;M 专业投资大奖</small><h3>I&amp;M 专业投资大奖<br />“年度最佳金融科技公司”</h3></article>
        </div>
      </div>
    </section>

    <section class="contact section-pad" id="contact">
      <div class="section-inner contact-layout">
        <div class="contact-copy"><h2>探索适合您业务的财富科技解决方案</h2><p>无论您正在构建机构财富平台、企业现金管理服务、嵌入式投资能力还是数字资产业务，星路团队都可以与您共同探索适合的解决方案。</p></div>
        <div class="contact-actions"><a class="button button-accent" href="mailto:CS@finloop.hk">预约咨询 <i data-lucide="mail"></i></a><a class="button button-ghost-light" href="tel:+85230088996">联系我们</a><small>CS@finloop.hk · (852) 3008 8996</small></div>
      </div>
    </section>
  </main>
`;

const footerMarkup = `
  <footer class="site-footer" id="footer">
    <div class="footer-top"><div class="footer-brand"><img src="/assets/finloop-logo-transparent.png" alt="Finloop 星路科技" /><p>连接传统财富、数字资产与 AI 的机构财富科技平台。</p></div><a class="back-top" href="#top" aria-label="返回顶部"><i data-lucide="arrow-up"></i></a></div>
    <div class="footer-directory">${footerGroups.map(([title, items]) => `<div><h3>${title}</h3>${items.map(item => `<a href="${title === '资源中心' && item === '公司动态' ? '/resources' : title === '关于星路' && item === '加入我们' ? '/careers' : title === '关于星路' && item === '联系我们' ? '/contact' : title === '关于星路' ? '/about' : '#top'}">${item}</a>`).join('')}</div>`).join('')}</div>
    <div class="footer-contact"><div><i data-lucide="map-pin"></i><span>香港总部：香港中环花园道 3 号冠君大厦 21 楼 2101-2105 室</span></div><div><i data-lucide="map-pin"></i><span>香港数码港：香港数码港道 100 号数码港三期 12 楼 1208A 室</span></div><div><i data-lucide="map-pin"></i><span>上海：上海市黄浦区中山东二路 600 号外滩金融中心 S1 栋 15 楼</span></div><div><i data-lucide="mail"></i><a href="mailto:CS@finloop.hk">CS@finloop.hk</a></div><div><a href="tel:+85230088996">(852) 3008 8996</a></div></div>
    <div class="footer-legal"><span>© 2026 Finloop Finance Technology Holding Limited</span><nav aria-label="法律信息"><a href="#footer">隐私政策</a><a href="#footer">使用条款</a><a href="#footer">Cookie Policy</a><a href="#footer">金融免责声明</a><a href="#footer">监管声明</a></nav></div>
  </footer>
`;

const mainBodyMarkup = mainMarkup
  .replace(/^\s*<main id="main">/, '')
  .replace(/<\/main>\s*$/, '')
  .replace(/<section class="hero">[\s\S]*?<\/section>\s*/, '');
const [beforeCoverageMarkup, afterCoverageBlock] = mainBodyMarkup.split(/<section class="coverage section-pad" id="coverage">[\s\S]*?<\/section>\s*/);
const [afterCoverageMarkup, afterSolutionsMarkup] = afterCoverageBlock.split(/<section class="solutions section-pad" id="solutions">[\s\S]*?<\/section>\s*/);

function initializeMetricCounters() {
  const metricNumbers = [...document.querySelectorAll<HTMLElement>('.metric-grid strong[data-count]')];
  if (!metricNumbers.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animations: ReturnType<typeof animate>[] = [];
  const revealMetric = (element: HTMLElement) => {
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';
    const target = Number(element.dataset.count || 0);
    const suffix = element.dataset.suffix || '';
    const valueElement = element.querySelector<HTMLElement>('.metric-value') || element;
    const render = (value: number) => { valueElement.textContent = `${Math.round(value).toLocaleString('en-US')}${suffix}`; };
    if (reduceMotion) { render(target); return; }
    animations.push(animate(0, target, { duration: 1.25, ease: [0.22, 1, 0.36, 1], onUpdate: render }));
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealMetric(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    });
  }, { threshold: .45 });
  metricNumbers.forEach(number => observer.observe(number));
  return () => { observer.disconnect(); animations.forEach(animation => animation.stop()); };
}

function HomePage() {
  useEffect(() => initializeMetricCounters(), []);
  return (
    <>
      <HeroSection />
      <main id="main">
        <Markup html={beforeCoverageMarkup} />
        <CoverageSection />
        <SolutionsSection items={solutionItems as [string, string, string][]} />
        <Markup html={afterCoverageMarkup + afterSolutionsMarkup} />
      </main>
    </>
  );
}

const productPageItems = productGroups.flatMap(group => group.items.map(([title, description]) => ({ title, description })));
const solutionPageItems = solutionItems.map(([, title, description]) => ({ title, description }));
const aiPageItems = aiItems.map(([title, description]) => ({ title, description }));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout headerMarkup={headerMarkup} mobileDrawerMarkup={mobileDrawerMarkup} footerMarkup={footerMarkup} initializeShell={initializePage} />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<FinancialProductsPage />} />
          <Route path="products/finone" element={<FinOnePage />} />
          <Route path="products/fineam" element={<FinEAMPage />} />
          <Route path="products/xingqitong" element={<XingQiTongPage />} />
          <Route path="products/finrwa" element={<FinRWAPage />} />
          <Route path="products/web-portal" element={<WebPortalPage />} />
          <Route path="products/white-label-app" element={<WhiteLabelAppPage />} />
          <Route path="products/white-label-app-v1" element={<WhiteLabelAppV1Page />} />
          <Route path="ai/xinglutong" element={<XingLuTongPage />} />
          <Route path="solutions" element={<SectionPage title="解决方案" description="按客户业务场景组合产品与基础设施，为不同类型机构提供对应入口。" items={solutionPageItems} />} />
          <Route path="solutions/wealth" element={<WealthSolutionPage />} />
          <Route path="solutions/broker" element={<BrokerSolutionPage />} />
          <Route path="solutions/bank" element={<BankSolutionPage />} />
          <Route path="solutions/platform" element={<PlatformSolutionPage />} />
          <Route path="solutions/digital" element={<DigitalAssetSolutionPage />} />
          <Route path="solutions/enterprise" element={<EnterpriseSolutionPage />} />
          <Route path="solutions/fde-ai" element={<FDEAIPage />} />
          {solutionItems.filter(([id]) => !['wealth', 'broker', 'bank', 'platform', 'digital', 'enterprise', 'fde-ai'].includes(id)).map(([id, title, description]) => (
            <Route key={id} path={`solutions/${id}`} element={<SectionPage title={title} description={description} items={[{ title, description }]} />} />
          ))}
          <Route path="ai" element={<FinloopAIPage />} />
          <Route path="ai/fai" element={<FAIPage />} />
          <Route path="ai/xingzhitong" element={<XingZhiTongPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="technology-platform" element={<TechnologyPlatformPage />} />
          <Route path="resources" element={<NewsPage />} />
          <Route path="resources/insights" element={<ResourcesRedirect />} />
          <Route path="resources/company" element={<ResourcesRedirect />} />
          <Route path="resources/:slug" element={<NewsDetailPage />} />
          <Route path="resources/:category/:slug" element={<LegacyNewsDetailRedirect />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.querySelector('#app')!).render(<App />);

function initializePage() {
  createIcons({ icons: { ArrowLeftRight, ArrowRight, ArrowUp, BadgeDollarSign, ChevronDown, ChevronRight, Database, FileChartColumn, Globe2, ListFilter, Menu, MoveRight, PackagePlus, PieChart, X, Building2, Landmark, Network, WalletCards, BriefcaseBusiness, Blocks, Bot, ShieldCheck, CircleCheck, CircleDollarSign, Gem, Orbit, Mail, MapPin } });

  const header = document.querySelector('.site-header');
  const megaShell = document.querySelector('.mega-shell');
  const megaBackdrop = document.querySelector<HTMLElement>('.mega-backdrop');
  const triggers = [...document.querySelectorAll<HTMLElement>('.nav-trigger')];
  const megaPanels = [...document.querySelectorAll<HTMLElement>('.mega-panel')];
  let activeMenu = null;
  let closeMegaTimer: number | undefined;
  let activePanel: HTMLElement | null = null;
  let menuAnimations: ReturnType<typeof animate>[] = [];
  let menuSwitchId = 0;
  let closeThemeFrame: number | undefined;

  function cancelMegaClose() {
    window.clearTimeout(closeMegaTimer);
  }

  function stopMenuAnimations() {
    menuAnimations.forEach(animation => animation.stop());
    menuAnimations = [];
    if (closeThemeFrame !== undefined) window.cancelAnimationFrame(closeThemeFrame);
    closeThemeFrame = undefined;
    header.classList.remove('menu-theme-release');
  }

  async function closeMega() {
    if (!header.classList.contains('menu-open')) return;
    cancelMegaClose();
    const switchId = ++menuSwitchId;
    stopMenuAnimations();
    const closingPanel = activePanel;
    activeMenu = null;
    triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));

    const panelAnimation = closingPanel
      ? animate(closingPanel, { opacity: 0, y: -6 }, { duration: 0.24, ease: [0.4, 0, 1, 1] })
      : null;
    const shellAnimation = animate(megaShell, { height: 0, opacity: 1, y: 0 }, { duration: 0.42, ease: [0.22, 1, 0.36, 1] });
    const backdropAnimation = animate(megaBackdrop, { opacity: 0 }, { duration: 0.34, ease: 'easeOut' });
    menuAnimations.push(shellAnimation, backdropAnimation);
    if (panelAnimation) menuAnimations.push(panelAnimation);

    const watchNavigationBoundary = () => {
      if (switchId !== menuSwitchId) return;
      if ((megaShell as HTMLElement).getBoundingClientRect().height <= header.offsetHeight) {
        header.classList.add('menu-theme-release');
        return;
      }
      closeThemeFrame = window.requestAnimationFrame(watchNavigationBoundary);
    };
    closeThemeFrame = window.requestAnimationFrame(watchNavigationBoundary);

    await Promise.all([shellAnimation, backdropAnimation, panelAnimation].filter(Boolean));
    if (switchId !== menuSwitchId) return;
    header.classList.remove('menu-open');
    megaBackdrop.classList.remove('visible');
    megaShell.setAttribute('aria-hidden', 'true');
    megaPanels.forEach(panel => panel.classList.remove('active'));
    activePanel = null;
    header.classList.remove('menu-theme-release');
  }

  async function openMega(name, trigger) {
    cancelMegaClose();
    if (!name) return;
    const nextPanel = megaPanels.find(panel => panel.dataset.panel === name);
    if (!nextPanel || nextPanel === activePanel) return;
    const switchId = ++menuSwitchId;
    const previousPanel = activePanel;
    const previousIndex = triggers.findIndex(item => item.dataset.menu === activeMenu);
    const nextIndex = triggers.indexOf(trigger);
    const direction = previousPanel && nextIndex < previousIndex ? -1 : 1;

    stopMenuAnimations();
    nextPanel.classList.add('active');
    const targetHeight = nextPanel.offsetHeight;
    nextPanel.classList.remove('active');
    const outgoingPanel = previousPanel;
    header.classList.add('menu-open');
    megaBackdrop.classList.add('visible');
    megaShell.setAttribute('aria-hidden', 'false');
    triggers.forEach(t => t.setAttribute('aria-expanded', String(t === trigger)));

    menuAnimations.push(animate(megaShell, { height: outgoingPanel ? targetHeight : [0, targetHeight], opacity: 1, y: 0 }, { duration: outgoingPanel ? 0.38 : 0.46, ease: [0.22, 1, 0.36, 1] }));
    menuAnimations.push(animate(megaBackdrop, { opacity: 1 }, { duration: 0.38, ease: [0.22, 1, 0.36, 1] }));
    if (outgoingPanel) {
      const exitAnimation = animate(outgoingPanel, { opacity: 0, x: direction * -34 }, { duration: 0.2, ease: [0.4, 0, 1, 1] });
      menuAnimations.push(exitAnimation);
      await exitAnimation;
      if (switchId !== menuSwitchId) return;
      outgoingPanel.classList.remove('active');
    }

    if (switchId !== menuSwitchId) return;
    nextPanel.classList.add('active');
    const enterAnimation = animate(nextPanel, { opacity: [0, 1], x: [outgoingPanel ? direction * 42 : 0, 0], y: [outgoingPanel ? 0 : 8, 0] }, { duration: outgoingPanel ? 0.28 : 0.28, ease: [0.22, 1, 0.36, 1] });
    menuAnimations.push(enterAnimation);
    activePanel = nextPanel;
    activeMenu = name;
  }

  function scheduleMegaClose() {
    cancelMegaClose();
    closeMegaTimer = window.setTimeout(closeMega, 140);
  }

  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const directNavLinks = [...header.querySelectorAll<HTMLAnchorElement>('.desktop-nav > a')];
  const megaLinks = [...megaShell.querySelectorAll<HTMLAnchorElement>('a')];

  directNavLinks.forEach(link => {
    if (supportsHover) link.addEventListener('pointerenter', () => closeMega());
    link.addEventListener('focus', () => closeMega());
    link.addEventListener('click', () => closeMega());
  });
  megaLinks.forEach(link => link.addEventListener('click', () => closeMega()));

  triggers.forEach(trigger => {
    if (supportsHover) {
      trigger.addEventListener('pointerenter', () => openMega(trigger.dataset.menu, trigger));
    }
    trigger.addEventListener('focus', () => openMega(trigger.dataset.menu, trigger));
    trigger.addEventListener('click', () => {
      openMega(trigger.dataset.menu, trigger);
    });
  });
  if (supportsHover) {
    header.addEventListener('pointerenter', cancelMegaClose);
    header.addEventListener('pointerleave', scheduleMegaClose);
    megaBackdrop.addEventListener('pointerenter', scheduleMegaClose);
  }
  header.addEventListener('focusout', event => {
    if (!header.contains((event as FocusEvent).relatedTarget as Node | null)) scheduleMegaClose();
  });
  document.addEventListener('click', event => { if (!header.contains(event.target as Node)) closeMega(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMega(); closeDrawer(); } });

  const drawer = document.querySelector('.mobile-drawer');
  const menuButton = document.querySelector('.menu-button');
  const closeButton = document.querySelector<HTMLButtonElement>('.drawer-close');

  function openDrawer() { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); menuButton.setAttribute('aria-expanded', 'true'); document.body.classList.add('drawer-open'); closeButton.focus(); }
  function closeDrawer() { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); menuButton.setAttribute('aria-expanded', 'false'); document.body.classList.remove('drawer-open'); }
  menuButton.addEventListener('click', openDrawer);
  closeButton.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  drawer.querySelectorAll('.mobile-group > button').forEach(button => button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.parentElement.classList.toggle('open', !expanded);
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });

  function observePageSections() {
    document.querySelectorAll('.section-pad:not(.in-view), .hero-system:not(.in-view)').forEach(el => observer.observe(el));
  }

  window.addEventListener('finloop:route-change', observePageSections);
  observePageSections();

}
