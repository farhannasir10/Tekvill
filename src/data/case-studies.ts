export type WorkCategoryId =
  | "ai-development"
  | "design-development"
  | "full-stack-development"
  | "mobile-app-development"
  | "mvp-development"
  | "product-design"
  | "product-development"
  | "software-development"
  | "startup-development"
  | "ui-ux"
  | "web-app-development";

export type WorkCategory = {
  id: WorkCategoryId | "all";
  label: string;
};

export const workCategories: WorkCategory[] = [
  { id: "all", label: "See All" },
  { id: "ai-development", label: "AI Development" },
  { id: "design-development", label: "Design and Development" },
  { id: "full-stack-development", label: "Full Stack Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "mvp-development", label: "MVP development" },
  { id: "product-design", label: "Product Design" },
  { id: "product-development", label: "Product Development" },
  { id: "software-development", label: "Software Development" },
  { id: "startup-development", label: "Startup Development" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "web-app-development", label: "Web App Development" },
];

export type CaseStudySection = {
  title: string;
  items: { heading?: string; body: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short hero line — matches live Tekvill portfolio banners */
  heroTitle: string;
  /** Optional shorter title for grid cards (keeps visual height even) */
  cardTitle?: string;
  summary: string;
  cover: string;
  coverAlt: string;
  categories: WorkCategoryId[];
  techStack: string[];
  overview: string;
  /** Three outcome stats shown under overview on the detail page */
  highlights: [string, string, string];
  sections: CaseStudySection[];
  closing?: string;
  /** Homepage card helpers (derived from live content) */
  metric?: string;
  metricLabel?: string;
  sector: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "revolutionizing-property-management-with-estatepro",
    title: "AI-Powered Property Management Platform",
    heroTitle: "AI-Powered Property Management Platform",
    summary:
      "An AI-driven property management system to streamline rentals, tenant communication, and automated payments.",
    cover:
      "/case-studies/revolutionizing-property-management-with-estatepro-cover.webp",
    coverAlt: "Property management platform case study",
    categories: [
      "ai-development",
      "design-development",
      "mobile-app-development",
      "mvp-development",
      "product-development",
      "startup-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "AI",
      "Plaid",
      "WordPress",
      "MySQL",
      "JavaScript",
      "jQuery",
    ],
    overview:
      "The client envisioned a comprehensive property management system, empowering owners to efficiently oversee their rentals. The goal was to streamline tenant communication, issue resolution, rent payments, and incorporate AI-driven functionalities for an enhanced user experience.",
    highlights: [
      "4-year partnership from MVP to production",
      "AI query resolution for faster tenant support",
      "Funding unlocked with a shippable MVP",
    ],
    sections: [
      {
        title: "Challenges Faced",
        items: [
          {
            heading: "Complex Requirements:",
            body: "The client sought a multifaceted solution integrating tenant issue reporting, discussion boards, polls, rent payment, and AI-powered assistance. Accommodating these diverse features posed a significant challenge.",
          },
          {
            heading: "Technical Expertise and MVP Development:",
            body: "They approached Tekvill seeking an MVP to showcase their vision. Tekvill needed to devise a robust system that amalgamated UI/UX design, functionality, and database management while ensuring seamless integration.",
          },
        ],
      },
      {
        title: "Solution Provided",
        items: [
          {
            heading: "Collaborative Approach:",
            body: "Tekvill undertook a collaborative approach, engaging closely with the client to comprehend their nuanced requirements. This involved comprehensive brainstorming sessions to align expectations with technical feasibility.",
          },
          {
            heading: "MVP Development:",
            body: "Leveraging PHP Laravel for backend functionality and WordPress for the landing page, Tekvill delivered a scalable MVP. The system encompassed tenant issue ticketing, discussion forums, rent payment integration, and an AI-driven model for query resolution.",
          },
          {
            heading: "Continuous Enhancement:",
            body: "The success of the MVP led to a long-term partnership spanning four years. Tekvill continued to enhance features, refine user interfaces, and integrate advanced AI algorithms to elevate the platform’s efficiency.",
          },
        ],
      },
      {
        title: "Results and Impact",
        items: [
          {
            heading: "Funding Success:",
            body: "The delivered MVP played a pivotal role in the client’s funding efforts, attracting investments due to its innovative approach and functional capabilities.",
          },
          {
            heading: "Sustained Collaboration and Growth:",
            body: "Over four years of collaboration, the platform evolved significantly, catering to evolving market needs. Continuous enhancement ensured sustained user engagement and a competitive edge in the property management sector.",
          },
          {
            heading: "Positive User Feedback:",
            body: "Users appreciated the intuitive interface, seamless issue resolution, and the convenience of engaging through discussions and polls. The AI-based query resolution system garnered positive feedback for its accuracy and promptness.",
          },
        ],
      },
    ],
    closing:
      "This case study showcases how a clear product vision, combined with Tekvill’s technical expertise, culminated in a successful MVP and a sustained partnership — continuous innovation and growth in property management.",
    metric: "4 yrs",
    metricLabel: "partnership",
    sector: "AI Development",
    tags: ["AI Development", "MVP development", "Web App Development"],
  },
  {
    slug: "legal-ace",
    title: "Legal Practice Management System",
    heroTitle: "Legal Practice Management System",
    summary:
      "A practice management system to boost team efficiency, track performance, and unify notifications, calendar, and training tools.",
    cover: "/case-studies/legal-ace-cover.webp",
    coverAlt: "Legal practice management case study",
    categories: [
      "ai-development",
      "mobile-app-development",
      "mvp-development",
      "product-design",
      "product-development",
      "software-development",
      "startup-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "React Native",
      "IOS",
      "Android",
      "JavaScript",
      "Redux",
      "PHP Laravel",
      "MySQL",
    ],
    overview:
      "A forward-thinking legal firm envisioned a Legal Practice Management System to optimize team efficiency, analyse individual performance, and create a streamlined workflow. The system aimed to integrate in-app notifications, calendar synchronization, Microsoft Teams integration, live training modules, white-labelling, concierge onboarding, and dedicated data servers.",
    highlights: [
      "Cross-platform MVP for iOS and Android",
      "Unified calendar, Teams, and training tools",
      "Funding secured on the delivered MVP",
    ],
    sections: [
      {
        title: "Challenges Faced",
        items: [
          {
            heading: "Complex Tool Integration and Performance Metrics:",
            body: "The client faced the challenge of integrating a diverse set of tools seamlessly into their legal practice management system. Ensuring optimal performance, analyzing individual capacity, and boosting team efficiency required a careful balance of functionalities.",
          },
          {
            heading: "Technical Implementation:",
            body: "Tekvill was tasked with developing a robust MVP that incorporated the specified features while ensuring a smooth user experience. The technical challenge included React Native for cross-platform compatibility, JavaScript for front-end development, Redux for state management, and MySQL for database management.",
          },
        ],
      },
      {
        title: "Solution Provided",
        items: [
          {
            heading: "Technology Stack Selection:",
            body: "Tekvill strategically chose React Native for its cross-platform capabilities, allowing a unified experience across devices. JavaScript was employed for frontend development, while Redux efficiently managed state throughout the application. MySQL was selected as the database management system, ensuring data integrity and scalability.",
          },
          {
            heading: "MVP Development and Funding Success:",
            body: "Tekvill successfully developed the MVP, implementing in-app notifications, calendar integration, Microsoft Teams compatibility, live training modules, white-labelling, concierge onboarding, and dedicated data servers. The robust system demonstrated the product vision effectively, enabling the client to secure funding to propel the project forward.",
          },
          {
            heading: "Continuous Collaboration and Iterative Improvement:",
            body: "Tekvill continued the collaboration, addressing ongoing issues, refining user interfaces, and incorporating user feedback for iterative improvements. The partnership focused on enhancing features and maintaining a high standard of performance.",
          },
        ],
      },
      {
        title: "Results and Impact",
        items: [
          {
            heading: "Funding Secured and Enhanced Operational Efficiency:",
            body: "The successful MVP played a pivotal role in fundraising efforts, showcasing the system’s potential impact on legal practice management. The implemented tools significantly enhanced operational efficiency, allowing for better team coordination and individual performance analysis.",
          },
          {
            heading: "Sustained Growth and Innovation:",
            body: "The ongoing collaboration ensured a continuously evolving platform that adapted to the dynamic needs of the legal industry — incorporating emerging technologies and addressing industry challenges.",
          },
        ],
      },
    ],
    metric: "MVP",
    metricLabel: "funding unlocked",
    sector: "Mobile App Development",
    tags: ["AI Development", "Mobile App Development", "MVP development"],
  },
  {
    slug: "mobile-app-developed-by-tekvill",
    title: "Multi-Brand Mobile Marketplace",
    heroTitle: "Multi-Brand Mobile Marketplace",
    summary:
      "A mobile marketplace uniting multiple brands into one seamless shopping experience.",
    cover: "/case-studies/mobile-app-developed-by-tekvill-cover.png",
    coverAlt: "Multi-brand mobile marketplace case study",
    categories: [
      "design-development",
      "mobile-app-development",
      "product-design",
      "product-development",
      "software-development",
    ],
    techStack: ["React", "Android", "IOS", "Java", "MySQL"],
    overview:
      "An emerging online shopping platform aimed to consolidate a multitude of popular brands within a single marketplace. The objective was to offer customers the convenience of accessing diverse brands and products through a seamless mobile application. Tekvill developed a comprehensive mobile app that facilitates effortless shopping experiences for users.",
    highlights: [
      "Multiple brand inventories in one app",
      "Behavior tracking for personalized shopping",
      "Native iOS and Android experience",
    ],
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Integration of Diverse Brand Ecosystems:",
            body: "The primary challenge was amalgamating numerous brands, each with distinct inventory systems and backend structures, into a cohesive platform.",
          },
          {
            heading: "Customer Behavior Tracking:",
            body: "The platform required a robust system to comprehensively track user behavior — shopping history, inquiries, cart activities, reviews, and ratings — while ensuring data security and privacy.",
          },
          {
            heading: "Creating a User-Friendly Interface:",
            body: "Developing an intuitive and user-friendly interface that accommodated diverse user preferences and streamlined the shopping process posed a significant challenge.",
          },
        ],
      },
      {
        title: "Solution",
        items: [
          {
            heading: "Technology Selection:",
            body: "Tekvill utilized a tech stack comprising React for frontend development, iOS and Android for mobile app deployment, Java for backend processes, and MySQL for database management. This selection ensured scalability, compatibility, and optimal performance.",
          },
          {
            heading: "Seamless Brand Integration:",
            body: "Tekvill devised a robust API integration strategy to connect diverse brand ecosystems. Through meticulous API development and integration, disparate inventory systems were unified into one shopping experience.",
          },
          {
            heading: "Comprehensive Customer Behavior Tracking:",
            body: "Leveraging MySQL, Tekvill designed a sophisticated tracking system that captured browsing history, cart behaviour, purchase patterns, inquiries, reviews, and ratings. Robust encryption methods were implemented to safeguard sensitive user data.",
          },
          {
            heading: "User-Centric Interface:",
            body: "Tekvill focused on UX design, employing React to craft an intuitive interface. Iterative user testing ensured a seamless shopping journey across varied preferences.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The engagement resulted in a feature-rich mobile app with seamless navigation across brand offerings, personalized recommendations based on behavior analysis, secure transactions, and detailed insights into user preferences for targeted marketing.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Through Tekvill’s expertise in modern mobile technologies and strategic development methodologies, the client realized a unified, user-centric online shopping experience — a robust application that met and exceeded expectations in the online retail landscape.",
          },
        ],
      },
    ],
    metric: "App",
    metricLabel: "marketplace",
    sector: "Mobile App Development",
    tags: ["Mobile App Development", "Product Design", "Software Development"],
  },
  {
    slug: "smart-meal-plan-food-order-management-system",
    title: "Food Order & Kitchen Operations Platform",
    heroTitle: "Food Order & Kitchen Operations Platform",
    summary:
      "Custom WooCommerce plugins for cooking reports, label printing, and a chef dashboard in a meal prep operation.",
    cover:
      "/case-studies/smart-meal-plan-food-order-management-system-cover.webp",
    coverAlt: "Food order and kitchen operations case study",
    categories: [
      "design-development",
      "mvp-development",
      "product-design",
      "product-development",
      "software-development",
      "startup-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "WordPress",
      "WooCommerce",
      "Custom Plugin Development",
      "Theme Development",
      "PHP",
      "JavaScript",
      "jQuery",
      "Google Analytics",
      "Cloud Deployment",
    ],
    overview:
      "A meal preparation and delivery service offering nutritious, customized meal plans needed tighter kitchen operations. Tekvill developed custom WooCommerce plugins for cooking report generation, label printing, and a chef dashboard.",
    highlights: [
      "Automated cooking reports for kitchen prep",
      "Customer-specific label printing at scale",
      "Chef dashboard for recipes and schedules",
    ],
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Cooking Reports:",
            body: "The client required a streamlined process for generating cooking reports to facilitate efficient meal preparation — consolidating recipe details, ingredient quantities, and cooking instructions into a printable format.",
          },
          {
            heading: "Label Printing:",
            body: "The platform needed an automated label printing solution for quick, accurate labeling of meal containers with customer-specific details such as names, dietary restrictions, and delivery dates.",
          },
          {
            heading: "Chef Dashboard:",
            body: "The operation needed a centralized chef dashboard with an intuitive interface to manage recipes, track meal plan orders, and view cooking schedules.",
          },
        ],
      },
      {
        title: "Solution:",
        items: [
          {
            heading: "Cooking Report Generation:",
            body: "Tekvill created a plugin that integrated seamlessly with the WooCommerce platform, enabling automatic generation of cooking reports. The plugin extracted recipe details and transformed them into printable formats, saving chefs valuable time.",
          },
          {
            heading: "Label Printing Automation:",
            body: "Tekvill developed a label printing plugin that automated customer-specific labels for meal containers — extracting order details from WooCommerce and optimizing the labeling process.",
          },
          {
            heading: "Chef Dashboard:",
            body: "Tekvill designed and implemented a chef dashboard using PHP within WooCommerce, providing a user-friendly interface to manage recipes, track orders, and view cooking schedules.",
          },
        ],
      },
      {
        title: "Results/Impact:",
        items: [
          {
            heading: "Streamlined Meal Preparation:",
            body: "The cooking report generation plugin significantly reduced the time and effort required to prepare meals by automating consolidation and formatting of recipe details.",
          },
          {
            heading: "Enhanced Labeling Efficiency:",
            body: "Label printing automation eliminated manual data entry and ensured accurate labelling — improving order accuracy and saving time.",
          },
          {
            heading: "Improved Chef Productivity:",
            body: "The chef dashboard provided a centralized platform for recipes, orders, and schedules, resulting in better collaboration and productivity.",
          },
          {
            heading: "Business Growth:",
            body: "Improved operational efficiency contributed to increased customer satisfaction, repeat business, and growth for the meal service.",
          },
        ],
      },
    ],
    metric: "Woo",
    metricLabel: "custom plugins",
    sector: "Product Development",
    tags: ["MVP development", "Product Design", "Web App Development"],
  },
  {
    slug: "meta-web3-and-mern-app",
    title: "Decentralized NFT Marketplace",
    heroTitle: "Decentralized NFT Marketplace",
    summary:
      "A multi-chain NFT marketplace for buying, selling, and trading across Ethereum, BSC, and Polygon.",
    cover: "/case-studies/meta-web3-and-mern-app-cover.webp",
    coverAlt: "Decentralized NFT marketplace case study",
    categories: [
      "design-development",
      "mobile-app-development",
      "product-design",
      "product-development",
      "software-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "PHP",
      "React",
      "Next.js",
      "MongoDB",
      "Node.js",
      "Hotjar",
      "Progressive Web App",
      "Google Analytics",
      "Cloud Deployment",
    ],
    overview:
      "The client needed a decentralized NFT marketplace for the Metaverse — a platform to buy, sell, and trade non-fungible tokens across Ethereum, Binance Smart Chain, and Polygon. Tekvill built the product with Next.js for server-side rendering and a production-ready Web3 experience.",
    highlights: [
      "Multi-chain trading across 3 networks",
      "Smart contract audits for safer transactions",
      "High-traffic marketplace built to scale",
    ],
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Multi-Blockchain Integration:",
            body: "Integrating the marketplace with multiple blockchain networks posed a significant challenge. Each blockchain has its own infrastructure and APIs, requiring meticulous implementation for seamless connectivity.",
          },
          {
            heading: "Scalability and Performance:",
            body: "As a high-traffic NFT marketplace, the product needed to handle a large volume of transactions and user interactions without compromising performance — even during peak usage.",
          },
          {
            heading: "Security and Smart Contract Auditing:",
            body: "The decentralized nature of the marketplace demanded robust security measures. Tekvill conducted thorough smart contract audits and implemented best practices to ensure transaction integrity and protect user assets.",
          },
          {
            heading: "User-Friendly Interface:",
            body: "The challenge was to design an intuitive interface that simplified buying, selling, and trading NFTs for both experienced enthusiasts and newcomers.",
          },
        ],
      },
      {
        title: "Solutions:",
        items: [
          {
            heading: "Blockchain Integration:",
            body: "Tekvill leveraged blockchain expertise to integrate Ethereum, Binance Smart Chain, and Polygon — allowing users to explore and transact with NFTs across networks from a single platform.",
          },
          {
            heading: "Scalability and Performance Optimization:",
            body: "Caching, load balancing, and efficient database management ensured the marketplace could handle high traffic and deliver fast response times.",
          },
          {
            heading: "Security Measures:",
            body: "Comprehensive smart contract audits and robust security protocols safeguarded user funds and data, with thorough testing and industry-standard practices.",
          },
          {
            heading: "User-Centric Design:",
            body: "Tekvill focused on simplicity, ease of use, and visual appeal — guiding users through NFT transactions with clear instructions and intuitive navigation.",
          },
        ],
      },
      {
        title: "Results/Impact:",
        items: [
          {
            heading: "Seamless Multi-Blockchain Integration:",
            body: "Users gained a unified platform to explore and trade NFTs across blockchain networks, enhancing accessibility and market reach.",
          },
          {
            heading: "High Performance and Scalability:",
            body: "The marketplace efficiently handled significant transaction volume while maintaining speed and responsiveness.",
          },
          {
            heading: "Enhanced Security and Trust:",
            body: "Security measures and smart contract auditing fostered a trusted environment for NFT transactions.",
          },
          {
            heading: "Engaging User Experience:",
            body: "The user-centric design attracted both seasoned NFT enthusiasts and newcomers to the space.",
          },
        ],
      },
    ],
    closing:
      "Tekvill delivered a decentralized NFT marketplace offering a seamless, secure platform for multi-chain NFT transactions.",
    metric: "Web3",
    metricLabel: "NFT marketplace",
    sector: "Web App Development",
    tags: ["Product Design", "Software Development", "Web App Development"],
  },
  {
    slug: "fitness-magento-site",
    title: "Scalable Fitness E-commerce Platform",
    heroTitle: "Scalable Fitness E-commerce Platform",
    summary:
      "A US fitness equipment brand needed a Magento store that could handle growth, traffic spikes, and an expanding catalog.",
    cover: "/case-studies/fitness-magento-site-cover.webp",
    coverAlt: "Fitness e-commerce Magento case study",
    categories: [
      "design-development",
      "product-design",
      "product-development",
      "software-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "Magento 1 to 2 Migration",
      "Elasticsearch",
      "Theme Development",
      "Plugin Development",
      "PHP",
      "CSS",
      "Javascript",
      "Knockout JS",
      "Require JS",
    ],
    overview:
      "A US-based fitness equipment manufacturer and distributor sought to revamp its online presence. The company needed a robust web store capable of accommodating a growing product range and effectively handling surges in web traffic.",
    highlights: [
      "Magento 1 to Magento 2 migration",
      "Faster catalog search with Elasticsearch",
      "Storefront built for peak traffic spikes",
    ],
    sections: [
      {
        title: "Challenges Faced:",
        items: [
          {
            body: "As the business experienced exponential growth, several challenges emerged:",
          },
          {
            heading: "Scalability:",
            body: "The existing web infrastructure couldn’t efficiently handle the increasing product line and sudden spikes in online visitors during peak periods.",
          },
          {
            heading: "Diverse Product Range:",
            body: "The brand needed a platform capable of showcasing a diverse inventory effectively, ensuring a seamless browsing and purchasing experience.",
          },
          {
            heading: "Performance Issues:",
            body: "The previous web store encountered performance issues due to high traffic, affecting page load times and user experience.",
          },
        ],
      },
      {
        title: "Solutions Provided:",
        items: [
          {
            body: "Tekvill employed a comprehensive tech stack and implemented strategic solutions:",
          },
          {
            heading: "Magento 2 Implementation:",
            body: "Leveraging Magento 2, Tekvill established a flexible and scalable e-commerce platform — effortless management of the expanding catalog with a stronger user experience.",
          },
          {
            heading: "Elasticsearch Integration:",
            body: "Elasticsearch significantly improved search accuracy and speed across the extensive product catalog.",
          },
          {
            heading: "Utilization of PHP, CSS, and JavaScript:",
            body: "These languages customized and optimized responsiveness, speed, and visual polish across the storefront.",
          },
          {
            heading: "Knockout.js and Require.js Integration:",
            body: "Frontend enhancements enabled dynamic, responsive elements that elevated the interface.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The collaboration resulted in a transformational web store:",
          },
          {
            heading: "Enhanced Scalability:",
            body: "The new infrastructure accommodated growth and traffic fluctuations, ensuring a seamless browsing and purchasing experience.",
          },
          {
            heading: "Improved User Experience:",
            body: "Optimized performance and responsive design improved retention and conversion rates.",
          },
          {
            heading: "Streamlined Product Discovery:",
            body: "Elasticsearch enabled customers to find desired items swiftly amidst the extensive inventory.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Tekvill’s Magento 2, Elasticsearch, and frontend work delivered a highly scalable, responsive web store that supported rapid growth and elevated the online shopping experience for fitness equipment buyers.",
          },
        ],
      },
    ],
    metric: "M2",
    metricLabel: "migration",
    sector: "Web App Development",
    tags: ["Product Design", "Software Development", "Web App Development"],
  },
  {
    slug: "elevating-flourescent-commerce-from-laravel-to-shopify-for-enhanced-e-commerce-capabilities",
    title: "Home Decor E-commerce Platform Migration",
    heroTitle: "Home Decor E-commerce Platform Migration",
    summary:
      "A Laravel storefront moved to Shopify — better UX, scalability, and dedicated e-commerce tooling.",
    cover:
      "/case-studies/elevating-flourescent-commerce-from-laravel-to-shopify-for-enhanced-e-commerce-capabilities-cover.webp",
    coverAlt: "Home decor Shopify migration case study",
    categories: [
      "design-development",
      "mvp-development",
      "product-design",
      "product-development",
      "software-development",
      "startup-development",
      "ui-ux",
      "web-app-development",
    ],
    techStack: [
      "Laravel",
      "React",
      "CSS/HTML",
      "UI Design",
      "Api Integrations",
      "Theme Development",
      "Liquid",
      "Customer Support Integration",
      "Payment Methods Integration",
    ],
    overview:
      "A home decor brand initially operated on an e-commerce platform built with Laravel. They encountered hurdles adapting to new e-commerce features and optimizing platform capabilities. Seeking a more efficient solution, they partnered with Tekvill to upgrade and optimize the storefront.",
    highlights: [
      "Full UI/UX redesign before migration",
      "Laravel storefront moved to Shopify",
      "Payments and support tools integrated",
    ],
    sections: [
      {
        title: "Challenges Faced:",
        items: [
          {
            body: "Throughout the project, several challenges emerged:",
          },
          {
            heading: "Limited E-commerce Features:",
            body: "The existing Laravel-based platform constrained integration of new e-commerce features, hindering adaptation to evolving market demands.",
          },
          {
            heading: "User Experience Enhancement:",
            body: "The brand required a complete overhaul of the platform’s UI and UX to improve engagement and conversion rates.",
          },
          {
            heading: "Scalability and Efficiency:",
            body: "With the business expanding, a scalable infrastructure to support growing demand became imperative.",
          },
        ],
      },
      {
        title: "Solutions Provided by Tekvill:",
        items: [
          {
            body: "Tekvill implemented a transformative set of solutions:",
          },
          {
            heading: "Complete UI/UX Redesign:",
            body: "A comprehensive redesign enhanced engagement, simplified navigation, and improved overall aesthetics.",
          },
          {
            heading: "Backend Functionality Enhancement:",
            body: "Backend work ensured a robust, scalable infrastructure capable of handling growing e-commerce demand — optimizing performance and streamlining operations.",
          },
          {
            heading: "Recommendation and Migration to Shopify:",
            body: "Tekvill recommended migrating to Shopify to leverage dedicated e-commerce capabilities and an extensive ecosystem.",
          },
          {
            heading: "Implementation:",
            body: "Theme development and customization with Liquid; customer support tool integration; multiple payment methods; and API connectivity with third-party systems.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The engagement delivered a transformational upgrade:",
          },
          {
            heading: "Improved User Experience:",
            body: "The UI/UX redesign significantly enhanced engagement and conversion rates.",
          },
          {
            heading: "Scalability and Efficiency:",
            body: "Shopify provided a robust platform for managing expanding operations.",
          },
          {
            heading: "Advanced E-commerce Capabilities:",
            body: "Specialized Shopify features and integrations streamlined storefront operations.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Tekvill’s UI/UX redesign, backend enhancements, and Shopify migration empowered the brand to deliver a superior shopping experience while efficiently managing growth.",
          },
        ],
      },
    ],
    metric: "Shopify",
    metricLabel: "migration",
    sector: "Product Development",
    tags: ["MVP development", "Product Design", "UI/UX"],
  },
  {
    slug: "lux-scalable-ecommerce-company-built-on-woocommerce",
    title: "Hospitality Booking Website Optimization",
    heroTitle: "Hospitality Booking Website Optimization",
    summary:
      "Performance overhaul and booking UX redesign for a modern hospitality and travel experience.",
    cover:
      "/case-studies/lux-scalable-ecommerce-company-built-on-woocommerce-cover.webp",
    coverAlt: "Hospitality booking website case study",
    categories: ["web-app-development"],
    techStack: [
      "Woocommerce",
      "Wordpress",
      "Plugin Development",
      "Theme Customization",
      "PHP",
      "HTML/CSS",
      "DevOps",
    ],
    overview:
      "A hospitality and travel brand partnered with Tekvill to enhance website performance and completely redesign the user interface — delivering a superior experience for browsing and booking accommodations and travel services.",
    highlights: [
      "Faster load times with CDN and caching",
      "Modern booking UX across all devices",
      "Smarter search with filters and geo-location",
    ],
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Performance Issues:",
            body: "Severe performance issues, including slow page loading times, resulted in high bounce rates and diminished conversion rates.",
          },
          {
            heading: "Outdated User Interface:",
            body: "The existing interface had become outdated, failing to align with the preferences and expectations of contemporary travelers.",
          },
          {
            heading: "Mobile Responsiveness:",
            body: "Recognizing the prevalence of mobile browsing, the brand needed a responsive design that adapted seamlessly across devices and screen sizes.",
          },
          {
            heading: "Search Functionality:",
            body: "Search was cumbersome, causing users to struggle with finding and booking accommodations efficiently.",
          },
        ],
      },
      {
        title: "Solution:",
        items: [
          {
            body: "Tekvill formulated a comprehensive strategy to address the challenges:",
          },
          {
            heading: "Performance Optimization:",
            body: "Advanced caching reduced page load times; a global CDN accelerated content delivery; and server infrastructure was upgraded to manage increased traffic and load.",
          },
          {
            heading: "Redesign:",
            body: "User research guided a user-centric interface. Visual design was revamped with contemporary aesthetics. Responsive design ensured consistent functionality across smartphones and tablets.",
          },
          {
            heading: "Search Functionality Enhancement:",
            body: "Advanced filters for price, location, and ratings; predictive search; and geo-location integration for nearby accommodation options streamlined booking.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Improved performance, a redesigned interface, and enhanced search prepared the brand for modern travelers — heightening satisfaction and supporting business growth.",
          },
        ],
      },
    ],
    metric: "UX",
    metricLabel: "hospitality site",
    sector: "Web App Development",
    tags: ["Web App Development"],
  },
  {
    slug: "event-vendor-marketplace",
    title: "Unified Event & Vendor Marketplace",
    heroTitle: "Unified Event & Vendor Marketplace",
    cardTitle: "Event & Vendor Marketplace",
    summary:
      "A multi-sided marketplace that consolidates event discovery, ticketing, vendor sourcing, and planning into one AI-assisted platform.",
    cover: "/case-studies/event-vendor-marketplace-cover.jpg",
    coverAlt: "Event and vendor marketplace platform",
    categories: ["ai-development", "full-stack-development"],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "NestJS",
      "AWS Lambda",
      "AWS Amplify",
      "PostgreSQL",
      "Stripe",
      "Hugging Face",
      "Resend",
    ],
    overview:
      "Event planning is typically fragmented across separate tools for ticketing, vendor sourcing, and travel. The client needed a single ecosystem that connected attendees, organizers, vendors, and administrators — with AI woven into real workflows, not bolted on as a chatbot. Tekvill delivered an end-to-end web platform on a modern serverless stack in three months.",
    highlights: [
      "End-to-end marketplace shipped in 3 months",
      "AI inside event creation and vendor onboarding",
      "Stripe payments with dispute and refund flows",
    ],
    sections: [
      {
        title: "Challenges Faced",
        items: [
          {
            heading: "Fragmented Event Journey:",
            body: "Attendees, organizers, and vendors relied on disconnected products for discovery, ticketing, quotes, and travel. Unifying those journeys without creating a bloated product was the core product challenge.",
          },
          {
            heading: "Multi-Sided Marketplace Complexity:",
            body: "Three distinct role-based experiences had to share one infrastructure — attendees discovering and buying tickets, organizers creating events and sourcing vendors, and vendors bidding and managing services — plus an admin layer for moderation and disputes.",
          },
          {
            heading: "AI That Earns Its Place:",
            body: "The platform needed AI inside practical workflows such as event creation and vendor profile onboarding, not a generic assistant layered on top of an unfinished product.",
          },
        ],
      },
      {
        title: "Solution Provided",
        items: [
          {
            heading: "Role-Based Platform Ecosystem:",
            body: "Tekvill designed four connected experiences: attendees browse, explore, and purchase tickets via Stripe with OAuth login; organizers create events (manually or AI-assisted), sell tickets, request quotes, compare bids, and manage accepted services; vendors complete AI-powered onboarding, publish profiles, receive postal-code quote requests, and manage bids; administrators monitor activity, moderate users and events, resolve disputes, and process refunds.",
          },
          {
            heading: "Serverless Full-Stack Architecture:",
            body: "The product was built as a modern AWS-hosted ecosystem — Next.js and Tailwind on the frontend with Amplify, NestJS with Lambda on the backend, PostgreSQL on RDS, Stripe for payments, Ticketmaster and Eventbrite for event data, flight and hotel APIs for travel, Hugging Face for AI services, and Resend, Brevo, and Mailchimp for communications.",
          },
          {
            heading: "Engineering Depth Where It Matters:",
            body: "Explicit state machines governed vendor discovery, requests, bids, and negotiations. Structured work-order logic, payment windows, and refund flows kept disputes and payouts reliable across the marketplace.",
          },
        ],
      },
      {
        title: "Results and Impact",
        items: [
          {
            heading: "End-to-End Delivery in 3 Months:",
            body: "From architecture through AWS deployment, Tekvill replaced a fragmented toolset with one cohesive multi-sided marketplace.",
          },
          {
            heading: "AI Inside Production Workflows:",
            body: "AI-assisted event creation and vendor onboarding turned raw inputs into structured marketplace profiles and faster organizer planning — without relying on a standalone chatbot.",
          },
          {
            heading: "Unified Operations:",
            body: "Ticketing, bidding, payments, moderation, and refunds now run from a single platform, giving organizers and vendors a clearer path from discovery to delivery.",
          },
        ],
      },
    ],
    closing:
      "This engagement shows how Tekvill combines full-stack product delivery with practical AI to ship a production marketplace — confidential client details omitted under NDA.",
    metric: "3 mo",
    metricLabel: "to launch",
    sector: "AI Development",
    tags: ["AI Development", "Full Stack Development"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function filterCaseStudies(categoryId: WorkCategoryId | "all") {
  if (categoryId === "all") return caseStudies;
  return caseStudies.filter((item) => item.categories.includes(categoryId));
}
