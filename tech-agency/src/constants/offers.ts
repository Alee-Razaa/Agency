export interface AddOn {
  title: string;
  days: number;
  price: number;
}

export interface Offer {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  deliveryDays: number;
  views: number;
  sales: number;
  ctaLink: string;
  images: string[];
  deliverables: string[];
  exclusions: string[];
  requirements: string[];
  workflow: string[];
  addOns: AddOn[];
}

export const OFFERS_DATA: Offer[] = [
  {
    id: 1,
    slug: "ai-voice-agent",
    title: "AI Voice Agent for Calls, Appointment Booking & Sales Automation",
    tagline: "Enhance Your Business Operations with a Custom AI Voice Agent",
    shortDesc: "Get premium custom AI Voice Agents that automate appointments, lead qualification, and 24/7 support.",
    longDesc: "Get premium custom AI Voice Agent that automates appointment scheduling, lead qualification, and customer support for your business, available 24/7. This solution goes beyond standard chatbots by reasoning, planning, and executing tasks tailored to your needs.",
    price: 260,
    deliveryDays: 4,
    views: 23,
    sales: 0,
    ctaLink: "https://www.peopleperhour.com/hourlie/ai-voice-agent-for-calls-appoinment-booking-sales-automation/1118141",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Custom Voice AI Agent supporting up to three scenarios",
      "Workflow automation across multiple platforms",
      "Delivery within five to seven days",
      "Comprehensive documentation and thirty days of support",
      "Unlimited revisions provided during the development phase"
    ],
    exclusions: [
      "Ongoing management and support beyond 30 days",
      "Custom large language model (LLM) fine-tuning",
      "White-label or branded dashboard solution alternatives",
      "Advanced voice cloning customization options",
      "Multi-language support capabilities",
      "Additional integrations beyond three systems"
    ],
    requirements: [
      "A clear description of your business and main use case",
      "Access to your CRM, calendar, or other systems for integration",
      "Call flow or appointment booking requirements"
    ],
    workflow: [
      "Scoping call to define objectives and technology stack",
      "Development and testing of AI agents",
      "Optimization, fine-tuning, and documentation",
      "Handoff phase including training and support"
    ],
    addOns: [
      { title: "Advanced voice customization (custom voice, accent, tone)", days: 3, price: 250 },
      { title: "Integrate additional platforms (beyond 3 included)", days: 2, price: 100 },
      { title: "Enable multi-language support (max 2)", days: 2, price: 200 },
      { title: "Express delivery: Complete all work in 1 working day", days: -3, price: 200 }
    ]
  },
  {
    id: 2,
    slug: "full-stack-web-app",
    title: "Build Full Stack Web App with Lovable, Replit, Claude Cursor",
    tagline: "Rapid MVP & Application Production Pipeline Frameworks",
    shortDesc: "Deploy high-performance frontend configurations with Supabase integrations under rapid cycles.",
    longDesc: "Let's build fast. Let's validate faster. I deliver everything you need across the development, deployment, and maintenance lifecycle using next-generation tools like Lovable, Replit, and Cursor.",
    price: 260,
    deliveryDays: 4,
    views: 26,
    sales: 0,
    ctaLink: "https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Clean, responsive frontend (Next.js + React + Tailwind CSS)",
      "User authentication (Supabase email signup/login ready)",
      "Database setup (Supabase / MongoDB Database Matrix)",
      "Live deployment on production edge surfaces (Vercel, Netlify)",
      "GitHub repo handoff (Full ownership)",
      "Complete detailed documentation guides"
    ],
    exclusions: [
      "Payment gateway live processing structures",
      "Advanced custom deep AI neural tool integration",
      "Deep semantic SEO and AEO optimizations"
    ],
    requirements: [
      "Your core app idea outlined in 1 descriptive paragraph",
      "Key list of features and pages required",
      "Design references (3 websites you like)"
    ],
    workflow: [
      "Architecture alignment and technology mapping roadmap",
      "Rapid component engineering and database wireframing",
      "Authentication hooks wiring and API testing cycles",
      "Production deployment handoff"
    ],
    addOns: [
      { title: "One-time payments or subscriptions - Stripe Integration", days: 2, price: 200 },
      { title: "Deploy to production Custom Domain + Secure SSL", days: 1, price: 100 },
      { title: "Analytics dashboard for user tracking, events, revenue", days: 2, price: 150 },
      { title: "Optimize for SEO and AI search with meta tags", days: 2, price: 150 },
      { title: "Custom AI chatbot (Claude API or OpenAI) integration", days: 2, price: 150 },
      { title: "Express delivery: Complete basic scope in 1 working day", days: -3, price: 400 }
    ]
  },
  {
    id: 3,
    slug: "cross-channel-commerce",
    title: "Cross-Channel Commerce Hubs (Shopify / TikTok / IG Shops)",
    tagline: "Sync Inventories & Automate Checkouts Across Social Matrices",
    shortDesc: "Integrate live cross-channel merchant systems directly with real-time automated order inventory tracking.",
    longDesc: "Bring your product line to where your audience drops attention. I build centralized inventory synchronization frameworks linking your backend catalogs instantly to TikTok Shops, Instagram Storefronts, and Shopify cores.",
    price: 340,
    deliveryDays: 5,
    views: 45,
    sales: 1,
    ctaLink: "https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473",
    images: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Shopify Store configuration & multi-sales channel activation",
      "Live TikTok Shop and Instagram Catalog dynamic sync pairing",
      "Automated unified stock management rules engine",
      "Pixel tracking deployment for cross-platform analytics"
    ],
    exclusions: [
      "Paid ad spend budget accounts",
      "Product sourcing or manufacturer relations",
      "Direct copy creation for thousands of inventory stock units"
    ],
    requirements: [
      "Active merchant configurations or platform login parameters",
      "High-resolution catalog product images and variants lists"
    ],
    workflow: [
      "Inventory schema validation",
      "API webhook structural synchronization bridging shops",
      "Sandbox transactional purchase runs",
      "Live asset handoff"
    ],
    addOns: [
      { title: "Custom abandoned cart automated email sequences", days: 2, price: 90 },
      { title: "Advanced upsell application script setups", days: 1, price: 75 }
    ]
  },
  {
    id: 4,
    slug: "seo-aeo-engines",
    title: "Visibility Dominance Engines (SEO / AEO Optimization)",
    tagline: "Rank Across Legacy Algorithms and LLM Answer Models",
    shortDesc: "Optimize brand real estate across next-generation generative answer models and traditional ranking algorithms.",
    longDesc: "Traditional search is changing. I engineer schema structures and optimize index structures to ensure your service models clear visibility thresholds when queried by generative AI engines and standard crawlers.",
    price: 290,
    deliveryDays: 6,
    views: 19,
    sales: 0,
    ctaLink: "https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Comprehensive AI search citation audit mapping profiles",
      "Semantic JSON-LD structure layout optimization",
      "High-intent keyword matrix research for LLM discovery modules",
      "Core Web Vitals acceleration performance tuning"
    ],
    exclusions: [
      "Ongoing continuous monthly backlink building retainers",
      "Heavy multi-page legacy content ghostwriting models"
    ],
    requirements: [
      "Google Search Console access parameters",
      "Target list of structural competitors"
    ],
    workflow: [
      "Technical crawler diagnostic analysis",
      "Semantic architecture structural rewrite implementation",
      "Vector visibility rank tracking indexing baseline configuration",
      "Performance sign-off validation"
    ],
    addOns: [
      { title: "Competitor content gap strategy roadmap formulation", days: 2, price: 120 },
      { title: "Automated real-time schema validator tooling integration", days: 1, price: 80 }
    ]
  },
  {
    id: 5,
    slug: "content-automation",
    title: "Programmatic Content Automation Pipelines via n8n / Make",
    tagline: "Deploy Zero-Touch Omnichannel Asset Production Systems",
    shortDesc: "Architect programmatic asset generation, deployment scripts, and delivery pipelines powered by Make/n8n.",
    longDesc: "Eliminate manual file movements and asset editing overhead. I build automated multi-channel logic blocks using n8n or Make to automatically pull data, stitch visuals, and distribute content on autopilot.",
    price: 310,
    deliveryDays: 4,
    views: 38,
    sales: 2,
    ctaLink: "https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Custom n8n or Make structural pipeline configuration blueprint",
      "Multi-platform API integration connection array maps",
      "Dynamic data parsing templates for auto-generation assets",
      "Unified failure logging monitoring notification rules"
    ],
    exclusions: [
      "Platform API paywall premium costs",
      "Manual content moderation adjustments"
    ],
    requirements: [
      "Make or n8n organization access privileges",
      "Target asset generation design rules frameworks"
    ],
    workflow: [
      "Data routing schematic design mapping",
      "Webhook connection payload tests",
      "Error handling and exception logic structural integration",
      "Handoff training"
    ],
    addOns: [
      { title: "Advanced secure data collection logging system templates", days: 1, price: 95 },
      { title: "Additional 3 cross-channel distribution pipeline configurations", days: 2, price: 140 }
    ]
  },
  {
    id: 6,
    slug: "enterprise-dashboards",
    title: "Enterprise Database Sync & Real-Time Analytics Boards",
    tagline: "Consolidate Broken Operational Pipelines Into Single Panels",
    shortDesc: "Build lightning-fast server dashboards mapping real-time analytical event metrics with charting engine matrices.",
    longDesc: "Stop guessing your daily throughput or operational health. I build secure analytical monitoring dashboards mapping directly to unified MongoDB or Postgres setups to surface performance data instantly.",
    price: 450,
    deliveryDays: 7,
    views: 52,
    sales: 4,
    ctaLink: "https://www.peopleperhour.com/hourlie/build-full-stack-web-app-with-lovable-replit-claude-cursor/1118473",
    images: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
    ],
    deliverables: [
      "Interactive data dashboard built with Chart.js or Tremor layouts",
      "Real-time streaming websocket data connectivity setups",
      "High-security encrypted administrative login boundaries",
      "Custom PostgreSQL/MongoDB database migration configuration mapping"
    ],
    exclusions: [
      "Third-party commercial cloud database platform subscription charges",
      "Manual multi-year legacy physical paper document data input tracking"
    ],
    requirements: [
      "Database host server access protocols",
      "KPI dictionary layout metrics spreadsheet configuration specs"
    ],
    workflow: [
      "Database schema entity validation layout alignment",
      "API data aggregation structural coding development",
      "UI chart component binding optimization",
      "Security audit deployment verification"
    ],
    addOns: [
      { title: "Automated Slack / Telegram real-time milestone metrics reporting hooks", days: 1, price: 110 },
      { title: "Export tracking module generation engines (CSV/PDF dynamic formatting)", days: 2, price: 130 }
    ]
  }
];
