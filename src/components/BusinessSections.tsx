import React, { useEffect, useState } from 'react';

const assetContent: Record<string, [string, string, string, string]> = {
  cash: ['企业流动性与现金管理', '连接多币种货币基金与机构运营流程，支持企业与金融机构进行现金配置、申赎和资产查看。', 'USD · HKD · CNH', '产品范围与规则以上线时核验信息为准'],
  fund: ['连接全球公募基金产品', '将基金产品、客户适当性、交易、持仓和运营连接在同一业务链路中。', 'GLOBAL FUNDS', '覆盖多类基金产品与管理人'],
  private: ['专业投资者产品服务', '支持私募基金产品货架与机构业务流程，具体可售范围按主体和地区确认。', 'PRIVATE MARKETS', '仅面向符合条件的专业投资者'],
  bond: ['固定收益产品与交易能力', '连接债券产品数据、询价、订单与存续管理，服务机构多资产配置场景。', 'FIXED INCOME', '市场、币种与起投规则以实际产品为准'],
  structured: ['从询价到存续管理', '覆盖结构性产品 RFQ、报价、订单及后续管理环节。', 'RFQ → ORDER', '具体产品和适用客户以持牌主体确认为准'],
  insurance: ['保险产品货架与运营', '区分保险产品供给与面向保险机构的科技解决方案，连接产品、渠道和服务流程。', 'PRODUCT · SERVICE', '具体服务范围以适用主体为准'],
  virtual: ['虚拟资产产品与服务', '连接虚拟资产产品、机构账户与交易流程，支持适用机构拓展数字资产业务。', 'VIRTUAL ASSETS', '具体服务范围以适用主体为准'],
  rwa: ['传统资产与数字基础设施', '连接 Tokenization、链上部署、持份管理、钱包、KYT 与分销流程。', 'ASSET → TOKEN', '覆盖资产上链与机构分销流程'],
};

const assetTabs: Array<[string, string]> = [
  ['cash', '现金管理'], ['fund', '公募基金'], ['private', '私募基金'],
  ['bond', '债券'], ['structured', '结构性产品'], ['insurance', '保险'],
  ['virtual', '虚拟资产'], ['rwa', 'RWA'],
];

export function HeroSection() {
  return (
    <section className="hero" data-header-theme="inverse" aria-label="金融团队协作场景">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">WEB2 × WEB3 × AI</p>
          <h1>AI 驱动的<br />全球一站式 Web5 财富科技平台</h1>
          <p>连接传统金融、数字资产与 AI，为金融机构、数字平台及企业提供覆盖财富管理、交易、RWA 与智能化业务的科技能力。</p>
          <div className="hero-actions">
            <a className="button button-accent" href="#architecture">探索产品与平台 <i data-lucide="arrow-right"></i></a>
            <a className="text-link" href="#contact">预约咨询 <i data-lucide="arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoverageSection() {
  const [activeAsset, setActiveAsset] = useState('cash');

  return (
    <section className="coverage section-pad" id="coverage">
      <div className="coverage-header">
        <div><h2>覆盖多元投资需求的财富产品货架</h2>
          <p>连接现金管理、公募基金、私募基金、债券、结构性产品、保险、虚拟资产与 RWA 等产品类别，为不同客户与资产配置场景提供多元选择。</p>
        </div>
        <a className="coverage-overview-link" href="/products">查看全部金融产品 <i data-lucide="arrow-right"></i></a>
      </div>

      <div className="product-universe" data-active={activeAsset}>
        <div className="product-globe" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
        <div className="product-orbits" aria-hidden="true"><i></i><i></i><i></i></div>
        <div className="product-nodes" aria-label="金融产品类别">
          {assetTabs.map(([id, label], index) => (
            <button
              type="button"
              key={id}
              className={`product-node node-${index + 1}${activeAsset === id ? ' active' : ''}`}
              aria-pressed={activeAsset === id}
              onClick={() => setActiveAsset(id)}
              onMouseEnter={() => setActiveAsset(id)}
              onFocus={() => setActiveAsset(id)}
            >
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <div><p>{assetContent[id][1]}</p><small>{assetContent[id][2]}</small></div>
            </button>
          ))}
        </div>
        <a className="product-universe-entry" href="/products">进入金融产品总览 <i data-lucide="arrow-right"></i></a>
      </div>
    </section>
  );
}

type SolutionItem = [string, string, string];

const solutionImages: Record<string, { src: string; alt: string }> = {
  wealth: {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82',
    alt: '财富与资产管理团队协作场景',
  },
  broker: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=82',
    alt: '证券与经纪机构办公建筑',
  },
  bank: {
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=82',
    alt: '银行数字金融服务场景',
  },
  platform: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    alt: '支付与数字平台的数据界面',
  },
  digital: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    alt: '数字资产技术基础设施',
  },
  enterprise: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业财富管理协作空间',
  },
  'fde-ai': {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业 AI 落地项目协作场景',
  },
};

export function SolutionsSection({ items }: { items: SolutionItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.[0] ?? '');
  const activeIndex = Math.max(0, items.findIndex(([id]) => id === activeId));
  const activeItem = items[activeIndex] ?? items[0] ?? ['', '', ''];
  const activeImage = solutionImages[activeItem[0]] ?? solutionImages.wealth;

  useEffect(() => {
    if (items.length < 2) return undefined;
    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      setActiveId(items[nextIndex][0]);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [activeId, activeIndex, items]);

  return (
    <section className="solutions section-pad" id="solutions">
      <div className="solution-showcase">
        <div className="solution-copy">
          <div className="solution-heading">
            <h2>面向不同机构，构建适配的财富科技方案</h2>
            <p>围绕财富与资产管理机构、证券及经纪机构、银行及金融机构、支付与数字平台、数字资产机构和企业客户的业务场景组合对应能力。</p>
          </div>
          <div className="solution-accordion">
            {items.map(([id, name, desc], index) => {
              const isActive = activeId === id;
              return (
                <article
                  className={`solution-option${isActive ? ' active' : ''}`}
                  key={id}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`solution-detail-${id}`}
                    onClick={() => setActiveId(id)}
                  >
                    <span>0{index + 1}</span>
                    <strong>{name}</strong>
                    <i aria-hidden="true">{isActive ? '−' : '+'}</i>
                  </button>
                  <div className="solution-option-detail" id={`solution-detail-${id}`} aria-hidden={!isActive}>
                    <p>{desc}</p>
                    <a href={`/solutions/${id}`}>了解方案 <i data-lucide="arrow-right"></i></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <figure className="solution-media">
          <img key={activeItem[0]} src={activeImage.src} alt={activeImage.alt} />
          <figcaption>
            <span>0{activeIndex + 1}</span>
            <strong>{activeItem[1]}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
