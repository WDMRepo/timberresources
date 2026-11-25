# Timber Resources: Design System

The website for Timber Resources, a Southern Yellow Pine lumber broker based in Clarksville, Tennessee (timberresources.net). The design is **Draft 1, the "original look"**:
- forest green and amber on warm cream;
- Archivo headings and Inter body text;
- soft rounded cards and generous spacing.

- **Code is the source of truth.** Colors and shared styles live in `src/styles/global.css`. Business details (phone, locations, form endpoint) live in `src/data/site.ts`.
- **The visual editor** is the Claude Design canvas: https://claude.ai/artifact/JhdiDVNzAQz5nWMtZH2mNZ.
  - Its Draft 1 pages (Home, Products & Customers, Request a Delivered Quote) match the site.
  - "Page 2" is a scratch area.
- **Change log:** at the bottom of this file.

---

## 1. Principles

- **Warm and trustworthy.** A family business with sawmill roots: earthy forest green, cream paper, amber highlights. Not a tech product.
- **Plain and specific.** Buyers are plant managers. Lead with specs, delivered price and what happens next.
- **One action everywhere:** the amber "Request a (Delivered) Quote" button.
- **Photos do the talking.** Real lumber, mills and trucks; large and rounded.

---

## 2. Color

Use the CSS variables in components, never raw hex values.

### Brand

| Token | Hex | Used for |
|---|---|---|
| `--c-forest` | `#22382D` | Hero and Products intro backgrounds, call-to-action panel, "talk it through" panel, table header, logo tile, a monogram |
| `--c-forest-2` / `--c-forest-3` | `#2E4A3B` / `#3A5A49` | Other monogram tiles; forest button hover |
| `--c-forest-line` | `#36513F` | Divider above the hero stats strip |
| `--c-amber` | `#E0A24E` | Primary buttons, hero eyebrows, monogram letters, logo boards, focus outline |
| `--c-amber-hover` | `#EBB36A` | Amber button hover |
| `--c-rust` | `#7A4510` | Links, eyebrows on light backgrounds, step numbers, team roles, current nav item |
| `--c-rust-hover` | `#5A320B` | Link hover |

### Text

| Token | Hex | Used for |
|---|---|---|
| `--c-ink` | `#1B2420` | Headings, body text, text on amber |
| `--c-ink-2` | `#3A443E` | About paragraphs, table cells, spec lists |
| `--c-body` | `#4A544E` | Secondary paragraphs, card descriptions |
| `--c-muted` | `#5E6761` | Notes and hints |
| `--c-on-forest` | `#F6F4EF` | Headings and text on forest |
| `--c-on-forest-2` | `#D5DDD7` | Lead text on forest |
| `--c-on-forest-3` | `#B9C8BE` | Labels on forest, footer text |
| `--c-on-forest-4` | `#9FB3A6` | Photo captions on forest |
| `--c-forest-outline` | `#8FA597` | Outline button border on forest |

### Surfaces and lines

| Token | Hex | Used for |
|---|---|---|
| `--c-bg` | `#F6F4EF` | Page background (cream); sticky header at 94% opacity with blur |
| `--c-surface` | `#FFFFFF` | Cards, About section, form |
| `--c-sand` | `#EDE9E0` | "How we work" section, "Something else" panel |
| `--c-field` | `#FBFAF7` | Form fields |
| `--c-line` | `#E2DED4` | Card borders, header rule |
| `--c-line-soft` | `#ECE8DF` | Rows inside cards, FAQ dividers |
| `--c-line-strong` | `#CFC7B6` | Step dividers |
| `--c-field-line` | `#C9C2B3` | Form field borders |
| `--c-hover-line` | `#B9AE97` | Linked-card border on hover |
| `--c-dark` | `#1B2420` | Footer |
| `--c-dark-line` | `#2F3A34` | Footer divider |

Form error: `#FDECEC` background, `#8A1C1C` text.

**Contrast:**
- Amber buttons always take dark ink text, never white.
- Rust on cream or white passes WCAG AA for body text.

---

## 3. Typography

Google Fonts: **Archivo** (500–800) for headings and figures; **Inter** (400–700) for everything else.

