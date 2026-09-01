import { Link } from 'react-router-dom';

const pains = [['集中资金视图', '统一查看现金、银行账户和投资资产。'], ['兼顾流动性', '围绕经营需要管理短期资金与流动性安排。'], ['连接投资选择', '将企业资金连接到适合相应场景的投资产品。'], ['持续跟踪状态', '集中了解资金变化、交易记录与资产状态。']];
const workflow = ['企业开户', '绑卡 / 入金', '了解企业资金', '查看产品', '风险测评', '申购', '资产与交易查看', '赎回', '资金退出'];

function Head({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="xqt-head"><small>{eyebrow}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title }: { title: string }) {
  return <div className="xqt-ui" role="img" aria-label={`${title}界面占位`}><aside><b>星</b>{[1,2,3,4,5].map(i => <span key={i}/>)}</aside><div><header><strong>{title}</strong><i/></header><section>{[1,2,3].map(i => <i key={i}/>)}</section><div className="xqt-ui-content"><div>{[1,2,3,4,5].map(i => <span key={i}/>)}</div><figure>{[1,2,3,4,5].map(i => <i key={i}/>)}</figure></div></div></div>;
}

export function XingQiTongPage() {
  return <main className="xqt-page" id="main">
    <section className="xqt-hero" data-header-theme="inverse"><div className="xqt-shell xqt-hero-grid"><div><p className="xqt-name">星企通 <span>CORPORATE TREASURY</span></p><h1>星企通连接企业现金、投资与资产</h1><p>将企业开户、资金管理、现金管理、投资交易与资产信息连接到统一平台，帮助企业更清楚地掌握资金状态，更高效地管理和配置企业现金。</p><div className="xqt-actions"><Link className="button button-accent" to="/contact">预约星企通演示 →</Link><a href="#view">探索企业资金管理 ↓</a></div><div className="xqt-promise"><span>看清资金</span><span>灵活调配</span><span>高效管理</span></div></div><div className="xqt-map"><div><span>账户 A</span><span>账户 B</span><span>账户 C</span></div><i/><strong><small>ONE TREASURY CORE</small>星企通</strong><i/><div><span>流动性</span><span>投资</span><span>资产</span></div></div></div></section>
    <section className="xqt-section xqt-white" id="overview"><div className="xqt-shell"><Head eyebrow="CONNECTED CORPORATE TREASURY" title="让企业现金、投资与资产持续协同" copy="星企通把企业账户、现金管理、投资产品与资产信息连接到统一平台，帮助财务团队兼顾经营流动性和资金管理效率。"/><div className="xqt-reality"><div className="xqt-fragment"><span>银行账户</span><span>现金池</span><span>投资账户</span><span>资金记录</span><strong>统一企业资金视图</strong></div><div className="xqt-list">{pains.map(([t,p],i) => <article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div></div></div></section>

    <section className="xqt-section" id="view"><div className="xqt-shell"><Head eyebrow="ONE TREASURY VIEW" title="先看清每一笔企业资金" copy="将企业现金、投资资产、交易及资金记录集中呈现，让财务团队更直观地了解资金在哪里、如何使用以及当前资产状态。"/><div className="xqt-split"><GreyUI title="企业资产总览"/><div className="xqt-values">{[['看清现金状态','了解可用资金及资金变化。'],['看清投资','持续查看企业投资产品及交易。'],['看清资产','将资产和相关信息集中呈现。'],['看清资金与投资历史','减少资金信息散落在多个平台和人工表格。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>

    <section className="xqt-section xqt-blue" id="cash"><div className="xqt-shell"><Head eyebrow="CASH & LIQUIDITY" title="让短期资金保持流动，也能被更有效地管理" copy="企业现金管理并不是简单追求收益，而是在经营所需流动性、资金安全和资金使用效率之间取得平衡。"/><div className="xqt-cash"><article><small>MONEY MARKET FUNDS</small><h3>多币种现金管理选择</h3><p>通过多币种货币市场基金等现金管理产品，为企业提供更加灵活的短期资金管理选择。</p><div><span>USD</span><span>HKD</span><span>CNH</span></div></article><div>{['经营性现金','短期流动性','阶段性闲置资金','多币种资金'].map((x,i)=><span key={x}><i>0{i+1}</i>{x}</span>)}</div></div></div></section>

    <section className="xqt-section" id="investment"><div className="xqt-shell"><Head eyebrow="INVESTMENT ACCESS" title="将企业闲置资金连接到投资产品" copy="在满足经营和流动性需求的基础上，企业可以通过星企通了解和使用适合企业资金管理场景的投资产品。"/><div className="xqt-invest"><div>{[['Discover','了解产品'],['Assess','风险评估'],['Invest','进行投资'],['Redeem','按资金需要赎回']].map(([a,b],i)=><article key={a}><span>0{i+1}</span><small>{a}</small><strong>{b}</strong></article>)}</div><GreyUI title="产品浏览与申购"/></div></div></section>

    <section className="xqt-section xqt-white"><div className="xqt-shell"><Head eyebrow="MONEY MOVEMENT" title="让企业资金操作更集中" copy="将投资相关资金操作连接到同一个企业平台，减少多个渠道之间重复操作和状态查询。"/><div className="xqt-flow">{[['企业银行账户','绑卡与入金'],['星企通','资金账户'],['投资产品','投资资金'],['赎回 / 出金','资金退出']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><strong>{t}</strong><small>{p}</small></article>)}</div></div></section>

    <section className="xqt-section" id="assets"><div className="xqt-shell"><Head eyebrow="ASSETS & INVESTMENTS" title="让投资结果持续可见" copy="企业投资完成后，星企通持续连接资产、交易和资金数据，让财务团队不需要等到月底再通过人工表格整理投资状态。"/><div className="xqt-assets"><GreyUI title="资产与交易状态"/><div>{[['PORTFOLIO VISIBILITY','集中了解投资资产'],['TRANSACTION TRANSPARENCY','持续了解交易状态'],['CASH TRANSPARENCY','资金变化可追踪']].map(([a,b])=><article key={a}><small>{a}</small><h3>{b}</h3></article>)}</div></div><blockquote>企业资金管理的核心，不只是看余额，而是持续管理流动性、投资与资产状态。</blockquote></div></section>

    <section className="xqt-section xqt-dark" id="workflow"><div className="xqt-shell"><Head eyebrow="END-TO-END CORPORATE WORKFLOW" title="从企业开户，到持续资产管理"/><div className="xqt-workflow">{workflow.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div><div className="xqt-onboard"><div><small>DIGITAL CORPORATE ONBOARDING</small><h3>企业资料在线提交</h3><p>将企业基础资料、股东 / 实益拥有人、税务及投资相关信息在线化提交，减少资料往返和人工沟通。</p></div><GreyUI title="企业开户"/></div></div></section>

    <section className="xqt-section xqt-white" id="platform"><div className="xqt-shell"><Head eyebrow="BUILT ON FINLOOP" title="企业体验背后，是完整的财富技术基础设施" copy="星企通负责企业用户体验和资金管理流程；FinOne 提供底层财富核心能力，并通过交易及金融基础设施连接实际产品和业务执行。"/><div className="xqt-stack">{[['CORPORATE EXPERIENCE','星企通','企业资金与投资平台'],['WEALTH CORE','FinOne','账户、产品、交易与运营核心'],['TRADING & OPERATIONS','FinMix','交易、清结算及金融机构连接'],['FINANCIAL ECOSYSTEM','金融产品生态','银行、基金公司、资产管理及相关金融机构']].map(([a,b,c],i)=><article className={i===0?'primary':''} key={a}><small>{a}</small><strong>{b}</strong><span>{c}</span></article>)}</div></div></section>

    <section className="xqt-section"><div className="xqt-shell"><Head eyebrow="BUILT FOR CORPORATE FINANCE" title="为企业资金管理建立专业金融基础"/><div className="xqt-trust">{[['金融产品连接','连接真实财富产品。'],['金融基础设施','支持实际金融业务。'],['数字化流程','将开户、资金和投资流程数字化。'],['资产透明度','持续了解投资与资金状态。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div><div className="xqt-proof"><article><strong>8000+</strong><span>Finloop 财富产品生态</span></article><article><strong>250+</strong><span>Finloop 机构客户</span></article><article className="placeholder"><strong>企业级信任资料</strong><span>相关资料待补充</span></article></div></div></section>

    <section className="xqt-section xqt-white"><div className="xqt-shell"><Head eyebrow="CUSTOMER PROOF" title="一家企业如何改变闲置资金管理方式"/><div className="xqt-case" aria-label="客户案例资料占位">{['客户','挑战','星企通流程','结果'].map((x,i)=><div key={x}><span>{x}</span>{Array.from({length:i===1||i===2?3:2},(_,n)=><i key={n}/>)}</div>)}</div></div></section>
    <section className="xqt-cta"><div className="xqt-shell"><h2>让企业资金管理更清晰、更高效</h2><p>从企业开户和资金操作，到现金管理、投资和资产查询，星企通帮助企业将分散的资金管理流程连接到一个数字平台。</p><div><Link className="button button-light" to="/contact">预约星企通演示 →</Link><a href="mailto:CS@finloop.hk">联系企业服务团队</a></div></div></section>
  </main>;
}
