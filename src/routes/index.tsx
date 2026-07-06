import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
// import { Projects } from "@/components/site/Projects";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MM Builder | Premium Construction Company" },
      {
        name: "description",
        content:
          "MM Builder offers premium residential, commercial, industrial construction, renovation, and architecture services with 20+ years of trusted craftsmanship.",
      },
      { property: "og:title", content: "MM Builder | Premium Construction Company" },
      {
        property: "og:description",
        content:
          "Premium residential, commercial and industrial construction — engineered to endure generations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
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
