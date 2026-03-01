import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AmbientMeshWrapper } from "@/components/effects/AmbientMeshWrapper";

// Lazy-load sections that are below the fold — each gets its own JS chunk
// This directly tackles Lighthouse items #1 #3 (JS execution & unused JS)
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Pricing = dynamic(() =>
  import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing }))
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ }))
);
const ContactCTA = dynamic(() =>
  import("@/components/sections/ContactCTA").then((m) => ({ default: m.ContactCTA }))
);

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
