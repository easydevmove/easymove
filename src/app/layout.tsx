import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from 'next-themes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'EasyMove | Sua mudança, fácil e no prazo.',
  description: 'Especialistas em mudanças residenciais e comerciais. Equipe treinada, embalagem profissional e seguro da carga. Atendemos todo o Brasil a partir de Curitiba.',
  openGraph: {
    title: 'EasyMove | Mudanças Residenciais e Comerciais',
    description: 'Sua mudança sem dor de cabeça está aqui. Peça um orçamento rápido.',
    url: siteUrl,
    siteName: 'EasyMove',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // It's good practice to have an OG image
        width: 1200,
        height: 630,
        alt: 'Caminhão de mudança da EasyMove',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyMove | Sua mudança, fácil e no prazo.',
    description: 'Mudanças seguras e eficientes para todo o Brasil. Orçamento online.',
    images: [`${siteUrl}/twitter-image.jpg`],
  },
  keywords: ['mudança', 'mudança residencial', 'mudança comercial', 'frete', 'transporte', 'guarda-móveis', 'içamento', 'Curitiba'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'EasyMove',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    telephone: '41 9 9537-8521',
    description: 'Sua mudança, fácil e no prazo. Especialistas em mudanças residenciais com equipe treinada, embalagem profissional e seguro da carga. Atendemos todo o Brasil.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Exemplo, 123',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '80000-000',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
  };

  const faviconSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 26V6H18V10H10V14H18V18H10V22H18V26H6Z" fill="hsl(211 81% 18%)" /><path d="M20 6H26L20 16V6Z" fill="hsl(38 91% 55%)" /><path d="M20 26H26L20 16V26Z" fill="hsl(38 91% 55%)" /></svg>`;
  const faviconDataUri = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href={faviconDataUri} type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
