import { isEnglish, t, localePrefix, languageMenu, translateNode } from './i18n';
import { HomeLogoWall } from './components/HomeLogoWall';
import { animate } from 'motion';
import { createRoot } from 'react-dom/client';
import { lazy, useEffect, type ReactNode, type ComponentProps } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createIcons, ArrowLeftRight, ArrowRight, ArrowUp, BadgeDollarSign, Award, ChevronDown, ChevronRight, Database, FileChartColumn, Globe2, ListFilter, Menu, MoveRight, PackagePlus, PieChart, RefreshCw, X, Building2, Landmark, Network, WalletCards, BriefcaseBusiness, Blocks, Bot, ShieldCheck, CircleCheck, CircleDollarSign, Gauge, Users, Gem, Orbit, Mail, Phone, MapPin } from 'lucide';
import { Markup } from './components/PageRegions';
import { CoverageSection, HeroSection, SolutionsSection } from './components/BusinessSections';
import { SiteLayout } from './layouts/SiteLayout';






























function PageReady({ children }: { children: ReactNode }) {
  useEffect(() => { window.dispatchEvent(new Event('finloop:route-change')); }, []);
  return <>{translateNode(children)}</>;
}

const NotFoundPage = lazy(() => import('./pages/SectionPage').then(module => ({
  default: (props: ComponentProps<typeof module.NotFoundPage>) => <PageReady><module.NotFoundPage {...props} /></PageReady>,
})));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({
  default: (props: ComponentProps<typeof module.ContactPage>) => <PageReady><module.ContactPage {...props} /></PageReady>,
})));
const FinancialProductsPage = lazy(() => import('./pages/FinancialProductsPage').then(module => ({
  default: (props: ComponentProps<typeof module.FinancialProductsPage>) => <PageReady><module.FinancialProductsPage {...props} /></PageReady>,
})));
const FinOnePage = lazy(() => import('./pages/FinOnePage').then(module => ({
  default: (props: ComponentProps<typeof module.FinOnePage>) => <PageReady><module.FinOnePage {...props} /></PageReady>,
})));
const FinEAMPage = lazy(() => import('./pages/FinEAMPage').then(module => ({
  default: (props: ComponentProps<typeof module.FinEAMPage>) => <PageReady><module.FinEAMPage {...props} /></PageReady>,
})));
const XingQiTongPage = lazy(() => import('./pages/XingQiTongPage').then(module => ({
  default: (props: ComponentProps<typeof module.XingQiTongPage>) => <PageReady><module.XingQiTongPage {...props} /></PageReady>,
})));
const XingQiTongNewPage = lazy(() => import('./pages/XingQiTongNewPage').then(module => ({
  default: (props: ComponentProps<typeof module.XingQiTongNewPage>) => <PageReady><module.XingQiTongNewPage {...props} /></PageReady>,
})));
const FinRWAPage = lazy(() => import('./pages/FinRWAPage').then(module => ({
  default: (props: ComponentProps<typeof module.FinRWAPage>) => <PageReady><module.FinRWAPage {...props} /></PageReady>,
})));
const WebPortalPage = lazy(() => import('./pages/WebPortalPage').then(module => ({
  default: (props: ComponentProps<typeof module.WebPortalPage>) => <PageReady><module.WebPortalPage {...props} /></PageReady>,
})));
const XingLuTongPage = lazy(() => import('./pages/XingLuTongPage').then(module => ({
  default: (props: ComponentProps<typeof module.XingLuTongPage>) => <PageReady><module.XingLuTongPage {...props} /></PageReady>,
})));
const XingZhiTongPage = lazy(() => import('./pages/XingZhiTongPage').then(module => ({
  default: (props: ComponentProps<typeof module.XingZhiTongPage>) => <PageReady><module.XingZhiTongPage {...props} /></PageReady>,
})));
const BrokerSolutionPage = lazy(() => import('./pages/BrokerSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.BrokerSolutionPage>) => <PageReady><module.BrokerSolutionPage {...props} /></PageReady>,
})));
const PlatformSolutionPage = lazy(() => import('./pages/PlatformSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.PlatformSolutionPage>) => <PageReady><module.PlatformSolutionPage {...props} /></PageReady>,
})));
const DigitalAssetSolutionPage = lazy(() => import('./pages/DigitalAssetSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.DigitalAssetSolutionPage>) => <PageReady><module.DigitalAssetSolutionPage {...props} /></PageReady>,
})));
const EnterpriseSolutionPage = lazy(() => import('./pages/EnterpriseSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.EnterpriseSolutionPage>) => <PageReady><module.EnterpriseSolutionPage {...props} /></PageReady>,
})));
const FinloopAIPage = lazy(() => import('./pages/FinloopAIPage').then(module => ({
  default: (props: ComponentProps<typeof module.FinloopAIPage>) => <PageReady><module.FinloopAIPage {...props} /></PageReady>,
})));
const FAIPage = lazy(() => import('./pages/FAIPage').then(module => ({
  default: (props: ComponentProps<typeof module.FAIPage>) => <PageReady><module.FAIPage {...props} /></PageReady>,
})));
const NewsDetailPage = lazy(() => import('./pages/NewsPage').then(module => ({
  default: (props: ComponentProps<typeof module.NewsDetailPage>) => <PageReady><module.NewsDetailPage {...props} /></PageReady>,
})));
const NewsPage = lazy(() => import('./pages/NewsPage').then(module => ({
  default: (props: ComponentProps<typeof module.NewsPage>) => <PageReady><module.NewsPage {...props} /></PageReady>,
})));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({
  default: (props: ComponentProps<typeof module.AboutPage>) => <PageReady><module.AboutPage {...props} /></PageReady>,
})));
const FDEAIPage = lazy(() => import('./pages/FDEAIPage').then(module => ({
  default: (props: ComponentProps<typeof module.FDEAIPage>) => <PageReady><module.FDEAIPage {...props} /></PageReady>,
})));
const SupportPage = lazy(() => import('./pages/SupportPage').then(module => ({
  default: (props: ComponentProps<typeof module.SupportPage>) => <PageReady><module.SupportPage {...props} /></PageReady>,
})));
const TechnologyPlatformPage = lazy(() => import('./pages/TechnologyPlatformPage').then(module => ({
  default: (props: ComponentProps<typeof module.TechnologyPlatformPage>) => <PageReady><module.TechnologyPlatformPage {...props} /></PageReady>,
})));
const CareersPage = lazy(() => import('./pages/CareersPage').then(module => ({
  default: (props: ComponentProps<typeof module.CareersPage>) => <PageReady><module.CareersPage {...props} /></PageReady>,
})));
const WhiteLabelAppPage = lazy(() => import('./pages/WhiteLabelAppPage').then(module => ({
  default: (props: ComponentProps<typeof module.WhiteLabelAppPage>) => <PageReady><module.WhiteLabelAppPage {...props} /></PageReady>,
})));
const GoalSolutionPage = lazy(() => import('./pages/GoalSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.GoalSolutionPage>) => <PageReady><module.GoalSolutionPage {...props} /></PageReady>,
})));
const InstitutionalWealthSolutionPage = lazy(() => import('./pages/InstitutionalWealthSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.InstitutionalWealthSolutionPage>) => <PageReady><module.InstitutionalWealthSolutionPage {...props} /></PageReady>,
})));
const ProfessionalWealthSolutionPage = lazy(() => import('./pages/ProfessionalWealthSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.ProfessionalWealthSolutionPage>) => <PageReady><module.ProfessionalWealthSolutionPage {...props} /></PageReady>,
})));
const CorporateTreasurySolutionPage = lazy(() => import('./pages/CorporateTreasurySolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.CorporateTreasurySolutionPage>) => <PageReady><module.CorporateTreasurySolutionPage {...props} /></PageReady>,
})));
const WhiteLabelEmbeddedSolutionPage = lazy(() => import('./pages/WhiteLabelEmbeddedSolutionPage').then(module => ({
  default: (props: ComponentProps<typeof module.WhiteLabelEmbeddedSolutionPage>) => <PageReady><module.WhiteLabelEmbeddedSolutionPage {...props} /></PageReady>,
})));

