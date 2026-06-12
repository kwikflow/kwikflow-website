'use client'

const steps = [
  { num: '01', title: 'Gratis strategiegesprek', desc: '30 minuten. We mappen samen waar jij omzet laat liggen. Geen verkooppraatje, alleen cijfers.' },
  { num: '02', title: 'Setup in 7 dagen', desc: 'Wij bouwen, koppelen en testen je AI. Jij hoeft alleen je bedrijfsinfo aan te leveren.' },
  { num: '03', title: 'Live & optimaliseren', desc: 'Vanaf dag 1 leads binnen. Elke week rapport + bijsturen op wat werkt.' },
]

export function Werkwijze() {
  return (
    <section id="werkwijze" className="section section-alt">
      <div className="container-kf">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <span className="eyebrow mb-3">Werkwijze</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Binnen 7 dagen live. Zonder gedoe.</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-lg text-body">
            Geen maandenlange trajecten. Wij bouwen, jij levert info aan, en voor je het weet staan de leads in je agenda.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} data-reveal className="card-kf p-9">
              <div className="text-[clamp(3rem,5vw,4.5rem)] font-bold leading-none text-brand-text/15">{s.num}</div>
              <h3 className="mt-4 text-xl font-semibold text-heading">{s.title}</h3>
              <p className="mt-2.5 leading-relaxed text-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
