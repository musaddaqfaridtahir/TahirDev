export const siteConfig = {
  name: "Musaddaq Farid Tahir",
  brandName: "Musaddaq.dev",
  studioName: "MFT Developers",
  title: "Full-Stack Next.js Developer & Custom Business Software Builder",
  description:
    "Pakistan-based Full-Stack Developer specializing in ultra-fast Next.js web applications, retail e-commerce stores with installment engines, and 100% offline desktop POS software.",
  phone: "+923111122125",
  formattedPhone: "+92 311 1122125",
  telLink: "tel:+923111122125",
  whatsappNumber: "923111122125",
  whatsappUrl: "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20new%20project!",
  githubUrl: "https://github.com/musaddaqfaridtahir",
  linkedinUrl: "https://linkedin.com",
  location: "Pakistan",

  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/projects" },
    { name: "Cost Estimator", href: "/estimator" },
    { name: "Contact", href: "/contact" },
  ],

  services: [
    {
      id: "ecommerce",
      title: "Custom E-Commerce Stores",
      badge: "High Conversion",
      description:
        "High-performance Next.js online stores tailored for retail, featuring custom monthly installment calculators, instant WhatsApp checkout, and live admin panels.",
      features: [
        "Monthly Installment & Down Payment Calculator",
        "WhatsApp Direct Order Flow & Cart System",
        "Custom Admin Panel for Inventory & Orders",
        "Local Payment Gateway Integration (JazzCash/Easypaisa/Stripe)",
      ],
      whatsappMsg: "Hi Musaddaq, I want a Custom E-Commerce Store with Installment & WhatsApp Order System.",
    },
    {
      id: "desktop-pos",
      title: "Offline Desktop Software & POS",
      badge: "100% Offline Ready",
      description:
        "Robust desktop applications built with Electron.js & SQLite. Perfect for retail shops and warehouses that need 100% reliable offline operation with WhatsApp debt/installment reminders.",
      features: [
        "Electron.js + Embedded SQLite Local Database",
        "Cash & Monthly Installment Customer Ledger",
        "Inventory Tracking & Thermal Bill Printing",
        "Automated Bulk WhatsApp & SMS Payment Reminders",
      ],
      whatsappMsg: "Hi Musaddaq, I need an Offline Desktop POS & Installment Management Software.",
    },
    {
      id: "corporate",
      title: "Corporate & Business Websites",
      badge: "Ultra Fast & SEO",
      description:
        "Modern, lightning-fast company portfolio and agency websites designed to capture leads, rank high on local search engines, and convert visitors into active clients.",
      features: [
        "Next.js App Router for 95+ Google Lighthouse Scores",
        "Local SEO Optimization for Google Search",
        "Mobile-First Responsive Glassmorphism UI",
        "Contact Forms & Instant Lead Alerts",
      ],
      whatsappMsg: "Hi Musaddaq, I need a Corporate/Business Website for my company.",
    },
    {
      id: "vps-setup",
      title: "VPS Deployment & Cloud Infrastructure",
      badge: "99.9% Uptime",
      description:
        "End-to-end cloud server configuration for Node.js, Next.js, and databases on Linux VPS (Ubuntu/Debian) with automated backups and security hardening.",
      features: [
        "Linux Server Setup (Ubuntu / Debian)",
        "Nginx Reverse Proxy & PM2 Process Manager",
        "Free SSL Certificates (Let's Encrypt / Cloudflare)",
        "Automated Daily Database Backups to Cloud",
      ],
      whatsappMsg: "Hi Musaddaq, I need VPS Server Setup & Deployment support.",
    },
  ],

  projects: [
    {
      id: "babu-electronics",
      title: "Babu Electronics — Retail E-Commerce & Installment Engine",
      category: "Full-Stack Retail E-Commerce",
      stack: ["Next.js 15", "SQLite / Node.js", "Tailwind CSS", "WhatsApp API"],
      tags: ["E-Commerce", "Installment Engine", "WhatsApp Checkout"],
      summary:
        "Full-stack retail e-commerce platform built for an electronics retailer featuring a custom installment calculator for monthly payment plans and instant WhatsApp order processing.",
      problem:
        "Retail electronics customers frequently abandon online purchases when high-value appliances (LED TVs, ACs, Refrigerators) require 100% upfront payment rather than monthly installment flexibility.",
      solution:
        "Engineered a real-time installment breakdown engine that dynamically calculates down payments, monthly EMIs, and compiles a pre-formatted order payload directly to the store's WhatsApp line.",
      impact: [
        { label: "Installment Conversion", value: "+65%" },
        { label: "Page Load Speed", value: "< 1.2s" },
        { label: "Order Checkout Time", value: "30 Seconds" },
      ],
      demoUrl: "https://babu-electronics-three.vercel.app/",
    },
    {
      id: "swiftway-logistics",
      title: "SwiftWay Logistics — Truck Dispatch & Fleet SaaS",
      category: "Logistics Fleet Operations",
      stack: ["Next.js App Router", "Node.js", "PostgreSQL", "Tailwind CSS"],
      tags: ["Fleet SaaS", "Dispatch Kanban", "Real-Time Tracking"],
      summary:
        "Dedicated truck dispatch and fleet order management SaaS platform enabling freight companies to assign drivers, monitor load statuses, and auto-generate rate confirmation PDFs.",
      problem:
        "Manual phone dispatching caused lost bill-of-lading documents, delayed driver assignments, and lack of client visibility during long-distance freight transit.",
      solution:
        "Built a real-time dispatch Kanban board with automated PDF rate confirmations, driver assignment logs, and a dedicated tracking portal for shipment clients.",
      impact: [
        { label: "Dispatch Efficiency", value: "3x Faster" },
        { label: "Paperwork Errors", value: "0%" },
        { label: "Active Loads Tracked", value: "500+" },
      ],
      demoUrl: "https://truck-dispatch-testing.vercel.app/",
    },
    {
      id: "offline-pos-desktop",
      title: "Offline Desktop POS & Customer Ledger Software",
      category: "Desktop Software (Electron.js)",
      stack: ["Electron.js", "React.js", "Embedded SQLite", "WhatsApp Reminders"],
      tags: ["Desktop POS", "100% Offline", "Bulk Payment Reminders"],
      summary:
        "Desktop POS software engineered with Electron.js & embedded SQLite to operate 100% offline for local merchants, handling credit ledgers, thermal printing, and WhatsApp debt reminders.",
      problem:
        "Shopkeepers in areas with frequent internet downtime lost access to web POS platforms, resulting in billing queues and uncollected monthly credit dues.",
      solution:
        "Developed a standalone desktop application backed by a zero-downtime local SQLite engine with thermal printer integration and background WhatsApp reminders.",
      impact: [
        { label: "Offline Uptime", value: "100%" },
        { label: "Debt Recovery Rate", value: "+40%" },
        { label: "Transaction Speed", value: "< 3 Secs" },
      ],
      demoUrl: "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20want%20a%20demo%20of%20the%20Offline%20Desktop%20POS%20Software!",
    },
    {
      id: "payment-links-gateway",
      title: "Payment Links & Merchant Invoicing Gateway",
      category: "FinTech Billing Platform",
      stack: ["Next.js 15", "Node.js API", "Tailwind CSS", "Payment API"],
      tags: ["Payment Links", "Invoice Engine", "Merchant Gateway"],
      summary:
        "Real-time merchant billing gateway enabling small businesses and freelancers to generate shareable payment links, automated PDF invoices, and monitor client receipts.",
      problem:
        "Small businesses struggle to accept digital online payments without spending weeks setting up complex e-commerce store infrastructure.",
      solution:
        "Created an instant payment link generator that produces shareable URLs, handles webhook status updates, and auto-dispatches digital PDF receipts.",
      impact: [
        { label: "Payment Settlement", value: "Instant" },
        { label: "Checkout Drop-off", value: "-45%" },
        { label: "Platform Uptime", value: "99.9%" },
      ],
      demoUrl: "https://payment-links-two.vercel.app/",
    },
  ],
};