const aiItems = [
  ['星路通', '面向金融专业人员的 AI 工作台'],
  ['FinWork平台', '企业资料、任务与 AI 员工中枢'],
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
    title: '金融平台',
    items: [
      ['FinOne', '账户、产品、交易与资产的财富核心'],
      ['FinEAM', 'EAM 与家办财富管理 SaaS'],
      ['星企通', '企业现金与财富管理平台'],
      ['Web Portal', '机构交易与运营工作台'],
      ['FinTaaS', '真实资产上链与资产代币化服务'],
      ['白标 App', '面向机构自有品牌的投资终端'],
      ...aiItems,
    ],
  },
];

const productLinks: Record<string, string> = {
  '现金管理': '/products#cash', '公募基金': '/products#public', '私募基金': '/products#private',
  '债券': '/products#bonds', '结构性产品': '/products#structured', '保险': '/products#insurance',
  '虚拟资产': '/products#virtual', 'RWA': '/products#rwa', 'FinOne': '/products/finone',
  'FinEAM': 'https://fineam.com.hk/', '星企通': '/products/xingqitong', 'Web Portal': '/products/web-portal',
  'FinTaaS': 'https://finlooprwa.com/fintaas/', '白标 App': '/products/white-label-app',
  '星路通': '/ai/xinglutong', 'FinWork平台': '/ai/fai', '星智通': '/ai/xingzhitong',
};
const recruitmentUrl = 'https://app.mokahr.com/social-recruitment/fosunwealth/146702?locale=zh-CN&previewKey=f4650087c2b0473194aa497d7ebfa3bda864a12453be4a14841444ede6673ada#/jobs?department%5B0%5D=3635833&page=1&anchorName=jobsList';

