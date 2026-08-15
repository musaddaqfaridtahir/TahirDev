"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20new%20project!";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-2xl backdrop-blur-md animate-bounce">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 ring-4 ring-emerald-500/20"
      >
        <MessageSquare className="w-7 h-7 fill-slate-950 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
