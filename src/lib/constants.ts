import {
  Rocket,
  Code2,
  Puzzle,
  Paintbrush,
  Server,
  UploadCloud,
  Phone,
  Mail,
  MapPin,
  Zap,
  Smartphone,
  Sparkles,
  Eye,
} from "lucide-react";

export const SERVICES = [
  {
    id: "mvp",
    label: "MVP DEVELOPMENT",
    title: "Startup & MVP Development",
    description:
      "Quickly validate your concept with a market-ready MVP that captures your core idea and gets users fast.",
    icon: Rocket,
    color: "from-blue-50 to-sky-50",
  },
  {
    id: "fullcycle",
    label: "FULL CYCLE",
    title: "Full-Cycle App Development",
    description:
      "End-to-end app creation: design, development, testing, and store deployment — all under one roof.",
    icon: Code2,
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: "custom",
    label: "CUSTOM SOLUTIONS",
    title: "Custom Flutter Solutions",
    description:
      "Bespoke applications tailored to your unique business challenges, built for scale and performance.",
    icon: Puzzle,
    color: "from-sky-50 to-blue-50",
  },
  {
    id: "design",
    label: "UI/UX DESIGN",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces crafted with user psychology in mind for maximum engagement and retention.",
    icon: Paintbrush,
    color: "from-blue-50 to-violet-50",
  },
  {
    id: "backend",
    label: "BACKEND & API",
    title: "Backend & API Development",
    description:
      "Scalable server architecture with Firebase, Supabase, or custom APIs built for real-time performance.",
    icon: Server,
    color: "from-slate-50 to-blue-50",
  },
  {
    id: "deployment",
    label: "DEPLOYMENT & MAINTENANCE",
    title: "App Store Deployment & Maintenance",
    description:
      "We handle the entire submission process for App Store & Play Store, plus ongoing maintenance and support.",
    icon: UploadCloud,
    color: "from-blue-50 to-cyan-50",
  },
];

export const WHY_US_STATS = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 4.9, suffix: "", label: "Average Rating", isDecimal: true },
];

export const WHY_US_FEATURES = [
  {
    icon: Zap,
    title: "Speed That Delivers",
    description:
      "From idea to App Store in weeks, not months. Our streamlined Flutter workflow means you launch before your competition.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Excellence",
    description:
      "One codebase, every platform. iOS, Android, Web, and Desktop — all from a single Flutter codebase that we masterfully craft.",
  },
  {
    icon: Sparkles,
    title: "Pixel-Perfect Design",
    description:
      "Every screen, every animation, every interaction is designed to delight users and keep them coming back.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Weekly updates, shared Figma files, open Slack channels. You're never in the dark about your project's progress.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "First, we learn your vision and requirements to define a clear project strategy and scope.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create stunning, user-centric designs in Figma with full prototyping and iteration rounds.",
    icon: Paintbrush,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our developers turn your designs into clean, scalable Flutter code built for the future.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Rigorous testing ensures your app is bug-free, responsive, and seamless across all devices.",
    icon: Eye,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "We handle App Store & Play Store submission and ensure a smooth, successful launch.",
    icon: Rocket,
  },
];

