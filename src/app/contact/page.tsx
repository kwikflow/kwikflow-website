import type { Metadata } from 'next'
import KwikflowNavbar from '@/components/KwikflowNavbar'
import { ContactSection } from '@/components/blocks/contact'
import { Footer } from '@/components/blocks/footer'

export const metadata: Metadata = {
  title: 'Contact — Kwikflow',
  description:
    'Neem contact op met Kwikflow. Plan een gratis strategiegesprek, app of bel ons direct — we reageren binnen 4 uur op werkdagen.',
}

export default function ContactPage() {
  return (
    <>
      <KwikflowNavbar />
      <main className="pt-[72px]">
        <section className="section pb-0">
          <div className="container-kf max-w-[800px] text-center">
            <span className="eyebrow mb-3">Contact</span>
            <h1 className="text-[clamp(1.9rem,4.5vw,3rem)] font-bold">Neem contact op</h1>
            <p className="mx-auto mt-4 max-w-[560px] text-base text-body">
              Plan een gratis strategiegesprek, of bereik ons direct via WhatsApp,
              telefoon of mail. We reageren binnen 4 uur op werkdagen.
            </p>

            <div className="mx-auto mt-8 max-w-[520px] rounded-2xl border border-hairline bg-white p-6 text-left text-sm shadow-[var(--shadow-sm)]">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted">Bedrijfsgegevens</h2>
              <dl className="flex flex-col gap-2 text-body">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Bedrijf</dt>
                  <dd className="text-right font-medium text-heading">Kwikflow, handelsnaam van Gone Clear</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">KvK</dt>
                  <dd className="text-right font-medium text-heading">90132521</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">E-mail</dt>
                  <dd className="text-right"><a href="mailto:info@kwikflow.nl" className="font-medium text-brand-text hover:underline">info@kwikflow.nl</a></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Telefoon</dt>
                  <dd className="text-right"><a href="tel:+31613979782" className="font-medium text-brand-text hover:underline">+31 6 13979782</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
