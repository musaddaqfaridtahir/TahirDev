"use client";

import Link from "next/link";
import { ShoppingCart, Monitor, Globe, Server, Check, ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function CoreServices() {
  const serviceIcons = [ShoppingCart, Monitor, Globe, Server];

  return (
    <section id="services-grid" className="py-20 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Software Solutions Built for Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering high-performance web applications, retail e-commerce engines, and 100% offline desktop POS software.
          </p>
        </div>

        {/* 2x2 Clean Services Grid (Responsive vertical stack on mobile, 2 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.services.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-200 shadow-xl"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-xs font-medium text-slate-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clean Internal Routing Link Button (No phone or WhatsApp spam inside cards) */}
                <Link
                  href="/services"
                  className="w-full py-3 px-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center justify-between transition-all"
                >
                  <span>Learn More About {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
