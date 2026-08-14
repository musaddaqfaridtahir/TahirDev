"use client";

import { ShoppingBag, Layout, Monitor, Server, ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      id: "ecommerce",
      title: "E-Commerce Online Stores",
      tagline: "High-Converting Storefronts",
      icon: ShoppingBag,
      color: "from-cyan-500 to-blue-500",
      accentText: "text-cyan-400",
      description:
        "Fast Next.js storefronts with custom payment gateways, inventory sync, order tracking dashboards, and SEO optimization for maximum sales.",
      features: [
        "Payment Gateway Integration",
        "Instant Cart & Checkout",
        "Admin Analytics Dashboard",
        "Mobile-First Responsive Design",
      ],
    },
    {
      id: "webapp",
      title: "Full-Stack Web Applications",
      tagline: "Custom SaaS & Dashboards",
      icon: Layout,
      color: "from-blue-500 to-indigo-500",
      accentText: "text-blue-400",
      description:
        "Custom web platforms, customer portals, and internal business tools built with React, Next.js, Node.js, and PostgreSQL.",
      features: [
        "User Auth & Role Control",
        "RESTful API & Database Architecture",
        "Real-time Data Updates",
        "Scalable Cloud Backend",
      ],
    },
    {
      id: "desktop",
      title: "Offline Desktop POS & Softwares",
      tagline: "100% Reliable Local Business Apps",
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      accentText: "text-emerald-400",
      description:
        "Custom offline point-of-sale (POS), billing, inventory, and accounting software designed to operate without internet and auto-sync when online.",
      features: [
        "Works 100% Offline (Local SQL)",
        "Barcode & Thermal Printer Ready",
        "Automated Cloud Backup",
        "Stock & Profit Reports",
      ],
    },
    {
      id: "vps",
      title: "VPS & Cloud Infrastructure",
      tagline: "Zero Downtime Hosting",
      icon: Server,
      color: "from-purple-500 to-cyan-500",
      accentText: "text-purple-400",
      description:
        "Full setup and maintenance of your Linux VPS, Docker containers, SSL certificates, NGINX reverse proxies, and automated backups.",
      features: [
        "Linux Server (Ubuntu/Debian)",
        "Free SSL & NGINX Setup",
        "Database Backup Automation",
        "Domain & DNS Configuration",
      ],
    },
  ];

  const whatsappUrl = "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20want%20to%20hire%20you%20for%20a%20project!";

  return (
    <section id="services" className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What I Can Build For Your Business
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From online e-commerce stores to offline desktop retail solutions — custom software tailored for speed, reliability, and sales.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${service.accentText}`} />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
