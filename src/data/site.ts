// Shared business details. Values in [BRACKETS] are placeholders awaiting real content.
export const site = {
  name: 'Timber Resources',
  tagline: 'Lumber brokerage · Est. 2012',
  description: 'Southern Yellow Pine lumber broker.',
  topBar: 'Southern Yellow Pine · Full truckloads · Southeast & beyond',
  phone: '(901) 395-4736',
  phoneHref: 'tel:+19013954736',
  fax: '1-888-259-8283',
  email: '[EMAIL ADDRESS]',
  hours: '[BUSINESS HOURS]',
  locations: ['Clarksville, Tennessee', 'Jacksonville, Florida'],
  /**
   * Where the quote form POSTs (Formspree). If emptied, the form validates and
   * shows its confirmation but sends nothing.
   */
  quoteFormEndpoint: 'https://formspree.io/f/mwloarkq',
};

export const nav = [
  { label: 'Products', href: '/products/', key: 'products' },
  { label: 'How We Work', href: '/#how', key: 'how' },
  { label: 'About', href: '/#about', key: 'about' },
  { label: 'Terms', href: '/#terms', key: 'terms' },
] as const;

export type NavKey = (typeof nav)[number]['key'];
