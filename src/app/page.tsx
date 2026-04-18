import KwikflowNavbar from '@/components/KwikflowNavbar'
import { KwikflowHero } from '@/components/ui/cinematic-landing-hero'
import { Werkwijze } from '@/components/blocks/werkwijze'
import { VideoDemo } from '@/components/blocks/video-demo'
import { Features } from '@/components/blocks/features'
import { Integraties } from '@/components/blocks/integraties'
import { PricingSection } from '@/components/blocks/pricing'
import { CaseStudies } from '@/components/blocks/case-studies'
import { Team } from '@/components/blocks/team'
import { FAQ } from '@/components/blocks/faq'
import { Garantie } from '@/components/blocks/garantie'
import { ContactSection as Contact } from '@/components/blocks/contact'
import { Footer } from '@/components/blocks/footer'

export default function Home() {
  return (
    <>
      <KwikflowNavbar />
      <KwikflowHero metricValue={382} />
      <Werkwijze />
      <VideoDemo />
      <Features />
      <Integraties />
      <PricingSection />
      <CaseStudies />
      <Team />
      <FAQ />
      <Garantie />
      <Contact />
      <Footer />
    </>
  )
}
