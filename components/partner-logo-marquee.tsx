"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const LOGO_STRIPS = [
  { src: "/F2APartnerLogos/LogoStrip1.png", alt: "Footprints 2 Africa partner logos" },
  { src: "/F2APartnerLogos/LogoStrip2.jpg", alt: "Footprints 2 Africa partner logos" },
  { src: "/F2APartnerLogos/LogoStrip3.jpg", alt: "Footprints 2 Africa partner logos" },
];

const STRIP_WIDTH_PX = 900;
const SPEED_PX_PER_SEC = 80;

export function PartnerLogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const oneSetWidthRef = useRef(STRIP_WIDTH_PX * LOGO_STRIPS.length);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const children = track.children;
      if (children.length >= 3) {
        const r0 = (children[0] as HTMLElement).getBoundingClientRect();
        const r2 = (children[2] as HTMLElement).getBoundingClientRect();
        const w = r2.right - r0.left;
        if (w > 0) {
          oneSetWidthRef.current = w;
        }
      }
    };

    const ro = new ResizeObserver(measure);
    ro.observe(track);

    measure();
    requestAnimationFrame(measure);
    const t = setTimeout(() => {
      measure();
      setReady(true);
    }, 100);

    return () => {
      ro.disconnect();
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !ready) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const oneSet = oneSetWidthRef.current;
      positionRef.current -= SPEED_PX_PER_SEC * delta;

      while (positionRef.current <= -oneSet) {
        positionRef.current += oneSet;
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [ready]);

  return (
    <div className="overflow-hidden" aria-hidden>
      <div
        ref={trackRef}
        className="flex items-center gap-0 py-6 will-change-transform [contain:layout] [backface-visibility:hidden]"
        style={{ width: "max-content" }}
      >
        {[...LOGO_STRIPS, ...LOGO_STRIPS, ...LOGO_STRIPS].map((strip, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden"
            style={{ width: STRIP_WIDTH_PX }}
          >
            <Image
              src={strip.src}
              alt={i < LOGO_STRIPS.length ? strip.alt : ""}
              width={1100}
              height={280}
              className="block w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
