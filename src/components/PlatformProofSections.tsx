import { useEffect, useState } from 'react';

type PlatformCase = {
  mark: string;
  name: string;
  type: string;
  copy: string;
  pending?: boolean;
  background?: string;
  details?: Array<[string, string]>;
};

type SectionProps = {
  sectionClass: string;
  shellClass: string;
};

export function PlatformTrustSection({ sectionClass, shellClass }: SectionProps) {
  const points = [
    ['持牌金融服务体系', '相关受规管金融业务由持有香港证监会第 1、4、9 类受规管活动牌照的星路金融开展，具体范围以适用牌照与项目约定为准。'],
    ['专业金融业务能力', '围绕客户、账户、产品、交易与资产运营构建平台能力，让技术始终服务于真实金融流程。'],
    ['合规、权限与记录', '将身份验证、适当性、流程授权和操作记录嵌入业务过程，支持机构建立清晰可控的管理边界。'],
  ];
  return <section className={`platform-trust ${sectionClass}`}><div className={`${shellClass} platform-trust-inner`}><header><h2>专业金融基础，贯穿每一个平台</h2><p>Finloop 将财富科技平台建立在专业金融业务、合规流程与机构级技术基础之上，帮助机构在清晰的业务边界与权限控制下开展金融服务。</p></header><div className="platform-trust-grid">{points.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function PlatformCasesSection({ sectionClass, shellClass, title, copy, cases }: SectionProps & { title: string; copy: string; cases: PlatformCase[] }) {
  const [activeCase, setActiveCase] = useState<PlatformCase | null>(null);
  const activeIndex = activeCase ? cases.findIndex(item => item.name === activeCase.name) : -1;
  const moveCase = (step: number) => setActiveCase(cases[(activeIndex + step + cases.length) % cases.length]);
  useEffect(() => {
    if (!activeCase) return;
    const navigate = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveCase(null);
      if (event.key === 'ArrowLeft') moveCase(-1);
      if (event.key === 'ArrowRight') moveCase(1);
    };
    window.addEventListener('keydown', navigate);
    return () => window.removeEventListener('keydown', navigate);
  }, [activeCase]);
  return <section className={`platform-cases ${sectionClass}`}><div className={shellClass}><header className="platform-cases-head"><h2>{title}</h2><p>{copy}</p></header><div className="platform-case-grid">{cases.map(item => <button type="button" key={item.name} onClick={() => setActiveCase(item)} aria-haspopup="dialog"><div className={`platform-case-mark${item.pending ? ' is-pending' : ''}`} aria-hidden="true">{item.mark}</div><h3>{item.name}</h3><small>{item.type}</small><p>{item.copy}</p></button>)}</div></div>{activeCase && <div className="f1-case-modal" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveCase(null); }}><button className="f1-case-side-nav prev" type="button" onClick={() => moveCase(-1)} aria-label="上一个客户案例">←</button><article role="dialog" aria-modal="true" aria-labelledby="platform-case-title"><button className="f1-case-close" type="button" onClick={() => setActiveCase(null)} aria-label="关闭案例详情">×</button><header><div className={`platform-case-mark${activeCase.pending ? ' is-pending' : ''}`} aria-hidden="true">{activeCase.mark}</div><div><small>{activeCase.type}</small><h2 id="platform-case-title">{activeCase.name}</h2></div></header><section className="f1-case-background"><h3>客户与业务背景</h3><p>{activeCase.background || activeCase.copy}</p></section><div className="f1-case-detail-grid">{(activeCase.details || [['原有业务方式', '具体业务流程与系统现状待客户授权后补充。'], ['平台应用范围', '实际使用模块与上线范围待双方确认后公开。'], ['业务变化与结果', '仅在获得客户确认后披露可验证的业务结果。']]).map(([detailTitle, detailCopy]) => <section key={detailTitle}><h3>{detailTitle}</h3><p>{detailCopy}</p></section>)}</div><div className="f1-case-modal-footer"><p className="f1-case-note">具体项目范围、实施成果及客户评价须在正式发布前经客户确认。</p><span className="f1-case-count">{String(activeIndex + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}</span></div></article><button className="f1-case-side-nav next" type="button" onClick={() => moveCase(1)} aria-label="下一个客户案例">→</button></div>}</section>;
}
