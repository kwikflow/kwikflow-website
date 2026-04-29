'use client'

const cases = [
  {
    name: 'Loodgieter',
    role: 'Regio Zuid-Holland',
    icon: (
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1B2A5E 0%, #0a1530 100%)',
        border: '2px solid rgba(0, 200, 232, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        boxShadow: '0 8px 32px rgba(0, 200, 232, 0.15)',
      }}>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00C8E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
    ),
    before: 'Marco werkte vaak in kruipruimtes of op daken. Telefoon in de auto, oproep gemist. Hij schatte dat hij per week 3–4 klussen misliep omdat klanten niemand anders belden als ze geen gehoor kregen.',
    actions: [
      'AI voice agent die 24/7 opneemt, klant noteert + klus-type herkent',
      'WhatsApp follow-up binnen 2 minuten naar de klant',
      'Directe notificatie naar Marco\'s app met samenvatting + urgentie-score',
    ],
    results: [
      { big: '+€840', small: 'extra omzet week 1' },
      { big: '4', small: 'klussen gewonnen' },
      { big: '0 uur', small: 'extra werk' },
    ],
    quote: 'Maandag had ik al 4 klussen staan voordat ik koffie op had. Voelt alsof ik een medewerker heb zonder loonstrook.',
  },
  {
    name: 'Schoonmaakbedrijf',
    role: 'Regio Noord-Brabant',
    icon: (
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1B2A5E 0%, #0a1530 100%)',
        border: '2px solid rgba(0, 200, 232, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        boxShadow: '0 8px 32px rgba(0, 200, 232, 0.15)',
      }}>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00C8E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
          <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
        </svg>
      </div>
    ),
    before: 'Lisa had 12 Google reviews en stond op pagina 2. Ze vroeg soms zelf om reviews maar vergat dat 80% van de tijd. Nieuwe klanten vonden haar niet.',
    actions: [
      'Automatisch review-verzoek via WhatsApp 2u na elke klus',
      'Slimme timing (niet \'s avonds, niet in het weekend)',
      'Negative-feedback-filter: lage score → intern ticket i.p.v. publieke review',
    ],
    results: [
      { big: '38', small: 'reviews in 90 dagen' },
      { big: '#2', small: 'Google Maps Eindhoven' },
      { big: '+65%', small: 'inbound aanvragen' },
    ],
    quote: 'Ik had 3 maanden lang niks hoeven doen. Reviews rolden binnen. Klanten bellen nu ons i.p.v. de concurrent.',
  },
  {
    name: 'Dakdekker',
    role: 'Regio Noord-Nederland',
    icon: (
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1B2A5E 0%, #0a1530 100%)',
        border: '2px solid rgba(0, 200, 232, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        boxShadow: '0 8px 32px rgba(0, 200, 232, 0.15)',
      }}>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00C8E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z" />
          <path d="M3 11l9-8 9 8" strokeWidth="2.4" />
          <path d="M9 21V13h6v8" />
        </svg>
      </div>
    ),
    before: 'Stef had een mooi seizoen voor de boeg maar was al volgeboekt tot juli. Nieuwe aanvragen kwamen niet eens bij hem terecht omdat hij niet terugbelde.',
    actions: [
      'AI voice agent neemt op + herkent urgentie (lekkage = prio)',
      'WhatsApp broadcast naar vorige klanten over najaar-onderhoud',
      'Planning-bot die vrije slots in Google Calendar vult',
    ],
    results: [
      { big: '+€12.600', small: 'extra omzet maand 1' },
      { big: '11', small: 'leads per week' },
      { big: '7', small: 'betaalde klussen' },
    ],
    quote: 'Een broadcast van 5 minuten leverde meer op dan mijn hele Facebook-reclame vorig jaar.',
  },
]

export function CaseStudies() {
  return (
    <section id="resultaten" style={{ background: '#040812', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>RESULTATEN</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.03em' }}>Vakmensen die al meer omzet draaien.</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginTop: '16px' }}>Geen vage beloftes. Dit is wat onze klanten écht ervaren.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* TODO: vervangen door echte cases */}
          {cases.map(c => (
            <div key={c.name} style={{ background: '#0A1628', border: '1px solid rgba(0,200,232,0.15)', borderRadius: '20px', padding: 'clamp(28px,4vw,44px)', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '32px', transition: 'border-color 0.3s' }}
              className="case-card"
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.3)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.15)'}>
              <div style={{ textAlign: 'center' }}>
                {c.icon}
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '2px', marginTop: '16px' }}>{c.name}</h4>
                <div style={{ fontSize: '13px', color: '#6B7A94', lineHeight: 1.4 }}>{c.role}</div>
              </div>
              <div>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7A94', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Situatie vóór Kwikflow</h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{c.before}</p>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7A94', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Wat we deden</h3>
                <ul style={{ margin: '0 0 16px', padding: 0, listStyle: 'none' }}>
                  {c.actions.map((a, i) => (
                    <li key={i} style={{ color: '#94A3B8', fontSize: '14px', padding: '4px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#00C8E8', fontWeight: 700, flexShrink: 0 }}>•</span>{a}
                    </li>
                  ))}
                </ul>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#6B7A94', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Resultaat</h3>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {c.results.map((r, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Syne,sans-serif', fontSize: '28px', fontWeight: 800, color: '#00C8E8', lineHeight: 1 }}>{r.big}</div>
                      <div style={{ fontSize: '11px', color: '#6B7A94', marginTop: '4px' }}>{r.small}</div>
                    </div>
                  ))}
                </div>
                <blockquote style={{ fontStyle: 'italic', color: '#94A3B8', borderLeft: '3px solid #00C8E8', paddingLeft: '16px', fontSize: '14px', lineHeight: 1.7 }}>&ldquo;{c.quote}&rdquo;</blockquote>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--muted)', fontStyle: 'italic', marginTop: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Voorbeeldcases gebaseerd op typische workflows binnen elk vakgebied. Echte case studies volgen zodra onze eerste klanten 90 dagen draaien.
        </p>
      </div>
      <style>{`
        @media(max-width:768px){
          .case-card{grid-template-columns:1fr !important;text-align:center}
        }
      `}</style>
    </section>
  )
}
