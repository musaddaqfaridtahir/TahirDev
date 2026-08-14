"use client";

import { FileText, Cpu, Rocket, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Requirement Gathering & Planning",
      subtitle: "Phase 1: Architecture & Scope",
      icon: FileText,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      iconBg: "from-cyan-500 to-blue-600",
      description:
        "We discuss your core business goals, target audience, and feature list. I create database schemas, wireframes, and a clear project timeline with zero hidden costs.",
      deliverables: [
        "Business Requirements Document & Scope",
        "Database & System Architecture Design",
        "Fixed Cost & Transparent Timeline Agreement",
      ],
    },
    {
      number: "02",
      title: "Rapid AI-Powered Code Execution & Testing",
      subtitle: "Phase 2: High-Speed Engineering",
      icon: Cpu,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      iconBg: "from-emerald-500 to-teal-600",
      description:
        "Using modern Next.js 15, React 19, and AI-assisted rapid coding workflows, I craft high-performance code, build responsive UI components, and test offline SQLite databases.",
      deliverables: [
        "Clean, Maintainable Production Code",
        "Mobile-First Glassmorphic Responsive UI",
        "Rigorous Automated & Manual QA Testing",
      ],
    },
    {
      number: "03",
      title: "VPS Server Deployment & Lifetime Support",
      subtitle: "Phase 3: Launch & Maintenance",
      icon: Rocket,
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      iconBg: "from-blue-500 to-purple-600",
      description:
        "Your project is deployed live on a high-speed Linux VPS (or packaged into an offline desktop installer). I configure Nginx, SSL security, automated cloud backups, and provide long-term support.",
      deliverables: [
        "Zero-Downtime VPS Deployment & Free SSL",
        "Automated Daily Cloud Database Backups",
        "Post-Launch Technical Maintenance & Bug Support",
      ],
    },
  ];

  const whatsappUrl = "https://wa.me/923001122782?text=Hi%20Musaddaq,%20I%20want%20to%20start%20Step%201%20Planning%20for%20my%20project!";

  return (
    <section id="process" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven 3-Step Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How I Work &amp; Deliver Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A transparent, streamlined 3-step workflow ensuring rapid execution, robust code quality, and on-time delivery.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.iconBg} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-semibold inline-block mb-3 ${step.badgeColor}`}>
                    {step.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    <span>Phase {index + 1} Execution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-xl font-bold text-white mb-1">Ready to Start Step 1 for Your Project?</h4>
            <p className="text-xs text-slate-400">Get a free consultation and project roadmap tailored for your business.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-xs shadow-lg hover:scale-105 transition-transform shrink-0"
          >
            Start Free Project Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
