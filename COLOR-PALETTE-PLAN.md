# Plan: Align Site Colors with Hero Image

This plan maps the hero image palette to the rest of the site so the experience feels cohesive with the Footprints 2 Africa branding (dark blue ocean, light green landmasses, white text, red from flags).

---

## 1. Hero image color palette (reference)

| Use in image | Description | Suggested hex / Tailwind |
|--------------|-------------|---------------------------|
| **Ocean / primary** | Dark blue (navy / deep cobalt) | `#1F3A8C` (already used as hero fallback) |
| **Water ripples** | Light blue accents | ~`#5B8DEE` or `#60A5FA` (blue-400) |
| **Map landmasses** | Light green (UK & Africa) | ~`#7CB87C` / `#86EFAC` (green-300) or softer `#BBE5BB` |
| **Bottom landmass** | Black | `#000000` / black |
| **Text & lines** | White | `#FFFFFF` / white |
| **Logo flags** | Red (Union Jack / SA flag) | Keep red for CTAs: `#DC2626` (red-600) |
| **Shadows on maps** | Dark gray | `#4B5563` (gray-600) |

**Summary for implementation:**

- **Primary brand:** Dark blue (`#1F3A8C`) for headers, key sections, nav emphasis, footer.
- **Secondary / accents:** Light blue for links, subtle backgrounds, borders.
- **Highlight / “land”:** Light green for featured cards, map fill, success states.
- **CTAs:** Keep red for Donate / primary actions (tied to logo flags).
- **Neutrals:** White, black, grays for text and structure.

---

## 2. Define theme in one place (globals.css)

**Goal:** Add CSS custom properties so the hero palette drives the whole site and can be updated in one place.

**Suggested variables (add under `:root` in `app/globals.css`):**

```css
/* Brand colors from hero image */
--brand-navy: #1F3A8C;
--brand-navy-light: #2E4A9E;
--brand-blue: #5B8DEE;       /* light blue / ripples */
--brand-green: #7CB87C;     /* map landmass green */
--brand-green-light: #BBE5BB;
--brand-red: #DC2626;       /* CTA / logo accent - red-600 */
--brand-red-hover: #B91C1C; /* red-700 */
```

**Optional:** Extend Tailwind in `tailwind.config` (or use `@theme` in globals) so you can use `bg-brand-navy`, `text-brand-blue`, etc. If you prefer not to touch the config, use the variables directly in CSS or with arbitrary values: `bg-[var(--brand-navy)]`.

---

## 3. Section-by-section changes

### 3.1 Global / layout (`app/globals.css`)

| Current | Change to |
|--------|-----------|
| `.widget-container-gradient` – `from-red-50/40 to-white` | `from-[var(--brand-blue)]/10` or `from-[var(--brand-green-light)]/30` to white |
| `.widget-container-hero` – `via-red-50/30` | `via-[var(--brand-blue)]/10` or remove (hero image provides color) |
| Focus rings `ring-red-500` | `ring-[var(--brand-navy)]` or keep red for buttons |
| `.skip-link` – `focus:bg-red-600` | Keep red (CTA) or use `var(--brand-navy)` |

### 3.2 Navigation (`app/page.tsx`)

| Current | Change to |
|--------|-----------|
| Nav border `border-gray-200` | `border-gray-200` or `border-[var(--brand-blue)]/20` |
| Logo / brand hover `text-red-600` | `text-[var(--brand-navy)]` |
| Nav links hover `text-red-600`, underline `bg-red-600` | `text-[var(--brand-navy)]`, `bg-[var(--brand-navy)]` |
| Donate button | Keep `bg-red-600` (primary CTA) |
| Mobile menu hover `hover:bg-red-50` | `hover:bg-[var(--brand-blue)]/10` or `hover:bg-[var(--brand-green-light)]/20` |

### 3.3 Hero section

- Already uses `bg-[#1F3A8C]` as fallback; can switch to `bg-[var(--brand-navy)]` once variables exist.
- CTA strip: keep Donate red; secondary button already white/outline – no change needed.

### 3.4 Impact counters

| Current | Change to |
|--------|-----------|
| Featured card `border-red-200 bg-red-50/20` | `border-[var(--brand-green)]/40 bg-[var(--brand-green-light)]/30` |
| Other cards hover `hover:border-red-200 hover:bg-red-50/20` | `hover:border-[var(--brand-blue)]/30 hover:bg-[var(--brand-blue)]/5` |
| Icons `text-red-600` | `text-[var(--brand-navy)]` |
| Number gradient `from-red-600 to-red-500` | `from-[var(--brand-navy)] to-[var(--brand-blue)]` or keep red for “impact” emphasis |

### 3.5 About section

| Current | Change to |
|--------|-----------|
| Card borders `border-gray-200`, hover `hover:border-gray-300` | Keep or use `border-[var(--brand-blue)]/20` on hover |
| Left border accent `border-l-red-600 bg-red-50/20` | `border-l-[var(--brand-navy)] bg-[var(--brand-blue)]/10` |

### 3.6 Impact map section (video testimonials, map)

