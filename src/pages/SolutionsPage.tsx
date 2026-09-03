import { Link } from 'react-router-dom';

type Solution = [string, string, string];
type Group = { label: string; description: string; items: Solution[] };

export function SolutionsPage({ groups }: { groups: Group[] }) {
  return <main className="solutions-directory" id="main">
    <header className="solutions-directory-hero">
      <div><h1>从业务目标或客户类型出发，找到适合的解决方案</h1><p>Finloop 将产品、平台与基础设施组合成端到端方案，同时保留两种浏览方式，帮助不同阶段的机构快速定位需求。</p></div>
    </header>
    <div className="solutions-directory-groups">
      {groups.map((group, groupIndex) => <section key={group.label} aria-labelledby={`solution-group-${groupIndex}`}>
        <header><span>0{groupIndex + 1}</span><div><h2 id={`solution-group-${groupIndex}`}>{group.label}</h2><p>{group.description}</p></div></header>
        <div>{group.items.map(([id, title, description]) => <Link to={`/solutions/${id}`} key={id}><h3>{title}</h3><p>{description}</p><span>查看方案 →</span></Link>)}</div>
      </section>)}
    </div>
    <section className="solutions-directory-cta"><h2>不确定该从哪一类开始？</h2><p>从您的现有业务与目标出发，与 Finloop 团队一起梳理方案路径。</p><Link className="button button-accent" to="/contact">预约咨询</Link></section>
  </main>;
}
