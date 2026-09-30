import { translateNode } from '../i18n';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ProductHeroContentProps = {
  className?: string;
  category: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  children?: ReactNode;
};

export function ProductHeroContent({
  className = '',
  category,
  title,
  description,
  ctaLabel,
  children,
}: ProductHeroContentProps) {
  return <div className={`${className} product-hero-copy`.trim()}>
    <p className="product-hero-category">{translateNode(category)}</p>
    <h1>{translateNode(title)}</h1>
    <p className="product-hero-description">{translateNode(description)}</p>
    <div className="product-hero-actions">
      <Link className="button button-accent" to="/contact">{translateNode(ctaLabel)}</Link>
    </div>
    {translateNode(children)}
  </div>;
}
