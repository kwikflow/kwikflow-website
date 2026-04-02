'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function AboutUs() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const stats = [
    '45,000+ vakmensen in NL',
    '€33 miljard sector omzet',
    'Actief in NL & België',
  ];

  return (
    <section ref={ref} id="about" className="section-wrap relative py-20 sm:py-[120px] overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern kantoor"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(4,8,18,0.92)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Over ons</p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-5 transition-all duration-700 ${anim}`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Het team achter Kwikflow
          </h2>
          <p className={`text-base sm:text-lg text-kf-text-secondary max-w-[560px] mx-auto transition-all duration-700 ${anim}`}>
            Wij zijn geen anoniem tech bedrijf. Wij zijn ondernemers die begrijpen wat een vakman nodig heeft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-16">
          {/* Founder */}
          <div className={`glass-card rounded-[20px] p-8 sm:p-10 transition-all duration-700 ${anim}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-6 relative">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
                alt="Foto van oprichter Kwikflow"
                width={120}
                height={120}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="font-display font-bold text-[22px] text-kf-text-primary text-center mb-1">Goneclear</h3>
            <p className="text-sm font-medium text-kf-cyan text-center mb-5">Oprichter & Strategie</p>
            <p className="text-[15px] text-kf-text-secondary leading-[1.7] text-center">
              Ondernemer met meerdere 7-cijferige e-commerce bedrijven. Gespecialiseerd in het automatiseren van
              bedrijfsprocessen met AI. Begrijpt wat vakmensen nodig hebben om te groeien.
            </p>
          </div>

          {/* Team */}
          <div className={`glass-card rounded-[20px] p-8 sm:p-10 transition-all duration-700 ${anim}`} style={{ transitionDelay: '300ms' }}>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-6 relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&crop=face"
                alt="Het Kwikflow development team"
                width={120}
                height={120}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="font-display font-bold text-[22px] text-kf-text-primary text-center mb-1">Kwikflow Team</h3>
            <p className="text-sm font-medium text-kf-cyan text-center mb-5">AI Specialisten & Developers</p>
            <p className="text-[15px] text-kf-text-secondary leading-[1.7] text-center">
              Een team van AI specialisten en developers die elke dag werken aan de systemen die vakmensen helpen groeien.
              Van voice agents tot WhatsApp automatisering — wij bouwen het en wij onderhouden het.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-5 px-6 rounded-xl transition-all duration-700 ${anim}`}
              style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(255,255,255,0.08)', transitionDelay: `${400 + i * 100}ms` }}
            >
              <p className="text-sm font-medium text-kf-text-secondary">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
