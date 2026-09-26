export type Service = {
  slug: string;
  index: string;
  title: string;
  body: string;
  tags: string[];
  icon:
    | "ai"
    | "fullstack"
    | "mobile"
    | "design"
    | "staff"
    | "cloud"
    | "strategy"
    | "qa"
    | "data";
  cover: string;
  coverAlt: string;
  overview: string;
  deliverables: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "ai-development",
    index: "01",
    title: "AI Development",
    body: "Custom AI solutions, LLM integrations, and intelligent automation workflows.",
    tags: ["Generative AI", "Process Automation", "ML Models"],
    icon: "ai",
    cover: "/services/ai-development.jpg",
    coverAlt: "AI systems and neural network visualization",
    overview:
      "We design and ship AI that earns its place in production — agents, LLM integrations, and automation that reduce toil without sacrificing control. From discovery to evaluation harnesses, every model path is measurable.",
    deliverables: [
      "LLM & agent architectures tailored to your domain",
      "Retrieval pipelines and evaluation harnesses",
      "Automation workflows with human-in-the-loop controls",
      "Observability, cost budgets, and rollout plans",
    ],
    process: [
      "Map decisions, data, and risk boundaries",
      "Prototype thin slices with clear success metrics",
      "Harden for latency, cost, and failure modes",
      "Ship with monitoring and iteration loops",
    ],
  },
  {
    slug: "full-stack-development",
    index: "02",
    title: "Full Stack Development",
    body: "Scalable web applications with modern frontend and robust backend architecture.",
    tags: ["Next.js & React", "API Design", "Cloud Native"],
    icon: "fullstack",
    cover: "/services/full-stack-development.jpg",
    coverAlt: "Full stack development workspace with code",
    overview:
      "End-to-end product engineering — interfaces that feel exact, APIs that hold under load, and infrastructure that stays boring on purpose. We build systems teams can own and extend.",
    deliverables: [
      "Product web apps (Next.js, React, TypeScript)",
      "API design, auth, and data modeling",
      "Performance, accessibility, and SEO foundations",
      "CI/CD and staging environments ready for growth",
    ],
    process: [
      "Align scope, architecture, and delivery milestones",
      "Ship vertical slices with reviewable quality bars",
      "Harden for scale, security, and operability",
      "Hand off with docs and clear ownership",
    ],
  },
  {
    slug: "mobile-app-development",
    index: "03",
    title: "Mobile App Development",
    body: "Cross-platform mobile experiences that users love on iOS and Android.",
    tags: ["React Native", "Native Performance", "Real-Time Features"],
    icon: "mobile",
    cover: "/services/mobile-app-development.jpg",
    coverAlt: "Mobile application interface on a smartphone",
    overview:
      "Mobile products that feel native without doubling your team. We ship React Native and hybrid experiences with performance budgets, offline resilience, and store-ready polish.",
    deliverables: [
      "iOS & Android apps from a shared codebase",
      "Push, realtime, and offline-first patterns",
      "App Store & Play release pipelines",
      "Analytics, crash reporting, and crash-free targets",
    ],
    process: [
      "Define journeys, devices, and performance bars",
      "Build shared UI with platform-specific care",
      "Test on real devices and edge networks",
      "Launch, monitor, and iterate in short cycles",
    ],
  },
  {
    slug: "ui-ux-design",
    index: "04",
    title: "UI/UX Design",
    body: "User-centered design that balances aesthetics with conversion and usability.",
    tags: ["User Research", "Prototyping", "Design Systems"],
    icon: "design",
    cover: "/services/ui-ux-design.jpg",
    coverAlt: "UI UX design system and interface mockups",
    overview:
      "Design that holds under scrutiny — research-backed flows, precise interfaces, and systems engineers can implement without guesswork. Beauty that converts, not decoration.",
    deliverables: [
      "Research, flows, and interaction models",
      "High-fidelity UI and interactive prototypes",
      "Design systems and component libraries",
      "Handoff specs engineers actually use",
    ],
    process: [
      "Clarify users, jobs, and constraints",
      "Explore structure before surface polish",
      "Validate with prototypes and feedback",
      "Systematize for consistent shipping",
    ],
  },
  {
    slug: "staff-augmentation",
    index: "05",
    title: "Staff Augmentation",
    body: "Skilled engineers who integrate seamlessly with your existing team.",
    tags: ["Senior Developers", "Flexible Scaling", "Quick Onboarding"],
    icon: "staff",
    cover: "/services/staff-augmentation.jpg",
    coverAlt: "Engineering team collaborating in a studio",
    overview:
      "Senior talent that embeds with your rituals, tools, and standards — not bodies on a bench. We scale capacity without diluting quality or culture.",
    deliverables: [
      "Senior engineers matched to your stack",
      "Flexible engagement length and team size",
      "Onboarding into your repos and process",
      "Weekly reporting and clear accountability",
    ],
    process: [
      "Scope skills, seniority, and start date",
      "Match candidates and run technical fit",
      "Embed with your ceremonies and tooling",
      "Review outcomes and adjust composition",
    ],
  },
  {
    slug: "cloud-devops",
    index: "06",
    title: "Cloud & DevOps",
    body: "Infrastructure that scales with your business on AWS, GCP, and Vercel.",
    tags: ["CI/CD Pipelines", "Kubernetes", "Monitoring"],
    icon: "cloud",
    cover: "/services/cloud-devops.jpg",
    coverAlt: "Cloud infrastructure and global network visualization",
    overview:
      "Infrastructure that stays quiet in production. Pipelines, clusters, and observability designed so shipping is routine — and incidents are rare, short, and explained.",
    deliverables: [
      "Cloud architecture on AWS, GCP, or Vercel",
      "CI/CD, IaC, and environment promotion",
      "Kubernetes / container platforms where needed",
      "Monitoring, alerting, and runbooks",
    ],
    process: [
      "Audit current state and failure modes",
      "Design for reliability and cost control",
      "Automate deploy and rollback paths",
      "Instrument, document, and train owners",
    ],
  },
  {
    slug: "product-strategy",
    index: "07",
    title: "Product Strategy",
    body: "Clarity on what to build next — roadmaps, discovery, and go-to-market alignment.",
    tags: ["Discovery", "Roadmapping", "MVP Scope"],
    icon: "strategy",
    cover: "/services/product-strategy.jpg",
    coverAlt: "Product strategy workshop and planning session",
    overview:
      "Before code, we help you decide. Discovery sprints, MVP boundaries, and roadmaps that connect ambition to sequencing — so engineering time lands where it matters.",
    deliverables: [
      "Problem framing and opportunity maps",
      "MVP scope and release sequencing",
      "Stakeholder alignment workshops",
      "Metrics frameworks for learning loops",
    ],
    process: [
      "Interview stakeholders and users",
      "Pressure-test assumptions with evidence",
      "Prioritize outcomes over feature lists",
      "Hand off a build-ready plan to delivery",
    ],
  },
  {
    slug: "qa-automation",
    index: "08",
    title: "QA & Automation",
    body: "Quality systems that catch issues early — automated tests, CI gates, and release confidence.",
    tags: ["Test Automation", "CI Gates", "Release Quality"],
    icon: "qa",
    cover: "/services/qa-automation.jpg",
    coverAlt: "Quality assurance and software testing workspace",
    overview:
      "Quality as a system, not a final checkbox. We build automated coverage, CI gates, and release discipline so every ship is calmer — and regressions rarer.",
    deliverables: [
      "Unit, integration, and E2E automation",
      "CI quality gates and flake reduction",
      "Performance and regression suites",
      "Release checklists and ownership maps",
    ],
    process: [
      "Map risk surfaces and critical journeys",
      "Automate the highest-value paths first",
      "Wire gates into your delivery pipeline",
      "Tune coverage as the product evolves",
    ],
  },
  {
    slug: "data-engineering",
    index: "09",
    title: "Data Engineering",
    body: "Pipelines, warehouses, and analytics foundations that turn raw data into decisions.",
    tags: ["ETL Pipelines", "Warehousing", "Analytics"],
    icon: "data",
    cover: "/services/cloud-devops.jpg",
    coverAlt: "Data engineering and analytics infrastructure",
    overview:
      "We build the data layer your product and leadership can trust — clean ingestion, reliable warehouses, and pipelines that stay observable as volume grows.",
    deliverables: [
      "ETL / ELT pipelines and orchestration",
      "Warehouse modeling and documentation",
      "Quality checks and anomaly alerts",
      "Analytics-ready datasets for product & ops",
    ],
    process: [
      "Map sources, owners, and decision use-cases",
      "Design schemas and pipeline ownership",
      "Automate quality, lineage, and refresh SLAs",
      "Hand off with runbooks and clear metrics",
    ],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
