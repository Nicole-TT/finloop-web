import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductHeroContent } from '../components/ProductHeroContent';

const workflow = [
  ['客户开户','building-2'],['准入与合规','shield-check'],['产品研究','list-filter'],['投资判断','pie-chart'],
  ['订单与执行','arrow-left-right'],['持仓与组合','wallet-cards'],['报告与结单','file-chart-column'],['持续服务','circle-check'],
];
const coreValues = [
  ['统一客户视图', '集中管理客户、账户、投资状态与服务记录。','database'],
  ['贯通业务流程', '从产品研究、投资判断到交易、持仓和报告持续衔接。','arrow-left-right'],
  ['提升团队协作', '让客户经理、投资、交易和运营人员共享业务状态。','briefcase-business'],
];

function SectionHead({ title, copy }: { title: string; copy?: string }) {
  return <div className="eam-section-head"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function GreyUI({ title, compact = false }: { title: string; compact?: boolean }) {
  return <div className={`eam-ui ${compact ? 'compact' : ''}`} aria-label={`${title}界面占位`}>
    <aside><b>FE</b>{[1, 2, 3, 4, 5].map(x => <i key={x} />)}</aside>
    <div className="eam-ui-main"><header><strong>{title}</strong><span /></header><div className="eam-ui-metrics"><i /><i /><i /></div><div className="eam-ui-content"><section>{[1, 2, 3, 4].map(x => <span key={x} />)}</section><figure><i /><i /><i /><i /><i /></figure></div></div>
  </div>;
}

function ClientCaseSection() {
  const cases = [{ name: '挖财', mark: '挖' }, { name: 'Z*合', mark: 'Z' }];
  const [activeCase, setActiveCase] = useState<(typeof cases)[number] | null>(null);
  useEffect(() => {
    if (!activeCase) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActiveCase(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [activeCase]);
  return <section className="eam-cases f1-proof eam-section"><div className="eam-shell"><SectionHead title="客户案例" copy="了解专业财富管理机构如何通过 FinEAM 连接客户运营、投资管理与持续服务。" /><div className="f1-case-entries">{cases.map(item => <button type="button" key={item.name} onClick={() => setActiveCase(item)} aria-haspopup="dialog"><div className="eam-case-mark" aria-hidden="true">{item.mark}</div><h3>{item.name}</h3><small>专业财富管理机构</small><p>通过统一财富工作空间，连接客户、账户、投资与服务流程。</p></button>)}</div></div>{activeCase && <div className="f1-case-modal" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveCase(null); }}><article role="dialog" aria-modal="true" aria-labelledby="eam-case-title"><button className="f1-case-close" type="button" onClick={() => setActiveCase(null)} aria-label="关闭案例详情">×</button><header><div className="eam-case-mark" aria-hidden="true">{activeCase.mark}</div><div><small>专业财富管理机构</small><h2 id="eam-case-title">{activeCase.name}</h2></div></header><section className="f1-case-background"><h3>客户案例说明</h3><p>当前仅展示已确认的客户名称与 FinEAM 产品场景。具体合作范围、实施过程、业务成果与客户评价将在获得公开授权后补充。</p></section><div className="f1-case-detail-grid"><section><h3>连接客户信息</h3><p>围绕客户与账户建立统一的财富业务视图。</p></section><section><h3>支持投资工作</h3><p>在同一工作空间衔接产品研究与投资管理。</p></section><section><h3>延伸持续服务</h3><p>将资产信息与后续客户服务保持连接。</p></section></div><p className="f1-case-note">页面内容采用保守表述，不代表未经客户确认的项目范围或实施成果。</p></article></div>}</section>;
}

export function FinEAMPage() {
  return <main className="eam-page" id="main">
    <section className="eam-hero product-hero-standard" data-header-theme="inverse"><div className="eam-shell eam-hero-grid">
      <ProductHeroContent className="eam-hero-copy" category="FINEAM · 专业财富管理平台" title="让专业财富管理贯穿客户服务全流程" description="面向 EAM、家族办公室及专业财富管理机构，统一连接客户、账户、投资组合、产品交易与持续服务，提升团队协作和财富业务运营效率。" ctaLabel="预约产品演示"/>
      <div className="eam-hero-visual"><GreyUI title="财富业务工作空间" /><div className="eam-float-card a" /><div className="eam-float-card b" /></div>
    </div></section>

    <section className="eam-reality eam-section"><div className="eam-shell"><SectionHead title="一个工作空间，运营完整财富业务" copy="将分散在不同系统、表格和沟通流程中的财富业务集中到统一平台，让团队围绕同一客户持续协作。" /><div className="eam-value-stage"><div className="eam-value-grid">{coreValues.map(([title,copy,icon])=><article key={title}><i data-lucide={icon} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>

    <section className="eam-flow eam-section" id="workflow"><div className="eam-shell eam-flow-layout"><div className="eam-flow-visual" aria-label="FinEAM 财富业务流程">{workflow.map(([title,icon],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><i data-lucide={icon} aria-hidden="true"/><strong>{title}</strong></article>)}</div><div className="eam-flow-copy"><SectionHead title="从客户准入，到持续财富服务" copy="一笔财富业务在 FinEAM 中沿着连续流程向前推进，每个环节都回到同一客户关系和资产视图。"/></div></div></section>

    <section className="eam-core-intro"><div className="eam-shell"><SectionHead title="看清每一位客户，推进每一项财富业务" copy="FinEAM 将客户、账户、投资与服务信息连接在一个工作空间，帮助团队更快理解客户财富、形成投资判断并持续提供服务。" /></div></section>

    <section className="eam-capability eam-section"><div className="eam-shell eam-split"><div><SectionHead title="统一客户与资产视图" copy="将客户资料、账户和财富业务关系组织在同一平台，从客户准入开始建立持续可管理的数字财富档案。" /></div><GreyUI title="客户与账户" /></div></section>

    <section className="eam-invest eam-section"><div className="eam-shell"><div className="eam-invest-grid"><GreyUI title="产品研究与筛选" /><div><SectionHead title="更快形成投资判断" copy="将财富产品、市场资讯与 AI 决策辅助连接起来，减少业务人员在产品库、资讯网站和人工表格之间来回切换。" /></div></div></div></section>

    <section className="eam-execution eam-section"><div className="eam-shell eam-execution-grid"><div><SectionHead title="从判断直接走向行动" copy="产品选择、订单、持仓和报告连接在同一流程中，使投资判断可以持续向下执行，并重新回到客户服务。" /></div><GreyUI title="交易、持仓与报告" compact /></div></section>

    <section className="eam-investor eam-section"><div className="eam-shell"><div className="eam-investor-focus"><div className="eam-investor-copy"><h3>客户随时掌握账户与资产</h3><p>最终投资者可以通过 App 完成账户开通，并持续查看资产配置、持仓、结单及费用等关键信息，让常用财富服务不再依赖线下沟通。</p><div>{[['线上开户', '在线提交开户资料并开通证券账户'], ['资产配置', '查看投资组合与资产配置情况'], ['持仓与结单', '持续查阅持仓明细及账户结单'], ['费用信息', '清晰查看账户相关费用信息']].map(([t, p]) => <article key={t}><strong>{t}</strong><span>{p}</span></article>)}</div></div><div className="eam-app-stage"><div className="eam-app-note"><span>机构工作台</span><i>同步客户与资产信息</i></div><div><small>INVESTOR APP</small><div className="eam-phone"><span /><span /><figure /><i /><i /><i /></div></div></div></div></div></section>

    <ClientCaseSection />

    <section className="eam-cta"><div className="eam-shell"><h2>把完整财富业务，<br />带回一个平台</h2><p>了解 FinEAM 如何连接机构运营与投资者财富体验。</p><Link className="button button-light" to="/contact">预约 FinEAM 演示 →</Link></div></section>
  </main>;
}
