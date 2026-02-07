# Footprints 2 Africa — Frontend Improvement Guide

A detailed, actionable guide to improving the visual design and frontend experience of the Footprints 2 Africa charity website. Each section includes **what to improve**, **why it matters**, and **how to implement**.

---

## Table of Contents

1. [Typography & Brand Identity](#1-typography--brand-identity)
2. [Hero Section](#2-hero-section)
3. [Impact Counters](#3-impact-counters)
4. [Cards & Section Layout](#4-cards--section-layout)
5. [Video Testimonials](#5-video-testimonials)
6. [Trust & Social Proof](#6-trust--social-proof)
7. [Geographic Impact Section](#7-geographic-impact-section)
8. [How It Works](#8-how-it-works)
9. [Get Involved & CTAs](#9-get-involved--ctas)
10. [Contact Section](#10-contact-section)
11. [Footer](#11-footer)
12. [Navigation](#12-navigation)
13. [Accessibility & Focus States](#13-accessibility--focus-states)
14. [Performance & Motion](#14-performance--motion)
15. [Responsive & Mobile](#15-responsive--mobile)
16. [Color & Contrast](#16-color--contrast)

---

## 1. Typography & Brand Identity

### Current state
- Single font family: **Inter** for all text (via `layout.tsx`).
- Section headings: `text-4xl font-bold text-gray-900`.
- Body copy: `text-gray-600` in many places.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Add a display/heading font** | Inter everywhere reads as generic; charities often benefit from a warmer or more distinctive headline font. | In `layout.tsx`, add a second Google font (e.g. **DM Serif Display**, **Fraunces**, or **Source Serif 4**) and apply it to `h1`, `h2`, `h3` via a class or CSS variable. |
| **Narrow hero headline width** | Very long lines reduce readability and impact. | Change hero container from `max-w-4xl` to `max-w-3xl` (or add `max-w-2xl` for the headline only). |
| **Darken body text** | `text-gray-600` can fail WCAG AA on white in some cases; slightly darker improves legibility. | Use `text-gray-700` for main paragraphs; reserve `text-gray-600` for secondary captions or labels. |
| **Define type scale** | Consistent scale improves rhythm and hierarchy. | Document or enforce a scale in `globals.css` (e.g. `text-5xl` hero, `text-4xl` section, `text-2xl` subsection, `text-lg` lead, `text-base` body). |
| **Line height** | Tighter line-height on headlines can look sharper. | Use `leading-tight` or `leading-none` on large headings; keep `leading-relaxed` for body. |

### Example (layout / globals)

```css
/* Optional: in globals.css */
.heading-display {
  font-family: var(--font-display), var(--font-sans);
}
```

```tsx
// In layout.tsx — add a second font
import { Inter, Fraunces } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
// Apply to <html className={cn(inter.className, fraunces.variable)}>
```

---

## 2. Hero Section

### Current state
- Gradient background: `from-white via-gray-50 to-white` with soft red blur circles.
- Headline: “Restoring Dignity, Delivering Hope” with gradient text on “Delivering Hope”.
- Two CTAs: “Donate Now” (primary), “How We Help” (secondary).

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Stronger background** | Gradient + blur alone can feel flat. | Add a very subtle pattern (e.g. CSS `background-image` with low-opacity dots or lines), or a soft hero image with `object-cover` and overlay. |
| **Hero image** | Real imagery increases emotional connection. | Use `/images/hero-bg.png` (or a new asset) as a full-bleed or corner background with `opacity-20` or similar so text stays readable. |
| **Primary CTA prominence** | “Donate Now” should be the single clear action. | Increase size (`text-lg` → `text-xl` on larger screens), add `shadow-lg` or `ring-2 ring-red-700/20`, and ensure it’s the only solid red button in the hero. |
| **Vertical rhythm** | Avoid cramped feel on small screens. | Use responsive padding, e.g. `pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24`. |
| **Subheadline length** | One long line can feel heavy. | Consider breaking into two lines or shortening; keep under ~12–14 words for the main line. |

### Copy suggestion (optional)
- Lead: “Connecting surplus medical supplies in the UK with people who urgently need them across Africa.”
- Consider adding a short trust line under CTAs: e.g. “UK Registered Charity No. 1214173” in small, muted text.

---

## 3. Impact Counters

### Current state
- Four metrics: Supplies Delivered, Saved from Landfill, Countries Served, Volunteer-Led.
- Emoji icons (📦, ♻️, 🌍, ❤️); animated count-up on scroll.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Replace emojis with icons** | Emojis render inconsistently across OS/browsers and feel informal for key stats. | Use Lucide icons: `Package`, `Recycle`, `Globe`, `Heart`. Import in `page.tsx` and render in a consistent size (e.g. `w-10 h-10`). |
| **Emphasize numbers** | The number is the main message. | Slightly increase number size (e.g. `text-4xl` → `text-5xl` on desktop) or weight; keep label at `text-sm` or `text-base` and muted. |
| **Icon color** | Match brand. | Use `text-red-600` or a soft red background circle for icons so they feel part of the system. |
| **Card hierarchy** | All four cards look identical. | Optionally make one “feature” metric (e.g. “Supplies Delivered”) slightly larger or with a red border so the section has a focal point. |

### Code reference
- Icons: `components/ui` or Lucide in `page.tsx` (lines ~258–268).
- Counter: `use-count-up` is already used; ensure `decimalPlaces` and `duration` are consistent.

---

## 4. Cards & Section Layout

### Current state
- Repeated pattern: white/gray-50 card, `border border-gray-100`, hover scale + shadow.
- Used in About, Video Testimonials, Trust, Get Involved, Contact.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Stronger card borders** | `gray-100` can disappear on white. | Use `border-gray-200` (or `border-gray-200/80`) so cards are clearly defined. |
| **Vary card treatments** | Too much repetition dulls hierarchy. | Use 2–3 styles: (1) “feature” card with `border-red-200` or `bg-red-50/50`; (2) default with `border-gray-200`; (3) minimal with no border, subtle shadow only. |
| **Reduce hover scale** | Large scale can feel bouncy. | Use `hover:scale-[1.02]` (or `scale-102` if defined) consistently; avoid `scale-105` on large cards. |
| **Section padding consistency** | Even rhythm improves scanability. | Standardize section padding, e.g. `py-16 md:py-20` or `py-20` for all main sections. |
| **Max-width consistency** | Some sections use `max-w-4xl`, others `max-w-6xl`. | Decide: narrow (e.g. `max-w-4xl`) for text-heavy sections (About, Contact), wide (`max-w-6xl`) for grids (Impact, Trust, How It Works). |

### Suggested card variants (Tailwind)
- Default: `border border-gray-200 bg-white shadow-sm hover:shadow-md`.
- Highlight: `border border-red-200 bg-red-50/30`.
- Muted: `border border-gray-100 bg-gray-50/50`.

---

## 5. Video Testimonials

### Current state
- Three cards with gradient block + emoji as “thumbnail”; quote, location, “Watch Video” link.
- Active card has `border-red-600`; dots below for selection.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Real or placeholder thumbnails** | Gradient + emoji doesn’t signal “video” or real people. | Use YouTube thumbnail URLs from the embed (e.g. `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg`) or a shared placeholder image with a play icon overlay. |
| **Play button visibility** | Play icon should be obvious. | Always show a semi-transparent play button (e.g. `bg-black/30` circle with white play icon), not only on hover, so it’s clear the card is clickable/video. |
| **Active vs inactive** | Active card should clearly lead. | Keep `border-red-600` for active; add `opacity-90` or `grayscale` subtle effect for inactive cards, or lighter border `border-gray-200`. |
| **Dots** | Current dots work; ensure they’re accessible. | Use `<button type="button">` with `aria-label="Go to testimonial 1"` and `aria-current={activeTestimonial === idx}`. |
| **Embed behavior** | Clicking “Watch Video” could open modal or expand in-page. | Consider a modal with the YouTube embed on card click so users don’t leave the page. |

### Thumbnail example (Next.js Image)

```tsx
<Image
  src={`https://img.youtube.com/vi/${testimonial.videoId}/mqdefault.jpg`}
  alt={testimonial.name}
  fill
  className="object-cover"
/>
<div className="absolute inset-0 flex items-center justify-center bg-black/30">
  <Play className="w-14 h-14 text-white" />
</div>
```

---

## 6. Trust & Social Proof

### Current state
- Partners: four cards with emoji “logos” (🏥, ⚕️, 🌍, ❤️) and names.
- Donor testimonials: emoji avatars, name, role, quote, star rating.
- Trust badges: Charity Verified, Secure Donations, Volunteer-Led.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Real partner logos** | Emoji placeholders reduce credibility. | Use real logos (with permission) or a consistent “Partner” placeholder (e.g. same icon + “Partner name” in a standard card). If no logos yet, use a single “Our partners” block with text only and add logos when available. |
| **Donor photos** | Real (or approved stock) faces build trust. | Replace emoji with `next/image` using square images; ensure alt text and consent. |
| **Star rating** | Static ⭐ can look like fake reviews. | Either use a proper “5-star” component (e.g. filled/outline icons) or remove if you don’t collect star ratings. |
| **Trust badges** | Already strong. | Keep layout; ensure icons are consistent (e.g. Lucide `BadgeCheck`, `Lock`, `Users`) and optionally link “Charity Verified” to regulator page. |
| **Section order** | Partners → Donors → Badges is logical. | Consider leading with trust badges (above the fold on scroll) so “Charity Verified” is seen early. |

---

## 7. Geographic Impact Section

### Current state
- Left: blue-tinted box with globe emoji, “5 Countries Served”, “31,752+ supplies”.
- Right: list of countries with red progress bars.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Map or region visual** | Globe emoji doesn’t show “Africa” or geography. | Add a simple SVG outline of Southern Africa, or a muted map image (e.g. Mapbox/static map) with pins or shaded countries. |
| **Progress bar contrast** | Bar track must be visible. | Use `bg-gray-200` or `bg-gray-300` for the track; ensure the red fill meets contrast guidelines. |
| **Color consistency** | Blue background doesn’t match red brand. | Consider `from-red-50 to-white` or `from-gray-50 to-red-50/30` so the block fits the palette. |
| **Interactivity** | Hover on country rows is good. | Optionally sync hover with map (e.g. highlight a region on the map when hovering a country row). |
| **Numbers** | Keep “31,752+” in sync with impact counters. | Use the same number source (e.g. constant or CMS) so they never diverge. |

---

## 8. How It Works

### Current state
- Four steps: Collect → Sort & Pack → Ship → Local Distribution.
- Numbered circles (red gradient), title, short description.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Visual connector** | Steps feel disconnected. | Add a horizontal line or dashed path between step circles (e.g. `border-t-2 border-dashed border-gray-200` in a flex container). |
| **Icons per step** | Numbers alone are clear; icons add quick scan. | Add Lucide icons: `Package`, `Boxes`, `Ship`, `Heart` (or similar) next to or inside the circle. |
| **Mobile layout** | Four columns can squeeze on small screens. | Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` and stack with the connector line adapting (e.g. vertical on mobile). |
| **Spacing** | Even gaps between steps. | Use `gap-8` or `gap-10` so the line and circles have room. |

---

## 9. Get Involved & CTAs

### Current state
- Two main cards: “Make a Donation”, “Volunteer”.
- Three smaller cards: Impact (£20), Gift Aid, Secure.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Donate vs Volunteer** | Donate should be the primary action. | Keep “Donate Now” as solid red and full-width; “Get Started” (Volunteer) as outline or secondary style. |
| **Impact clarity** | “£20 helps deliver approximately 100 stoma bags” is strong. | Make this card stand out (e.g. border-red-200, or a small “Most popular” label). |
| **CTA destination** | Buttons should go somewhere. | Ensure “Donate Now” links to donation page or anchor; “How We Help” and “Get Started” have clear targets. |
| **Consistency** | Same button styles site-wide for same actions. | Use one primary style for “Donate” everywhere (nav, hero, Get Involved). |

---

## 10. Contact Section

### Current state
- Three cards: Email, Phone, Location (UK).
- Trust & Governance card (dark) with three items.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Clickable cards** | Email and phone should be obvious links. | Wrap the whole card in `<a href={contact.href}>` or ensure the value is clearly a link with underline on hover. |
| **Location** | “United Kingdom” is vague. | Add city/region if appropriate, or “UK-based” with a short note (e.g. “We operate across the UK and Africa”). |
| **Trust card** | Dark card stands out; good. | Keep; ensure text contrast (e.g. `text-gray-300` on dark) passes WCAG AA. |
| **Contact form** | No form currently. | Optional: add a simple “Send a message” form (name, email, message) that submits to an API or email service. |

---

## 11. Footer

### Current state
- Four columns: Brand, Quick Links, Legal, Follow Us.
- Copyright and tagline.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Mobile stacking** | Four columns are tight on small screens. | Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` and increase vertical spacing between stacks (e.g. `gap-8`). |
| **Placeholder links** | “Privacy Policy”, “Terms”, “Facebook”, etc. point to `#`. | Either add real URLs or style as muted/disabled (e.g. `pointer-events-none text-gray-500`) until pages exist. |
| **Legal** | Charity sites often need clear legal info. | When you add Privacy/Terms, link from footer and optionally from a small line under donation forms. |
| **Social icons** | Text links work; icons are quicker to scan. | Consider Lucide `Facebook`, `Twitter`, `Instagram` icons next to “Follow Us” for consistency with the rest of the site. |

---

## 12. Navigation

### Current state
- Fixed header, logo + tagline, desktop links, Donate button, mobile hamburger.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Donate visibility** | Should be the primary action. | Keep as only solid red button in nav; ensure it’s above the fold on mobile (e.g. in mobile menu at top). |
| **Active section** | Users don’t know which section they’re in. | Add simple scroll-spy: when a section is in view, set that nav item to `text-red-600 font-semibold` (and optionally an underline). |
| **Mobile menu** | Overlay or backdrop. | When menu is open, add `bg-black/20` overlay behind the menu so focus is clear; close on overlay click. |
| **Sticky behavior** | Optional hide on scroll down, show on scroll up. | Can reduce clutter on long pages; implement only if it doesn’t hurt accessibility (e.g. ensure focus isn’t trapped). |

---

## 13. Accessibility & Focus States

### Current state
- No explicit focus styles in the snippets reviewed; Tailwind’s default ring may apply.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Visible focus** | Keyboard users need to see focus. | Add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2` to buttons and links (or a global style in `globals.css` for `a` and `button`). |
| **Skip link** | Allow skipping nav. | Add `<a href="#main" class="sr-only focus:not-sr-only focus:absolute ...">Skip to content</a>` and an `id="main"` on the main content wrapper. |
| **Heading order** | Screen readers rely on hierarchy. | Ensure one `h1` (e.g. hero headline or “Footprints 2 Africa”), then `h2` for sections, `h3` for subsections. |
| **Alt text** | All images must have meaningful alt. | Logo: “Footprints 2 Africa”. Hero image: describe the scene or purpose. Partner/avatar images: name or “Partner name logo”. |
| **Color contrast** | Text on backgrounds must meet AA. | Check `gray-600` on white and `white` on red-600 with a contrast checker; adjust to `gray-700` or red-700 if needed. |

### Example (globals.css)

```css
@layer base {
  a:focus-visible,
  button:focus-visible {
    @apply outline-none ring-2 ring-red-500 ring-offset-2;
  }
}
```

---

## 14. Performance & Motion

### Current state
- Many elements use `transition-all duration-300` and hover scale.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Prefer specific transitions** | `transition-all` can affect layout and paint. | Use `transition-colors` or `transition-transform` (and `transition-shadow` if needed) instead of `transition-all` where possible. |
| **Respect prefers-reduced-motion** | Some users are sensitive to motion. | In `globals.css`: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }` or scope to animated components. |
| **Count-up** | Already scroll-triggered; good. | Ensure the count-up doesn’t run repeatedly (your `countersStarted` flag handles this). |

---

## 15. Responsive & Mobile

### Current state
- Breakpoints: `sm`, `md`, `lg`; mobile menu; grid collapses.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Touch targets** | Buttons and links should be at least 44×44px. | Ensure nav links, Donate button, and card CTAs have `min-h-[44px]` or padding that meets that. |
| **Hero on mobile** | Headline might be too large. | Use `text-4xl sm:text-5xl lg:text-6xl` so it doesn’t overflow or feel huge on small screens. |
| **Table spacing** | Tables if any; not in current homepage. | If you add tables later, use horizontal scroll or card layout on small screens. |
| **Test devices** | Real-device testing catches issues. | Test on at least one small phone (e.g. 375px) and one tablet; check nav, forms, and long copy. |

---

## 16. Color & Contrast

### Current state
- Primary: red-600, red-400; backgrounds: white, gray-50; text: gray-900, gray-600.

### Improvements

| Improvement | Why | How |
|-------------|-----|-----|
| **Warm neutrals (optional)** | Slight warmth can feel more human. | Consider a warm gray for backgrounds (e.g. `gray-50` with a custom tint) or keep current for a cleaner look. |
| **Red consistency** | One primary red for buttons and key UI. | Use `red-600` as default, `red-700` for hover; use `red-400` only for gradients or secondary highlights. |
| **Contrast checklist** | Meet WCAG AA. | Verify: gray-900 on white ✓; gray-600/700 on white ✓; white on red-600 ✓; gray-300 on gray-900 (footer) ✓. |
| **Focus ring** | Must be visible on all backgrounds. | Red ring works on white; on red buttons use a white or yellow ring, or increase offset. |

---

## Priority Summary

| Priority | Focus | Expected impact |
|----------|--------|------------------|
| **P0** | Accessibility: focus states, skip link, contrast | Compliance and usability |
| **P1** | Replace emoji icons with Lucide (impact + trust) | Consistency and credibility |
| **P2** | Typography: heading font, body contrast | Brand and readability |
| **P3** | Hero: image/background, CTA prominence | First impression and conversions |
| **P4** | Cards: border strength, one “feature” style | Hierarchy and polish |
| **P5** | Video thumbnails, partner/donor visuals | Trust and clarity |
| **P6** | Map visual, How It Works connector | Clarity of message |
| **P7** | Footer links, contact form (optional) | Completeness |

Use this document as a checklist: tackle P0–P2 first, then iterate through P3–P7 as you refine the site.
