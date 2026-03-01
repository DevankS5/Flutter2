"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/shared/Badge";

const phoneColors = [
  "from-blue-100 to-sky-50",
  "from-indigo-100 to-blue-50",
  "from-sky-100 to-cyan-50",
  "from-blue-100 to-violet-50",
  "from-cyan-100 to-blue-50",
];

const appNames = ["Atoon", "FinTrack", "MediConnect", "LocalRide", "EduVerse"];
const appCategories = ["Music", "FinTech", "HealthTech", "Transport", "EdTech"];
const mockupImages = [
  "/images/mockup-atoon.png",
  "/images/mockup-fintrack.png",
  "/images/mockup-mediconnect.png",
  "/images/mockup-localride.png",
  "/images/mockup-eduverse.png",
];

// Headline animation is now handled via CSS (.animate-hero-line-*) so the LCP
// element is visible on first paint — before JS hydrates.

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center"
    >
      {/* Radial overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(219, 234, 254, 0.3) 0%, transparent 70%)"
      }} />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-12 text-center overflow-x-hidden">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center mb-8"
        >
          <Badge>✦ Flutter Development Agency</Badge>
        </motion.div>

        {/* Main Headline — CSS animation: text is visible on first paint (no opacity:0 block) */}
        <h1 className="font-extrabold leading-[1.05] tracking-[-0.02em] text-[clamp(1.35rem,5.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-7xl mb-6 w-full">
          <span className="block text-slate-900 animate-hero-line-1">
            STOP PLANNING.
          </span>
          <span className="block gradient-text-hero animate-hero-line-2">
            START LAUNCHING.
          </span>
          <span className="block text-slate-900 animate-hero-line-3">
            WE BUILD APPS THAT SHIP.
          </span>
        </h1>

        {/* Sub-headline — LCP element: opacity:1 always, only translates on load */}
        <p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed mb-10 animate-hero-sub">
          We craft high-performance Flutter applications that help startups and enterprises
          move faster, launch sooner, and grow smarter.
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="cta-gradient text-white rounded-full px-8 py-4 font-semibold text-base flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.25)] shadow-xl hover:shadow-blue-500/40 transition-shadow"
          >
            GET A FREE QUOTE
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("projects")}
            className="glass-light text-slate-700 rounded-full px-8 py-4 font-semibold text-base border border-blue-200/50 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300/50 hover:text-blue-700 transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            VIEW OUR WORK
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 flex-wrap mb-14"
        >
          {/* Avatars */}
          <div className="hidden -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center text-xs text-white font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">Trusted by <span className="font-semibold text-slate-700">50+ clients</span> worldwide</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm font-semibold text-blue-600 ml-1">4.9/5</span>
          </div>
        </motion.div>

        {/* Phone Mockup Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-2 sm:gap-4 justify-center overflow-x-auto pb-4 w-full max-w-4xl mx-auto snap-x snap-mandatory px-2"
        >
          {phoneColors.map((gradient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="flex-shrink-0 w-[72px] xs:w-[85px] sm:w-[130px] md:w-[160px] snap-center"
            >
              <div className={`aspect-[9/19] glass-light rounded-[2rem] overflow-hidden border border-blue-100/50 bg-gradient-to-br ${gradient} shadow-xl shadow-blue-500/5 relative`}>
                <Image
                  src={mockupImages[index]}
                  alt={`${appNames[index]} app screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 72px, (max-width: 768px) 85px, 160px"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* App label overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-2 pb-2 pt-4">
                  <p className="text-[9px] font-bold text-white text-center drop-shadow">{appNames[index]}</p>
                  <span className="block text-center text-[8px] text-white/80 font-medium">{appCategories[index]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
