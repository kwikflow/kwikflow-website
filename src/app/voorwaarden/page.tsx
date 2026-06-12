import type { Metadata } from 'next'
import { LegalPage, LegalPlaceholder } from '@/components/blocks/legal-page'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden — Kwikflow',
  description: 'De algemene voorwaarden van Kwikflow.',
}

export default function VoorwaardenPage() {
  return (
    <LegalPage title="Algemene voorwaarden">
      {/* Vervang het onderstaande placeholder-blok door je eigen tekst. */}
      <LegalPlaceholder section="voorwaarden" />
    </LegalPage>
  )
}
