'use client'
import { useState } from 'react'

const items = [
  { q: 'Heb ik technische kennis nodig?', a: 'Nee, helemaal niet. Wij regelen alles van A tot Z. Jij levert alleen je bedrijfsinformatie aan — wij bouwen, koppelen en testen. Je hoeft niks te installeren of in te stellen.' },
  { q: 'Hoe snel ben ik live?', a: 'Binnen 7 werkdagen na het intakegesprek. We plannen de setup direct in en houden je op de hoogte van elke stap. Zie ook onze 7-dagen-live-garantie hieronder.' },
  { q: 'Werkt dit met mijn huidige telefoonnummer en WhatsApp?', a: 'Ja. Je behoudt je eigen nummer. We koppelen de AI eraan zodat oproepen en berichten naadloos worden opgepakt, zonder dat je klanten iets merken van een overstap.' },
  { q: 'Wat als de AI iets verkeerd zegt?', a: 'De AI is getraind op jouw bedrijf en branche. Bij complexe vragen escaleert hij direct naar jou via SMS. Jij traint mee — na een paar weken kent de AI je bedrijf beter dan een nieuwe medewerker.' },
  { q: 'Kan ik maandelijks opzeggen?', a: 'Ja, altijd. Geen lock-in, geen opzegboete, geen kleine lettertjes. We geloven dat je blijft omdat het werkt, niet omdat je vastzit aan een contract.' },
  { q: 'Wat als het niks oplevert?', a: 'Zie onze garantie: sta je na 7 werkdagen niet live, dan is je eerste maand gratis. Daarnaast monitoren we wekelijks je resultaten en sturen we bij. Geen resultaat = wij passen aan.' },
  { q: 'Is mijn klantdata veilig?', a: 'Absoluut. We zijn volledig AVG-compliant. Alle data staat op servers in de EU. We delen niks met derden en je kunt op elk moment je data opvragen of laten verwijderen.' },
  { q: 'Kost setup extra?', a: 'Elk pakket heeft een eenmalige setup fee: Starter €249, Groei €349 en Pro €499. Daarna geen verborgen kosten. Voor de eerste 10 klanten valt de setup fee weg in ruil voor een eerlijke videoreview.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section section-alt">
      <div className="container-kf">
        <div className="mx-auto mb-16 text-center">
          <span className="eyebrow mb-3">Veelgestelde vragen</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Alles wat je wilt weten.</h2>
        </div>
        <div className="mx-auto flex max-w-[760px] flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-hairline bg-white shadow-[var(--shadow-sm)]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[0.95rem] font-semibold text-heading"
                >
                  {item.q}
                  <span
                    className="shrink-0 text-xl text-brand-text transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                  >
                    +
                  </span>
                </button>
                <div className="overflow-hidden transition-[max-height] duration-400" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                  <div className="px-6 pb-5 text-[0.9rem] leading-relaxed text-body">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
