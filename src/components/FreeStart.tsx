'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';

function goContactWith(msg: string) {
  window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { message: msg } }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function FreeStart() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section ref={ref} className="section-wrap relative py-20 sm:py-[100px] overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80" alt="Team aan het samenwerken" fill className="object-cover" loading="lazy" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.92), rgba(27,42,94,0.88))' }} />
        <div className="absolute inset-0 bg-primary/[0.03]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[1px] bg-primary/20" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-primary/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className={`section-label inline-block mb-6 transition-all duration-700 ${anim}`}>Gratis starten</span>
        <h2 className={`font-display font-extrabold tracking-tighter text-foreground mb-6 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 64px)', transitionDelay: '100ms' }}>
          Begin vandaag. Gratis.
        </h2>
        <p className={`text-base sm:text-lg text-muted-foreground max-w-[560px] mx-auto mb-12 leading-relaxed transition-all duration-700 ${anim}`} style={{ transitionDelay: '200ms' }}>
          Wij bouwen gratis een professionele website of installeren een gratis AI widget op jouw bestaande site. Alles wat wij vragen is een eerlijke videoreview als je tevreden bent. Geen contract. Geen verborgen kosten. Gewoon doen.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-700 ${anim}`} style={{ transitionDelay: '300ms' }}>
          <Button size="lg" onClick={() => goContactWith('Ik wil een gratis website')} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 py-6 text-base rounded-xl shadow-[0_0_40px_rgba(0,200,232,0.4)]">
            Claim jouw gratis website
          </Button>
          <Button variant="outline" size="lg" onClick={() => goContactWith('Ik wil een gratis widget')} className="w-full sm:w-auto border-white/20 text-foreground hover:border-white hover:bg-transparent font-semibold px-8 py-6 text-base rounded-xl">
            Claim jouw gratis widget
          </Button>
        </div>
        <p className={`text-sm text-muted-foreground transition-all duration-700 ${anim}`} style={{ transitionDelay: '400ms' }}>
          Optioneel: €29/maand voor hosting en beheer — opzegbaar wanneer je wilt
        </p>
      </div>
    </section>
  );
}
