export type CaseStudy = {
  slug: string;
  metric: string;
  metricLabel: string;
  title: string;
  client: string;
  sector: string;
  summary: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  gallery: { src: string; alt: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  results: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-signal-routing",
    metric: "4.2×",
    metricLabel: "faster decisions",
    title: "Enterprise signal routing",
    client: "Helion Ops",
    sector: "AI Platform",
    summary:
      "Agent workflows and inference mesh for ops teams that needed answers in seconds — not overnight dashboards.",
    tags: ["AI", "Platform"],
    cover:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Abstract technology and data systems",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        alt: "Circuit board detail",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        alt: "Analytics dashboard",
      },
    ],
    challenge:
      "Operations leaders were drowning in alerts. Critical signals arrived late, and teams spent hours stitching tools together before they could act.",
    approach: [
      "Mapped decision paths across incident, logistics, and customer ops.",
      "Designed an agent layer that routes, ranks, and explains each signal.",
      "Built an inference mesh with latency budgets and full observability.",
      "Shipped a calm operator console — exact, quiet, and fast under load.",
    ],
    outcome:
      "Decision loops compressed from hours to minutes. Operators trust the system because it shows why a recommendation exists — not just what to click.",
    results: [
      { value: "4.2×", label: "Faster decisions" },
      { value: "63%", label: "Fewer false alerts" },
      { value: "12ms", label: "p95 routing latency" },
    ],
  },
  {
    slug: "global-commerce-core",
    metric: "+31%",
    metricLabel: "conversion lift",
    title: "Global commerce core",
    client: "Northline Retail",
    sector: "Commerce",
    summary:
      "Checkout and inventory rebuilt for peak traffic without losing brand precision — conversion up, chaos down.",
    tags: ["Commerce", "Product"],
    cover:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Modern retail and commerce environment",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt: "Product analytics workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        alt: "Checkout and payments",
      },
    ],
    challenge:
      "Peak events broke checkout. Inventory drifted across regions, and the brand experience felt loud where it needed to feel exact.",
    approach: [
      "Re-architected checkout as a resilient, edge-aware flow.",
      "Unified inventory truth across warehouses and storefronts.",
      "Tightened UI systems so conversion and brand stayed aligned.",
      "Instrumented every step — drop-offs became actionable, not mysterious.",
    ],
    outcome:
      "The storefront held through peak. Conversion rose, support tickets fell, and the brand finally felt as precise as the product.",
    results: [
      { value: "+31%", label: "Conversion lift" },
      { value: "99.95%", label: "Checkout availability" },
      { value: "40%", label: "Fewer stock errors" },
    ],
  },
  {
    slug: "delivery-mesh-at-scale",
    metric: "99.99%",
    metricLabel: "release uptime",
    title: "Delivery mesh at scale",
    client: "Vesper Platform",
    sector: "Infrastructure",
    summary:
      "CI, clusters, and observability that made every deploy intentionally boring — in the best way.",
    tags: ["DevOps", "Cloud"],
    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Global network and infrastructure",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1200&q=80",
        alt: "Server infrastructure",
      },
      {
        src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineering workstation",
      },
    ],
    challenge:
      "Releases were risky theatre. Rollbacks were slow, visibility was fragmented, and shipping velocity suffered for it.",
    approach: [
      "Standardized CI with progressive delivery and automatic rollback paths.",
      "Built a Kubernetes mesh with clear ownership and cost controls.",
      "Unified telemetry so incidents had one narrative, not five dashboards.",
      "Documented runbooks the team could actually use at 2am.",
    ],
    outcome:
      "Deploys became routine. Uptime held, engineers slept better, and platform work stopped being the bottleneck for product.",
    results: [
      { value: "99.99%", label: "Release uptime" },
      { value: "8×", label: "Faster rollbacks" },
      { value: "70%", label: "Less release toil" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
