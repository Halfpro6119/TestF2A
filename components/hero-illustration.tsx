"use client";

import { useRef, useState, useCallback } from "react";
import { UK_PATH, AFRICA_PATH } from "@/lib/hero-map-paths";
import { HeroLogo } from "@/components/hero-logo";

/**
 * Animated hero illustration: UK–Africa journey, Footprints 2 Africa logo (image),
 * accurate UK & Africa maps, flight path. Mouse-triggered ripple effect.
 */
export function HeroIllustration({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleIdRef = useRef(0);
  const lastRippleRef = useRef(0);
  const [footprints, setFootprints] = useState<{ id: number; x: number; y: number }[]>([]);
  const footprintIdRef = useRef(0);
  const lastFootprintRef = useRef(0);

  const handleMapMouseMove = useCallback(
    (e: React.MouseEvent<SVGGElement>) => {
      const now = Date.now();
      if (now - lastFootprintRef.current < 220) return;
      lastFootprintRef.current = now;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const id = ++footprintIdRef.current;
      setFootprints((prev) => [...prev.slice(-6), { id, x, y }]);

      setTimeout(() => {
        setFootprints((prev) => prev.filter((f) => f.id !== id));
      }, 1600);
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const now = Date.now();
      if (now - lastRippleRef.current < 280) return;
      lastRippleRef.current = now;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const id = ++rippleIdRef.current;
      setRipples((prev) => [...prev.slice(-8), { id, x, y }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 1400);
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className ?? ""}`}
      onMouseMove={handleMouseMove}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3560" />
            <stop offset="50%" stopColor="#1A2D50" />
            <stop offset="100%" stopColor="#152238" />
          </linearGradient>
          <radialGradient id="hero-ocean-highlight" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#254A7A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="land-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C0E8C0" />
            <stop offset="100%" stopColor="#8BCB8B" />
          </linearGradient>
          <linearGradient id="flight-path" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.75)" />
          </linearGradient>
          <filter id="map-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#0a0d14" floodOpacity="0.35" />
          </filter>
          <filter id="map-shadow-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#0a0d14" floodOpacity="0.35" />
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#ffffff" floodOpacity="0.25" />
            <feDropShadow dx="0" dy="0" stdDeviation="24" floodColor="#ffffff" floodOpacity="0.12" />
          </filter>
          <filter id="foreground-wave-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="-2" stdDeviation="3" floodColor="#0a0d14" floodOpacity="0.3" />
          </filter>
        </defs>

        <rect width="1200" height="540" fill="url(#hero-bg)" />
        <rect width="1200" height="540" fill="url(#hero-ocean-highlight)" />

        {/* ========== Accurate UK & Africa maps (Natural Earth 110m) ========== */}
        {/* UK – positioned lower and right; hover glow and scale */}
        <g className="hero-map-uk-wrapper" filter="url(#map-shadow)" onMouseMove={handleMapMouseMove}>
          <g transform="translate(135, -65)">
            <path
              className="hero-map hero-map-uk"
              d={UK_PATH}
              fill="url(#land-fill)"
              stroke="#7BA86F"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Footprint icon – south-east England (London area) */}
            <g transform="translate(540, 305) scale(0.4)" opacity="0.45" fill="#A8B4BE">
              <ellipse cx="0" cy="2" rx="6" ry="8" />
              <ellipse cx="5" cy="-4" rx="4" ry="6" />
            </g>
          </g>
        </g>

        {/* Africa – positioned South-East; hover glow and scale */}
        <g className="hero-map-africa-wrapper" filter="url(#map-shadow)" onMouseMove={handleMapMouseMove}>
          <g transform="translate(955, 288) rotate(10) scale(2.8) translate(-918, -298)">
            <path
              className="hero-map hero-map-africa"
              d={AFRICA_PATH}
              fill="url(#land-fill)"
              stroke="#7BA86F"
              strokeWidth="1.8"
            />
            {/* Footprint icon – Southern Africa (SA/Botswana area), faint semi-transparent */}
            <g transform="translate(918, 318) scale(0.4)" opacity="0.45" fill="#A8B4BE">
              <ellipse cx="0" cy="2" rx="6" ry="8" />
              <ellipse cx="5" cy="-4" rx="4" ry="6" />
            </g>
          </g>
        </g>

        {/* Dashed flight path: London → first arc → seamless mirrored second arc → Africa */}
        <path
          d="M 668 242 Q 820 180 820 250 Q 820 320 980 288"
          fill="none"
          stroke="url(#flight-path)"
          strokeWidth="2.5"
          strokeDasharray="10 8"
          strokeLinecap="round"
          className="hero-path-line"
        />

        {/* Airplane – cleaner silhouette along path, facing right and slightly up */}
        <g className="hero-plane">
          <path
            d="M 0 -6 L 18 0 L 0 6 L 4 0 Z M 14 -2 L 22 0 L 14 2 Z"
            fill="white"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.8"
          >
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 668 242 Q 820 180 820 250 Q 820 320 980 288"
              rotate="auto"
            />
          </path>
        </g>

        {/* Foreground – irregular amorphous shape (distant land/shoreline); soft navy for cohesion */}
        <path
          className="hero-foreground"
          filter="url(#foreground-wave-shadow)"
          d="M 0 540 L 0 435 Q 120 415 250 405 Q 380 398 500 392 Q 620 388 750 395 Q 880 405 1000 418 Q 1100 428 1200 438 L 1200 540 Z"
          fill="#0D1520"
        />
      </svg>

      {/* Logo – interactive component with hover glow and scale */}
      <HeroLogo />

      {/* Mouse-triggered ripples */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden style={{ pointerEvents: "none" }}>
        {ripples.map(({ id, x, y }) => (
          <div
            key={id}
            className="hero-ripple"
            style={{
              left: x,
              top: y,
            }}
          />
        ))}
      </div>

      {/* Footprints on UK/Africa map hover – same as logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {footprints.map(({ id, x, y }) => (
          <div key={id} className="hero-map-footprint" style={{ left: x, top: y }}>
            <img src="/f2afootprints.png" alt="" className="hero-footprint-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
