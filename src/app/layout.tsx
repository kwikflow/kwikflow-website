import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kwikflow.nl'),
  title: 'Kwikflow - AI Automatisering voor Vakmensen',
  description:
    'Nooit meer een gemiste opdracht. AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen. Automatiseer je bereikbaarheid volledig.',
  keywords: [
    'AI',
    'automatisering',
    'leads',
    'loodgieter',
    'elektricien',
    'vakmensen',
    'Netherlands',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
  openGraph: {
    title: 'Kwikflow - AI Automatisering voor Vakmensen',
    description:
      'Nooit meer een gemiste opdracht. AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen.',
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'Kwikflow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwikflow - AI Automatisering voor Vakmensen',
    description:
      'Nooit meer een gemiste opdracht. AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={cn(inter.variable, 'font-sans')}>
      <body className="antialiased">
        {/* Pre-paint: hide [data-reveal] only when motion is allowed, so scroll
            reveals never flash. Falls back to fully visible if JS is off. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('gsap-ready')}",
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
