import React, { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Link2, Plus, type IconNode } from 'lucide';

type NewsCategory = 'insights' | 'company';

// Image rules follow the Apple Newsroom study:
// - Cover: one 16:9 upload per article, at least 1312x738. Export card 420/840w and
//   feature 720/1440w variants into srcSet; every slot reserves a 16:9 box, so
//   object-fit only matters when an upload has the wrong ratio. focus sets object-position.
// - Body images keep their own ratio at the 720px column (1440w for 2x) and are never
//   cropped; images in one group share the first image's ratio.
type NewsImage = { src: string; srcSet?: string; width: number; height: number; alt: string; focus?: string };

type NewsItem = {
  slug: string;
  title: string;
  description: string;
  meta: string;
  visual: string;
  cover?: NewsImage;
  type?: string;
  sections: Array<{ title: string; paragraphs: string[]; images?: NewsImage[] }>;
};

type ListedNews = NewsItem & { category: NewsCategory };

// Covers are Unsplash License photos; imgix crops every variant to 16:9 on the server.
const unsplashCover = (id: string, alt: string): NewsImage => {
  const url = (width: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${Math.round(width * 9 / 16)}&q=80`;
  return { src: url(840), srcSet: [420, 840, 1440, 2400].map(width => `${url(width)} ${width}w`).join(', '), width: 1600, height: 900, alt };
};

const covers: Record<string, NewsImage> = {
  'wealth-technology-core': unsplashCover('photo-1617761141732-d481912af1a9', '蓝天下阶梯式立面的玻璃幕墙大楼'),
  'rwa-lifecycle': unsplashCover('photo-1521428706918-249ece433edf', '晴空下的白色高层建筑立面'),
  'ai-financial-workflow': unsplashCover('photo-1570696557714-01186e96d8c9', '蓝天下弧形的蓝色玻璃幕墙建筑'),
  'digital-cash-management': unsplashCover('photo-1614923756087-ca9f44b6ec55', '晴空下平静的蓝色海面与地平线'),
  'open-wealth-connectivity': unsplashCover('photo-1787511808477-edd2fcaf46d7', '横跨平静海面的斜拉桥'),
  'web5-combination': unsplashCover('photo-1518005076933-9ef6bec005cb', '蓝天下白色曲线造型的建筑'),
  'series-a-financing': unsplashCover('photo-1786139774034-6455b12e28cb', '仰视视角下直入晴空的玻璃高楼'),
  'oases-recognition': unsplashCover('photo-1576831371356-d6e9411ae501', '晴空下白色几何立面的高层建筑'),
  'ict-awards-2025': unsplashCover('photo-1788203852790-2a28fe8fb4b2', '晴空下竖向窗格的白色建筑立面'),
  'asia-pacific-rwa': unsplashCover('photo-1612090078171-9e1e933e2bcc', '蓝天映衬下线条简洁的白色建筑'),
  'web5-platform-progress': unsplashCover('photo-1612089889100-bbcf80456e1f', '蓝天映衬下的白色极简建筑'),
  'hong-kong-shanghai': unsplashCover('photo-1506970845246-18f21d533b20', '日间的香港维多利亚港城市天际线'),
};

const businessTypes: Record<string, string> = {
  'series-a-financing': '公司发展',
  'asia-pacific-rwa': '业务合作',
  'web5-platform-progress': '产品与服务',
  'oases-recognition': '公司发展',
  'ict-awards-2025': '公司发展',
  'hong-kong-shanghai': '公司发展',
};

const news: Record<NewsCategory, NewsItem[]> = {
  insights: [
    article('wealth-technology-core', '机构财富科技：从业务应用到财富核心', '梳理业务应用、账户产品、交易运营与底层基础设施之间的连接关系。', '财富科技 · 2026年6月', 'architecture', [['财富业务需要一条连续链路', '机构财富业务并不只发生在客户看到的应用界面。客户准入、账户、产品、订单、交易、持仓与持续运营需要被连接到同一条业务链路中。'], ['财富核心承担统一连接', '财富核心用于沉淀账户、产品、交易与资产等基础能力，让不同前端应用可以复用一致的数据和业务规则。'], ['从平台能力回到业务结果', '完整的技术体系需要服务于更快的产品接入、更清晰的运营协作和可持续扩展的机构业务。']]),
    article('rwa-lifecycle', 'RWA 不只是上链：理解发行与分销全链路', '从资产上线、Tokenization、持份管理到机构分销，认识 RWA 体系的关键环节。', 'RWA · 2026年4月', 'rwa', [['RWA 是一套协作体系', 'RWA 项目通常涉及发行人、技术服务、托管、合规及分销等不同角色，资产上链只是完整流程中的一个环节。'], ['从资产到可运营产品', '完整链路需要连接产品设计、Tokenization、链上部署、持份管理以及后续的交易与运营流程。'], ['机构分销需要传统金融能力', '面向机构的 RWA 服务仍需要账户、适当性、订单、清结算与持续管理能力，并明确不同主体的服务边界。']]),
    article('ai-financial-workflow', 'AI 如何进入真实的金融工作流', '围绕产品尽调、资料分析、风险预警和任务协同，观察 AI 在金融业务中的落地方式。', '人工智能 · 2026年5月', 'ai', [['从单点问答进入任务流程', '金融业务中的 AI 不应只停留在生成文本，还需要连接资料、权限、任务以及可追溯的业务过程。'], ['专业场景需要专业上下文', '产品尽调、GAP 分析、风险预警和竞品洞察等任务依赖持续更新的资料与明确的判断边界。'], ['人机协作仍是核心', 'AI 可以辅助信息整理和分析，但重要判断、客户沟通与受监管流程仍需要由具备相应职责的人员完成。']]),
    article('digital-cash-management', '企业现金管理的数字化连接方式', '从多币种现金配置、账户管理到资产查看，理解企业资金管理平台的能力边界。', '现金管理 · 2026年2月', 'liquidity', [['看见分散的资金状态', '企业资金可能分布在不同账户、币种与产品中，数字化平台首先需要形成统一、清晰的资产视图。'], ['连接配置与运营流程', '平台可将账户管理、现金配置、申赎及资产查看连接起来，减少信息在不同系统间重复流转。'], ['产品规则需要持续核验', '具体产品范围、币种、流动性安排与适用客户，应以实际接入产品及相关主体确认的信息为准。']]),
    article('open-wealth-connectivity', '开放连接如何拓展机构财富业务', '通过 API、交易基础设施与产品网络，让既有平台承接新的财富服务场景。', '开放金融 · 2025年12月', 'network', [['开放能力不是单一接口', 'API 需要与账户、产品、交易、清结算和权限体系共同工作，才能承接完整业务。'], ['保留机构既有体验', '通过可组合的技术能力，机构可以在现有渠道中逐步加入财富服务，而不必一次性重建全部系统。'], ['清晰边界支持持续扩展', '接入范围、部署方式和运营责任需要在项目中明确，并根据机构现有架构逐步推进。']]),
    article('web5-combination', 'Web2、Web3 与 AI 的组合逻辑', '以机构财富业务为主线，理解传统金融、数字资产和智能化能力如何协同。', '行业观察 · 2025年11月', 'web5', [['以机构财富业务为主线', 'Web2、Web3 与 AI 并不是三条割裂的叙事，组合的起点仍然是客户、账户、产品、交易与运营。'], ['数字资产延展产品边界', 'RWA 与数字资产基础设施让传统资产获得新的技术表达和流转方式，同时仍需连接机构金融流程。'], ['AI 横向进入各业务层', 'AI 可以作用于资料、研究、风险和运营，但需要在权限、安全与审计框架下运行。']]),
  ],
  company: [
    article('series-a-financing', 'Finloop 完成 Series A 融资', '现有资料记录公司于 2025 年 7 月完成 Series A 融资，相关金额与完整投资方信息以上线前核验为准。', '融资进展 · 2025年7月', 'series-a', [['支持 RWA 业务体系建设', '现有资料显示，本轮融资资金用途包括建设和增强新的 RWA 业务体系。'], ['持续连接机构财富与数字资产', 'Finloop 以机构财富科技能力为基础，持续推进财富核心、交易基础设施与数字资产能力的连接。'], ['信息说明', '融资金额、完整投资方名单、公告链接与融资主体仍需在正式发布前完成核验。']]),
    article('oases-recognition', 'Finloop 获 OASES 相关认可', '现有资料记录 Finloop 于 2025 年 4 月获得香港特区政府引进重点企业办公室相关认可。', '公司里程碑 · 2025年4月', 'hongkong', [['扎根香港发展', 'Finloop 总部位于香港，服务金融机构、数字平台及企业客户。'], ['持续建设机构财富科技能力', '公司围绕财富管理、交易、RWA 与 AI 建设面向机构业务的组合式技术平台。'], ['信息说明', 'OASES 的正式中英文称谓、相关主体及图片和标识授权仍需在正式发布前复核。']]),
    article('ict-awards-2025', 'Finloop 获香港 ICT Awards 2025 相关奖项', '现有公司资料记录该项市场认可，正式奖项名称及获奖主体仍待上线前复核。', '市场认可 · 2025年6月', 'award', [['市场认可', '现有公司资料记录 Finloop 获得香港 ICT Awards 2025 金融科技类别相关奖项。'], ['技术与业务结合', 'Finloop 持续将财富业务能力与数字化平台、交易基础设施、RWA 和 AI 相连接。'], ['信息说明', '正式奖项名称、奖项等级、主办方表述与获奖主体应以上线前核验信息为准。']]),
    article('asia-pacific-rwa', 'Finloop 推进亚太 RWA 研究与生态合作', '围绕 RWA 研究、投资者教育与区域生态连接，持续推进数字资产机构合作。', '生态合作 · 2026年7月', 'research', [['连接区域 RWA 生态', 'Finloop 围绕亚太市场持续关注 RWA 研究、投资者教育与机构生态协作。'], ['从研究进入业务连接', '研究与生态合作可为资产上线、技术实施、机构分销和市场教育提供共同语境。'], ['合作边界', '具体合作机构、合作性质与项目成果应以双方正式公开信息为准。']]),
    article('web5-platform-progress', 'Finloop 持续建设 Web5 财富科技平台', '连接财富核心、交易基础设施、AI 与数字资产能力，为机构业务提供组合式技术支持。', '业务进展 · 2026年3月', 'platform', [['一套持续延展的平台体系', 'Finloop 的平台体系由业务应用、财富核心、交易基础设施、AI 与 RWA 能力共同构成。'], ['服务多类机构客户', '平台面向金融机构、数字平台与企业客户，根据不同业务场景组合产品与技术能力。'], ['保持开放连接', '通过平台和 API 与机构既有系统、产品网络及数字资产生态连接。']]),
    article('hong-kong-shanghai', 'Finloop 香港与上海双中心运营', '公司资料显示 Finloop 总部位于香港，并形成香港、上海双中心运营布局。', '运营布局 · 2025年10月', 'offices', [['香港总部', 'Finloop 总部位于香港，连接当地及国际金融与科技生态。'], ['上海运营', '上海团队与香港总部共同支持产品、技术和客户服务工作。'], ['协同服务机构客户', '双中心运营布局用于支持 Finloop 面向不同市场的机构财富科技业务。']]),
  ],
};

function article(slug: string, title: string, description: string, meta: string, visual: string, sections: Array<[string, string]>): NewsItem {
  return {
    slug,
    title,
    description,
    meta,
    visual,
    cover: covers[slug],
    type: businessTypes[slug],
    sections: sections.map(([sectionTitle, paragraph]) => ({ title: sectionTitle, paragraphs: [paragraph] })),
  };
}

const categoryCopy: Record<NewsCategory, { title: string; description: string }> = {
  company: { title: '公司动态', description: '了解 Finloop 的业务进展、市场认可、生态合作与重要里程碑。' },
  insights: { title: '行业洞察', description: '聚焦财富科技、RWA、人工智能与企业现金管理，分享面向机构业务的观察与方法。' },
};

// Company news filters appear in this order, and only when a type has articles.
const businessTypeOrder = ['业务合作', '产品与服务', '公司发展'];

const listedNews: Record<NewsCategory, ListedNews[]> = {
  insights: news.insights.map(item => ({ ...item, category: 'insights' })),
  company: news.company.map(item => ({ ...item, category: 'company' })),
};

const featuredSlugs = ['ai-financial-workflow', 'series-a-financing', 'rwa-lifecycle', 'ict-awards-2025'];
const featuredNews = featuredSlugs.map(slug => [...listedNews.company, ...listedNews.insights].find(item => item.slug === slug)).filter(Boolean) as ListedNews[];

const pageSize = 6;
const insightLimit = 5;
const featureInterval = 7000;
const cardSizes = '(max-width: 800px) calc(100vw - 40px), (max-width: 1080px) 46vw, 31vw';

const isCategory = (value: string): value is NewsCategory => value === 'insights' || value === 'company';
const newsHref = (item: ListedNews) => `/resources/${item.category}/${item.slug}`;
const metaParts = (meta: string) => meta.split(' · ');
// Publish date is the part of meta after ' · ' when it is a date; insights have none yet.
const newsDate = (item: NewsItem) => { const detail = metaParts(item.meta)[1]; return detail?.includes('年') ? detail : ''; };
const pad = (value: number) => String(value).padStart(2, '0');

function Icon({ icon }: { icon: IconNode }) {
  return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {icon[2]?.map(([tag, attrs], index) => React.createElement(tag, { ...attrs, key: index }))}
  </svg>;
}

function useReveal<T extends HTMLElement>(trigger: unknown) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const targets = [...(ref.current?.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)') ?? [])];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [trigger]);

  return ref;
}

export function NewsPage() {
  const { category } = useParams();

  // /resources/company and /resources/insights open the same page at that module.
  useEffect(() => {
    if (!category) return;
    const frame = window.requestAnimationFrame(() => document.getElementById(`news-${category}`)?.scrollIntoView({ block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, [category]);

  if (category && !isCategory(category)) return <Navigate replace to="/resources" />;

  return (
    <main className="news-page" id="main">
      <section className="news-hero" data-header-theme="inverse">
        <div className="news-shell">
          <div className="news-hero-head">
            <h1>新闻资讯</h1>
            <p>从行业趋势到公司进展，持续记录机构财富科技的演进与 Finloop 的实践。</p>
          </div>
          <NewsFeature items={featuredNews} />
        </div>
      </section>
      <CompanyNews items={listedNews.company} />
      <InsightList items={listedNews.insights} />
    </main>
  );
}

function NewsFeature({ items }: { items: ListedNews[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const autoplay = !paused && !reduceMotion && items.length > 1;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % items.length), featureInterval);
    return () => window.clearTimeout(timer);
  }, [active, autoplay, items.length]);

  const go = (step: number) => setActive(index => (index + step + items.length) % items.length);

  return (
    <div
      className="news-feature"
      role="region"
      aria-roledescription="carousel"
      aria-label="精选资讯"
      style={{ '--feature-count': items.length } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }}
    >
      <div className="news-feature-track" aria-live={autoplay ? 'off' : 'polite'}>
        {items.map((item, index) => {
          const isActive = index === active;
          const [topic] = metaParts(item.meta);
          return (
            <div className={`news-feature-slide${isActive ? ' is-active' : ''}`} key={item.slug} role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${items.length}`}>
              <button className="news-feature-tab" type="button" onClick={() => setActive(index)} aria-label={`查看精选：${item.title}`}>
              </button>
              <div className="news-feature-panel">
                <Link className="news-feature-media" to={newsHref(item)} tabIndex={-1} aria-hidden="true">
                  <NewsCover item={item} sizes="(max-width: 800px) calc(100vw - 72px), 44vw" decorative eager={index === 0} />
                </Link>
                <div className="news-feature-copy">
                  <div className="news-meta"><span className="news-chip">{topic}</span><span>{newsDate(item)}</span></div>
                  <h2><Link to={newsHref(item)} tabIndex={-1}>{item.title}</Link></h2>
                  <p>{item.description}</p>
                  <Link className="news-pill news-pill-light" to={newsHref(item)} aria-label={`阅读全文：${item.title}`}>阅读全文<Icon icon={ArrowUpRight} /></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="news-feature-controls">
        <p className="news-feature-count"><span>{pad(active + 1)}</span> / {pad(items.length)}</p>
        <span className="news-feature-progress" key={`${active}-${autoplay}`} data-running={autoplay || undefined} style={{ '--feature-interval': `${featureInterval}ms` } as CSSProperties} aria-hidden="true" />
        <div className="news-feature-arrows">
          <button type="button" onClick={() => go(-1)} aria-label="上一条精选"><Icon icon={ChevronLeft} /></button>
          <button type="button" onClick={() => go(1)} aria-label="下一条精选"><Icon icon={ChevronRight} /></button>
        </div>
      </div>
    </div>
  );
}

