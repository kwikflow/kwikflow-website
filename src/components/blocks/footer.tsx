'use client'
import Image from 'next/image'
import Link from 'next/link'

const nav: [string, string][] = [
  ['/#werkwijze', 'Werkwijze'], ['/#diensten', 'Diensten'], ['/#prijzen', 'Prijzen'],
  ['/#resultaten', 'Resultaten'], ['/#faq', 'FAQ'], ['/#contact', 'Contact'],
]
const diensten = ['AI Voice Agent', 'WhatsApp Automatie', 'Instagram & Facebook DM', 'Website Chatbot', 'Review Automatie', 'WhatsApp Broadcasts']
const socials = [
  { href: 'https://www.instagram.com/kwikflow/', label: 'Instagram', src: 'https://cdn.simpleicons.org/instagram/0095AD' },
  { href: 'https://www.facebook.com/profile.php?id=61575521979134', label: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/0095AD' },
  { href: 'https://wa.me/31619619899', label: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp/0095AD' },
]

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-muted">{title}</h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  )
}

const linkClass = 'text-sm text-body transition-colors hover:text-brand-text'

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white pb-8 pt-16">
      <div className="container-kf">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-1.5 text-[1.35rem] font-bold text-heading">
              <span className="text-brand-text">⚡</span>
              Kwik<span className="text-brand-text">flow</span>
            </div>
            <p className="max-w-[220px] text-sm leading-relaxed text-body">AI bereikbaarheid voor vakmensen. Live binnen 7 dagen.</p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong transition-colors hover:border-brand"
                  style={{ background: '#fff' }}
                >
                  <Image src={s.src} alt={s.label} width={15} height={15} />
                </a>
              ))}
            </div>
          </div>

          <Col title="Navigatie">
            {nav.map(([href, label]) => (
              <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>
            ))}
          </Col>

          <Col title="Diensten">
            {diensten.map((s) => (
              <li key={s}><Link href="/#diensten" className={linkClass}>{s}</Link></li>
            ))}
          </Col>

          <Col title="Contact">
            <li><a href="mailto:info@kwikflow.nl" className={linkClass}>info@kwikflow.nl</a></li>
            <li><span className="text-sm text-body">Nederland &amp; België</span></li>
            <li className="pt-2"><Link href="/#contact" className="btn btn-primary text-[0.85rem]" style={{ padding: '0.65rem 1.1rem' }}>Plan strategiegesprek →</Link></li>
          </Col>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6">
          <p className="text-[0.8rem] text-muted">© 2026 Kwikflow — Alle rechten voorbehouden</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[0.8rem] text-muted transition-colors hover:text-brand-text">Privacy</Link>
            <Link href="/voorwaarden" className="text-[0.8rem] text-muted transition-colors hover:text-brand-text">Voorwaarden</Link>
            <Link href="/cookiebeleid" className="text-[0.8rem] text-muted transition-colors hover:text-brand-text">Cookiebeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