| Role | Spec |
|---|---|
| Home headline | Archivo 800, `clamp(38px, 5.2vw, 60px)`, line height 1.04, tracking −0.025em |
| Products headline | Archivo 800, `clamp(36px, 4.6vw, 54px)`, line height 1.06, tracking −0.02em |
| Quote headline | Archivo 800, `clamp(34px, 4.4vw, 50px)`, line height 1.06 |
| Section heading (`.h2`) | Archivo 800, `clamp(30px, 3.6vw, 42px)`, line height 1.1, tracking −0.02em |
| Card heading | Archivo 700–800, 20–34px |
| Hero stats | Archivo 700, 30px, with a 14px label below |
| Eyebrow (`.eyebrow`) | Inter 600, 13px, uppercase, tracking 0.12em; rust (amber on forest) |
| Lead | Inter 400, 18–19px, line height 1.6 |
| Body | Inter 400, 15–17px, line height 1.6–1.7 |
| Phone numbers | `.tabular` (tabular figures) |

Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.

---

## 4. Spacing and layout

- **Container:** max width 1200px, 24px side padding.
- **Sections:** `clamp(64px, 9vw, 104px)` top and bottom (`.section`).
- **Grids:** `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` throughout, so layouts collapse to one column on phones without breakpoints.
- **Header:** see SiteHeader under Components.
- Anchors (`#how`, `#about`) get `scroll-padding-top: 88px` so the sticky header doesn't cover them.

---

## 5. Shape and depth

| | Value |
|---|---|
| Buttons, fields | 6px radius |
| Photos | 8px radius |
| Linked segment cards | 10px radius |
| Cards and panels | 12px radius |
| Hero / intro photo shadow | `0 24px 48px rgba(0,0,0,.28)` |
| Linked-card hover | border `#B9AE97` + `0 6px 18px rgba(27,36,32,.07)`; arrow nudges 3px |
| Buttons | lift 1px on hover; all motion off under `prefers-reduced-motion` |

---

## 6. Graphic motif

Two marks taken from the trade, drawn as hairlines and used sparingly. They never sit behind body text on light backgrounds.

- **End-grain rings (`GrainRings.astro`):** the growth rings on the sawn end of a log.
  - Concentric, slightly irregular rings with an off-centre pith, every fourth ring a little heavier, and one radial drying check.
  - It's inline SVG generated at build time: no image request, no script.
  - It's drawn in `--c-forest-line` on forest backgrounds, so it reads as texture, not decoration.
  - It's always cropped off an edge, never shown whole. Props: `rings`, `seed` (changes the wobble so each use differs).
  - **Used on:**
    - Home hero (lower-left, behind the headline);
    - Products intro (top-left);
    - the call-to-action panel (right edge);
    - the Quote page's "talk it through" panel (bottom-right).
- **Tally ruler (`.ruler`):** the tick marks of a lumber tally stick, used in place of a plain rule.
  - A 1px line with a short tick every 8px and a tall tick every 64px, done in pure CSS gradients and colored by `color`.
  - **Used on:**
    - the Home stats strip (forest line);
    - the Account & terms rule (ink);
    - above the Products sizes & grades table (strong line).

Don't add the motif to cards, photos or the form. Don't animate it, fill it or add new containers for it.

---

## 7. Motion

Restrained and consistent: one easing family, three durations, nothing that bounces or overshoots, and no animation that delays content.

| Token | Value | Used for |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Everything: fast start, soft landing |
| `--t-fast` | 160ms | Colour changes, field borders |
| `--t-med` | 320ms | Button lift, nav underline, arrows, header shadow, FAQ chevron and open |
| `--t-slow` | 700ms | Photo drift, scroll reveals |

**Navigation**
- Nav links get a 1.5px underline that draws in from the left on hover and keyboard focus. It stays drawn on the current page.
- The logo tile tilts 4° on hover.
- Once the page scrolls, the sticky header gains a soft shadow (rAF-throttled, passive scroll listener).

**Buttons**
- Hover: lift 1px; the amber button also gets a faint warm shadow.
- Press: settle back with `scale(0.985)` in 80ms.

