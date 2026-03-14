/**
 * Generates pure HTML impact map (no script, style, link, etc).
 * Run: node scripts/generate-impact-map-html.js
 * Output: impact-map-standalone.html
 */

const https = require("https");
const fs = require("fs");
const path = require("path");
const { feature } = require("topojson-client");
const { geoPath, geoMercator } = require("d3-geo");

const WORLD_ATLAS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const AFRICA_COUNTRIES = new Set([
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi",
  "Cameroon", "Central African Rep.", "Chad", "Congo", "Côte d'Ivoire",
  "Dem. Rep. Congo", "Djibouti", "Egypt", "Eq. Guinea", "Eritrea",
  "eSwatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
  "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
  "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique", "Namibia",
  "Niger", "Nigeria", "Rwanda", "Senegal", "Sierra Leone", "Somalia",
  "South Africa", "S. Sudan", "Sudan", "Tanzania", "Togo", "Tunisia",
  "Uganda", "W. Sahara", "Zambia", "Zimbabwe",
]);

const SUPPLIES_DATA = {
  "South Africa": 12543,
  "Zimbabwe": 8234,
  "Botswana": 5421,
  "Namibia": 3124,
  "Lesotho": 2430,
};

const BRAND_GREEN = { r: 175, g: 220, b: 177 };
const BRAND_NAVY = { r: 42, g: 48, b: 124 };
const MIN_SUPPLIES = 2430;
const MAX_SUPPLIES = 12543;

function getColorForSupplies(supplies) {
  const t = Math.max(0, Math.min(1, (supplies - MIN_SUPPLIES) / (MAX_SUPPLIES - MIN_SUPPLIES)));
  const r = Math.round(BRAND_GREEN.r + t * (BRAND_NAVY.r - BRAND_GREEN.r));
  const g = Math.round(BRAND_GREEN.g + t * (BRAND_NAVY.g - BRAND_GREEN.g));
  const b = Math.round(BRAND_GREEN.b + t * (BRAND_NAVY.b - BRAND_GREEN.b));
  return `rgb(${r},${g},${b})`;
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function main() {
  const world = await fetchJson(WORLD_ATLAS_URL);
  const countries = feature(world, world.objects.countries);
  const africa = {
    type: "FeatureCollection",
    features: countries.features.filter((d) => {
      const name = d.properties?.name;
      return name && AFRICA_COUNTRIES.has(name);
    }),
  };

  const width = 960;
  const height = 500;
  const projection = geoMercator()
    .center([20, 0])
    .scale(420)
    .translate([width / 2, height / 2]);
  const pathGen = geoPath().projection(projection);

  const pathElements = africa.features.map((d) => {
    const name = d.properties.name;
    const supplies = SUPPLIES_DATA[name];
    const fill = supplies !== undefined ? getColorForSupplies(supplies) : "#d1d5db";
    const title = supplies !== undefined
      ? `${name}: ${supplies.toLocaleString()} supplies`
      : `${name}: No supplies yet`;
    const pathD = pathGen(d);
    return `    <path fill="${fill}" stroke="#ffffff" stroke-width="0.5" d="${pathD}"><title>${escapeXml(title)}</title></path>`;
  }).join("\n");

  const colorFew = getColorForSupplies(MIN_SUPPLIES);
  const colorMore = getColorForSupplies(MAX_SUPPLIES);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>F2A Impact Map</title>
</head>
<body style="margin:0;padding:1rem;font-family:system-ui,sans-serif;background:#f7f7f7">
  <h1 style="color:#2A307C;text-align:center;margin:0 0 0.5rem;font-size:1.5rem">Supplies delivered across Africa</h1>
  <div style="max-width:900px;margin:0 auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.08);overflow:hidden">
    <svg viewBox="0 0 960 500" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto;min-height:320px">
${pathElements}
    </svg>
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1rem;padding:1rem;font-size:0.75rem;color:#4b5563">
      <span style="font-weight:600">Supplies delivered:</span>
      <div style="display:flex;align-items:center;gap:0.25rem">
        <div style="width:16px;height:12px;border-radius:2px;background:#d1d5db"></div>
        <span>None</span>
      </div>
      <div style="display:flex;align-items:center;gap:0.25rem">
        <div style="width:16px;height:12px;border-radius:2px;background:${colorFew}"></div>
        <span>Fewer</span>
      </div>
      <div style="display:flex;align-items:center;gap:0.25rem">
        <div style="width:16px;height:12px;border-radius:2px;background:${colorMore}"></div>
        <span>More</span>
      </div>
    </div>
  </div>
</body>
</html>
`;

  const outPath = path.join(__dirname, "..", "impact-map-standalone.html");
  fs.writeFileSync(outPath, html, "utf8");
  console.log("Wrote", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
