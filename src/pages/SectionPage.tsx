import { Link } from 'react-router-dom';

export type PageItem = {
  title: string;
  description: string;
};

type SectionPageProps = {
  title: string;
  description: string;
  items: PageItem[];
};

export function SectionPage({ title, description, items }: SectionPageProps) {
  return (
    <main className="min-h-[70vh] bg-brand-paper" id="main">
      <header className="border-b border-brand-line bg-white px-edge pb-24 pt-40 text-brand-ink max-md:pb-16 max-md:pt-28">
        <div className="mx-auto w-full max-w-[1292px]">
          <h1 className="mb-7 max-w-5xl text-[40px] leading-[1.1] font-medium sm:text-[52px] lg:text-[64px]">{title}</h1>
          <p className="m-0 max-w-3xl text-base leading-8 text-brand-muted sm:text-lg">{description}</p>
        </div>
      </header>
      <section className="mx-auto grid w-[calc(100%-var(--spacing-edge)*2)] max-w-[1292px] grid-cols-1 border-t border-brand-ink py-20 sm:grid-cols-2 lg:grid-cols-3 lg:py-24" aria-label={`${title}内容目录`}>
        {items.map(item => (
          <article className="min-h-0 border-b border-brand-line px-0 py-7 sm:min-h-56 sm:border-r sm:px-8 sm:py-9 sm:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0" key={item.title}>
            <h2 className="mb-5 text-[22px] leading-tight font-medium">{item.title}</h2>
            <p className="m-0 leading-7 text-brand-muted">{item.description}</p>
          </article>
        ))}
      </section>
      <section className="flex flex-col items-start justify-between gap-10 bg-brand-ink px-edge py-20 text-white md:flex-row md:items-center lg:py-24">
        <h2 className="m-0 max-w-3xl text-[30px] leading-tight font-medium sm:text-[36px] lg:text-[48px]">探索适合您业务的财富科技解决方案。</h2>
        <Link className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-brand border border-brand-action bg-brand-action px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5" to="/contact">预约咨询</Link>
      </section>
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main className="min-h-[70vh] bg-brand-ink px-edge pb-28 pt-44 text-white" id="main">
      <div className="mx-auto w-full max-w-[1292px]"><h1 className="mb-7 text-[40px] leading-[1.1] font-medium sm:text-[52px] lg:text-[64px]">页面未找到</h1><p className="mb-8 text-lg text-white/68">该页面尚不存在或地址已经变更。</p><Link className="inline-flex min-h-12 items-center rounded-brand border border-brand-action bg-brand-action px-5 text-sm font-semibold text-white" to="/">返回首页</Link></div>
    </main>
  );
}
