'use client';

import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2Icon, CheckCircle2Icon } from 'lucide-react';

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
      el.style.cssText = `position:absolute;left:50%;top:50%;width:${s}px;height:${s}px;background:${colors[i % 3]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};`;
      el.animate([
        { transform: 'translate(0,0) scale(0)', opacity: 1 },
        { transform: `translate(${tx}px,${ty}px) scale(1) rotate(${Math.random() * 360}deg)`, opacity: 0 },
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => { const n = { ...er }; delete n[name]; return n; });
  };

  return (
    <section ref={ref} id="contact" className="section-wrap bg-background py-20 sm:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className={`section-label mb-4 transition-all duration-700 ${anim}`}>Contact</p>
          <h2 className={`font-display font-extrabold tracking-tighter text-foreground mb-5 transition-all duration-700 ${anim}`} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Vraag een gratis demo aan
          </h2>
          <p className={`text-base text-muted-foreground transition-all duration-700 ${anim}`}>
            We reageren binnen 24 uur. Geen verkooppraatje. Gewoon een eerlijk gesprek.
          </p>
        </div>

        <Card
          className={`relative max-w-[600px] mx-auto rounded-3xl bg-card ring-primary/20 shadow-[0_0_80px_rgba(0,200,232,0.1)] transition-all duration-700 ${anim}`}
          style={{ transitionDelay: '200ms' }}
        >
          <CardContent className="p-6 sm:p-10 md:p-12">
            {showConfetti && <Confetti />}

            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Bedankt!</h3>
                <p className="text-muted-foreground">We nemen binnen 24 uur contact met je op.</p>
                <Button onClick={() => setStatus('idle')} className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  Nog een bericht sturen
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">Naam</Label>
                  <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Jouw naam" className={`h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary ${errors.name ? 'border-destructive' : ''}`} />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-muted-foreground">Bedrijf</Label>
                  <Input id="company" name="company" value={form.company} onChange={onChange} placeholder="Jouw bedrijf" className={`h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary ${errors.company ? 'border-destructive' : ''}`} />
                  {errors.company && <p className="text-destructive text-xs">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-muted-foreground">Telefoonnummer</Label>
                  <Input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="06 12345678" className={`h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary ${errors.phone ? 'border-destructive' : ''}`} />
                  {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">Bericht (optioneel)</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Vertel ons over jouw bedrijf..." rows={4} className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none min-h-[120px]" />
                </div>

                {status === 'error' && (
                  <p className="text-destructive text-sm text-center">
                    Er ging iets mis. Probeer het opnieuw of mail ons direct op info@kwikflow.nl
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base rounded-xl shadow-[0_0_40px_rgba(0,200,232,0.4)] disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2Icon className="w-5 h-5 animate-spin" />
                      Versturen...
                    </span>
                  ) : 'Verstuur aanvraag →'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
