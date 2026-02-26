"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { StaggerContainer, fadeUpChild } from "@/components/effects/ScrollReveal";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-20 md:py-28"
      style={{ background: "linear-gradient(to bottom, rgba(248,250,252,0.6), white)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge className="mb-4">What We Do</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Services We Provide
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We build robust apps through collaborative development that turns your vision into reality.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          stagger={0.1}
          delayChildren={0.1}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpChild}
                className="glass-light rounded-2xl overflow-hidden border border-blue-100/40 shadow-lg shadow-blue-500/[0.03] card-hover flex flex-col"
              >
                {/* Illustration area */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute w-32 h-32 rounded-full bg-blue-200/30 -top-10 -right-10" />
                  <div className="absolute w-20 h-20 rounded-full bg-blue-100/30 bottom-0 left-4" />
                  <div className="w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center relative z-10">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-500 mb-2">
                    {service.label}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <button className="mt-4 flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-700 group transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
