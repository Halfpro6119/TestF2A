"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ScrollRevealSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: React.ReactNode;
  /** Delay before reveal (ms) - for stagger effects */
  delay?: number;
  /** Threshold for intersection (0-1) */
  threshold?: number;
}

/**
 * Section that fades in and slides up when scrolled into view.
 * Mirrors the hero's scroll-triggered interactivity.
 */
export function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  ...rest
}: ScrollRevealSectionProps) {
  const { ref, revealed } = useScrollReveal(threshold);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={
        revealed && delay ? { transitionDelay: `${delay}ms` } : undefined
      }
      {...rest}
    >
      {children}
    </section>
  );
}
