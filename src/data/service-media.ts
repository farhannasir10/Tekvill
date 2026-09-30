export type ServiceMedia = {
  hero: string;
  process: string[];
  mid: string;
  split: string;
  icons: string[];
};

const I = "/services/detail/_shared";

/** Small benefit icons only — not photography. */
const iconPool = [
  `${I}/cost-saving-1.png`,
  `${I}/scalibiltiy-1.png`,
  `${I}/development-speed-up-2.png`,
  `${I}/specialized-skills-2.png`,
  `${I}/specialized-skills-1.png`,
  `${I}/quick-results-2.png`,
  `${I}/less-responsbilty-1.png`,
  `${I}/agility-1.png`,
  `${I}/assumption-verification-1.png`,
];

/**
 * Unique galleries per service.
 * Prefer product/tech visuals (code, devices, UI, abstract) — no shared
 * office-people stock reused across pages.
 */
export const serviceMedia: Record<string, ServiceMedia> = {
  "ai-development": {
    hero: "/services/detail/ai-development/tech-01.jpg",
    process: [
      "/services/detail/ai-development/live-01.webp",
      "/services/detail/ai-development/tech-02.jpg",
      "/services/detail/ai-development/live-02.webp",
      "/services/detail/ai-development/tech-03.jpg",
      "/services/detail/ai-development/live-03.webp",
      "/services/detail/ai-development/tech-04.jpg",
    ],
    mid: "/services/detail/ai-development/live-04.webp",
    split: "/services/detail/ai-development/tech-02.jpg",
    icons: iconPool,
  },
  "full-stack-development": {
    hero: "/services/detail/full-stack-development/tech-01.jpg",
    process: [
      "/services/detail/full-stack-development/live-01.webp",
      "/services/detail/full-stack-development/tech-02.jpg",
      "/services/detail/full-stack-development/live-02.webp",
      "/services/detail/full-stack-development/tech-03.jpg",
      "/services/detail/full-stack-development/live-03.webp",
      "/services/detail/full-stack-development/tech-04.jpg",
    ],
    mid: "/services/detail/full-stack-development/live-04.webp",
    split: "/services/detail/full-stack-development/tech-05.jpg",
    icons: iconPool,
  },
  "mobile-app-development": {
    hero: "/services/detail/mobile-app-development/tech-01.jpg",
    process: [
      "/services/detail/mobile-app-development/live-01.webp",
      "/services/detail/mobile-app-development/tech-02.jpg",
      "/services/detail/mobile-app-development/live-02.webp",
      "/services/detail/mobile-app-development/tech-03.jpg",
      "/services/detail/mobile-app-development/live-03.webp",
      "/services/detail/mobile-app-development/tech-04.jpg",
    ],
    mid: "/services/detail/mobile-app-development/live-04.webp",
    split: "/services/detail/mobile-app-development/tech-02.jpg",
    icons: iconPool,
  },
  "ui-ux-design": {
    hero: "/services/detail/ui-ux-design/Product-Design-scaled.jpg",
    process: [
      "/services/detail/ui-ux-design/tech-01.jpg",
      "/services/detail/ui-ux-design/Product-Design-1-1024x684.jpg",
      "/services/detail/ui-ux-design/tech-02.jpg",
      "/services/detail/ui-ux-design/product-design-2-1024x683.jpg",
      "/services/detail/ui-ux-design/tech-03.jpg",
      "/services/detail/ui-ux-design/Product-design-4-1024x683.jpg",
    ],
    mid: "/services/detail/ui-ux-design/Lawmatics-Dashboard-Var-1-1024x576.webp",
    split: "/services/detail/ui-ux-design/tech-04.jpg",
    icons: iconPool,
  },
  "staff-augmentation": {
    hero: "/services/detail/staff-augmentation/tech-01.jpg",
    process: [
      "/services/detail/staff-augmentation/tech-02.jpg",
      "/services/detail/staff-augmentation/tech-03.jpg",
      "/services/detail/staff-augmentation/tech-04.jpg",
      "/services/detail/staff-augmentation/tech-05.jpg",
      "/services/detail/staff-augmentation/tech-01.jpg",
      "/services/detail/staff-augmentation/tech-02.jpg",
    ],
    mid: "/services/detail/staff-augmentation/tech-05.jpg",
    split: "/services/detail/staff-augmentation/tech-03.jpg",
    icons: iconPool,
  },
  "cloud-devops": {
    hero: "/services/detail/cloud-devops/tech-01.jpg",
    process: [
      "/services/detail/cloud-devops/tech-02.jpg",
      "/services/detail/cloud-devops/tech-04.jpg",
      "/services/detail/cloud-devops/tech-01.jpg",
      "/services/detail/cloud-devops/tech-02.jpg",
      "/services/detail/cloud-devops/tech-04.jpg",
      "/services/cloud-devops.jpg",
    ],
    mid: "/services/detail/cloud-devops/tech-04.jpg",
    split: "/services/detail/cloud-devops/tech-02.jpg",
    icons: iconPool,
  },
  "product-strategy": {
    hero: "/services/detail/product-strategy/tech-02.jpg",
    process: [
      "/services/detail/product-strategy/tech-01.jpg",
      "/services/detail/product-strategy/tech-03.jpg",
      "/services/detail/product-strategy/tech-04.jpg",
      "/services/detail/product-strategy/tech-02.jpg",
      "/services/detail/product-strategy/tech-01.jpg",
      "/services/detail/product-strategy/tech-04.jpg",
    ],
    mid: "/services/detail/product-strategy/tech-04.jpg",
    split: "/services/detail/product-strategy/tech-03.jpg",
    icons: iconPool,
  },
  "qa-automation": {
    hero: "/services/detail/qa-automation/tech-03.jpg",
    process: [
      "/services/detail/qa-automation/tech-02.jpg",
      "/services/detail/qa-automation/tech-04.jpg",
      "/services/detail/qa-automation/tech-03.jpg",
      "/services/qa-automation.jpg",
      "/services/detail/qa-automation/tech-02.jpg",
      "/services/detail/qa-automation/tech-04.jpg",
    ],
    mid: "/services/detail/qa-automation/tech-04.jpg",
    split: "/services/detail/qa-automation/tech-02.jpg",
    icons: iconPool,
  },
  "data-engineering": {
    hero: "/services/detail/data-engineering/tech-01.jpg",
    process: [
      "/services/detail/data-engineering/tech-03.jpg",
      "/services/detail/data-engineering/tech-04.jpg",
      "/services/detail/data-engineering/tech-01.jpg",
      "/services/detail/data-engineering/tech-03.jpg",
      "/services/detail/data-engineering/tech-04.jpg",
      "/services/detail/cloud-devops/tech-02.jpg",
    ],
    mid: "/services/detail/data-engineering/tech-04.jpg",
    split: "/services/detail/data-engineering/tech-03.jpg",
    icons: iconPool,
  },
};

export function getServiceMedia(slug: string): ServiceMedia {
  return (
    serviceMedia[slug] || {
      hero: "/services/ai-development.jpg",
      process: [
        "/services/detail/ai-development/tech-01.jpg",
        "/services/detail/full-stack-development/tech-01.jpg",
        "/services/detail/mobile-app-development/tech-01.jpg",
      ],
      mid: "/services/detail/ai-development/tech-01.jpg",
      split: "/services/detail/full-stack-development/tech-01.jpg",
      icons: iconPool,
    }
  );
}
