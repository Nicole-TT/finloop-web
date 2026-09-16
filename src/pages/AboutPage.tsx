import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const journey = [
  ['2024.03', '财富业务基础', '企业现金管理工具上线，接入交易能力，AUA 达 HKD 1B。'],
  ['2024.12', '核心系统形成', 'FinOne 财富核心上线，FinMix 支持多类资产核心交易，AUA 达 HKD 10B。'],
  ['2025.04', '获得香港市场认可', '获得 OASES 相关重点企业认可。'],
  ['2025.07', '进入 Web5 与 RWA 阶段', '发布 Web5 Strategy，推进 FinRWA，AUA 达 HKD 18B。'],
  ['2025.10', '扩展数字资产生态', '推进 Tokenized Fund 与数字资产机构生态连接。'],
  ['2026', 'AI 与机构数字化进一步深化', 'Finloop AI、金融 Agent 与 FDE-AI 等能力进一步进入机构真实业务流程。'],
];

const leadershipProfiles = [
  { id: '01', name: '蔡华', role: '首席执行官 CEO', bio: '负责公司整体战略与经营管理，推动财富科技、数字资产与人工智能能力协同发展，为机构客户构建长期、可靠的数字化服务体系。', image: '/assets/about-leadership-cai-hua.png' },
  { id: '02', name: 'Amily', role: '职位待确认', bio: '聚焦财富科技产品与业务协同，持续连接客户需求、金融场景与技术能力，推动解决方案在机构业务中高效落地。', image: '/assets/about-leadership-amily.png' },
  { id: '03', name: 'Johna', role: '职位待确认', bio: '关注机构客户需求与平台生态建设，致力于通过开放、专业的科技能力，连接全球金融资源与多元财富管理场景。', image: '/assets/about-leadership-johna.png' },
];

