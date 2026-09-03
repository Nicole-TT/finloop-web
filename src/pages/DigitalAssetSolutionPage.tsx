import { Link } from 'react-router-dom';

const workflow = ['Traditional / Real Asset', 'Tokenization', 'Wallet / On-chain', 'AML / KYT', 'Product Operations', 'Distribution', 'Investor / Institutional Access'];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="digital-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, type }: { title: string; type: 'token' | 'wallet' | 'distribution' }) {
  return <div className={`digital-ui digital-ui-${type}`} role="img" aria-label={`${title}灰色界面占位`}>
    <header><i /><strong>{title}</strong><span /></header>
    <div className="digital-ui-body">
      <aside>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</aside>
      <main>
        <div className="digital-ui-metrics">{[1, 2, 3].map(i => <i key={i} />)}</div>
        <div className="digital-ui-canvas"><section>{[1, 2, 3, 4].map(i => <i key={i} />)}</section><figure>{[1, 2, 3, 4, 5].map(i => <i key={i} />)}</figure></div>
      </main>
    </div>
  </div>;
}

export function DigitalAssetSolutionPage() {
  return <main className="digital-page" id="main">
    <section className="digital-hero" data-header-theme="inverse">
      <div className="digital-shell digital-hero-grid">
        <div className="digital-hero-copy">
          <p className="digital-label">DIGITAL ASSET INSTITUTIONS</p>
          <h1>数字资产机构解决方案</h1>
          <p>将 RWA、Tokenization、Wallet、KYT 与财富产品和金融业务能力连接起来，帮助数字资产机构拓展更加完整的机构金融服务。</p>
          <div className="digital-actions"><Link className="button button-accent" to="/contact">联系我们</Link></div>
        </div>
        <div className="digital-bridge" aria-label="Web3 基础设施、Finloop 与传统金融连接示意">
          <div className="digital-bridge-side"><small>WEB3</small><strong>Digital Assets</strong><span>Wallet · On-chain · KYT</span></div>
          <div className="digital-bridge-core"><small>CONNECTING LAYER</small><strong>Finloop</strong><span>RWA · Product · Operations</span></div>
          <div className="digital-bridge-side"><small>TRADFI</small><strong>Financial Ecosystem</strong><span>Assets · Institutions · Distribution</span></div>
        </div>
      </div>
    </section>

    <section className="digital-section digital-white"><div className="digital-shell">
      <SectionHead title="Digital Assets 正在与传统金融业务加速连接" copy="从资产形态、机构参与到链上合规，数字资产业务正进入更完整的金融产品与机构服务体系。" />
      <div className="digital-opportunities">{[
        ['01','Tokenized Assets','传统资产正在形成新的数字化产品形态。'],
        ['02','Institutional Access','数字资产机构希望连接更多传统金融产品和机构。'],
        ['03','Compliance Infrastructure','Wallet、交易和链上风险管理成为机构级基础要求。'],
      ].map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="digital-section"><div className="digital-shell">
      <SectionHead title="从连接资产，到建立可运营的机构业务" />
      <div className="digital-outcomes">{[
        ['01','Connect TradFi & Web3','连接传统财富产品、机构与数字资产场景。'],
        ['02','Launch RWA','支持 RWA 产品设计、Tokenization 与链上部署。'],
        ['03','Operate Institutionally','建立 Wallet、KYT 和数字资产运营能力。'],
      ].map(([n,t,p]) => <article key={n}><span>{n}</span><small>{t}</small><h3>{t.split(' ')[0]}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="digital-section digital-flow-section" id="workflow"><div className="digital-shell">
      <SectionHead title="从真实资产到机构访问的端到端路径" copy="让产品形成、链上运营、合规管理与分销访问进入同一条业务主线。" />
      <div className="digital-workflow">{workflow.map((item, i) => <article className={i === 0 ? 'source' : i === workflow.length - 1 ? 'destination' : ''} key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < workflow.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div>
    </div></section>

    <section className="digital-section digital-white" id="capabilities"><div className="digital-shell">
      <SectionHead title="围绕资产、钱包与流转组合关键能力" copy="根据业务地区、主体与目标场景，组合适合的产品与运营能力。" />
      <div className="digital-capability"><div className="digital-capability-copy"><span>01</span><small>RWA &amp; TOKENIZATION</small><h3>RWA 与 Tokenization</h3><p>从产品设计进入链上部署，并支持 RWA 持份的持续管理。</p><div>{['产品设计','Tokenization','链上部署','RWA 持份管理'].map(x => <i key={x}>{x}</i>)}</div></div><GreyUI title="RWA 产品与持份管理" type="token" /></div>
      <div className="digital-capability reverse"><div className="digital-capability-copy"><span>02</span><small>WALLET &amp; KYT</small><h3>Wallet 与 KYT</h3><p>连接客户钱包、钱包绑定、链上 AML、KYT 与钱包风险管理。</p><div>{['Client Wallet','Wallet Binding','Micropayment','On-chain AML','KYT','Wallet Risk'].map(x => <i key={x}>{x}</i>)}</div></div><GreyUI title="Wallet 与链上风险运营" type="wallet" /></div>
      <div className="digital-capability"><div className="digital-capability-copy"><span>03</span><small>FLOW &amp; DISTRIBUTION</small><h3>数字资产流转与分销</h3><p>支持资产进出、相关产品运营与 Tokenized Product Distribution。</p><div>{['Token-In / Out','On / Off-Ramp','产品运营','RWA Distribution'].map(x => <i key={x}>{x}</i>)}</div><small className="digital-boundary">具体服务边界根据地区和主体确认。</small></div><GreyUI title="数字资产流转与分销" type="distribution" /></div>
    </div></section>

    <section className="digital-section digital-stack-section"><div className="digital-shell">
      <SectionHead title="Powered by Finloop" copy="FRP / FinRWA 以完整解决方案体系连接投资者体验、产品运营与金融及数字资产生态。" />
      <div className="digital-stack">
        <article><span>01</span><small>EXPERIENCE</small><strong>Web3 / Investor Experience</strong><i>↓</i></article>
        <article className="active"><span>02</span><small>SOLUTION SYSTEM</small><strong>FRP / FinRWA Solution</strong><div>{['RWA H5','FinOne','FinMix','FinTaaS'].map(x => <b key={x}>{x}</b>)}</div><i>↓</i></article>
        <article><span>03</span><small>CONNECTED ECOSYSTEM</small><strong>TradFi + Blockchain + Digital Asset Ecosystem</strong><i>CONNECTED</i></article>
      </div>
    </div></section>

    <section className="digital-section"><div className="digital-shell">
      <SectionHead title="不只 Tokenize，还要让资产进入实际金融业务" />
      <div className="digital-why">{[
        ['Financial + Web3','同时连接财富业务与 Web3 技术。'],
        ['Compliance Infrastructure','围绕 AML、KYT 与 Wallet Risk 建立基础能力。'],
        ['Real Asset Experience','覆盖 Tokenized Fund、证券相关 Token 与 RWA 场景。'],
        ['Distribution','同时考虑资产如何进入产品运营与实际分销。'],
      ].map(([t,p],i) => <article key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="digital-section digital-white"><div className="digital-shell">
      <SectionHead title="从资产到分销的项目路径" copy="项目展示以已确认的业务范围与状态为准。" />
      <div className="digital-case"><div><small>PROJECT PATH</small><strong>Tokenized<br />Money Market Fund</strong><p>Asset → Opportunity → Tokenization → Infrastructure → Distribution</p></div><ol>{['Asset','Opportunity','Tokenization','Infrastructure','Distribution','Status'].map((x,i) => <li key={x}><span>{String(i + 1).padStart(2,'0')}</span><strong>{x}</strong><small>{i === 5 ? '项目状态以对外发布信息为准' : '项目路径'}</small></li>)}</ol></div>
    </div></section>

    <section className="digital-cta"><div className="digital-shell"><h2>连接您的数字资产业务与传统金融生态</h2><p>与 Finloop 团队讨论适合业务地区、机构主体与产品路径的数字资产解决方案。</p><Link className="button button-light" to="/contact">讨论数字资产解决方案 →</Link></div></section>
  </main>;
}
