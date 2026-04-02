'use client'

export function Footer() {
  return (
    <footer style={{background:'#040812',borderTop:'1px solid rgba(0,200,232,0.1)',padding:'60px 32px 32px'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'40px',marginBottom:'48px'}}>

          <div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'22px',fontWeight:800,color:'#fff',marginBottom:'12px'}}>
              Kwik<span style={{color:'#00C8E8'}}>flow</span>
            </div>
            <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.7,maxWidth:'220px'}}>AI automatisering voor vakmensen in Nederland en België.</p>
            <div style={{display:'flex',gap:'12px',marginTop:'20px'}}>
              <a href="https://www.instagram.com/kwikflow/" target="_blank" rel="noopener noreferrer" style={{width:'38px',height:'38px',borderRadius:'50%',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#00C8E8',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(0,200,232,0.1)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575521979134" target="_blank" rel="noopener noreferrer" style={{width:'38px',height:'38px',borderRadius:'50%',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#00C8E8',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(0,200,232,0.1)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Navigatie</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column' as const,gap:'12px'}}>
              {[['#diensten','Diensten'],['#prijzen','Prijzen'],['#resultaten','Resultaten'],['#contact','Contact']].map(([href,label]) => (
                <li key={href}><a href={href} style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                  onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                  onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Diensten</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column' as const,gap:'12px'}}>
              {['AI Voice Agent','WhatsApp Automatie','Website & SEO','Review Automatie','WhatsApp Broadcasts','Klantcommunicatie'].map(s => (
                <li key={s}><a href="#diensten" style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                  onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                  onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Contact</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column' as const,gap:'12px'}}>
              <li><a href="mailto:info@kwikflow.nl" style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>info@kwikflow.nl</a></li>
              <li><span style={{color:'#94A3B8',fontSize:'14px'}}>Nederland & België</span></li>
              <li><a href="#contact" style={{background:'#00C8E8',color:'#040812',padding:'10px 20px',borderRadius:'8px',fontSize:'13px',fontWeight:700,textDecoration:'none',display:'inline-block',marginTop:'8px'}}>Gratis demo →</a></li>
            </ul>
          </div>

        </div>

        <div style={{borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:'24px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap' as const,gap:'12px'}}>
          <p style={{color:'#475569',fontSize:'13px'}}>© 2026 Kwikflow — Alle rechten voorbehouden</p>
          <div style={{display:'flex',gap:'20px'}}>
            <a href="#" style={{color:'#475569',fontSize:'13px',textDecoration:'none'}}>Privacy</a>
            <a href="#" style={{color:'#475569',fontSize:'13px',textDecoration:'none'}}>Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
