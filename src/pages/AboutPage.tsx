import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const capabilities = [
  ['01', 'Wealth Technology', '财富科技', '从财富核心、EAM 财富管理到企业财富与白标应用，承接不同机构的业务模式。'],
  ['02', 'Trading Infrastructure', '交易与运营基础设施', '连接产品、账户、订单、交易、清结算与上游金融机构。'],
  ['03', 'Digital Assets & RWA', '数字资产与 RWA', '将真实资产、Tokenization、金融运营与机构分销连接为完整链路。'],
  ['04', 'AI & Intelligence', 'AI 与专业智能', '连接模型、数据、Skills、Agent 与工作流，让 AI 进入真实金融业务。'],
];
const audiences = [
  ['财富与资产管理机构', 'EAM / Family Office / Asset Managers', '/solutions/wealth'],
  ['证券及经纪机构', 'Securities / Brokerage', '/solutions/broker'],
  ['银行及金融机构', 'Banks / Financial Institutions', '/solutions/bank'],
  ['支付与数字平台', 'Payment / Digital Platforms', '/solutions/platform'],
  ['数字资产机构', 'Digital Asset Institutions', '/solutions/digital'],
  ['企业客户', 'Corporate Clients', '/solutions/enterprise'],
];
const journey = [
  ['2024.03', '财富业务基础', '企业现金管理工具上线，接入交易能力，AUA 达 HKD 1B。'],
  ['2024.12', '核心系统形成', 'FinOne 财富核心上线，FinMix 支持多类资产核心交易，AUA 达 HKD 10B。'],
  ['2025.04', '获得香港市场认可', '获得 OASES 相关重点企业认可。'],
  ['2025.07', '进入 Web5 与 RWA 阶段', '发布 Web5 Strategy，推进 FinRWA，AUA 达 HKD 18B。'],
  ['2025.10', '扩展数字资产生态', '推进 Tokenized Fund 与数字资产机构生态连接。'],
  ['2026', 'AI 与机构数字化进一步深化', 'Finloop AI、金融 Agent 与 FDE-AI 等能力进一步进入机构真实业务流程。'],
];

