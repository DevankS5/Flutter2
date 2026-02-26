"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TRUSTED_LOGOS_ROW1, TRUSTED_LOGOS_ROW2 } from "@/lib/constants";

const tripleLogos = (logos: string[]) => [...logos, ...logos, ...logos];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-[140px] h-[70px] rounded-xl glass-light flex items-center justify-center mx-3 group hover:border-blue-200/60 hover:scale-105 transition-all duration-300 cursor-default">
      <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-500 transition-colors tracking-wide">
        {name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const [pausedRow, setPausedRow] = useState<string | null>(null);

  return (
    <section id="trusted-by" className="relative z-10 py-16 md:py-20">
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <Badge className="mb-3">Social Proof</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Trusted by{" "}
              <span className="gradient-text">industry leaders</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="glass-light text-slate-600 border border-blue-100/60 rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            See Case Studies <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </ScrollReveal>

      {/* Row 1 — Right to Left */}
      <div
        className="overflow-hidden mb-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        onMouseEnter={() => setPausedRow("row1")}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div
          className="flex marquee-right"
          style={{ animationPlayState: pausedRow === "row1" ? "paused" : "running" }}
        >
          {tripleLogos(TRUSTED_LOGOS_ROW1).map((name, i) => (
            <LogoCard key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — Left to Right */}
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        onMouseEnter={() => setPausedRow("row2")}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div
          className="flex marquee-left"
          style={{ animationPlayState: pausedRow === "row2" ? "paused" : "running" }}
        >
          {tripleLogos(TRUSTED_LOGOS_ROW2).map((name, i) => (
            <LogoCard key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
