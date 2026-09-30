import { en } from './en';
import { additionalEnglish, traditionalChinese } from './translations';
import type { ReactNode } from 'react';

// The URL is the source of truth; switching languages reloads the shell so its
// existing imperative navigation listeners are initialized exactly once.
export const isEnglish = /^\/en(?:\/|$)/.test(window.location.pathname);
export const isTraditional = /^\/zh-Hant(?:\/|$)/.test(window.location.pathname);
export const locale = isEnglish ? 'en' : isTraditional ? 'zh-Hant' : 'zh-CN';
export const localePrefix = isEnglish ? '/en' : isTraditional ? '/zh-Hant' : '';
export const stripLocale = (path: string) => path.replace(/^\/(?:en|zh-Hant)(?=\/|$)/, '') || '/';

const english = { ...additionalEnglish, ...en };

// Translate display text only. Business values, form state and route IDs stay unchanged.
export function t<T = string>(text: T = '' as T): T {
  if (typeof text !== 'string' || locale === 'zh-CN') return text;
  const dictionary = isEnglish ? english : traditionalChinese;
  if (dictionary[text]) return dictionary[text] as T;
  // Composed labels keep their dynamic values while translating each known part.
  const parts = text.split(/(・| · )/);
  if (parts.length > 1) return parts.map(part => dictionary[part] ?? part).join(' · ').replace(/ ·  ·  · /g, ' · ') as T;
  const suffixes: Record<string, [string, string]> = {
    '示例产品，可横向滚动': [' example products; scroll horizontally', '示例產品，可橫向滾動'],
    '界面占位示意': [' interface illustration', '介面佔位示意'],
    '产品界面占位': [' product interface illustration', '產品介面佔位'],
    '产品页面示意': [' product screen illustration', '產品頁面示意'],
    '界面占位': [' interface illustration', '介面佔位'],
    '内容目录': [' contents', '內容目錄'],
  };
  for (const [suffix, labels] of Object.entries(suffixes)) {
    if (text.endsWith(suffix)) return `${t(text.slice(0, -suffix.length))}${labels[isEnglish ? 0 : 1]}` as T;
  }
  return text;
}

export function translateNode<T extends ReactNode>(node: T): T {
  if (typeof node === 'string') return t(node);
  if (Array.isArray(node)) return node.map(item => translateNode(item)) as T;
  return node;
}

export const localizedHref = (href: string) => href && href.startsWith('/') && !href.startsWith('//') && !/^\/(?:assets|api)(?:\/|$)/.test(href)
  ? `${localePrefix}${stripLocale(href)}` : href;

export function languageMenu(id: string) {
  const options = [['zh-CN', '简体中文', ''], ['zh-Hant', '繁體中文', '/zh-Hant'], ['en', 'English', '/en']];
  return `<div class="language-switcher" data-no-translate><button type="button" class="language-button" aria-label="${isEnglish ? 'Choose language' : isTraditional ? '選擇語言' : '选择语言'}" aria-expanded="false" aria-controls="${id}"><i data-lucide="globe-2"></i><span>${isEnglish ? 'EN' : isTraditional ? '繁' : '简'}</span><i data-lucide="chevron-down"></i></button><div id="${id}" class="language-options" hidden>${options.map(([code, label, prefix]) => `<a lang="${code}" data-language="${prefix}" href="${prefix || '/'}"${locale === code ? ' aria-current="true"' : ''}>${label}</a>`).join('')}</div></div>`;
}

export function translateMarkup(html: string) {
  if (locale === 'zh-CN') return html;
  const template = document.createElement('template');
  template.innerHTML = html;
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest('[data-no-translate]')) continue;
    const value = node.textContent ?? '';
    const trimmed = value.trim();
    if (trimmed) node.textContent = value.replace(trimmed, t(trimmed));
  }
  template.content.querySelectorAll<HTMLElement>('*').forEach(element => {
    if (element.closest('[data-no-translate]')) return;
    ['aria-label', 'alt', 'title', 'placeholder'].forEach(attribute => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, t(value));
    });
    const href = element.getAttribute('href');
    if (href && element.tagName.toLowerCase() === 'a') element.setAttribute('href', localizedHref(href));
  });
  return template.innerHTML;
}

document.documentElement.lang = locale;
if (isEnglish) {
  document.title = 'Finloop | Institutional Wealth Technology';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Finloop connects wealth management, trading, RWA and AI capabilities for financial institutions, digital platforms and enterprises.');
}
