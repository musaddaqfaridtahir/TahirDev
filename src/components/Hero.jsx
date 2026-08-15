"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, Terminal, Globe, ShieldCheck, ShoppingBag, Monitor } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("web");

  const phrases = [
    "Full-Stack Next.js Developer",
    "Offline Desktop POS Specialist",
    "Custom E-Commerce Software Builder",
  ];

  useEffect(() => {
    const currentPhrase = phrases[typingIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingIndex]);

  const codeSnippets = {
    web: `// Next.js App Router E-commerce API
export async function POST(req) {
  const order = await req.json();
  const emi = calculateInstallment(order.total, order.months);
  return NextResponse.json({ success: true, emi });
}`,
    pos: `// Offline Desktop SQLite POS Engine
public void SyncTransactions() {
    var ledger = SQLite.GetPendingLedger();
    CloudAPI.BulkSync(ledger);
}`,
    ai: `// Tech Stack & Architecture
const musaddaqStack = {
  web: 'Next.js 15 + Tailwind CSS',
  desktop: 'Electron.js + SQLite POS',
  server: 'Ubuntu Linux VPS + Nginx'
};`,
  };

  const highlights = [
    { title: "Retail E-Commerce Engines", desc: "Next.js online stores with custom monthly installment calculators and WhatsApp checkout.", icon: ShoppingBag },
    { title: "Offline Desktop POS Software", desc: "100% offline Electron.js + SQLite applications for local store credit ledgers and thermal printing.", icon: Monitor },
    { title: "Full-Stack SaaS Applications", desc: "Custom web portals, fleet dispatch tools, and database management systems built for high uptime.", icon: Globe },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0F17] border-b border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Custom Software Contracts</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Full-Stack Next.js Developer &amp; <br className="hidden sm:inline" />
              <span className="text-cyan-400">Custom Business Software</span> Builder
            </h1>

            {/* VS Code Style Compact Typing Pill */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono shadow-inner">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="text-slate-200 font-medium">{displayText}</span>
                <span className="w-[2px] h-3.5 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </div>

            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-slate-200">{siteConfig.name}</strong> — building high-converting Next.js web applications, retail e-commerce stores with installment engines, and 100% offline desktop POS software.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-white font-semibold text-xs transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Get In Touch</span>
              </Link>
            </div>

          </div>

          {/* Right Compact VS Code Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    musaddaq-editor.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" /> ONLINE
                </div>
              </div>

              {/* VS Code Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeTab === "web"
                      ? "bg-slate-800/80 text-cyan-400 border-b-2 border-cyan-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  web-api.ts
                </button>
                <button
                  onClick={() => setActiveTab("pos")}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeTab === "pos"
                      ? "bg-slate-800/80 text-emerald-400 border-b-2 border-emerald-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  pos-sync.cs
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeTab === "ai"
                      ? "bg-slate-800/80 text-blue-400 border-b-2 border-blue-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  stack.config.js
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-4 font-mono text-[11px] overflow-x-auto min-h-[190px]">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Footer Tech Pills */}
              <div className="p-3 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-slate-400 mr-1">Stack:</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono">
                  Next.js 15
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                  React &amp; Tailwind
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-mono">
                  SQLite POS
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800/80 mt-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
