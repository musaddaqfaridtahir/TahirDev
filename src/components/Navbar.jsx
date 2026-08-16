"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener for sticky header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#0B0F17]/95 border-b border-slate-800/80 py-3.5 shadow-xl backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo on Left */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  Musaddaq<span className="text-cyan-400">.dev</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                  {siteConfig.studioName}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (md:flex) */}
            <nav className="hidden md:flex items-center gap-6 border border-slate-800/80 bg-slate-900/80 rounded-full px-6 py-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-mono font-medium transition-colors ${
                      isActive ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area (Desktop CTA) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Hamburger Button on Right (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Slide-in Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B0F17]/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          
          {/* Overlay Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Musaddaq<span className="text-cyan-400">.dev</span>
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links Stack */}
          <div className="flex flex-col gap-4 py-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Navigation Menu
            </span>
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold transition-colors py-2 border-b border-slate-900 flex items-center justify-between ${
                    isActive ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </Link>
              );
            })}
          </div>

          {/* Overlay Footer CTA */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}
    </>
  );
}
