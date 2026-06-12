export function Garantie() {
  return (
    <section id="garantie" className="section">
      <div className="container-kf">
        <div className="relative mx-auto max-w-[720px] overflow-hidden rounded-3xl border-2 border-brand bg-white p-9 text-center shadow-[var(--shadow-glow)] md:p-14">
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--brand-softer), transparent 60%)' }} />
          <div className="relative mb-4 text-5xl">🛡️</div>
          <h2 className="relative mb-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold">7-dagen-live-garantie.</h2>
          <p className="relative text-base leading-relaxed text-body">Sta je na 7 werkdagen niet live? Eerste maand gratis. Punt.</p>
          <p className="relative mt-4 text-base leading-relaxed text-body">We zijn zelf ondernemer. We snappen dat beloftes alleen tellen als ze hard zijn.</p>
        </div>
      </div>
    </section>
  )
}