const mobileItemHref = (title: string, item: string, fallback: string) => {
  if (title === '金融产品' || title === '金融平台') return productLinks[item] || fallback;
  if (title === 'Finloop AI') return productLinks[item] || '/ai';
  if (title === '资源中心') return item === '技术平台' ? '/technology-platform' : '/resources';
  if (title === '关于星路') return item === '加入我们' ? recruitmentUrl : item === '联系我们' ? '/contact' : '/about';
  return fallback;
};

const businessGoalSolutionItems: Array<[string, string, string]> = [
  ['digital-wealth-management', '机构财富管理', '支持客户财富管理与专业机构交易'],
  ['corporate-treasury', '企业理财投资', '帮助企业统一管理现金、投资与资产'],
  ['embedded-wealth', '白标与嵌入式金融', '快速推出自有品牌终端或嵌入财富服务'],
  ['rwa-web3', '数字资产与代币化', '覆盖 RWA、虚拟资产与稳定币业务'],
  ['enterprise-ai', '金融 AI 企业落地', '将 AI 接入企业数据与真实业务流程'],
];

const customerTypeSolutionItems: Array<[string, string, string]> = [
  ['broker', '银行与证券机构', '扩展财富产品、数字财富、AI、RWA 与 API 能力。'],
  ['wealth', '财富管理与专业金融机构', '灵活建设财富管理、产品分销与专业投资服务能力。'],
  ['platform', '支付与平台机构', '将投资与财富服务快速接入现有平台。'],
  ['enterprise', '企业与机构投资者', '满足企业自有资金的现金管理与多资产投资需求。'],
];

const solutionGroups = [
  { id: 'goals', label: '按业务目标', title: '从想完成的业务目标出发', description: '围绕财富业务、嵌入式服务、企业资金、RWA 与 AI 落地组合端到端能力。', items: businessGoalSolutionItems },
  { id: 'customers', label: '按客户类型', title: '面向不同类型的机构与企业', description: '根据财富与资产管理机构、券商、银行、数字平台、数字资产机构和企业客户的业务特征组合对应能力。', items: customerTypeSolutionItems },
];

type MobileNavGroup = [string, string, string[]];
const mobileNavGroups: MobileNavGroup[] = [
  ['金融产品', '/products', productGroups[0].items.map(i => i[0])],
  ['金融平台', '/technology-platform', productGroups[1].items.map(i => i[0])],
  ['解决方案', '', businessGoalSolutionItems.map(i => i[1])],
  ['Finloop AI', '/ai', aiItems.map(i => i[0])],
  ['资源中心', '/resources', ['技术平台', '新闻资讯']],
  ['关于星路', '/about', ['公司介绍', '加入我们', '联系我们']],
];

const mobileSolutionLinks = businessGoalSolutionItems.map(([id, name]) => `<a href="/solutions/${id}">${name}</a>`).join('');

