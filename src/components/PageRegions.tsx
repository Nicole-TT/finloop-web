import React, { useMemo } from 'react';
import { translateMarkup } from '../i18n';

type MarkupProps = { html: string };

export function Markup({ html }: MarkupProps) {
  const localized = useMemo(() => translateMarkup(html), [html]);
  return <div dangerouslySetInnerHTML={{ __html: localized }} />;
}

export function SiteHeader({ html }: MarkupProps) {
  return <Markup html={html} />;
}

export function MobileDrawer({ html }: MarkupProps) {
  return <Markup html={html} />;
}

export function MainContent({ html }: MarkupProps) {
  return <Markup html={html} />;
}

export function SiteFooter({ html }: MarkupProps) {
  return <Markup html={html} />;
}
