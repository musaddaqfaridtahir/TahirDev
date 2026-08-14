"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, MessageSquare, Clock, Zap, DollarSign } from "lucide-react";

export default function PricingEstimator() {
  const [projectType, setProjectType] = useState("ecommerce");
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "dashboard"]);
  const [urgency, setUrgency] = useState("normal");

  const projectTypes = [
    { id: "ecommerce", name: "E-Commerce Store", basePrice: 250, baseDays: 7 },
    { id: "webapp", name: "Full-Stack Web App", basePrice: 300, baseDays: 8 },
    { id: "desktop", name: "Offline POS Software", basePrice: 350, baseDays: 10 },
    { id: "vps", name: "VPS & API Setup", basePrice: 150, baseDays: 3 },
  ];

  const availableFeatures = [
    { id: "payment", name: "Payment Gateway (JazzCash / Stripe / Card)", price: 80, days: 2 },
    { id: "dashboard", name: "Custom Admin Analytics Dashboard", price: 70, days: 2 },
    { id: "auth", name: "User Auth & Multi-role Access", price: 50, days: 1 },
    { id: "offlinesync", name: "Offline SQL Local Database & Auto-Sync", price: 100, days: 3 },
    { id: "vpssetup", name: "Linux VPS Deployment + Free SSL", price: 40, days: 1 },
    { id: "seo", name: "Advanced Speed & Technical SEO", price: 50, days: 1 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentProjectType = projectTypes.find((p) => p.id === projectType);

  let totalPrice = currentProjectType ? currentProjectType.basePrice : 0;
  let totalDays = currentProjectType ? currentProjectType.baseDays : 0;

  selectedFeatures.forEach((featId) => {
    const feat = availableFeatures.find((f) => f.id === featId);
    if (feat) {
      totalPrice += feat.price;
      totalDays += feat.days;
    }
  });

  if (urgency === "fast") {
    totalPrice += 70;
    totalDays = Math.max(3, Math.round(totalDays * 0.65));
  }

  const selectedFeatureNames = selectedFeatures
    .map((id) => availableFeatures.find((f) => f.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const messageText = encodeURIComponent(
    `Hi Musaddaq! I estimated my project using your site:\n- Project Type: ${currentProjectType?.name}\n- Features: ${selectedFeatureNames || "Basic"}\n- Delivery Speed: ${
      urgency === "fast" ? "Express Delivery" : "Standard Delivery"
    }\n- Estimated Quote: $${totalPrice} USD (~${totalDays} days).\nLet's get started!`
  );

  const whatsappLink = `https://wa.me/923111122125?text=${messageText}`;

  return (
    <section id="estimator" className="py-20 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Instant Project Price &amp; Timeline Estimator
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Customize your options below for an instant transparent cost estimate and delivery timeline.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selection Area */}
          <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
            
            {/* Step 1: Select Project Type */}
            <div className="mb-8">
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                1. Select Project Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      projectType === type.id
                        ? "bg-cyan-500/10 border-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/10"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold">{type.name}</span>
                      <span className="text-xs font-mono text-cyan-400">From ${type.basePrice}</span>
                    </div>
                    <span className="text-xs text-slate-400">Est. ~{type.baseDays} business days</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Custom Features */}
            <div className="mb-8">
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                2. Select Required Features &amp; Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-slate-800 border-emerald-500/60 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
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
                        <span className="text-xs font-medium text-slate-200 block">{feat.name}</span>
                        <span className="text-[11px] font-mono text-slate-400">+${feat.price} USD</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed & Urgency */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                3. Delivery Speed
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setUrgency("normal")}
                  className={`flex-1 py-3 px-4 rounded-xl border text-center text-xs font-mono transition-all ${
                    urgency === "normal"
                      ? "bg-slate-800 border-cyan-400 text-cyan-400 font-bold"
                      : "bg-slate-950/60 border-slate-800 text-slate-400"
                  }`}
                >
                  Standard Delivery
                </button>
                <button
                  onClick={() => setUrgency("fast")}
                  className={`flex-1 py-3 px-4 rounded-xl border text-center text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    urgency === "fast"
                      ? "bg-amber-500/10 border-amber-400 text-amber-400 font-bold"
                      : "bg-slate-950/60 border-slate-800 text-slate-400"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Express 35% Faster (+ $70)
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              Project Estimate Summary
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Selected Service:</span>
                <span className="font-semibold text-cyan-400">{currentProjectType?.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Selected Add-ons:</span>
                <span className="font-mono text-xs text-emerald-400">{selectedFeatures.length} Modules</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-300">
                <span>Delivery Pace:</span>
                <span className="font-mono text-xs text-amber-400">
                  {urgency === "fast" ? "Express Priority" : "Standard"}
                </span>
              </div>
            </div>

            {/* Calculated Big Numbers */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 mb-8 text-center">
              <span className="text-xs font-mono text-slate-400 block mb-1">Estimated Cost Starting From</span>
              <div className="text-4xl font-extrabold text-white font-mono mb-2">
                ${totalPrice} <span className="text-xs text-slate-400 font-normal">USD</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Time: ~{totalDays} Days</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Book Quote on WhatsApp</span>
            </a>

            <p className="text-[11px] text-slate-400 text-center mt-3 font-mono">
              * Final quote confirmed after reviewing project requirements.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
