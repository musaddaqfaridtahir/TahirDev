import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import WorkProcess from "@/components/WorkProcess";
import DynamicCostEstimator from "@/components/DynamicCostEstimator";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreServices />
      <PortfolioShowcase />
      <WorkProcess />
      <DynamicCostEstimator />
      <ContactSection />
    </>
  );
}
