import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Musaddaq Farid Tahir | Full-Stack Web & Software Developer",
  description:
    "Musaddaq Farid Tahir (MFT Developers) - Full-Stack Web Developer & Desktop Software Specialist in Pakistan. Specializing in Next.js E-commerce Stores, Web Apps, & Offline Desktop POS Systems.",
  keywords: [
    "Musaddaq Farid Tahir",
    "MFT Developers",
    "Full-Stack Web Developer Pakistan",
    "Next.js E-commerce Developer",
    "Offline POS Software Pakistan",
    "Desktop Software Specialist",
    "React Developer Pakistan",
    "Electron.js SQLite Desktop POS",
    "Installment Store E-Commerce",
  ],
  authors: [{ name: "Musaddaq Farid Tahir" }],
  metadataBase: new URL("https://musaddaq.dev"),
  openGraph: {
    title: "Musaddaq Farid Tahir | Full-Stack Web & Software Developer",
    description:
      "Full-Stack Developer & Software Specialist building high-converting E-commerce stores with installment calculators, fast Next.js web applications, and offline desktop POS software.",
    url: "https://musaddaq.dev",
    siteName: "Musaddaq.dev - MFT Developers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musaddaq Farid Tahir | Full-Stack Web & Software Developer",
    description:
      "High-Performance Next.js E-commerce Stores, Custom Web Apps, and Offline Desktop POS Software.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0B0F17] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
