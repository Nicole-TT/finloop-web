import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection, PlatformTrustSection } from '../components/PlatformProofSections';

const coreFlow = ['企业开户与入金', '资金分类', '多样化产品货架', '产品选择与风评', '申购与持有', '资产查看与退出'];

const productShelf = [
  ['流动性管理', '货币基金、存款及公募基金', '满足企业日常流动性管理与不同周期的资金安排'],
  ['多资产配置', '私募基金、债券与票据', '根据期限、币种和风险收益特征提供更多配置选择'],
  ['数字资产', '虚拟资产与稳定币', '面向适用企业与投资者连接数字资产相关产品场景'],
];

const keyScenes = [
  { title: '企业开户与入金', copy: '在线提交企业资料、连接企业银行账户，并集中处理投资相关资金转入。', variant: 'overview', points: ['企业资料提交', '账户审核', '绑卡与入金'] },
  { title: '现金管理与投资', copy: '根据资金用途、预计使用时间和风险要求，从多样化产品货架中查看适用选择，完成风险测评、申购与赎回。', variant: 'products', points: ['多品类产品货架', '美元、港币与人民币', '产品筛选与在线申赎'] },
  { title: '资产与资金记录', copy: '持续查看可用资金、投资资产、交易记录和资金明细，掌握近期变化。', variant: 'records', points: ['资产总览', '持仓与交易', '资金明细'] },
];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <header className="xqn-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function PlaceholderUI({ title, variant = 'overview' }: { title: string; variant?: string }) {
  return <div className={`xqn-placeholder-ui is-${variant}`} role="img" aria-label={`${title}产品界面占位示意`}>
    <aside><b>星</b>{[1, 2, 3, 4, 5].map(item => <i key={item} />)}</aside>
    <div><header><strong>{title}</strong><span>界面占位示意</span></header><section>{[1, 2, 3].map(item => <i key={item} />)}</section><main><div>{[1, 2, 3, 4].map(item => <span key={item} />)}</div><figure>{[1, 2, 3, 4, 5, 6].map(item => <i key={item} />)}</figure></main></div>
  </div>;
}

