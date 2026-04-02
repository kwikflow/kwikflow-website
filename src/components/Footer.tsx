'use client';

import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const links = [
    { label: 'Diensten', id: 'diensten' },
    { label: 'Prijzen', id: 'prijzen' },
    { label: 'Resultaten', id: 'resultaten' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/kwikflow/', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575521979134', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kwikflow', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  ];

  return (
    <footer className="w-full pt-14 sm:pt-16 pb-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          <div>
            <div className="flex items-center gap-1.5 mb-3 justify-center md:justify-start">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
              <span className="text-lg font-bold text-foreground font-display">Kwik</span>
              <span className="text-lg font-bold text-primary font-display">flow</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">AI automatisering voor vakmensen</p>
            <p className="text-xs text-muted-foreground/60 mb-4">Nederland & België</p>
            <div className="flex gap-2 justify-center md:justify-start">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-4">Navigatie</h4>
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.id}>
                  <Button variant="ghost" size="sm" onClick={() => go(l.id)} className="text-muted-foreground hover:text-primary hover:bg-transparent justify-start md:justify-start w-full md:w-auto">
                    {l.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>info@kwikflow.nl</p>
              <p>+31 (0) 85 303 0700</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border">
          <p className="text-xs text-muted-foreground/60">© {year} Kwikflow — Alle rechten voorbehouden</p>
          <div className="flex gap-4 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
