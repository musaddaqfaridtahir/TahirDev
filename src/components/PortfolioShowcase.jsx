"use client";

import { useState } from "react";
import { ExternalLink, Layers, CheckCircle2, X, Monitor, ShoppingBag, Truck, CreditCard, ChevronRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const icons = [ShoppingBag, Truck, Monitor, CreditCard];

  return (
    <section id="portfolio" className="py-20 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Real Projects. Measurable Impact.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed breakdowns of web applications, desktop POS software, and SaaS portals engineered for real business operations.
          </p>
        </div>

        {/* 2x2 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.projects.map((project, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-200 shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono bg-cyan-500/10 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-center font-mono">
                    {project.impact.map((imp, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-sm sm:text-base font-bold text-emerald-400">{imp.value}</div>
                        <div className="text-[10px] text-slate-400 leading-tight">{imp.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clean Card Actions (No phone or whatsapp spam inside cards) */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  {project.demoUrl.startsWith("http") && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Story & Impact Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-200">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Full Case Study Breakdown
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-center">
                {selectedProject.impact.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                    The Business Challenge
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                    Engineering Solution Built
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-slate-950 text-slate-300 px-3 py-1 rounded border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.demoUrl.startsWith("http") && (
                <div className="pt-6 border-t border-slate-800">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Open Live Production Application</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
