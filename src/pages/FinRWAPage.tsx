import { Link } from 'react-router-dom';

const opportunity = [
  ['01', '资产进入数字化持份', '资产权益能够通过 Token 等形式映射，并进入可持续管理的数字化体系。'],
  ['02', '金融流程连接链上基础设施', '持份、Wallet、AML / KYT 与 Token 流转等能力被连接到业务流程。'],
  ['03', '分销连接数字金融生态', '传统产品与 RWA 可以进一步连接数字平台、财富业务与投资渠道。'],
];

const journey = [
  ['01', 'Asset & Product Design', '资产与产品设计'], ['02', 'Tokenization', '资产代币化'],
  ['03', 'On-chain Deployment', '链上部署'], ['04', 'Share & Wallet', '持份与钱包管理'],
  ['05', 'Compliance', '合规与风险管理'], ['06', 'Issuance', '产品发行'],
  ['07', 'Distribution', '产品分销'], ['08', 'Lifecycle', '生命周期管理'],
];

function SectionHead({ label, title, copy }: { label?: string; title: string; copy?: string }) {
  return <div className="rwa-head">{label && <p>{label}</p>}<h2>{title}</h2>{copy && <span>{copy}</span>}</div>;
}

function GreyUI({ title, type = 'dashboard' }: { title: string; type?: string }) {
  return <div className={`rwa-ui rwa-ui-${type}`} aria-label={`${title}界面占位示意`}>
    <div className="rwa-ui-bar"><i /><strong>{title}</strong><span>UI PLACEHOLDER</span></div>
    <div className="rwa-ui-body"><aside><i /><i /><i /><i /></aside><main><div className="rwa-ui-stats"><i /><i /><i /></div><div className="rwa-ui-canvas"><span /><span /><span /><span /><span /></div></main></div>
  </div>;
}

