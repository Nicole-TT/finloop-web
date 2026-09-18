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
    <p className="product-hero-category">{category}</p>
    <h1>{title}</h1>
    <p className="product-hero-description">{description}</p>
    <div className="product-hero-actions">
      <Link className="button button-accent" to="/contact">{ctaLabel}</Link>
    </div>
    {children}
  </div>;
}
