'use client'

const stats = [
  { big: '1 op 1', text: 'Vaste contactpersoon vanaf dag één. Geen tickets, geen wachtrijen.' },
  { big: 'Benelux', text: 'We werken met vakmensen in Nederland en België. Lokaal, gefocust, schaalbaar voor jou.' },
  { big: '7 dagen', text: 'Van eerste gesprek tot werkende setup. We gaan niet zitten wachten.' },
]

export function Team() {
  return (
    <section className="section">
      <div className="container-kf">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="eyebrow mb-3">Wie je aan de lijn krijgt</span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">Geen callcenter. Geen ticketsysteem. Gewoon Team Kwikflow.</h2>
          <p className="mx-auto mt-4 max-w-[680px] text-lg text-body">
            Kwikflow is een klein team dat zich volledig richt op vakmensen in Nederland. We zijn geen techbedrijf met 100 mensen op kantoor — we zijn ondernemers die het vak snappen en zelf de telefoon opnemen als jij belt.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[900px] gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.big} data-reveal className="card-kf p-7 text-left">
              <div className="mb-2 text-3xl font-bold tracking-tight text-brand-text">{s.big}</div>
              <div className="text-sm leading-relaxed text-body">{s.text}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-[720px] rounded-2xl border border-hairline bg-subtle p-7 shadow-[var(--shadow-sm)]" style={{ borderLeft: '3px solid var(--brand)' }}>
          <p className="text-lg italic leading-relaxed text-heading">
            &ldquo;We werken alleen met vakmensen. Geen 1000 klanten, wel 100% focus.&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">— Team Kwikflow</p>
        </div>
      </div>
    </section>
  )
}
