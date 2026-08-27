import { Link } from 'react-router-dom';

const journey = ['现有 App', '财富入口', '账户', '产品浏览', '风险 / 合规', '申购 / 投资', '资产', '持续服务'];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="platform-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, variant }: { title: string; variant: 'products' | 'account' | 'data' }) {
  return <div className={`platform-ui platform-ui-${variant}`} role="img" aria-label={`${title}灰色界面占位`}>
    <header><i /><strong>{title}</strong><span /></header>
    <div className="platform-ui-body">
      <aside>{[1, 2, 3, 4].map(i => <i key={i} />)}</aside>
      <div className="platform-ui-canvas">
        <div className="platform-ui-metrics">{[1, 2, 3].map(i => <i key={i} />)}</div>
        <div className="platform-ui-content"><section>{[1, 2, 3, 4].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</figure></div>
      </div>
    </div>
  </div>;
}

export function PlatformSolutionPage() {
  return <main className="platform-page" id="main">
    <section className="platform-hero" data-header-theme="inverse">
      <div className="platform-shell platform-hero-grid">
        <div className="platform-hero-copy">
          <p className="platform-label">PAYMENT &amp; DIGITAL PLATFORMS</p>
          <h1>让财富服务成为您现有平台的一部分</h1>
          <p>无需重新建设完整财富系统，通过产品、账户、投资和运营能力，将财富服务嵌入您已经拥有的数字用户场景。</p>
          <div className="platform-actions"><a className="button button-accent" href="#journey">探索 Embedded Wealth →</a><Link to="/contact">讨论平台合作 →</Link></div>
        </div>
        <div className="platform-hero-visual" aria-label="Embedded Wealth 嵌入现有数字平台示意">
          <div className="platform-device"><small>YOUR EXPERIENCE</small><strong>您的 App</strong><div><i /><i /><i /></div></div>
          <div className="platform-embed"><span>EMBEDDED</span><strong>Wealth</strong><small>PRODUCT · ACCOUNT · INVESTMENT</small></div>
        </div>
      </div>
    </section>

    <section className="platform-section platform-white"><div className="platform-shell">
      <SectionHead title="当用户已经在您的平台中，财富服务可以成为新的连接" copy="在既有用户关系和数字体验中加入财富入口，让金融服务自然延伸到更多需求与场景。" />
      <div className="platform-opportunities">{[
        ['01','提升用户价值','让用户在同一平台完成更多金融需求。'],
        ['02','延长用户关系','从支付与日常服务延伸到财富场景。'],
        ['03','拓展业务空间','为平台形成新的金融服务模式。'],
      ].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="platform-section platform-journey-section" id="journey"><div className="platform-shell">
      <SectionHead title="不离开原有平台，也能进入投资体验" copy="从财富入口到持续服务，用户旅程仍然发生在平台熟悉的品牌与业务场景中。" />
      <div className="platform-journey">{journey.map((item,i)=><article className={i===0?'origin':i===1?'active':''} key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong>{i<journey.length-1&&<i aria-hidden="true">→</i>}</article>)}</div>
    </div></section>

    <section className="platform-section"><div className="platform-shell">
      <SectionHead title="把财富能力加入平台，同时保留原有体验" />
      <div className="platform-outcomes">{[
        ['01','ADD WEALTH','增加财富能力','在既有产品与用户体系中增加财富服务入口。'],
        ['02','KEEP YOUR EXPERIENCE','保持品牌体验','保留平台自己的品牌、交互与用户关系。'],
        ['03','AVOID REBUILDING','避免重建底座','无需从零建设账户、产品和交易基础设施。'],
      ].map(([n,en,t,p])=><article key={n}><span>{n}</span><small>{en}</small><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="platform-section platform-white" id="capabilities"><div className="platform-shell">
      <SectionHead title="一套可嵌入的财富服务能力" copy="围绕产品、账户、交易与数据连接，按平台现有架构组合所需能力。" />
      <div className="platform-capability"><div className="platform-capability-copy"><span>01</span><small>PRODUCT EXPERIENCE</small><h3>财富产品嵌入</h3><p>连接财富产品货架、产品数据、产品展示与投资流程。</p><div>{['产品货架','产品数据','产品展示','投资流程'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="财富产品体验" variant="products" /></div>
      <div className="platform-capability reverse"><div className="platform-capability-copy"><span>02</span><small>ACCOUNT &amp; TRANSACTION</small><h3>账户与交易服务</h3><p>支撑用户从账户进入投资、订单与资产的连续业务路径。</p><div>{['账户','投资','订单','资产'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="账户与交易服务" variant="account" /></div>
      <div className="platform-capability"><div className="platform-capability-copy"><span>03</span><small>WEALTH DATA</small><h3>财富数据连接</h3><p>将产品、交易、持仓与资产状态连接回原有平台体验。</p><div>{['产品','交易','持仓','资产状态'].map(x=><i key={x}>{x}</i>)}</div></div><GreyUI title="财富数据连接" variant="data" /></div>
    </div></section>

    <section className="platform-section platform-stack-section"><div className="platform-shell">
      <SectionHead title="Powered by Finloop" copy="从平台前端体验到财富核心、交易运营与产品生态，形成清晰的嵌入式能力分层。" />
      <div className="platform-stack">{[
        ['Your App','品牌 · 用户 · 原有体验'],['Embedded Wealth Layer','API · H5 · White-label Experience'],['FinOne','Wealth Core'],['FinMix','Trading & Operations'],['Wealth Product Ecosystem','财富产品生态'],
      ].map(([t,p],i)=><article className={i===1?'active':''} key={t}><span>{String(i+1).padStart(2,'0')}</span><strong>{t}</strong><small>{p}</small><i>{i<4?'↓':'CONNECTED'}</i></article>)}</div>
    </div></section>

    <section className="platform-section platform-white"><div className="platform-shell">
      <SectionHead title="财富基础设施，与平台现有能力形成补充" />
      <div className="platform-why">{[
        ['01','财富而不是支付','提供财富基础设施，与客户现有支付能力形成补充。'],['02','丰富产品供给','连接真实财富产品，支持平台建立产品体验。'],['03','金融业务基础','账户、产品、交易和运营能力形成完整闭环。'],['04','保留品牌体验','最终用户仍在平台自身的业务场景中完成操作。'],
      ].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="platform-section"><div className="platform-shell">
      <SectionHead title="一条完整的嵌入式财富场景路径" copy="以平台原有 App 为起点，在不改变主品牌关系的前提下连接财富服务。" />
      <div className="platform-scenario"><div><small>SCENARIO PATH</small><strong>用户始终留在<br />原有平台体验中</strong><p>具体能力组合与呈现方式可根据平台架构、业务范围与合规要求规划。</p></div><ol>{['原 App','加入 Wealth Entry','产品与投资','查看资产','回到持续服务'].map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></li>)}</ol></div>
    </div></section>

    <section className="platform-cta"><div className="platform-shell"><h2>把财富能力带入<br />您已有的用户场景</h2><p>与 Finloop 团队讨论适合现有平台、品牌体验与业务路径的 Embedded Wealth 方案。</p><Link className="button button-light" to="/contact">探索 Embedded Wealth →</Link></div></section>
  </main>;
}
