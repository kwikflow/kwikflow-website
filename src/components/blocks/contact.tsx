'use client'
import { useState } from 'react'
import Script from 'next/script'

const services = ['Gratis website','Gratis AI widget','AI op WhatsApp','AI voice agent','WhatsApp broadcasts','Review automatie','Starter €97','Groei €197','Pro €297']

export function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', branche:'', message:'', services:[] as string[] })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [showForm, setShowForm] = useState(false)

  const toggle = (s:string) => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x=>x!==s) : [...f.services,s] }))

  const submit = async (e:React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inp: React.CSSProperties = { width:'100%', background:'#040812', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'14px 18px', color:'#fff', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit' }

  return (
    <section id="contact" style={{background:'#040812',padding:'120px 0',position:'relative',overflow:'hidden'}}>
      <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 32px',position:'relative',zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',fontFamily:'monospace'}}>CONTACT</span>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,48px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}}>Plan je gratis strategiegesprek</h2>
          <p style={{color:'#94A3B8',fontSize:'16px',marginTop:'12px'}}>30 minuten. Geen verkooppraatje. Je loopt weg met inzicht, ook als je niks afneemt.</p>
        </div>

        {/* Calendly Embed */}
        <div style={{background:'#0A1628',border:'1px solid rgba(0,200,232,0.2)',borderRadius:'24px',overflow:'hidden',marginBottom:'36px'}}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/kwikflow-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=040812&text_color=ffffff&primary_color=00c8e8"
            style={{minWidth:'320px',height:'700px'}}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>

        {/* Collapsible alternative form */}
        <div style={{textAlign:'center',marginBottom:'20px'}}>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{background:'none',border:'none',color:'#94A3B8',fontSize:'15px',cursor:'pointer',padding:'8px 16px',transition:'color 0.3s',fontFamily:'inherit'}}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00C8E8'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}
            aria-expanded={showForm}>
            Liever eerst een bericht sturen? {showForm ? '↑' : '↓'}
          </button>
        </div>

        <div style={{maxHeight:showForm?'1200px':'0',overflow:'hidden',transition:'max-height 0.5s cubic-bezier(0.4,0,0.2,1)'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'40px',paddingTop:'8px',paddingBottom:'20px'}} className="contact-alt-grid">
            <div>
              <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Direct contact</h3>
              <p style={{color:'#94A3B8',marginBottom:'20px',lineHeight:1.7,fontSize:'14px'}}>Stuur een berichtje via WhatsApp of mail ons. We reageren binnen 4 uur op werkdagen.</p>
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div style={{display:'flex',gap:'10px',alignItems:'center',color:'#94A3B8',fontSize:'14px'}}>
                  <span style={{width:'36px',height:'36px',background:'rgba(0,200,232,0.15)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0}}>📧</span>
                  info@kwikflow.nl
                </div>
                <div style={{display:'flex',gap:'10px',alignItems:'center',color:'#94A3B8',fontSize:'14px'}}>
                  <span style={{width:'36px',height:'36px',background:'rgba(0,200,232,0.15)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0}}>📱</span>
                  +31 6 19 61 98 99
                </div>
                <div style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'14px'}}>
                  <span style={{width:'36px',height:'36px',background:'rgba(0,200,232,0.15)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0}}>💬</span>
                  <a href="https://wa.me/31619619899" style={{color:'#00C8E8',textDecoration:'none'}}>WhatsApp ons direct →</a>
                </div>
                <div style={{display:'flex',gap:'10px',alignItems:'center',color:'#94A3B8',fontSize:'14px'}}>
                  <span style={{width:'36px',height:'36px',background:'rgba(0,200,232,0.15)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px',flexShrink:0}}>⏰</span>
                  Reactie binnen 4 uur op werkdagen
                </div>
              </div>
            </div>

            {status==='success' ? (
              <div style={{textAlign:'center',background:'#0A1628',border:'1px solid rgba(0,200,232,0.3)',borderRadius:'20px',padding:'60px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div style={{fontSize:'48px',marginBottom:'16px'}}>✅</div>
                <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff'}}>Bedankt!</h3>
                <p style={{color:'#94A3B8',marginTop:'8px',fontSize:'14px'}}>We nemen binnen 4 uur contact met je op.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
                  <input required placeholder="Naam *" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={inp}/>
                  <input placeholder="Bedrijf" value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} style={inp}/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
                  <input required type="tel" placeholder="Telefoon *" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} style={inp}/>
                  <input required type="email" placeholder="E-mail *" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={inp}/>
                </div>
                <select value={form.branche} onChange={e=>setForm(f=>({...f,branche:e.target.value}))} style={{...inp,appearance:'none',backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,backgroundRepeat:'no-repeat',backgroundPosition:'right 14px center',paddingRight:'36px'}}>
                  <option value="" style={{background:'#0B1A3E'}}>Kies je branche</option>
                  {['Loodgieter','Elektricien','Dakdekker','Schoonmaakbedrijf','Klusbedrijf','Installateur','Schilder','Timmerman','Overig'].map(b=>(
                    <option key={b} value={b.toLowerCase()} style={{background:'#0B1A3E'}}>{b}</option>
                  ))}
                </select>
                <textarea placeholder="Wat is je grootste uitdaging?" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} style={{...inp,minHeight:'90px',resize:'vertical'}}/>
                <div>
                  <p style={{color:'#94A3B8',fontSize:'12px',marginBottom:'10px',textTransform:'uppercase',letterSpacing:'0.08em',fontFamily:'monospace'}}>Ik ben geïnteresseerd in:</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                    {services.map(s => (
                      <button type="button" key={s} onClick={()=>toggle(s)} style={{padding:'6px 14px',borderRadius:'99px',fontSize:'12px',fontWeight:600,cursor:'pointer',transition:'all 0.2s',background:form.services.includes(s)?'#00C8E8':'transparent',color:form.services.includes(s)?'#040812':'#94A3B8',border:form.services.includes(s)?'1px solid #00C8E8':'1px solid rgba(255,255,255,0.1)'}}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={status==='loading'} style={{background:'#00C8E8',color:'#040812',padding:'16px',borderRadius:'10px',fontWeight:700,fontSize:'16px',border:'none',cursor:'pointer',transition:'all 0.2s',opacity:status==='loading'?0.6:1}}>
                  {status==='loading' ? 'Versturen...' : 'Verstuur bericht →'}
                </button>
                {status==='error' && <p style={{color:'#ff6b6b',textAlign:'center',fontSize:'14px'}}>Er ging iets mis. Probeer het opnieuw of mail info@kwikflow.nl</p>}
                <p style={{color:'#6B7A94',fontSize:'12px',textAlign:'center'}}>Reactie binnen 4 uur op werkdagen.</p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .contact-alt-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  )
}
