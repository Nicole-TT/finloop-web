import { t, translateNode } from '../i18n';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { companyNewsPreview, NewsCard } from './NewsPage';
import { motion, useScroll, useTransform } from 'motion/react';

const journey = [
  [
    "2024.06",
    "星路科技正式启航",
    "与多家香港头部机构签约，开启财富科技业务。"
  ],
  [
    "2024.12",
    "主办财富管理高峰论坛",
    "举办「Finloop 2025 财富管理高峰论坛」，香港特区政府财库局副局长等出席。"
  ],
  [
    "2025.04",
    "入选 OASES 重点企业伙伴",
    "获香港特区政府引进重点企业办公室认可，成为重点企业伙伴。"
  ],
  [
    "2025.07",
    "发布 Web5 战略与 FinRWA 平台",
    "融合 Web2 与 Web3 能力，推出一站式 RWA 技术、发行及分销平台 FRP。"
  ],
  [
    "2025.07",
    "完成近千万美元 A 轮融资",
    "Solana Foundation 等机构参投，支持 RWA 业务体系建设。"
  ],
  [
    "2025.09",
    "携手 BNY 投资管理推出利即达",
    "共同推出即时流动性方案 FinCycle，拓展现金管理服务。"
  ],
  [
    "2025.12",
    "FinRWA Platform 升级至 2.0",
    "发布 FRP 2.0，并主办「Web5 生态」行业峰会。"
  ],
  [
    "2026.03",
    "FUIDL 在香港首发上架",
    "星路美元即时数字流动性代币于香港合规持牌平台 EX.IO 上架。"
  ],
  [
    "2026.05",
    "FUIDL 进入新加坡市场",
    "通过 CapBridge 开展一级分销，并于 1exchange 提供二级市场交易。"
  ],
  [
    "2026.07",
    "FUIDL 上架 Bybit",
    "份额可用作平台交易抵押品，由 ByCustody 提供托管。"
  ],
  [
    "2026.08",
    "成为 HKDAP 首批认可分销商",
    "加入 Anchorpoint 发行的港元稳定币 HKDAP 分销网络，提供合规分销渠道及流动性支持。"
  ],
  [
    "2026.08",
    "FUIDL 上线 Conflux 网络",
    "星路 RWA 产品货架与 Conflux 完成全面对接。"
  ],
  [
    "2026.09",
    "拓展 Aberdeen 代币化分销合作",
    "成为 Aberdeen 全球私募市场策略的代币化分销商。"
  ],
  [
    "2026.09",
    "获汇丰参与 A+ 轮战略融资",
    "完成超千万美元融资，汇丰与 People’s Capital 参投。"
  ],
  [
    "2026.09",
    "推出企业财富管理服务星企通",
    "发布 Finterprise，为企业提供一站式财富管理服务。"
  ]
];

const leadershipProfiles = [
  { id: '01', name: '程康', role: '董事长 Chairman', bio: '拥有 30 年以上金融行业与资本市场高管经验；现任复星全球合伙人、复星财富执行董事兼 CEO，曾任德邦证券副总裁及瑞信中国债券市场部主管。', image: '/assets/chengkang.png' },
  { id: '02', name: '蔡华', role: '首席执行官 CEO', bio: '拥有 15 年以上金融科技与财富管理行业经验，曾任陆金所控股（LU.US）香港公司 CEO，历任云锋金融（0376.HK）及中国投资有限责任公司。', image: '/assets/about-leadership-cai-hua.png' },
  { id: '03', name: '赵洋', role: '副首席执行官 Deputy CEO', bio: '拥有近 15 年金融科技、财富管理与 IT 项目管理经验，曾任陆金所控股（LU.US）香港公司 COO，以及陆金所上海、新加坡公司金融产品部门负责人。', image: '/assets/about-leadership-zhao-yang.png' },
  { id: '05', name: '汤卓夫', role: '首席产品官 CPO', bio: '拥有 10 年以上量化投资、资产配置与产品筛选经验，曾任字节跳动、云锋金融财富管理与资管负责人，参与管理策略规模超百亿；曾任中银香港产品管理人。', image: '/assets/jeffery.png' },
];

