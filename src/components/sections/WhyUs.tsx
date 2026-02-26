"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal, StaggerContainer, fadeUpChild } from "@/components/effects/ScrollReveal";
import { CountUp } from "@/components/effects/CountUp";
import { WHY_US_STATS, WHY_US_FEATURES } from "@/lib/constants";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative z-10 py-20 md:py-28"
      style={{ background: "radial-gradient(ellipse at center, rgba(219,234,254,0.3) 0%, transparent 70%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <Badge className="mb-4">Why Us</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
            Passionate developers dedicated to{" "}
            <span className="gradient-text">empowering your business</span>
          </h2>
        </ScrollReveal>

        {/* Stats Row */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          stagger={0.1}
        >
          {WHY_US_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUpChild}
              className="glass-light rounded-2xl p-6 text-center border-b-2 border-blue-500"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-blue-600">
                <CountUp
                  target={stat.value}
                  isDecimal={stat.isDecimal}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-slate-500 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Features Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          stagger={0.1}
        >
          {WHY_US_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUpChild}
                className="glass-light rounded-2xl p-6 border border-blue-100/40 card-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
