'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[1.25rem] font-bold tracking-tight text-heading">
      <span className="text-brand-text">⚡</span>
      Kwik<span className="text-brand-text">flow</span>
    </span>
  )
}

export default function KwikflowNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const trackLead = () => {
    if (typeof window !== 'undefined') {
      window.fbq?.('track', 'Lead', { content_name: 'Homepage CTA - Strategiegesprek' })
    }
  }

  const links: [string, string][] = [
    ['#werkwijze', 'Werkwijze'], ['#diensten', 'Diensten'], ['#prijzen', 'Prijzen'],
    ['#resultaten', 'Resultaten'], ['#faq', 'FAQ'], ['#contact', 'Contact'],
  ]

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] h-[72px] transition-all duration-300"
        style={{
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          background: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
        }}
      >
        <div className="container-kf flex h-full items-center justify-between">
          <Link href="/" aria-label="Kwikflow home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-heading"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" onClick={trackLead} className="btn btn-primary hidden sm:inline-flex">
              Plan gratis strategiegesprek
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Menu openen"
              className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-heading)" strokeWidth="1.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[200] flex flex-col bg-white/95 backdrop-blur-xl">
          <div className="container-kf flex h-[72px] items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Menu sluiten"
              className="flex h-11 w-11 items-center justify-center rounded-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-heading)" strokeWidth="1.5" strokeLinecap="round"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-7">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-heading"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => { trackLead(); setOpen(false) }}
              className="btn btn-primary mt-2 text-base"
            >
              Plan strategiegesprek
            </a>
          </div>
        </div>
      )}
    </>
  )
}
