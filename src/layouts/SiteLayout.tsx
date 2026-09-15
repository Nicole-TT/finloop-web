import { useEffect } from 'react';
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
      const href = item.getAttribute('href');
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
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / 100));
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

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', syncHeaderTheme);
      window.removeEventListener('resize', syncHeaderTheme);
    };
  }, [pathname]);

  useEffect(() => {
    function handleInternalLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="/"]');
      if (!anchor || anchor.target === '_blank') return;
      event.preventDefault();
      navigate(anchor.getAttribute('href') || '/');
    }

    document.addEventListener('click', handleInternalLink);
    return () => document.removeEventListener('click', handleInternalLink);
  }, [navigate]);

  return (
    <FinloopAssistantProvider>
      <SiteHeader html={headerMarkup} />
      <MobileDrawer html={mobileDrawerMarkup} />
      <Outlet />
      <SiteFooter html={footerMarkup} />
    </FinloopAssistantProvider>
  );
}