const headerMarkup = `
  <header class="site-header" id="top">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Finloop 星路科技首页">
        <img src="/assets/finloop-logo.svg" alt="Finloop 星路科技" />
      </a>
      <nav class="desktop-nav" aria-label="主导航">
        <button class="nav-link nav-trigger" data-menu="financial" aria-expanded="false">金融产品 <i data-lucide="chevron-down"></i></button>
        <button class="nav-link nav-trigger" data-menu="technology" aria-expanded="false">金融平台 <i data-lucide="chevron-down"></i></button>
        <button class="nav-link nav-trigger" data-menu="solutions" aria-expanded="false">解决方案 <i data-lucide="chevron-down"></i></button>
        <a class="nav-link" href="/ai">Finloop AI</a>
        <button class="nav-link nav-trigger" data-menu="resources" aria-expanded="false">资源中心 <i data-lucide="chevron-down"></i></button>
        <button class="nav-link nav-trigger" data-menu="about" aria-expanded="false">关于星路 <i data-lucide="chevron-down"></i></button>
      </nav>
      <div class="header-actions">
        ${languageMenu("header-language-options")}
        <a class="button button-accent header-cta" href="/contact">联系我们</a>
        <button class="menu-button" aria-label="打开菜单" aria-expanded="false"><i data-lucide="menu"></i></button>
      </div>
    </div>
    <div class="mega-shell" aria-hidden="true">
      <div class="mega-panel" data-panel="financial">
        <div class="mega-intro"><strong>连接多元金融产品</strong><p>覆盖传统财富、数字资产与 RWA 产品类别。</p></div>
        <div class="mega-grid mega-grid-unlabeled"><div>${productGroups[0].items.map(([name, desc]) => `<a href="${productLinks[name]}"><span>${name}</span><small>${desc}</small><i data-lucide="arrow-right"></i></a>`).join('')}</div></div>
      </div>
      <div class="mega-panel" data-panel="technology">
        <div class="mega-intro"><strong>财富科技平台</strong><p>从客户终端、业务工作台到财富核心与资产上链能力。</p></div>
        <div class="mega-grid mega-grid-unlabeled"><div>${productGroups[1].items.map(([name, desc]) => `<a href="${productLinks[name]}"${(name === 'FinTaaS' || name === 'FinEAM') ? ' target="_blank" rel="noopener noreferrer"' : ''}><span>${name}</span><small>${desc}</small><i data-lucide="arrow-right"></i></a>`).join('')}</div></div>
      </div>
      <div class="mega-panel" data-panel="solutions">
        <div class="mega-intro"><strong>从想完成的业务目标出发</strong><p>围绕财富业务、嵌入式服务、企业资金、RWA 与 AI 落地组合端到端能力。</p></div>
        <div class="mega-grid mega-solution-grid"><div>${businessGoalSolutionItems.map(([id, name, desc]) => `<a href="/solutions/${id}"><span>${name}</span><small>${desc}</small><i data-lucide="arrow-right"></i></a>`).join('')}</div></div>
      </div>
      <div class="mega-panel compact-panel" data-panel="resources">
        <div class="mega-intro"><strong>资源中心</strong><p>查看技术平台与 Finloop 最新内容。</p></div>
        <div class="mega-list"><a href="/technology-platform"><span>技术平台</span><small>财富核心、交易基础设施与开放连接</small><i data-lucide="arrow-right"></i></a><a href="/resources"><span>新闻资讯</span><small>行业洞察与公司动态</small><i data-lucide="arrow-right"></i></a></div>
      </div>
      <div class="mega-panel compact-panel" data-panel="about">
        <div class="mega-intro"><strong>关于星路</strong><p>总部位于香港的机构财富科技平台。</p></div>
        <div class="mega-list"><a href="/about"><span>公司介绍</span><small>公司定位、发展与市场认可、资质与牌照</small><i data-lucide="arrow-right"></i></a><a href="${recruitmentUrl}" target="_blank" rel="noopener noreferrer"><span>加入我们</span><small>与星路一起连接财富科技的未来</small><i data-lucide="arrow-right"></i></a><a href="/contact"><span>联系我们</span><small>香港、上海与业务咨询</small><i data-lucide="arrow-right"></i></a></div>
      </div>
    </div>
  </header>
  <div class="mega-backdrop" aria-hidden="true"></div>
`;

