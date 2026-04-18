'use client'

const steps = [
  { num: '01', title: 'Gratis strategiegesprek', desc: '30 minuten. We mappen samen waar jij omzet laat liggen. Geen verkooppraatje, alleen cijfers.' },
  { num: '02', title: 'Setup in 7 dagen', desc: 'Wij bouwen, koppelen en testen je AI. Jij hoeft alleen je bedrijfsinfo aan te leveren.' },
  { num: '03', title: 'Live & optimaliseren', desc: 'Vanaf dag 1 leads binnen. Elke week rapport + bijsturen op wat werkt.' },
]

export function Werkwijze() {
  return (
    <section id="werkwijze" style={{ background: '#040812', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>WERKWIJZE</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.03em' }}>Binnen 7 dagen live. Zonder gedoe.</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginTop: '16px', maxWidth: '520px', margin: '16px auto 0' }}>Geen maandenlange trajecten. Wij bouwen, jij levert info aan, en voor je het weet staan de leads in je agenda.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '24px' }}>
          {steps.map(s => (
            <div key={s.num} style={{ background: '#0A1628', border: '1px solid rgba(0,200,232,0.15)', borderRadius: '20px', padding: '40px 32px', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.15)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
              <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(48px,5vw,72px)', fontWeight: 800, color: 'rgba(0,200,232,0.12)', lineHeight: 1, marginBottom: '16px' }}>{s.num}</div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
