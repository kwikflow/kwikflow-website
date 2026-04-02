'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

function goContact() { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }

export function Services() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const cats = [
    { id: 'web', name: 'Website & Zichtbaarheid', items: [
      { name: 'Professionele website', desc: 'Mobiel, snel, Google-klaar', price: '€29/mo' },
      { name: 'Google Business setup', desc: 'Hoger in Google Maps', price: '€19/mo' },
      { name: 'Lokale SEO', desc: 'Gevonden worden op jouw stad', price: '€29/mo' },
      { name: 'Website chatbot', desc: 'Leads opvangen 24/7', price: '€47/mo' },
    ]},
    { id: 'kanalen', name: 'Kanalen', items: [
      { name: 'AI op WhatsApp Business', desc: 'Automatische berichten', price: '€47/mo' },
      { name: 'AI op Instagram DMs', desc: 'Direct messaging automation', price: '€29/mo' },
      { name: 'AI op Facebook Messenger', desc: 'Social media responder', price: '€29/mo' },
      { name: 'Gemiste oproep auto-reply', desc: 'WhatsApp bericht sturen', price: '€19/mo' },
    ]},
    { id: 'telefonie', name: 'Telefonie', items: [
      { name: 'AI voice agent 24/7', desc: 'Neemt op tijdens klus', price: '€97/mo' },
      { name: 'After-hours call handling', desc: 'Avond en weekend', price: '€47/mo' },
      { name: 'Voicemail naar WhatsApp', desc: 'Tekst berichten ontv.', price: '€19/mo' },
    ]},
    { id: 'klant', name: 'Klantcommunicatie', items: [
      { name: 'Afspraakbevestiging', desc: 'Automatie systeem', price: '€19/mo' },
      { name: 'Herinnering dag voor', desc: 'Automatisch versturen', price: '€19/mo' },
      { name: 'Afsprakenplanning bot', desc: 'Zelf inboeking', price: '€47/mo' },
      { name: 'Job status updates', desc: 'Naar klant sturen', price: '€19/mo' },
    ]},
    { id: 'reviews', name: 'Reviews & Reputatie', items: [
      { name: 'Review automatie', desc: 'Via WhatsApp sturen', price: '€29/mo' },
      { name: 'Google Maps tracking', desc: 'Positie monitoring', price: '€19/mo' },
      { name: 'Offerte opvolging', desc: 'Dag 2 en dag 5', price: '€29/mo' },
    ]},
    { id: 'admin', name: 'Broadcasts & Admin', items: [
      { name: 'WhatsApp broadcast', desc: '2x per maand', price: '€47/mo' },
      { name: 'Re-activatie campagne', desc: 'Oude klanten terugbellen', price: '€47/mo' },
      { name: 'Factuur automatie', desc: 'Na elke klus', price: '€29/mo' },
      { name: 'Werkbon automatie', desc: 'Digitaal systeem', price: '€19/mo' },
    ]},
  ];

  return (
    <section ref={ref} id="services" className="section-wrap bg-background py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Diensten</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-foreground mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Kies precies wat jij nodig hebt
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground transition-all duration-700 ${anim}`}>
            Elke dienst is los af te nemen. Start klein, schaal wanneer je wilt.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-12 sm:mb-14">
            <TabsList className="flex-wrap h-auto gap-1 bg-card p-1 rounded-xl">
              {cats.map((c) => (
                <TabsTrigger key={c.id} value={c.id} className="whitespace-nowrap min-h-[44px] px-4 data-active:bg-primary data-active:text-primary-foreground rounded-lg">
                  {c.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {cats.map((c) => (
            <TabsContent key={c.id} value={c.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {c.items.map((s, i) => (
                  <Card
                    key={i}
                    className="tilt-card bg-card ring-border hover:ring-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                    onMouseMove={(e) => {
                      if (window.innerWidth < 768) return;
                      const r = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - r.left) / r.width - 0.5;
                      const y = (e.clientY - r.top) / r.height - 0.5;
                      e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-2px)`;
                    }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-semibold text-base text-foreground mb-1">{s.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                      <Badge variant="outline" className="self-start text-xs font-bold text-primary border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-5">
                        {s.price}
                      </Badge>
                      <div className="mt-auto">
                        <Button variant="outline" onClick={goContact} className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                          Voeg toe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
