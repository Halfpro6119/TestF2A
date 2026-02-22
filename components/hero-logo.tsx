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
        viewBox="-40 -10 460 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-logo-svg"
      >
        <defs>
          <clipPath id="hero-logo-semicircle-clip">
            <path d="M 20 132 A 180 180 0 0 1 360 132 Z" />
          </clipPath>
        </defs>
        <g>
          <rect x="-36" y="4" width="452" height="204" rx="14" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" />
          <path
            d="M 20 132 A 180 180 0 0 1 360 132 Z"
            fill="white"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <g clipPath="url(#hero-logo-semicircle-clip)">
            <image href="/f2afootprints.png" x="110" y="20" width="165" height="101" preserveAspectRatio="xMidYMid meet" />
          </g>
          <path d="M 185 94 L 195 94 M 190 86 L 190 102" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <text x="45" y="125" fontSize="9" fill="#4a4a4a" fontFamily="system-ui, sans-serif" fontWeight="500" letterSpacing="1">EST.</text>
          <text x="335" y="125" fontSize="9" fill="#4a4a4a" fontFamily="system-ui, sans-serif" fontWeight="500" letterSpacing="1" textAnchor="end">2025</text>
          <line x1="-20" y1="132" x2="400" y2="132" stroke="white" strokeWidth="1.2" />
          <line x1="45" y1="170" x2="335" y2="170" stroke="white" strokeWidth="1" />
          <text x="190" y="151" fontSize="15" fontWeight="bold" fill="white" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="1.2">
            FOOTPRINTS 2 AFRICA
          </text>
          <text x="190" y="184" fontSize="9" fontWeight="400" fill="white" fontFamily="Georgia, 'Times New Roman', serif" textAnchor="middle" letterSpacing="0.8">
            Hope • Compassion • Dignity
          </text>
        </g>
      </svg>
    </div>
  );
}
