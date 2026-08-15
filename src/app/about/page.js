import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Code2, CheckCircle2, ShieldCheck, Terminal, Cpu, ArrowRight, MessageSquare, Phone } from "lucide-react";

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, full-stack web developer and desktop software builder.`,
};

export default function AboutPage() {
  const stack = [
    { name: "Next.js 15 (App Router)", desc: "High-performance SSR, SSG, and API route architecture." },
    { name: "React 19 & Tailwind CSS v4", desc: "Responsive, accessible, glassmorphic UI interfaces." },
    { name: "Node.js & Express / REST APIs", desc: "Scalable backend logic, webhooks, and payment integration." },
    { name: "SQLite & PostgreSQL", desc: "Local embedded offline databases & cloud relational SQL engines." },
    { name: "Electron.js Desktop Apps", desc: "100% offline desktop applications with thermal printing & ledgers." },
    { name: "Linux VPS & Nginx Setup", desc: "Ubuntu server deployment, PM2 process management, Let's Encrypt SSL." },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0B0F17] text-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About {siteConfig.name}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Full-Stack Next.js Developer &amp; Custom Business Software Builder based in {siteConfig.location}.
          </p>
        </div>

        {/* Bio Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-white">Engineering Practical Software for Real Businesses</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I specialize in bridging the gap between web technology and real-world business operations. Whether it&apos;s building custom e-commerce stores with monthly installment calculators for appliance retailers or engineering 100% offline desktop POS software for local merchants facing internet downtime — I deliver fast, maintainable, and revenue-driving code.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-cyan-400 font-bold text-lg block">100%</span>
              <span className="text-slate-400">Production Uptime Focus</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-emerald-400 font-bold text-lg block">Offline SQL</span>
              <span className="text-slate-400">Desktop Ledger Engines</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-amber-400 font-bold text-lg block">Direct API</span>
              <span className="text-slate-400">WhatsApp &amp; Payment Flows</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Core Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stack.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h3 className="text-lg font-bold text-white mb-1">Want to work together?</h3>
            <p className="text-xs text-slate-400">Get in touch directly or request a custom project quote.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.telLink}
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{siteConfig.formattedPhone}</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
