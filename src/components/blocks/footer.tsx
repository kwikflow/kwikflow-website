'use client'

export function Footer() {
  return (
    <footer style={{background:'#040812',borderTop:'1px solid rgba(0,200,232,0.1)',padding:'60px 32px 32px'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'40px',marginBottom:'48px'}}>

          <div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:'22px',fontWeight:800,color:'#fff',marginBottom:'12px'}}>
              <span style={{color:'#00C8E8',fontSize:'14px',marginRight:'6px'}}>⚡</span>
              Kwik<span style={{color:'#00C8E8'}}>flow</span>
            </div>
            <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.7,maxWidth:'220px'}}>AI bereikbaarheid voor vakmensen. Live binnen 7 dagen.</p>
            <div style={{display:'flex',gap:'12px',marginTop:'20px'}}>
              <a href="https://www.instagram.com/kwikflow/" target="_blank" rel="noopener noreferrer" style={{width:'38px',height:'38px',borderRadius:'50%',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#00C8E8',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(0,200,232,0.1)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/instagram/00C8E8" alt="Instagram" width={16} height={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575521979134" target="_blank" rel="noopener noreferrer" style={{width:'38px',height:'38px',borderRadius:'50%',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#00C8E8',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(0,200,232,0.1)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/facebook/00C8E8" alt="Facebook" width={16} height={16} />
              </a>
              <a href="https://wa.me/31619619899" target="_blank" rel="noopener noreferrer" style={{width:'38px',height:'38px',borderRadius:'50%',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',color:'#00C8E8',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(0,200,232,0.1)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/whatsapp/00C8E8" alt="WhatsApp" width={16} height={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Navigatie</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {[['#werkwijze','Werkwijze'],['#diensten','Diensten'],['#prijzen','Prijzen'],['#resultaten','Resultaten'],['#faq','FAQ'],['#contact','Contact']].map(([href,label]) => (
                <li key={href}><a href={href} style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                  onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                  onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Diensten</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {['AI Voice Agent','WhatsApp Automatie','Instagram & Facebook DM','Website Chatbot','Review Automatie','WhatsApp Broadcasts'].map(s => (
                <li key={s}><a href="#diensten" style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                  onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                  onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'20px'}}>Contact</h3>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              <li><a href="mailto:info@kwikflow.nl" style={{color:'#94A3B8',textDecoration:'none',fontSize:'14px',transition:'color 0.2s'}}
                onMouseEnter={e=>(e.target as HTMLElement).style.color='#00C8E8'}
                onMouseLeave={e=>(e.target as HTMLElement).style.color='#94A3B8'}>info@kwikflow.nl</a></li>
              <li><span style={{color:'#94A3B8',fontSize:'14px'}}>Nederland &amp; België</span></li>
              <li><a href="#contact" style={{background:'#00C8E8',color:'#040812',padding:'10px 20px',borderRadius:'8px',fontSize:'13px',fontWeight:700,textDecoration:'none',display:'inline-block',marginTop:'8px'}}>Plan strategiegesprek →</a></li>
            </ul>
            {/* TODO: KvK + BTW nummer toevoegen */}
          </div>

        </div>

        <div style={{borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:'24px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
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
