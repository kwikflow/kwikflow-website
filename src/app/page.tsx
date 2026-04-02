import KwikflowNavbar from '@/components/KwikflowNavbar'
import { KwikflowHero } from '@/components/ui/cinematic-landing-hero'
import { Features } from '@/components/blocks/features'
import { PricingSection } from '@/components/blocks/pricing'
import { Testimonials } from '@/components/blocks/testimonials'
import { ContactSection as Contact } from '@/components/blocks/contact'
import { Footer } from '@/components/blocks/footer'

export default function Home() {
  return (
    <>
      <KwikflowNavbar />
      <KwikflowHero metricValue={382} />
      <Features />
      <PricingSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