const journeyImages = [
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=84',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=84',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=84',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=84',
];

export function AboutPage() {
  const [activeJourney, setActiveJourney] = useState(0);
  const journeyRefs = useRef<Array<HTMLElement | null>>([]);
  const journeySectionRef = useRef<HTMLElement | null>(null);
  const orderedJourney = [...journey].reverse();
  const { scrollYProgress } = useScroll({ target: journeySectionRef, offset: ['start 70%', 'end 30%'] });
  const journeyProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.journeyIndex);
          if (!Number.isNaN(index)) setActiveJourney(index);
        }
      });
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });
    journeyRefs.current.forEach(node => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = t('关于 Finloop 星路科技｜机构财富科技、RWA 与 AI');
    if (description) description.content = 'Finloop 星路科技总部位于香港，是复星财富控股旗下的机构财富科技平台，连接传统财富、机构交易、数字资产与 AI。';
    return () => { document.title = previousTitle; if (description && previousDescription) description.content = previousDescription; };
  }, []);

  return <main className="about-page" id="main">
    <section className="about-hero" data-header-theme="light">
      <div className="about-shell about-hero-grid"><div className="about-hero-copy"><h1>{t("连接财富、数字资产与 AI 的机构金融科技平台")}</h1><p>{t("Finloop 星路科技总部位于香港，为金融机构、数字平台和企业提供财富产品连接、数字化平台、投资交易、RWA 与 AI 解决方案。")}</p></div>
        <div className="about-hero-collage" aria-hidden="true"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt=""/><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt=""/><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85" alt=""/></div>
      </div>
    </section>

    <section className="about-intro about-section"><div className="about-shell about-intro-grid"><div><span className="about-index">01</span><h2>{t("为机构财富业务而构建的金融科技公司")}</h2></div><div className="about-intro-copy"><p>{t("星路金融科技控股有限公司是复星财富控股打造的 AI 驱动全球财富科技平台，融合 Web2 与 Web3 能力，为金融机构、企业及生态伙伴提供财富管理、数字资产与企业智能化解决方案。\n\n星路科技连接全球优质金融产品与服务资源，覆盖现金管理、基金、债券、结构性产品、保险及数字资产等领域，已服务超过 250 家银行、券商、支付平台、家族办公室及其他金融机构。\n\n依托财富管理平台、RWA 技术平台及自研金融 AI 能力，星路科技持续推动金融服务向智能化、数字化与开放生态演进，帮助合作伙伴提升运营效率、拓展产品能力，并连接全球财富管理新机遇。")}</p></div></div></section>

    <section className="about-ecosystem about-section"><div className="about-shell"><Heading light index="06" title={t("连接全球机构金融与财富生态")} /><div className="ecosystem-flow"><div><small>{t("产品与金融来源")}</small><p>{t("全球银行")}</p><p>{t("基金与资产管理机构")}</p><p>{t("产品发行与数字资产生态")}</p></div><div className="ecosystem-core"><small>{t("星路科技")}</small><strong>{t("财富科技")}<br/>{t("交易基础设施")}<br/>{t("AI 与 RWA")}</strong><span>{t("连接 8000+ 财富管理产品")}</span></div><div><small>{t("机构客户")}</small><p>{t("银行与券商")}</p><p>{t("财富机构与数字平台")}</p><p>{t("数字资产机构与企业")}</p></div></div></div></section>

    <section className="about-leadership about-section"><div className="about-shell"><Heading index="07" title={t("匠心领航，聚力同行")} /><div className="leadership-grid">{leadershipProfiles.filter(profile => profile.name !== '韦家谟').map(profile=><article className="leadership-card" key={profile.id}><figure><img src={profile.image} alt={t(`${profile.name}彩色人像`)} /></figure><div className="leadership-card-copy"><div className="leadership-identity"><h3>{translateNode(profile.name)}</h3><p>{translateNode(profile.role)}</p></div><blockquote>{translateNode(profile.bio)}</blockquote></div></article>)}</div></div></section>

    <section className="about-trust about-section" id="qualifications"><div className="about-shell"><Heading light index="08" title={t("以金融资质与行业认可，支撑机构级业务")} copy="Finloop 依托复星财富控股旗下持牌金融机构体系开展相关财富和金融科技业务，并持续获得香港政府、金融科技及专业投资行业的关注与认可。" /><div className="trust-grid"><article className="trust-license"><h3>{t("持牌金融基础")}</h3><p>{t("星路金融为香港证监会持牌法团。Finloop 依托复星财富控股旗下持牌金融机构体系，为机构财富、投资交易及相关金融服务提供合规基础设施支持。")}</p><div className="qualification-list"><div><b>Type 1</b><span>Dealing in Securities</span><small>{t("证券交易")}</small></div><div><b>Type 4</b><span>Advising on Securities</span><small>{t("就证券提供意见")}</small></div><div><b>Type 9</b><span>Asset Management</span><small>{t("资产管理")}</small></div></div></article><div className="recognition-grid">{translateNode([['2026.09','汇丰战略投资','汇丰参与星路科技 A+ 轮战略融资，共同推动全球财富科技与企业财富管理发展','/assets/hsbc-logo.svg'],['2025.03','ET Net 2024 金融科技大奖','杰出一站式数智化财富管理平台','https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1000&q=82'],['2025.11','Hong Kong ICT Awards 2025','金融科技类别大奖；新兴解决方案组别金奖','https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1000&q=82'],['2026.02','ITA 首届 RWA 全球峰会','香港最佳 RWA 金融科技机构','https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=82'],['2026.05','I&M 专业投资大奖 2026','年度最佳金融科技公司（Fintech Company of the Year）','https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=82'],['2026.06','HKMA/HKT 环球创新奖 2025/26','Excellence Award；最佳金融科技创新奖','https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=82']].map(x=><article key={x[1]}><img src={x[3]} alt={x[1] === "汇丰战略投资" ? "HSBC 汇丰 Logo" : t("奖杯展示占位图")}/><div><span>{translateNode(x[0])}</span><strong>{translateNode(x[1])}</strong><p>{translateNode(x[2])}</p></div></article>))}</div></div></div></section>

    <section ref={journeySectionRef} className="about-journey about-section"><div className="about-shell"><Heading index="09" title={t("Finloop 发展里程碑")} copy="记录从财富业务基础、核心系统建设，到 Web5、RWA 与 AI 能力拓展的关键节点。" /><div className="about-journey-layout"><figure><img key={activeJourney} className="journey-feature-image" src={journeyImages[activeJourney % journeyImages.length]} alt={t("Finloop 重要发展节点")}/></figure><div className="journey-list"><motion.span className="journey-progress" style={{height:journeyProgress}} />{translateNode(orderedJourney.map((x,i)=><article className={i === activeJourney ? 'is-active' : ''} key={`${x[0]}-${i}`} data-journey-index={i} ref={node => { journeyRefs.current[i] = node; }} onMouseEnter={() => setActiveJourney(i)} onFocus={() => setActiveJourney(i)}><span>{translateNode(x[0])}</span><div><h3>{translateNode(x[1])}</h3><p>{translateNode(x[2])}</p></div></article>))}</div></div></div></section>

    <section className="about-news about-section" id="company-news"><div className="about-shell">
      <div className="about-news-header"><Heading index="10" title={t("公司动态")} /><Link to="/resources/company">{t("查看全部")} <span aria-hidden="true">↗</span></Link></div>
      <div className="news-grid about-news-grid">{companyNewsPreview.map((item, index) => <NewsCard key={item.slug} item={{ ...item, category: 'company' }} index={index} />)}</div>
    </div></section>
  </main>;
}

function Heading({index,title,copy,light=false}:{index:string;title:string;copy?:string;light?:boolean}){return <div className={`about-heading${light?' light':''}`}><span className="about-index">{translateNode(index)}</span><h2>{translateNode(title)}</h2>{translateNode(copy&&<p>{translateNode(copy)}</p>)}</div>}
function Place({image,alt,label,city,text}:{image:string;alt:string;label:string;city:string;text:string}){return <article><img src={image} alt={t(alt)}/><div><span>{translateNode(label)}</span><h3>{translateNode(city)}</h3><p>{translateNode(text)}</p></div></article>}
