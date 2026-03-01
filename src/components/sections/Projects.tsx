"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  const projectImages: Record<string, string> = {
    atoon: "/images/project-atoon.jpg",
    fintrack: "/images/project-fintrack.jpg",
    mediconnect: "/images/project-mediconnect.jpg",
    localride: "/images/project-localride.jpg",
    eduverse: "/images/project-eduverse.jpg",
    shopease: "/images/project-shopease.jpg",
  };
  return (
    <section id="projects" className="relative z-10 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <Badge className="mb-4">Our Work</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover how our technology-driven solutions empower businesses and turn ideas into real, impactful products.
          </p>
        </ScrollReveal>

        {/* Projects */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                className="rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-blue-500/[0.03] overflow-hidden hover:shadow-xl hover:border-blue-200/40 transition-all duration-500"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 ${!isEven ? "md:[direction:rtl]" : ""}`}>
                  {/* Content */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? "md:[direction:ltr]" : ""}`}>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-500 mb-3">
                      {project.client}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-5 text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Industry Badge */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs font-medium">
                        {project.industry}
                      </span>
                      {project.deliverables.map((d) => (
                        <span key={d} className="bg-slate-100 text-slate-600 rounded-full px-3 py-1 text-xs">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="hidden items-center gap-1.5 text-blue-600 font-semibold text-sm group w-fit hover:text-blue-700 transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Image/Mockup */}
                  <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                      className={`h-full min-h-[280px] relative overflow-hidden flex items-center justify-center ${!projectImages[project.id] ? `bg-gradient-to-br ${project.gradient} p-8` : ""}`}
                    >
                      {projectImages[project.id] ? (
                        /* Real project image */
                        <>
                          <Image
                            src={projectImages[project.id]}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Label on top of image */}
                          <div className="absolute bottom-4 left-4 z-10">
                            <span className={`${project.accentColor} rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm`}>
                              {project.industry}
                            </span>
                          </div>
                        </>
                      ) : (
                        /* Placeholder for projects without image */
                        <>
                          <div className="absolute w-64 h-64 rounded-full bg-white/20 -top-20 -right-20" />
                          <div className="absolute w-40 h-40 rounded-full bg-white/15 bottom-0 left-10" />
                          {/* Phone mockup */}
                          <div className="relative z-10 w-[120px] aspect-[9/19] glass-light-enhanced rounded-[1.5rem] border border-blue-100/50 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                              <div className="w-10 h-10 rounded-2xl bg-white/80 mb-2 flex items-center justify-center shadow-md">
                                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.159 10.831l-8.73 8.73 3.7 3.7 8.737-8.737-3.707-3.693z" />
                                </svg>
                              </div>
                              <p className="text-[9px] font-bold text-slate-700 text-center">{project.client}</p>
                              <div className="w-full mt-3 space-y-1">
                                <div className="h-1 bg-blue-200/60 rounded-full" />
                                <div className="h-1 bg-blue-200/40 rounded-full w-4/5" />
                                <div className="h-1 bg-blue-200/30 rounded-full w-3/5" />
                              </div>
                              <div className="absolute bottom-3 flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                              </div>
                            </div>
                          </div>
                          {/* Label */}
                          <div className="absolute bottom-4 left-4">
                            <span className={`${project.accentColor} rounded-full px-2.5 py-1 text-[10px] font-semibold`}>
                              {project.industry}
                            </span>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
