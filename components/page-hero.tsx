"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  /** Back link href (e.g. "/" or "/get-involved") */
  backHref: string;
  /** Back link label */
  backLabel: string;
  /** Main heading */
  heading: string;
  /** Optional subheading/description */
  description?: string;
  /** Optional legend text below description */
  legend?: string;
  /** Optional CTA buttons */
  children?: React.ReactNode;
}

/**
 * Reusable page hero with hero-like styling (widget-container-hero, gradient)
 * and consistent back navigation. Mirrors the home hero's visual treatment.
 */
export function PageHero({
  backHref,
  backLabel,
  heading,
  description,
  legend,
  children,
}: PageHeroProps) {
  return (
    <section
      className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="page-hero-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="widget-container-hero overflow-hidden relative p-8 md:p-10 bg-gradient-to-br from-white via-brand-grey/30 to-white">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light transition-colors duration-300 mb-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
          <h1
            id="page-hero-heading"
            className="heading-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {heading}
          </h1>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-4">
              {description}
            </p>
          )}
          {legend && (
            <p className="legend-text text-gray-500">{legend}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
