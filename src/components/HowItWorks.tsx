'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const steps = [
    { n: '01', title: 'Gratis start', desc: 'Website of widget, geen risico, geen contract' },
    { n: '02', title: 'Wij bouwen alles', desc: 'Jij hoeft niks te doen. Geen technische kennis nodig.' },
    { n: '03', title: 'Systeem gaat live', desc: 'Voice agent, chatbot en automaties actief binnen 48 uur' },
    { n: '04', title: 'Jij groeit', desc: 'Meer klussen, meer omzet, minder stress' },
  ];

  return (
    <section ref={ref} className="section-wrap bg-background py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>How it works</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-foreground transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Wij regelen alles. Jij doet de klussen.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${anim}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <Badge
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mb-5 mx-auto sm:mx-0 p-0 transition-all duration-500"
                style={{
                  border: '2px solid var(--primary)',
                  color: isVisible ? 'var(--primary-foreground)' : 'var(--primary)',
                  background: isVisible ? 'var(--primary)' : 'transparent',
                }}
              >
                {s.n}
              </Badge>

              <Card className="bg-card ring-border">
                <CardContent className="p-6 text-center sm:text-left">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
