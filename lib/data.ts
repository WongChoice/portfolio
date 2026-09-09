export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  workflow: string[];
  architectureOverview: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  tools: string[];
  icon: string;
}

export const PROFILE = {
  name: "Ankit D.",
  role: "AI Automation Engineer",
  tagline: "Ex-Amazon Software Engineer building production-grade AI agents and autonomous n8n workflows designed to run 24/7 without breaking.",
  rate: "$45/hr",
  availability: "Available for new projects",
  upworkUrl: "https://www.upwork.com",
  stats: {
    badge: "Top Rated",
    jobSuccess: "100%",
    totalEarnings: "$4K+",
    jobsDone: 9,
    experienceYears: "10+",
    pedigree: "Ex-Amazon, Wipro"
  }
};

export const SERVICES: Service[] = [
  {
    id: "agents",
    title: "Autonomous AI Agents",
    description: "Stateful, multi-step AI agent systems powered by LangGraph & Claude. Designed to make autonomous decisions, execute tool commands, and recover gracefully from edge-case errors.",
    outcomes: ["Zero-human fallback handling", "Custom tool calling & API routing", "Long-term state persistence"],
    tools: ["LangGraph", "LangChain", "Claude API", "Python", "FastAPI"],
    icon: "Bot"
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description: "End-to-end multi-app enterprise workflows using n8n and custom Python microservices to automate operations across CRMs, email, and databases.",
    outcomes: ["99.9% uptime execution", "Automated error alerting & self-healing", "90%+ speed improvement"],
    tools: ["n8n", "Make", "Python", "Webhooks", "REST APIs"],
    icon: "Zap"
  },
  {
    id: "extraction",
    title: "AI Data Extraction & Document AI",
    description: "Extract structured, deterministic data from noisy unstructured sources like PDFs, invoices, legacy portals, and scanned images.",
    outcomes: ["100% structured JSON outputs", "Automated validation pipelines", "OCR + LLM reasoning"],
    tools: ["OpenAI Vision", "Document AI", "Python", "Pydantic", "OCR"],
    icon: "FileText"
  },
  {
    id: "crm",
    title: "CRM & Infrastructure Automation",
    description: "Deep integrations connecting platforms like HubSpot, Teamup, Salesforce, and custom SQL databases into a synchronized ecosystem.",
    outcomes: ["Real-time lead processing", "Bi-directional calendar syncs", "Zero data loss"],
    tools: ["HubSpot API", "Teamup", "PostgreSQL", "Webhooks"],
    icon: "Database"
  },
  {
    id: "apps",
    title: "Custom AI Applications",
    description: "Production-ready Web Applications with FastAPI backends and React/TypeScript interfaces tailored for operational visibility.",
    outcomes: ["Sub-200ms latency", "Enterprise-grade auth & logging", "Scalable cloud deployment"],
    tools: ["FastAPI", "React", "TypeScript", "Tailwind", "Docker"],
    icon: "Code"
  },
  {
    id: "scraping",
    title: "Web Scraping & ETL Pipelines",
    description: "Robust browser automation and high-throughput extraction pipelines capable of bypassing complex anti-bot systems securely.",
    outcomes: ["Distributed proxy rotation", "Continuous data synchronization", "Automated schema cleaning"],
    tools: ["Playwright", "Selenium", "BeautifulSoup", "Pandas"],
    icon: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Autonomous AI Infrastructure & Multi-Agent Fleet Orchestration",
    category: "AI Infrastructure / LangGraph",
    subtitle: "Stateful agent cluster executing complex multi-step reasoning and model routing.",
    description: "Built a distributed multi-agent system orchestrating dynamic task delegation, automated API fallback routing, and persistent transactional memory for enterprise tasks.",
    impact: "Reduced operational human processing time by 88% with automatic retry mechanisms handling API failures.",
    tech: ["LangGraph", "Python", "FastAPI", "OpenAI API", "Anthropic Claude", "Redis"],
    workflow: ["Event Webhook Trigger", "LangGraph Supervisor Node", "Sub-Agent Execution", "API Tool Call", "Validation & Storage"],
    architectureOverview: "Supervisor-worker agent architecture with state vector persistence in Redis and automated failover routing."
  },
  {
    id: "proj-2",
    title: "Production AI-Powered Workflow Automation Engine",
    category: "n8n / FastAPI / AI",
    subtitle: "Self-healing enterprise workflow engine handling thousands of daily operations.",
    description: "Engineered a hybrid n8n and Python microservice architecture that listens to custom Webhooks, enriches data via Claude LLM, and dispatches dynamic payloads.",
    impact: "Automated 12,000+ monthly manual tasks with 99.98% execution reliability.",
    tech: ["n8n", "Python", "FastAPI", "Anthropic API", "PostgreSQL"],
    workflow: ["Payload Ingestion", "Schema Validation", "AI Semantic Parsing", "Multi-Target Dispatch"],
    architectureOverview: "n8n workflow orchestration coupled with FastAPI microservices for custom cryptographic payload decryption and LLM enrichment."
  },
  {
    id: "proj-3",
    title: "AI Agent for NMLS Data Extraction & Enrichment",
    category: "Browser Automation & Document AI",
    subtitle: "High-throughput extraction pipeline extracting financial records with validation.",
    description: "Created an autonomous web scraping and OCR agent that queries state registries, navigates anti-bot protections, extracts unstructured data, and formats valid output.",
    impact: "Extracted and structured over 50,000 regulatory documents with 99.4% accuracy.",
    tech: ["Playwright", "Python", "OpenAI Vision", "Pydantic", "PostgreSQL"],
    workflow: ["Target Site Traversal", "DOM & OCR Capture", "LLM Structured Parsing", "Database Upsert"],
    architectureOverview: "Playwright dynamic headless sessions piping page artifacts into Pydantic-validated LLM extraction schema."
  },
  {
    id: "proj-4",
    title: "HubSpot CRM to Teamup Calendar Autonomous Sync",
    category: "CRM & Middleware",
    subtitle: "Bi-directional event scheduling engine with automated conflict resolution.",
    description: "Architected a real-time middleware service syncing deal updates in HubSpot with multi-team calendars in Teamup, managing timezone shifts and room assignments.",
    impact: "Eliminated scheduling double-bookings and reduced deal lead time by 3.5 days.",
    tech: ["HubSpot API", "Teamup API", "Python", "Serverless", "Webhooks"],
    workflow: ["HubSpot Deal Change", "Webhook Receiver", "Conflict Validation", "Teamup Event Update"],
    architectureOverview: "Idempotent webhook listener with exponential backoff retries and atomic transaction locks."
  },
  {
    id: "proj-5",
    title: "Directory Scraping + OCR + AI Enrichment Pipeline",
    category: "ETL & Web Data Pipelines",
    subtitle: "Automated pipeline converting raw PDF and site directories into clean CRM leads.",
    description: "Built a distributed scraping infrastructure that extracts raw contact entries, processes non-standard PDF formats via OCR, and enriches lead scores using AI.",
    impact: "Generated 35,000+ verified enriched business prospects automatically.",
    tech: ["Selenium", "Python", "OpenAI API", "Tesseract OCR", "Pandas"],
    workflow: ["Raw Data Ingestion", "OCR PDF Processing", "AI Lead Scoring", "Clean Output Storage"],
    architectureOverview: "Parallelized multi-threaded crawler sending document tokens through vision/text AI models into normalized storage."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Ankit is extremely passionate about helping to find solutions, especially around AI and data. He is a speedy communicator and very fair in his work and pricing.",
    client: "Verified Upwork Enterprise Client",
    role: "Founder, Automation Agency",
    rating: 5
  },
  {
    quote: "Did a great job and did it very quickly. Extremely clean architecture and excellent communication throughout.",
    client: "Verified Upwork Client",
    role: "CTO, SaaS Platform",
    rating: 5
  }
];

export const EXPERIENCE = [
  {
    company: "Amazon",
    role: "Software Engineer",
    period: "2019 – 2022",
    highlights: [
      "Architected backend microservices operating at massive cloud scale with strict SLA requirements.",
      "Built resilient distributed execution pipelines with telemetry, auto-scaling, and failover redundancy.",
      "Engineered automated reliability systems that prevented production downtime across critical operational nodes."
    ]
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    period: "2015 – 2019",
    highlights: [
      "Developed robust backend applications and custom data integration flows for enterprise clients.",
      "Automated legacy manual data processing workflows utilizing Python and SQL pipelines.",
      "Optimized query performance and web scraping routines for business intelligence systems."
    ]
  }
];

export const TECH_CATEGORIES = [
  {
    name: "AI & Agents",
    items: ["LangGraph", "LangChain", "OpenAI APIs", "Claude API", "RAG", "Vector DBs"]
  },
  {
    name: "Automation & Workflows",
    items: ["n8n", "Make", "Webhooks", "REST APIs", "CRM Integration"]
  },
  {
    name: "Backend & Systems",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    name: "Frontend & Apps",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Data & Scraping",
    items: ["Playwright", "Selenium", "ETL Pipelines", "Document AI / OCR"]
  }
];
