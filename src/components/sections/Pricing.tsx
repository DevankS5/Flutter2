"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { PRICING_PLANS } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Pricing() {
  const [tab, setTab] = useState<"new" | "maintenance">("new");

  const plans = PRICING_PLANS[tab];

  return (
    <section id="pricing" className="relative z-10 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Clear options to bring your app idea to life, with everything included to launch successfully.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal className="flex justify-center mb-10">
          <div className="glass-light rounded-full p-1 flex gap-1 border border-blue-100/50">
            {["new", "maintenance"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as "new" | "maintenance")}
                className={`rounded-full px-3 sm:px-5 py-2 text-[0.7rem] sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  tab === t
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {t === "new" ? "New App Development" : "App Maintenance"}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative flex flex-col ${
                plan.featured
                  ? "glass-light-enhanced rounded-3xl p-8 ring-2 ring-blue-500 shadow-2xl shadow-blue-500/10"
                  : "glass-light rounded-3xl p-8 border border-blue-100/40 card-hover"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full px-4 py-1 text-xs font-bold tracking-wide shadow-lg shadow-blue-500/25">
                  RECOMMENDED
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-blue-600">
                    ₹{plan.priceINR.toLocaleString("en-IN")}
                  </span>
                  {/* text-slate-600 passes WCAG AA on white/glass (was text-slate-400 ≈ 2.5:1) */}
                  <span className="text-slate-600 text-sm mb-1">{plan.suffix}</span>
                </div>
              </div>

              <div className="border-b border-blue-100/50 mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className={`w-full rounded-full py-3.5 font-semibold text-sm transition-all duration-200 ${
                  plan.featured
                    ? "cta-gradient text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "glass-light text-blue-600 border border-blue-200 hover:bg-blue-50"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
