import { Link, Navigate, useParams } from 'react-router-dom';

type NewsCategory = 'insights' | 'company';

type NewsItem = {
  slug: string;
  title: string;
  description: string;
  meta: string;
  visual: string;
  image?: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
};

const news: Record<NewsCategory, NewsItem[]> = {
  insights: [
    article('wealth-technology-core', '机构财富科技：从业务应用到财富核心', '梳理业务应用、账户产品、交易运营与底层基础设施之间的连接关系。', '财富科技 · 专题导读', 'architecture', [['财富业务需要一条连续链路', '机构财富业务并不只发生在客户看到的应用界面。客户准入、账户、产品、订单、交易、持仓与持续运营需要被连接到同一条业务链路中。'], ['财富核心承担统一连接', '财富核心用于沉淀账户、产品、交易与资产等基础能力，让不同前端应用可以复用一致的数据和业务规则。'], ['从平台能力回到业务结果', '完整的技术体系需要服务于更快的产品接入、更清晰的运营协作和可持续扩展的机构业务。']]),
    article('rwa-lifecycle', 'RWA 不只是上链：理解发行与分销全链路', '从资产上线、Tokenization、持份管理到机构分销，认识 RWA 体系的关键环节。', 'RWA · 专题导读', 'rwa', [['RWA 是一套协作体系', 'RWA 项目通常涉及发行人、技术服务、托管、合规及分销等不同角色，资产上链只是完整流程中的一个环节。'], ['从资产到可运营产品', '完整链路需要连接产品设计、Tokenization、链上部署、持份管理以及后续的交易与运营流程。'], ['机构分销需要传统金融能力', '面向机构的 RWA 服务仍需要账户、适当性、订单、清结算与持续管理能力，并明确不同主体的服务边界。']]),
    article('ai-financial-workflow', 'AI 如何进入真实的金融工作流', '围绕产品尽调、资料分析、风险预警和任务协同，观察 AI 在金融业务中的落地方式。', '人工智能 · 专题导读', 'ai', [['从单点问答进入任务流程', '金融业务中的 AI 不应只停留在生成文本，还需要连接资料、权限、任务以及可追溯的业务过程。'], ['专业场景需要专业上下文', '产品尽调、GAP 分析、风险预警和竞品洞察等任务依赖持续更新的资料与明确的判断边界。'], ['人机协作仍是核心', 'AI 可以辅助信息整理和分析，但重要判断、客户沟通与受监管流程仍需要由具备相应职责的人员完成。']], '/官网资料/FinOne UI图/AI资讯.png'),
    article('digital-cash-management', '企业现金管理的数字化连接方式', '从多币种现金配置、账户管理到资产查看，理解企业资金管理平台的能力边界。', '现金管理 · 专题导读', 'liquidity', [['看见分散的资金状态', '企业资金可能分布在不同账户、币种与产品中，数字化平台首先需要形成统一、清晰的资产视图。'], ['连接配置与运营流程', '平台可将账户管理、现金配置、申赎及资产查看连接起来，减少信息在不同系统间重复流转。'], ['产品规则需要持续核验', '具体产品范围、币种、流动性安排与适用客户，应以实际接入产品及相关主体确认的信息为准。']]),
    article('open-wealth-connectivity', '开放连接如何拓展机构财富业务', '通过 API、交易基础设施与产品网络，让既有平台承接新的财富服务场景。', '开放金融 · 专题导读', 'network', [['开放能力不是单一接口', 'API 需要与账户、产品、交易、清结算和权限体系共同工作，才能承接完整业务。'], ['保留机构既有体验', '通过可组合的技术能力，机构可以在现有渠道中逐步加入财富服务，而不必一次性重建全部系统。'], ['清晰边界支持持续扩展', '接入范围、部署方式和运营责任需要在项目中明确，并根据机构现有架构逐步推进。']]),
    article('web5-combination', 'Web2、Web3 与 AI 的组合逻辑', '以机构财富业务为主线，理解传统金融、数字资产和智能化能力如何协同。', '行业观察 · 专题导读', 'web5', [['以机构财富业务为主线', 'Web2、Web3 与 AI 并不是三条割裂的叙事，组合的起点仍然是客户、账户、产品、交易与运营。'], ['数字资产延展产品边界', 'RWA 与数字资产基础设施让传统资产获得新的技术表达和流转方式，同时仍需连接机构金融流程。'], ['AI 横向进入各业务层', 'AI 可以作用于资料、研究、风险和运营，但需要在权限、安全与审计框架下运行。']]),
  ],
  company: [
    article('series-a-financing', 'Finloop 完成 Series A 融资', '现有资料记录公司于 2025 年 7 月完成 Series A 融资，相关金额与完整投资方信息以上线前核验为准。', '融资进展 · 2025 年 7 月', 'series-a', [['支持 RWA 业务体系建设', '现有资料显示，本轮融资资金用途包括建设和增强新的 RWA 业务体系。'], ['持续连接机构财富与数字资产', 'Finloop 以机构财富科技能力为基础，持续推进财富核心、交易基础设施与数字资产能力的连接。'], ['信息说明', '融资金额、完整投资方名单、公告链接与融资主体仍需在正式发布前完成核验。']]),
    article('oases-recognition', 'Finloop 获 OASES 相关认可', '现有资料记录 Finloop 于 2025 年 4 月获得香港特区政府引进重点企业办公室相关认可。', '公司里程碑 · 2025 年 4 月', 'hongkong', [['扎根香港发展', 'Finloop 总部位于香港，服务金融机构、数字平台及企业客户。'], ['持续建设机构财富科技能力', '公司围绕财富管理、交易、RWA 与 AI 建设面向机构业务的组合式技术平台。'], ['信息说明', 'OASES 的正式中英文称谓、相关主体及图片和标识授权仍需在正式发布前复核。']]),
    article('ict-awards-2025', 'Finloop 获香港 ICT Awards 2025 相关奖项', '现有公司资料记录该项市场认可，正式奖项名称及获奖主体仍待上线前复核。', '市场认可 · 2025 年', 'award', [['市场认可', '现有公司资料记录 Finloop 获得香港 ICT Awards 2025 金融科技类别相关奖项。'], ['技术与业务结合', 'Finloop 持续将财富业务能力与数字化平台、交易基础设施、RWA 和 AI 相连接。'], ['信息说明', '正式奖项名称、奖项等级、主办方表述与获奖主体应以上线前核验信息为准。']]),
    article('asia-pacific-rwa', 'Finloop 推进亚太 RWA 研究与生态合作', '围绕 RWA 研究、投资者教育与区域生态连接，持续推进数字资产机构合作。', '生态合作 · 2026 年 7 月', 'research', [['连接区域 RWA 生态', 'Finloop 围绕亚太市场持续关注 RWA 研究、投资者教育与机构生态协作。'], ['从研究进入业务连接', '研究与生态合作可为资产上线、技术实施、机构分销和市场教育提供共同语境。'], ['合作边界', '具体合作机构、合作性质与项目成果应以双方正式公开信息为准。']]),
    article('web5-platform-progress', 'Finloop 持续建设 Web5 财富科技平台', '连接财富核心、交易基础设施、AI 与数字资产能力，为机构业务提供组合式技术支持。', '业务进展 · 公司动态', 'platform', [['一套持续延展的平台体系', 'Finloop 的平台体系由业务应用、财富核心、交易基础设施、AI 与 RWA 能力共同构成。'], ['服务多类机构客户', '平台面向金融机构、数字平台与企业客户，根据不同业务场景组合产品与技术能力。'], ['保持开放连接', '通过平台和 API 与机构既有系统、产品网络及数字资产生态连接。']]),
    article('hong-kong-shanghai', 'Finloop 香港与上海双中心运营', '公司资料显示 Finloop 总部位于香港，并形成香港、上海双中心运营布局。', '公司动态 · 运营布局', 'offices', [['香港总部', 'Finloop 总部位于香港，连接当地及国际金融与科技生态。'], ['上海运营', '上海团队与香港总部共同支持产品、技术和客户服务工作。'], ['协同服务机构客户', '双中心运营布局用于支持 Finloop 面向不同市场的机构财富科技业务。']]),
  ],
};

