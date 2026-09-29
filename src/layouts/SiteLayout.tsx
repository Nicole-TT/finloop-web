import { isEnglish, t } from '../i18n';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MobileDrawer, SiteFooter, SiteHeader } from '../components/PageRegions';
import { FinloopAssistantProvider } from '../components/FinloopAssistant';

type SiteLayoutProps = {
  headerMarkup: string;
  mobileDrawerMarkup: string;
  footerMarkup: string;
  initializeShell: () => void;
};

export function SiteLayout({ headerMarkup, mobileDrawerMarkup, footerMarkup, initializeShell }: SiteLayoutProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => initializeShell(), [initializeShell]);

  useEffect(() => {
    document.documentElement.classList.add('route-changing');
    window.scrollTo({ top: 0, behavior: 'auto' });
    const routeSection = pathname.split('/').filter(Boolean)[0] || '';
    const activeSection = pathname === '/products'
      ? 'financial'
      : pathname.startsWith('/products/') || routeSection === 'technology-platform'
        ? 'technology'
        : ['support', 'resources'].includes(routeSection)
          ? 'resources'
          : ['contact', 'careers'].includes(routeSection)
            ? 'about'
            : routeSection;
    const navItems = document.querySelectorAll<HTMLElement>('.desktop-nav > .nav-link');

    navItems.forEach((item) => {
      const href = item.getAttribute('href')?.replace(/^\/en(?=\/|$)/, '');
      const itemSection = item.dataset.menu || href?.split('/').filter(Boolean)[0];
      const isActive = itemSection === activeSection;

      item.classList.toggle('active', isActive);
      if (isActive) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });

    const frame = window.requestAnimationFrame(() => {
      document.documentElement.classList.remove('route-changing');
      window.dispatchEvent(new Event('finloop:route-change'));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove('route-changing');
    };
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.site-header');
    if (!header) return;

    function syncHeaderTheme() {
      const inverseRegion = document.querySelector<HTMLElement>('[data-header-theme="inverse"]');
      const hero = document.querySelector<HTMLElement>('.hero-scroll-stage');
      const heroProgress = hero?.dataset.headerProgress;
      const scrollProgress = heroProgress !== undefined && hero!.getBoundingClientRect().bottom > header!.offsetHeight
        ? Number(heroProgress)
        : Math.min(1, Math.max(0, window.scrollY / 100));
      const isOverInverseRegion = Boolean(
        inverseRegion
        && inverseRegion.getBoundingClientRect().bottom > header!.offsetHeight,
      );

      header!.style.setProperty('--header-scroll-progress', String(scrollProgress));
      header!.classList.toggle('inverted', isOverInverseRegion && scrollProgress < .5);
      header!.classList.toggle('scrolled', scrollProgress >= .5);
    }

    const frame = window.requestAnimationFrame(syncHeaderTheme);
    window.addEventListener('scroll', syncHeaderTheme, { passive: true });
    window.addEventListener('resize', syncHeaderTheme);
    window.addEventListener('finloop:hero-theme', syncHeaderTheme);
    window.addEventListener('finloop:route-change', syncHeaderTheme);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', syncHeaderTheme);
      window.removeEventListener('resize', syncHeaderTheme);
      window.removeEventListener('finloop:hero-theme', syncHeaderTheme);
      window.removeEventListener('finloop:route-change', syncHeaderTheme);
    };
  }, [pathname]);

  useEffect(() => {
    function handleInternalLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="/"]');
      if (!anchor || anchor.target === '_blank') return;
      event.preventDefault();
      navigate((anchor.getAttribute('href') || '/').replace(/^\/en(?=\/|$)/, '') || '/');
    }

    function switchLanguage(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target?.closest('.language-button')) return;
      const path = window.location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
      window.location.assign(`${isEnglish ? path : `/en${path}`}${window.location.search}${window.location.hash}`);
    }
    document.addEventListener('click', switchLanguage);
    document.addEventListener('click', handleInternalLink);
    return () => { document.removeEventListener('click', handleInternalLink); document.removeEventListener('click', switchLanguage); };
  }, [navigate]);

  return (
    <FinloopAssistantProvider>
      <a className="skip-link" href="#main">{t('跳至主要内容')}</a>
      <SiteHeader html={headerMarkup} />
      <MobileDrawer html={mobileDrawerMarkup} />
      <Suspense fallback={<main id="main" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: '120px 24px' }}><p role="status">{isEnglish ? 'Loading…' : '正在加载…'}</p></main>}><Outlet /></Suspense>
      <SiteFooter html={footerMarkup} />
    </FinloopAssistantProvider>
  );
}
