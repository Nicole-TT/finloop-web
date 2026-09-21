import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection, PlatformTrustSection } from '../components/PlatformProofSections';

function SectionHead({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="portal-section-head"><small>{label}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function PortalUI({ title, mode = 'table' }: { title: string; mode?: 'table' | 'quote' | 'order' }) {
  return <div className={`portal-ui portal-ui-${mode}`} aria-label={`${title}界面占位`}>
    <aside><b>WP</b>{[1, 2, 3, 4, 5].map(x => <i key={x} />)}</aside>
    <div className="portal-ui-main">
      <header><strong>{title}</strong><span /><span /></header>
      <div className="portal-ui-toolbar"><i /><i /><i /></div>
      <div className="portal-ui-grid">
        {[1, 2, 3, 4].map(row => <div key={row}><b /><span /><span /><span /><em /></div>)}
      </div>
    </div>
  </div>;
}

export function WebPortalPage() {
  return <main className="portal-page" id="main">
    <section className="portal-hero product-hero-standard" data-header-theme="inverse"><div className="portal-shell portal-hero-grid">
      <ProductHeroContent className="portal-hero-copy" category="WEB PORTAL · 机构产品与交易工作台" title="一站连接产品与交易" description="面向客户经理、投资顾问、交易员及运营人员，集中处理产品浏览、询价报价、订单执行与交易状态跟踪。" ctaLabel="预约产品演示"/>
      <div className="portal-hero-stage"><PortalUI title="Product & Trading Workspace" /><div className="portal-live"><i /> LIVE QUOTES</div><div className="portal-status">订单状态 <strong>EXECUTED</strong></div></div>
    </div></section>

    <section className="portal-reality portal-section"><div className="portal-shell"><SectionHead label="CONNECTED INSTITUTIONAL TRADING" title="让一笔交易在统一工作台持续推进" copy="Web Portal 将产品发现、询价、报价、订单、执行与后续运营连接起来，让团队围绕同一笔交易持续协作并保留完整上下文。" /><div className="portal-fragmented"><div className="portal-channels">{['产品信息', '机构询价', '报价比较', '订单形成', '交易执行', '后续运营'].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div><div className="portal-converge"><i /><i /><i /><strong>Web Portal</strong><span>一笔交易的完整上下文</span></div></div></div></section>

    <section className="portal-capability-intro"><div className="portal-shell"><SectionHead label="核心平台能力" title="连接产品与交易全流程" copy="Web Portal 将产品货架、询价报价和订单运营组织在连续工作流中，让产品与交易信息始终保持连接。" /></div></section>

    <section className="portal-products portal-section portal-capability-section"><div className="portal-shell"><div className="portal-product-layout"><div className="portal-product-copy"><SectionHead label="" title="快速找到合适产品" copy="统一组织传统金融与数字资产产品，让团队在一个工作台中浏览、筛选和比较产品，并直接进入询价或订单流程。" /><div className="portal-product-summary-points"><article><strong>覆盖多类金融产品</strong><p>连接现金管理、基金、债券、结构性产品、保险、虚拟资产及 RWA 等产品方向。</p></article><article><strong>根据业务灵活接入</strong><p>既可以建设完整产品货架，也可以先接入一个产品品类，再持续扩展。</p></article></div></div><PortalUI title="全品类产品货架" /></div></div></section>

    <section className="portal-rfq portal-section portal-capability-section"><div className="portal-shell"><div className="portal-feature-split"><PortalUI title="询价与报价记录" mode="quote" /><div className="portal-rfq-copy"><SectionHead label="" title="更快获得可执行报价" copy="围绕同一交易需求连接产品信息、机构询价与多方报价，并将选定报价继续带入订单流程。" /><div className="portal-rfq-points">{[['发起询价', '从产品或交易需求发起询价。'], ['比较报价', '集中查看与比较报价。'], ['保留交易上下文', '报价继续关联原始产品和需求。'], ['进入订单流程', '从报价直接进入订单流程。']].map(([t, p]) => <article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></div></section>

    <section className="portal-orders portal-section portal-capability-section"><div className="portal-shell"><div className="portal-order-stage"><div><SectionHead label="" title="全程掌握交易状态" copy="从订单形成、执行状态到成交后事件，产品、客户、条款、报价与关键时间节点持续保留在同一工作环境中。" /><div className="portal-order-points">{[['形成订单', '将选定报价带入订单流程。'], ['跟踪状态', '持续查看订单执行进度。'], ['查看记录', '保留产品、报价与操作信息。'], ['后续运营', '继续跟踪成交后关键事件。']].map(([title, pointCopy]) => <article key={title}><strong>{title}</strong><p>{pointCopy}</p></article>)}</div></div><PortalUI title="订单详情与时间线" mode="order" /></div></div></section>

    <PlatformTrustSection sectionClass="portal-section" shellClass="portal-shell" />
    <PlatformCasesSection sectionClass="portal-section" shellClass="portal-shell" title="他们都通过 Web Portal 连接产品与交易" copy="了解机构如何将产品、询价、报价、订单与交易状态带回一个专业工作台。" cases={[{mark:'场',name:'典型机构交易场景',type:'场景示例 · 非特定客户案例',copy:'围绕同一笔交易，连接产品发现、询价报价、订单执行与状态跟踪。',details:[['原有方式','询价与报价分散在邮件、即时通讯和人工表格中。'],['Web Portal 应用','将产品、询价、报价比较和订单执行连接到同一交易上下文。'],['业务变化','团队可以持续查看交易状态并衔接后续运营。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、原有业务方式、上线范围、流程变化与经确认的业务结果。',pending:true}]} />

    <section className="portal-cta"><div className="portal-shell"><h2>让您的团队更直接地<br />连接产品与交易</h2><p>了解 Web Portal 如何将产品发现、询价、订单和后续运营连接到一个专业工作台。</p><Link className="button button-light" to="/contact">预约 Web Portal 演示 →</Link></div></section>
  </main>;
}
