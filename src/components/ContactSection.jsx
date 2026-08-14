"use client";

import { useState } from "react";
import { Send, Phone, MessageSquare, MapPin, CheckCircle2, Sparkles, Mail, User, FileText } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "E-Commerce Website",
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
  const directWaUrl = `https://wa.me/923001122782?text=${whatsappDirectMsg}`;

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Your Next Project
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind or need custom software? Send a message below or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reach out directly via phone call, WhatsApp message, or project consultation request.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:0311122125"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Primary Phone Line</span>
                  <span className="text-base font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                    0311122125
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923001122782"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">WhatsApp Direct Line</span>
                  <span className="text-base font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                    03001122782
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Developer Location</span>
                  <span className="text-base font-semibold text-white">Pakistan</span>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>Fast Response Guarantee within 1 Hour on WhatsApp</span>
            </div>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Your project inquiry has been logged. Click below to immediately send these details to Musaddaq on WhatsApp for instant confirmation.
                </p>
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-slate-950" />
                  <span>Send Form Details to WhatsApp (03001122782)</span>
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
                      placeholder="e.g. 03001234567 or email@example.com"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Category */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Select Service Required</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="E-Commerce Website">E-Commerce Store with Installments</option>
                    <option value="Offline Desktop POS">Offline Desktop POS &amp; Inventory Software</option>
                    <option value="Corporate Website">Corporate &amp; Business Website</option>
                    <option value="VPS Deployment">VPS Server Deployment &amp; Maintenance</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Project Brief / Details</label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={4}
                      placeholder="Describe your project requirements, features, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 text-slate-950 font-extrabold text-sm shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
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
