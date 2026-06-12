'use client'
import Image from 'next/image'

const logos = [
  { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Instagram', src: 'https://cdn.simpleicons.org/instagram/E4405F' },
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/1877F2' },
  { name: 'Gmail', src: 'https://cdn.simpleicons.org/gmail/EA4335' },
  { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Google Calendar', src: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
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
