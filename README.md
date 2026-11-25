# Timber Resources: website

Site for [timberresources.net](https://timberresources.net), a lead-focused site for a Southern Yellow Pine lumber brokerage. Built with [Astro](https://astro.build) on the LedgerCraft structure with the Draft 1 color palette. See [DESIGN.md](DESIGN.md) for the design system and change log.

| Page | Source |
|---|---|
| Home | `src/pages/index.astro` |
| Products & customers | `src/pages/products.astro` |
| Request a delivered quote | `src/pages/quote.astro` |

- **Business details** (phone, locations, form endpoint): `src/data/site.ts`
- **Shared styles:** `src/styles/global.css`
- **Photos:** `src/assets/images/` (optimized at build time)

## Develop and build

Requires Node 22 or newer.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built dist/ locally
```

## Deploying (Cloudflare)

The site needs a build step now; it's no longer plain HTML files. In the Cloudflare project settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variable:** `NODE_VERSION` = `22` (if the default Node is older)

`public/_headers` is copied into `dist/` and keeps the `pages.dev` / `workers.dev` addresses out of search results.

## Before launch
- Replace the `[EMAIL ADDRESS]` and `[BUSINESS HOURS]` placeholders in `src/data/site.ts`.
- Quote form: posts to Formspree (`https://formspree.io/f/mwloarkq`). Submissions go to the email address set on that Formspree form. Send one test submission to confirm the form before launch.
  - There is no file upload, so the form works on Formspree's free plan. Buyers paste a material list into the notes field.
  - In Formspree, add timberresources.net to the form's allowed domains.
- Replace the `[PHOTO]` placeholders with real headshots of Ken, Sam and Chris.
- Confirm that the payment terms are approved for publication.
- Google Tag Manager (`GTM-WN8CQMQS`) and LocalBusiness structured data are already in place; check them with Tag Manager Preview and Google's Rich Results Test once live.