**Cards and imagery**
- Linked cards (Home "Who we supply") rise 2px, darken their border, deepen their shadow and nudge the arrow 4px.
- Photos inside them drift to `scale(1.035)` over 700ms, clipped by the card.
- Hover effects only apply on devices that can actually hover (`@media (hover: hover)`), so phones never get stuck hover states.

**Forms and FAQ**
- Fields darken their border on hover; on focus they turn white with a soft forest ring.
- FAQ answers slide open (Chromium, via `::details-content`; other browsers snap open), and the chevron turns.

**Scroll reveals (`data-reveal`)**
- Elements fade in while rising 14px, once, as they enter the viewport.
- Optional stagger via `--reveal-i` (0–3, 70ms steps), switched off on phones.
- **Used for:** section intros, the core card, segment cards, the How we work steps, the About intro and team, the terms row, the call-to-action panel, the Products cards and table, and the Quote FAQ.
- **Never used for:** the hero or anything above the fold, so nothing waits to appear on load.
- Content can't get stuck hidden: the hidden state only applies when a tiny inline script has confirmed that IntersectionObserver exists and that reduced motion is off.

**Reduced motion**
- With `prefers-reduced-motion`, reveals never switch on, and every transition and animation finishes instantly.
- Hover and press transforms are cancelled; colour still changes.

---

## 8. Components

Shared classes are in `global.css`; Astro components are in `src/components/`.

- **Buttons (`.btn`):** 48px tall, 24px side padding, Inter 600 16px, 6px radius.
  - `--amber` is the main action.
  - `--line` is an outline on forest.
  - `--forest` is solid forest on light backgrounds.
  - `--ghost` is a forest outline on light backgrounds.
  - Sizes: `--sm` (44px) and `--lg` (52px).
- **Logo (`Logo.astro`):** forest tile with four amber "boards". Also used as the favicon.
- **SiteHeader (layout by width):**
  - **960px and up:** one row: brand · Products, How We Work, About · phone icon + number · amber "Request a Quote".
  - **Below 960px:** two rows.
    - Row 1: brand on the left, compact amber button on the right.
    - Row 2: a tab strip that runs edge to edge under a full-width hairline.
      - The page links sit left in an even rhythm; the phone icon + "Call" is pushed to the far right.
      - The active page gets a 2px rust marker sitting on the header's bottom edge, like a tab.
      - Every link is at least 44×46px.
      - Hover colours only apply on devices with a pointer; on touch, links just flash rust while pressed.
      - The focus ring is drawn inside each link so it isn't clipped.
      - The strip scrolls sideways rather than spilling off-screen at very large zoom; at 200% the brand name may wrap.
  - **Phones (below 560px):** the button reads "Get a Quote", and just "Quote" below 360px.
  - **Stickiness:** it sticks to the top at 720px and up; on phones it scrolls away.
  - Brand is the logo plus "Timber Resources" in Archivo 800. The quote button is hidden on the Quote page.
- **SiteFooter:**
  - Full version (Home): Brand / Contact / Explore / Locations, plus a © line.
  - Compact version: one line.
- **CtaBand:** rounded forest panel with a heading, lead text, amber button and outline phone button.
- **Cards (`.card`):** white, 1px `--c-line`, 12px radius. `.seg` makes a whole card a link with the hover lift.
- **Photo (`Photo.astro`):**
  - Wraps `astro:assets` `<Image>`.
  - Props: `ratio`, `sizes`, `priority`, `bare` (no radius), `maxWidth`.
  - Produces responsive WebP; the largest served file is about 380 KB.
- **Quote form:**
  - Two numbered fieldsets; 46px fields on `--c-field` with a forest focus outline.
  - Hidden `_subject` and `_gotcha` (spam honeypot) fields.
  - Submits to Formspree by fetch, with a plain POST fallback when JavaScript is off.
  - Shows an inline success panel or error message.
  - No file upload (Formspree free plan).
- **FAQ:** native `<details>` rows in a white card.

---

## 9. Page structure

- **Home:**
  1. Forest hero with the lumber-yard photo and caption.
  2. Stats strip: Since 1981 · Est. 2012 · Full truckloads · Often same day.
  3. Who we supply: pallet core card with photo, plus four segment cards.
  4. How we work: sand background, forklift photo, four numbered steps.
  5. About: sawmill photo band, three monogram team cards.
  6. Account & terms.
  7. Call-to-action panel.
  8. Full footer.
