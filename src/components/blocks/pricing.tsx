'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  { name:'Starter', price:97, savings:'Bespaar €48', desc:'Perfect om te beginnen.', popular:false, includes:'Ideaal voor ZZP vakmensen', features:['Professionele website','Website chatbot 24/7','Gemiste oproep auto-reply','Afspraakbevestiging automatie','Maandelijks rapport'], cta:'Kies Starter' },
  { name:'Groei', price:197, savings:'Bespaar €94', desc:'AI op alle kanalen waar klanten jou vinden.', popular:true, includes:'Alles uit Starter, plus:', features:['AI op WhatsApp Business','AI op Instagram DMs','AI op Facebook Messenger','Review automatie na elke klus','Offerte opvolging dag 2 en dag 5','Maandelijks strategie rapport'], cta:'Kies Groei' },
  { name:'Pro', price:297, savings:'Bespaar €147', desc:'Het complete pakket voor maximale groei.', popular:false, includes:'Alles uit Groei, plus:', features:['AI voice agent 24/7','After-hours call handling','WhatsApp broadcasts 2x/maand','Re-activatie campagnes','Afsprakenplanning bot','Prioriteit support'], cta:'Kies Pro' },
]

export function PricingSection() {
  const [hovered, setHovered] = useState<number|null>(null)
  return (
    <section id="prijzen" style={{background:'#040812',padding:'120px 0',position:'relative' as const,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.04}}/>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 32px',position:'relative' as const,zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.14em',fontFamily:'monospace'}}>PAKKETTEN</span>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(32px,5vw,56px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}}>Of kies een bundel en bespaar</h2>
          <p style={{color:'#94A3B8',fontSize:'18px',marginTop:'16px'}}>De populairste diensten gecombineerd. Goedkoper dan alles los.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'24px',alignItems:'stretch'}}>
          {plans.map((p,i) => (
            <div key={p.name} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} style={{position:'relative' as const,background:p.popular?'linear-gradient(135deg,#0F1F3D,#1B2A5E)':'#0A1628',border:p.popular?'2px solid #00C8E8':hovered===i?'1px solid rgba(0,200,232,0.4)':'1px solid rgba(0,200,232,0.15)',borderRadius:'20px',padding:'40px 32px',transform:p.popular?'scale(1.05)':'scale(1)',boxShadow:p.popular?'0 0 60px rgba(0,200,232,0.2)':'none',transition:'all 0.3s',display:'flex',flexDirection:'column' as const}}>
              {p.popular && <div style={{position:'absolute' as const,top:'-14px',left:'50%',transform:'translateX(-50%)',background:'#00C8E8',color:'#040812',fontSize:'11px',fontWeight:800,padding:'4px 16px',borderRadius:'99px',whiteSpace:'nowrap' as const,fontFamily:'monospace'}}>MEEST GEKOZEN</div>}
              <div style={{marginBottom:'24px'}}>
                <div style={{color:'#94A3B8',fontSize:'12px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.1em',fontFamily:'monospace',marginBottom:'8px'}}>{p.name}</div>
                <div style={{display:'flex',alignItems:'baseline',gap:'4px'}}><span style={{fontSize:'52px',fontWeight:800,color:'#fff',fontFamily:'Syne,sans-serif',lineHeight:1}}>€{p.price}</span><span style={{color:'#94A3B8',fontSize:'16px'}}>/maand</span></div>
                <div style={{display:'inline-block',background:'rgba(0,200,232,0.1)',border:'1px solid rgba(0,200,232,0.2)',borderRadius:'99px',padding:'2px 12px',color:'#00C8E8',fontSize:'12px',fontWeight:600,marginTop:'8px'}}>{p.savings}</div>
                <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.6,marginTop:'12px'}}>{p.desc}</p>
              </div>
              <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',flex:1,display:'flex',flexDirection:'column' as const,gap:'10px'}}>
                {p.features.map((f,fi) => (
                  <li key={fi} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <div style={{width:'18px',height:'18px',borderRadius:'50%',background:'rgba(0,200,232,0.15)',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Check size={9} style={{color:'#00C8E8'}}/></div>
                    <span style={{color:'#94A3B8',fontSize:'13px'}}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{display:'block',padding:'14px',borderRadius:'10px',textAlign:'center' as const,fontWeight:700,fontSize:'14px',textDecoration:'none',background:p.popular?'#00C8E8':'transparent',color:p.popular?'#040812':'#00C8E8',border:p.popular?'none':'1px solid rgba(0,200,232,0.4)',transition:'all 0.2s'}}>{p.cta} →</a>
            </div>
          ))}
        </div>
        <p style={{textAlign:'center',color:'#475569',fontSize:'14px',marginTop:'24px'}}>Wil je meer? Voeg losse diensten toe aan elke bundel.</p>
        <div style={{marginTop:'80px',background:'linear-gradient(135deg,#0A1628,#1B2A5E)',border:'1px solid rgba(0,200,232,0.2)',borderRadius:'20px',padding:'60px 48px',textAlign:'center' as const}}>
          <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.14em',fontFamily:'monospace'}}>GRATIS STARTEN</span>
          <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,48px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}}>Begin vandaag. Gratis.</h3>
          <p style={{color:'#94A3B8',fontSize:'18px',marginTop:'16px',maxWidth:'520px',margin:'16px auto 0',lineHeight:1.7}}>Wij bouwen gratis een professionele website of installeren een gratis AI widget. Alleen een eerlijke videoreview in ruil.</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',marginTop:'32px',flexWrap:'wrap' as const}}>
            <a href="#contact" style={{background:'#00C8E8',color:'#040812',padding:'16px 32px',borderRadius:'12px',fontWeight:700,fontSize:'15px',textDecoration:'none'}}>Claim jouw gratis website →</a>
            <a href="#contact" style={{background:'transparent',color:'#00C8E8',border:'1px solid rgba(0,200,232,0.4)',padding:'16px 32px',borderRadius:'12px',fontWeight:600,fontSize:'15px',textDecoration:'none'}}>Claim jouw gratis widget</a>
          </div>
        </div>
      </div>
    </section>
  )
}
