import Link from 'next/link'
import { Footer } from '@/components/blocks/footer'

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-white/80 backdrop-blur-md">
        <div className="container-kf flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="Kwikflow home" className="inline-flex items-center gap-1.5 text-[1.25rem] font-bold text-heading">
            <span className="text-brand-text">⚡</span>
            Kwik<span className="text-brand-text">flow</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-body transition-colors hover:text-brand-text">
            ← Terug naar home
          </Link>
        </div>
      </header>

      <main className="container-kf py-16 md:py-24">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold">{title}</h1>
          {lastUpdated && (
            <p className="mt-3 text-sm text-muted">Laatst bijgewerkt: {lastUpdated}</p>
          )}
          <div className="legal-prose mt-10">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  )
}

/** Placeholder shown until the client pastes the real legal copy. */
export function LegalPlaceholder({ section }: { section: string }) {
  return (
    <div className="rounded-xl border border-dashed border-hairline-strong bg-subtle p-6 text-sm text-muted">
      <strong className="text-heading">Plaats hier je {section}-tekst.</strong>
      <p className="mt-2">
        Deze pagina is opgemaakt en klaar voor gebruik. Vervang dit blok in{' '}
        <code className="rounded bg-white px-1.5 py-0.5 text-brand-text">src/app/{section}/page.tsx</code>{' '}
        door je eigen juridische tekst. Gebruik gewone <code className="rounded bg-white px-1 py-0.5">&lt;h2&gt;</code>,{' '}
        <code className="rounded bg-white px-1 py-0.5">&lt;p&gt;</code> en{' '}
        <code className="rounded bg-white px-1 py-0.5">&lt;ul&gt;</code> elementen — de opmaak is al gestyled.
      </p>
    </div>
  )
}
