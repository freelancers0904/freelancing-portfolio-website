import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import WhoThisIsFor from '@/components/WhoThisIsFor';
import Stats from '@/components/Stats';
import Solutions from '@/components/Solutions';
import WhyUs from '@/components/WhyUs';
import AIFeatures from '@/components/AIFeatures';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
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
      {/* <WhoThisIsFor /> */}
      <Stats />
      <Solutions />
      <WhyUs />
      <AIFeatures />
      <Portfolio />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
};

export default Index;
