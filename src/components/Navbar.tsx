'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const links = [
    { label: 'Diensten', id: 'services' },
    { label: 'Prijzen', id: 'pricing' },
    { label: 'Resultaten', id: 'results' },
    { label: 'Over ons', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const progress = mounted ? Math.min(scrollY / 100, 1) : 0;
  const blur = progress * 20;
  const bg = `rgba(4,8,18,${0.1 + progress * 0.8})`;

  return (
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
        {/* Logo */}
        <button onClick={() => go('hero')} className="flex items-center gap-1.5 flex-shrink-0">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
          <span className="text-xl font-bold text-foreground font-display tracking-tight">Kwik</span>
          <span className="text-xl font-bold text-primary font-display tracking-tight">flow</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Button key={l.id} variant="ghost" size="sm" onClick={() => go(l.id)} className="text-muted-foreground hover:text-foreground hover:bg-transparent">
              {l.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Button variant="outline" size="sm" onClick={() => go('contact')} className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Start gratis
          </Button>

          {/* Mobile hamburger using Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden text-foreground" aria-label="Menu" />}>
              <MenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-full sm:max-w-sm flex flex-col">
              <SheetTitle className="sr-only">Navigatie menu</SheetTitle>
              <div className="flex items-center gap-1.5 px-4 pt-2">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                <span className="text-xl font-bold text-foreground font-display">Kwik</span>
                <span className="text-xl font-bold text-primary font-display">flow</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                {links.map((l) => (
                  <Button key={l.id} variant="ghost" size="lg" onClick={() => go(l.id)} className="text-xl font-display font-bold text-foreground hover:text-primary w-full justify-center">
                    {l.label}
                  </Button>
                ))}
                <Button size="lg" onClick={() => go('contact')} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-10 shadow-[0_0_40px_rgba(0,200,232,0.4)]">
                  Start gratis
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
