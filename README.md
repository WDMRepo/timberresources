# Timber Resources — website (Draft 1)

Static redesign draft for [timberresources.net](https://timberresources.net): a lead-focused site for a Southern Yellow Pine lumber brokerage.

| Page | File |
|---|---|
| Home | `index.html` |
| Products & customers | `products.html` |
| Request a delivered quote | `quote.html` |

Photos are in `images/`. Fonts load from Google Fonts (Archivo, Inter). There's no build step: open `index.html` in a browser, or serve the folder with any static host (GitHub Pages works).

## Before launch
- Replace the `[EMAIL ADDRESS]` and `[BUSINESS HOURS]` placeholders.
- Quote form: posts to Formspree (`https://formspree.io/f/mwloarkq`). Submissions go to the email address set on that Formspree form. Send one test submission to confirm the form before launch.
  - There is no file upload, so the form works on Formspree's free plan. Buyers can paste a material list into the notes field. Add an upload field back if you move to a paid plan.
  - In Formspree, add timberresources.net to the form's allowed domains.
- Replace the monogram portraits with real headshots of Ken, Sam and Chris.
- Confirm that the payment terms are approved for publication.
