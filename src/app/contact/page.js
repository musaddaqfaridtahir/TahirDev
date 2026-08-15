import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} via phone +923111122125, WhatsApp, or project inquiry form.`,
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
