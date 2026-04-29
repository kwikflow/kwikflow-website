'use client'

export function VideoDemo() {
  return (
    <section id="demo" style={{ background: '#040812', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>ZIE HET IN ACTIE</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.03em' }}>Zo pakt jouw AI een binnenkomende klant aan.</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginTop: '16px' }}>Van binnenkomende oproep naar afspraak in je agenda — in 60 seconden.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(0, 200, 232, 0.2)' }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/zvIyiPTOjPk?rel=0&modestbranding=1&showinfo=0&autoplay=0"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Kwikflow demo — Zo pakt jouw AI een klant aan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