export function AboutPage() {
  const [activeLeader, setActiveLeader] = useState(0);
  const leader = leadershipProfiles[activeLeader];

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
      <img className="about-hero-image" src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2200&q=86" alt="现代城市建筑群俯瞰景观" /><div className="about-hero-wash" />
      <div className="about-shell about-hero-grid"><div className="about-hero-copy"><p className="about-kicker">Web2 <i /> Web3 <i /> AI</p><h1>连接财富、数字资产与 AI 的机构金融科技平台</h1><p>Finloop 星路科技总部位于香港，为金融机构、数字平台和企业提供财富产品连接、数字化平台、投资交易、RWA 与 AI 解决方案。</p><div className="about-actions"><Link to="/contact">联系 Finloop <span>↗</span></Link></div></div>
      </div>
    </section>

    <section className="about-intro about-section"><div className="about-shell about-intro-grid"><div><span className="about-index">01</span><h2>为机构财富业务而构建的金融科技公司</h2></div><div className="about-intro-copy"><p>星路科技 Finloop 是复星财富控股旗下的企业端机构财富科技平台。公司连接传统财富产品、机构交易、RWA 与 AI 能力，为多类金融机构及企业客户提供数字化财富管理、投资交易及智能化金融科技解决方案。</p><div className="about-traits"><span>面向机构</span><span>金融与科技</span><span>连接传统与新金融</span></div></div></div></section>

    <section className="about-evolution about-section"><div className="about-shell"><Heading index="02" title="财富能力持续进化" copy="Web2、Web3 与 AI 不是三条割裂的业务线，而是一套不断延展的机构金融科技能力。" /><img className="about-evolution-visual" src="/assets/about-evolution-wireframe.png" alt="从机构财富、数字资产与 RWA 到 AI 业务工作流的能力演进线框图"/><div className="about-evolution-track">{[['WEB2 / 传统财富基础','机构财富','成熟的财富产品、客户账户、投资交易与资产运营基础。'],['WEB3 / 数字资产延伸','数字资产与 RWA','将财富能力延伸至代币化资产、RWA 与数字资产运营。'],['AI / 智能化','贯穿业务的智能能力','让模型、智能体与技能进入产品、研究、风险和运营流程。']].map(x=><article key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div></div></section>

    <section className="about-ecosystem about-section"><img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2000&q=84" alt="香港城市及金融商业区天际线" /><div className="about-shell"><Heading light index="06" title="连接全球机构金融与财富生态" /><div className="ecosystem-flow"><div><small>产品与金融来源</small><p>全球银行</p><p>基金与资产管理机构</p><p>产品发行与数字资产生态</p></div><div className="ecosystem-core"><small>星路科技</small><strong>财富科技<br/>交易基础设施<br/>AI 与 RWA</strong><span>连接 8000+ 财富管理产品</span></div><div><small>机构客户</small><p>银行与券商</p><p>财富机构与数字平台</p><p>数字资产机构与企业</p></div></div></div></section>

    <section className="about-leadership about-section"><div className="about-shell"><Heading index="07" title="匠心领航，聚力同行" /><div className="leadership-stage"><figure><img key={leader.id} src={leader.image} alt={`${leader.name}彩色人像`} /></figure><article id="leadership-panel" aria-live="polite"><div className="leadership-identity"><h3>{leader.name}</h3><p>{leader.role}</p></div><blockquote>{leader.bio}</blockquote><div className="leadership-card-footer"><nav className="leadership-controls" aria-label="切换管理层成员"><button type="button" aria-label="上一位管理层成员" onClick={()=>setActiveLeader(current=>(current-1+leadershipProfiles.length)%leadershipProfiles.length)}>←</button><span>{leader.id} / {String(leadershipProfiles.length).padStart(2,'0')}</span><button type="button" aria-label="下一位管理层成员" onClick={()=>setActiveLeader(current=>(current+1)%leadershipProfiles.length)}>→</button></nav></div></article></div></div></section>

    <section className="about-trust about-section" id="qualifications"><div className="about-shell"><Heading light index="08" title="以金融资质与行业认可，支撑机构级业务" copy="Finloop 依托复星财富控股旗下持牌金融机构体系开展相关财富和金融科技业务，并持续获得香港政府、金融科技及专业投资行业的关注与认可。" /><div className="trust-grid"><article className="trust-license"><small>HONG KONG SFC</small><h3>持牌金融基础</h3><p>星路金融为香港证监会持牌法团。Finloop 依托复星财富控股旗下持牌金融机构体系，为机构财富、投资交易及相关金融服务提供合规基础设施支持。</p><div className="qualification-list"><div><b>Type 1</b><span>Dealing in Securities</span><small>证券交易</small></div><div><b>Type 4</b><span>Advising on Securities</span><small>就证券提供意见</small></div><div><b>Type 9</b><span>Asset Management</span><small>资产管理</small></div></div><p className="regulatory-footprint">Expanding Regulatory Footprint · 持续推进新加坡及东南亚市场的合规与牌照布局</p></article><div className="recognition-grid">{[['2025','OASES','香港特区政府引进重点企业办公室相关重点企业认可','https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=82'],['2025','Hong Kong ICT Awards','FinTech Category 相关认可','https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1000&q=82'],['2026','I&M Professional Investment Awards','Best FinTech Company 相关认可','https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=82'],['2024','ET Net FinTech Awards','杰出一站式数智化财富管理平台','https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1000&q=82']].map(x=><article key={x[1]}><img src={x[3]} alt="奖杯展示占位图"/><div><span>{x[0]}</span><strong>{x[1]}</strong><p>{x[2]}</p></div></article>)}</div></div></div></section>

    <section className="about-journey about-section"><div className="about-shell"><Heading index="09" title="Finloop 发展里程碑" copy="记录从财富业务基础、核心系统建设，到 Web5、RWA 与 AI 能力拓展的关键节点。" /><div className="about-journey-layout"><figure><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=84" alt="登山者攀登高峰"/></figure><div className="journey-list">{[...journey].reverse().map((x,i)=><article key={x[0]}><span>{x[0]}</span><i>0{journey.length-i}</i><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></div></div></section>

    <section className="about-presence about-section"><div className="about-shell"><Heading light index="11" title="立足香港，连接亚太与全球金融科技生态" /><div className="presence-grid"><Place image="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1500&q=84" alt="香港维多利亚港及城市景观" label="HONG KONG" city="Hong Kong" text="Room 2101–2105, 21/F, Champion Tower, 3 Garden Road, Central, Hong Kong"/><Place image="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1500&q=84" alt="上海陆家嘴城市天际线" label="SHANGHAI OFFICE" city="Shanghai" text="上海市黄浦区中山东二路 600 号外滩金融中心 S1 栋 15 楼"/><Place image="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1500&q=84" alt="新加坡滨海湾及城市天际线" label="SINGAPORE" city="Singapore" text="新加坡市场业务与金融科技生态布局"/><Place image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1500&q=84" alt="马来西亚吉隆坡城市天际线" label="MALAYSIA" city="Malaysia" text="马来西亚市场业务与机构金融生态布局"/></div></div></section>
  </main>;
}

function Heading({index,title,copy,light=false}:{index:string;title:string;copy?:string;light?:boolean}){return <div className={`about-heading${light?' light':''}`}><span className="about-index">{index}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
function Place({image,alt,label,city,text}:{image:string;alt:string;label:string;city:string;text:string}){return <article><img src={image} alt={alt}/><div><span>{label}</span><h3>{city}</h3><p>{text}</p></div></article>}
