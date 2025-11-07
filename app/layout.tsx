import type { Metadata } from 'next';
import React from 'react';
import { Manrope, Merriweather } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.asproservices.fr';

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'], display: 'swap', variable: '--font-merriweather' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AS PRO SERVICES | Fourniture d’outillage professionnel à Nougaroulet',
    template: '%s | AS PRO SERVICES'
  },
  description:
    "AS PRO SERVICES accompagne les professionnels du Sud-Ouest avec une sélection exigeante d'outillage, de consommables et un service après-vente réactif depuis plus de 20 ans.",
  keywords: [
    'AS PRO SERVICES',
    'Outillage professionnel',
    'Nougaroulet',
    'Gers',
    '32',
    '64',
    '65',
    '82',
    '31',
    '40',
    'Consommables professionnels',
    'Service après-vente'
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'AS PRO SERVICES',
    title: 'AS PRO SERVICES | Outillage et consommables professionnels',
    description:
      "AS PRO SERVICES fournit outillage, consommables et conseils personnalisés aux professionnels du Sud-Ouest depuis plus de 20 ans.",
    images: [
      {
        url: '/og-cover.svg',
        width: 1200,
        height: 630,
        alt: 'AS PRO SERVICES - Outillage professionnel'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AS PRO SERVICES',
    description:
      "Votre partenaire outillage et consommables professionnels dans le Sud-Ouest avec 20 ans d'expérience.",
    images: ['/og-cover.svg']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
