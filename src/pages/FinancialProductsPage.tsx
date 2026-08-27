import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Blocks, Building2, ChevronRight, CircleDollarSign, createIcons, Gem, Landmark, Orbit, ShieldCheck, WalletCards } from 'lucide';

type FinancialProduct = { id: string; number: string; name: string; en: string; line: string; detail: string; tags: string[]; icon: string; audience?: string };

const products: FinancialProduct[] = [
  { id: 'cash', number: '01', name: '现金管理', en: 'Cash Management', line: '让日常流动性进入更清晰的配置与运营链路。', detail: '连接多币种货币基金与机构运营流程，支持企业与金融机构进行现金配置、申赎和资产查看。', tags: ['USD · HKD · CNH', '货币基金', '流动性管理'], icon: 'wallet-cards' },
  { id: 'public', number: '02', name: '公募基金', en: 'Public Funds', line: '连接全球基金产品与完整财富业务流程。', detail: '将基金产品、客户适当性、交易、持仓和运营连接在同一业务链路中。', tags: ['全球基金', '多管理人', '跨境场景'], icon: 'circle-dollar-sign' },
  { id: 'private', number: '03', name: '私募基金', en: 'Private Markets', line: '为专业投资者场景提供私募产品供给。', detail: '支持私募基金产品货架与机构业务流程，具体可售范围按主体、地区及适当性要求确认。', tags: ['专业投资者', '私募产品', '机构流程'], icon: 'gem' },
  { id: 'bonds', number: '04', name: '债券', en: 'Bonds', line: '连接固定收益产品数据、询价与交易能力。', detail: '覆盖产品信息、询价、订单与存续管理，为机构多资产配置提供连贯的业务路径。', tags: ['固定收益', '询价交易', '存续管理'], icon: 'landmark' },
  { id: 'structured', number: '05', name: '结构性产品', en: 'Structured Products', line: '多结构、多发行机构，覆盖零售与 PI 场景。', detail: '覆盖 FCN、Sharkfin、Step-down SCN、BEN、ELN、DCN 等多类结构，连接多家发行机构，为不同市场观点、风险偏好和配置需求提供更灵活的选择。', tags: ['FCN · ELN · DCN', '零售客户 / PI', '多发行机构'], icon: 'blocks', audience: '适用客群：零售客户 / 专业投资者（PI）' },
  { id: 'insurance', number: '06', name: '保险', en: 'Insurance', line: '补充保障与长期财富规划产品供给。', detail: '将保险纳入全品类财富产品货架，与基金、债券等产品形成不同财富需求的覆盖。保险展业及保单管理能力不在本页产品范围内。', tags: ['保障', '长期规划', '产品货架'], icon: 'shield-check' },
  { id: 'virtual', number: '07', name: '虚拟资产', en: 'Virtual Assets', line: '扩展机构数字资产投资产品供给。', detail: '连接虚拟资产 ETF 等合规投资产品，为适用机构提供传统金融之外的数字资产配置选择。KYT、钱包及出入金属于数字资产基础设施。', tags: ['VA ETF', '数字资产产品', '适用机构'], icon: 'orbit' },
  { id: 'rwa', number: '08', name: 'RWA', en: 'Real World Assets', line: '连接传统资产与链上数字化投资产品。', detail: '覆盖代币化基金、证券相关 Token 与真实资产支持型 RWA 产品；资产上链、钱包与分销基础设施由 FinRWA 解决方案承接。', tags: ['Tokenized Funds', 'Tokenized Securities', 'Asset-backed RWA'], icon: 'building-2' },
];

