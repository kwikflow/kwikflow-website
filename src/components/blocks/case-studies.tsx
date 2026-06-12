'use client'

const cases = [
  {
    name: 'Loodgieter',
    role: 'Regio Zuid-Holland',
    iconPaths: ['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'],
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
    iconPaths: ['M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z', 'M5 3v4M3 5h4M19 17v4M17 19h4'],
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
    iconPaths: ['M3 11l9-8 9 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z', 'M9 21V13h6v8'],
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

function Label({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted">{children}</h3>
}

export function CaseStudies() {
  return (
    <section id="resultaten" className="section section-alt">
      <div className="container-kf">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <span className="eyebrow mb-3">Resultaten</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Vakmensen die al meer omzet draaien.</h2>
          <p className="mt-4 text-lg text-body">Geen vage beloftes. Dit is wat onze klanten écht ervaren.</p>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((c) => (
            <div key={c.name} data-reveal className="card-kf grid gap-8 p-7 md:grid-cols-[180px_1fr] md:p-11">
              <div className="text-center">
                <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full" style={{ background: 'var(--brand-soft)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {c.iconPaths.map((d, i) => <path key={i} d={d} />)}
                  </svg>
                </span>
                <h4 className="mt-4 text-[0.95rem] font-semibold text-heading">{c.name}</h4>
                <div className="text-sm text-muted">{c.role}</div>
              </div>

              <div>
                <Label>Situatie vóór Kwikflow</Label>
                <p className="mb-4 leading-relaxed text-body">{c.before}</p>

                <Label>Wat we deden</Label>
                <ul className="mb-4 flex flex-col gap-1">
                  {c.actions.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.9rem] text-body">
                      <span className="mt-0.5 font-bold text-brand-text">•</span>{a}
                    </li>
                  ))}
                </ul>

                <Label>Resultaat</Label>
                <div className="mb-5 flex flex-wrap gap-8">
                  {c.results.map((r, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold leading-none text-brand-text">{r.big}</div>
                      <div className="mt-1 text-xs text-muted">{r.small}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-[3px] pl-4 text-[0.9rem] italic leading-relaxed text-body" style={{ borderColor: 'var(--brand)' }}>
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[600px] text-center text-[0.8rem] italic text-muted">
          Voorbeeldcases gebaseerd op typische workflows binnen elk vakgebied. Echte case studies volgen zodra onze eerste klanten 90 dagen draaien.
        </p>
      </div>
    </section>
  )
}
