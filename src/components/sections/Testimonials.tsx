"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-bold text-blue-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const iv = setInterval(() => setActive((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(iv);
  }, [isPaused]);

  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative z-10 py-20 md:py-28"
      style={{ background: "linear-gradient(to bottom, rgba(248,250,252,0.6), white)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Real stories from businesses we&apos;ve helped build, launch, and grow.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-light-enhanced rounded-2xl p-8 border border-blue-100/40 relative overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "ring-2 ring-blue-400/60 shadow-xl shadow-blue-500/10"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {/* Decorative quote */}
                <div className="absolute top-4 right-6 text-blue-100 text-7xl font-serif leading-none select-none">
                  &ldquo;
                </div>

                <p className="text-slate-700 italic leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <StarRating rating={t.rating} />

                <div className="flex items-center gap-3 mt-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center ring-2 ring-blue-200 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} — {t.company} {t.note && `(${t.note})`}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-light border border-blue-100/50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    active === i ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-blue-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-light border border-blue-100/50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
