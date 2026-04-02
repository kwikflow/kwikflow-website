'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function Counter({ value, prefix = '', suffix = '', duration = 2000 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!elRef.current) return;
    const el = elRef.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number, id: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(value * p));
      if (p < 1) id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [started, value, duration]);

  return <span ref={elRef} className="counter-number">{prefix}{count.toLocaleString('nl-NL')}{suffix}</span>;
}

export function Results() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const cards = [
    {
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      name: 'Marco', role: 'Loodgieter · Rotterdam',
      quote: 'Het systeem nam maandag 4 oproepen op terwijl ik aan het werk was. Dinsdag had ik €840 extra omzet. Ik snap niet dat ik dit zo lang zonder heb gedaan.',
      value: 840, prefix: '€', suffix: '',
    },
    {
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      name: 'Lisa', role: 'Schoonmaakbedrijf · Eindhoven',
      quote: 'Van 6 naar 38 Google reviews in 90 dagen. We staan nu op positie 2 in Google Maps. Onze inbound aanvragen zijn met 65% gestegen.',
      value: 38, prefix: '', suffix: ' reviews',
    },
    {
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      name: 'Stef', role: 'Dakdekker · Groningen',
      quote: 'In de eerste maand 11 extra leads via de chatbot en voice agent. 7 klussen geboekt. €12.600 extra omzet. Dit is de beste investering die ik dit jaar heb gedaan.',
      value: 12600, prefix: '€', suffix: '',
    },
  ];

  return (
    <section ref={ref} id="results" className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Resultaten</p>
          <h2
            className={`font-display font-extrabold tracking-tighter text-kf-text-primary transition-all duration-700 ${anim}`}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Wat onze klanten bereiken
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`glass-card rounded-[20px] p-8 sm:p-10 transition-all duration-700 ${anim}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={c.photo}
                    alt={`Foto van ${c.name}`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base text-kf-text-primary">{c.name}</p>
                  <p className="text-sm text-kf-text-secondary">{c.role}</p>
                </div>
              </div>

              <p className="text-[15px] text-kf-text-secondary leading-[1.7] italic mb-6">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="mb-3">
                <Counter value={c.value} prefix={c.prefix} suffix={c.suffix} />
              </div>

              <div className="text-kf-cyan text-lg tracking-wider">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
