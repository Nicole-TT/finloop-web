import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';

const journey = ['企业开户', '账户与资金', '产品选择', '申购 / 赎回', '资产持仓', '交易与资金记录'];
const automation = ['资金进入账户', '识别可用资金', '选择适配产品', '完成交易', '资产与收益持续更新', '赎回 / 出金'];
const capabilities = [
  { number: '01', title: '全线上企业开户', headline: '企业开户流程线上化', copy: '在线填写公司、通讯、财务、投资经验、董事 / 股东 / 实益拥有人及税务信息，完成风险披露后提交审核。', note: '更少线下往返，更清晰的开户进度。', ui: '企业开户' },
  { number: '02', title: '企业资金管理', headline: '企业资金进出，线上统一管理', copy: '支持银行卡绑定、入金及出金操作，让企业能够更加便捷地管理账户资金。', note: '资金流转线上化，状态更清晰。', ui: '资金管理' },
  { number: '03', title: '投资产品交易', headline: '从产品选择到申购赎回，全流程线上完成', copy: '企业可查看适用的投资产品，完成风险测评、产品申购及赎回操作，基金赎回可选择直接赎回至银行卡。', note: '产品、风险评估与交易连接在同一流程。', ui: '产品与交易' },
  { number: '04', title: '账户与资产管理', headline: '企业资产状况，集中查看', copy: '统一查看资产持仓、基金交易记录、资金明细及基金收益明细，帮助企业及时掌握账户与资金状态。', note: '资产、交易与资金记录持续可见。', ui: '资产与流水' },
];

function Head({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="xqp-head"><small>{label}</small><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, hero = false }: { title: string; hero?: boolean }) {
  return <div className={`xqp-ui${hero ? ' xqp-ui--hero' : ''}`} role="img" aria-label={`${title}产品界面占位`}><aside><b>星</b>{[1,2,3,4,5].map(i=><span key={i}/>)}</aside><div><header><strong>{title}</strong><i/></header><section>{[1,2,3].map(i=><i key={i}/>)}</section><div className="xqp-ui-body"><div>{[1,2,3,4,5].map(i=><span key={i}/>)}</div><figure>{[1,2,3,4,5,6].map(i=><i key={i}/>)}</figure></div></div></div>;
}

export function XingQiTongPage() {
  return <main className="xqp-page" id="main">
    <section className="xqp-hero product-hero-standard" data-header-theme="inverse"><div className="xqp-shell xqp-hero-grid"><ProductHeroContent className="xqp-hero-copy" category="星企通 · 企业现金与财富管理平台" title="让企业资金配置、投资与资产管理更高效" description="连接企业开户、资金管理、投资交易与资产查看，帮助企业在统一平台中持续掌握资金状态并提升资金使用效率。" ctaLabel="预约产品演示"/><div className="xqp-hero-product"><GreyUI title="企业资产总览" hero/><div className="xqp-float xqp-float-a"><small>可用资金</small><i/><i/></div><div className="xqp-float xqp-float-b"><span/>资金状态已更新</div></div></div></section>

    <section className="xqp-section xqp-overview"><div className="xqp-shell"><Head label="HOW IT WORKS" title="从开户到投资，企业资金管理一站完成" copy="将企业账户、资金流转、投资交易与资产信息集中在一个平台，让资金管理从分散操作走向统一、透明与高效。"/><div className="xqp-journey">{journey.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <section className="xqp-section xqp-capabilities"><div className="xqp-shell"><Head label="CORE CAPABILITIES" title="企业资金管理的四大核心能力" copy="围绕企业资金管理的关键任务，将开户、资金、交易和资产连接成连续的数字体验。"/><div className="xqp-capability-list">{capabilities.map((item,i)=><article className={i%2?'is-reversed':''} key={item.number}><div className="xqp-capability-copy"><span>{item.number}</span><small>{item.title}</small><h3>{item.headline}</h3><p>{item.copy}</p><strong>{item.note}</strong></div><GreyUI title={item.ui}/></article>)}</div></div></section>

    <section className="xqp-section xqp-liquidity"><div className="xqp-shell"><Head label="LIQUIDITY & POTENTIAL RETURN" title="让闲置资金保持流动，也拥有更多潜在增值机会" copy="星企通围绕企业现金管理需求，为企业提供多样化的投资路径，通过货币基金、固定票息票据、债券基金等方式，在兼顾流动性与风险水平的同时，帮助企业提升闲置资金的使用效率。"/><div className="xqp-liquidity-layout"><div className="xqp-product-paths"><span>货币基金</span><span>固定票息票据</span><span>债券基金</span><strong>力求为企业带来具有竞争力的潜在回报</strong></div><div className="xqp-benefits">{[['灵活申赎','满足企业不同资金周期下的流动性需求。'],['更低使用门槛','为不同规模企业提供一致性的服务支持。'],['多币种资金管理','现有方案支持美元、港币与人民币。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>

    <section className="xqp-section xqp-automation"><div className="xqp-shell"><Head label="DIGITAL AUTOMATION" title="让企业资金管理从人工操作走向线上自动化" copy="通过数字化交易系统，将开户、资金管理、产品交易与资产查询连接起来，减少重复人工操作，让企业可以随时掌握资金状态并完成日常管理。"/><div className="xqp-automation-flow">{automation.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <section className="xqp-section xqp-security"><div className="xqp-shell"><Head label="SECURITY & COMPLIANCE" title="企业资金管理，更需要可靠的安全基础"/><div className="xqp-security-grid">{[['持牌经营与严格监管','相关业务依托香港证监会第 1、4、9 类受规管活动牌照开展。'],['资金托管与隔离','客户资金托管于银行，并与运营资金进行隔离。'],['透明信息披露','企业可以查看交易记录、资金流水及账户状况。'],['系统与安全技术','通过身份验证、权限控制及安全技术保护账户与数据。']].map(([t,p],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="xqp-cta"><div className="xqp-shell"><h2>让企业闲置资金开始更高效地运转</h2><p>通过星企通，一站完成企业开户、资金管理、投资交易与资产管理。</p><div><Link className="button button-light" to="/solutions/enterprise">了解企业理财投资方案 →</Link><Link to="/contact">联系我们</Link></div></div></section>
  </main>;
}