function article(slug: string, title: string, description: string, meta: string, visual: string, sections: Array<[string, string]>, image?: string): NewsItem {
  return {
    slug,
    title,
    description,
    meta,
    visual,
    image,
    sections: sections.map(([sectionTitle, paragraph]) => ({ title: sectionTitle, paragraphs: [paragraph] })),
  };
}

const categoryCopy = {
  insights: { title: '行业洞察', description: '聚焦财富科技、RWA、人工智能与企业现金管理，分享面向机构业务的观察与方法。' },
  company: { title: '公司动态', description: '了解 Finloop 的业务进展、市场认可、生态合作与重要里程碑。' },
};

export function ResourcesRedirect() {
  return <Navigate replace to="/resources" />;
}

export function NewsPage() {
  const active: NewsCategory = 'company';
  const copy = categoryCopy.company;

  return (
    <main className="news-page" id="main">
      <header className="news-hero" data-header-theme="inverse">
        <div className="news-shell">
          <div className="news-hero-copy">
            <h1>新闻资讯</h1>
            <p>持续记录 Finloop 的业务进展、市场认可、生态合作与重要里程碑。</p>
          </div>
        </div>
      </header>

      <section className="news-index" aria-labelledby="news-category-title">
        <div className="news-shell">
          <div className="news-heading">
            <h2 id="news-category-title">{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
          <div className="news-grid">
            {news[active].map((item) => (
              <Link className="news-card" key={item.title} to={`/resources/${item.slug}`}>
                <div className={`news-media news-media-${item.visual}`}>
                  {item.image ? <img alt={`${item.title}相关产品界面`} src={item.image} /> : <NewsVisual type={item.visual} />}
                </div>
                <div className="news-card-copy">
                  <span>{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="news-note">公司动态中的奖项、合作与融资信息采用现有资料口径，正式发布前仍需完成对应事实与授权核验。</p>
        </div>
      </section>
    </main>
  );
}

export function NewsDetailPage() {
  const { slug } = useParams();
  const item = news.company.find(entry => entry.slug === slug);
  if (!item) return <Navigate replace to="/resources" />;
  const related = news.company.filter(entry => entry.slug !== item.slug).slice(0, 2);

  return <main className="news-detail-page" id="main">
    <header className="news-detail-hero" data-header-theme="inverse">
      <div className="news-detail-shell">
        <Link className="news-detail-back" to="/resources">← 返回公司动态</Link>
        <span>{item.meta}</span>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </header>
    <div className="news-detail-shell news-detail-layout">
      <aside><span>FINLOOP INSIGHTS</span><p>面向机构财富科技业务的观察与公司信息记录。</p></aside>
      <article className="news-detail-body">
        <div className={`news-detail-cover news-media-${item.visual}`}>
          {item.image ? <img alt={`${item.title}相关产品界面`} src={item.image} /> : <NewsVisual type={item.visual} />}
        </div>
        {item.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <div className="news-detail-disclaimer"><strong>内容说明</strong><p>本文根据项目现有资料整理，仅用于官网内容展示，不构成投资建议、产品要约或对任何服务范围的承诺。相关业务与事实信息以正式发布及适用主体确认为准。</p></div>
      </article>
    </div>
    <section className="news-related"><div className="news-detail-shell"><div className="news-related-head"><h2>继续阅读</h2><Link to="/resources">查看全部 →</Link></div><div className="news-related-grid">{related.map(entry => <Link key={entry.slug} to={`/resources/${entry.slug}`}><span>{entry.meta}</span><h3>{entry.title}</h3><p>{entry.description}</p></Link>)}</div></div></section>
  </main>;
}

export function LegacyNewsDetailRedirect() {
  const { category, slug } = useParams();
  return <Navigate replace to={category === 'company' && slug ? `/resources/${slug}` : '/resources'} />;
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