- **Products:**
  1. Forest intro with the pine photo.
  2. Pallet card with photo strip and spec list.
  3. Truss / Dunnage / Playground cards.
  4. Full-width Landscape timbers card with the lift-truck photo.
  5. "Something else" sand panel.
  6. Sizes & grades table.
- **Quote:** form, plus an aside with the "talk it through" forest panel and the FAQ.

---

## 10. Imagery

| File | Where |
|---|---|
| `hero-lumber-stack.webp` | Home hero (5:4, shadow); Open Graph default |
| `pallets.webp` | Home core card; Products pallet strip |
| `forklift-loading-truck.webp` | Home → How we work (16:10) |
| `sawmill-line.webp` | Home → About band (up to 380px tall) |
| `pine-stand.webp` | Products intro (4:3, shadow); Products Open Graph |
| `lift-truck-green-lumber.webp` | Products → Landscape timbers |

The source files are WebP at most 3000px wide, in `src/assets/images/`. Team headshots are still monogram placeholders (KP, SP, CP).

---

## 11. Content notes

- Owner: **Ken Proctor**. Team: Sam Pratt (Jacksonville, FL), Chris Proctor.
- Locations: Clarksville, Tennessee; Jacksonville, Florida.
- Phone (901) 395-4736 · Fax 1-888-259-8283.
- Email: info@timberresources.net (a mailto link in the footer and on the Quote page; also in the schema).
- Business hours are intentionally not shown.
- Still to fill: team headshots.
- Analytics: Google Tag Manager `GTM-WN8CQMQS` (standard head script and noscript iframe) on every page, via `src/layouts/BaseLayout.astro`.
- Structured data: schema.org `LocalBusiness` JSON-LD on the Home page.
  - It's built in `src/data/schema.ts` from `site.ts`.
  - It includes name, phone, fax, email, both locations, founder and area served. No opening hours, by choice.
- Hosting: Cloudflare Worker `timberresources` (`wrangler.jsonc` publishes `dist/`); repo `WDMRepo/timberresources`.

---

## Change log

| Date | Change |
|---|---|
| 2026-11-24 | Built the site in Astro from canvas Draft 2 (LedgerCraft). Formspree endpoint, Clarksville TN location, six iStock photos added. |
| 2026-11-25 | LedgerCraft iterations: editorial asymmetry, Draft 1 colors, bolder stat figures (all superseded below). Owner name corrected to Ken Proctor. |
| 2026-11-25 | Added Google Tag Manager (standard snippet) and LocalBusiness structured data. |
| 2026-11-25 | Removed the quote-form file upload (Formspree free plan). Moved to GitHub (WDMRepo/timberresources); added `wrangler.jsonc` for the Cloudflare Worker. |
| 2026-11-25 | Source photos converted to WebP, max 3000px wide (≈95 MB → ≈6 MB). |
| 2026-11-25 | **Switched the whole site to Draft 1 ("original look")**: forest/amber/cream palette, Archivo + Inter, rounded cards, forest hero with stats strip, monogram team cards, sizes & grades table. Draft 2 (LedgerCraft) removed from the canvas and the code; it remains in git history. Header no longer sticks on phones. |
| 2026-11-25 | Added the graphic motif (end-grain rings and tally-ruler rules) to the hero, Products intro, call-to-action and quote panels, stats strip, terms and sizes table. Rewrote the team bios in a natural voice (site and canvas). |
| 2026-11-25 | Added microinteractions: motion tokens, nav underline, scrolled-header shadow, button lift and press, linked-card lift with photo drift, field focus ring, animated FAQ, scroll reveals. All honour reduced motion; hover effects only on hover-capable devices. |
| 2026-11-25 | Email set to info@timberresources.net (mailto links; added to schema). Business hours removed. Header redesigned for phones and tablets: two tidy rows with an evenly spaced link strip; side margins 18px on phones. Canvas updated to match (email, no hours). |
| 2026-11-25 | Phone header polish pass: tab-style strip with the active marker on the bottom edge, full-bleed divider, links left with Call on the right, 44px minimum tap widths, hover only on pointer devices, inset focus rings, safe at 200% zoom. |