const productSellingPoints: Record<string, { title: string; copy: string }[]> = {
  cash: [
    { title: '多币种现金配置', copy: '连接 USD、HKD、CNH 等多币种货币基金，帮助机构丰富流动性管理选择。' },
    { title: '申赎流程一体化', copy: '将产品配置、申购赎回与资产查看接入机构现有业务流程。' },
    { title: '企业级运营支持', copy: '面向企业与金融机构的现金管理场景，支持产品与持续运营协同。' },
  ],
  public: [
    { title: '全球基金产品供给', copy: '连接不同市场、资产类别与基金管理人的公募基金产品。' },
    { title: '统一产品运营', copy: '集中管理产品资料、适当性、上下架与渠道展示，减少重复维护。' },
    { title: '交易持仓全链路', copy: '让基金交易、持仓、资产数据与持续服务进入同一业务链路。' },
  ],
  private: [
    { title: '专业投资者产品货架', copy: '围绕专业投资者场景组织私募基金产品供给与展示。' },
    { title: '机构流程协同', copy: '连接产品资料、适当性与机构内部运营流程，支持业务有序推进。' },
    { title: '多品类统一管理', copy: '让私募基金与公募、债券等产品在统一财富产品体系中运营。' },
  ],
  bonds: [
    { title: '固定收益产品连接', copy: '集中承载债券产品信息，为机构多资产配置扩展固定收益供给。' },
    { title: '询价与订单协同', copy: '连接产品数据、询价与订单流程，减少跨系统操作和信息断点。' },
    { title: '存续期持续管理', copy: '支持交易后的持仓查看与产品存续运营，保持业务链路连续。' },
  ],
  structured: [
    { title: '丰富产品结构', copy: '覆盖 FCN、Sharkfin、Step-down SCN、BEN、ELN、DCN 等多类结构。' },
    { title: '多发行机构连接', copy: '连接不同发行机构，帮助机构扩展结构性产品供给与选择。' },
    { title: '适配多元客户需求', copy: '围绕市场观点、风险偏好及适当性要求，服务零售与专业投资者场景。' },
  ],
  insurance: [
    { title: '补充保障类供给', copy: '在投资产品之外增加保障类产品，完善机构财富产品货架。' },
    { title: '支持长期财富规划', copy: '为客户长期保障与财富规划提供差异化产品选择。' },
    { title: '融入统一产品体系', copy: '与基金、债券等产品共同呈现和管理，形成更完整的产品覆盖。' },
  ],
  virtual: [
    { title: '数字资产产品扩展', copy: '连接虚拟资产 ETF 等产品，扩展传统财富之外的配置选择。' },
    { title: '面向适用机构接入', copy: '结合机构主体与适用范围，将数字资产产品接入现有财富业务。' },
    { title: '衔接数字资产基础设施', copy: '可进一步连接 KYT、钱包及出入金等数字资产基础设施能力。' },
  ],
  rwa: [
    { title: '多类型 RWA 产品', copy: '覆盖代币化基金、证券相关 Token 与真实资产支持型 RWA。' },
    { title: '连接传统与链上资产', copy: '帮助机构将传统资产产品与链上数字化产品纳入统一业务视野。' },
    { title: '完整基础设施衔接', copy: '可由 FinRWA 进一步承接资产上链、钱包、生命周期管理与分销能力。' },
  ],
};

const productBackgrounds: Record<string, string> = {
  cash: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=82)',
  public: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82)',
  private: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82)',
  bonds: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=82)',
  structured: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82)',
  insurance: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82)',
  virtual: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82)',
  rwa: 'url(https://images.unsplash.com/photo-1591719945186-73b666519516?auto=format&fit=crop&w=1800&q=82)',
};

const productFeatureImages: Record<string, string[]> = {
  cash: [productBackgrounds.cash, 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1800&q=82)'],
  public: [productBackgrounds.public, 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=82)'],
  private: [productBackgrounds.private, 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82)'],
  bonds: [productBackgrounds.bonds, 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=82)'],
  structured: [productBackgrounds.structured, 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82)'],
  insurance: [productBackgrounds.insurance, 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=82)'],
  virtual: [productBackgrounds.virtual, 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=82)'],
  rwa: [productBackgrounds.rwa, 'url(https://images.unsplash.com/photo-1671590733598-6dde3ba88d82?auto=format&fit=crop&w=1800&q=82)', 'url(https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1800&q=82)'],
};

const lifecycle = [
  ['产品接入', 'package-plus'],
  ['产品数据与管理', 'database'],
  ['筛选与配置', 'list-filter'],
  ['询价与交易', 'arrow-left-right'],
  ['清结算', 'badge-dollar-sign'],
  ['持仓管理', 'pie-chart'],
  ['报告与运营', 'file-chart-column'],
];

const productPanelVariants = {
  enter: (direction: 1 | -1) => ({ opacity: 0, y: direction * 54 }),
  center: { opacity: 1, y: 0 },
  exit: (direction: 1 | -1) => ({ opacity: 0, y: direction * -44 }),
};

const sellingPointVariants = {
  enter: (direction: 1 | -1) => ({ opacity: 0, y: direction * 34 }),
  center: { opacity: 1, y: 0 },
  exit: (direction: 1 | -1) => ({ opacity: 0, y: direction * -28 }),
};