export const PROJECTS = [
  {
    id: "atoon",
    client: "Atoon",
    title: "Ultimate Music Discovery",
    description:
      "A social music platform connecting artists and fans through real-time discovery features, personalised playlists, and live streaming integration.",
    industry: "Social / Music",
    deliverables: ["UI/UX Design", "iOS & Android App", "Marketing Website"],
    gradient: "from-blue-50 to-purple-50",
    accentColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "fintrack",
    client: "FinTrack",
    title: "Smart Portfolio Manager",
    description:
      "A powerful fintech app offering real-time portfolio tracking, AI-driven insights, and seamless brokerage integrations for retail investors.",
    industry: "FinTech / Investment",
    deliverables: ["Full-Cycle Dev", "Backend", "Admin Dashboard"],
    gradient: "from-blue-50 to-green-50",
    accentColor: "bg-green-100 text-green-700",
  },
  {
    id: "mediconnect",
    client: "MediConnect",
    title: "Telemedicine Platform",
    description:
      "A comprehensive telehealth solution enabling patients to consult doctors via video, receive e-prescriptions, and manage health records.",
    industry: "HealthTech",
    deliverables: ["Dual App", "Real-Time Video", "E-Prescriptions"],
    gradient: "from-blue-50 to-teal-50",
    accentColor: "bg-teal-100 text-teal-700",
  },
  {
    id: "localride",
    client: "LocalRide",
    title: "On-Demand Transport",
    description:
      "A ride-hailing platform with real-time GPS tracking, dynamic pricing, and driver/rider dual apps — all built with Flutter.",
    industry: "Transportation",
    deliverables: ["Driver + Rider App", "Backend", "Admin Panel"],
    gradient: "from-sky-50 to-blue-50",
    accentColor: "bg-sky-100 text-sky-700",
  },
  {
    id: "eduverse",
    client: "EduVerse",
    title: "E-Learning Platform",
    description:
      "An immersive e-learning app with course management, progress tracking, live classes, and an AI tutor assistant.",
    industry: "EdTech",
    deliverables: ["Mobile App", "Web Dashboard", "LMS"],
    gradient: "from-blue-50 to-indigo-50",
    accentColor: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "shopease",
    client: "ShopEase",
    title: "Social Commerce App",
    description:
      "A next-generation shopping app blending social media browsing with frictionless one-tap checkout and seller storefronts.",
    industry: "E-Commerce",
    deliverables: ["Mobile App", "Payment Integration", "Seller Dashboard"],
    gradient: "from-blue-50 to-cyan-50",
    accentColor: "bg-cyan-100 text-cyan-700",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Matthew West",
    role: "CEO",
    company: "Bloom Journal",
    note: "1M+ Followers",
    rating: 5.0,
    quote:
      "Outstanding product delivery. The team's dedication was unmatched. They delivered a world-class app that exceeded every expectation.",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO",
    company: "NexaFinance",
    note: "",
    rating: 4.9,
    quote:
      "The Flutter expertise here is next-level. Our fintech app went from concept to 50K users in 3 months thanks to their rapid development cycle.",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Founder",
    company: "LocalRide",
    note: "",
    rating: 5.0,
    quote:
      "They didn't just build our app — they became strategic partners. Every suggestion improved our product. Truly a top-tier Flutter agency.",
    avatar: "/images/testimonials/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Product Lead",
    company: "EduVerse",
    note: "",
    rating: 4.8,
    quote:
      "Seamless API integration, beautiful animations, flawless cross-platform performance. Working with this team was a game-changer for our edtech startup.",
    avatar: "/images/testimonials/avatar-4.jpg",
  },
];

export const PRICING_PLANS = {
  new: [
    {
      id: "basic",
      name: "Frontend Development",
      subtitle: "Basic App Package",
      priceUSD: 799,
      priceINR: 66317,
      suffix: "/project",
      featured: false,
      features: [
        "Mobile app for your users",
        "Design to working app",
        "API/service integration",
        "Smooth animations",
        "Support when you need it",
        "10-30 Day Delivery",
        "Unlimited revisions",
      ],
      cta: "Start Your Project",
    },
    {
      id: "mvp",
      name: "MVP Development",
      subtitle: "Recommended Package",
      priceUSD: 2499,
      priceINR: 207417,
      suffix: "/project",
      featured: true,
      features: [
        "Everything in Basic",
        "Admin dashboard",
        "Custom brand design",
        "Backend & database",
        "App Store deployment",
        "QA & testing",
        "Unlimited revisions",
        "30-60 Day Delivery",
      ],
      cta: "Get Started Now",
    },
    {
      id: "premium",
      name: "Full-Cycle Development",
      subtitle: "Premium Package",
      priceUSD: 4499,
      priceINR: 373417,
      suffix: "/project",
      featured: false,
      features: [
        "User + Business app",
        "Admin dashboard",
        "Premium brand design",
        "Backend & cloud infra",
        "Store deployment",
        "Full QA testing",
        "Admin panel",
        "Unlimited revisions",
        "60-90 Day Delivery",
      ],
      cta: "Build Your Vision",
    },
  ],
  maintenance: [
    {
      id: "basic-maint",
      name: "Basic Support",
      subtitle: "Essential Maintenance",
      priceUSD: 299,
      priceINR: 24817,
      suffix: "/month",
      featured: false,
      features: [
        "Bug fixes & patches",
        "OS compatibility updates",
        "Performance monitoring",
        "Monthly report",
        "Email support",
      ],
      cta: "Start Maintenance",
    },
    {
      id: "pro-maint",
      name: "Pro Support",
      subtitle: "Recommended",
      priceUSD: 599,
      priceINR: 49717,
      suffix: "/month",
      featured: true,
      features: [
        "Everything in Basic",
        "Security patches",
        "Minor feature additions",
        "Priority support",
        "Bi-weekly updates",
        "Slack channel access",
      ],
      cta: "Get Pro Support",
    },
    {
      id: "enterprise-maint",
      name: "Enterprise",
      subtitle: "Full Priority Access",
      priceUSD: 999,
      priceINR: 82917,
      suffix: "/month",
      featured: false,
      features: [
        "Everything in Pro",
        "Dedicated developer",
        "24/7 priority support",
        "Weekly video calls",
        "SLA guarantee",
        "Feature development",
      ],
      cta: "Contact Us",
    },
  ],
};

