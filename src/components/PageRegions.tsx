import React from 'react';

type MarkupProps = { html: string };

export function Markup({ html }: MarkupProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
