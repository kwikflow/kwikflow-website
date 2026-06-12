import type { Metadata } from 'next'
import { LegalPage, LegalPlaceholder } from '@/components/blocks/legal-page'

export const metadata: Metadata = {
  title: 'Privacybeleid — Kwikflow',
  description: 'Hoe Kwikflow omgaat met je persoonsgegevens.',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacybeleid">
      {/* Vervang het onderstaande placeholder-blok door je eigen tekst. */}
      <LegalPlaceholder section="privacy" />
    </LegalPage>
  )
}
