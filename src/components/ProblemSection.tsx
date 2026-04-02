'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff, MessageSquareX, EyeOff } from 'lucide-react';

export function ProblemSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const problems = [
    {
      icon: <PhoneOff className="w-8 h-8" />,
      title: 'Telefoon gaat, jij neemt niet op',
      desc: 'Je zit midden in een klus. Telefoon gaat. Je neemt niet op. Klant belt drie nummers. Nummer twee pikt jouw opdracht.',
    },
    {
      icon: <MessageSquareX className="w-8 h-8" />,
      title: 'Berichten blijven onbeantwoord',
      desc: 'Klanten appen je via WhatsApp, Instagram en Facebook. Niemand reageert. Lead verloren. Klant gefrustreerd.',
    },
    {
      icon: <EyeOff className="w-8 h-8" />,
      title: 'Online onzichtbaar',
      desc: 'Klanten zoeken op Google naar een vakman. Ze vinden jou niet. Geen website, geen reviews, geen klus.',
    },
  ];

  return (
    <section ref={ref} className="section-wrap bg-background py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Het probleem</p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-foreground mb-5 transition-all duration-700 ${anim}`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', transitionDelay: '100ms' }}
          >
            Herken jij dit?
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-[480px] mx-auto transition-all duration-700 ${anim}`} style={{ transitionDelay: '200ms' }}>
            Elke dag verliezen vakmensen klussen aan concurrenten die wél opnemen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((p, i) => (
            <Card
              key={i}
              className={`bg-card ring-border hover:ring-red-500/40 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,50,50,0.1)] transition-all duration-700 ${anim}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <CardContent className="p-8 sm:p-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-red-400 mb-6 bg-red-500/[0.08]">
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.7]">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
