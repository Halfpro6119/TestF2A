"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Returns whether the element has been scrolled into view (with threshold).
 * Used for scroll-triggered animations like CountUp and fade-in.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, revealed]);

  return { ref, revealed };
}

/**
 * Returns scroll progress (0–1) for a section, similar to How It Works on home.
 * Progress increases as the section scrolls into view.
 * @param progressReachAt - Viewport fraction (0–1) where progress reaches 1 (default 0).
 *   E.g. 0.4 = fully revealed when section top is 40% down the viewport (still visible).
 *   Use for sections with content below (e.g. a CTA button) so the timeline is fully
 *   visible by the time the user scrolls to the button.
 */
export function useScrollProgress(progressReachAt = 0) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = ref.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress = 1 when rect.top <= vh * progressReachAt (section still in view)
      const denom = vh * (1 - progressReachAt);
      const raw = denom > 0 ? (vh - rect.top) / denom : 1;
      const p = Math.min(1, Math.max(0, raw));
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progressReachAt]);

  return { ref, progress };
}
