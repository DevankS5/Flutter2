"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      className="relative z-10 py-20 md:py-28"
      style={{ background: "rgba(248,250,252,0.5)" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know before we start building.
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-light rounded-2xl border border-blue-100/40 overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-start justify-between px-6 py-5 text-left group"
                aria-expanded={openId === faq.id}
              >
                <span className={`text-sm md:text-base font-semibold pr-4 transition-colors duration-200 ${
                  openId === faq.id ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                    openId === faq.id ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-blue-50 pt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
