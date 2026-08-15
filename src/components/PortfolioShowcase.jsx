"use client";

import { useState } from "react";
import { ExternalLink, Layers, CheckCircle2, MessageSquare, X, Monitor, ShoppingBag, Truck, CreditCard, ChevronRight, ArrowUpRight } from "lucide-react";

export default function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "babu-electronics",
      title: "Babu Electronics — Retail E-Commerce & Installment Engine",
      category: "Full-Stack Retail E-Commerce",
      stack: ["Next.js 15", "SQLite / Node.js", "Tailwind CSS", "WhatsApp API"],
      tags: ["E-Commerce", "Installment Engine", "WhatsApp Checkout"],
      icon: ShoppingBag,
      summary:
        "Full-stack retail e-commerce platform built for an electronics retailer featuring a custom installment calculator for monthly payment plans and instant WhatsApp order processing.",
      problem:
        "Retail electronics customers frequently abandon online purchases when high-value appliances (LED TVs, ACs, Refrigerators) require 100% upfront payment rather than monthly installment flexibility.",
      solution:
        "Engineered a real-time installment breakdown engine that dynamically calculates down payments, monthly EMIs, and compiles a pre-formatted order payload directly to the store's WhatsApp line.",
      impact: [
        { label: "Installment Conversion", value: "+65%" },
        { label: "Page Load Speed", value: "< 1.2s" },
        { label: "Order Checkout Time", value: "30 Seconds" },
      ],
      demoUrl: "https://babu-electronics-three.vercel.app/",
    },
    {
      id: "swiftway-logistics",
      title: "SwiftWay Logistics — Truck Dispatch & Fleet SaaS",
      category: "Logistics Fleet Operations",
      stack: ["Next.js App Router", "Node.js", "PostgreSQL", "Tailwind CSS"],
      tags: ["Fleet SaaS", "Dispatch Kanban", "Real-Time Tracking"],
      icon: Truck,
      accentColor: "from-blue-500 to-indigo-600",
      summary:
        "Dedicated truck dispatch and fleet order management SaaS platform enabling freight companies to assign drivers, monitor load statuses, and auto-generate rate confirmation PDFs.",
      problem:
        "Manual phone dispatching caused lost bill-of-lading documents, delayed driver assignments, and lack of client visibility during long-distance freight transit.",
      solution:
        "Built a real-time dispatch Kanban board with automated PDF rate confirmations, driver assignment logs, and a dedicated tracking portal for shipment clients.",
      impact: [
        { label: "Dispatch Efficiency", value: "3x Faster" },
        { label: "Paperwork Errors", value: "0%" },
        { label: "Active Loads Tracked", value: "500+" },
      ],
      demoUrl: "https://truck-dispatch-testing.vercel.app/",
    },
    {
      id: "offline-pos-desktop",
      title: "Offline Desktop POS & Customer Ledger Software",
      category: "Desktop Software (Electron.js)",
      stack: ["Electron.js", "React.js", "Embedded SQLite", "WhatsApp Reminders"],
      tags: ["Desktop POS", "100% Offline", "Bulk Payment Reminders"],
      icon: Monitor,
      summary:
        "Desktop POS software engineered with Electron.js & embedded SQLite to operate 100% offline for local merchants, handling credit ledgers, thermal printing, and WhatsApp debt reminders.",
      problem:
        "Shopkeepers in areas with frequent internet downtime lost access to web POS platforms, resulting in billing queues and uncollected monthly credit dues.",
      solution:
        "Developed a standalone desktop application backed by a zero-downtime local SQLite engine with thermal printer integration and background WhatsApp reminders.",
      impact: [
        { label: "Offline Uptime", value: "100%" },
        { label: "Debt Recovery Rate", value: "+40%" },
        { label: "Transaction Speed", value: "< 3 Secs" },
      ],
      demoUrl: "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20want%20a%20demo%20of%20the%20Offline%20Desktop%20POS%20Software!",
    },
    {
      id: "payment-links-gateway",
      title: "Payment Links & Merchant Invoicing Gateway",
      category: "FinTech Billing Platform",
      stack: ["Next.js 15", "Node.js API", "Tailwind CSS", "Payment API"],
      tags: ["Payment Links", "Invoice Engine", "Merchant Gateway"],
      icon: CreditCard,
      summary:
        "Real-time merchant billing gateway enabling small businesses and freelancers to generate shareable payment links, automated PDF invoices, and monitor client receipts.",
      problem:
        "Small businesses struggle to accept digital online payments without spending weeks setting up complex e-commerce store infrastructure.",
      solution:
        "Created an instant payment link generator that produces shareable URLs, handles webhook status updates, and auto-dispatches digital PDF receipts.",
      impact: [
        { label: "Payment Settlement", value: "Instant" },
        { label: "Checkout Drop-off", value: "-45%" },
        { label: "Platform Uptime", value: "99.9%" },
      ],
      demoUrl: "https://payment-links-two.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Real-World Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Case Studies &amp; Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Detailed breakdowns of production web applications, desktop software, and SaaS portals engineered to solve real business challenges.
          </p>
        </div>

        {/* 2x2 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact Highlights */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6 text-center font-mono">
                    {project.impact.map((imp, idx) => (
                      <div key={idx}>
                        <div className="text-base font-bold text-emerald-400">{imp.value}</div>
                        <div className="text-[10px] text-slate-400">{imp.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story & Impact Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-200">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
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

              {/* Key Impact Metrics */}
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

              {/* Story: Problem & Engineering Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                    The Business Problem
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

              {/* Tech Stack */}
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

              {/* Modal Actions */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Live Demo / Project URL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
