'use client'

export function VideoDemo() {
  return (
    <section id="demo" className="section">
      <div className="container-kf">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="eyebrow mb-3">Zie het in actie</span>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold">Zo pakt jouw AI een binnenkomende klant aan.</h2>
          <p className="mt-4 text-lg text-body">Van binnenkomende oproep naar afspraak in je agenda — in 60 seconden.</p>
        </div>
        <div data-reveal className="mx-auto max-w-[800px]">
          <div
            className="relative h-0 overflow-hidden rounded-2xl border border-hairline bg-subtle shadow-[var(--shadow-lg)]"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/zvIyiPTOjPk?rel=0&modestbranding=1&showinfo=0&autoplay=0"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Kwikflow demo — Zo pakt jouw AI een klant aan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
