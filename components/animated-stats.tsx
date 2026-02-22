"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CountUp } from "use-count-up";
import type { LucideIcon } from "lucide-react";

export interface AnimatedStat {
  value: number;
  label: string;
  Icon: LucideIcon;
  suffix?: string;
  decimalPlaces?: number;
  featured?: boolean;
}

interface AnimatedStatsProps {
  stats: AnimatedStat[];
  className?: string;
}

/**
 * Stats grid with CountUp animation on scroll, like the home page "Live impact" section.
 */
export function AnimatedStats({ stats, className = "" }: AnimatedStatsProps) {
  const { ref, revealed } = useScrollReveal(0.2);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const IconComponent = stat.Icon;
          return (
            <div
              key={idx}
              className={`p-6 text-center rounded-lg border transition-colors transition-shadow duration-300 cursor-default group ${
                stat.featured
                  ? "border-brand-green/40 bg-brand-green-light/30 hover:border-brand-green/40 hover:bg-brand-green-light/40"
                  : "border-gray-200 bg-white/50 hover:border-brand-blue/30 hover:bg-brand-blue/5"
              }`}
            >
              <div className="flex justify-center mb-3">
                <IconComponent className="w-10 h-10 text-brand-navy" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent mb-2">
                {revealed ? (
                  <>
                    <CountUp
                      isCounting={revealed}
                      end={stat.value}
                      duration={2.5}
                      decimalPlaces={stat.decimalPlaces ?? (stat.suffix === "kg" ? 1 : 0)}
                    />
                    {stat.suffix ?? ""}
                  </>
                ) : (
                  `0${stat.suffix ?? ""}`
                )}
              </p>
              <p className="legend-text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
