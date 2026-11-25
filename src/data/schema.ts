// schema.org LocalBusiness structured data, built from the shared business details.
import { site } from './site';

const SITE_URL = 'https://timberresources.net';

/** Placeholder values like "[EMAIL ADDRESS]" are left out of the schema until filled in. */
const isFilled = (v: string) => v.trim() !== '' && !v.startsWith('[');

/** "(901) 395-4736" / "1-888-259-8283" → "+1-901-395-4736" */
const toE164ish = (n: string) => {
  const d = n.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
  return `+1-${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
};

const address = (location: string) => {
  const [locality, region] = location.split(',').map((s) => s.trim());
  return { '@type': 'PostalAddress', addressLocality: locality, addressRegion: region, addressCountry: 'US' };
};

const [headOffice, ...otherOffices] = site.locations;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: site.name,
  description:
    'Southern Yellow Pine lumber broker supplying truckload boards, dimension lumber and timbers to pallet, truss, dunnage and playground manufacturers, quoted delivered with freight included.',
  url: `${SITE_URL}/`,
  telephone: toE164ish(site.phone),
  faxNumber: toE164ish(site.fax),
  ...(isFilled(site.email) ? { email: site.email } : {}),
  foundingDate: '2012',
  founder: { '@type': 'Person', name: 'Ken Proctor' },
  address: address(headOffice),
  department: otherOffices.map((loc) => ({
    '@type': 'LocalBusiness',
    name: `${site.name} (${loc.split(',')[0]})`,
    telephone: toE164ish(site.phone),
    address: address(loc),
  })),
  areaServed: { '@type': 'Place', name: 'Southeastern United States' },
  knowsAbout: [
    'Southern Yellow Pine lumber',
    'Pallet and crate lumber',
    'Truss lumber',
    'Dunnage',
    'Playground lumber',
    'Landscape timbers',
  ],
};
