"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, MessageSquare, Clock, Zap } from "lucide-react";

export default function DynamicCostEstimator() {
  const [projectType, setProjectType] = useState("ecommerce");
  const [selectedFeatures, setSelectedFeatures] = useState(["installment", "whatsapp", "admin"]);
  const [timeline, setTimeline] = useState("standard");

  const projectTypes = [
    {
      id: "ecommerce",
      name: "E-Commerce Store",
      basePricePKR: 78000,
      baseDays: 7,
      desc: "Full Next.js online store with cart, order checkout, & admin panel.",
    },
    {
      id: "desktop",
      name: "Offline Desktop Software",
      basePricePKR: 98000,
      baseDays: 10,
      desc: "100% Offline Electron.js + SQLite POS & inventory software.",
    },
    {
      id: "business",
      name: "Business Website",
      basePricePKR: 50000,
      baseDays: 4,
      desc: "Fast Next.js agency or company portfolio website.",
    },
    {
      id: "custom",
      name: "Custom Web Application",
      basePricePKR: 112000,
      baseDays: 12,
      desc: "Tailored SaaS, internal portal, or complex database web system.",
    },
  ];

  const addOnFeatures = [
    { id: "installment", name: "Installment Calculator", pricePKR: 16800, days: 2 },
    { id: "whatsapp", name: "WhatsApp API Integration", pricePKR: 14000, days: 1 },
    { id: "admin", name: "Custom Admin Panel", pricePKR: 19600, days: 2 },
    { id: "vps", name: "VPS Deployment Setup", pricePKR: 11200, days: 1 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType);

  let totalPricePKR = selectedTypeObj ? selectedTypeObj.basePricePKR : 0;
  let totalDays = selectedTypeObj ? selectedTypeObj.baseDays : 0;

  selectedFeatures.forEach((featId) => {
    const feat = addOnFeatures.find((f) => f.id === featId);
    if (feat) {
      totalPricePKR += feat.pricePKR;
      totalDays += feat.days;
    }
  });

  if (timeline === "express") {
    totalPricePKR += 21000;
    totalDays = Math.max(3, Math.round(totalDays * 0.55));
  }

  const selectedFeatureNames = selectedFeatures
    .map((id) => addOnFeatures.find((f) => f.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const waText = `Hi Musaddaq! I generated an estimate on your website:
- Project Type: ${selectedTypeObj?.name}
- Add-on Features: ${selectedFeatureNames || "Basic"}
- Timeline Preference: ${timeline === "express" ? "Express Delivery (3-5 Days)" : "Standard Delivery (1-2 Weeks)"}
- Estimated Price: Rs ${totalPricePKR.toLocaleString()} PKR
- Est. Timeline: ~${totalDays} Days
Let's confirm and start this project!`;

  const whatsappRedirectUrl = `https://wa.me/923001122782?text=${encodeURIComponent(waText)}`;

  return (
    <section id="estimator" className="py-24 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost &amp; Time Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Calculate Your Project Quote &amp; Timeline
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select your project requirements below to get an instant real-time price estimate in Rupees (Rs) and delivery timeframe.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Selectors */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-8">
            
            {/* Selector A: Project Type */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                a) Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-400 text-white font-semibold shadow-lg shadow-emerald-500/10"
                          : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold">{type.name}</span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          Rs {type.basePricePKR.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector B: Add-on Features */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                b) Select Required Add-on Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {addOnFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-slate-800/90 border-emerald-500/70 text-white"
                          : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? "bg-emerald-500 border-emerald-400 text-slate-950"
                            : "border-slate-700 bg-slate-900"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-slate-950 text-emerald-400" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-slate-200 block">{feat.name}</span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          +Rs {feat.pricePKR.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector C: Timeline Preference */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                c) Timeline Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  onClick={() => setTimeline("standard")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    timeline === "standard"
                      ? "bg-slate-800 border-emerald-400 text-white font-semibold"
                      : "bg-slate-950/70 border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200 mb-0.5">Standard Delivery (1-2 Weeks)</div>
                  <div className="text-[11px] text-slate-400">Regular pace testing &amp; deployment schedule</div>
                </button>

                <button
                  onClick={() => setTimeline("express")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    timeline === "express"
                      ? "bg-amber-500/10 border-amber-400 text-white font-semibold"
                      : "bg-slate-950/70 border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 mb-0.5">
                    <Zap className="w-3.5 h-3.5" /> Express Delivery (3-5 Days)
                  </div>
                  <div className="text-[11px] text-slate-400">Priority rapid execution (+ Rs 21,000)</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Price Card Summary */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">
              Live Quote &amp; Timeline
            </h3>

            <div className="space-y-3.5 mb-8 text-xs text-slate-300">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Category:</span>
                <span className="font-bold text-cyan-400">{selectedTypeObj?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Add-on Features:</span>
                <span className="font-mono text-emerald-400">{selectedFeatures.length} Selected</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Timeline:</span>
                <span className="font-mono text-amber-400">
                  {timeline === "express" ? "Express (3-5 Days)" : "Standard (1-2 Weeks)"}
                </span>
              </div>
            </div>

            {/* Display Real-time Cost in Rupees (Rs) */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/90 mb-8 text-center shadow-inner">
              <span className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                Estimated Total Quote
              </span>
              
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mb-3">
                Rs {totalPricePKR.toLocaleString()} <span className="text-xs text-slate-400 font-normal">PKR</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>Delivery: ~{totalDays} Business Days</span>
              </div>
            </div>

            {/* WhatsApp Booking Button */}
            <a
              href={whatsappRedirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-slate-950" />
              <span>Book This Project on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
