# Timber Resources: Design System

The website for Timber Resources, a Southern Yellow Pine lumber broker based in Clarksville, Tennessee (timberresources.net). It's built on the **LedgerCraft** structure (flat surfaces, crisp borders, small corner radii, mono numerals) with the **Draft 1 color palette** (forest green, amber, rust, warm cream).

- **Code is the source of truth.** Colors and shared styles live in `src/styles/global.css`. Business details (phone, locations, form endpoint) live in `src/data/site.ts`.
- **The visual editor** is the Claude Design canvas: https://claude.ai/artifact/JhdiDVNzAQz5nWMtZH2mNZ.
  - Its three "LedgerCraft" pages match the site. Draft 1 and Page 2 are for reference only.
- **Change log:** at the bottom of this file.

---

## 1. Principles

- **Plain and precise.** Customers are plant managers and buyers. Use specs, tables and straight answers, not marketing fluff.
- **Borders before shadows.** Depth comes from 1px borders. A shadow appears only on a card that needs to stand out.
- **Numbers in mono, headline figures in slab.** Phone numbers, sizes and grades use IBM Plex Mono so they line up and read like a spec sheet. The big "at a glance" figures are set large in bold Roboto Slab.
- **Asymmetry in a few places only.** Most sections sit on a calm grid. A few deliberate breaks keep the page from feeling repetitive (see §7).
- **One action everywhere:** "Request a Delivered Quote."

---

## 2. Color

Draft 1 palette, assigned to the LedgerCraft roles. Use the CSS variables, never raw hex values, in components.

### Brand and accents

| Token | Hex | Used for |
|---|---|---|
| `--c-accent` | `#E0A24E` | Amber. Primary buttons, buttons on dark backgrounds, focus outline |
| `--c-accent-hover` | `#EBB36A` | Hover on amber buttons |
| `--c-on-accent` | `#1B2420` | Text on amber (amber always takes dark text, never white) |
| `--c-primary` | `#7A4510` | Rust. Links, overlines, active nav item, chip text, team roles, step numbers |
| `--c-primary-hover` | `#5A320B` | Link hover |
| `--c-primary-tint` | `rgba(224,162,78,.16)` | Status chip fill, About photo offset block |
| `--c-primary-tint-border` | `rgba(224,162,78,.45)` | Status chip border, form focus ring |
| `--c-brand` | `#22382D` | Forest green. Call-to-action band |
| `--c-brand-line` | `#8FA597` | Outline button border on forest |
| `--c-primary-on` | `#B9C8BE` | Body text on forest |

### Text

| Token | Hex | Used for |
|---|---|---|
| `--c-ink` | `#1B2420` | Headings, body text |
| `--c-ink-2` | `#4A544E` | Secondary text, leads, descriptions |
| `--c-steel` | `#646D67` | Labels, captions, table headers, tagline |
| `--c-muted` | `#9FB3A6` | Faint or decorative text |

### Surfaces and lines

| Token | Hex | Used for |
|---|---|---|
| `--c-bg` | `#F6F4EF` | Page background (warm cream) |
| `--c-surface` | `#FFFFFF` | Cards, header, opening sections, forms |
| `--c-surface-alt` | `#FAF8F3` | Zebra rows, table headers, form section bars |
| `--c-surface-sunk` | `#EDE9E0` | Secondary buttons, placeholders, row hover |
| `--c-border` | `#E2DED4` | Default 1px borders |
| `--c-border-strong` | `#CFC7B6` | Elevated cards, inputs, secondary button border |
| `--c-neutral` | `#B9AE97` | Dashed placeholder borders |
| `--c-dark` | `#1B2420` | Top bar, footer |
| `--c-dark-line` | `#2F3A34` | Dividers on dark |
| `--c-dark-text` | `#B9C8BE` | Text on top bar and footer |

Form error text: `#B91C1C`.

**Contrast:**
- Rust on white and ink on amber both pass WCAG AA for body text.
- Don't put white text on amber, and don't use amber for text on light backgrounds.

---

## 3. Typography

Google Fonts: Roboto Slab (500, 700), Roboto (400, 500, 700), IBM Plex Mono (400, 500).

