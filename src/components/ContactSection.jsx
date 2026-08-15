"use client";

import { useState } from "react";
import { Send, Phone, MessageSquare, MapPin, CheckCircle2, Sparkles, Mail, User, FileText } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "E-Commerce Store",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo) return;
    setSubmitted(true);
  };

  const whatsappDirectMsg = encodeURIComponent(
    `Hi Musaddaq!\nMy Name: ${formData.name || "Client"}\nContact: ${formData.contactInfo}\nProject: ${formData.projectType}\nDetails: ${formData.message}`
  );
  const directWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappDirectMsg}`;

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Discuss Your Project Scope
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project brief ready or want to discuss custom software development? Reach out directly via phone, WhatsApp, or the inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Contact Methods */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Lines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly for instant project estimates, technical consultations, or scope discussions.
              </p>
            </div>

            <div className="space-y-4">
              {/* Native Phone Line */}
              <a
                href={siteConfig.telLink}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Primary Phone Line</span>
                  <span className="text-base font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {siteConfig.formattedPhone}
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">WhatsApp Direct Line</span>
                  <span className="text-base font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {siteConfig.formattedPhone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Developer Location</span>
                  <span className="text-base font-semibold text-white">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>Fast Response Guarantee within 1 Hour on WhatsApp</span>
            </div>
          </div>

          {/* Right Clean Responsive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received, {formData.name}!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Click below to send these exact details directly to Musaddaq on WhatsApp for instant confirmation.
                </p>
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-slate-950" />
                  <span>Send Form Details to WhatsApp ({siteConfig.formattedPhone})</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Send a Project Inquiry</h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Email or Phone / WhatsApp *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. +92 300 1234567 or email@example.com"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Required Service Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="E-Commerce Store">E-Commerce Store with Installments</option>
                    <option value="Offline Desktop POS">Offline Desktop POS &amp; Inventory Software</option>
                    <option value="Corporate Website">Corporate &amp; Business Website</option>
                    <option value="VPS Deployment">VPS Server Deployment &amp; Maintenance</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Project Scope &amp; Details</label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={4}
                      placeholder="Describe your project requirements, target features, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