| Current | Change to |
|--------|-----------|
| Tab border when selected `border-red-600` | `border-[var(--brand-navy)]` |
| Tab bg when selected `bg-red-600` | `bg-[var(--brand-navy)]` |
| Inactive dot `bg-gray-300` | Keep or `bg-gray-300` |
| “Watch” link / icon `text-red-600` | `text-[var(--brand-navy)]` |
| **Impact map component** (`components/impact-map.tsx`): supply gradient currently red scale | New scale: e.g. light green → dark blue (or light blue → navy) to match “land” and “ocean” from hero; unserved countries can stay gray |

### 3.7 Trust & partners section

| Current | Change to |
|--------|-----------|
| Partner card hover `hover:border-red-200 hover:bg-red-50/20` | `hover:border-[var(--brand-blue)]/30 hover:bg-[var(--brand-blue)]/5` |
| Icons `text-red-600` | `text-[var(--brand-navy)]` |
| Testimonial avatar ring `bg-red-100`, `text-red-600` | `bg-[var(--brand-blue)]/20`, `text-[var(--brand-navy)]` |

### 3.8 How it works

| Current | Change to |
|--------|-----------|
| Step number circle `from-red-600 to-red-500` | `from-[var(--brand-navy)] to-[var(--brand-blue)]` |
| Connector line `border-gray-200` | Keep or `border-[var(--brand-blue)]/30` |

### 3.9 Get involved

| Current | Change to |
|--------|-----------|
| Card hover `hover:border-red-200` | `hover:border-[var(--brand-navy)]/40` |
| Icon containers `bg-red-100`, `text-red-600` | `bg-[var(--brand-blue)]/20`, `text-[var(--brand-navy)]` |
| Donate button | Keep red |
| Outline button `border-red-600 text-red-600 hover:bg-red-50` | `border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/5` |

### 3.10 Contact section

| Current | Change to |
|--------|-----------|
| Link hover `hover:text-red-600` | `hover:text-[var(--brand-navy)]` |
| Icons `text-red-600` | `text-[var(--brand-navy)]` |

### 3.11 Trust strip (dark bar) & footer

| Current | Change to |
|--------|-----------|
| Dark bar `bg-gray-900` | `bg-[var(--brand-navy)]` (or keep gray-900 for contrast) |
| Check icon `text-red-400` | `text-[var(--brand-blue)]` or `text-[var(--brand-green)]` |
| Footer `bg-gray-900` | `bg-[var(--brand-navy)]` or keep gray-900 |
| Footer links hover | If you switch to navy, use `hover:text-[var(--brand-blue)]` |

---

## 4. Impact map color scale (supplies)

**Current:** Red scale (light pink → dark red) for “more supplies = hotter”.

**Options to match hero:**

- **Option A (recommended):** Green → navy.  
  Low supplies: light green (map landmass). High supplies: dark blue (ocean).  
  Communicates “filled” with aid while staying on-brand.

- **Option B:** Light blue → navy.  
  Single hue from hero (water → deep ocean).

**Implementation:** In `components/impact-map.tsx`, replace `getColorForSupplies` RGB interpolation with a gradient between your chosen light green (or light blue) and `#1F3A8C`. Keep unserved countries gray (`#d1d5db` or a neutral gray). Hover stroke can stay green or use `var(--brand-blue)`.

---

## 5. Implementation order

1. **Add CSS variables** in `app/globals.css` (and optional Tailwind theme).
2. **Update `app/globals.css`** – widget containers, focus rings, skip-link.
3. **Navigation** – link hovers and underlines; keep Donate button red.
4. **Hero** – switch fallback to `var(--brand-navy)` if desired.
5. **Impact counters** – cards, icons, number gradient.
6. **About** – accent border and background.
7. **Impact map** – tab styles and `getColorForSupplies` scale.
8. **Trust & partners** – cards, icons, testimonial styling.
9. **How it works** – step circles and connector.
10. **Get involved** – cards, icons, outline button.
11. **Contact** – link and icon color.
12. **Trust strip & footer** – background and accents.
13. **Pass:** Check contrast (WCAG) for navy text on white and white on navy; adjust with `--brand-navy-light` or opacity if needed.

---

## 6. Optional: Tailwind theme extension

To use `bg-brand-navy` instead of `bg-[var(--brand-navy)]`, extend your Tailwind config (e.g. in `tailwind.config.ts` or via `@theme` in CSS):

```js
// If using tailwind.config
theme: {
  extend: {
    colors: {
      brand: {
        navy: "#1F3A8C",
        "navy-light": "#2E4A9E",
        blue: "#5B8DEE",
        green: "#7CB87C",
        "green-light": "#BBE5BB",
        red: "#DC2626",
      },
    },
  },
}
```

Then you can use `bg-brand-navy`, `text-brand-blue`, `border-brand-green`, etc., across the site.

---

## 7. Summary

- **Primary:** Dark blue from hero (`#1F3A8C`) for structure, nav, and key UI.
- **Secondary:** Light blue and light green from hero for accents and “land” feel.
- **CTA:** Keep red for Donate and primary actions.
- **Implement:** Add variables → globals → then each section in the order above; finally update the impact map supply scale and run a contrast check.

This plan keeps the hero as the single source of the palette and makes the rest of the site match it while preserving accessibility and a clear primary action (red Donate).
