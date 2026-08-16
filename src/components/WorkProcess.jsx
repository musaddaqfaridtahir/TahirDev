"use client";

import Link from "next/link";
import { FileText, Cpu, Rocket, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering & Architecture",
      subtitle: "Phase 1: System Scope",
      icon: FileText,
      description:
        "Define business goals, database schemas, API specs, and a clear project roadmap with transparent deliverables.",
      deliverables: [
        "System Architecture & Scope Document",
        "Database Schema & Entity Models",
        "Fixed Scope & Clear Development Timeline",
      ],
    },
    {
      number: "02",
      title: "Rapid Execution & Automated QA",
      subtitle: "Phase 2: High-Speed Engineering",
      icon: Cpu,
      description:
        "Build modular Next.js components, REST APIs, and SQLite desktop engines with continuous automated and manual testing.",
      deliverables: [
        "Clean, Maintainable Production Codebase",
        "Mobile-First Responsive UI Design",
        "Automated System & Performance Testing",
      ],
    },
    {
      number: "03",
      title: "VPS Server Deployment & Support",
      subtitle: "Phase 3: Production Release",
      icon: Rocket,
      description:
        "Deploy to high-speed Linux VPS or package into desktop installers. Configure Nginx reverse proxies, SSL security, and cloud backups.",
      deliverables: [
        "Zero-Downtime Linux VPS & Free SSL Setup",
        "Automated Cloud Database Backup Routines",
        "Post-Launch Technical Maintenance & Support",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven 3-Step Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Development &amp; Delivery Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A transparent workflow ensuring rapid execution, clean code standards, and reliable production deployment.
          </p>
        </div>

        {/* 3-Step Grid (Responsive vertical stack on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-200 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-400 font-semibold inline-block mb-3">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <span>Phase {index + 1} Execution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white mb-1">Ready to Start Phase 1 for Your Project?</h4>
            <p className="text-xs text-slate-400">Get a clear technical architecture and project roadmap.</p>
          </div>
          <Link
            href="/contact"
            className="py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all shrink-0"
          >
            Start Project Discussion
          </Link>
        </div>

      </div>
    </section>
  );
}
