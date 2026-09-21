import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';
import { PlatformCasesSection, PlatformTrustSection } from '../components/PlatformProofSections';

const journey = ['企业开户', '账户与资金', '产品选择', '申购 / 赎回', '资产持仓', '交易与资金记录'];
const capabilities = [
  { number: '01', headline: '在线开户，减少线下往返', copy: '在线填写企业、股东及税务等开户资料，完成风险披露后提交审核。从资料填写到申请提交，在同一平台完成。', ui: '企业开户' },
  { number: '02', headline: '便捷管资金，出金有审核', copy: '在线绑定银行卡、办理入金并提交出金申请。出金经审核通过后处理，让日常资金操作更便捷，也让资金转出有章可循。', ui: '资金管理' },
  { number: '03', headline: '线上做投资，申赎更省心', copy: '查看适用的投资产品，在线完成风险测评、申购与赎回。基金赎回可选择直接转至银行卡，减少资金转回的操作步骤。', ui: '产品与交易' },
  { number: '04', headline: '集中看资产，资金状况更清晰', copy: '在同一平台查看资产持仓、基金收益、交易记录与资金明细。掌握资金去向与投资变化，为日常资金安排提供依据。', ui: '资产与流水' },
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

    <section className="xqp-section xqp-pain"><div className="xqp-shell xqp-pain-grid"><Head label="CHALLENGES" title="中小企业现金管理的四个核心痛点" copy="传统投资工具利率差异、资金利用效率不高，加上现金管理成本和系统能力限制，使企业难以同时兼顾潜在收益与流动性。"/><div className="xqp-pain-fragments" aria-label="中小企业现金管理核心痛点">{['传统投资工具利率差异', '资金利用效率低下', '现金管理复杂且成本高', '技术和系统支持不足'].map((item,index)=><span key={item} style={{'--i':index} as React.CSSProperties}>{item}</span>)}<strong>企业现金管理难题</strong></div></div></section>

    <section className="xqp-section xqp-capabilities"><div className="xqp-shell"><Head label="CORE CAPABILITIES" title="减少资金管理繁琐操作，让企业专注经营" copy="围绕企业资金管理的关键任务，将开户、资金、交易和资产连接成连续的数字体验。"/><div className="xqp-capability-list">{capabilities.map((item,i)=><article className={i%2?'is-reversed':''} key={item.number}><div className="xqp-capability-copy"><h3>{item.headline}</h3><p>{item.copy}</p></div><GreyUI title={item.ui}/></article>)}</div></div></section>

    <section className="xqp-section xqp-liquidity"><div className="xqp-shell"><Head label="LIQUIDITY & POTENTIAL RETURN" title="多样产品，让企业资金配置更灵活" copy="星企通围绕企业现金管理需求，为企业提供多样化的投资路径，通过货币基金、固定票息票据、债券基金等方式，在兼顾流动性与风险水平的同时，帮助企业提升闲置资金的使用效率。"/><div className="xqp-liquidity-layout"><div className="xqp-product-paths"><strong>一站连接多类企业投资产品</strong><div className="xqp-product-groups">{[['流动性管理','货币基金、存款及公募基金','满足企业日常流动性管理与不同周期的资金安排。'],['多资产配置','私募基金、债券与票据','根据期限、币种和风险收益特征提供更多配置选择。'],['数字资产','虚拟资产与稳定币','面向适用企业连接数字资产相关产品场景。']].map(([title,products,copy])=><article key={title}><div><h3>{title}</h3><b>{products}</b><p>{copy}</p></div></article>)}</div></div><div className="xqp-benefits">{[['灵活申赎','满足企业不同资金周期下的流动性需求。'],['更低使用门槛','为不同规模企业提供一致性的服务支持。'],['多币种资金管理','现有方案支持美元、港币与人民币。']].map(([t,p])=><article key={t}><h3>{t}</h3><p>{p}</p></article>)}</div></div></div></section>

    <section className="xqp-section xqp-overview"><div className="xqp-shell"><Head label="HOW IT WORKS" title="从开户到投资，企业资金管理一站完成" copy="将企业账户、资金流转、投资交易与资产信息集中在一个平台，让资金管理从分散操作走向统一、透明与高效。"/><div className="xqp-journey">{journey.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div></section>

    <PlatformTrustSection sectionClass="xqp-section" shellClass="xqp-shell" />
    <PlatformCasesSection sectionClass="xqp-section" shellClass="xqp-shell" title="他们都在用星企通管理企业资金" copy="了解企业如何通过星企通连接资金状态、现金管理、投资交易与资产查询。" cases={[{mark:'星',name:'典型企业资金管理场景',type:'场景示例 · 非特定客户案例',copy:'通过统一企业资金视图，连接阶段性闲置资金的管理、投资与后续查询。',details:[['原有方式','银行账户、投资平台和人工表格分散管理。'],['星企通应用','集中查看资金状态，并连接风险测评、申购、赎回与资产查询。'],['业务变化','让企业资金与投资状态回到同一平台持续管理。']]},{mark:'+',name:'真实客户案例',type:'待客户授权',copy:'待补充客户名称、原有管理方式、上线范围、流程变化与已确认的业务结果。',pending:true}]} />

    <section className="xqp-cta"><div className="xqp-shell"><h2>让企业闲置资金开始更高效地运转</h2><p>通过星企通，一站完成企业开户、资金管理、投资交易与资产管理。</p><div><Link className="button button-light" to="/solutions/enterprise">了解企业理财投资方案 →</Link><Link to="/contact">联系我们</Link></div></div></section>
  </main>;
}
