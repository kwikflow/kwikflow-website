'use client'

const logos = [
  { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp/25D366' },
  { name: 'Instagram', src: 'https://cdn.simpleicons.org/instagram/E4405F' },
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/1877F2' },
  {
    name: 'Google Business', svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20V6h16v14H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9h3v3H7V9Zm5 0h3v3h-3V9Zm-5 5h3v3H7v-3Zm5 0h3v3h-3v-3Z" fill="currentColor" />
      </svg>
    ),
  },
  { name: 'Gmail', src: 'https://cdn.simpleicons.org/gmail/EA4335' },
  { name: 'Outlook', src: 'https://cdn.simpleicons.org/microsoftoutlook/0078D4' },
  { name: 'Mollie', src: 'https://cdn.simpleicons.org/mollie/000000' },
  { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Google Calendar', src: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
  {
    name: 'Exact', svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 15h3M14 11h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Moneybird', svg: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
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
              {l.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={l.src} alt={l.name} width={24} height={24} loading="lazy" style={{ opacity: 0.85, transition: 'opacity 0.2s ease' }} />
              ) : (
                <span style={{ display: 'inline-flex', opacity: 0.85, transition: 'opacity 0.2s ease', color: '#fff' }}>{l.svg}</span>
              )}
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
