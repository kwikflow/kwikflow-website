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
  { q: 'Kost setup extra?', a: 'Nee. Bij Groei en Pro is de setup volledig inbegrepen. Bij Starter rekenen we een eenmalige setup fee van €49. Daarna geen verborgen kosten.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ background: '#040812', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>VEELGESTELDE VRAGEN</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.03em' }}>Alles wat je wilt weten.</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ background: '#0A1628', border: '1px solid rgba(0,200,232,0.15)', borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.3s' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', padding: '20px 24px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontWeight: 600, fontSize: '15px', color: '#fff', background: 'none', border: 'none', textAlign: 'left', fontFamily: 'inherit' }}>
                  {item.q}
                  <span style={{ color: '#00C8E8', fontSize: '20px', flexShrink: 0, transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                <div style={{ maxHeight: isOpen ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                  <div style={{ padding: '0 24px 20px', color: '#94A3B8', fontSize: '14px', lineHeight: 1.7 }}>{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
