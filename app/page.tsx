import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SocialProofBar from '@/components/sections/SocialProofBar';
import ProblemSection from '@/components/sections/ProblemSection';
import WhyMe from '@/components/sections/WhyMe';
import Process from '@/components/sections/Process';
import FeaturedWork from '@/components/sections/FeaturedWork';
import DemoPreview from '@/components/sections/DemoPreview';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import BeforeAfter from '@/components/sections/BeforeAfter';
import AboutSection from '@/components/sections/AboutSection';
import FinalCTA from '@/components/sections/FinalCTA';
import ContactForm from '@/components/sections/ContactForm';
import ScrollRevealProvider from '@/components/layout/ScrollRevealProvider';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <WhyMe />
        <Process />
        <FeaturedWork />
        <DemoPreview />
        <Stats />
        <BeforeAfter />
        <Testimonials />
        <Pricing />
        <FAQ />
        <AboutSection />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <ScrollRevealProvider />
    </>
  );
}
