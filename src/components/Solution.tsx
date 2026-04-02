'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Solution() {
  const { ref, isVisible } = useIntersectionObserver();

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
      style={{ background: 'linear-gradient(180deg, #040812 0%, #0A1628 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            De oplossing
          </p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Kwikflow regelt het.
          </h2>
          <p className={`text-base sm:text-lg text-kf-text-secondary transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Volledig automatisch. Jij hoeft niks te doen.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-5 left-[40px] right-[40px] h-[1px] bg-gradient-to-r from-kf-cyan/30 via-kf-cyan/15 to-kf-cyan/30" />

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex-1 flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Number */}
                <div className="w-10 h-10 rounded-full bg-kf-cyan text-kf-bg font-display font-bold text-base flex items-center justify-center flex-shrink-0 z-10">
                  {i + 1}
                </div>

                {/* Card */}
                <div className="flex-1 lg:w-full lg:mt-4 p-4 rounded-xl bg-kf-surface border border-white/[0.06] text-left lg:text-center">
                  <p className="font-display font-semibold text-base text-kf-text-primary mb-1">{s.title}</p>
                  <p className="text-sm text-kf-text-secondary">{s.desc}</p>
                </div>

                {/* Desktop arrow */}
                {i < steps.length - 1 && (
                  <svg className="hidden lg:block w-4 h-4 text-kf-cyan/30 mt-6 mx-auto" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 3l5 5-5 5V3z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
