# Timber Resources: website

Site for [timberresources.net](https://timberresources.net), a lead-focused site for a Southern Yellow Pine lumber brokerage. Built with [Astro](https://astro.build) in the Draft 1 ("original look") design: forest green, amber and cream, with Archivo and Inter. See [DESIGN.md](DESIGN.md) for the design system and change log.

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

The site deploys as a Cloudflare **Worker** (`timberresources`) that serves the built files as static assets. It needs a build step now; it's no longer plain HTML files. In the Worker's **Settings → Build → Build configuration**:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Build variable:** `NODE_VERSION` = `22` (only if the default Node is older)

`wrangler.jsonc` tells the deploy step to publish the `dist/` folder. Its `name` must match the Worker's name in the dashboard.

`public/_headers` is copied into `dist/` and keeps the `pages.dev` / `workers.dev` addresses out of search results.

## Before launch
- Make sure info@timberresources.net is set up and receiving mail.
- Quote form: posts to Formspree (`https://formspree.io/f/mwloarkq`). Submissions go to the email address set on that Formspree form. Send one test submission to confirm the form before launch.
  - There is no file upload, so the form works on Formspree's free plan. Buyers paste a material list into the notes field.
  - In Formspree, add timberresources.net to the form's allowed domains.
- Replace the monogram portraits with real headshots of Ken, Sam and Chris.
- Confirm that the payment terms are approved for publication.
- Google Tag Manager (`GTM-WN8CQMQS`) and LocalBusiness structured data are already in place; check them with Tag Manager Preview and Google's Rich Results Test once live.
