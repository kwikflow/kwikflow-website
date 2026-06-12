import type { Metadata } from 'next'
import { LegalPage, LegalPlaceholder } from '@/components/blocks/legal-page'

export const metadata: Metadata = {
  title: 'Cookiebeleid — Kwikflow',
  description: 'Welke cookies Kwikflow gebruikt en hoe je je toestemming beheert.',
}

export default function CookiebeleidPage() {
  return (
    <LegalPage title="Cookiebeleid">
      {/* Vervang het onderstaande placeholder-blok door je eigen tekst. */}
      <LegalPlaceholder section="cookiebeleid" />
    </LegalPage>
  )
}