export function FinRWAPage() {
  return <main className="rwa-page" id="main">
    <section className="rwa-hero" data-header-theme="inverse">
      <div className="rwa-shell rwa-hero-grid">
        <div className="rwa-hero-copy">
          <p className="rwa-label">FINRWA · REAL-WORLD ASSETS</p>
          <h1>从资产上链到分销，<br /><em>一套完整的 RWA 体系</em></h1>
          <p>将资产设计、Tokenization、链上部署、持份管理、合规及分销连接到统一体系，帮助金融机构与企业更高效地进入 Web3 数字金融生态。</p>
          <div className="rwa-actions"><Link className="rwa-button" to="/contact">预约演示</Link></div>
        </div>
        <div className="rwa-transform" aria-label="真实资产数字化并进入市场的过程示意">
          <div className="rwa-object physical"><span>REAL ASSET</span><i /><i /><i /></div>
          <div className="rwa-code"><span>STRUCTURE</span><span>TOKENIZE</span><span>DEPLOY</span></div>
          <div className="rwa-object digital"><span>DIGITAL ASSET UNIT</span><b>FRP</b></div>
          <div className="rwa-network">{Array.from({ length: 7 }).map((_, i) => <i key={i} />)}</div>
        </div>
      </div>
      <div className="rwa-shell rwa-promise"><span><b>Digitize</b>资产数字化</span><i>→</i><span><b>Operate</b>链上与生命周期管理</span><i>→</i><span><b>Distribute</b>发行与分销</span></div>
    </section>

    <section className="rwa-opportunity rwa-section" id="overview"><div className="rwa-shell"><SectionHead label="THE OPPORTUNITY" title="资产数字化正在打开新的金融连接方式" copy="RWA 将传统金融产品与真实资产进一步连接至链上基础设施，使资产能够以新的数字化形式进行管理、流转和分销。" /><div className="rwa-opportunity-grid">{opportunity.map(([n, t, p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="rwa-journey rwa-section" id="how-it-works"><div className="rwa-shell"><SectionHead label="FROM ASSET TO MARKET" title="一项资产，如何成为可管理、可分销的 RWA" /><div className="rwa-journey-track"><div className="rwa-asset-token"><small>ONE ASSET</small><strong>A</strong></div><div className="rwa-steps">{journey.map(([n, en, cn]) => <article key={n}><span>{n}</span><div><small>{en}</small><strong>{cn}</strong></div></article>)}</div></div></div></section>

    <section className="rwa-approach rwa-section"><div className="rwa-shell"><SectionHead label="THE FINRWA APPROACH" title="把分散的 RWA 环节，连接成一套完整体系" copy="RWA 并不只是一次 Token 发行。FinRWA 将资产设计、技术、链上管理、金融运营、合规和分销等关键能力连接到统一体系中。" /><div className="rwa-approach-line">{[['Structure','资产与产品设计'],['Tokenize','Tokenization 与链上部署'],['Operate','持份、Wallet 与生命周期管理'],['Distribute','财富业务与数字资产分销']].map(([e,c],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><strong>{c}</strong></article>)}</div><p className="rwa-stack-statement">One RWA Stack, from Asset to Distribution</p></div></section>

    <section className="rwa-tokenize rwa-section" id="tokenization"><div className="rwa-shell rwa-split"><div><SectionHead label="STRUCTURE & TOKENIZE" title="从真实资产，到可被数字化管理的资产单元" copy="FinRWA 将产品结构和资产数字化技术连接起来，为不同 RWA 场景提供从设计到链上部署的技术基础。" /><div className="rwa-capabilities">{['资产代币化','链上部署','多种资产类型','多链相关能力'].map((x,i)=><span key={x}>0{i+1}　{x}</span>)}</div><div className="rwa-note"><small>FINRWA CAPABILITY</small><strong>FinTaaS</strong><p>提供真实资产上链、资产代币化等相关金融科技服务，是 FRP 资产数字化链路中的重要技术能力。</p></div></div><GreyUI title="资产结构与 Tokenization" type="token" /></div></section>

    <section className="rwa-operations rwa-section"><div className="rwa-shell"><SectionHead label="ON-CHAIN OPERATIONS" title="Token 发出之后，让数字化资产持续可管理" copy="从持份与 Wallet，到 Token 进入、退出及支付相关场景，让产品上线后的资产状态继续留在可管理的业务流程中。" /><div className="rwa-operation-layout"><GreyUI title="RWA 持份与 Wallet 管理" /><div className="rwa-operation-list">{[['Share Management','RWA 持份管理'],['Client Wallet','客户 Wallet 管理'],['Token-In / Token-Out','Token 进入与退出'],['Micropayment','小额支付相关能力'],['On / Off-Ramp','法币与数字资产转换连接']].map(([e,c],i)=><article key={e}><span>0{i+1}</span><div><small>{e}</small><strong>{c}</strong></div></article>)}</div></div></div></section>

    <section className="rwa-compliance rwa-section" id="compliance"><div className="rwa-shell"><SectionHead label="COMPLIANCE BY DESIGN" title="将链上风险信号，带回金融业务流程" copy="支持 AML / KYT、Wallet 风险管理等链上风险能力，将合规控制嵌入相关业务流程。" /><div className="rwa-risk-flow">{['客户','Wallet','链上交易','资产','风险信号','合规处理'].map((x,i)=><article key={x}><span>0{i+1}</span><strong>{x}</strong></article>)}</div><p className="rwa-compliance-foot">风险识别与业务处理需要结合具体产品、主体及适用规则进行配置。</p></div></section>

    <section className="rwa-distribution rwa-section" id="distribution"><div className="rwa-shell"><SectionHead label="FROM ISSUANCE TO DISTRIBUTION" title="资产数字化之后，还需要进入真实金融市场" copy="FinRWA 不止完成资产上链，而是进一步连接财富业务、交易和产品分销能力，让数字化资产进入可运营的金融业务体系。" /><div className="rwa-distribution-stage"><div className="rwa-distribution-copy">{[['Product Launch','产品上线','进入相应产品与运营体系'],['Investment Experience','投资体验','通过 RWA H5 承接产品展示与客户交互'],['Distribution','产品分销','连接财富平台、数字资产及相关金融渠道']].map(([e,t,p],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div><GreyUI title="RWA H5 · 产品与投资体验" type="h5" /></div></div></section>

    <section className="rwa-infrastructure rwa-section" id="infrastructure"><div className="rwa-shell"><SectionHead label="ONE RWA STACK" title="从数字化资产，到真实金融业务" copy="FRP 不是其中某一个模块，而是由产品入口、财富运营、交易运营与资产技术共同组成的完整 RWA 体系。" /><div className="rwa-stack-map"><div className="rwa-stack-core">{[['Experience','RWA H5','产品展示 / 业务入口'],['Wealth Operations','FinOne','客户 / 账户 / 产品 / 财富运营'],['Trading & Financial Operations','FinMix','交易 / 清结算 / ToB 运营'],['Asset Technology','FinTaaS','资产上链 / Tokenization']].map(([l,t,p])=><article key={t}><small>{l}</small><strong>{t}</strong><span>{p}</span></article>)}</div><div className="rwa-ecosystem"><small>FINANCIAL & WEB3 ECOSYSTEM</small>{['Financial Institutions','Asset Managers','VASP','Blockchain Networks','Distribution Channels'].map(x=><span key={x}>{x}</span>)}</div></div></div></section>

    <section className="rwa-universe rwa-section"><div className="rwa-shell"><SectionHead label="RWA PRODUCT UNIVERSE" title="连接不同类型的 Tokenized Assets" /><div className="rwa-universe-grid">{[['Tokenized Funds','代币化基金','Tokenized Money Market Fund 等场景'],['Tokenized Securities','证券相关 Token','包括港股表现挂钩 Token 技术方案'],['Real Asset-backed RWA','真实资产支持型 RWA','包括 Bitcoin Mining RWA 等资产场景']].map(([e,t,p],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="rwa-cases rwa-section" id="cases"><div className="rwa-shell"><SectionHead label="REAL-WORLD CASES" title="从不同资产出发，建立对应的数字化路径" copy="项目状态依据现有公开资料保守呈现；具体合作范围及上线状态以正式披露为准。" /><div className="rwa-case-list">{[
      ['01','Hong Kong Stock-linked Token','香港上市证券相关资产','产品与 Token 结构 → 多链技术 → 生命周期基础设施','TECHNICAL SOLUTION'],
      ['02','Tokenized Money Market Fund','货币市场基金','传统基金 → Tokenized Share Class → 数字资产基础设施','PROJECT CASE'],
      ['03','FUFUS1 · BitFuFu Stable Mining 01','Bitcoin Mining 相关真实资产','真实资产 → 数字化结构 → RWA 产品场景','FEATURED ASSET'],
    ].map(([n,t,a,s,status])=><article key={n}><span>{n}</span><div><small>{a}</small><h3>{t}</h3><p>{s}</p></div><b>{status}</b></article>)}</div></div></section>

    <section className="rwa-trust rwa-section"><div className="rwa-shell"><SectionHead label="BUILT FOR INSTITUTIONAL RWA" title="不只需要 Web3 技术，更需要金融业务基础" copy="FinRWA 连接星路相关金融业务与持牌金融基础设施，为 RWA 产品的相关金融服务及分销场景提供支持。" /><div className="rwa-trust-grid">{[['Financial Infrastructure','金融业务与财富平台基础'],['Compliance','AML / KYT、Wallet 及相关合规流程'],['Technology','Tokenization、多链及资产技术能力'],['Distribution','连接财富与数字资产产品分销体系']].map(([e,c],i)=><article key={e}><span>0{i+1}</span><small>{e}</small><h3>{c}</h3></article>)}</div></div></section>

    <section className="rwa-cta"><div className="rwa-shell"><h2>探索适合您资产的<br />RWA 路径</h2><p>无论是基金、证券相关产品还是其他真实资产，Finloop RWA 团队可以与您共同评估产品结构、技术、合规及分销需求。</p><div><Link className="rwa-button dark" to="/contact">咨询 RWA 方案 <span>↗</span></Link><a href="mailto:CS@finloop.hk">联系 RWA 团队</a></div></div></section>
  </main>;
}
