import { company } from '@/data/siteContent';

export function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    name: 'AS PRO SERVICES',
    description:
      "Fournisseur indépendant d'outillage professionnel, consommables et service après-vente basé à Nougaroulet (Gers).",
    url: 'https://www.asproservices.fr',
    telephone: company.contact.phone,
    email: company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.contact.address,
      addressLocality: 'Nougaroulet',
      postalCode: '32270',
      addressCountry: 'FR'
    },
    areaServed: ['Gers', 'Landes', 'Hautes-Pyrénées', 'Pyrénées-Atlantiques', 'Tarn-et-Garonne', 'Haute-Garonne'],
    openingHours: 'Mo-Fr 08:00-18:00',
    founder: {
      '@type': 'Person',
      name: 'AS PRO SERVICES'
    },
    sameAs: []
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
