import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { AmbientMeshWrapper } from "@/components/effects/AmbientMeshWrapper";

export default function Home() {
  return (
    <>
      {/* Fixed ambient WebGL background */}
      <AmbientMeshWrapper speed={0.6} opacity={0.2} />

      {/* Page content */}
      <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden w-full max-w-full">
        <SiteHeader />

        <main className="flex-1">
          <Hero />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <TrustedBy />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <Services />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <WhyUs />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <HowItWorks />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <Projects />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <Testimonials />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <Pricing />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <FAQ />
          <div className="section-divider relative z-10 mx-8 opacity-30" />

          <ContactCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
