"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px", threshold: 0 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav className="glass-nav rounded-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.159 10.831l-8.73 8.73 3.7 3.7 8.737-8.737-3.707-3.693z" />
            </svg>
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">Flutter Byte</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                    activeSection === "services" ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn("w-3.5 h-3.5 transition-transform duration-300", servicesOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[380px] glass-light-enhanced rounded-2xl p-4 z-60"
                    >
                      {NAV_SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={service.title}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">{service.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={cn(
                  "px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-blue-600"
                )}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="cta-gradient text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
          >
            Book Free Consultation
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden border border-slate-200 bg-white/80 rounded-lg p-2"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed right-0 top-0 h-full z-50 bg-white/95 backdrop-blur-2xl w-[85vw] max-w-[400px] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.159 10.831l-8.73 8.73 3.7 3.7 8.737-8.737-3.707-3.693z" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900">Flutter Byte</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3 border-b border-slate-100 text-slate-700 text-lg font-medium hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {NAV_SERVICES.map((s) => (
                              <button
                                key={s.title}
                                className="w-full text-left py-2.5 pl-4 text-slate-600 text-sm hover:text-blue-600 transition-colors"
                                onClick={() => { setMobileOpen(false); scrollTo("services"); }}
                              >
                                {s.title}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); setMobileOpen(false); setTimeout(() => scrollTo(link.href), 300); }}
                      className="flex py-3 border-b border-slate-100 text-slate-700 text-lg font-medium hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>

              {/* CTA */}
              <div className="px-6 py-6 border-t border-slate-100">
                <button
                  onClick={() => { setMobileOpen(false); setTimeout(() => scrollTo("contact"), 300); }}
                  className="w-full cta-gradient text-white rounded-full py-3.5 font-semibold text-base shadow-lg shadow-blue-500/25"
                >
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
