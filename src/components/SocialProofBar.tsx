'use client';

export function SocialProofBar() {
  const trades = [
    { icon: '🔧', label: 'Loodgieter' },
    { icon: '⚡', label: 'Elektricien' },
    { icon: '🏠', label: 'Dakdekker' },
    { icon: '🧹', label: 'Schoonmaak' },
    { icon: '🎨', label: 'Schilder' },
    { icon: '🔩', label: 'Garage' },
    { icon: '🌿', label: 'Hovenier' },
  ];

  // Duplicate for infinite scroll
  const items = [...trades, ...trades];

  return (
    <section
      className="w-full py-6 sm:py-8 overflow-hidden"
      style={{ background: '#0A1628', borderTop: '1px solid rgba(0,200,232,0.1)', borderBottom: '1px solid rgba(0,200,232,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[13px] font-medium uppercase tracking-widest text-kf-text-muted mb-5">
          Vertrouwd door vakmensen in heel Nederland
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="ticker-track flex gap-8 sm:gap-12 w-max">
          {items.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
              <span className="text-[28px]">{t.icon}</span>
              <span className="text-[13px] font-medium text-kf-text-secondary whitespace-nowrap">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
