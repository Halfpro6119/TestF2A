"use client";

import { useState, useMemo } from "react";
import type { Feature } from "geojson";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// All African countries (world-atlas 110m names) - full continent north to south
const AFRICA_COUNTRIES = new Set([
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Central African Rep.",
  "Chad",
  "Congo",
  "Côte d'Ivoire",
  "Dem. Rep. Congo",
  "Djibouti",
  "Egypt",
  "Eq. Guinea",
  "Eritrea",
  "eSwatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Senegal",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "S. Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "W. Sahara",
  "Zambia",
  "Zimbabwe",
]);

// Supply data - more supplies = greener to navy (hero palette)
const SUPPLIES_DATA: Record<string, number> = {
  "South Africa": 12543,
  Zimbabwe: 8234,
  Botswana: 5421,
  Namibia: 3124,
  Lesotho: 2430,
};

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Brand colors: map green (fewer supplies) → blue (more)
const BRAND_GREEN = { r: 175, g: 220, b: 177 }; // #AFDCB1 Green on Map
const BRAND_NAVY = { r: 42, g: 48, b: 124 }; // #2A307C Blue

// Interpolate color: more supplies = more navy (landmass green → ocean navy)
function getColorForSupplies(supplies: number): string {
  const min = 2430;
  const max = 12543;
  const t = (supplies - min) / (max - min); // 0 to 1
  const r = Math.round(BRAND_GREEN.r + t * (BRAND_NAVY.r - BRAND_GREEN.r));
  const g = Math.round(BRAND_GREEN.g + t * (BRAND_NAVY.g - BRAND_GREEN.g));
  const b = Math.round(BRAND_GREEN.b + t * (BRAND_NAVY.b - BRAND_GREEN.b));
  return `rgb(${r},${g},${b})`;
}

interface ImpactMapProps {
  className?: string;
}

export function ImpactMap({ className = "" }: ImpactMapProps) {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const parseGeographies = useMemo(
    () => (features: Feature[]) => {
      return (features ?? []).filter(
        (f): f is Feature => {
          const name = (f?.properties as { name?: string } | undefined)?.name;
          return typeof name === "string" && AFRICA_COUNTRIES.has(name);
        }
      );
    },
    []
  );

  return (
    <div className={`relative ${className}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [20, 0],
          scale: 420,
        }}
        className="w-full h-full min-h-[320px]"
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[20, 0]} zoom={1} minZoom={0.6} maxZoom={4}>
          <Geographies geography={GEO_URL} parseGeographies={parseGeographies}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties?.name ?? "";
                const supplies = SUPPLIES_DATA[name];
                const hasSupplies = supplies !== undefined;
                const fill = hasSupplies ? getColorForSupplies(supplies) : "#d1d5db";
                const isHovered = hoveredCountry === name;
                const hoverStroke = "#2A307C"; // brand blue

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke={isHovered ? hoverStroke : "#ffffff"}
                    strokeWidth={isHovered ? 2 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: hasSupplies
                          ? getColorForSupplies(supplies)
                          : "#9ca3af",
                        stroke: hoverStroke,
                        strokeWidth: 2,
                        cursor: "pointer",
                      },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={() => {
                      setHoveredCountry(name);
                      setTooltipContent(
                        hasSupplies
                          ? `${name}: ${supplies.toLocaleString()} supplies`
                          : `${name}: No supplies yet`
                      );
                    }}
                    onMouseLeave={() => {
                      setHoveredCountry(null);
                      setTooltipContent("");
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg pointer-events-none z-10 whitespace-nowrap"
          role="tooltip"
        >
          {tooltipContent}
        </div>
      )}

      {/* Legend and interaction hint */}
      <div className="mt-4 space-y-2">
        <p className="text-xs text-gray-500 text-center">
          Scroll to zoom • Drag to pan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
          <span className="font-medium">Supplies delivered:</span>
        <div className="flex items-center gap-1">
          <div
            className="w-4 h-3 rounded-sm"
            style={{ backgroundColor: "#d1d5db" }}
          />
          <span>None</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="w-4 h-3 rounded-sm"
            style={{ backgroundColor: getColorForSupplies(2430) }}
          />
          <span>Fewer</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="w-4 h-3 rounded-sm"
            style={{ backgroundColor: getColorForSupplies(12543) }}
          />
          <span>More</span>
        </div>
        </div>
      </div>
    </div>
  );
}
