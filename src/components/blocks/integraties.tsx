'use client'
import Image from 'next/image'

// Icons hosted locally (/public/icons) — the simpleicons CDN 502'd through the
// Next.js image proxy. SVGs from Simple Icons (CC0), brand colours baked in.
const logos = [
  { name: 'WhatsApp', src: '/icons/whatsapp.svg' },
  { name: 'Instagram', src: '/icons/instagram.svg' },
  { name: 'Facebook', src: '/icons/facebook.svg' },
  { name: 'Gmail', src: '/icons/gmail.svg' },
  { name: 'Stripe', src: '/icons/stripe.svg' },
  { name: 'Google Calendar', src: '/icons/googlecalendar.svg' },
]

export function Integraties() {
  return (
    <section className="border-y border-hairline bg-white py-14">
      <div className="container-kf">
        <div className="mb-8 text-center">
          <span className="eyebrow">Werkt naadloos met</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {logos.map((l) => (
            <div
              key={l.name}
              className="group flex items-center gap-2 rounded-xl border border-hairline bg-white px-4 py-2.5 text-[0.85rem] font-semibold text-muted shadow-[var(--shadow-sm)] transition-colors hover:border-hairline-strong hover:text-heading"
            >
              <Image src={l.src} alt={l.name} width={22} height={22} loading="lazy" className="opacity-80 transition-opacity group-hover:opacity-100" />
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
