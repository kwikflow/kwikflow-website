'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
        <div className="absolute inset-0" style={{ background: 'rgba(0,200,232,0.03)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: 'rgba(0,200,232,0.2)' }} />
      <div className="absolute inset-x-0 bottom-0 h-[1px]" style={{ background: 'rgba(0,200,232,0.2)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className={`section-label inline-block mb-6 transition-all duration-700 ${anim}`}>Gratis starten</span>
        <h2 className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-6 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 64px)', transitionDelay: '100ms' }}>
          Begin vandaag. Gratis.
        </h2>
        <p className={`text-base sm:text-lg text-kf-text-secondary max-w-[560px] mx-auto mb-12 leading-relaxed transition-all duration-700 ${anim}`} style={{ transitionDelay: '200ms' }}>
          Wij bouwen gratis een professionele website of installeren een gratis AI widget op jouw bestaande site. Alles wat wij vragen is een eerlijke videoreview als je tevreden bent. Geen contract. Geen verborgen kosten. Gewoon doen.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-700 ${anim}`} style={{ transitionDelay: '300ms' }}>
          <button onClick={() => goContactWith('Ik wil een gratis website')} className="btn-primary w-full sm:w-auto">Claim jouw gratis website</button>
          <button onClick={() => goContactWith('Ik wil een gratis widget')} className="btn-ghost w-full sm:w-auto">Claim jouw gratis widget</button>
        </div>
        <p className={`text-sm text-kf-text-muted transition-all duration-700 ${anim}`} style={{ transitionDelay: '400ms' }}>
          Optioneel: €29/maand voor hosting en beheer ��� opzegbaar wanneer je wilt
        </p>
      </div>
    </section>
  );
}
