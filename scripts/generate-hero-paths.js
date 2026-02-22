/**
 * One-off script: generate accurate UK and Africa SVG path strings for the hero.
 * Run: node scripts/generate-hero-paths.js
 * Uses world-atlas/countries-110m, topojson-client, d3-geo, @turf/union (smooth Africa outline).
 */

const https = require("https");
const { feature } = require("topojson-client");
const { geoPath, geoMercator } = require("d3-geo");
const { union } = require("@turf/union");

const WORLD_ATLAS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// African country names as in world-atlas countries-110m (Natural Earth names)
const AFRICA_NAMES = new Set([
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
  "Côte d'Ivoire",
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
  "S. Sudan",
  "Senegal",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "W. Sahara",
  "Zambia",
  "Zimbabwe",
]);

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function main() {
  fetchJson(WORLD_ATLAS_URL)
    .then((topology) => {
      const countries = feature(topology, topology.objects.countries);
      const ukFeature = countries.features.find(
        (f) => f.id === "826" || (f.properties && f.properties.name === "United Kingdom")
      );
      const africaFeatures = countries.features.filter(
        (f) => f.properties && AFRICA_NAMES.has(f.properties.name)
      );

      if (!ukFeature) {
        console.error("UK feature not found");
        process.exit(1);
      }
      if (africaFeatures.length === 0) {
        console.error("No African countries found");
        process.exit(1);
      }

      // Dissolve African countries into one outline (no internal borders) via Turf union.
      const africaCollection = {
        type: "FeatureCollection",
        features: africaFeatures,
      };
      const africaMerged = union(africaCollection);
      if (!africaMerged) {
        console.error("Africa union failed");
        process.exit(1);
      }

      // Hero viewBox: 0 0 1200 540. UK upper-right, Africa larger and to the right and slightly below.
      const viewBoxUK = [
        [400, 90],
        [620, 380],
      ];
      const viewBoxAfrica = [
        [660, 100],
        [1140, 500],
      ];

      const projUK = geoMercator().fitExtent(viewBoxUK, ukFeature);
      const projAfrica = geoMercator().fitExtent(viewBoxAfrica, africaMerged);

      const pathUK = geoPath().projection(projUK);
      const pathAfrica = geoPath().projection(projAfrica);

      const dUK = pathUK(ukFeature);
      let dAfrica = pathAfrica(africaMerged);

      if (!dUK || !dAfrica) {
        console.error("Path generation failed");
        process.exit(1);
      }

      // Remove extent-rectangle subpaths that cause green to leak outside the outline.
      // (Projection can emit the clip/extent box as a polygon; we only want land shapes.)
      function stripExtentRectangles(pathStr, extent) {
        const [[ex0, ey0], [ex1, ey1]] = extent;
        const extW = ex1 - ex0;
        const extH = ey1 - ey0;
        const tol = 5;
        const subpaths = pathStr.match(/M[^M]+Z/g) || [];
        const kept = subpaths.filter((sub) => {
          const points = [...sub.matchAll(/[ML]\s*([\d.]+)\s*,\s*([\d.]+)/g)].map((m) => [
            parseFloat(m[1]),
            parseFloat(m[2]),
          ]);
          if (points.length < 4) return true;
          const xs = points.map((p) => p[0]);
          const ys = points.map((p) => p[1]);
          const minX = Math.min(...xs);
          const maxX = Math.max(...xs);
          const minY = Math.min(...ys);
          const maxY = Math.max(...ys);
          const w = maxX - minX;
          const h = maxY - minY;
          const isBigRect =
            w > extW * 0.75 &&
            h > extH * 0.75 &&
            points.every(
              (p) =>
                Math.abs(p[0] - minX) < tol ||
                Math.abs(p[0] - maxX) < tol ||
                Math.abs(p[1] - minY) < tol ||
                Math.abs(p[1] - maxY) < tol
            );
          return !isBigRect;
        });
        return kept.join("");
      }
      dAfrica = stripExtentRectangles(dAfrica, viewBoxAfrica);

      const fs = require("fs");
      const outDir = require("path").join(__dirname, "..", "lib");
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const out = `/** Generated by scripts/generate-hero-paths.js - do not edit by hand */\n\nexport const UK_PATH = ${JSON.stringify(dUK)};\nexport const AFRICA_PATH = ${JSON.stringify(dAfrica)};\n`;
      fs.writeFileSync(require("path").join(outDir, "hero-map-paths.ts"), out);
      console.log("Wrote lib/hero-map-paths.ts");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

main();
