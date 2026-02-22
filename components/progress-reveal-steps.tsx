"use client";

import { useScrollProgress } from "@/hooks/use-scroll-reveal";
import type { LucideIcon } from "lucide-react";

export interface ProgressStep {
  num: number;
  title: string;
  desc: string;
  Icon: LucideIcon;
}

interface ProgressRevealStepsProps {
  steps: ProgressStep[];
  /** Optional progress line (like How It Works on home) */
  showProgressLine?: boolean;
  /** Viewport fraction (0–1) where progress reaches 1. E.g. 0.4 = fully revealed when section top is 40% down. Default 0. */
  progressReachAt?: number;
  className?: string;
}

/**
 * Steps that reveal progressively as user scrolls, with optional progress line.
 * Mirrors the "How It Works" section on the home page.
 */
export function ProgressRevealSteps({
  steps,
  showProgressLine = true,
  progressReachAt = 0,
  className = "",
}: ProgressRevealStepsProps) {
  const { ref, progress } = useScrollProgress(progressReachAt);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {showProgressLine && (
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 z-0 h-0.5 overflow-visible"
            style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
            aria-hidden
          >
            <div className="absolute inset-0 border-t-2 border-dashed border-brand-blue/30" />
            <div
              className="absolute left-0 top-0 h-0.5 border-t-2 border-solid border-brand-navy/70 transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
            {progress > 0.02 && (
              <div
                className="absolute top-1/2 w-2 h-2 rounded-full bg-brand-navy shadow-sm transition-[left] duration-150 ease-out"
                style={{
                  left: `${progress * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
        )}
        {steps.map((step, idx) => {
          const StepIcon = step.Icon;
          const stepStart = idx * (1 / steps.length);
          const stepOpacity = Math.min(
            1,
            Math.max(0, (progress - stepStart) / (1 / steps.length) * 1.5)
          );
          const stepRevealed = progress > stepStart;

          return (
            <div
              key={idx}
              className="text-center relative z-10 transition-all duration-200 ease-out"
              style={{
                opacity: stepOpacity,
                transform: stepRevealed ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-navy to-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 hover:shadow-md">
                <StepIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
