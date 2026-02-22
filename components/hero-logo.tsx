"use client";

/**
 * Hero logo – glows and scales on hover.
 * Positioned to overlay the logo area in the hero illustration.
 */
export function HeroLogo() {
  return (
    <div
      className="hero-logo-wrapper"
      aria-hidden
    >
      <svg
        viewBox="-20 -20 420 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-logo-svg"
      >
        <defs>
          <linearGradient id="hero-logo-badge-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
          <filter id="hero-logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0a0d14" floodOpacity="0.12" />
          </filter>
          <clipPath id="hero-logo-semicircle-clip">
            <path d="M 20 132 A 180 180 0 0 1 360 132 Z" />
          </clipPath>
        </defs>
        <g filter="url(#hero-logo-shadow)">
          <rect x="-16" y="-16" width="404" height="230" rx="14" fill="url(#hero-logo-badge-fill)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          <path
            d="M 20 132 A 180 180 0 0 1 360 132 Z"
            fill="white"
            stroke="#2d2d2d"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <g clipPath="url(#hero-logo-semicircle-clip)">
            <image href="/f2afootprints.png" x="110" y="20" width="165" height="101" preserveAspectRatio="xMidYMid meet" />
          </g>
          <path d="M 185 94 L 195 94 M 190 86 L 190 102" stroke="#2d2d2d" strokeWidth="1.8" strokeLinecap="round" />
          <text x="45" y="141" fontSize="9" fill="#4a4a4a" fontFamily="system-ui, sans-serif" fontWeight="500" letterSpacing="1">EST.</text>
          <text x="335" y="141" fontSize="9" fill="#4a4a4a" fontFamily="system-ui, sans-serif" fontWeight="500" letterSpacing="1" textAnchor="end">2025</text>
          <line x1="45" y1="150" x2="335" y2="150" stroke="#2d2d2d" strokeWidth="1" strokeOpacity="0.9" />
          <line x1="45" y1="170" x2="335" y2="170" stroke="#2d2d2d" strokeWidth="1" strokeOpacity="0.9" />
          <text x="190" y="160" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="1.2">
            FOOTPRINTS 2 AFRICA
          </text>
          <text x="190" y="184" fontSize="9" fontWeight="400" fill="#5a5a5a" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" letterSpacing="0.8">
            Hope • Compassion • Dignity
          </text>
        </g>
      </svg>
    </div>
  );
}
