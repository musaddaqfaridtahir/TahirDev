"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, CheckCircle2, Terminal, Cpu, Database, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState("web");

  const phrases = [
    "Next.js & React Expert",
    "Offline POS & SQL Specialist",
    "AI-Powered Rapid Development",
  ];

  useEffect(() => {
    const currentPhrase = phrases[typingIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
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

  const stats = [
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle2, accent: "text-emerald-400" },
    { value: "Rapid", label: "VPS Deployment", icon: Zap, accent: "text-cyan-400" },
    { value: "Custom", label: "Desktop Solutions", icon: Cpu, accent: "text-blue-400" },
  ];

  const codeSnippets = {
    web: `// Next.js App Router E-commerce Engine
export async function POST(req) {
  const order = await req.json();
  const payment = await processPayment(order);
  await db.orders.create({ ...order, status: 'PAID' });
  return NextResponse.json({ success: true, orderId: order.id });
}`,
    pos: `// Offline Desktop POS Sync Engine
public class POSDatabase {
    public void SystemSyncOfflineData() {
        var localTx = SQLite.GetPendingTransactions();
        CloudAPI.BulkUpload(localTx);
        SQLite.MarkAsSynced(localTx);
    }
}`,
    ai: `// AI-Powered Rapid Development Workflow
const devStack = {
  frontend: 'Next.js 15 App Router + Tailwind CSS',
  backend: 'Node.js REST API + PostgreSQL / Prisma',
  desktop: 'Electron + SQLite Offline Storage',
  deploy: 'Automated VPS Docker + SSL Pipeline'
};`,
  };

  const whatsappUrl = "https://wa.me/923001122782?text=Hi%20Musaddaq,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects &amp; Freelance Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              I Build High-Performance <br className="hidden sm:inline" />
              <span className="gradient-text">E-commerce Stores</span>, Web Apps &amp;{" "}
              <span className="text-cyan-400">Offline Softwares</span>
            </h1>

            {/* Developer Subtext & Typing Effect */}
            <div className="flex items-center gap-2 text-lg sm:text-xl text-slate-300 font-mono mb-8 min-h-[36px]">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-slate-100">{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-slate-200">Musaddaq Farid Tahir</strong> — a Pakistan-based Full-Stack Developer specializing in ultra-fast Next.js web applications, online stores, and robust offline POS software with seamless cloud database sync.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Hire Me on WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-base transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className={`w-4 h-4 ${stat.accent}`} />
                      <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right High-Tech Interactive Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    musaddaq-developer-env
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" /> ONLINE
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "web"
                      ? "bg-slate-800/80 text-cyan-400 border-b-2 border-cyan-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" /> Web API
                </button>
                <button
                  onClick={() => setActiveTab("pos")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "pos"
                      ? "bg-slate-800/80 text-emerald-400 border-b-2 border-emerald-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Database className="w-3.5 h-3.5" /> POS Sync
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "ai"
                      ? "bg-slate-800/80 text-blue-400 border-b-2 border-blue-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> Stack Architecture
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 font-mono text-xs overflow-x-auto min-h-[220px]">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Tech Badges Footer */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-mono text-slate-400 mr-1">Primary Tools:</span>
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-mono">
                  Next.js 15
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                  React &amp; Tailwind
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-mono">
                  Node / SQL
                </span>
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-mono">
                  Offline Desktop POS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
