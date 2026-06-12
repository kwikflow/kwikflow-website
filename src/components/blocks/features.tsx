'use client'
import { useState } from 'react'
import { Phone, MessageSquare, Star, Zap, Users, Calendar } from 'lucide-react'

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
    { icon:Phone, title:'Telefonie', desc:'AI voice agent neemt op als jij op een klus zit', price:'vanaf €97/mo' },
    { icon:MessageSquare, title:'Kanaal automatie', desc:'AI op WhatsApp, Instagram en Facebook. Geen enkel bericht gemist.', price:'vanaf €19/mo' },
    { icon:Star, title:'Reviews & reputatie', desc:'Automatisch reviewverzoek na elke klus. Hogere Google positie.', price:'vanaf €29/mo' },
    { icon:Zap, title:'WhatsApp broadcasts', desc:'Seizoensgebonden campagnes naar je klantenlijst. 1 broadcast = gemiddeld €2.500 extra omzet.', price:'vanaf €47/mo' },
    { icon:Users, title:'Klantcommunicatie', desc:'Bevestigingen, herinneringen, werkbonnen en facturen — allemaal automatisch.', price:'vanaf €19/mo' },
    { icon:Calendar, title:'Agenda & planning', desc:'Afspraken automatisch in je agenda. Geen dubbele boekingen meer.', price:'vanaf €19/mo' },
  ]

  return (
    <section id="diensten" className="section section-alt">
      <div className="container-kf">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <span className="eyebrow mb-3">Diensten</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Alles wat een vakman nodig heeft</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-lg text-body">Zes categorieën. Allemaal gericht op één doel — nooit meer een opdracht missen.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} data-reveal className="card-kf p-8 text-center">
                <span className="icon-plate mx-auto h-14 w-14">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mb-2 mt-4 text-xl font-semibold text-heading">{c.title}</h3>
                <p className="text-sm leading-relaxed text-body">{c.desc}</p>
                <span className="mt-3 inline-block rounded-full px-3.5 py-1 text-xs font-semibold text-brand-text" style={{ background: 'var(--brand-soft)' }}>{c.price}</span>
              </div>
            )
          })}
        </div>

        {/* Tabbed à-la-carte services */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="eyebrow">Losse diensten</span>
            <h3 className="mt-2 text-[clamp(1.5rem,3vw,2.25rem)] font-bold">Kies precies wat jij nodig hebt</h3>
            <p className="mt-2 text-body">Elke dienst is los af te nemen. Start klein, schaal wanneer je wilt.</p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2 px-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={
                  'rounded-full border px-4 py-2 text-[0.8rem] font-semibold transition-colors ' +
                  (activeTab === t.id
                    ? 'border-brand bg-brand text-white'
                    : 'border-hairline bg-white text-body hover:border-hairline-strong hover:text-heading')
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services[activeTab].map((svc, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-xl border border-hairline bg-white p-5 shadow-[var(--shadow-sm)] transition-colors hover:border-hairline-strong">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex-1 text-[0.95rem] font-semibold text-heading">{svc.name}</span>
                  <span className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold text-brand-text" style={{ background: 'var(--brand-soft)' }}>{svc.price}</span>
                </div>
                <span className="text-[0.8rem] leading-relaxed text-body">{svc.desc}</span>
                <a href="#contact" className="mt-1 text-[0.8rem] font-semibold text-brand-text hover:underline">Voeg toe →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
