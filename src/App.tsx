import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Timeline } from "@/components/site/Timeline";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";

function App() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Timeline />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppCTA />
    </main>
  );
}

export default App;