function ModuleTitle({ id, category }: { id: string; category: NewsCategory }) {
  return <h2 id={id}>{categoryCopy[category].title}</h2>;
}

function CompanyNews({ items }: { items: ListedNews[] }) {
  const types = businessTypeOrder.filter(type => items.some(item => item.type === type));
  const [type, setType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const filtered = type === 'all' ? items : items.filter(item => item.type === type);
  const focusFrom = useRef<number | null>(null);
  const gridRef = useReveal<HTMLDivElement>(`${type}-${visibleCount}`);

  useEffect(() => {
    if (focusFrom.current === null) return;
    gridRef.current?.querySelectorAll<HTMLElement>('.news-card')[focusFrom.current]?.focus({ preventScroll: true });
    focusFrom.current = null;
  }, [visibleCount]);

  function selectType(next: string) {
    setType(next);
    setVisibleCount(pageSize);
  }

  function loadMore() {
    focusFrom.current = visibleCount;
    setVisibleCount(count => count + pageSize);
  }

  return (
    <section className="news-module news-company" id="news-company" aria-labelledby="news-company-title">
      <div className="news-shell">
        <div className="news-module-head">
          <div>
            <ModuleTitle id="news-company-title" category="company" />
            <p>{categoryCopy.company.description}</p>
          </div>
          <div className="news-filter" role="group" aria-label="按业务类型筛选公司动态">
            {[['all', '全部'], ...types.map(value => [value, value])].map(([value, label]) => (
              <button key={value} type="button" className={value === type ? 'active' : undefined} aria-pressed={value === type} onClick={() => selectType(value)}>{label}</button>
            ))}
          </div>
        </div>
        <div className="news-grid" ref={gridRef} key={type}>
          {filtered.slice(0, visibleCount).map((item, index) => <NewsCard item={item} index={index} key={item.slug} />)}
        </div>
        {visibleCount < filtered.length && (
          <div className="news-more">
            <button className="news-pill news-pill-dark" type="button" onClick={loadMore}>加载更多<span>{filtered.length - visibleCount}</span></button>
          </div>
        )}
      </div>
    </section>
  );
}

function InsightList({ items }: { items: ListedNews[] }) {
  const [expanded, setExpanded] = useState(false);
  const listRef = useReveal<HTMLDivElement>(expanded);
  const shown = expanded ? items : items.slice(0, insightLimit);

  return (
    <section className="news-module news-insights" id="news-insights" aria-labelledby="news-insights-title">
      <div className="news-shell news-insights-layout">
        <div className="news-insights-head">
          <ModuleTitle id="news-insights-title" category="insights" />
          <p>{categoryCopy.insights.description}</p>
          {!expanded && items.length > insightLimit && (
            <button className="news-pill news-pill-outline" type="button" onClick={() => setExpanded(true)}>查看全部行业洞察<Icon icon={Plus} /></button>
          )}
        </div>
        <div className="news-insight-list" ref={listRef}>
          {shown.map(item => (
            <Link className="news-insight-row" to={newsHref(item)} key={item.slug} data-reveal>
              <h3><span>{item.title}</span></h3>
              <span className="news-insight-topic">{metaParts(item.meta)[0]}</span>
              <span className="news-arrow" aria-hidden="true"><Icon icon={ArrowRight} /><Icon icon={ArrowRight} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, index }: { item: ListedNews; index: number }) {
  const [topic] = metaParts(item.meta);

  return (
    <Link className="news-card" to={newsHref(item)} data-reveal style={{ '--reveal-index': index % 3 } as CSSProperties}>
      <NewsCover item={item} sizes={cardSizes} decorative />
      <div className="news-meta"><span className="news-chip">{item.type ?? topic}</span></div>
      <h3><span>{item.title}</span></h3>
      <p>{item.description}</p>
      <span className="news-card-foot">{newsDate(item)}</span>
      <span className="news-notch" aria-hidden="true"><Icon icon={ArrowRight} /><Icon icon={ArrowRight} /></span>
    </Link>
  );
}

function NewsCover({ item, sizes, className = '', decorative = false, eager = false }: { item: NewsItem; sizes: string; className?: string; decorative?: boolean; eager?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const { cover } = item;

  return (
    <div className={`news-cover news-media-${item.visual} ${className}`.trim()}>
      {cover ? (
        <img
          className={loaded ? 'is-loaded' : undefined}
          src={cover.src}
          srcSet={cover.srcSet}
          sizes={cover.srcSet ? sizes : undefined}
          width={cover.width}
          height={cover.height}
          alt={decorative ? '' : cover.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={cover.focus ? { objectPosition: cover.focus } : undefined}
          onLoad={() => setLoaded(true)}
        />
      ) : <NewsVisual type={item.visual} />}
    </div>
  );
}

export function NewsDetailPage() {
  const { category, slug } = useParams();
  const active: NewsCategory = category === 'company' ? 'company' : 'insights';
  const item = listedNews[active].find(entry => entry.slug === slug);
  if (!item) return <Navigate replace to={`/resources/${active}`} />;
  return <NewsArticle key={item.slug} item={item} />;
}

function NewsArticle({ item }: { item: ListedNews }) {
  const [topic, detail] = metaParts(item.meta);
  const categoryTitle = categoryCopy[item.category].title;
  const related = listedNews[item.category].filter(entry => entry.slug !== item.slug).slice(0, 3);
  const textLength = item.sections.reduce((total, section) => total + section.title.length + section.paragraphs.join('').length, item.description.length);
  const readMinutes = Math.max(1, Math.round(textLength / 400));
  const [activeSection, setActiveSection] = useState(0);
  const [copied, setCopied] = useState(false);
  const bodyRef = useRef<HTMLElement>(null);
  const relatedRef = useReveal<HTMLDivElement>(item.slug);

  useEffect(() => {
    const sections = [...(bodyRef.current?.querySelectorAll<HTMLElement>('section[id]') ?? [])];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActiveSection(sections.indexOf(entry.target as HTMLElement));
    }), { rootMargin: '-24% 0px -64% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href).then(() => setCopied(true), () => {});
  }

  return (
    <main className="news-detail-page" id="main">
      <header className="news-detail-head">
        <div className="news-shell">
          <Link className="news-back" to={`/resources/${item.category}`}><Icon icon={ArrowLeft} />返回</Link>
          <div className="news-detail-title">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className="news-detail-byline">
            <div className="news-detail-author">
              <span aria-hidden="true">FL</span>
              <p><strong>Finloop 星路科技</strong><small>{categoryTitle} · {topic}</small></p>
            </div>
            <p className="news-detail-date"><span>{detail}</span><strong>约 {readMinutes} 分钟阅读</strong></p>
          </div>
          <NewsCover item={item} className="news-detail-cover" sizes="(max-width: 800px) calc(100vw - 40px), min(calc(100vw - 128px), 1600px)" eager />
        </div>
      </header>

      <div className="news-shell news-detail-layout">
        <aside className="news-detail-aside">
          <nav className="news-toc" aria-label="文章目录">
            <span>目录</span>
            {item.sections.map((section, index) => (
              <a key={section.title} href={`#news-section-${index + 1}`} className={index === activeSection ? 'active' : undefined} aria-current={index === activeSection ? 'location' : undefined}>{section.title}</a>
            ))}
          </nav>
          <div className="news-share">
            <span>分享本文</span>
            <button type="button" onClick={copyLink} aria-label="复制文章链接"><Icon icon={copied ? Check : Link2} /></button>
            <span className="news-share-status" role="status">{copied ? '已复制链接' : ''}</span>
          </div>
        </aside>
        <article className="news-detail-body" ref={bodyRef}>
          {item.sections.map((section, index) => (
            <section id={`news-section-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.images && <NewsFigure images={section.images} />}
            </section>
          ))}
          <div className="news-detail-disclaimer"><strong>内容说明</strong><p>本文根据项目现有资料整理，仅用于官网内容展示，不构成投资建议、产品要约或对任何服务范围的承诺。相关业务与事实信息以正式发布及适用主体确认为准。</p></div>
        </article>
      </div>

      <section className="news-related" aria-labelledby="news-related-title">
        <div className="news-shell">
          <div className="news-related-head">
            <h2 id="news-related-title">继续阅读</h2>
            <Link to={`/resources/${item.category}`}>查看全部{categoryTitle}<Icon icon={ArrowRight} /></Link>
          </div>
          <div className="news-grid" ref={relatedRef}>
            {related.map((entry, index) => <NewsCard item={entry} index={index} key={entry.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsFigure({ images }: { images: NewsImage[] }) {
  return (
    <figure className={`news-figure${images.length > 1 ? ' is-group' : ''}`} style={{ '--figure-ratio': `${images[0].width} / ${images[0].height}` } as CSSProperties}>
      {images.map(image => <img key={image.src} src={image.src} srcSet={image.srcSet} sizes={image.srcSet ? '(max-width: 800px) calc(100vw - 40px), 720px' : undefined} width={image.width} height={image.height} alt={image.alt} loading="lazy" decoding="async" />)}
    </figure>
  );
}

function NewsVisual({ type }: { type: string }) {
  return (
    <div className="news-art" aria-hidden="true">
      <span className="news-art-label">FINLOOP / {type.replace('-', ' ').toUpperCase()}</span>
      <i className="news-art-line line-a" /><i className="news-art-line line-b" />
      <b className="news-art-orbit orbit-a" /><b className="news-art-orbit orbit-b" />
      <strong>{type === 'series-a' ? 'A' : type === 'award' ? '01' : type === 'hongkong' ? 'HK' : type === 'web5' ? 'W5' : 'FL'}</strong>
    </div>
  );
}
