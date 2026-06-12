'use client'
import { useState } from 'react'
import Script from 'next/script'

const services = ['Gratis website','Gratis AI widget','AI op WhatsApp','AI voice agent','WhatsApp broadcasts','Review automatie','Starter €149','Groei €297','Pro €597']

export function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', branche:'', message:'', services:[] as string[] })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [showForm, setShowForm] = useState(false)

  const toggle = (s:string) => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x=>x!==s) : [...f.services,s] }))

  const submit = async (e:React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-[10px] border border-input bg-white px-4 py-3.5 text-base text-heading outline-none transition-colors placeholder:text-muted focus:border-brand'

  return (
    <section id="contact" className="section section-alt">
      <div className="container-kf max-w-[800px]">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3">Contact</span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">Plan je gratis strategiegesprek</h2>
          <p className="mt-3 text-base text-body">30 minuten. Geen verkooppraatje. Je loopt weg met inzicht, ook als je niks afneemt.</p>
        </div>

        {/* Calendly Embed */}
        <div className="mb-9 overflow-hidden rounded-3xl border border-hairline bg-white shadow-[var(--shadow-md)]">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/kwikflow-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=16181d&primary_color=00c8e8"
            style={{ width: '100%', minWidth: 0, height: '700px' }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>

        {/* Collapsible alternative form */}
        <div className="mb-5 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-lg px-4 py-2 text-[0.95rem] text-body transition-colors hover:text-brand-text"
            aria-expanded={showForm}
          >
            Liever eerst een bericht sturen? {showForm ? '↑' : '↓'}
          </button>
        </div>

        <div className="overflow-hidden transition-[max-height] duration-500" style={{ maxHeight: showForm ? '1300px' : '0' }}>
          <div className="grid gap-10 pb-5 pt-2 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-heading">Direct contact</h3>
              <p className="mb-5 text-sm leading-relaxed text-body">Stuur een berichtje via WhatsApp of mail ons. We reageren binnen 4 uur op werkdagen.</p>
              <div className="flex flex-col gap-3.5">
                {[
                  { icon: '📧', node: <span className="text-body">info@kwikflow.nl</span> },
                  { icon: '📱', node: <span className="text-body">+31 6 13979782</span> },
                  { icon: '💬', node: <a href="https://wa.me/31613979782" className="font-medium text-brand-text hover:underline">WhatsApp ons direct →</a> },
                  { icon: '⏰', node: <span className="text-body">Reactie binnen 4 uur op werkdagen</span> },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-base" style={{ background: 'var(--brand-soft)' }}>{row.icon}</span>
                    {row.node}
                  </div>
                ))}
              </div>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-hairline bg-white p-14 text-center shadow-[var(--shadow-sm)]">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="text-xl font-semibold text-heading">Bedankt!</h3>
                <p className="mt-2 text-sm text-body">We nemen binnen 4 uur contact met je op.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-2 gap-3.5">
                  <input required aria-label="Naam" placeholder="Naam *" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} className={inputClass}/>
                  <input aria-label="Bedrijf" placeholder="Bedrijf" value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} className={inputClass}/>
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  <input required aria-label="Telefoon" type="tel" placeholder="Telefoon *" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} className={inputClass}/>
                  <input required aria-label="E-mail" type="email" placeholder="E-mail *" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} className={inputClass}/>
                </div>
                <select aria-label="Branche" value={form.branche} onChange={e=>setForm(f=>({...f,branche:e.target.value}))} className={inputClass} style={{ appearance:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center', paddingRight:'36px' }}>
                  <option value="">Kies je branche</option>
                  {['Loodgieter','Elektricien','Dakdekker','Schoonmaakbedrijf','Klusbedrijf','Installateur','Schilder','Timmerman','Overig'].map(b=>(
                    <option key={b} value={b.toLowerCase()}>{b}</option>
                  ))}
                </select>
                <textarea placeholder="Wat is je grootste uitdaging?" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} className={inputClass} style={{ minHeight:'90px', resize:'vertical' }}/>
                <div>
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Ik ben geïnteresseerd in:</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map(s => (
                      <button
                        type="button"
                        key={s}
                        onClick={()=>toggle(s)}
                        className={
                          'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ' +
                          (form.services.includes(s)
                            ? 'border-brand bg-brand text-white'
                            : 'border-hairline bg-white text-body hover:border-hairline-strong')
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={status==='loading'} className="btn btn-primary text-base" style={{ opacity: status==='loading' ? 0.6 : 1 }}>
                  {status==='loading' ? 'Versturen...' : 'Verstuur bericht →'}
                </button>
                {status==='error' && <p className="text-center text-sm text-red-500">Er ging iets mis. Probeer het opnieuw of mail info@kwikflow.nl</p>}
                <p className="text-center text-xs text-muted">Reactie binnen 4 uur op werkdagen.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
