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
- Quote form: in `quote.html`, replace `YOUR_FORM_ID` in the form's `action` with your Formspree form ID (`https://formspree.io/f/xxxxxxx`). Submissions go to the email address set on that Formspree form.
  - On a free Formspree plan, file attachments are rejected. Either upgrade the plan or remove the "attach your material list" field.
  - In Formspree, add timberresources.net to the form's allowed domains.
- Replace the monogram portraits with real headshots of Tim, Sam and Chris.
- Confirm the owner name (Tim vs. Ken Proctor) and confirm that the payment terms are approved for publication.
