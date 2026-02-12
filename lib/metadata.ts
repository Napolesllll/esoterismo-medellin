import { Metadata } from 'next';

export const siteConfig = {
  name: 'Maestras del Misterio',
  description: 'Servicios esotéricos profesionales en Colombia. Tarot, amarres de amor, limpiezas energéticas, protección espiritual y rituales. Consultas 24/7.',
  url: 'https://maestrasdelmisterio.com',
  ogImage: '/logo.png',
  keywords: [
    'tarot profesional Colombia',
    'amarres de amor efectivos',
    'limpieza energética',
    'protección espiritual',
    'brujas profesionales',
    'rituales esotéricos',
    'videncia',
    'tarot en Medellín',
    'amarres de amor Bogotá',
    'servicios espirituales'
  ],
  authors: [{ name: 'Maestras del Misterio' }],
  creator: 'Maestras del Misterio',
  publisher: 'Maestras del Misterio',
  alternates: {
    canonical: 'https://maestrasdelmisterio.com',
  },
  whatsapp: '+573001234567', // CAMBIAR POR NÚMERO REAL
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  alternates: siteConfig.alternates,
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@maestrasmisterio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
};