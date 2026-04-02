'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
    <section ref={ref} id="pricing" className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Pakketten</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Of kies een bundel en bespaar
          </h2>
          <p className={`text-base sm:text-lg text-kf-text-secondary transition-all duration-700 ${anim}`}>
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-kf-cyan text-kf-bg text-[11px] font-bold px-3 py-1 rounded-full z-20 whitespace-nowrap badge-pulse">
                  {b.savings}
                </div>
              )}

              <div
                className={`rounded-[20px] p-8 sm:p-10 h-full flex flex-col ${b.popular ? 'gradient-border-wrap' : ''}`}
                style={{
                  background: b.popular ? 'linear-gradient(135deg, #0F1F3D, #1B2A5E)' : '#0A1628',
                  border: b.popular ? '1px solid #00C8E8' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: b.popular ? '0 0 60px rgba(0,200,232,0.2)' : 'none',
                }}
              >
                <p className="font-display font-bold text-sm uppercase tracking-widest text-kf-text-secondary mb-4">{b.name}</p>
                <div className="mb-2">
                  <span className="font-display font-extrabold text-5xl text-kf-text-primary">{b.price}</span>
                  <span className="text-lg text-kf-text-secondary ml-1">/maand</span>
                </div>
                {!b.popular && <span className="inline-block text-xs font-semibold text-emerald-400 mb-6">{b.savings}</span>}
                {b.popular && <div className="mb-6" />}

                <ul className="space-y-3 mb-8 flex-1">
                  {b.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-kf-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-kf-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => goContactWith(`Ik wil het ${b.name} pakket (${b.price}/maand)`)}
                  className={`w-full min-h-[52px] rounded-[10px] font-display font-bold transition-all duration-200 ${b.popular ? 'btn-primary' : 'text-kf-cyan'}`}
                  style={!b.popular ? { border: '1px solid rgba(0,200,232,0.3)', background: 'transparent' } : {}}
                  onMouseEnter={(e) => { if (!b.popular) { e.currentTarget.style.background = '#00C8E8'; e.currentTarget.style.color = '#040812'; } }}
                  onMouseLeave={(e) => { if (!b.popular) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00C8E8'; } }}
                >
                  Kies {b.name.toLowerCase()}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-kf-text-muted text-sm mt-12 sm:mt-14">
          Wil je meer? Voeg losse diensten toe aan elke bundel.
        </p>
      </div>
    </section>
  );
}
