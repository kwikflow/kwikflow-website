'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const links = [
    { label: 'Diensten', id: 'services' },
    { label: 'Prijzen', id: 'pricing' },
    { label: 'Resultaten', id: 'results' },
    { label: 'Over ons', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  // Progressive blur: 0 at top, max at 100px scroll
  const progress = mounted ? Math.min(scrollY / 100, 1) : 0;
  const blur = progress * 20;
  const bg = `rgba(4,8,18,${0.1 + progress * 0.8})`;

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-[box-shadow] duration-300"
        style={{
          background: bg,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          borderBottom: '1px solid rgba(0,200,232,0.1)',
          boxShadow: progress > 0.5 ? '0 0 20px rgba(0,200,232,0.05)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <button onClick={() => go('hero')} className="flex items-center gap-1.5 flex-shrink-0">
            <svg className="w-5 h-5 text-kf-cyan" viewBox="0 0 20 20" fill="currentColor"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
            <span className="text-xl font-bold text-kf-text-primary font-display tracking-tight">Kwik</span>
            <span className="text-xl font-bold text-kf-cyan font-display tracking-tight">flow</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-kf-text-secondary hover:text-white transition-colors duration-300 text-sm font-medium min-h-[44px] flex items-center">
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => go('contact')} className="btn-nav hidden sm:inline-flex">Start gratis</button>
            <button onClick={() => setOpen(true)} className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Menu">
              <svg className="w-6 h-6 text-kf-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[100] bg-kf-bg/95 backdrop-blur-2xl flex flex-col animate-slide-down">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-kf-cyan" viewBox="0 0 20 20" fill="currentColor"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
              <span className="text-xl font-bold text-kf-text-primary font-display">Kwik</span>
              <span className="text-xl font-bold text-kf-cyan font-display">flow</span>
            </div>
            <button onClick={() => setOpen(false)} className="min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Sluiten">
              <svg className="w-6 h-6 text-kf-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-2xl font-display font-bold text-kf-text-primary hover:text-kf-cyan transition-colors duration-300 min-h-[44px]">{l.label}</button>
            ))}
            <button onClick={() => go('contact')} className="btn-primary mt-4 px-10">Start gratis</button>
          </div>
        </div>
      )}
    </>
  );
}
