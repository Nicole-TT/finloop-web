import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Blocks, CircleCheck, createIcons, Network, ShieldCheck } from 'lucide';

const architectureValues = [
  ['高性能与弹性扩展', '分布式架构将业务负载分散到不同单元，并可随业务规模增长扩展容量。'],
  ['故障隔离与高可用', '通过灰度发布、故障隔离与多中心部署，将异常影响控制在局部范围。'],
  ['智能资源调度', '根据系统负载进行均衡和资源动态调整，提高资源使用效率。'],
  ['自动恢复与业务连续', '通过数据冗余、故障检测、转移与恢复机制支持服务连续运行。'],
];

const openCapabilities = [
  ['network', '标准开放接口', '覆盖鉴权、基金、债券和结构性产品接口，支持加密与 IP 白名单。'],
  ['circle-check', '企业统一身份认证', '对接机构认证与单点登录，衔接组织、角色和访问权限。'],
  ['shield-check', '细粒度权限管理', '按组织与业务配置角色，权限控制可细化至接口。'],
  ['blocks', '模块化服务能力', '询价、交易与 TA 接入按需组合，逐步接入现有流程。'],
];

const aiCapabilities = [
  ['模型服务与连接', '统一连接和管理多模型能力，为不同金融任务提供适合的模型服务。'],
  ['数据与知识能力', '连接企业资料、业务数据与金融信息，为分析和任务执行提供可靠上下文。'],
  ['Agent 与 Skills', '将专业能力组织为可复用的 Agent 与 Skills，支持不同岗位和任务场景。'],
  ['业务应用与工作流', '让 AI 进入投研、产品、风险和运营等金融工作流程，连接信息理解与任务执行。'],
];

const platformPrinciples = [
  ['Open', '开放连接', '通过标准 API、交易协议与企业身份体系连接机构现有系统，让账户、产品和交易能力融入既有业务流程。'],
  ['Flexible', '灵活部署', '根据机构的 IT 架构、数据安全与治理要求，选择 SaaS、嵌入式或私有化部署，并按需组合平台能力。'],
  ['Reliable', '稳定运行', '以实时账户流水、幂等处理、清结算对账与故障隔离机制，支持财富核心业务持续、稳定运行。'],
  ['Scalable', '随业务扩展', '通过单元化与分布式架构扩展系统容量，在客户数量、产品范围和交易规模增长时保持处理效率。'],
];

function SectionHead({ title, copy, light = false }: { title: string; copy: string; light?: boolean }) {
  return <div className={`tp-head${light ? ' light' : ''}`}><h2>{title}</h2><p>{copy}</p></div>;
}

