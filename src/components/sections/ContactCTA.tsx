"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal, StaggerContainer, fadeUpChild } from "@/components/effects/ScrollReveal";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section id="contact" className="relative z-10 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Big CTA Block */}
        <ScrollReveal>
          <div
            className="rounded-[2rem] overflow-hidden relative text-center py-16 px-6 md:px-12 mb-16"
            style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)" }}
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/20 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-300/20 translate-y-1/3 -translate-x-1/4" />

            {/* CTA content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Let&apos;s Build Something<br />Amazing Together
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed">
                  Ready to bring your app idea to life? Book a free consultation with our experts.
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-blue-600 rounded-full w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 font-bold text-sm sm:text-lg shadow-xl shadow-white/20 hover:shadow-2xl transition-all"
                >
                  BOOK FREE CONSULTATION
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* Steps strip */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6">
                  {[
                    "01: Share your app idea",
                    "02: Get a free assessment",
                    "03: Receive a tailored plan",
                  ].map((step, i) => (
                    <span key={i} className="text-blue-100/80 text-sm font-medium">
                      {step}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Info Grid */}
        <div>
          <ScrollReveal className="text-center mb-8">
            <Badge className="mb-3">Get In Touch</Badge>
            <h3 className="text-2xl font-bold text-slate-900">Reach Out Directly</h3>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.08}
          >
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.id}
                  href={info.href}
                  variants={fadeUpChild}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-light rounded-2xl p-6 text-center border border-blue-100/40 card-hover group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                    <Icon className={`w-6 h-6 ${info.iconColor}`} />
                  </div>
                  <p className="text-xs font-semibold tracking-wide uppercase text-slate-400 mb-1">
                    {info.label}
                  </p>
                  <p className="text-slate-700 font-medium text-sm">{info.value}</p>
                </motion.a>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
