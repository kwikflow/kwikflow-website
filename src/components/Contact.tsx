'use client';

import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function Confetti() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#00C8E8', '#1B2A5E', '#ffffff'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      const s = 4 + Math.random() * 6;
      const angle = Math.random() * 360;
      const dist = 60 + Math.random() * 120;
      const tx = Math.cos(angle * Math.PI / 180) * dist;
      const ty = Math.sin(angle * Math.PI / 180) * dist - 80;
      el.style.cssText = `position:absolute;left:50%;top:50%;width:${s}px;height:${s}px;background:${colors[i % 3]};border-radius:${Math.random()>0.5?'50%':'2px'};opacity:0;animation:confettiPop 1.5s ease forwards;animation-delay:${i*30}ms;--tx:${tx}px;--ty:${ty}px;`;
      el.style.animationName = 'none';
      // Set custom keyframes via inline
      el.animate([
        { transform: 'translate(0,0) scale(0)', opacity: 1 },
        { transform: `translate(${tx}px,${ty}px) scale(1) rotate(${Math.random()*360}deg)`, opacity: 0 },
      ], { duration: 1500, easing: 'cubic-bezier(0,.8,.5,1)', fill: 'forwards', delay: i * 30 });
      c.appendChild(el);
    }
    const t = setTimeout(() => { if (c) c.innerHTML = ''; }, 2000);
    return () => clearTimeout(t);
  }, []);
  return <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-10" />;
}

export function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const anim = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showConfetti, setShowConfetti] = useState(false);

  // Allow external pre-fill via window event
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.message) setForm(f => ({ ...f, message: e.detail.message }));
    };
    window.addEventListener('prefill-contact' as string, handler as EventListener);
    return () => window.removeEventListener('prefill-contact' as string, handler as EventListener);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Naam is verplicht';
    if (!form.company.trim()) e.company = 'Bedrijf is verplicht';
    if (!form.phone.trim()) e.phone = 'Telefoonnummer is verplicht';
    else if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) e.phone = 'Ongeldig telefoonnummer';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setShowConfetti(true);
      setForm({ name: '', company: '', phone: '', message: '' });
      setTimeout(() => setShowConfetti(false), 2500);
    } catch {
      setStatus('error');
    }
  };

  const Field = ({ name, label, type = 'text', textarea }: { name: string; label: string; type?: string; textarea?: boolean }) => {
    const Tag = textarea ? 'textarea' : 'input';
    return (
      <div className="float-field">
        <Tag
          name={name}
          type={textarea ? undefined : type}
          value={form[name as keyof typeof form]}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setForm(f => ({ ...f, [name]: e.target.value })); if (errors[name]) setErrors(er => { const n = { ...er }; delete n[name]; return n; }); }}
          placeholder=" "
          rows={textarea ? 4 : undefined}
          className={errors[name] ? '!border-red-400' : ''}
        />
        <label>{label}</label>
        {errors[name] && <p className="field-error">{errors[name]}</p>}
      </div>
    );
  };

  return (
    <section ref={ref} id="contact" className="section-wrap bg-kf-bg py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Contact</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-kf-text-primary mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Vraag een gratis demo aan
          </h2>
          <p className={`text-base text-kf-text-secondary transition-all duration-700 ${anim}`}>
            We reageren binnen 24 uur. Geen verkooppraatje. Gewoon een eerlijk gesprek.
          </p>
        </div>

        <div
          className={`relative max-w-[600px] mx-auto rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-700 ${anim}`}
          style={{ background: '#0A1628', border: '1px solid rgba(0,200,232,0.2)', boxShadow: '0 0 80px rgba(0,200,232,0.1)', transitionDelay: '200ms' }}
        >
          {showConfetti && <Confetti />}

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-display font-bold text-xl text-kf-text-primary mb-2">Bedankt!</h3>
              <p className="text-kf-text-secondary">We nemen binnen 24 uur contact met je op.</p>
              <button onClick={() => setStatus('idle')} className="btn-primary mt-6">Nog een bericht sturen</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <Field name="name" label="Naam" />
              <Field name="company" label="Bedrijf" />
              <Field name="phone" label="Telefoonnummer" type="tel" />
              <Field name="message" label="Bericht (optioneel)" textarea />

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Er ging iets mis. Probeer het opnieuw of mail ons direct op info@kwikflow.nl
                </p>
              )}

              <button
                type="submit"
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ height: '56px', fontSize: '16px' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                    Versturen...
                  </span>
                ) : 'Verstuur aanvraag →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
