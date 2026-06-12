import Link from 'next/link'
import { Footer } from '@/components/blocks/footer'

export default function NotFound() {
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

      <main className="container-kf flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-text">404</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-bold">Deze pagina bestaat niet</h1>
        <p className="mt-4 max-w-[460px] text-base text-body">
          De pagina die je zoekt is verplaatst of bestaat niet meer. Ga terug naar
          de homepage of neem direct contact met ons op.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">Terug naar home</Link>
          <Link href="/contact" className="btn btn-secondary">Contact</Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
