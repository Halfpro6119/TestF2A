"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { LucideIcon } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
  Icon: LucideIcon;
}

interface StatsRevealGridProps {
  stats: StatItem[];
  className?: string;
}

/**
 * Stats grid that fades in on scroll (for text-based stats like Get Involved).
 * Mirrors hero interactivity with scroll-triggered reveal.
 */
export function StatsRevealGrid({ stats, className = "" }: StatsRevealGridProps) {
  const { ref, revealed } = useScrollReveal(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}
    >
      {stats.map((stat, idx) => {
        const IconComponent = stat.Icon;
        return (
          <div
            key={idx}
            className={`text-center p-6 rounded-xl border border-gray-200 bg-brand-grey/50 hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all duration-500 ease-out ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={
              revealed
                ? { transitionDelay: `${idx * 100}ms` }
                : undefined
            }
          >
            <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <IconComponent className="w-6 h-6 text-brand-navy" />
            </div>
            <p className="heading-display text-xl font-bold text-brand-navy mb-1">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