export function TechnologyPlatformPage() {
  useEffect(() => {
    document.title = '技术平台 | Finloop 星路科技';
    document.querySelector('meta[name="description"]')?.setAttribute('content', '了解 Finloop 以产品、账户与交易为核心构建的财富管理技术基础设施。');
    createIcons({ icons: { Blocks, CircleCheck, Network, ShieldCheck } });
  }, []);

  return <main className="tp-page" id="main">
    <section className="tp-hero" data-header-theme="inverse"><div className="tp-shell tp-hero-layout"><div className="tp-hero-copy"><h1>构建全流程财富管理的数字基石</h1><p>以产品、账户、交易为核心，构建覆盖财富管理全流程的底层技术能力，并通过开放架构、AI 与 Web3 技术持续延展金融服务边界。</p></div></div></section>

    <section className="tech-section tech-principles tp-principles"><div className="tech-shell"><div className="tech-principle-grid">{platformPrinciples.map(([en,title,copy],index)=><article key={en}><div className="tech-principle-visual"><img src={`/assets/20260828-${index+1}.png`} alt="" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="tp-section tp-core"><div className="tp-shell"><SectionHead title="财富管理全流程的核心能力" copy="从产品构建、资产账户到交易执行，建立可组合、可扩展的核心能力，为多品类财富管理业务提供统一底座。"/><div className="tp-infra-list">
      <article className="product"><div className="tp-infra-copy"><small>Product Infrastructure</small><h3>多元产品管理</h3><p>一站式多品类金融产品快速构建、统一接入、灵活运营的中台化产品管理中心。</p><ul><li><b>模板化产品构建</b><span>灵活组合产品、交易与费用要素，支撑多品类产品搭建与上线。</span></li><li><b>多 TA 产品接入</b><span>快速引入三方 TA 产品并同步更新产品属性。</span></li><li><b>灵活运营与投放</b><span>支持多 TA 切换、一键上下架与白名单投放策略。</span></li></ul></div><div className="tp-product-map tp-infra-image"><img src="/assets/product-template-labeled.png" alt="产品模板与统一运营分发架构示意"/></div></article>
      <article className="account"><div className="tp-account-map tp-infra-image"><img src="/assets/account-architecture-labeled.png" alt="财富管理账户关系示意"/></div><div className="tp-infra-copy"><small>Account Infrastructure</small><h3>新一代财富管理账户</h3><p>以客户为核心，构建账户管理、持仓流水、财富配置、关联交易与清结算的一体化能力。</p><ul><li><b>灵活层级架构</b><span>父子账户树形设计支持按需扩展账户层级。</span></li><li><b>基于目标的资产隔离</b><span>通过“用户－账户－持仓”三层逻辑管理不同财富目标。</span></li><li><b>全链路资产追溯</b><span>实时流水支持回溯任意时刻的资产状态。</span></li></ul></div></article>
      <article className="trading"><div className="tp-infra-copy"><small>Trading Infrastructure · Powered by FinMix</small><h3>灵活、稳固的交易能力</h3><p>由自研 FinMix 交易与柜台基础设施提供核心支撑，适配多品类、复杂流程与不同交易连接。</p><ul><li><b>弹性交易单元</b><span>基金、票据、债券共享账户、结单与用户能力。</span></li><li><b>灵活交易流程</b><span>执行计划、多 Session 与多批次适配不同市场规则。</span></li><li><b>多 TA 与多上手</b><span>配置化接入、账户隔离、灵活切换与转仓。</span></li></ul></div><div className="tp-finmix-map tp-infra-image"><img src="/assets/finmix-infrastructure-labeled.png" alt="FinMix 交易基础设施示意"/></div></article>
    </div></div></section>

    <section className="tp-section tp-architecture"><div className="tp-shell"><SectionHead title="为金融核心业务而构建的稳健架构" copy="通过分布式与单元化架构，在业务规模持续增长的同时兼顾性能、可靠性与资源效率。" light/><div className="tp-architecture-layout"><div className="tp-dsu-image"><img src="/assets/59102538-8fee-46fa-ab04-983e73667727.png" alt="DSU 单元化架构与负载均衡示意"/></div><div className="tp-value-list">{architectureValues.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>

    <section className="tp-section tp-open"><div className="tp-shell"><SectionHead title="灵活融入机构现有技术体系" copy="通过标准接口、企业鉴权及模块化服务能力，让机构在保留现有核心系统的基础上按需扩展财富管理能力。"/><div className="tp-open-layout"><div className="tp-open-map tp-open-map-image"><img src="/assets/open-platform-integration-light.png" alt="Finloop 开放平台连接机构系统与业务渠道的架构示意"/><header><h3>连接现有系统与业务渠道</h3><p>在核心系统、身份权限和业务应用之间建立连接，并将平台能力输出至机构现有渠道。</p></header></div><div className="tp-open-grid">{openCapabilities.map(([icon,title,copy])=><article key={title}><i data-lucide={icon} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>

    <section className="tp-section tp-web3"><div className="tp-shell"><div className="tp-web3-head-row"><SectionHead title="构建 Web3 与 RWA 金融基础设施" copy="围绕资产数字化、链上连接、钱包风险识别与产品发行分销，为机构开展 Web3 与 RWA 业务提供底层技术支持。" light/><Link className="tp-inline-link" to="/products/finrwa">探索 FinRWA Platform →</Link></div><div className="tp-web3-grid">{[['/assets/image 37.png','RWA 基础设施','支持资产数字化建模、发行配置与存续管理，覆盖产品全生命周期。'],['/assets/image 38.png','区块链连接','对接链上网络、智能合约与资产数据，支持跨系统可信连接。'],['/assets/image 39.png','钱包与 KYT','关联投资者身份与钱包地址，通过 KYT 能力识别链上交易风险。'],['/assets/image 40.png','发行与分销','支持产品发行、额度管理与多渠道分销，连接持有与运营流程。']].map(([image,title,copy])=><article key={title}><img src={image} alt=""/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="tp-section tp-ai"><div className="tp-shell"><div className="tp-ai-head-row"><SectionHead title="构建面向金融业务的完整 AI 能力" copy="Finloop AI 将模型、数据、Agent 与金融工作流连接起来，为机构提供从信息理解、分析决策到任务执行的智能能力。"/><Link className="tp-ai-entry" to="/ai">进入 Finloop AI →</Link></div><div className="tp-ai-grid">{aiCapabilities.map(([title,copy],index)=><article key={title}><img src={`/assets/image ${33+index}.png`} alt=""/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="tp-section tp-deployment"><div className="tp-shell"><SectionHead title="灵活部署，适配不同机构技术环境" copy="根据机构的数据、安全、治理与基础设施要求，选择企业级 SaaS 或独立私有化部署。"/><div className="tp-deploy-grid"><article><h3>企业 SaaS</h3><p>共享持续升级的平台能力，同时保持不同租户的数据隔离。</p><div>{['企业级多租户','数据隔离','标准 OpenAPI','快速接入','持续升级'].map(item=><span key={item}>{item}</span>)}</div></article><article><h3>私有化部署</h3><p>部署于机构独立资源环境，并根据项目范围提供配置和交付协同。</p><div>{['独立部署','数据自主可控','深度配置','多种云环境','专业实施交付'].map(item=><span key={item}>{item}</span>)}</div></article></div></div></section>

    <section className="tp-contact"><div className="tp-shell"><div><small>CONTACT FINLOOP</small><h2>让技术能力进入您的真实业务流程</h2><p>无论是核心系统扩展、开放平台接入、AI 能力应用，还是 Web3 与 RWA 业务探索，欢迎与 Finloop 团队交流。</p></div><div className="tp-contact-actions"><Link className="button button-light" to="/contact">预约咨询</Link></div></div></section>
  </main>;
}