export function FinancialProductsPage() {
  const [active, setActive] = useState(products[0]);
  const [sellingPointIndex, setSellingPointIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<1 | -1>(1);
  const productBrowserRef = useRef<HTMLDivElement>(null);
  const wheelLockedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    createIcons({ icons: { Blocks, Building2, ChevronRight, CircleDollarSign, Gem, Landmark, Orbit, ShieldCheck, WalletCards } });
  }, [active]);

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice(1);
      const match = products.find((product) => product.id === id);
      if (match) {
        setActive(match);
        setSellingPointIndex(0);
        window.requestAnimationFrame(() => document.getElementById('product-shelf')?.scrollIntoView({ block: 'start' }));
      }
    };
    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, []);

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? products.length - 1 : (index + direction + products.length) % products.length;
    setTransitionDirection(direction);
    setActive(products[nextIndex]);
    setSellingPointIndex(0);
    window.requestAnimationFrame(() => document.getElementById(`product-tab-${products[nextIndex].id}`)?.focus());
  }

  useEffect(() => {
    const browser = productBrowserRef.current;
    if (!browser) return;
    const handleWheel = (event: WheelEvent) => {
      if (window.matchMedia('(max-width: 800px)').matches) return;
      event.preventDefault();
      if (Math.abs(event.deltaY) < 12 || wheelLockedRef.current) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const activeIndex = products.findIndex((product) => product.id === active.id);
      let nextProductIndex = activeIndex;
      let nextPointIndex = sellingPointIndex + direction;
      if (nextPointIndex > 2) { nextProductIndex = Math.min(products.length - 1, activeIndex + 1); nextPointIndex = nextProductIndex === activeIndex ? 2 : 0; }
      if (nextPointIndex < 0) { nextProductIndex = Math.max(0, activeIndex - 1); nextPointIndex = nextProductIndex === activeIndex ? 0 : 2; }
      wheelLockedRef.current = true;
      setTransitionDirection(direction);
      if (nextProductIndex !== activeIndex) {
        setActive(products[nextProductIndex]);
        window.history.replaceState(null, '', `#${products[nextProductIndex].id}`);
      }
      setSellingPointIndex(nextPointIndex);
      window.setTimeout(() => { wheelLockedRef.current = false; }, 420);
    };
    browser.addEventListener('wheel', handleWheel, { passive: false });
    return () => browser.removeEventListener('wheel', handleWheel);
  }, [active, sellingPointIndex]);

  return (
    <main className="product-page" id="main">
      <section className="product-hero" data-header-theme="inverse">
        <img className="product-hero-image" src="/assets/financial-products-universe.png" alt="抽象的多资产连接网络与财富产品宇宙" />
        <div className="product-hero-scrim" />
        <div className="product-hero-content">
          <div className="product-hero-copy">
            <h1>连接多元财富产品，<br />构建完整财富货架</h1>
            <p>覆盖传统财富与数字资产产品，为金融机构、财富管理机构和企业客户提供多元化的产品供给。</p>
            <div className="product-hero-actions">
              <a className="button button-accent" href="#product-shelf">探索产品类别 <i data-lucide="arrow-right" /></a>
              <Link className="product-hero-link" to="/contact">预约咨询 <i data-lucide="arrow-right" /></Link>
            </div>
          </div>
          <div className="product-proof"><strong>8000+</strong><span>财富管理产品</span><small>具体范围与可售规则以上线时核验信息为准</small></div>
        </div>
      </section>

      <section className="product-shelf" id="product-shelf">
        <div className="product-shelf-head">
          <h2>覆盖多元投资需求的财富产品货架</h2>
          <p>选择产品类别，查看产品定位、覆盖范围与能力边界。从传统财富到数字资产，产品、访问交易能力和平台技术保持清晰分层。</p>
        </div>
        <div className="product-browser" ref={productBrowserRef}>
          <div className="product-tabs" role="tablist" aria-label="金融产品类别">
            {products.map((product, index) => {
              return <button id={`product-tab-${product.id}`} key={product.id} role="tab" tabIndex={active.id === product.id ? 0 : -1} aria-selected={active.id === product.id} aria-controls={`panel-${product.id}`} onClick={() => { const currentIndex = products.findIndex(item => item.id === active.id); setTransitionDirection(index >= currentIndex ? 1 : -1); setActive(product); setSellingPointIndex(0); }} onKeyDown={(event) => handleTabKeyDown(event, index)}><i data-lucide={product.icon} aria-hidden="true" /><b>{product.name}</b><i data-lucide="chevron-right" aria-hidden="true" /></button>;
            })}
          </div>
          <AnimatePresence mode="wait" initial={false} custom={transitionDirection}>
            <motion.article className="product-detail" key={active.id} id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`product-tab-${active.id}`} style={{ '--product-background': productBackgrounds[active.id] } as React.CSSProperties & { '--product-background': string }} custom={transitionDirection} variants={productPanelVariants} initial={reduceMotion ? false : 'enter'} animate="center" exit={reduceMotion ? undefined : 'exit'} transition={{ duration: reduceMotion ? 0 : .36, ease: [.22, 1, .36, 1] }}>
              <div className="product-detail-copy">
                <span className="product-category-label">{active.name}</span>
                <div className="product-selling-stage">
                  <AnimatePresence mode="wait" initial={false} custom={transitionDirection}>
                    <motion.div className="product-selling-point" key={sellingPointIndex} custom={transitionDirection} variants={sellingPointVariants} initial={reduceMotion ? false : 'enter'} animate="center" exit={reduceMotion ? undefined : 'exit'} transition={{ duration: reduceMotion ? 0 : .28, ease: [.22, 1, .36, 1] }}>
                      <div className="product-selling-text"><strong>{productSellingPoints[active.id][sellingPointIndex].title}</strong><p>{productSellingPoints[active.id][sellingPointIndex].copy}</p></div>
                      <div className="product-detail-image" aria-hidden="true"><div className="product-detail-image-frame" style={{ backgroundImage: productFeatureImages[active.id][sellingPointIndex] }} /></div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="product-selling-controls" aria-label={`${active.name}卖点轮播`}>{productSellingPoints[active.id].map((point,index)=><button type="button" key={point.title} className={index === sellingPointIndex ? 'active' : ''} onClick={() => { setTransitionDirection(index >= sellingPointIndex ? 1 : -1); setSellingPointIndex(index); }} aria-label={`查看${point.title}`} aria-current={index === sellingPointIndex ? 'step' : undefined}/>)}</div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="product-lifecycle">
        <div className="product-lifecycle-inner">
          <div className="product-lifecycle-copy"><h2>不止连接产品，更连接完整财富业务</h2><p>产品不是简单进入产品库，而是继续进入交易、资产和运营流程。</p></div>
          <ol>{lifecycle.map(([item, icon], index) => <li key={item}><span>0{index + 1}</span><i data-lucide={icon} aria-hidden="true" /><strong>{item}</strong></li>)}</ol>
        </div>
      </section>

      <section className="web-bridge">
        <div className="web-bridge-inner">
          <div className="web-bridge-copy"><h2>从传统财富产品延伸至数字资产</h2><p>让传统财富与数字资产产品在同一机构业务体系中连接。</p></div>
          <div className="web-column"><span>WEB2</span><h3>传统财富产品</h3><p>现金管理 · 公募基金 · 私募基金 · 债券 · 结构性产品 · 保险</p></div>
          <div className="web-core"><small>WEB5</small><strong>FINLOOP</strong><i data-lucide="move-right" aria-hidden="true" /></div>
          <div className="web-column"><span>WEB3</span><h3>数字资产产品</h3><p>Virtual Assets · Tokenized Funds · RWA</p></div>
        </div>
      </section>

      <section className="why-products">
        <div className="why-products-head"><h2>为什么通过星路连接财富产品</h2><p>从供给广度到业务落地，为机构产品采购与财富业务提供持续支撑。</p></div>
        <div className="why-product-grid">{[
          ['01', '丰富产品供给', '8000+ 财富产品，覆盖传统财富与数字资产。'],
          ['02', '多资产类别', '从现金管理到私募市场与 RWA，回应不同配置需求。'],
          ['03', '全球产品生态', '连接基金管理机构、银行、发行机构与数字资产生态。'],
          ['04', '跨境财富能力', '覆盖全球基金、多币种产品及跨境财富场景。'],
          ['05', '交易与技术支撑', '让产品继续进入账户、交易、清结算、资产与报告流程。'],
        ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="product-cta">
        <div className="product-cta-inner">
          <div><h2>构建适合您客户的财富产品货架</h2><p>无论您希望拓展传统财富产品、另类投资还是数字资产，Finloop 可以根据机构业务模式连接产品供给与财富科技能力。</p></div>
          <div className="product-cta-actions"><Link className="button button-light" to="/contact">预约咨询 <i data-lucide="arrow-right" /></Link><Link className="product-hero-link" to="/solutions">查看解决方案 <i data-lucide="arrow-right" /></Link></div>
        </div>
      </section>
    </main>
  );
}
