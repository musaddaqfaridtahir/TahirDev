"use client";

import { useState } from "react";
import { ExternalLink, Layers, CheckCircle2, MessageSquare, X, Monitor, ShoppingBag, Truck, CreditCard, ChevronRight } from "lucide-react";

export default function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "babu-electronics",
      title: "Babu Electronics - E-Commerce & Installment Store",
      subtitle: "Full-Stack Online Appliance & Electronics Store with Monthly Installment Engine",
      category: "E-Commerce Web App",
      stack: ["Next.js 15", "SQLite / Node.js", "Tailwind CSS", "WhatsApp API"],
      tags: ["E-commerce", "Installment System", "WhatsApp API"],
      icon: ShoppingBag,
      accentColor: "from-cyan-500 to-blue-600",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      overview:
        "A full-featured Next.js e-commerce application engineered for electronics retailers. It allows customers to view product pricing in full or calculate flexible monthly installment plans with instant down-payment breakdowns and automated WhatsApp checkout.",
      problem:
        "Electronics stores lose online sales when buyers want to purchase expensive appliances on monthly installments rather than paying 100% upfront.",
      solution:
        "Musaddaq built a custom client-side installment calculator that dynamically computes down payments, monthly EMIs, and generates a pre-formatted WhatsApp order request.",
      keyFeatures: [
        "Dynamic Monthly Installment & Down Payment Calculator",
        "WhatsApp Direct Order Checkout with pre-filled product specs",
        "Admin Panel for product catalog, stock management, and pricing updates",
        "Responsive, high-converting dark-theme UI built for fast mobile load",
      ],
      metrics: [
        { label: "Installment Orders", value: "+65%" },
        { label: "Page Load Speed", value: "< 1.2s" },
        { label: "WhatsApp Conversion", value: "3.4x" },
      ],
      demoUrl: "https://babu-electronics-three.vercel.app/",
    },
    {
      id: "payment-links-gateway",
      title: "Payment Links & Invoice Gateway",
      subtitle: "Real-Time Payment Link Generator & Merchant Billing Portal",
      category: "FinTech Platform",
      stack: ["Next.js 15", "Node.js", "Tailwind CSS", "Payment API"],
      tags: ["Payment Gateway", "Invoice Engine", "FinTech SaaS"],
      icon: CreditCard,
      accentColor: "from-emerald-500 to-cyan-600",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      overview:
        "A streamlined merchant payment gateway platform allowing businesses and freelancers to generate dynamic payment links, auto-generate invoices, and accept client payments securely.",
      problem:
        "Small businesses struggle to collect client payments online without deploying heavy e-commerce integrations.",
      solution:
        "Created an instant payment link generator that creates secure shareable invoice links, tracks transaction statuses in real-time, and sends payment confirmations.",
      keyFeatures: [
        "Instant Shareable Payment Link Generator",
        "Automated Digital Invoice & PDF Receipt Generation",
        "Real-Time Merchant Transaction Analytics Dashboard",
        "Secure Payment Flow & Webhook Notifications",
      ],
      metrics: [
        { label: "Payment Speed", value: "Instant" },
        { label: "Checkout Drop-off", value: "-45%" },
        { label: "Uptime", value: "99.9%" },
      ],
      demoUrl: "https://payment-links-two.vercel.app/",
    },
    {
      id: "truck-dispatch-portal",
      title: "Truck Dispatch & Logistics Portal",
      subtitle: "Real-Time Fleet Order Management & Driver Dispatch SaaS",
      category: "Logistics Portal",
      stack: ["Next.js App Router", "Node.js", "PostgreSQL", "Tailwind CSS"],
      tags: ["Fleet Portal", "Real-Time Tracking", "Logistics SaaS"],
      icon: Truck,
      accentColor: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      overview:
        "A cloud-based logistics management web portal built for freight companies to assign drivers, track load statuses, generate automated rate confirmations, and monitor delivery timelines.",
      problem:
        "Manual phone call dispatching leads to lost load documents, delayed driver assignments, and lack of client visibility into shipment progress.",
      solution:
        "Created an intuitive dispatch dashboard with live status updates, rate confirmation PDF generator, and client portal for real-time tracking.",
      keyFeatures: [
        "Live Dispatch Kanban Board for Load Statuses",
        "Driver Assignment & Rate Confirmation Generator",
        "Client Tracking Portal with status history",
        "Automated Invoice & Mileage Tracking",
      ],
      metrics: [
        { label: "Dispatch Speed", value: "3x Faster" },
        { label: "Paperwork Errors", value: "0%" },
        { label: "Active Loads", value: "500+" },
      ],
      demoUrl: "https://truck-dispatch-testing.vercel.app/",
    },
    {
      id: "offline-pos-desktop",
      title: "Offline Installment & Inventory Management Software",
      subtitle: "Desktop Application for Local Retailers & Appliance Wholesalers",
      category: "Desktop Software",
      stack: ["Electron.js", "React.js", "SQLite", "WhatsApp Automation"],
      tags: ["Desktop App", "POS", "Automated SMS/WhatsApp"],
      icon: Monitor,
      accentColor: "from-purple-500 to-pink-600",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      overview:
        "A desktop software system built with Electron.js & SQLite designed to run 100% offline without internet. Manages store inventory, daily sales, customer credit ledgers, and sends automated WhatsApp payment reminders for overdue installment dues.",
      problem:
        "Shopkeepers in areas with unstable internet lose access to web-based POS apps, causing billing delays and missed installment recoveries from customer accounts.",
      solution:
        "Implemented an embedded local SQLite engine inside Electron.js that guarantees zero downtime offline operation, thermal receipt printing, and background WhatsApp messaging.",
      keyFeatures: [
        "100% Offline POS Billing & Customer Account Ledger",
        "Automated Bulk WhatsApp & SMS Payment Due Reminders",
        "Thermal Invoice Printing (ESC/POS Printer integration)",
        "Daily Stock, Cash Flow & Profit/Loss Analytics",
      ],
      metrics: [
        { label: "Offline Uptime", value: "100%" },
        { label: "Debt Recovery", value: "+40%" },
        { label: "Billing Time", value: "< 5 secs" },
      ],
      demoUrl: "https://wa.me/923001122782?text=Hi%20Musaddaq,%20I%20want%20a%20demo%20of%20the%20Offline%20Desktop%20POS%20Software!",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real Projects. Measurable Results.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore live applications and desktop software built for real businesses to solve operational challenges.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${project.accentColor} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    {project.subtitle}
                  </p>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border font-semibold ${project.badgeColor}`}
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                      Tech Stack Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono bg-slate-800/60 text-slate-300 px-2 py-0.5 rounded border border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 hover:scale-105 transition-transform shadow-md"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Case Study Modal */}
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
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Case Study Breakdown
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {selectedProject.overview}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-center">
                {selectedProject.metrics.map((m, idx) => (
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

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                    The Challenge / Problem
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                    Musaddaq&apos;s Engineering Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  Core Technical Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm text-center shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Open Live Demo / Project Link</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
