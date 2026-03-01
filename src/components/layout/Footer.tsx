"use client";

import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Flutter Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Backend Dev", href: "#services" },
    { label: "App Maintenance", href: "#services" },
    { label: "Store Deployment", href: "#services" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.159 10.831l-8.73 8.73 3.7 3.7 8.737-8.737-3.707-3.693z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white">FlutterByte</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Crafting exceptional mobile experiences with Flutter. We transform your ideas into elegant, high-performance applications.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow us on ${label}`}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">📱 +91 8449308034</li>
              <li>
                <a href="mailto:hello@flutterbyte.dev" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  ✉ flutterbyte.in@gmail.com
                </a>
              </li>
              <li className="text-sm text-slate-400">📍 Working remotely worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {year} FlutterByte. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
