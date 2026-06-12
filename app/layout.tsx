import type { Metadata } from 'next';
import './globals.css';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Clinic & Doctor Website Developer in Hyderabad | MakeMySites.in',
  description:
    'Professional websites for doctors and clinics in Hyderabad. 72-hour delivery, mobile-first, SEO-optimized. Starting at ₹15,000. Get a free demo today.',
  keywords:
    'web developer hyderabad, doctor website hyderabad, clinic website, freelance developer telangana, clinic website developer, doctor website design',
  openGraph: {
    title: "MakeMySites.in — Hyderabad's Clinic Website Specialist",
    description:
      '72-hour clinic websites built to rank on Google and convert patients. Based in Hyderabad.',
    url: 'https://www.makemysites.in',
    siteName: 'MakeMySites.in',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.makemysites.in' },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MakeMySites.in',
              description:
                'Professional website development for doctors and clinics in Hyderabad',
              url: 'https://www.makemysites.in',
              telephone: '+91-8074782997',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              founder: {
                '@type': 'Person',
                name: 'Abhinay Kumar',
              },
              priceRange: '₹₹',
              serviceType: 'Web Development',
            }),
          }}
        />
      </head>
      <body className="bg-base text-text-primary font-sans antialiased">
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
