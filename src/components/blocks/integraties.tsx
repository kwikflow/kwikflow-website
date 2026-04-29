'use client'

const logos = [
  { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Instagram', src: 'https://cdn.simpleicons.org/instagram/E4405F' },
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/1877F2' },
  { name: 'Outlook', src: '/logos/outlook.png' },
  { name: 'Gmail', src: 'https://cdn.simpleicons.org/gmail/EA4335' },
  { name: 'Mollie', src: '/logos/mollie.png' },
  { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Google Calendar', src: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
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
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#00C8E8'
                el.style.borderColor = 'rgba(0,200,232,0.3)'
                const icon = el.querySelector('img, svg') as HTMLElement
                if (icon) icon.style.opacity = '1'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#6B7A94'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                const icon = el.querySelector('img, svg') as HTMLElement
                if (icon) icon.style.opacity = '0.85'
              }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={l.name} width={24} height={24} loading="lazy" style={{ opacity: 0.85, transition: 'opacity 0.2s ease' }} />
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