| Role | Spec |
|---|---|
| Home headline (h1) | Roboto Slab 700, 44px (50px at ≥960px, 34px on phones), line height 1.15, tracking 0.01em |
| Products headline | Roboto Slab 700, `clamp(36px, 5.4vw, 68px)`, line height 1.04, tracking −0.01em. **Oversized on purpose.** |
| Page headline (Quote) | Roboto Slab 700, 40px (32px on phones), line height 1.2 |
| Section heading (h2) | Roboto Slab 700, 30px (26px on phones), line height 1.2 |
| Card heading | Roboto Slab 700, 17px (card title bars); 20–24px (product cards) |
| Lead | Roboto 400, 17–18px, line height 1.55, `--c-ink-2` |
| Body | Roboto 400, 14–16px, line height 1.5–1.6 |
| Caption / label | Roboto 500, 12–13px, `--c-steel` |
| Overline | Roboto 700, 11px, uppercase, tracking 0.08em, `--c-steel` (or `--c-primary` for page-intro overlines) |
| Stat figures (Home "At a glance") | Roboto Slab 700, `clamp(40px, 4.2vw, 56px)`, line height 1, tracking −0.02em, `--c-ink`. A 28×3px amber rule sits above each figure. Units ("days", "10 days") are set smaller beside the number in Roboto 500 15px rust. Label below in 13px steel |
| Numbers in data | IBM Plex Mono 400/500, 13px: tables, specs, phone numbers |

---

## 4. Spacing and layout

- **Container:** max width 1200px, 24px side padding.
- **Spacing scale (4px base):** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 72 / 80 / 112.
- **Sections:** 64px top and bottom by default. Varied on purpose in a few places (About gets 112px on top).
- **Content stacks:** 24px gap by default (`.stack`, change it with `--stack-gap`).
- **Breakpoints:**
  - 640px: phone type sizes; bordered cell grids stack.
  - 760px: Products intro stacks.
  - 960px: desktop asymmetric layouts switch on.
- **Grids:**
  - Most grids are `repeat(auto-fit, minmax(…, 1fr))`, so they collapse on their own.
  - Asymmetric layouts use fixed ratios behind a `min-width: 960px` media query.

---

## 5. Shape and depth

| | Value |
|---|---|
| Small radius `--r-sm` | 2px: buttons, inputs, chips, placeholders |
| Medium radius `--r-md` | 4px: cards, photos, tables |
| Shadow `--shadow-md` | `0 2px 6px rgba(15,23,42,.06)`: elevated cards only |
| Photos | 1px `--c-border` and 4px radius. "Bare" photos (full-bleed bands, strips inside cards) have neither |

---

## 6. Components

All shared classes are in `global.css`; Astro components are in `src/components/`.

### Buttons (`.btn`)
- **Size:** at least 44px tall, 22px side padding, 15px Roboto 500, 2px radius. `.btn--sm` is 14px text with 18px side padding.
- **Variants:**
  - `--primary`: amber fill, dark text.
  - `--secondary`: sunk fill, `--c-ink-2` text, strong border.
  - `--inverse`: amber on dark backgrounds.
  - `--outline-inverse`: transparent, sage border, white text, for dark backgrounds.

### Chips (`.chip`)
- 12px Roboto 500, 2px radius, 1px border, neutral sunk fill.
- `.chip--status`: amber tint with rust text ("Often same day", "Core business").

### Cards (`.card`)
- White, 1px border, 4px radius.
- `.card--elevated` adds the strong border and `--shadow-md`.
- `.card__head` is the title bar: Roboto Slab 17px, 14px/20px padding, bottom border.

### Bordered cell grid (`.cell-grid`)
- Stats, steps and terms sit in cells divided by 1px lines.
- On phones the cells stack and the vertical dividers become horizontal ones.

### Key/value rows (`.kv`)
- Spec lists: steel-colored label, value beside it, zebra rows.

### Tables
- Uppercase 12px steel headers on `--c-surface-alt`, 1px row lines, zebra rows, hover row in `--c-surface-sunk`.
- Numbers are right-aligned in mono.
- The Products sizes table sorts when you click a header (▲ ▼ ↕, `aria-sort`).

### Forms (Quote page)
- Inputs are 44px tall, 2px radius, with a strong border. Focus: rust border plus an amber ring.
- The form is split into numbered sections, each with a heading bar on `--c-surface-alt`.
- No file upload (Formspree free plan): buyers paste a material list into the notes field.
- It submits to Formspree (`https://formspree.io/f/mwloarkq`).

### Site chrome
- **TopBar:** dark strip with the tagline on the left and phone/fax in mono on the right.
- **SiteHeader:** brand name in Roboto Slab 22px plus the tagline overline; nav links; amber "Request a Delivered Quote" button (hidden on the Quote page).
- **SiteFooter:**
  - Full version (Home): Brand / Contact / Pages / Locations columns.
  - Compact version: one line.
