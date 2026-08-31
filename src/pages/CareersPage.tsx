import { useEffect, useMemo, useState } from 'react';

type Job = {
  title: string;
  department: string;
  type: string;
  location: string;
  date: string;
  summary: string;
  urgent?: boolean;
};

const jobs: Job[] = [
  { title: '产品经理 ESOP', department: '产品组', type: '全职', location: '深圳市', date: '2026-08-14', summary: '负责跨境 ESOP 股权激励平台全流程产品规划，覆盖期权、RSU 等业务场景。', urgent: true },
  { title: '债券产品经理', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-30', summary: '负责公司境外债券产品的全生命周期产品设计，覆盖产品库、交易及清结算等业务。', urgent: true },
  { title: '产品经理 - 金融科技', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-17', summary: '根据业务发展规划，完成港美股客户端产品规划、需求落地与持续优化。', urgent: true },
  { title: '产品经理 - 股票 APP', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-17', summary: '围绕港美股证券交易场景，负责产品流程设计、原型设计与跨团队协作。', urgent: true },
  { title: '产品经理', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-17', summary: '负责金融产品相关需求分析、产品方案设计与项目推进。' },
  { title: 'AI 产品经理（基金智能投顾）', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-16', summary: '负责 AI 金融工作台的产品规划与迭代，覆盖智能尽调、风险监控与舆情监控等场景。' },
  { title: '投顾产品经理', department: '产品组', type: '全职', location: '深圳市', date: '2026-07-16', summary: '负责基金投顾相关产品规划、需求分析及业务流程落地。' },
];

const locations = ['深圳市', '长沙市', '香港', '上海市', '北京市', '其他'];
const departments = ['科技研发部', '产品组', '风险管理部', 'AI 组', '投资银行部', '项目部', '产品设计部', '互联网财富中心', '运营支持部', '前台组'];

export function CareersPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [department, setDepartment] = useState('产品组');
  const [openJob, setOpenJob] = useState<string | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = '加入我们｜Finloop 星路科技';
    return () => { document.title = previousTitle; };
  }, []);

  const filteredJobs = useMemo(() => jobs.filter(job =>
    (!query || `${job.title}${job.summary}`.toLowerCase().includes(query.toLowerCase()))
    && (!location || job.location === location)
    && (!jobType || job.type === jobType)
    && (!department || job.department === department)
  ), [query, location, jobType, department]);

  const clearFilters = () => { setQuery(''); setLocation(''); setJobType(''); setDepartment(''); };

  return <main className="careers-page" id="main">
    <section className="careers-hero" data-header-theme="inverse">
      <div className="careers-shell"><span>CAREERS AT FINLOOP</span><h1>加入我们</h1><p>与一群相信金融与科技可以彼此成就的人，一起连接财富、数字资产与 AI 的未来。</p></div>
    </section>
    <section className="careers-board">
      <div className="careers-shell careers-layout">
        <aside className="careers-filter" aria-label="职位筛选">
          <header><h2>职位筛选</h2><button type="button" onClick={clearFilters}>清除 <b>×</b></button></header>
          <p>已选 {Number(Boolean(location)) + Number(Boolean(jobType)) + Number(Boolean(department))} 条&nbsp;｜&nbsp;{filteredJobs.length} 结果</p>
          <label className="careers-search"><span>职位搜索</span><i><input value={query} onChange={event => setQuery(event.target.value)} placeholder="搜索职位关键词" />⌕</i></label>
          <FilterGroup title="工作地点" options={locations} selected={location} onChange={setLocation} />
          <FilterGroup title="职位性质" options={['全职', '兼职', '实习', '其他']} selected={jobType} onChange={setJobType} />
          <FilterGroup title="所属部门" options={departments} selected={department} onChange={setDepartment} />
        </aside>
        <div className="careers-results">
          <header><h2>在招职位</h2><button type="button" onClick={() => navigator.clipboard?.writeText(window.location.href)} aria-label="分享招聘页面">分享 ↗</button></header>
          <div className="careers-list">
            {filteredJobs.map(job => <article className={openJob === job.title ? 'is-open' : ''} key={job.title}>
              <button type="button" className="job-summary" onClick={() => setOpenJob(openJob === job.title ? null : job.title)} aria-expanded={openJob === job.title}>
                <span className="job-main"><strong>{job.urgent && <em>急</em>}{job.title}</strong><small>{job.department}<i />{job.type}<i />广东·{job.location}</small><p>{job.summary}</p></span>
                <span className="job-meta"><small>发布于 {job.date}</small><b aria-hidden="true">↗</b><i aria-hidden="true">⌄</i></span>
              </button>
              {openJob === job.title && <div className="job-detail"><p>{job.summary}</p><a href={`mailto:CS@finloop.hk?subject=${encodeURIComponent(`应聘：${job.title}`)}`}>投递简历 <span>→</span></a></div>}
            </article>)}
            {filteredJobs.length === 0 && <div className="careers-empty"><strong>暂无匹配职位</strong><p>请调整筛选条件后重试。</p><button type="button" onClick={clearFilters}>清除筛选</button></div>}
          </div>
        </div>
      </div>
    </section>
  </main>;
}

function FilterGroup({ title, options, selected, onChange }: { title: string; options: string[]; selected: string; onChange: (value: string) => void }) {
  return <fieldset className="filter-group"><legend>{title}<span>⌃</span></legend>{options.map(option => <label key={option}><input type="checkbox" checked={selected === option} onChange={() => onChange(selected === option ? '' : option)} /><span>{option}</span></label>)}</fieldset>;
}
