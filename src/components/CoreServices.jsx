"use client";

import { ShoppingCart, Monitor, Globe, Server, Check, ArrowRight, ShieldCheck, Zap, Calculator, BellRing } from "lucide-react";

export default function CoreServices() {
  const coreServices = [
    {
      id: "ecommerce-installment",
      title: "Custom E-Commerce Websites",
      badge: "High Conversion",
      icon: ShoppingCart,
      color: "from-cyan-500 via-blue-500 to-indigo-600",
      glowColor: "cyan",
      description:
        "High-performance Next.js online stores tailored for Pakistani & international retail, featuring custom monthly installment calculators, WhatsApp instant checkout, and live admin panels.",
      features: [
        "Monthly Installment & Down Payment Calculator",
        "WhatsApp Direct Order Flow & Cart System",
        "Custom Admin Panel for Inventory & Orders",
        "Local Payment Gateway Integration (JazzCash/Easypaisa/Stripe)",
      ],
      whatsappMsg: "Hi Musaddaq, I want a Custom E-Commerce Store with Installment & WhatsApp Order System.",
    },
    {
      id: "offline-desktop-pos",
      title: "Offline Desktop Softwares & POS",
      badge: "100% Offline Ready",
      icon: Monitor,
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      glowColor: "emerald",
      description:
        "Robust desktop applications built with Electron.js & SQLite. Perfect for retail shops, electronics stores, and warehouses that need 100% reliable offline operation with automatic WhatsApp debt/installment reminders.",
      features: [
        "Electron.js + Embedded SQLite Local Database",
        "Cash & Monthly Installment Customer Ledger",
        "Inventory Tracking & Thermal Bill Printing",
        "Automated Bulk WhatsApp & SMS Payment Reminders",
      ],
      whatsappMsg: "Hi Musaddaq, I need an Offline Desktop POS & Installment Management Software.",
    },
    {
      id: "corporate-websites",
      title: "Corporate & Business Websites",
      badge: "Ultra Fast & SEO",
      icon: Globe,
      color: "from-blue-500 via-indigo-500 to-purple-600",
      glowColor: "blue",
      description:
        "Modern, lightning-fast company portfolio and agency websites designed to capture leads, rank high on local search engines, and convert visitors into active clients.",
      features: [
        "Next.js App Router for 95+ Google Lighthouse Scores",
        "Local SEO Optimization for Google Search",
        "Mobile-First Responsive Glassmorphism UI",
        "Contact Forms & Instant Lead Alerts",
      ],
      whatsappMsg: "Hi Musaddaq, I need a Corporate/Business Website for my company.",
    },
    {
      id: "vps-server-setup",
      title: "VPS Deployment & Server Setup",
      badge: "99.9% Uptime",
      icon: Server,
      color: "from-purple-500 via-fuchsia-500 to-pink-600",
      glowColor: "purple",
      description:
        "End-to-end cloud server configuration for Node.js, Next.js, and databases on Linux VPS (Ubuntu/Debian) with automated backups and security hardening.",
      features: [
        "Linux Server Setup (Ubuntu / Debian)",
        "Nginx Reverse Proxy & PM2 Process Manager",
        "Free SSL Certificates (Let's Encrypt / Cloudflare)",
        "Automated Daily Database Backups to Cloud",
      ],
      whatsappMsg: "Hi Musaddaq, I need VPS Server Setup & Deployment support.",
    },
  ];

  return (
    <section id="services-grid" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Development Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Custom Software Solutions Built for Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Specialized engineering services combining cutting-edge web technologies with practical business automation.
          </p>
        </div>

        {/* 2x2 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/923111122125?text=${encodeURIComponent(service.whatsappMsg)}`;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 shadow-lg shadow-cyan-500/10`}>
                      <div className="w-full h-full bg-[#0B0F17] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <span className="text-xs font-mono font-semibold px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-xs font-medium text-slate-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center justify-between group-hover:bg-slate-800/90 transition-all duration-200"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
