'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

export function Solution() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const steps = [
    { title: 'Klant neemt contact op', desc: 'Belt, appt of stuurt bericht' },
    { title: 'AI vangt altijd op', desc: 'Dag en nacht, nooit voicemail' },
    { title: 'Details naar WhatsApp', desc: 'Binnen 60 seconden bij jou' },
    { title: 'Jij belt terug', desc: 'Op jouw moment, met alle info' },
    { title: 'Klus geboekt', desc: 'Omzet binnen, klant blij' },
  ];

  return (
    <section
      ref={ref}
      className="section-wrap py-20 sm:py-[120px]"
      style={{ background: 'linear-gradient(180deg, var(--background) 0%, var(--card) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>De oplossing</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-foreground mb-4 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Kwikflow regelt het.
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground transition-all duration-700 ${anim}`}>
            Volledig automatisch. Jij hoeft niks te doen.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-5 left-[40px] right-[40px] h-[1px] bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30" />

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex-1 flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 transition-all duration-700 ${anim}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <Badge className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-display font-bold text-base flex items-center justify-center flex-shrink-0 z-10 p-0">
                  {i + 1}
                </Badge>

                <Card className="flex-1 lg:w-full lg:mt-4 bg-card ring-border">
                  <CardContent className="p-4 text-left lg:text-center">
                    <p className="font-display font-semibold text-base text-foreground mb-1">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>

                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block w-4 h-4 text-primary/30 mt-6 mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
