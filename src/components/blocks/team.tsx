'use client'

const founders = [
  {
    name: 'Charles Fajemilugba',
    role: 'Co-founder',
    photo: 'https://placehold.co/600x600/0B1A3E/00C8E8?text=Charles',
    bio: 'Charles leidt de bouw en het technische deel van Kwikflow. Hij zorgt dat jouw AI naadloos koppelt met je telefoon, WhatsApp en agenda.',
  },
  {
    name: 'Jordy Verstegen',
    role: 'Co-founder',
    photo: 'https://placehold.co/600x600/0B1A3E/00C8E8?text=Jordy',
    bio: 'Jordy is je eerste aanspreekpunt. Hij duikt met je in je bedrijf, mapt waar de omzet lekt, en bouwt samen met jou het plan.',
  },
]

export function Team() {
  return (
    <section id="team" style={{ background: '#040812', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>WIE JE AAN DE LIJN KRIJGT</span>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', marginTop: '12px', letterSpacing: '-0.03em' }}>Gebouwd door ondernemers, voor ondernemers.</h2>
        </div>
        <p style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px', color: '#94A3B8', fontSize: '16px', lineHeight: 1.7 }}>
          Kwikflow is opgericht door Charles en Jordy. Geen techbedrijf met 100 mensen op kantoor — twee ondernemers die het vak snappen en zelf de telefoon opnemen als jij belt.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          {founders.map(f => (
            <div key={f.name} style={{ background: '#0A1628', border: '1px solid rgba(0,200,232,0.15)', borderRadius: '20px', padding: '36px', textAlign: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.15)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.photo} alt={f.name} width={140} height={140} loading="lazy" style={{ borderRadius: '16px', border: '2px solid rgba(0,200,232,0.15)', margin: '0 auto 20px', objectFit: 'cover' }} />
              {/* TODO: echte foto's toevoegen */}
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{f.name}</h3>
              <span style={{ color: '#00C8E8', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '16px' }}>{f.role}</span>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.7 }}>{f.bio}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px', padding: '20px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', maxWidth: '600px', margin: '36px auto 0', color: '#94A3B8', fontSize: '15px', fontStyle: 'italic' }}>
          &ldquo;We werken alléén met vakmensen. Geen 1000 klanten, wel 100% focus.&rdquo;
        </div>
      </div>
    </section>
  )
}
