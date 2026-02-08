# Brand Colours

These colours are the single source of truth for all design across the website.

| Name           | Hex       | Use |
|----------------|-----------|-----|
| **Blue**       | `#2A307C` | Primary brand blue: nav, footer, hero, headings, links, map high-supply fill, focus rings |
| **Light Grey** | `#F7F7F7` | Section backgrounds (alternating with white), subtle surfaces |
| **Red**        | `#E41F29` | Primary CTAs (Donate, main buttons), accent |
| **Green on Map** | `#AFDCB1` | Impact map fill (low-supply end of scale), success/land accents |

## Implementation

- **CSS variables** in `app/globals.css`:
  - `:root`: `--brand-navy`, `--brand-blue`, `--brand-grey`, `--brand-green`, `--brand-red`, etc.
  - `@theme inline`: `--color-brand-*` so Tailwind classes like `bg-brand-navy`, `text-brand-red`, `bg-brand-grey` work site-wide.
- **Derived values**: `--brand-navy-light` and `--brand-red-hover` for hover states; `--brand-green-light` for tints.
- **Impact map** (`components/impact-map.tsx`): gradient from green `#AFDCB1` (fewer supplies) to blue `#2A307C` (more supplies); tooltip and hover stroke use blue.

All existing `brand-navy`, `brand-blue`, `brand-red`, `brand-green` usages now resolve to these values.