export function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = '关于 Finloop 星路科技｜机构财富科技、RWA 与 AI';
    if (description) description.content = 'Finloop 星路科技总部位于香港，是复星财富控股旗下的机构财富科技平台，连接传统财富、机构交易、数字资产与 AI。';
    return () => { document.title = previousTitle; if (description && previousDescription) description.content = previousDescription; };
  }, []);

  return <main className="about-page" id="main">
    <section className="about-hero" data-header-theme="inverse">
      <img className="about-hero-image" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2200&q=86" alt="现代办公环境中的数字工作设备" /><div className="about-hero-wash" />
      <div className="about-shell about-hero-grid"><div className="about-hero-copy"><p className="about-kicker">Web2 <i /> Web3 <i /> AI</p><h1>连接财富、数字资产与 AI 的机构金融科技平台</h1><p>Finloop 星路科技总部位于香港，为金融机构、数字平台和企业提供财富产品连接、数字化平台、投资交易、RWA 与 AI 解决方案。</p><div className="about-actions"><a className="button button-accent" href="#capabilities">了解我们的业务</a><Link to="/contact">联系 Finloop <span>↗</span></Link></div></div>
      <div className="about-hero-system"><div className="about-system-core"><small>FINLOOP CORE</small><strong>Institutional<br />Wealth Technology</strong><span>AI 驱动的全球一站式 Web5 财富科技平台</span></div>{[['node-wealth','01','Traditional Wealth'],['node-rwa','02','Digital Assets & RWA'],['node-ai','03','AI Data Flow']].map(n=><div className={`about-system-node ${n[0]}`} key={n[1]}><span>{n[1]}</span><strong>{n[2]}</strong></div>)}</div></div>
    </section>

    <section className="about-intro about-section"><div className="about-shell about-intro-grid"><div><span className="about-index">01</span><h2>为机构财富业务而构建的金融科技公司</h2></div><div className="about-intro-copy"><p>星路科技 Finloop 是复星财富控股旗下的 To-B 机构财富科技平台。公司连接传统财富产品、机构交易、RWA 与 AI 能力，为多类金融机构及企业客户提供数字化财富管理、投资交易及智能化金融科技解决方案。</p><div className="about-traits"><span>Institutional</span><span>Financial + Technology</span><span>Old + New Finance</span></div></div></div></section>

    <section className="about-evolution about-section"><div className="about-shell"><Heading index="02" title="从传统财富，到数字资产，再让 AI 进入真实业务" copy="Web2、Web3 与 AI 不是三条割裂的业务线，而是一套不断延展的机构金融科技能力。" /><div className="about-evolution-track">{[['WEB2 / FOUNDATION','Institutional Wealth','成熟的财富产品、客户账户、投资交易与资产运营基础。'],['WEB3 / EXTENSION','Digital Assets & RWA','将财富能力延伸至 Tokenized Assets、RWA 与数字资产运营。'],['AI / INTELLIGENCE','Intelligence Across Business','让模型、Agent 与 Skills 进入产品、研究、风险和运营流程。']].map(x=><article key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div></div></section>

    <section className="about-capabilities about-section" id="capabilities"><div className="about-shell"><Heading index="03" title="从金融产品到底层技术，形成完整机构财富能力" /><div className="about-cap-grid">{capabilities.map(x=><article key={x[0]}><div><span>{x[0]}</span><small>{x[1]}</small></div><h3>{x[2]}</h3><p>{x[3]}</p></article>)}</div></div></section>

    <section className="about-scale about-section"><div className="about-shell"><Heading light index="04" title="已经运行在真实机构财富业务中" /><div className="about-scale-grid"><article className="scale-primary"><strong>8000<sup>+</sup></strong><p>财富管理产品</p><small>Wealth products connected</small></article><div className="scale-secondary"><article><strong>250<sup>+</sup></strong><p>专业机构客户</p></article><article><strong>HKD 50B<sup>+</sup></strong><p>2025 年交易规模</p></article><article><strong>Hong Kong</strong><p>公司总部</p></article></div></div></div></section>

    <section className="about-audience about-section"><div className="about-shell"><Heading index="05" title="服务不同类型的机构财富业务" copy="Finloop 根据客户的现有业务模式，连接相应的财富产品、平台、交易与数字金融能力。" /><div className="about-audience-grid">{audiences.map((x,i)=><Link to={x[2]} key={x[0]}><span>0{i+1}</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div><b>↗</b></Link>)}</div></div></section>

    <section className="about-ecosystem about-section"><img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2000&q=84" alt="香港城市及金融商业区天际线" /><div className="about-shell"><Heading light index="06" title="从产品来源，到机构客户，连接完整金融生态" /><div className="ecosystem-flow"><div><small>PRODUCT & FINANCIAL SOURCES</small><p>全球银行</p><p>基金与资产管理机构</p><p>产品发行与数字资产生态</p></div><div className="ecosystem-core"><small>FINLOOP</small><strong>Wealth Technology<br/>Trading Infrastructure<br/>AI & RWA</strong><span>8000+ Wealth Products Connected</span></div><div><small>INSTITUTIONAL CLIENTS</small><p>银行与券商</p><p>财富机构与数字平台</p><p>数字资产机构与企业</p></div></div></div></section>

    <section className="about-trust about-section" id="qualifications"><div className="about-shell"><Heading light index="07" title="以金融资质与行业认可，支撑机构级业务" copy="Finloop 依托复星财富控股旗下持牌金融机构体系开展相关财富和金融科技业务，并持续获得香港政府、金融科技及专业投资行业的关注与认可。" /><div className="trust-grid"><article className="trust-license"><small>HONG KONG SFC</small><h3>持牌金融基础</h3><p>星路金融为香港证监会持牌法团。Finloop 依托复星财富控股旗下持牌金融机构体系，为机构财富、投资交易及相关金融服务提供合规基础设施支持。</p><div className="qualification-list"><div><b>Type 1</b><span>Dealing in Securities</span><small>证券交易</small></div><div><b>Type 4</b><span>Advising on Securities</span><small>就证券提供意见</small></div><div><b>Type 9</b><span>Asset Management</span><small>资产管理</small></div></div><p className="regulatory-footprint">Expanding Regulatory Footprint · 持续推进新加坡及东南亚市场的合规与牌照布局</p></article><div className="recognition-grid">{[['2025','OASES','香港特区政府引进重点企业办公室相关重点企业认可'],['2025','Hong Kong ICT Awards','FinTech Category 相关认可'],['2026','I&M Professional Investment Awards','Best FinTech Company 相关认可'],['2024','ET Net FinTech Awards','杰出一站式数智化财富管理平台']].map(x=><article key={x[1]}><span>{x[0]}</span><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div></div></div></section>

    <section className="about-foundation about-section"><div className="about-shell"><Heading index="08" title="依托复星财富与全球产业生态" copy="Finloop 是复星财富控股旗下的机构财富科技平台。依托集团在金融服务、产业资源及全球网络上的长期积累，Finloop 持续连接传统财富、金融科技、数字资产与 AI 生态。" /><div className="group-line group-line-horizontal">{[['656.HK','Fosun International','复星国际'],['FINANCIAL HOLDING','Fosun Wealth Holdings','复星财富控股'],['INSTITUTIONAL TECHNOLOGY','Finloop','机构财富科技']].map((x,i)=><article className={i===2?'active':''} key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><span>{x[2]}</span></article>)}</div></div></section>

    <section className="about-journey about-section"><div className="about-shell"><Heading index="09" title="从财富基础设施，到 Web5 财富科技平台" /><div className="journey-list">{journey.map((x,i)=><article key={x[0]}><span>{x[0]}</span><i>0{i+1}</i><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></div></section>

    <section className="about-industry about-section"><div className="about-shell"><Heading index="10" title="与金融、科技和数字资产生态持续连接" copy="通过按关系类型组织的行业网络，Finloop 连接不同的金融与技术参与者。" /><div className="industry-grid">{[['01','Financial Institutions','银行 · 券商 · 金融机构'],['02','Asset Managers','基金公司 · 资产管理机构'],['03','Digital Asset Ecosystem','VASP · Digital Asset Platforms'],['04','Technology','Blockchain Networks · Technology Providers'],['05','Industry & Research','行业协会 · 大学 · 研究机构']].map(x=><article key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div><div className="industry-engagement"><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=84" alt="金融科技行业会议与专业交流现场"/><div><small>INDUSTRY ENGAGEMENT</small><h3>持续参与金融科技与数字资产行业交流</h3><p>与政府、高校、金融机构及技术生态保持专业连接。</p></div></div></div></section>

    <section className="about-presence about-section"><div className="about-shell"><Heading light index="11" title="扎根香港，连接全球金融与科技生态" /><div className="presence-grid"><Place image="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1500&q=84" alt="香港维多利亚港及城市景观" label="HONG KONG" city="Hong Kong" text="Room 2101–2105, 21/F, Champion Tower, 3 Garden Road, Central, Hong Kong"/><Place image="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1500&q=84" alt="上海陆家嘴城市天际线" label="SHANGHAI OFFICE" city="Shanghai" text="上海市黄浦区中山东二路 600 号外滩金融中心 S1 栋 15 楼"/></div></div></section>
    <section className="about-cta"><div className="about-shell"><p>BUILD THE NEXT EVOLUTION OF WEALTH</p><h2>与 Finloop 一起构建下一代财富业务</h2><p className="about-cta-copy">无论您正在拓展传统财富、数字资产还是 AI 能力，Finloop 希望与金融机构、数字平台和企业共同探索新的机构金融科技机会。</p><div><Link className="button button-light" to="/contact">联系 Finloop</Link><Link to="/solutions">探索解决方案 ↗</Link></div></div></section>
  </main>;
}

function Heading({index,title,copy,light=false}:{index:string;title:string;copy?:string;light?:boolean}){return <div className={`about-heading${light?' light':''}`}><span className="about-index">{index}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
function Place({image,alt,label,city,text}:{image:string;alt:string;label:string;city:string;text:string}){return <article><img src={image} alt={alt}/><div><span>{label}</span><h3>{city}</h3><p>{text}</p></div></article>}