const mobileDrawerMarkup = `
  <div class="mobile-drawer" aria-hidden="true">
    <div class="drawer-top"><a href="/" aria-label="Finloop 星路科技首页"><img src="/assets/finloop-logo.svg" alt="Finloop 星路科技" /></a><button class="drawer-close" aria-label="关闭菜单"><i data-lucide="x"></i></button></div>
    <nav class="mobile-nav" aria-label="移动端导航">
      ${mobileNavGroups.map(([title, path, items]) => `<div class="mobile-group"><button aria-expanded="false">${title}<i data-lucide="chevron-down"></i></button><div>${path ? `<a href="${path}">查看全部</a>` : ''}${title === '解决方案' ? mobileSolutionLinks : items.map(item => `<a href="${mobileItemHref(title, item, path)}"${item === 'FinTaaS' || item === 'FinEAM' || item === '加入我们' ? ' target="_blank" rel="noopener noreferrer"' : ''}>${item}</a>`).join('')}</div></div>`).join('')}
    </nav>
    <div class="drawer-bottom">${languageMenu("drawer-language-options")}<a class="button button-accent" href="/contact">预约咨询 <i data-lucide="arrow-right"></i></a></div>
  </div>
`;

const mainMarkup = `
  <main id="main">
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <h1>AI 驱动的<br /><span>Web5 财富科技平台</span></h1>
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
            <g class="node node-c"><circle cx="605" cy="470" r="62"/><text x="605" y="466">FinTaaS</text><text class="sub" x="605" y="490">资产上链</text></g>
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
      <div class="solution-index">${customerTypeSolutionItems.map(([id, name, desc], i) => `<a href="/solutions/${id}" class="solution-row"><span class="solution-number">0${i + 1}</span><div><h3>${name}</h3><p>${desc}</p></div><i data-lucide="arrow-right"></i></a>`).join('')}</div>
    </section>

    <section class="architecture section-pad" id="architecture">
      <div class="architecture-top"><div><h2>选择适合业务场景的金融平台</h2></div><p>从财富核心、机构工作台和企业资金管理，到数字资产、AI 与交易基础设施，进入对应平台了解产品定位与能力范围。</p></div>
      <div class="platform-directory" aria-label="Finloop 金融平台入口">
        <a class="platform-card" href="/products/finone"><div><h3>FinOne</h3><p>为财富业务构建持久的核心能力，从容应对变化，持续拓展增长空间。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="https://fineam.com.hk/" target="_blank" rel="noopener noreferrer"><div><h3>FinEAM</h3><p>让专业成就信任，让财富服务承载更长远的客户价值。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/xingqitong"><div><h3>星企通</h3><p>让企业资金更好地服务经营，为稳健发展增添从容与主动。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="/products/web-portal"><div><h3>Web Portal</h3><p>连接市场机遇与专业行动，让机构交易更从容、更有掌控。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
        <a class="platform-card" href="https://finlooprwa.com/fintaas/" target="_blank" rel="noopener noreferrer"><div><h3>FinTaaS</h3><p>拓展真实资产的数字价值，让传统金融与新兴生态产生更多可能。</p></div><span>了解详情 <i data-lucide="arrow-right"></i></span></a>
      </div>
    </section>

    <section class="ai-section home-ai-section section-pad" id="ai">
      <img class="home-ai-blue-glow" src="/assets/home-figma/ai-blue-glow.svg" alt="" />
      <img class="home-ai-cyan-glow" src="/assets/home-figma/ai-cyan-glow.svg" alt="" />
      <div class="section-inner home-ai-inner">
        <div class="home-ai-heading"><div class="ai-copy"><h2>让 AI 从工具进入真实业务流程</h2><p>Finloop AI 从金融业务工作台、企业智能、模型基础设施到 Agent 与 Skills，将 AI 能力连接到具体岗位和工作流。</p></div><a class="button button-light" href="/ai">了解 Finloop AI</a></div>
        <div class="home-ai-cards" aria-label="Finloop AI 产品入口">
          ${[
            ['xinglutong', '星路通', '拓宽专业洞察的边界，让每一次判断与服务更有深度。'],
            ['fai', 'FinWork', '让个体智慧汇聚为组织能力，释放人机协作的长期价值。'],
            ['xingzhitong', '星智通', '企业人工智能应用基座，让 AI 的可能性不断延伸。'],
          ].map(([slug, name, copy], index) => `<a class="home-ai-card" href="/ai/${slug}"><h3>${name}</h3><p>${copy}</p><img class="home-ai-card-glow" src="/assets/home-figma/ai-card-glow.svg" alt="" /><span class="home-ai-card-arrow" aria-hidden="true"><img src="/assets/home-figma/ai-arrow.svg" alt="" /></span>${index === 1 ? `<div class="home-ai-agents" aria-hidden="true">${Array.from({length:4}, () => '<span>Agent</span>').join('')}</div>` : index === 2 ? '<img class="home-ai-network" src="/assets/home-figma/ai-network.png" alt="" />' : ''}</a>`).join('')}
        </div>
      </div>
    </section>

    <section class="why section-pad" id="why">
      <div class="section-heading editorial-heading"><h2>不止提供软件，更连接真实金融业务</h2><p>Finloop 以金融业务和产品能力为基础，连接业务应用、财富核心、交易基础设施、数字资产与 AI。</p></div>
      <div class="why-grid">
        <article><div class="why-visual why-visual-products" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div class="why-copy"><h3>金融业务和产品能力</h3><p>连接传统财富产品、机构交易与业务运营流程。</p></div></article>
        <article><div class="why-visual why-visual-connect" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div class="why-copy"><h3>灵活部署与开放连接能力</h3><p>通过平台与 API 连接机构现有系统、产品网络和数字资产生态。</p></div></article>
        <article><div class="why-visual why-visual-security" aria-hidden="true"><span></span><span></span><span></span></div><div class="why-copy"><h3>金融级合规、安全和稳定性</h3><p>围绕机构业务要求，支持权限、治理与稳定的业务运营。</p></div></article>
        <article><div class="why-visual why-visual-ai" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div class="why-copy"><h3>Web2、Web3 与 AI 的组合能力</h3><p>连接传统财富、数字资产与进入真实金融工作流的 AI 能力。</p></div></article>
      </div>
    </section>

    <section class="trust section-pad" id="trust">
      <div class="section-inner trust-layout">
        <div class="trust-title"><h2>合规持牌，市场认可</h2><p>为机构财富、投资交易与相关金融服务提供合规基础支持，并持续获得香港政府及行业机构的市场认可。</p></div>
        <div class="trust-pillars">
          <article><i data-lucide="landmark" aria-hidden="true"></i><h3>持牌金融体系</h3><p>依托复星财富控股旗下持牌金融机构体系，覆盖 1、2、4、6、9 号牌相关金融业务基础。</p></article>
          <article><i data-lucide="shield-check" aria-hidden="true"></i><h3>机构级合规支持</h3><p>围绕机构财富、投资交易与相关金融服务，连接产品、交易与运营流程。</p></article>
          <article><i data-lucide="award" aria-hidden="true"></i><h3>政府与行业认可</h3><p>获得 OASES、香港数码港及多项金融科技与专业投资奖项认可。</p></article>
        </div>
        <div class="trust-awards" tabindex="0" aria-label="Finloop 市场认可与奖项">
          <div class="trust-awards-track"><div class="trust-awards-group">
          <article><small>香港特区政府引进重点企业办公室</small><h3>重点企业办公室<br />（OASES）重点企业</h3></article>
          <article><small>香数码港培育计划</small><h3>香港数码港培育计划<br />培育企业</h3></article>
          <article><small>2025 年 11 月 · 香港 ICT 奖</small><h3>香港资讯及通讯科技奖金融科技奖及金奖</h3></article>
          <article><small>2025 年 3 月 · 香港经济通 ET Net</small><h3>“杰出一站式数智化<br />财富管理平台”大奖</h3></article>
          <article><small>2026 年 5 月 · I&amp;M 专业投资大奖</small><h3>I&amp;M 专业投资大奖<br />“年度最佳金融科技公司”</h3></article>
          </div><div class="trust-awards-group trust-awards-copy" aria-hidden="true">
          <article><small>香港特区政府引进重点企业办公室</small><h3>重点企业办公室<br />（OASES）重点企业</h3></article>
          <article><small>香数码港培育计划</small><h3>香港数码港培育计划<br />培育企业</h3></article>
          <article><small>2025 年 11 月 · 香港 ICT 奖</small><h3>香港资讯及通讯科技奖金融科技奖及金奖</h3></article>
          <article><small>2025 年 3 月 · 香港经济通 ET Net</small><h3>“杰出一站式数智化<br />财富管理平台”大奖</h3></article>
          <article><small>2026 年 5 月 · I&amp;M 专业投资大奖</small><h3>I&amp;M 专业投资大奖<br />“年度最佳金融科技公司”</h3></article>
          </div></div>
        </div>
      </div>
    </section>

    <!-- home-cases -->

    <section class="contact section-pad" id="contact">
      <div class="section-inner contact-layout">
        <div class="contact-copy"><h2>探索适合您业务的财富科技解决方案</h2><p>无论您正在构建机构财富平台、企业现金管理服务、嵌入式投资能力还是数字资产业务，星路团队都可以与您共同探索适合的解决方案。</p></div>
        <div class="contact-actions"><a class="button button-ghost-light" href="tel:+85230088996">联系我们</a></div>
      </div>
    </section>
  </main>
`;

