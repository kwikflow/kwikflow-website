import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProofBar } from '@/components/SocialProofBar';
import { ProblemSection } from '@/components/ProblemSection';
import { Solution } from '@/components/Solution';
import { Services } from '@/components/Services';
import { Bundles } from '@/components/Bundles';
import { FreeStart } from '@/components/FreeStart';
import { Results } from '@/components/Results';
import { AboutUs } from '@/components/AboutUs';
import { HowItWorks } from '@/components/HowItWorks';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { CursorGlow } from '@/components/CursorGlow';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden bg-kf-bg">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <Solution />
      <Services />
      <Bundles />
      <FreeStart />
      <Results />
      <AboutUs />
      <HowItWorks />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
