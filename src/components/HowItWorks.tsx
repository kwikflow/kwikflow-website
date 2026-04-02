'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
    <section ref={ref} className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>How it works</p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-kf-text-primary transition-all duration-700 ${anim}`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Wij regelen alles. Jij doet de klussen.
          </h2>
        </div>

        {/* Responsive grid — never overflows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${anim}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Number badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mb-5 mx-auto sm:mx-0 transition-all duration-500"
                style={{
                  border: '2px solid #00C8E8',
                  color: isVisible ? '#040812' : '#00C8E8',
                  background: isVisible ? '#00C8E8' : 'transparent',
                }}
              >
                {s.n}
              </div>

              <div
                className="p-6 rounded-xl text-center sm:text-left"
                style={{ background: '#0A1628', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <h3 className="font-display font-semibold text-lg text-kf-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-kf-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
