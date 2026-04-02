'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

function goContactWith(msg: string) {
  window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { message: msg } }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function Bundles() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const bundles = [
    { name: 'STARTER', price: '€97', savings: 'Bespaar €48', popular: false, features: ['Professionele website', 'Website chatbot', 'Gemiste oproep auto-reply', 'Afspraakbevestiging automatie'] },
    { name: 'GROEI', price: '€197', savings: 'MEEST GEKOZEN', popular: true, features: ['Alles uit Starter', 'AI op WhatsApp', 'AI op Instagram', 'AI op Facebook', 'Review automatie', 'Maandelijks rapport'] },
    { name: 'PRO', price: '€297', savings: 'Bespaar €147', popular: false, features: ['Alles uit Groei', 'AI voice agent 24/7', 'After-hours call handling', 'WhatsApp broadcasts', 'Offerte opvolging', 'Afsprakenplanning bot'] },
  ];

  return (
    <section ref={ref} id="pricing" className="section-wrap bg-background py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Pakketten</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-foreground mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Of kies een bundel en bespaar
          </h2>
          <p className={`text-base sm:text-lg text-muted-foreground transition-all duration-700 ${anim}`}>
            De populairste diensten gecombineerd. Goedkoper dan alles los.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start md:items-center">
          {bundles.map((b, i) => (
            <div
              key={i}
              className={`relative tilt-card transition-all duration-700 ${anim} ${b.popular ? 'md:scale-105 md:z-10' : ''}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return;
                const r = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) ${b.popular ? 'scale(1.05)' : ''}`;
              }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = b.popular ? 'scale(1.05)' : ''; }}
            >
              {b.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-full z-20 whitespace-nowrap badge-pulse">
                  {b.savings}
                </Badge>
              )}

              <Card
                className="h-full flex flex-col rounded-[20px]"
                style={{
                  background: b.popular ? 'linear-gradient(135deg, var(--secondary), var(--accent))' : undefined,
                  boxShadow: b.popular ? '0 0 60px rgba(0,200,232,0.2)' : 'none',
                  ...(b.popular ? { border: '1px solid var(--primary)' } : {}),
                }}
              >
                <CardHeader className="p-8 sm:p-10 pb-0 sm:pb-0">
                  <CardDescription className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground">{b.name}</CardDescription>
                  <CardTitle className="!text-5xl font-display font-extrabold text-foreground">
                    {b.price}<span className="text-lg text-muted-foreground ml-1 font-normal">/maand</span>
                  </CardTitle>
                  {!b.popular && <span className="inline-block text-xs font-semibold text-emerald-400">{b.savings}</span>}
                </CardHeader>

                <CardContent className="p-8 sm:p-10 pt-6 sm:pt-6 flex-1">
                  <ul className="space-y-3">
                    {b.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="p-8 sm:p-10 pt-0 sm:pt-0">
                  <Button
                    onClick={() => goContactWith(`Ik wil het ${b.name} pakket (${b.price}/maand)`)}
                    className={`w-full min-h-[52px] rounded-xl font-display font-bold ${
                      b.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(0,200,232,0.4)]'
                        : 'bg-transparent border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    variant={b.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Kies {b.name.toLowerCase()}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 sm:mt-14">
          Wil je meer? Voeg losse diensten toe aan elke bundel.
        </p>
      </div>
    </section>
  );
}
