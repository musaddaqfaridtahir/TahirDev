"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, MessageSquare, Clock, Zap } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function DynamicCostEstimator() {
  const [projectType, setProjectType] = useState("ecommerce");
  const [selectedFeatures, setSelectedFeatures] = useState(["installment", "whatsapp", "admin"]);
  const [timeline, setTimeline] = useState("standard");
  const [currency, setCurrency] = useState("PKR");

  const projectTypes = [
    {
      id: "ecommerce",
      name: "E-Commerce Store",
      basePriceUSD: 280,
      basePricePKR: 78000,
      baseDays: 7,
      desc: "Full Next.js online store with cart, installment calculator, & admin panel.",
    },
    {
      id: "desktop",
      name: "Offline Desktop Software",
      basePriceUSD: 350,
      basePricePKR: 98000,
      baseDays: 10,
      desc: "100% Offline Electron.js + SQLite POS & customer credit ledger.",
    },
    {
      id: "business",
      name: "Corporate / Business Site",
      basePriceUSD: 180,
      basePricePKR: 50000,
      baseDays: 4,
      desc: "Fast Next.js company portfolio or lead generation website.",
    },
    {
      id: "custom",
      name: "Custom Web Application",
      basePriceUSD: 400,
      basePricePKR: 112000,
      baseDays: 12,
      desc: "Tailored SaaS, internal dispatch portal, or multi-user database system.",
    },
  ];

  const addOnFeatures = [
    { id: "installment", name: "Installment Calculator Engine", priceUSD: 60, pricePKR: 16800, days: 2 },
    { id: "whatsapp", name: "WhatsApp Order API Integration", priceUSD: 50, pricePKR: 14000, days: 1 },
    { id: "admin", name: "Custom Admin Analytics Panel", priceUSD: 70, pricePKR: 19600, days: 2 },
    { id: "vps", name: "Linux VPS Deployment & SSL", priceUSD: 40, pricePKR: 11200, days: 1 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType);

  let totalPriceUSD = selectedTypeObj ? selectedTypeObj.basePriceUSD : 0;
  let totalPricePKR = selectedTypeObj ? selectedTypeObj.basePricePKR : 0;
  let totalDays = selectedTypeObj ? selectedTypeObj.baseDays : 0;

  selectedFeatures.forEach((featId) => {
    const feat = addOnFeatures.find((f) => f.id === featId);
    if (feat) {
      totalPriceUSD += feat.priceUSD;
      totalPricePKR += feat.pricePKR;
      totalDays += feat.days;
    }
  });

  if (timeline === "express") {
    totalPriceUSD += 75;
    totalPricePKR += 21000;
    totalDays = Math.max(3, Math.round(totalDays * 0.55));
  }

  const selectedFeatureNames = selectedFeatures
    .map((id) => addOnFeatures.find((f) => f.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const waText = `Hi Musaddaq! I generated a project estimate:
- Category: ${selectedTypeObj?.name}
- Add-ons: ${selectedFeatureNames || "Standard"}
- Timeline: ${timeline === "express" ? "Express (3-5 Days)" : "Standard (1-2 Weeks)"}
- Estimated Quote: ${currency === "USD" ? `$${totalPriceUSD} USD` : `Rs ${totalPricePKR.toLocaleString()} PKR`}
- Est. Timeline: ~${totalDays} Business Days
Let's confirm and start this project!`;

  const whatsappRedirectUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <section id="estimator" className="py-20 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Project Cost &amp; Delivery Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Configure your project parameters to calculate a real-time price estimate and delivery timeframe.
          </p>
        </div>

        {/* Form & Live Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selectors */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                Currency Display:
              </span>
              <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setCurrency("PKR")}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                    currency === "PKR" ? "bg-emerald-500 text-slate-950 shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Rs PKR
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                    currency === "USD" ? "bg-cyan-500 text-slate-950 shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Selector 1: Category */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                1. Select Project Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  const priceLabel =
                    currency === "USD"
                      ? `$${type.basePriceUSD} USD`
                      : `Rs ${type.basePricePKR.toLocaleString()} PKR`;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-slate-800 border-cyan-400 text-white font-semibold shadow-md"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold">{type.name}</span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">{priceLabel}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector 2: Modules */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                2. Select Add-on Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {addOnFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  const featPriceLabel =
                    currency === "USD"
                      ? `+$${feat.priceUSD} USD`
                      : `+Rs ${feat.pricePKR.toLocaleString()} PKR`;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-slate-800 border-emerald-500/80 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
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
                        <span className="text-[11px] font-mono text-emerald-400">{featPriceLabel}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector 3: Timeline */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                3. Delivery Timeline Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  onClick={() => setTimeline("standard")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    timeline === "standard"
                      ? "bg-slate-800 border-cyan-400 text-white font-semibold"
                      : "bg-slate-950 border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200 mb-0.5">Standard Delivery (1-2 Weeks)</div>
                  <div className="text-[11px] text-slate-400">Regular pace QA testing &amp; deployment schedule</div>
                </button>

                <button
                  onClick={() => setTimeline("express")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    timeline === "express"
                      ? "bg-amber-500/10 border-amber-400 text-white font-semibold"
                      : "bg-slate-950 border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 mb-0.5">
                    <Zap className="w-3.5 h-3.5" /> Express Priority (3-5 Days)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Priority rapid execution ({currency === "USD" ? "+ $75 USD" : "+ Rs 21,000 PKR"})
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Card */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl sticky top-24">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">
              Quote Summary
            </h3>

            <div className="space-y-3.5 mb-8 text-xs text-slate-300">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Category:</span>
                <span className="font-bold text-cyan-400">{selectedTypeObj?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Add-on Modules:</span>
                <span className="font-mono text-emerald-400">{selectedFeatures.length} Active</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                <span className="text-slate-400">Delivery Speed:</span>
                <span className="font-mono text-amber-400">
                  {timeline === "express" ? "Express (3-5 Days)" : "Standard (1-2 Weeks)"}
                </span>
              </div>
            </div>

            {/* Calculated Box */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-8 text-center">
              <span className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                Estimated Total Quote
              </span>
              
              <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-2">
                {currency === "USD" ? `$${totalPriceUSD} USD` : `Rs ${totalPricePKR.toLocaleString()} PKR`}
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>Est. Delivery: ~{totalDays} Business Days</span>
              </div>
            </div>

            {/* Confirm CTA */}
            <a
              href={whatsappRedirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-slate-950" />
              <span>Confirm Quote on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
