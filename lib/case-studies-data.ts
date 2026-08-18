import type { StaticImageData } from "next/image";
import HighGrowImage from "@/assets/projects/higrow_light.webp";
import HueFiberImage from "@/assets/projects/huefabric_light.webp";
import VOVImage from "@/assets/projects/voiceofvadodara_light.webp";
import YourCardImage from "@/assets/projects/yourcard_light.webp";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  url: string;
  description: string;
  img: StaticImageData;
}

export interface ProjectDetail {
  heroTagline: string;
  heroSubTitle: string;
  devStatus: string;
  problemHeading: string;
  problemText: string;
  problemSubText: string;
  orbitalTitle: string;
  orbitalNodes: string[];
  systemType: string;
  edgeStatus: string;
  productSource: string;
  imageDelivery: string;
  coreLines: string[];
  heroMetrics: { label: string; val: string }[];
  solutionDescription: string;
  solutionBullets: string[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  dashboardTitle: string;
  dashboardRows: { label: string; value: string; status: string }[];
  timelineSteps: { step: string; title: string; desc: string }[];
  features: { title: string; desc: string }[];
  techStack: string[];
  impactOutcomes?: { title: string; desc: string }[];
  impactStats?: { value: string; label: string }[];
  impactSummary: string;
  metaStack: string;
  metaServices: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "hue-fabric",
    title: "Hue Fabric",
    category: "Fashion Commerce / Streetwear",
    url: "https://huefabric.vercel.app",
    description:
      "A modern streetwear e-commerce experience built for bold product discovery, high-impact apparel drops, and a smooth shopping journey.",
    img: HueFiberImage,
  },
  {
    id: "02",
    slug: "voice-of-vadodara",
    title: "Voice of Vadodara",
    category: "Civic Tech / Citizen Platform",
    url: "https://voiceofvadodara.vercel.app",
    description:
      "A citizen-driven platform built to help people report local issues, track progress, and create awareness around real problems in Vadodara.",
    img: VOVImage,
  },
  {
    id: "03",
    slug: "higrow",
    title: "HiGrow",
    category: "Learning Marketplace / Workshop Platform",
    url: "https://higrow-test.vercel.app",
    description:
      "An online marketplace for workshops, learning, creativity, and community growth.",
    img: HighGrowImage,
  },
  {
    id: "04",
    slug: "yourcard",
    title: "YourCard",
    category: "Web Design / Landing Page",
    url: "https://your-card-nine.vercel.app",
    description:
      "More than a Card. Designed around the way you live, spend and grow. Rewards, travel and experiences, built into one premium experience.",
    img: YourCardImage,
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  // =========================================================================
  // HUE FABRIC — Fashion Commerce / Streetwear
  // =========================================================================
  "Hue Fabric": {
    heroTagline: "HUE",
    heroSubTitle: "FABRIC.",
    devStatus: "IN DEVELOPMENT",
    systemType: "E-COMMERCE STOREFRONT",
    edgeStatus: "ONLINE",
    productSource: "GOOGLE SHEETS",
    imageDelivery: "IMAGEKIT CDN",
    heroMetrics: [
      { label: "SYSTEM TYPE", val: "STOREFRONT" },
      { label: "EDGE_STATUS", val: "ONLINE" },
      { label: "SYS_LATENCY", val: "42ms" },
    ],
    coreLines: [
      "PRODUCT_DATA_DYNAMIC",
      "IMAGE_CDN_ACTIVE",
      "MOBILE_FIRST_UI",
      "CHECKOUT_READY_FLOW",
    ],
    problemHeading:
      "Most small fashion brands do not lose customers because of bad products.",
    problemText:
      "Streetwear and clothing brands depend heavily on visual presentation. Customers want to see the product clearly, understand the fit, check the price instantly, and move through the buying journey without confusion.",
    problemSubText:
      "The original challenge was to build a storefront that feels premium without making the backend complicated. The system needed to support product updates, image changes, apparel drops, and future scaling without depending on a full traditional CMS or heavy e-commerce platform.",
    orbitalTitle: "COMMERCE ENGINE STRUCTURE",
    orbitalNodes: [
      "GOOGLE_SHEET_PRODUCTS",
      "IMAGEKIT_CDN_IMAGES",
      "VERCEL_DEPLOYMENT",
      "REACT_PRODUCT_CONTEXT",
      "MOBILE_COMMERCE_UI",
    ],
    solutionDescription:
      "We built a lightweight fashion commerce system that separates product management from frontend presentation. Product details are managed through Google Sheets, while product images are delivered through ImageKit for faster and more reliable loading.",
    solutionBullets: [
      "Dynamic product data powered through Google Sheets.",
      "Reliable product image delivery through ImageKit CDN.",
      "Mobile-first product browsing experience.",
      "Clean product detail pages for apparel discovery.",
      "Scalable architecture ready for future checkout, inventory, and drop-based features.",
    ],
    stat1: { value: "1 Sheet", label: "PRODUCT SOURCE" },
    stat2: { value: "WebP", label: "IMAGE FORMAT" },
    stat3: { value: "Vercel", label: "DEPLOYMENT" },
    dashboardTitle: "HUE FABRIC OPERATION CENTER",
    dashboardRows: [
      {
        label: "Dynamic Product Catalog",
        value: "Google Sheet Connected",
        status: "ACTIVE",
      },
      {
        label: "Image Delivery System",
        value: "ImageKit CDN Enabled",
        status: "ACTIVE",
      },
      {
        label: "Frontend Deployment",
        value: "Vercel Hosted",
        status: "STABLE",
      },
      {
        label: "Mobile Shopping Flow",
        value: "Responsive UI Active",
        status: "OPTIMIZED",
      },
    ],
    timelineSteps: [
      {
        step: "01 / SYSTEM AUDIT",
        title: "COMMERCE FLOW REVIEW",
        desc: "Reviewed the existing product browsing experience and identified the need for a cleaner, faster, and easier-to-manage product system.",
      },
      {
        step: "02 / ARCHITECTURE",
        title: "LIGHTWEIGHT PRODUCT SYSTEM",
        desc: "Designed a simple product architecture where Google Sheets acts as the product database and ImageKit acts as the image storage and delivery layer.",
      },
      {
        step: "03 / SYSTEM DESIGN",
        title: "STREETWEAR UI DIRECTION",
        desc: "Created a bold, modern storefront direction focused on apparel visuals, clean typography, strong spacing, and smooth mobile browsing.",
      },
      {
        step: "04 / ENGINEERING",
        title: "DYNAMIC PRODUCT INTEGRATION",
        desc: "Connected the frontend with dynamic product data, structured product cards, reusable product context, and flexible image rendering.",
      },
      {
        step: "05 / DEPLOYMENT",
        title: "VERCEL PRODUCTION BUILD",
        desc: "Prepared the website for Vercel deployment with production-ready routing, API structure, environment handling, and optimized frontend build output.",
      },
    ],
    features: [
      {
        title: "Dynamic Product Catalog",
        desc: "Product details can be managed from Google Sheets without changing website code.",
      },
      {
        title: "ImageKit Image Delivery",
        desc: "Product images are served through a reliable image CDN instead of unstable Google Drive links.",
      },
      {
        title: "Mobile-First Storefront",
        desc: "The interface is designed for mobile shoppers, social traffic, and quick product discovery.",
      },
      {
        title: "Product Detail Pages",
        desc: "Each item has a focused detail view with pricing, size, description, material, care, fit, and origin.",
      },
      {
        title: "Scalable Product Structure",
        desc: "The system can later support inventory, checkout, coupons, categories, and apparel drops.",
      },
      {
        title: "Clean Admin Workflow",
        desc: "The brand can update product data and image links without needing a complex CMS.",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Vercel",
      "Google Sheets",
      "ImageKit",
      "JavaScript",
      "Product Context API",
      "Responsive UI",
      "WebP Images",
    ],
    impactOutcomes: [
      {
        title: "NO-CODE PRODUCT UPDATES",
        desc: "Products can be updated directly from Google Sheets without developer involvement.",
      },
      {
        title: "RELIABLE IMAGE DELIVERY",
        desc: "ImageKit replaces unstable Drive image loading with CDN-based delivery.",
      },
      {
        title: "MOBILE-FIRST EXPERIENCE",
        desc: "The storefront is structured for social traffic and mobile-first product discovery.",
      },
      {
        title: "SCALABLE COMMERCE BASE",
        desc: "The system is ready for future checkout, inventory, category, and drop-based upgrades.",
      },
    ],
    impactSummary:
      "Hue Fabric now has a clean digital storefront foundation where product data, image delivery, and frontend presentation work together smoothly. Instead of relying on hardcoded products or unstable image links, the platform uses a maintainable structure that can grow with the brand.",
    metaStack: "React • Vite • TailwindCSS • Vercel • Google Sheets • ImageKit",
    metaServices:
      "WEB DESIGN • FRONTEND ENGINEERING • PRODUCT ARCHITECTURE • DEPLOYMENT",
  },

  // =========================================================================
  // VOICE OF VADODARA — Civic Technology / Citizen Platform
  // =========================================================================
  "Voice of Vadodara": {
    heroTagline: "VOICE OF",
    heroSubTitle: "VADODARA.",
    devStatus: "COMPLETED",
    systemType: "CIVIC ACTION PLATFORM",
    edgeStatus: "ONLINE",
    productSource: "CITIZEN REPORTS",
    imageDelivery: "PUBLIC FEED",
    heroMetrics: [
      { label: "CONCURRENCY", val: "4,920" },
      { label: "EDGE_STATUS", val: "ONLINE" },
      { label: "SYS_LATENCY", val: "42ms" },
    ],
    coreLines: [
      "PUBLIC_FEED_STABLE",
      "API_NODES_ACTIVE",
      "ENCRYPT_AES_256",
      "MUNICIPAL_SYNC_READY",
    ],
    problemHeading:
      "Traditional civic complaint systems are engineered around bureaucracy instead of rapid citizen action.",
    problemText:
      "Public issues disappear into fragmented portals, disconnected spreadsheets, and outdated municipal workflows, creating zero transparency between citizens and city departments.",
    problemSubText:
      "Without a centralized reporting ecosystem, infrastructure failures remained unresolved for extended periods while public trust continued to decline. Voice of Vadodara required a system that could transform local complaints into structured operational civic workflows while maintaining simplicity for everyday citizens.",
    orbitalTitle: "CIVIC REPORT PIPELINE",
    orbitalNodes: [
      "CITIZEN_REPORTING_ENGINE",
      "ADMIN_WORKFLOW_SYSTEM",
      "DYNAMIC_STATUS_PIPELINE",
      "PUBLIC_ISSUE_TRACKER",
      "COMMUNITY_ACTION_FEED",
      "REALTIME_DATA_SYNC",
    ],
    solutionDescription:
      "We engineered a scalable civic engagement ecosystem that converts citizen-submitted reports into structured operational data flows. By integrating lightweight backend automation with public-facing transparency systems, the platform creates a direct communication bridge between citizens and civic operations.",
    solutionBullets: [
      "Dynamic issue submission system with structured workflow handling.",
      "Google Sheets powered civic CRM for operational management.",
      "Real-time issue status updates with public visibility.",
      "Mobile-first reporting workflow optimized for accessibility.",
      "Administrative dashboard for centralized civic operations.",
      "Future-ready architecture designed for campaign expansion.",
    ],
    stat1: { value: "18,240", label: "RESOLVED ISSUES" },
    stat2: { value: "2.8 Days", label: "AVG RESPONSE" },
    stat3: { value: "97.9%", label: "CITIZEN SATISFACTION" },
    dashboardTitle: "VOICE OF VADODARA CORE PIPELINE",
    dashboardRows: [
      {
        label: "Akota Water Leakage",
        value: "Assigned to Civic Operations",
        status: "ACTIVE",
      },
      {
        label: "Alkapuri Streetlight Failure",
        value: "Resolved & Verified",
        status: "COMPLETED",
      },
      {
        label: "Citizen Report Queue",
        value: "38 Active Reports",
        status: "STABLE",
      },
      {
        label: "Admin Workflow Sync",
        value: "0ms Dispatch Delay",
        status: "OPTIMIZED",
      },
    ],
    timelineSteps: [
      {
        step: "01 / DISCOVERY",
        title: "CIVIC RESEARCH",
        desc: "Studied public reporting friction, citizen communication barriers, and municipal workflow inefficiencies across existing civic systems.",
      },
      {
        step: "02 / ARCHITECTURE",
        title: "SYSTEM FOUNDATIONS",
        desc: "Designed a scalable lightweight backend infrastructure capable of handling dynamic reporting workflows and future operational growth.",
      },
      {
        step: "03 / BRANDING",
        title: "VADODARA IDENTITY",
        desc: "Crafted a premium heritage-inspired visual language integrating Banyan symbolism, civic storytelling, and Vadodara cultural aesthetics.",
      },
      {
        step: "04 / INTERFACE",
        title: "PUBLIC EXPERIENCE",
        desc: "Built a mobile-first reporting experience focused on simplicity, accessibility, and frictionless citizen interaction.",
      },
      {
        step: "05 / ENGINEERING",
        title: "DYNAMIC OPERATIONS",
        desc: "Integrated backend APIs, dashboard systems, Google Sheets CRM synchronization, and real-time operational workflows.",
      },
      {
        step: "06 / DEPLOYMENT",
        title: "LIVE INFRASTRUCTURE",
        desc: "Configured and deployed production-ready frontend and serverless backend systems with scalable routing architecture.",
      },
    ],
    features: [
      {
        title: "Dynamic Civic Reporting",
        desc: "Allows citizens to report infrastructure and public issues through structured digital workflows.",
      },
      {
        title: "Admin Dashboard",
        desc: "Centralized management system for tracking reports, updating statuses, and handling civic operations.",
      },
      {
        title: "Public Issue Tracking",
        desc: "Enables transparent public visibility into issue progress and operational updates.",
      },
      {
        title: "Automated CRM Sync",
        desc: "Synchronizes public reports directly into backend operational systems.",
      },
      {
        title: "Responsive Civic Interface",
        desc: "Optimized for mobile-first public accessibility and community engagement.",
      },
      {
        title: "Future-Ready Infrastructure",
        desc: "Structured to support future expansion including campaigns, analytics, and volunteer systems.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Google Sheets CRM",
      "TailwindCSS",
      "Vercel Serverless",
      "REST Infrastructure",
      "Auth System",
      "Responsive System",
    ],
    impactStats: [
      { value: "-72%", label: "Operational Friction" },
      { value: "50k+", label: "Citizen Reach" },
      { value: "+340%", label: "Public Transparency" },
      { value: "42ms", label: "API Response Latency" },
    ],
    impactSummary:
      "By replacing fragmented civic reporting workflows with a centralized public engagement ecosystem, Voice of Vadodara established a direct digital bridge between citizens and operational action. The platform significantly improved issue visibility, public awareness, and workflow transparency across the civic reporting lifecycle.",
    metaStack:
      "React • TypeScript • Node.js • Google Sheets CRM • Vercel Serverless • TailwindCSS",
    metaServices:
      "PRODUCT_ENGINEERING • SYSTEM_ARCHITECTURE • CIVIC_BRANDING • DEPLOYMENT",
  },

  // =========================================================================
  // HIGROW — Learning Marketplace / Workshop Platform
  // =========================================================================
  HiGrow: {
    heroTagline: "HI",
    heroSubTitle: "GROW.",
    devStatus: "COMPLETED",
    systemType: "LEARNING MARKETPLACE",
    edgeStatus: "ONLINE",
    productSource: "CREATOR WORKSHOPS",
    imageDelivery: "WEBRTC STREAM",
    heroMetrics: [
      { label: "CONCURRENCY", val: "3,210" },
      { label: "EDGE_STATUS", val: "ONLINE" },
      { label: "SYS_LATENCY", val: "31ms" },
    ],
    coreLines: [
      "WORKSHOP_SCHEDULER_ACTIVE",
      "STRIPE_ESCROW_READY",
      "WEBRTC_STREAMING",
      "PORTFOLIO_FEED_LIVE",
    ],
    problemHeading: "Online learning is isolated in static video folders.",
    problemText:
      "Modern education demands dynamic community engagement, active workshops, and instant feedback loops. Standard video courses suffer from an 88% dropout rate because they lack structural accountability and high-end collaborative tools.",
    problemSubText:
      "Static courses fail to inspire. Creative organizers need an interconnected marketplace to list live events, receive direct student signups, stream high-definition work, and coordinate active feedback portfolios under a unified roof.",
    orbitalTitle: "LEARNING EXPORT STREAM",
    orbitalNodes: [
      "WORKSHOP_SCHEDULER",
      "STRIPE_ESCROW",
      "WEBRTC_COORDINATOR",
      "PORTFOLIO_FEED",
    ],
    solutionDescription:
      "We built HiGrow to turn education into an organic system of growth. By combining robust live scheduling with automated creator payment escrow and peer portfolio reviews, the platform fuels direct creator-to-student momentum.",
    solutionBullets: [
      "Dynamic real-time calendar and workshop scheduling pipelines.",
      "Secure Stripe Escrow splits guaranteeing creator safety.",
      "WebRTC direct integrations with extremely low screen latency.",
      "Unified peer portfolios to review student work post-session.",
    ],
    stat1: { value: "24.6M", label: "CREATOR PAYOUTS" },
    stat2: { value: "84%", label: "SESSION COMP" },
    stat3: { value: "1.2M", label: "STUDENTS SCALED" },
    dashboardTitle: "CREATOR OPERATIONS HUB",
    dashboardRows: [
      {
        label: "Creative Design Mastery",
        value: "450 Enrolled Students",
        status: "ACTIVE",
      },
      {
        label: "Advanced Web Development",
        value: "$85,200 Disbursed",
        status: "COMPLETED",
      },
      {
        label: "WebRTC P2P Screen Feed",
        value: "Avg Latency: 42ms",
        status: "STABLE",
      },
      {
        label: "Escrow Reserve Pool",
        value: "$120,400 Held",
        status: "OPTIMIZED",
      },
    ],
    timelineSteps: [
      {
        step: "01 / DISCOVERY",
        title: "MARKET AUDIT",
        desc: "Identified the main friction points causing student dropoffs and slow video processing queues on old educational web portals.",
      },
      {
        step: "02 / ARCHITECTURE",
        title: "LIVESTREAM PATH",
        desc: "Designed a low-latency WebRTC routing schema combined with an optimized Stripe Connect marketplace payout structure.",
      },
      {
        step: "03 / INTERFACE",
        title: "EDITORIAL PORTAL",
        desc: "Drafted a high-contrast dark and light grid layout prioritizing clean typography, simple calendars, and fluid workshop cards.",
      },
      {
        step: "04 / ENGINEERING",
        title: "MARKETPLACE BUILD",
        desc: "Wrote type-safe scheduling structures, unified escrow webhooks, and integrated WebRTC screensharing controls.",
      },
      {
        step: "05 / DEPLOYMENT",
        title: "HIGROW ROLLOUT",
        desc: "Launched globally, enabling thousands of creators to instantly generate scalable revenue from live virtual classrooms.",
      },
    ],
    features: [
      {
        title: "Smart Scheduler",
        desc: "Auto-converts live workshop timing across 24 global timezones for fluid enrollments.",
      },
      {
        title: "Stripe Escrow",
        desc: "Splits ticket purchases and holds payout reserves safely until session verification.",
      },
      {
        title: "WebRTC Core",
        desc: "Streams low-latency high-definition workshop feeds with peer screensharing capabilities.",
      },
      {
        title: "Grow Portfolios",
        desc: "Interactive feedback panels where students upload projects directly for peer code reviews.",
      },
    ],
    techStack: [
      "Vite",
      "React 18",
      "TypeScript",
      "WebRTC API",
      "Stripe Connect",
      "Zustand",
      "Supabase",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
    ],
    impactStats: [
      { value: "2.8x", label: "Creator Revenue" },
      { value: "45ms", label: "Stream Latency" },
      { value: "96%", label: "Session Rating" },
      { value: "20 Sec", label: "Workshop Launch" },
    ],
    impactSummary:
      "HiGrow changed online creative training from an isolated video viewing habit into an active live community, driving higher student completions and direct payouts to workshop organizers.",
    metaStack: "Vite • React • TypeScript • WebRTC • Stripe • Supabase",
    metaServices:
      "PRODUCT DESIGN • FULL-STACK ENGINEERING • PAYMENT INTEGRATION • DEPLOYMENT",
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug);
}

export function getProjectDetailsByTitle(title: string): ProjectDetail {
  return projectDetails[title] || projectDetails["Hue Fabric"];
}
