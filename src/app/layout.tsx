import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={cn(inter.variable, 'font-sans')}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
