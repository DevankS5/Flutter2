"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { HOW_IT_WORKS } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      className="relative z-10 py-20 md:py-28"
      style={{ background: "rgba(248,250,252,0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge className="mb-4">Our Process</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We Build Your App
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Our streamlined process for building high-quality Flutter apps
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-100/60 hidden md:block -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 origin-top hidden md:block -translate-x-1/2 z-10"
          />

          <div className="space-y-8 md:space-y-0">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                  style={{ marginBottom: index < HOW_IT_WORKS.length - 1 ? "2rem" : 0 }}
                >
                  {/* Left content (desktop: even steps) */}
                  <div className={`w-full md:w-[calc(50%-32px)] ${isLeft ? "md:block" : "md:block"}`}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="hidden md:block glass-light rounded-2xl p-6 border border-blue-100/40 card-hover md:mr-8"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-2xl font-extrabold text-blue-600">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                    <div className="timeline-dot dot-pulse" />
                  </div>

                  {/* Right content */}
                  <div className="w-full md:w-[calc(50%-32px)] md:ml-8">
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="hidden md:block glass-light rounded-2xl p-6 border border-blue-100/40 card-hover"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-2xl font-extrabold text-blue-600">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    ) : (
                      <div className="hidden md:block" />
                    )}

                    {/* Mobile: all steps stacked */}
                    <div className="md:hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-light rounded-2xl p-5 border border-blue-100/40"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-xl font-extrabold text-blue-600">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Let&apos;s Transform Your Idea Into Reality
          </h3>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="cta-gradient text-white rounded-full px-8 py-4 font-semibold text-base shadow-[0_0_30px_rgba(59,130,246,0.25)] shadow-xl hover:shadow-blue-500/40 transition-shadow"
          >
            BOOK A FREE CONSULTATION
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}
