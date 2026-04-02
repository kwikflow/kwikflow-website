'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function goContact() { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }

export function Services() {
  const { ref, isVisible } = useIntersectionObserver();
  const [tab, setTab] = useState(0);
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const cats = [
    {
      name: 'Website & Zichtbaarheid',
      items: [
        { name: 'Professionele website', desc: 'Mobiel, snel, Google-klaar', price: '€29/mo' },
        { name: 'Google Business setup', desc: 'Hoger in Google Maps', price: '€19/mo' },
        { name: 'Lokale SEO', desc: 'Gevonden worden op jouw stad', price: '€29/mo' },
        { name: 'Website chatbot', desc: 'Leads opvangen 24/7', price: '€47/mo' },
      ],
    },
    {
      name: 'Kanalen',
      items: [
        { name: 'AI op WhatsApp Business', desc: 'Automatische berichten', price: '€47/mo' },
        { name: 'AI op Instagram DMs', desc: 'Direct messaging automation', price: '€29/mo' },
        { name: 'AI op Facebook Messenger', desc: 'Social media responder', price: '€29/mo' },
        { name: 'Gemiste oproep auto-reply', desc: 'WhatsApp bericht sturen', price: '€19/mo' },
      ],
    },
    {
      name: 'Telefonie',
      items: [
        { name: 'AI voice agent 24/7', desc: 'Neemt op tijdens klus', price: '€97/mo' },
        { name: 'After-hours call handling', desc: 'Avond en weekend', price: '€47/mo' },
        { name: 'Voicemail naar WhatsApp', desc: 'Tekst berichten ontv.', price: '€19/mo' },
      ],
    },
    {
      name: 'Klantcommunicatie',
      items: [
        { name: 'Afspraakbevestiging', desc: 'Automatie systeem', price: '€19/mo' },
        { name: 'Herinnering dag voor', desc: 'Automatisch versturen', price: '€19/mo' },
        { name: 'Afsprakenplanning bot', desc: 'Zelf inboeking', price: '€47/mo' },
        { name: 'Job status updates', desc: 'Naar klant sturen', price: '€19/mo' },
      ],
    },
    {
      name: 'Reviews & Reputatie',
      items: [
        { name: 'Review automatie', desc: 'Via WhatsApp sturen', price: '€29/mo' },
        { name: 'Google Maps tracking', desc: 'Positie monitoring', price: '€19/mo' },
        { name: 'Offerte opvolging', desc: 'Dag 2 en dag 5', price: '€29/mo' },
      ],
    },
    {
      name: 'Broadcasts & Admin',
      items: [
        { name: 'WhatsApp broadcast', desc: '2x per maand', price: '€47/mo' },
        { name: 'Re-activatie campagne', desc: 'Oude klanten terugbellen', price: '€47/mo' },
        { name: 'Factuur automatie', desc: 'Na elke klus', price: '€29/mo' },
        { name: 'Werkbon automatie', desc: 'Digitaal systeem', price: '€19/mo' },
      ],
    },
  ];

  return (
    <section ref={ref} id="services" className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Diensten</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Kies precies wat jij nodig hebt
          </h2>
          <p className={`text-base sm:text-lg text-kf-text-secondary transition-all duration-700 ${anim}`}>
            Elke dienst is los af te nemen. Start klein, schaal wanneer je wilt.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-1 mb-12 sm:mb-14 p-1 rounded-xl mx-auto w-fit max-w-full scrollbar-hide" style={{ background: '#0A1628' }}>
          {cats.map((c, i) => (
            <button key={i} onClick={() => setTab(i)} className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap min-h-[44px] ${tab === i ? 'bg-kf-cyan text-kf-bg font-semibold' : 'text-kf-text-secondary hover:text-white'}`}>
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats[tab].items.map((s, i) => (
            <div
              key={`${tab}-${i}`}
              className="tilt-card group rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              style={{ background: '#0A1628', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00C8E8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; }}
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return;
                const r = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-2px)`;
              }}
            >
              <h3 className="font-display font-semibold text-base text-kf-text-primary mb-1">{s.name}</h3>
              <p className="text-sm text-kf-text-secondary mb-4">{s.desc}</p>
              <span className="inline-block self-start text-xs font-bold text-kf-cyan px-3 py-1 rounded-full mb-5" style={{ background: 'rgba(0,200,232,0.1)', border: '1px solid rgba(0,200,232,0.3)' }}>
                {s.price}
              </span>
              <div className="mt-auto">
                <button
                  onClick={goContact}
                  className="w-full min-h-[44px] py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 text-kf-cyan"
                  style={{ border: '1px solid rgba(0,200,232,0.3)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#00C8E8'; e.currentTarget.style.color = '#040812'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00C8E8'; }}
                >
                  Voeg toe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