const footerMarkup = `
  <footer class="site-footer" id="footer">
    <div class="footer-top"><div class="footer-brand"><img src="/assets/finloop-logo.svg" alt="Finloop 星路科技" /></div><div class="footer-socials" aria-label="Social media"><span class="footer-social-logo footer-social-x" role="img" aria-label="X (Twitter)">𝕏</span><span class="footer-social-logo footer-social-linkedin" role="img" aria-label="LinkedIn">in</span></div></div>
    <div class="footer-content">
    <div class="footer-contact"><div><i data-lucide="map-pin" aria-hidden="true"></i><span>香港总部：香港中环花园道 3 号冠君大厦 21 楼 2101-2105 室</span></div><div><i data-lucide="mail" aria-hidden="true"></i><a href="mailto:CS@finloop.hk">CS@finloop.hk</a></div><div><i data-lucide="phone" aria-hidden="true"></i><a href="tel:+85230088996">(852) 3008 8996</a></div></div>
    <div class="footer-directory">${mobileNavGroups.map(([title, path, items]) => `<div><h3>${title}</h3>${items.map(item => {
      const href = title === '解决方案' ? `/solutions/${businessGoalSolutionItems.find(([, name]) => name === item)![0]}` : mobileItemHref(title, item, path);
      return `<a href="${href}"${item === 'FinTaaS' || item === 'FinEAM' || item === '加入我们' ? ' target="_blank" rel="noopener noreferrer"' : ''}>${item}</a>`;
    }).join('')}</div>`).join('')}</div>
    </div>
    <div class="footer-legal"><span>© 2026 Finloop Finance Technology Holding Limited</span><nav aria-label="法律信息"><a href="#footer">隐私政策</a><a href="#footer">使用条款</a><a href="#footer">Cookie Policy</a><a href="#footer">金融免责声明</a><a href="#footer">监管声明</a></nav></div>
  </footer>
`;