export function XingQiTongNewPage() {
  const [activeScene, setActiveScene] = useState(0);

  return <main className="xqn-page" id="main">
    <section className="xqn-hero product-hero-standard" data-header-theme="inverse">
      <div className="xqn-shell xqn-hero-grid">
        <ProductHeroContent className="xqn-hero-copy" category="星企通 · 企业现金与财富管理平台" title="一个平台，连接企业现金、投资与资产" description="将企业开户、资金操作、现金管理、投资交易与资产信息连接到统一平台，帮助财务团队更清楚地掌握资金状态。" ctaLabel="预约星企通演示" />
        <div className="xqn-hero-stage" aria-label="星企通企业资产总览示意">
          <div className="xqn-hero-orbit one" /><div className="xqn-hero-orbit two" />
          <figure><PlaceholderUI title="企业资产总览" /></figure>
          <div className="xqn-hero-result"><span>资金状态</span><span>流动性管理</span><span>投资与资产</span></div>
        </div>
      </div>
    </section>

    <section className="xqn-reality xqn-section">
      <div className="xqn-shell xqn-reality-grid">
        <SectionHead title="中小企业现金管理的四个核心痛点" copy="传统投资工具利率差异、资金利用效率不高，加上现金管理成本和系统能力限制，使企业难以同时兼顾潜在收益与流动性。" />
        <div className="xqn-fragments" aria-label="中小企业现金管理核心痛点">
          {['传统投资工具利率差异', '资金利用效率低下', '现金管理复杂且成本高', '技术和系统支持不足'].map((item, index) => <span key={item} style={{ '--i': index } as React.CSSProperties}>{item}</span>)}
          <strong>企业现金管理难题</strong>
        </div>
      </div>
    </section>

    <section className="xqn-scenes xqn-section">
      <div className="xqn-shell">
        <SectionHead title="三个关键场景，覆盖日常企业资金任务" copy="围绕企业最常进行的开户入金、现金管理与投资、资产记录查看组织产品能力。" />
        <div className="xqn-scenes-layout">
          <div className="xqn-scene-tabs" role="tablist" aria-label="星企通关键业务场景">{keyScenes.map((item, index) => <button type="button" role="tab" aria-selected={activeScene === index} onClick={() => setActiveScene(index)} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p><div>{item.points.map(point => <b key={point}>{point}</b>)}</div></button>)}</div>
          <div className="xqn-scene-screen" role="tabpanel"><PlaceholderUI key={keyScenes[activeScene].variant} title={keyScenes[activeScene].title} variant={keyScenes[activeScene].variant} /></div>
        </div>
        <p className="xqn-product-note">具体产品、币种、流动性、风险及功能开放范围以实际产品条款与项目配置为准。</p>
      </div>
    </section>

    <section className="xqn-shelf xqn-section">
      <div className="xqn-shell">
        <SectionHead title="一站连接多类企业投资产品" copy="产品货架按企业资金用途组织，让财务团队更快理解不同产品适合解决什么资金需求。" />
        <div className="xqn-product-shelf">
          <div>{productShelf.map(([title, products, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><strong>{products}</strong><p>{copy}</p></article>)}</div>
          <footer><span>覆盖美元、港币与人民币相关产品场景</span><span>具体产品范围、适用对象与交易安排以实际产品条款为准</span></footer>
        </div>
      </div>
    </section>

    <section className="xqn-invest-value xqn-section">
      <div className="xqn-shell xqn-invest-value-grid">
        <SectionHead title="让企业资金投资更集中、更灵活" copy="星企通将企业日常资金管理与投资操作连接起来，并通过不同流动性和风险特征的产品，支持企业更精细地安排资金。" />
        <div>{[
          ['企业一站式服务', '集中连接现金管理、企业账户、产品投资与资产记录，减少在多个渠道之间重复操作。'],
          ['兼顾流动性与潜在回报', '根据企业资金预计使用时间查看适用产品，在关注流动性的同时，力求提升闲置资金的使用效率。'],
        ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="xqn-core-flow xqn-section">
      <div className="xqn-shell">
        <SectionHead title="一条流程，连接企业资金管理全程" copy="从建立企业账户、安排资金用途，到选择产品、完成投资和持续查看资产，让每一步都保留在同一个业务上下文中。" />
        <div className="xqn-core-flow-rail" aria-label="星企通企业资金管理核心流程">{coreFlow.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < coreFlow.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div>
        <div className="xqn-core-flow-summary"><span>企业资金</span><b>统一账户 · 统一流程 · 统一记录</b><span>持续资产管理</span></div>
      </div>
    </section>

    <PlatformTrustSection sectionClass="xqn-section" shellClass="xqn-shell" />
    <PlatformCasesSection sectionClass="xqn-section" shellClass="xqn-shell" title="客户案例" copy="了解企业如何通过星企通连接资金状态、现金管理、投资交易与资产查询。" cases={[{mark:'星',name:'典型企业资金管理场景',type:'场景示例 · 非特定客户案例',copy:'通过统一企业资金视图，连接阶段性闲置资金的管理、投资与后续查询。',details:[['原有方式','银行账户、投资平台和人工表格分散管理。'],['星企通应用','集中查看资金状态，并连接风险测评、申购、赎回与资产查询。'],['业务变化','让企业资金与投资状态回到同一平台持续管理。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、原有管理方式、上线范围、流程变化与已确认的业务结果。',pending:true}]} />

    <section className="xqn-cta f1-cta"><div className="xqn-shell"><h2>更清楚地管理企业现金与投资</h2><p>从企业开户和资金操作，到现金管理、投资与资产查询，星企通将分散的资金管理流程连接到一个数字平台。</p><div><Link className="button button-light" to="/contact">预约星企通演示 →</Link></div></div></section>
  </main>;
}
