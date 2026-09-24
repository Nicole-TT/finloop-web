import { en } from './en';

// The URL is the source of truth; switching languages reloads the shell so its
// existing imperative navigation listeners are initialized exactly once.
export const isEnglish = /^\/en(?:\/|$)/.test(window.location.pathname);
export const locale = isEnglish ? 'en' : 'zh-CN';
export const t = (text: string = '') => isEnglish ? en[text] ?? text : text;
export const localizedHref = (href: string) => isEnglish && href.startsWith('/') && !href.startsWith('//') && !/^\/en(?:\/|$)/.test(href) ? `/en${href}` : href;

export function translateMarkup(html: string) {
  if (!isEnglish) return html;
  const template = document.createElement('template');
  template.innerHTML = html;
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = node.textContent ?? '';
    const trimmed = value.trim();
    if (trimmed) node.textContent = value.replace(trimmed, t(trimmed));
  }
  template.content.querySelectorAll<HTMLElement>('*').forEach(element => {
    ['aria-label', 'alt', 'title', 'placeholder'].forEach(attribute => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, t(value));
    });
    const href = element.getAttribute('href');
    if (href) element.setAttribute('href', localizedHref(href));
  });
  return template.innerHTML;
}

document.documentElement.lang = locale;
if (isEnglish) {
  document.title = 'Finloop | Institutional Wealth Technology';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Finloop connects wealth management, trading, RWA and AI capabilities for financial institutions, digital platforms and enterprises.');
}
