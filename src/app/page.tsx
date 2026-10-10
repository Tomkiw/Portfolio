import type { Metadata } from "next";
import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";
import { EffectsLayer } from "@/features/effects/EffectsLayer";
import { Hero } from "@/features/hero/Hero";
import { Footer } from "@/features/layout/Footer";
import { Nav } from "@/features/layout/Nav";
import { Marquee } from "@/features/marquee/Marquee";
import { Portfolio } from "@/features/portfolio/Portfolio";
import { Process } from "@/features/process/Process";
import { Services } from "@/features/services/Services";
import { StackSection } from "@/features/stack/StackSection";
import { Stats } from "@/features/stats/Stats";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { isSectionVisible } from "@/lib/content/sections";

// Title and description come from the layout defaults. If the order of the numbered
// sections changes here, change SECTION_ORDER in lib/content/sections.ts too.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        {isSectionVisible("testimonials") ? <Testimonials /> : null}
        <Process />
        <StackSection />
        <Contact />
      </main>
      <Footer />
      <EffectsLayer />
    </>
  );
}
