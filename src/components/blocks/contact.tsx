'use client'
import { useState } from 'react'

const services = ['Gratis website','Gratis AI widget','AI op WhatsApp','AI voice agent','WhatsApp broadcasts','Review automatie','Starter €97','Groei €197','Pro €297']

export function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', message:'', services:[] as string[] })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

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

  const inp: React.CSSProperties = { width:'100%', background:'#040812', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'14px 18px', color:'#fff', fontSize:'16px', outline:'none', boxSizing:'border-box' }

  return (
    <section id="contact" style={{background:'#040812',padding:'120px 0',position:'relative' as const,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=60)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.05}}/>
      <div style={{maxWidth:'640px',margin:'0 auto',padding:'0 32px',position:'relative' as const,zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',fontFamily:'monospace'}}>CONTACT</span>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,48px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}}>Vraag een gratis demo aan</h2>
          <p style={{color:'#94A3B8',fontSize:'16px',marginTop:'12px'}}>We reageren binnen 24 uur. Geen verkooppraatje.</p>
        </div>
        {status==='success' ? (
          <div style={{textAlign:'center',background:'#0A1628',border:'1px solid rgba(0,200,232,0.3)',borderRadius:'20px',padding:'60px'}}>
            <div style={{fontSize:'48px',marginBottom:'16px'}}>✅</div>
            <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'24px',fontWeight:700,color:'#fff'}}>Bedankt!</h3>
            <p style={{color:'#94A3B8',marginTop:'8px'}}>We nemen binnen 24 uur contact met je op.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{background:'#0A1628',border:'1px solid rgba(0,200,232,0.2)',borderRadius:'24px',padding:'48px',display:'flex',flexDirection:'column',gap:'20px',boxShadow:'0 0 80px rgba(0,200,232,0.05)'}}>
            <input required placeholder="Jouw naam" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={inp}/>
            <input required type="email" placeholder="E-mailadres" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={inp}/>
            <textarea required placeholder="Vertel ons over jouw bedrijf..." value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} style={{...inp,minHeight:'120px',resize:'vertical'}}/>
            <div>
              <p style={{color:'#94A3B8',fontSize:'13px',marginBottom:'12px',textTransform:'uppercase',letterSpacing:'0.08em',fontFamily:'monospace'}}>Ik ben geïnteresseerd in:</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {services.map(s => (
                  <button type="button" key={s} onClick={()=>toggle(s)} style={{padding:'6px 14px',borderRadius:'99px',fontSize:'12px',fontWeight:600,cursor:'pointer',transition:'all 0.2s',background:form.services.includes(s)?'#00C8E8':'transparent',color:form.services.includes(s)?'#040812':'#94A3B8',border:form.services.includes(s)?'1px solid #00C8E8':'1px solid rgba(255,255,255,0.1)'}}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" disabled={status==='loading'} style={{background:'#00C8E8',color:'#040812',padding:'16px',borderRadius:'10px',fontWeight:700,fontSize:'16px',border:'none',cursor:'pointer',transition:'all 0.2s',opacity:status==='loading'?0.6:1}}>
              {status==='loading' ? 'Versturen...' : 'Verstuur aanvraag →'}
            </button>
            {status==='error' && <p style={{color:'#ff6b6b',textAlign:'center',fontSize:'14px'}}>Er ging iets mis. Probeer het opnieuw of mail info@kwikflow.nl</p>}
          </form>
        )}
      </div>
    </section>
  )
}
