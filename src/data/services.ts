export type Service = {
  slug: string;
  index: string;
  title: string;
  body: string;
  tags: string[];
  icon: "ai" | "fullstack" | "mobile" | "design" | "staff" | "cloud";
};

export const services: Service[] = [
  {
    slug: "ai-development",
    index: "01",
    title: "AI Development",
    body: "Custom AI solutions, LLM integrations, and intelligent automation workflows.",
    tags: ["Generative AI", "Process Automation", "ML Models"],
    icon: "ai",
  },
  {
    slug: "full-stack-development",
    index: "02",
    title: "Full Stack Development",
    body: "Scalable web applications with modern frontend and robust backend architecture.",
    tags: ["Next.js & React", "API Design", "Cloud Native"],
    icon: "fullstack",
  },
  {
    slug: "mobile-app-development",
    index: "03",
    title: "Mobile App Development",
    body: "Cross-platform mobile experiences that users love on iOS and Android.",
    tags: ["React Native", "Native Performance", "Real-Time Features"],
    icon: "mobile",
  },
  {
    slug: "ui-ux-design",
    index: "04",
    title: "UI/UX Design",
    body: "User-centered design that balances aesthetics with conversion and usability.",
    tags: ["User Research", "Prototyping", "Design Systems"],
    icon: "design",
  },
  {
    slug: "staff-augmentation",
    index: "05",
    title: "Staff Augmentation",
    body: "Skilled engineers who integrate seamlessly with your existing team.",
    tags: ["Senior Developers", "Flexible Scaling", "Quick Onboarding"],
    icon: "staff",
  },
  {
    slug: "cloud-devops",
    index: "06",
    title: "Cloud & DevOps",
    body: "Infrastructure that scales with your business on AWS, GCP, and Vercel.",
    tags: ["CI/CD Pipelines", "Kubernetes", "Monitoring"],
    icon: "cloud",
  },
];