export const FAQS = [
  {
    id: "faq-1",
    question: "How long does it take to build a Flutter app?",
    answer:
      "Timelines vary based on complexity. A simple MVP typically takes 4-8 weeks, while full-cycle applications take 2-4 months. We provide detailed timelines during our initial discovery call.",
  },
  {
    id: "faq-2",
    question: "Do you provide the complete source code?",
    answer:
      "Absolutely! You receive full ownership of the source code, design files, and all project assets upon completion. Your intellectual property remains 100% yours.",
  },
  {
    id: "faq-3",
    question: "What's included in the maintenance plan?",
    answer:
      "Our maintenance includes bug fixes, OS compatibility updates, performance monitoring, security patches, and minor feature additions. We offer flexible monthly plans.",
  },
  {
    id: "faq-4",
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with both! From early-stage startups validating an MVP to established enterprises scaling their mobile presence. Our flexible packages are designed for every stage.",
  },
  {
    id: "faq-5",
    question: "What technologies do you use alongside Flutter?",
    answer:
      "We pair Flutter with Firebase, Supabase, Node.js, or Python backends depending on your needs. For state management, we use Riverpod, BLoC, or GetX based on project requirements.",
  },
  {
    id: "faq-6",
    question: "Can you redesign and improve our existing Flutter app?",
    answer:
      "Yes! We frequently take over and improve existing Flutter projects. We'll audit your codebase, identify improvements, and implement them with minimal disruption.",
  },
  {
    id: "faq-7",
    question: "How do you handle communication during the project?",
    answer:
      "We maintain transparency through weekly video updates, a shared Slack/Discord channel, live Figma access, and a project dashboard where you can track every milestone.",
  },
];

export const CONTACT_INFO = [
  {
    id: "whatsapp",
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    iconColor: "text-green-500",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    iconColor: "text-blue-500",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "hello@flutterbyte.dev",
    href: "mailto:hello@flutterbyte.dev",
    iconColor: "text-blue-500",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Working remotely worldwide",
    href: "#",
    iconColor: "text-blue-500",
  },
];

export const TRUSTED_LOGOS_ROW1 = [
  "TechFlow",
  "NexaApps",
  "LaunchPad",
  "DigiCraft",
  "AppForge",
  "CodeWave",
  "PixelNova",
  "StartupKit",
];

export const TRUSTED_LOGOS_ROW2 = [
  "CloudBase",
  "FlutterMax",
  "BlueStack",
  "DevPulse",
  "BuildRight",
  "SmartApps",
  "InnoTech",
  "CoreLogic",
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const NAV_SERVICES = [
  {
    title: "Flutter App Development",
    description: "Cross-platform mobile apps built with Flutter for iOS & Android",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed for maximum user engagement",
    icon: Paintbrush,
  },
  {
    title: "Backend Development",
    description: "Scalable server architecture, APIs, and cloud infrastructure",
    icon: Server,
  },
  {
    title: "App Maintenance",
    description: "Ongoing support, updates, and performance optimization",
    icon: UploadCloud,
  },
];
