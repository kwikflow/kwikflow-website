'use client'

const logos = [
  { name: 'WhatsApp', icon: 'whatsapp' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Google Business', icon: 'googlemybusiness' },
  { name: 'Gmail', icon: 'gmail' },
  { name: 'Outlook', icon: 'microsoftoutlook' },
  { name: 'Mollie', icon: 'mollie' },
  { name: 'Stripe', icon: 'stripe' },
  { name: 'Google Calendar', icon: 'googlecalendar' },
  { name: 'Exact', icon: 'exact' },
  { name: 'Moneybird', icon: 'moneybird' },
]

export function Integraties() {
  return (
    <section style={{ background: '#040812', padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#00C8E8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'monospace' }}>WERKT NAADLOOS MET</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', alignItems: 'center' }}>
          {logos.map(l => (
            <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', fontSize: '13px', fontWeight: 600, color: '#6B7A94', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00C8E8'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,232,0.3)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6B7A94'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://cdn.simpleicons.org/${l.icon}/ffffff`} alt={l.name} width={16} height={16} loading="lazy" style={{ opacity: 0.5 }} />
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
