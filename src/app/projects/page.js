import PortfolioShowcase from "@/components/PortfolioShowcase";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Case Studies | ${siteConfig.name}`,
  description: "Explore real-world case studies for Babu Electronics, SwiftWay Logistics, Offline Desktop POS, and Payment Links.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <PortfolioShowcase />
    </div>
  );
}
