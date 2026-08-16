"use client";

import Link from "next/link";
import { ShoppingBag, Layout, Monitor, Server, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ServicesPreview() {
  const serviceIcons = [ShoppingBag, Layout, Monitor, Server];

  return (
    <section id="services-preview" className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Custom Software Offerings
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tailored digital engineering designed for high availability, security, and sales conversion.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.services.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-200 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clean internal routing button */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-all pt-4 border-t border-slate-800/80"
                >
                  <span>View Full Specification</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
