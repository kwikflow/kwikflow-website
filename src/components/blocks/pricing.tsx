'use client'
import { Check } from 'lucide-react'

type Plan = {
  name: string
  price: number
  setup: number
  desc: string
  includes: string
  features: string[]
  popular: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 149,
    setup: 249,
    desc: 'Alles om professioneel van start te gaan.',
    includes: 'Inbegrepen:',
    features: [
      'Professionele website',
      'AI chatbot 24/7',
      'Automatische reactie op gemiste oproepen',
    ],
    popular: false,
    cta: 'Kies Starter',
  },
  {
    name: 'Groei',
    price: 297,
    setup: 349,
    desc: 'AI op elk kanaal waar klanten jou vinden.',
    includes: 'Alles van Starter, plus:',
    features: [
      'AI op WhatsApp, Instagram en Facebook',
      'Automatische reviews na elke klus',
    ],
    popular: true,
    cta: 'Kies Groei',
  },
  {
    name: 'Pro',
    price: 597,
    setup: 499,
    desc: 'Het complete pakket voor maximale groei.',
    includes: 'Alles van Groei, plus:',
    features: [
      'AI voice agent',
      'WhatsApp broadcasts',
      'Afsprakenplanning',
    ],
    popular: false,
    cta: 'Kies Pro',
  },
]

const trackLead = (name: string) => {
  if (typeof window !== 'undefined') {
    window.fbq?.('track', 'Lead', { content_name: `Homepage Pricing - ${name}` })
  }
}

export function PricingSection() {
  return (
    <section id="prijzen" className="section">
      <div className="container-kf">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <span className="eyebrow mb-3">Prijzen</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Kies het pakket dat bij je past</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-lg text-body">
            Eén vast bedrag per maand, eenmalige setup. Upgrade of stop wanneer je wilt.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1080px] items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              data-reveal
              className={
                'relative flex flex-col rounded-2xl bg-white p-8 transition-shadow ' +
                (p.popular
                  ? 'border-2 border-brand shadow-[var(--shadow-glow)] lg:-my-2'
                  : 'border border-hairline shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]')
              }
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
                  Meest gekozen
                </span>
              )}

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-heading">€{p.price}</span>
                  <span className="text-body">/maand</span>
                </div>
                <div className="mt-2 text-sm text-muted">Eenmalige setup €{p.setup}</div>
                <p className="mt-3 text-sm leading-relaxed text-body">{p.desc}</p>
              </div>

              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">{p.includes}</div>
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--brand-soft)' }}>
                      <Check size={11} className="text-brand-text" strokeWidth={3} />
                    </span>
                    <span className="text-[0.9rem] text-body">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => trackLead(p.name)}
                className={p.popular ? 'btn btn-primary w-full' : 'btn btn-secondary w-full'}
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise row */}
        <div className="mx-auto mt-6 flex max-w-[1080px] flex-col items-center justify-between gap-5 rounded-2xl border border-hairline bg-subtle p-7 text-center sm:flex-row sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="text-lg font-semibold text-heading">Enterprise</span>
              <span className="rounded-full border border-hairline-strong bg-white px-2.5 py-0.5 text-xs font-semibold text-brand-text">Op aanvraag</span>
            </div>
            <p className="mt-1.5 text-sm text-body">Voor BV&apos;s en grotere bedrijven met meerdere locaties.</p>
          </div>
          <a href="#contact" onClick={() => trackLead('Enterprise')} className="btn btn-secondary shrink-0">
            Neem contact op →
          </a>
        </div>

        {/* Elegant single offer line */}
        <p className="mx-auto mt-8 max-w-[640px] text-center text-sm text-muted">
          <span className="font-semibold text-brand-text">Eerste 10 klanten:</span> setup fee cadeau in ruil voor een eerlijke videoreview.
        </p>
      </div>
    </section>
  )
}
