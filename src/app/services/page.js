import CoreServices from "@/components/CoreServices";
import ServicesPreview from "@/components/ServicesPreview";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Services | ${siteConfig.name}`,
  description: "Custom E-Commerce Stores, Offline Desktop POS Software, Corporate Websites & VPS Server Setup.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <CoreServices />
      <ServicesPreview />
    </div>
  );
}
