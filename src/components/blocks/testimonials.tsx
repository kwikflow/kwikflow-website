'use client'
import React, { useState, useRef } from 'react'

const testimonials = [
  { id:1, quote:'Het systeem nam maandag 4 oproepen op terwijl ik aan het werk was. Dinsdag had ik €840 extra omzet. Ik snap niet dat ik dit zo lang zonder heb gedaan.', author:'Marco van den Berg', role:'Loodgieter · Rotterdam', result:'€840', label:'extra omzet', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face' },
  { id:2, quote:'Van 6 naar 38 Google reviews in 90 dagen. We staan nu op positie 2 in Google Maps. Inbound aanvragen zijn met 65% gestegen.', author:'Lisa Vermeer', role:'Schoonmaakbedrijf · Eindhoven', result:'38', label:'reviews in 90 dagen', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face' },
  { id:3, quote:'In de eerste maand 11 extra leads via de chatbot en voice agent. 7 klussen geboekt. €12.600 extra omzet. Beste investering dit jaar.', author:'Stef Bakker', role:'Dakdekker · Groningen', result:'€12.600', label:'extra omzet maand 1', avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face' },
  { id:4, quote:'De voice agent neemt op als ik op een klus zit. Elke ochtend staat er een lijst met details van alle oproepen in mijn WhatsApp. Nooit meer stress over gemiste klanten.', author:'Kevin Dijkstra', role:'Elektricien · Amsterdam', result:'12+', label:'extra klussen/maand', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=face' },
  { id:5, quote:'De WhatsApp broadcast in september heeft in één week 8 nieuwe boekingen opgeleverd. Dat is €2.400 extra omzet voor één berichtje.', author:'Rens van Dijk', role:'Schilder · Utrecht', result:'€2.400', label:'uit 1 broadcast', avatar:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=128&h=128&fit=crop&crop=face' },
  { id:6, quote:'Ik had 3 Google reviews. Nu 29. Klanten vinden mij nu als eerste in Google Maps. Mijn agenda zit elke week vol zonder dat ik iets doe.', author:'Ahmed Bouali', role:'Loodgieter · Den Haag', result:'29', label:'reviews in 60 dagen', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&crop=face' },
]

const positions = ['front','middle','back'] as const

export function Testimonials() {
  const [offset, setOffset] = useState(0)
  const shuffle = () => setOffset(o => (o + 1) % testimonials.length)
  const touchStartX = useRef(0)

  const visible = [0,1,2].map(i => testimonials[(offset + i) % testimonials.length])

  const cardStyle = (position: string): React.CSSProperties => ({
    position:'absolute', left:0, top:0, width:'320px', height:'440px',
    borderRadius:'20px', padding:'32px', transition:'all 0.4s cubic-bezier(0.25,1,0.5,1)',
    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',
    background: position==='front'?'linear-gradient(135deg,#0A1628,#0F1F3D)':position==='middle'?'#0A1628':'#040812',
    border: position==='front'?'1px solid rgba(0,200,232,0.3)':'1px solid rgba(0,200,232,0.1)',
    boxShadow: position==='front'?'0 40px 80px rgba(0,0,0,0.6),0 0 40px rgba(0,200,232,0.1)':'none',
    transform: position==='front'?'rotate(-4deg) translateX(0)':position==='middle'?'rotate(0deg) translateX(40px)':'rotate(4deg) translateX(80px)',
    zIndex: position==='front'?3:position==='middle'?2:1,
    opacity: position==='front'?1:position==='middle'?0.85:0.6,
    cursor: position==='front'?'grab':'pointer',
  })

  return (
    <section id="resultaten" style={{background:'#040812',padding:'120px 0',position:'relative' as const,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=60)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.05}}/>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 32px',position:'relative' as const,zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'80px'}}>
          <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.14em',fontFamily:'monospace'}}>RESULTATEN</span>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(32px,5vw,56px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}}>Wat onze klanten bereiken</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'60px'}}>
          <div
            style={{position:'relative',height:'440px',width:'320px'}}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 50) shuffle()
            }}
          >
            {visible.map((t,i) => (
              <div key={t.id} style={cardStyle(positions[i])} onClick={()=>{ if(i!==0) shuffle() }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.author} style={{width:'72px',height:'72px',borderRadius:'50%',objectFit:'cover',border:'2px solid rgba(0,200,232,0.3)'}}/>
                <p style={{color:'#94A3B8',fontSize:'13px',lineHeight:1.7,textAlign:'center',fontStyle:'italic',flex:1,margin:'16px 0'}}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'36px',fontWeight:800,color:'#00C8E8',fontFamily:'Syne,sans-serif'}}>{t.result}</div>
                  <div style={{color:'#ffffff',fontSize:'13px',fontWeight:600,marginTop:'4px'}}>{t.label}</div>
                  <div style={{color:'#94A3B8',fontSize:'12px',marginTop:'4px'}}>{t.author}</div>
                  <div style={{color:'#475569',fontSize:'11px'}}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
            <button onClick={shuffle} style={{background:'transparent',border:'1px solid rgba(0,200,232,0.3)',borderRadius:'99px',padding:'10px 24px',color:'#00C8E8',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>Volgende testimonial →</button>
            <span style={{color:'#475569',fontSize:'12px'}}>{offset + 1} / {testimonials.length}</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',width:'100%',maxWidth:'700px',padding:'0 16px'}}>
            {testimonials.map((t,i) => (
              <div key={i} onClick={()=>setOffset(i)} style={{background:offset===i?'#0F1F3D':'#0A1628',border:offset===i?'1px solid rgba(0,200,232,0.4)':'1px solid rgba(0,200,232,0.15)',borderRadius:'16px',padding:'16px 8px',textAlign:'center' as const,cursor:'pointer',transition:'all 0.2s',overflow:'hidden',minWidth:0}}>
                <div style={{fontSize:'clamp(18px,4vw,28px)',fontWeight:800,color:'#00C8E8',fontFamily:'Syne,sans-serif',wordBreak:'break-word' as const}}>{t.result}</div>
                <div style={{color:'#fff',fontSize:'12px',fontWeight:600,marginTop:'6px'}}>{t.label}</div>
                <div style={{color:'#475569',fontSize:'11px',marginTop:'4px'}}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
