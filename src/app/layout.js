import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "Next.js Developer Pakistan",
    "Retail E-Commerce Installment Software",
    "Offline Desktop POS System",
    "Musaddaq Farid Tahir",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0F17] text-slate-100 font-sans antialiased min-h-screen flex flex-col selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
