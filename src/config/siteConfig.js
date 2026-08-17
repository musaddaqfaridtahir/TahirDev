export const siteConfig = {
  name: "Musaddaq Farid Tahir",
  brandName: "Musaddaq.dev",
  studioName: "MFT Developers",
  title: "Senior Full-Stack Developer & Custom Software Engineer",
  description:
    "Full-Stack Developer specializing in modern Next.js web applications, retail e-commerce engines, and offline desktop POS software built for scale and reliability.",
  phone: "+923111122125",
  formattedPhone: "+92 311 1122125",
  telLink: "tel:+923111122125",
  whatsappNumber: "923111122125",
  whatsappUrl: "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20new%20project!",
  githubUrl: "https://github.com/musaddaqfaridtahir",
  linkedinUrl: "https://www.linkedin.com/in/musaddaqfaridtahir",
  location: "Pakistan",

  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/projects" },
    { name: "Estimator", href: "/estimator" },
    { name: "Contact", href: "/contact" },
  ],

  services: [
    {
      id: "ecommerce",
      title: "Custom E-Commerce Platforms",
      badge: "High Conversion",
      description:
        "High-performance Next.js online storefronts featuring automated monthly installment calculators, instant ordering flows, and admin inventory dashboards.",
      features: [
        "Monthly Installment Breakdown Engine",
        "Direct Cart & Order Processing",
        "Inventory & Product Management Admin",
        "Local & International Payment Integrations",
      ],
    },
    {
      id: "desktop-pos",
      title: "Offline Desktop Software & POS",
      badge: "100% Offline Ready",
      description:
        "Robust desktop applications built with Electron.js & embedded SQLite. Engineered for retail merchants who need 100% reliable offline ledger and billing operations.",
      features: [
        "Electron.js + Embedded SQLite Engine",
        "Customer Credit Ledgers & Thermal Receipts",
        "Stock Tracking & Daily Sales Reporting",
        "Automated Payment Due Reminder Notifications",
      ],
    },
    {
      id: "corporate",
      title: "Full-Stack Web Applications",
      badge: "Fast & Scalable",
      description:
        "Custom web platforms, client portals, and SaaS tools built with Next.js App Router, Tailwind CSS, Node.js, and relational SQL databases.",
      features: [
        "Next.js App Router for 95+ Lighthouse Scores",
        "Mobile-First Responsive Layouts",
        "RESTful API & Database Architecture",
        "Role-Based User Authentication & Control",
      ],
    },
    {
      id: "vps-setup",
      title: "VPS & Cloud Infrastructure",
      badge: "99.9% Uptime",
      description:
        "End-to-end cloud server configuration for Node.js, Next.js, and SQL databases on Linux VPS (Ubuntu) with Nginx reverse proxy and automated daily backups.",
      features: [
        "Ubuntu Linux Server Setup & Hardening",
        "Nginx Reverse Proxy & PM2 Process Management",
        "Free Automated SSL Security Certificates",
        "Daily Cloud Database Backup Schedules",
      ],
    },
  ],

  projects: [
    {
      id: "babu-electronics",
      title: "Babu Electronics — Retail E-Commerce & Installment Engine",
      category: "Full-Stack Retail E-Commerce",
      stack: ["Next.js 15", "SQLite / Node.js", "Tailwind CSS"],
      tags: ["E-Commerce", "Installment Engine", "Retail POS"],
      summary:
        "Full-stack retail e-commerce platform built for an electronics retailer featuring a custom installment calculator for monthly payment plans and instant order processing.",
      problem:
        "Retail electronics customers frequently abandon online purchases when high-value appliances require 100% upfront payment rather than monthly installment flexibility.",
      solution:
        "Engineered a real-time installment breakdown engine that dynamically calculates down payments, monthly EMIs, and compiles an instant order payload.",
      impact: [
        { label: "Installment Conversion", value: "+65%" },
        { label: "Page Load Speed", value: "< 1.2s" },
        { label: "Order Checkout Time", value: "30 Secs" },
      ],
      demoUrl: "https://babu-electronics-three.vercel.app/",
    },
    {
      id: "swiftway-logistics",
      title: "SwiftWay Logistics — Fleet Dispatch & Operations Portal",
      category: "Logistics SaaS Platform",
      stack: ["Next.js App Router", "Node.js", "PostgreSQL", "Tailwind CSS"],
      tags: ["Fleet SaaS", "Dispatch Kanban", "Real-Time Tracking"],
      summary:
        "Dedicated truck dispatch and fleet order management SaaS platform enabling freight companies to assign drivers, monitor load statuses, and auto-generate rate confirmation PDFs.",
      problem:
        "Manual phone dispatching caused lost bill-of-lading documents, delayed driver assignments, and lack of client visibility during freight transit.",
      solution:
        "Built a real-time dispatch Kanban board with automated PDF rate confirmations, driver assignment logs, and a dedicated tracking portal.",
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
      stack: ["Electron.js", "React.js", "SQLite"],
      tags: ["Desktop POS", "100% Offline", "Customer Ledgers"],
      summary:
        "Desktop POS software engineered with Electron.js & embedded SQLite to operate 100% offline for local merchants, handling credit ledgers and thermal printing.",
      problem:
        "Shopkeepers in areas with frequent internet downtime lost access to web POS platforms, resulting in billing queues and uncollected monthly credit dues.",
      solution:
        "Developed a standalone desktop application backed by a zero-downtime local SQLite engine with thermal printer integration.",
      impact: [
        { label: "Offline Uptime", value: "100%" },
        { label: "Debt Recovery Rate", value: "+40%" },
        { label: "Transaction Speed", value: "< 3 Secs" },
      ],
      demoUrl: "/contact",
    },
    {
      id: "payment-links-gateway",
      title: "Payment Links & Merchant Invoicing Gateway",
      category: "FinTech Merchant Platform",
      stack: ["Next.js 15", "Node.js API", "Tailwind CSS"],
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
