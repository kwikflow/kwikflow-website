'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function PhoneOffIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 004.73.89 2 2 0 012 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function MessageXIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <line x1="9" y1="8" x2="15" y2="14" />
      <line x1="15" y1="8" x2="9" y2="14" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function ProblemSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const problems = [
    {
      icon: <PhoneOffIcon />,
      title: 'Telefoon gaat, jij neemt niet op',
      desc: 'Je zit midden in een klus. Telefoon gaat. Je neemt niet op. Klant belt drie nummers. Nummer twee pikt jouw opdracht.',
    },
    {
      icon: <MessageXIcon />,
      title: 'Berichten blijven onbeantwoord',
      desc: 'Klanten appen je via WhatsApp, Instagram en Facebook. Niemand reageert. Lead verloren. Klant gefrustreerd.',
    },
    {
      icon: <EyeOffIcon />,
      title: 'Online onzichtbaar',
      desc: 'Klanten zoeken op Google naar een vakman. Ze vinden jou niet. Geen website, geen reviews, geen klus.',
    },
  ];

  return (
    <section ref={ref} className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Het probleem</p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-5 transition-all duration-700 ${anim}`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', transitionDelay: '100ms' }}
          >
            Herken jij dit?
          </h2>
          <p className={`text-base sm:text-lg text-kf-text-secondary max-w-[480px] mx-auto transition-all duration-700 ${anim}`} style={{ transitionDelay: '200ms' }}>
            Elke dag verliezen vakmensen klussen aan concurrenten die wél opnemen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`glass-card glass-card-red p-8 sm:p-10 transition-all duration-700 ${anim}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-red-400 mb-6"
                style={{ background: 'rgba(255,50,50,0.08)' }}
              >
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-kf-text-primary mb-3">{p.title}</h3>
              <p className="text-[15px] text-kf-text-secondary leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
