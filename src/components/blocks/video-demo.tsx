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
        <div style={{ maxWidth: '800px', margin: '0 auto', aspectRatio: '16/9', background: '#0A1628', border: '1px solid rgba(0,200,232,0.15)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
          {/* TODO: YouTube/Vimeo embed ID toevoegen */}
          <div style={{ width: '80px', height: '80px', background: '#00C8E8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,200,232,0.35)', position: 'relative', zIndex: 2 }}>
            <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '14px 0 14px 24px', borderColor: 'transparent transparent transparent #040812', marginLeft: '5px' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,200,232,0.05),transparent 60%)', pointerEvents: 'none' }} />
        </div>
      </div>
    </section>
  )
}
