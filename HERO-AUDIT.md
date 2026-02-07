# Hero Section Design Audit

**Constraint:** The hero image must remain `/images/footprints2africahero.png` (same asset). All improvements are layout, overlay, CTA, and container refinements only.

**Status:** ✅ **Fully implemented** (see [§ Implementation status](#implementation-status) below).

---

## 1. Current State Summary (post-implementation)

| Element | Implementation |
|--------|----------------|
| **Container** | `max-w-5xl mx-auto`, `widget-container-hero` (rounded-2xl/3xl, border, soft blue gradient, `shadow-md`, `ring-1 ring-gray-200/50`), white section background |
| **Image** | `aspect-[16/9] sm:aspect-[2.2/1]`, `min-h-[240px]`, `object-cover object-center`, navy fallback background |
| **CTA strip** | Absolute bottom overlay: `from-brand-navy/95 via-brand-navy/80 to-transparent`, `backdrop-blur-sm`; Donate Now (red, `shadow-lg`, `ring-2 ring-white/20`) → `#get-involved`; How We Help (outline white) → `#about`; charity number `text-white/90` |
| **Section** | `pt-28 pb-16` (responsive), H1 present (sr-only: “Footprints 2 Africa – Restoring Dignity”), `aria-labelledby="hero-heading"` |

**Strengths**

- Contained “product” block aligns with DESIGN-AUDIT-FUTURISTIC (one clear widget).
- Hero image is prominent; CTA strip doesn’t cover the main design.
- Single primary CTA (Donate Now); secondary (How We Help) is outline.
- Responsive padding and aspect ratio.
- Good alt text on the image.
- Brand colors (navy, blue, red) are used elsewhere and match COLOR-PALETTE-PLAN.

---

## 2. Gaps & Improvement Opportunities

### 2.1 CTA strip vs. brand ✅

- **Gap:** Strip uses a generic black gradient (`from-black/70`). The rest of the site and the hero image use navy/blue as primary.
- **Improvement:** Use a brand-aligned gradient (e.g. `from-brand-navy/90` or `from-brand-navy to-transparent`) so the strip feels part of the hero palette and reinforces trust.
- **Done:** CTA strip uses `from-brand-navy/95 via-brand-navy/80 to-transparent`.

### 2.2 CTA strip legibility and polish ✅

- **Gap:** Over busy parts of the image, text can compete with the artwork.
- **Improvement:** Add a light `backdrop-blur-sm` (or `backdrop-blur`) to the strip so the bar reads as a clear, frosted layer and improves contrast. Keep gradient for tone.
- **Done:** Strip has `backdrop-blur-sm`; charity text uses `text-white/90`.

### 2.3 “How We Help” is not scannable ✅

- **Gap:** Button has no `href`; it doesn’t navigate anywhere.
- **Improvement:** Make it a link to `#about` or `#get-involved` so the secondary CTA is actionable and reinforces the journey (hero → about / get involved).
- **Done:** “How We Help” is `<Button asChild><a href="#about">How We Help</a></Button>`.

### 2.4 Primary CTA prominence ✅

- **Gap:** Donate is already the only solid red button, but it could read as the single unmissable action a bit more.
- **Improvement:** Add a subtle shadow (e.g. `shadow-lg` or `shadow-md`) and/or a soft ring (`ring-2 ring-white/20`) so it pops slightly from the strip without changing color.
- **Done:** Donate Now has `shadow-lg` and `ring-2 ring-white/20`.

### 2.5 Section heading hierarchy (SEO & a11y) ✅

- **Gap:** The page has no H1 in the hero; screen readers and SEO benefit from one clear H1.
- **Improvement:** Add a single H1, either:
  - **Option A:** Visually hidden (`sr-only`) e.g. “Footprints 2 Africa – Restoring Dignity,” or
  - **Option B:** A short, high-contrast tagline above or over the image (e.g. “Restoring Dignity Across Africa”) so the hero has a clear verbal hook without competing with the image.
- **Done:** Option A implemented: `<h1 id="hero-heading" className="sr-only">Footprints 2 Africa – Restoring Dignity</h1>`; section has `aria-labelledby="hero-heading"`.

### 2.6 Container depth and “product” feel ✅

- **Gap:** DESIGN-AUDIT recommends subtle depth (shadow, ring) for widget-style blocks.
- **Improvement:** Add a light shadow to the hero container (e.g. `shadow-md` or keep `shadow-sm`) and optionally `ring-1 ring-gray-200/50` so it matches the Geographic Impact “product” feel.
- **Done:** `.widget-container-hero` in `globals.css` uses `shadow-md` and `ring-1 ring-gray-200/50`.

### 2.7 Responsive aspect and min-height ✅

- **Gap:** `min-h-[200px]` on very small viewports might make the image feel short; aspect is fixed.
- **Improvement:** Consider a slightly larger min-height on mobile (e.g. `min-h-[220px]` or `min-h-[240px]`) so the hero feels substantial. Keep aspect ratio as-is to avoid distorting the design image.
- **Done:** Image wrapper uses `min-h-[240px]`.

### 2.8 Focus and link semantics ✅

- **Gap:** “How We Help” as a `<Button>` with no href is not a link; “Donate Now” has no href.
- **Improvement:** Use `<a>` or Next.js `<Link>` styled as buttons for both, with `#get-involved` (or donation URL) and `#about` (or `#get-involved`), and ensure focus states use existing focus-visible ring for keyboard users.
- **Done:** Both CTAs use `Button asChild` with `<a href="...">`. Donate → `#get-involved`, How We Help → `#about`. Focus: `focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy` for visible focus on the dark strip.

---

## 3. Recommended Changes (Priority) – all done ✅

| Priority | Change | Status |
|----------|--------|--------|
| **P0** | CTA strip: brand gradient (navy) + optional backdrop-blur | ✅ Implemented |
| **P0** | Make “Donate Now” and “How We Help” real links (`#get-involved`, `#about`) | ✅ Implemented |
| **P1** | Primary CTA: add subtle shadow/ring | ✅ Implemented |
| **P1** | Add one H1 (sr-only or short tagline) | ✅ Implemented (Option A) |
| **P2** | Hero container: light shadow/ring | ✅ Implemented |
| **P2** | Slightly increase mobile min-height for image area | ✅ Implemented |

---

## Implementation status

Every gap in §2 and every priority in §3 is implemented in code:

- **app/page.tsx** – Hero section: H1 (sr-only), section `aria-labelledby`, image `min-h-[240px]`, CTA strip gradient + blur, both CTAs as `<a>` with `Button asChild`, Donate shadow/ring, focus-visible ring (white, offset navy) on both links.
- **app/globals.css** – `.widget-container-hero`: `shadow-md`, `ring-1 ring-gray-200/50`.

The hero image is unchanged: `/images/footprints2africahero.png`.

---

## 4. Out of Scope (Image Unchanged)

- Replacing or editing the hero image.
- Changing the image’s aspect ratio in a way that crops the design poorly (small tweaks to min-height are fine).
- Adding competing visuals (e.g. extra graphics or text blocks) that obscure the existing hero artwork.

---

## 5. Summary

The hero has a contained block, one primary CTA, and responsive layout. Implemented improvements: **brand-aligned CTA strip** (navy gradient + backdrop blur), **functional CTAs** (Donate → `#get-involved`, How We Help → `#about`), **stronger primary CTA** (shadow + ring), **one H1** (sr-only for SEO/a11y), **container depth** (shadow + ring), **higher min-height** (240px), and **visible focus rings** on the dark strip for keyboard users. The hero image is unchanged.