- **CtaBand:** forest band with a heading, a sage-colored line of text, an amber button and an outline phone button. Sizes `md` and `lg`.

### Photo (`Photo.astro`)
- Wraps `astro:assets` `<Image>`.
- Props: `ratio`, `sizes`, `priority`, `bare`, `maxWidth`.
- Produces responsive widths, so files stay small (largest ≈ 380 KB).
- Source images live in `src/assets/images/` (iStock, licensed).

---

## 7. Editorial moments

Deliberate breaks in the grid rhythm, desktop only (≥960px; Products ≥761px). Below those widths they fall back to simple stacking.

1. **Home → About, mirrored and offset.**
   - "How we work" puts the copy left and the photo right. About flips that: a larger 4:3 photo on the left (7fr), copy on the right (5fr), bottom-aligned under a 3px rust rule.
   - A pale amber block sits offset 28px down and to the left behind the photo.
   - Extra top padding (112px) gives the section room.
2. **Products intro, oversized type.**
   - The headline runs up to 68px with tight leading.
   - A tall 4:5 pine photo sits on the band's bottom edge (flat bottom corners) instead of floating centered.

Tried and rejected: the "What we need to quote" card overlapping the hero photo band (removed 2026-11-25).

---

## 8. Imagery

| File | Where |
|---|---|
| `hero-lumber-stack.jpg` | Full-width band under the Home hero; Open Graph default |
| `forklift-loading-truck.jpg` | Home → How we work (16:9) |
| `sawmill-line.jpg` | Home → About (4:3, offset block) |
| `pine-stand.jpg` | Products intro (4:5; 3:2 on phones); Products Open Graph |
| `pallets.jpg` | Strip inside the Pallet card (220px tall) |
| `lift-truck-green-lumber.jpg` | Landscape timbers card |

Team headshots are still `[PHOTO]` placeholders.

---

## 9. Content notes

- Owner: **Ken Proctor**. Team: Sam Pratt (Jacksonville, FL), Chris Proctor.
- Locations: Clarksville, Tennessee; Jacksonville, Florida.
- Phone (901) 395-4736 · Fax 1-888-259-8283.
- Placeholders still to fill: `[EMAIL ADDRESS]`, `[BUSINESS HOURS]`, team `[PHOTO]`s.
- Analytics: Google Tag Manager container `GTM-WN8CQMQS`, using Google's standard snippet. The script sits in the `<head>` and the `<noscript>` iframe right after `<body>` on every page, both via `src/layouts/BaseLayout.astro`.
- Structured data: schema.org `LocalBusiness` JSON-LD on the Home page.
  - It's built in `src/data/schema.ts` from `site.ts`: name, phone, fax, Clarksville head office, Jacksonville as a department, founder Ken Proctor, founded 2012, areaServed Southeast.
  - Email and opening hours are left out while they're still placeholders. Once real values replace the brackets in `site.ts`, email is added automatically; hours need an `openingHours` line added to `schema.ts`.

---

## Change log

| Date | Change |
|---|---|
| 2026-11-24 | Built the site in Astro from canvas Draft 2 (LedgerCraft). Formspree endpoint, Clarksville TN location, six iStock photos added. |
| 2026-11-25 | Added editorial asymmetry: About mirrored with an offset block; oversized Products headline with a grounded tall photo. |
| 2026-11-25 | Removed the hero quote-card overlap. Switched all colors to the Draft 1 palette (amber buttons, rust accents, forest call-to-action band, cream background); everything else stays LedgerCraft. Owner name corrected to Ken Proctor. |
| 2026-11-25 | Home stat figures restyled: bold Roboto Slab at up to 56px with an amber rule above, and units set small in rust ("2–3 days", "1% 10 days"); previously 28px mono. |
| 2026-11-25 | Added Google Tag Manager (GTM-WN8CQMQS) to every page; switched to Google's standard head + noscript snippet. |
| 2026-11-25 | Added LocalBusiness structured data (JSON-LD) to the Home page. |
| 2026-11-25 | Removed the quote-form file upload (Formspree free plan); the notes field now invites a pasted material list. Moved to GitHub (WDMRepo/timberresources), replacing the Draft 1 HTML on main. |
| 2026-11-25 | Added `wrangler.jsonc` so the Cloudflare Worker publishes the built `dist/` folder. |
