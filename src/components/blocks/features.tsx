'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageSquare, Star, Zap, Users } from 'lucide-react'

const st = { section:{background:'#040812',padding:'120px 0'}, wrap:{maxWidth:'1200px',margin:'0 auto',padding:'0 32px'}, card:{background:'#0A1628',border:'1px solid rgba(0,200,232,0.15)',borderRadius:'16px'}, icon:{width:'64px',height:'64px',borderRadius:'50%',background:'rgba(0,200,232,0.1)',border:'1px solid rgba(0,200,232,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}, badge:{background:'rgba(0,200,232,0.1)',border:'1px solid rgba(0,200,232,0.3)',borderRadius:'99px',padding:'4px 16px',color:'#00C8E8',fontSize:'13px',fontWeight:700,display:'inline-block',marginTop:'12px'}, label:{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.14em',fontFamily:'monospace'}, h2:{fontFamily:'Syne,sans-serif',fontSize:'clamp(32px,5vw,56px)',fontWeight:800,color:'#fff',marginTop:'12px',letterSpacing:'-0.03em'}, sub:{color:'#94A3B8',fontSize:'18px',marginTop:'16px',maxWidth:'480px',margin:'16px auto 0'} }

const tabs = [
  { id:'website', label:'Website & Zichtbaarheid' },
  { id:'kanalen', label:'Kanalen' },
  { id:'telefonie', label:'Telefonie' },
  { id:'communicatie', label:'Klantcommunicatie' },
  { id:'reviews', label:'Reviews & Reputatie' },
  { id:'broadcasts', label:'Broadcasts & Admin' },
]

const services: Record<string, {name:string, desc:string, price:string}[]> = {
  website: [
    { name:'Professionele website', desc:'Mobiel, snel, Google-klaar', price:'€29/mo' },
    { name:'Google Business setup', desc:'Hoger in Google Maps', price:'€19/mo' },
    { name:'Lokale SEO', desc:'Gevonden worden op jouw stad', price:'€29/mo' },
    { name:'Website chatbot', desc:'Leads opvangen 24/7', price:'€47/mo' },
    { name:'Contactformulier automatie', desc:'Elke aanvraag direct naar WhatsApp', price:'€19/mo' },
  ],
  kanalen: [
    { name:'AI op WhatsApp Business', desc:'Automatisch antwoord op alle berichten', price:'€47/mo' },
    { name:'AI op Instagram DMs', desc:'Geen bericht gemist', price:'€29/mo' },
    { name:'AI op Facebook Messenger', desc:'Oudere doelgroep gevangen', price:'€29/mo' },
    { name:'Gemiste oproep auto-reply', desc:'Klant krijgt direct een WhatsApp terug', price:'€19/mo' },
    { name:'Google Business chat', desc:'Berichten via Google Maps beantwoord', price:'€19/mo' },
  ],
  telefonie: [
    { name:'AI voice agent 24/7', desc:'Neemt op tijdens klus, stuurt details naar WhatsApp', price:'€97/mo' },
    { name:'After-hours call handling', desc:'Avond en weekend nooit meer gemist', price:'€47/mo' },
    { name:'Voicemail naar WhatsApp', desc:'Voicemail omgezet naar tekst', price:'€19/mo' },
    { name:'Terugbel notificatie', desc:'Prioriteitsmelding bij elke gemiste oproep', price:'€19/mo' },
    { name:'Spoedlijn routing', desc:'Spoed krijgt directe melding', price:'€29/mo' },
  ],
  communicatie: [
    { name:'Afspraakbevestiging automatie', desc:'Automatisch na elke boeking', price:'€19/mo' },
    { name:'Herinnering automatie', desc:'Dag voor de klus automatisch verstuurd', price:'€19/mo' },
    { name:'Afsprakenplanning bot', desc:'Klanten boeken direct via WhatsApp', price:'€47/mo' },
    { name:'Job status updates', desc:'Klant krijgt bericht als je onderweg bent', price:'€19/mo' },
    { name:'Welkomstbericht nieuwe klanten', desc:'Professionele eerste indruk', price:'€19/mo' },
    { name:'Werkbon automatie', desc:'Digitale werkbon via WhatsApp', price:'€19/mo' },
    { name:'Factuur automatie', desc:'Automatisch na elke klus', price:'€29/mo' },
    { name:'Betaalherinnering', desc:'Vriendelijke herinnering bij late betaling', price:'€19/mo' },
  ],
  reviews: [
    { name:'Review automatie via WhatsApp', desc:'Na elke klus automatisch een reviewverzoek', price:'€29/mo' },
    { name:'Google Maps positie tracking', desc:'Maandelijks rapport van je positie', price:'€19/mo' },
    { name:'Offerte opvolging', desc:'Automatisch follow-up dag 2 en dag 5', price:'€29/mo' },
    { name:'Review monitoring', desc:'Signaal bij nieuwe of negatieve review', price:'€19/mo' },
  ],
  broadcasts: [
    { name:'WhatsApp broadcast 2x/maand', desc:'Seizoensgebonden campagnes naar klantenlijst', price:'€47/mo' },
    { name:'Re-activatie campagne', desc:'Slapende klanten terugwinnen', price:'€47/mo' },
    { name:'Loyalty broadcast', desc:'Vaste klanten belonen', price:'€29/mo' },
    { name:'Nieuw dienst aankondiging', desc:'Nieuwe specialisatie naar hele lijst', price:'€29/mo' },
    { name:'Klantendatabase opbouw', desc:'Alle contacten georganiseerd', price:'€29/mo' },
  ],
}

export function Features() {
  const [activeTab, setActiveTab] = useState('website')

  const cards = [
    { icon:<Phone style={{color:'#00C8E8',width:'32px',height:'32px'}} strokeWidth={1.5}/>, title:'Telefonie', desc:'AI voice agent neemt op als jij op een klus zit', price:'vanaf €97/mo' },
    { icon:<MessageSquare style={{color:'#00C8E8',width:'32px',height:'32px'}} strokeWidth={1.5}/>, title:'Kanaal automatie', desc:'AI op WhatsApp, Instagram en Facebook. Geen enkel bericht gemist.', price:'vanaf €19/mo' },
    { icon:<Star style={{color:'#00C8E8',width:'32px',height:'32px'}} strokeWidth={1.5}/>, title:'Reviews & reputatie', desc:'Automatisch reviewverzoek na elke klus. Hogere Google positie.', price:'vanaf €29/mo' },
  ]

  return (
    <section id="diensten" style={{...st.section,position:'relative' as const,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none',backgroundImage:'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=60)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.04}}/>
      <div style={{...st.wrap,position:'relative' as const,zIndex:1}}>
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <span style={st.label}>DIENSTEN</span>
          <h2 style={st.h2}>Alles wat een vakman nodig heeft</h2>
          <p style={st.sub}>Zes categorieën. Allemaal gericht op één doel — nooit meer een opdracht missen.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(280px,100%),1fr))',gap:'16px'}}>
          {cards.map((c,i) => (
            <Card key={i} style={st.card}>
              <CardContent style={{padding:'32px',textAlign:'center'}}>
                <div style={st.icon}>{c.icon}</div>
                <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff',margin:'16px 0 8px'}}>{c.title}</h3>
                <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.6}}>{c.desc}</p>
                <span style={st.badge}>{c.price}</span>
              </CardContent>
            </Card>
          ))}
          <Card style={{...st.card,gridColumn:'1 / -1',background:'linear-gradient(135deg,#0A1628,#1B2A5E)',border:'1px solid rgba(0,200,232,0.3)'}}>
            <CardContent className="features-broadcast" style={{padding:'32px',display:'flex',flexDirection:'column' as const,gap:'16px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'16px',flex:1}}>
                <div style={{...st.icon,flexShrink:0}}><Zap style={{color:'#00C8E8',width:'32px',height:'32px'}} strokeWidth={1.5}/></div>
                <div>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff',margin:'0 0 8px'}}>WhatsApp broadcasts</h3>
                  <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.6,margin:0}}>Seizoensgebonden campagnes naar je klantenlijst. 1 broadcast = gemiddeld €2.500 extra omzet.</p>
                </div>
              </div>
              <span className="broadcast-badge" style={st.badge}>€47/mo</span>
            </CardContent>
          </Card>
          <Card style={st.card}>
            <CardContent style={{padding:'32px',textAlign:'center'}}>
              <div style={st.icon}><Users style={{color:'#00C8E8',width:'32px',height:'32px'}} strokeWidth={1.5}/></div>
              <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'20px',fontWeight:700,color:'#fff',margin:'16px 0 8px'}}>Klantcommunicatie</h3>
              <p style={{color:'#94A3B8',fontSize:'14px',lineHeight:1.6}}>Bevestigingen, herinneringen, werkbonnen en facturen — allemaal automatisch.</p>
              <span style={st.badge}>vanaf €19/mo</span>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed services section */}
        <div style={{marginTop:'80px'}}>
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <span style={{color:'#00C8E8',fontSize:'11px',fontWeight:700,textTransform:'uppercase' as const,letterSpacing:'0.14em',fontFamily:'monospace'}}>LOSSE DIENSTEN</span>
            <h3 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(24px,3vw,36px)',fontWeight:800,color:'#fff',marginTop:'8px',letterSpacing:'-0.02em'}}>Kies precies wat jij nodig hebt</h3>
            <p style={{color:'#94A3B8',fontSize:'15px',marginTop:'8px'}}>Elke dienst is los af te nemen. Start klein, schaal wanneer je wilt.</p>
          </div>

          <div style={{display:'flex',gap:'8px',flexWrap:'wrap' as const,justifyContent:'center',marginBottom:'32px',padding:'0 16px'}}>
            {tabs.map(t => (
              <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{padding:'8px 18px',borderRadius:'99px',fontSize:'13px',fontWeight:600,cursor:'pointer',transition:'all 0.2s',background:activeTab===t.id?'#00C8E8':'transparent',color:activeTab===t.id?'#040812':'#94A3B8',border:activeTab===t.id?'1px solid #00C8E8':'1px solid rgba(255,255,255,0.1)'}}>
                {t.label}
              </button>
            ))}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'12px'}}>
            {services[activeTab].map((svc,i) => (
              <div key={i} style={{background:'#0A1628',border:'1px solid rgba(0,200,232,0.12)',borderRadius:'14px',padding:'20px 22px',display:'flex',flexDirection:'column' as const,gap:'8px',transition:'all 0.2s'}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor='rgba(0,200,232,0.4)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor='rgba(0,200,232,0.12)'}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <span style={{fontFamily:'Syne,sans-serif',fontSize:'15px',fontWeight:700,color:'#fff',flex:1,marginRight:'12px'}}>{svc.name}</span>
                  <span style={{background:'rgba(0,200,232,0.1)',border:'1px solid rgba(0,200,232,0.3)',borderRadius:'99px',padding:'2px 10px',color:'#00C8E8',fontSize:'12px',fontWeight:700,whiteSpace:'nowrap' as const,flexShrink:0}}>{svc.price}</span>
                </div>
                <span style={{color:'#475569',fontSize:'12px',lineHeight:1.5}}>{svc.desc}</span>
                <a href="#contact" style={{color:'#00C8E8',fontSize:'12px',fontWeight:600,textDecoration:'none',marginTop:'4px'}}>Voeg toe →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
