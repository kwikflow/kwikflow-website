'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function goTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }

function Particles() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = ref.current;
    if (!c) return;
    for (let i = 0; i < 50; i++) {
      const d = document.createElement('div');
      const size = 2 + Math.random() * 2;
      d.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:rgba(0,200,232,0.4);border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${0.1+Math.random()*0.4};animation:particleFloat ${15+Math.random()*15}s ease-in-out infinite;animation-delay:${-Math.random()*20}s;`;
      c.appendChild(d);
    }
  }, []);
  return <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" />;
}

function TextReveal({ text, className, style, cyan }: { text: string; className?: string; style?: React.CSSProperties; cyan?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (ref.current) ref.current.style.opacity = '1';
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll('.reveal-letter').forEach((l, i) => {
          (l as HTMLElement).style.animationDelay = `${i * 0.02}s`;
          (l as HTMLElement).classList.add('animate');
        });
        obs.unobserve(el);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <span ref={ref} className={className} style={style}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="reveal-letter inline-block opacity-0 translate-y-5 [&.animate]:opacity-100 [&.animate]:translate-y-0 transition-all duration-500"
          style={cyan ? { color: '#00C8E8', textShadow: '0 0 80px rgba(0,200,232,0.2)' } : {}}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section ref={ref} id="hero" className="section-wrap relative min-h-screen overflow-hidden bg-kf-bg flex items-center justify-center">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80" alt="Vakman aan het werk" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'rgba(4,8,18,0.88)' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,200,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(27,42,94,0.4) 0%, transparent 70%)' }} />
        <div className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full animate-float-1" style={{ background: 'radial-gradient(circle, rgba(0,200,232,0.08) 0%, transparent 70%)', top: '-150px', left: '-150px' }} />
        <div className="absolute w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full animate-float-2" style={{ background: 'radial-gradient(circle, rgba(27,42,94,0.3) 0%, transparent 70%)', bottom: '-100px', right: '-100px' }} />
      </div>
      <Particles />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-24 pb-28 sm:pb-24">
        <div className={`flex justify-center mb-8 transition-all duration-700 ${anim}`}>
          <span className="text-xs font-medium tracking-widest uppercase text-kf-cyan px-4 py-1.5 rounded-full" style={{ background: 'rgba(0,200,232,0.1)', border: '1px solid rgba(0,200,232,0.3)' }}>
            AI Automatisering voor Vakmensen
          </span>
        </div>

        <h1 className="font-display font-extrabold tracking-tighter text-kf-text-primary mb-8" style={{ fontSize: 'clamp(40px, 7vw, 90px)', lineHeight: 1.05 }}>
          <TextReveal text="Nooit meer een" /><br />
          <TextReveal text="gemiste opdracht." cyan />
        </h1>

        <p className={`text-base sm:text-lg text-kf-text-secondary max-w-[560px] mx-auto mb-12 leading-relaxed text-center transition-all duration-700 ${anim}`} style={{ transitionDelay: '400ms' }}>
          Wij automatiseren jouw bereikbaarheid volledig. AI neemt de telefoon op, beantwoordt berichten en haalt leads binnen — terwijl jij gewoon werkt.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 transition-all duration-700 ${anim}`} style={{ transitionDelay: '600ms' }}>
          <button onClick={() => goTo('contact')} className="btn-primary w-full sm:w-auto">Start gratis vandaag →</button>
          <button onClick={() => goTo('services')} className="btn-ghost w-full sm:w-auto">Bekijk wat wij doen</button>
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center transition-all duration-700 ${anim}`} style={{ transitionDelay: '800ms' }}>
          {[{ num: '382', text: 'oproepen gevangen' }, { num: '€12.600', text: 'extra omzet' }, { num: '38', text: 'reviews in 90 dagen' }].map((s, i) => (
            <div key={i} className="px-5 py-2 rounded-full text-sm text-kf-text-secondary" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-white font-bold">{s.num}</span> {s.text}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-kf-cyan/40 relative overflow-hidden">
          <div className="w-full h-2 bg-kf-cyan rounded-full animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
