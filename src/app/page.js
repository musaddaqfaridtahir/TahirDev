import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import WorkProcess from "@/components/WorkProcess";
import DynamicCostEstimator from "@/components/DynamicCostEstimator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CoreServices />
        <PortfolioShowcase />
        <WorkProcess />
        <DynamicCostEstimator />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
