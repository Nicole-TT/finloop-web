import { Link } from 'react-router-dom';

const capabilities = [
  { title: '提升闲置及短期资金使用效率', copy: '根据企业资金期限和流动性需求，为短期闲置资金提供灵活的现金管理及投资选择。', items: ['货币基金', '现金管理产品', '短期投资', '灵活申赎', '流动性管理', '收益查看'], links: [['企业理财投资', '/solutions/corporate-treasury']], kind: 'cash', core: 'LIQUIDITY', visual: ['经营资金', '短期闲置资金', '现金管理与投资'] },
  { title: '为企业资金提供更多投资选择', copy: '根据企业投资资格、风险偏好及资金期限，连接不同类型的传统及创新投资产品。', items: ['基金', '债券', '结构性产品', '私募产品', '其他合资格投资产品'], links: [['企业理财投资', '/solutions/corporate-treasury']], kind: 'products', core: 'MULTI-ASSET', visual: ['资金期限', '投资资格与风险', '多资产产品'] },
  { title: '从开户、交易到资产统一管理', copy: '在线管理企业投资账户、资金、交易与资产信息，减少不同产品和渠道之间的管理割裂。', items: ['企业开户', 'KYC / KYB', 'PI 认证', '出入金', '交易', '持仓', '资产', '流水', '报表'], links: [['星企通', '/products/xingqitong']], kind: 'account', core: '星企通', visual: ['企业账户', '交易与资金', '资产与报表'] },
  { title: '适配企业内部投资决策与管理流程', copy: '通过多角色、多权限和操作留痕，支持不同规模企业建立更加清晰的投资管理机制。', items: ['企业成员管理', '角色权限', '投资权限', '操作授权', '审批', '操作留痕', '多账户管理'], links: [['星企通', '/products/xingqitong']], kind: 'governance', core: 'CONTROL', visual: ['成员与角色', '授权与审批', '操作记录'] },
  { title: '让企业投资连接现有 Treasury 与内部系统', copy: '大型企业可通过 API 获取账户、资产、交易及报表数据，并与现有资金管理系统进行集成。', items: ['账户数据', '资产数据', '交易数据', '资金数据', '报表数据', 'API 集成'], links: [['API 与技术平台', '/technology-platform']], kind: 'api', core: 'API', visual: ['Treasury 系统', '企业投资能力', '账户与资产数据'] },
  { title: '更高效地获取、理解和使用投资信息', copy: '通过 AI 辅助产品理解、资产分析与报告生成，为企业投资管理提供更高效的信息支持。', items: ['产品检索', '产品解读', '投资信息查询', '资产分析', '报告生成', '智能助手'], links: [['Finloop AI', '/ai']], kind: 'ai', core: 'AI', visual: ['投资信息', '分析与理解', '报告与助手'] },
];

const plans = [
  { title: '单一产品投资需求', copy: '适合投资目标明确、投资频率较低的企业或法团专业投资者。', stack: ['企业投资账户', '财富产品', '标准交易与服务能力'] },
  { title: '持续企业理财需求', copy: '存在持续现金管理与多资产投资需求。', stack: ['星企通', '财富产品', '账户及交易能力', 'AI'] },
  { title: '大型企业 / 集团企业', copy: '存在多账户、多成员、复杂权限或已有 Treasury 系统。', stack: ['星企通', 'API', '多账户与权限管理', 'AI', '定制化集成'] },
];

function TreasuryVisual({ kind, core, items }: { kind: string; core: string; items: string[] }) {
  return <figure className={`cif-visual ${kind}`} aria-label={`${core} 企业投资能力结构`}><div className="cif-core"><small>ENTERPRISE</small><strong>{core}</strong></div><div className="cif-steps">{items.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div></figure>;
}

export function EnterpriseSolutionPage() {
  return <main className="cif-page" id="main">
    <section className="cif-hero" data-header-theme="inverse"><div className="cif-shell cif-hero-grid"><div><h1>让企业自有资金得到<br />更高效的管理与投资</h1><p>面向企业、集团公司及法团专业投资者，连接现金管理与多元财富产品，并通过企业级账户、权限及资产管理能力提升资金使用效率。</p><div className="cif-actions"><a className="button button-accent" href="#capabilities">探索企业理财方案</a><Link to="/contact">联系我们</Link></div></div><div className="cif-hero-board" aria-label="企业资金与投资管理示意"><header><small>CORPORATE TREASURY</small><strong>企业资金全景</strong><span>账户 · 权限 · 投资 · 资产</span></header><div>{[['可用资金','CASH'],['现金管理','LIQUIDITY'],['多资产投资','INVESTMENT'],['资产与报表','ASSETS']].map(([title, label], index) => <article className={index === 1 ? 'active' : ''} key={title}><small>{label}</small><strong>{title}</strong></article>)}</div></div></div></section>

    <section className="cif-intro" id="capabilities"><div className="cif-shell"><h2>围绕企业资金，建立连续的投资管理能力</h2><p>从短期流动性管理和产品选择，到企业账户、内部权限、Treasury 集成与 AI 辅助，让资金信息与投资流程保持连接。</p></div></section>

    <div className="cif-capabilities">{capabilities.map((item, index) => <section className={`cif-capability${index % 2 ? ' reverse' : ''}`} key={item.title}><div className="cif-shell cif-capability-grid"><div className="cif-copy"><h2>{item.title}</h2><p>{item.copy}</p><div className="cif-tags">{item.items.map(value => <span key={value}>{value}</span>)}</div><div className="cif-links">{item.links.map(([label, href]) => <Link to={href} key={label}>{label} <span>→</span></Link>)}</div></div><TreasuryVisual kind={item.kind} core={item.core} items={item.visual} /></div></section>)}</div>

    <section className="cif-plans"><div className="cif-shell"><header><h2>根据企业投资复杂度灵活组合</h2><p>从单一投资账户到集团级系统连接，按资金规模、管理频率与内部治理要求选择对应方案。</p></header><div className="cif-plan-grid">{plans.map(plan => <article key={plan.title}><h3>{plan.title}</h3><p>{plan.copy}</p><div>{plan.stack.map((item, index) => <span key={item}>{index > 0 && <i>＋</i>}{item}</span>)}</div></article>)}</div></div></section>

    <section className="cif-cta"><div className="cif-shell"><div><h2>让企业资金管理与投资<br />进入同一条业务链路</h2><p>与 Finloop 团队讨论适合企业资金规模、流动性需求与系统基础的理财方案。</p></div><Link className="button button-light" to="/contact">联系我们</Link></div></section>
  </main>;
}
