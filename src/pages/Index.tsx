import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import AIFeatures from '@/components/AIFeatures';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <AIFeatures />
      <Portfolio />
      <Pricing />
      <Process />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
};

export default Index;
