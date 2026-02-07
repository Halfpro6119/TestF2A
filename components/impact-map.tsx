"use client";

import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// Southern Africa countries to display - served countries + neighbors (grey)
const SOUTHERN_AFRICA_COUNTRIES = new Set([
  "South Africa",
  "Zimbabwe",
  "Botswana",
  "Namibia",
  "Lesotho",
  "Mozambique",
  "Zambia",
  "Angola",
  "eSwatini",
  "Malawi",
  "Madagascar",
  "Dem. Rep. Congo",
  "Tanzania",
]);

// Supply data - more supplies = redder
const SUPPLIES_DATA: Record<string, number> = {
  "South Africa": 12543,
  Zimbabwe: 8234,
  Botswana: 5421,
  Namibia: 3124,
  Lesotho: 2430,
};

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Interpolate color: more supplies = redder (from light pink to dark red)
function getColorForSupplies(supplies: number): string {
  const min = 2430;
  const max = 12543;
  const t = (supplies - min) / (max - min); // 0 to 1
  // RGB: light #fecaca (254,202,202) to dark #991b1b (153,27,27)
  const r = Math.round(254 - t * (254 - 153));
  const g = Math.round(202 - t * (202 - 27));
  const b = Math.round(202 - t * (202 - 27));
  return `rgb(${r},${g},${b})`;
}

interface ImpactMapProps {
  className?: string;
}

export function ImpactMap({ className = "" }: ImpactMapProps) {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const parseGeographies = useMemo(
    () => (features: Array<{ properties?: { name?: string } }>) => {
      return (features ?? []).filter(
        (f) =>
          f?.properties?.name &&
          SOUTHERN_AFRICA_COUNTRIES.has(f.properties.name)
      );
    },
    []
  );

  return (
    <div className={`relative ${className}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [24, -22],
          scale: 900,
        }}
        className="w-full h-full min-h-[320px]"
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[24, -22]} zoom={1} minZoom={0.8} maxZoom={3}>
          <Geographies geography={GEO_URL} parseGeographies={parseGeographies}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties?.name ?? "";
                const supplies = SUPPLIES_DATA[name];
                const hasSupplies = supplies !== undefined;
                const fill = hasSupplies ? getColorForSupplies(supplies) : "#d1d5db";
                const isHovered = hoveredCountry === name;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? 1.5 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: hasSupplies
                          ? getColorForSupplies(supplies)
                          : "#9ca3af",
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg pointer-events-none z-10 whitespace-nowrap"
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