const mainBodyMarkup = mainMarkup
  .replace(/^\s*<main id="main">/, '')
  .replace(/<\/main>\s*$/, '')
  .replace(/<section class="hero">[\s\S]*?<\/section>\s*/, '');
const [beforeCoverageMarkup, afterCoverageBlock] = mainBodyMarkup.split(/<section class="coverage section-pad" id="coverage">[\s\S]*?<\/section>\s*/);
const [afterCoverageMarkup, afterSolutionsMarkup] = afterCoverageBlock.split(/<section class="solutions section-pad" id="solutions">[\s\S]*?<\/section>\s*/);

const [beforeCasesMarkup, afterCasesMarkup] = (afterCoverageMarkup + afterSolutionsMarkup).split('<!-- home-cases -->');

function HomePage() {
  useEffect(() => {
    const awards = document.querySelector<HTMLElement>('.trust-awards');
    const group = awards?.querySelector<HTMLElement>('.trust-awards-group');
    if (!awards || !group) return;
    const measure = () => {
      awards.style.setProperty('--awards-duration', `${group.scrollWidth / 35}s`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(awards);
    observer.observe(group);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <HeroSection />
      <main id="main">
        <Markup html={beforeCoverageMarkup} />
        <CoverageSection />
        <SolutionsSection groups={solutionGroups} />
        <Markup html={beforeCasesMarkup} />
        <HomeLogoWall />
        <Markup html={afterCasesMarkup} />
      </main>
    </>
  );
}

const productPageItems = productGroups.flatMap(group => group.items.map(([title, description]) => ({ title, description })));
const aiPageItems = aiItems.map(([title, description]) => ({ title, description }));

function App() {
  return (
    <BrowserRouter basename={localePrefix || "/"}>
      <Routes>
        <Route element={<SiteLayout headerMarkup={headerMarkup} mobileDrawerMarkup={mobileDrawerMarkup} footerMarkup={footerMarkup} initializeShell={initializePage} />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<FinancialProductsPage />} />
          <Route path="products/finone" element={<FinOnePage />} />
          <Route path="products/fineam" element={<FinEAMPage />} />
          <Route path="products/xingqitong" element={<XingQiTongPage />} />
          <Route path="products/xingqitong-new" element={<XingQiTongNewPage />} />
          <Route path="products/finrwa" element={<FinRWAPage />} />
          <Route path="products/web-portal" element={<WebPortalPage />} />
          <Route path="products/white-label-app" element={<WhiteLabelAppPage />} />
          <Route path="ai/xinglutong" element={<XingLuTongPage />} />
          <Route path="solutions/digital-wealth-management" element={<InstitutionalWealthSolutionPage />} />
          <Route path="solutions/embedded-wealth" element={<WhiteLabelEmbeddedSolutionPage />} />
          <Route path="solutions/corporate-treasury" element={<CorporateTreasurySolutionPage />} />
          <Route path="solutions/rwa-web3" element={<GoalSolutionPage type="rwa" />} />
          <Route path="solutions/enterprise-ai" element={<GoalSolutionPage type="ai" />} />
          <Route path="solutions/wealth" element={<ProfessionalWealthSolutionPage />} />
          <Route path="solutions/broker" element={<BrokerSolutionPage />} />
          <Route path="solutions/bank" element={<BrokerSolutionPage />} />
          <Route path="solutions/platform" element={<PlatformSolutionPage />} />
          <Route path="solutions/digital" element={<DigitalAssetSolutionPage />} />
          <Route path="solutions/enterprise" element={<EnterpriseSolutionPage />} />
          <Route path="solutions/fde-ai" element={<FDEAIPage />} />
          <Route path="ai" element={<FinloopAIPage />} />
          <Route path="ai/fai" element={<FAIPage />} />
          <Route path="ai/xingzhitong" element={<XingZhiTongPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="technology-platform" element={<TechnologyPlatformPage />} />
          <Route path="resources" element={<NewsPage />} />
          <Route path="resources/:category" element={<NewsPage />} />
          <Route path="resources/:category/:slug" element={<NewsDetailPage />} />
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

function refreshPageIcons() {
  createIcons({ icons: { ArrowLeftRight, ArrowRight, ArrowUp, BadgeDollarSign, Award, ChevronDown, ChevronRight, Database, FileChartColumn, Globe2, ListFilter, Menu, MoveRight, PackagePlus, PieChart, RefreshCw, X, Building2, Landmark, Network, WalletCards, BriefcaseBusiness, Blocks, Bot, ShieldCheck, CircleCheck, CircleDollarSign, Gauge, Users, Gem, Orbit, Mail, Phone, MapPin } });
}

function initializePage() {
  refreshPageIcons();

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
    refreshPageIcons();
    const home = document.querySelector('.hero-scroll-scene');
    if (home) {
      document.querySelectorAll<HTMLElement>('main .section-pad').forEach(section => {
        section.classList.add('home-element-entrance', 'in-view');
        const elements = section.querySelectorAll<HTMLElement>(
          'h2, .home-logo-heading p, .home-logo-grid > li, .home-ai-card, .home-ai-heading > a, .coverage-header p, .coverage-header > a, .section-heading p, .architecture-top > p, .solution-copy > p, .solution-mode-tabs, .solution-option, .solution-media, .platform-card, .ai-copy > p, .ai-copy > a, .ai-product-grid > a, .why-grid > article, .trust-title > p, .trust-pillars > article, .trust-awards, .platform-cases-head > p, .platform-case-grid > button, .contact-copy > p, .contact-actions'
        );
        elements.forEach((element, index) => {
          if (element.classList.contains('home-reveal-item')) return;
          element.classList.add('home-reveal-item');
          element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 3) * 70}ms`);
          observer.observe(element);
        });
      });
    }
    document.querySelectorAll('.section-pad:not(.in-view), .hero-system:not(.in-view)').forEach(el => observer.observe(el));
  }

  window.addEventListener('finloop:route-change', observePageSections);
  observePageSections();

}
