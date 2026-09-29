export type WorkCategoryId =
  | "ai-development"
  | "design-development"
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
    title: "Revolutionizing Property Management with Estatepro",
    heroTitle: "Revolutionizing Property Management with Estatepro",
    summary:
      "Estatepro envisioned an AI-driven property management system to streamline rentals, tenant communication, and automated payments.",
    cover:
      "/case-studies/revolutionizing-property-management-with-estatepro-cover.webp",
    coverAlt: "Estatepro property management case study",
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
      "Estatepro envisioned a comprehensive property management system, empowering owners to efficiently oversee their rentals. Their goal was to streamline tenant communication, issue resolution, rent payments, and incorporate AI-driven functionalities for an enhanced user experience.",
    sections: [
      {
        title: "Challenges Faced",
        items: [
          {
            heading: "Complex Requirements:",
            body: "Estatepro sought a multifaceted solution integrating various functionalities—tenant issue reporting, discussion boards, polls, rent payment, and AI-powered assistance. Accommodating these diverse features posed a significant challenge.",
          },
          {
            heading: "Technical Expertise and MVP Development:",
            body: "They approached Tekvill seeking an MVP (Minimum Viable Product) to showcase their vision. Tekvill needed to devise a robust system that amalgamated UI/UX design, functionality, and database management while ensuring seamless integration.",
          },
        ],
      },
      {
        title: "Solution Provided",
        items: [
          {
            heading: "Collaborative Approach:",
            body: "Tekvill undertook a collaborative approach, engaging closely with Estatepro to comprehend their nuanced requirements. This involved comprehensive brainstorming sessions to align expectations with technical feasibility.",
          },
          {
            heading: "MVP Development:",
            body: "Leveraging PHP Laravel for backend functionality and WordPress for the landing page, Tekvill delivered a scalable MVP. The system encompassed tenant issue ticketing, discussion forums, rent payment integration, and an AI-driven model for query resolution.",
          },
          {
            heading: "Continuous Enhancement:",
            body: "The success of the MVP led to a long-term partnership spanning four years. Tekvill continued to work alongside Estatepro, progressively enhancing features, refining user interfaces, and integrating advanced AI algorithms to elevate the platform’s efficiency.",
          },
        ],
      },
      {
        title: "Results and Impact",
        items: [
          {
            heading: "Funding Success:",
            body: "The delivered MVP played a pivotal role in Estatepro’s funding efforts, attracting investments due to its innovative approach and functional capabilities.",
          },
          {
            heading: "Sustained Collaboration and Growth:",
            body: "Over four years of collaboration, the platform evolved significantly, catering to evolving market needs. The continuous enhancement ensured sustained user engagement and a competitive edge in the property management sector.",
          },
          {
            heading: "Positive User Feedback:",
            body: "Users appreciated the intuitive interface, seamless issue resolution, and the convenience of engaging through discussions and polls. The AI-based query resolution system garnered positive feedback for its accuracy and promptness.",
          },
        ],
      },
    ],
    closing:
      "This case study showcases how Estatepro’s vision, combined with Tekvill’s technical expertise, culminated in a successful MVP and a sustained partnership, resulting in continuous innovation and growth in the property management domain.",
    metric: "4 yrs",
    metricLabel: "partnership",
    sector: "AI Development",
    tags: ["AI Development", "MVP development", "Web App Development"],
  },
  {
    slug: "legal-ace",
    title: "Transforming Legal Practice with Legal Ace",
    heroTitle: "Transforming Legal Practice with Legal Ace",
    summary:
      "Legal Ace needed a practice management system to boost team efficiency, track performance, and unify notifications, calendar, and training tools.",
    cover: "/case-studies/legal-ace-cover.webp",
    coverAlt: "Legal Ace practice management case study",
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
      "Legal Ace, a forward-thinking legal firm, envisioned a revolutionary Legal Practice Management System to optimize their legal teams’ efficiency, analyse individual performance, and create a streamlined workflow. The system aimed to integrate essential tools such as in-app notifications, calendar synchronization, Microsoft Teams integration, live training modules, white-labelling, concierge onboarding, and dedicated data servers.",
    sections: [
      {
        title: "Challenges Faced",
        items: [
          {
            heading: "Complex Tool Integration and Performance Metrics:",
            body: "Legal Ace faced the challenge of integrating a diverse set of tools seamlessly into their legal practice management system. Ensuring optimal performance, analyzing individual capacity, and boosting team efficiency were paramount, requiring a delicate balance of functionalities.",
          },
          {
            heading: "Technical Implementation:",
            body: "Tekvill was tasked with developing a robust Minimum Viable Product (MVP) that incorporated the specified features while ensuring a smooth user experience. The technical challenge included employing React Native for cross-platform compatibility, JavaScript for front-end development, Redux for state management, and MySQL for database management.",
          },
        ],
      },
      {
        title: "Solution Provided",
        items: [
          {
            heading: "Technology Stack Selection:",
            body: "Tekvill strategically chose React Native for its cross-platform capabilities, allowing a unified experience across devices. JavaScript, known for its versatility, was employed for frontend development, while Redux efficiently managed state throughout the application. MySQL was selected as the database management system, ensuring data integrity and scalability.",
          },
          {
            heading: "MVP Development and Funding Success:",
            body: "Tekvill successfully developed the MVP, implementing in-app notifications, calendar integration, Microsoft Teams compatibility, live training modules, white-labelling, concierge onboarding, and dedicated data servers. The robust system demonstrated Legal Ace’s vision effectively, enabling them to secure the funding needed to propel the project forward.",
          },
          {
            heading: "Continuous Collaboration and Iterative Improvement:",
            body: "Tekvill continued its collaboration with Legal Ace, addressing ongoing glitches, refining user interfaces, and incorporating user feedback for iterative improvements. The partnership focused on enhancing features and maintaining a high standard of performance.",
          },
        ],
      },
      {
        title: "Results and Impact",
        items: [
          {
            heading: "Funding Secured and Enhanced Operational Efficiency:",
            body: "The successful MVP played a pivotal role in Legal Ace’s fundraising efforts, showcasing the system’s potential impact on legal practice management. The implemented tools and functionalities significantly enhanced operational efficiency, allowing for better team coordination and individual performance analysis.",
          },
          {
            heading: "Sustained Growth and Innovation:",
            body: "The ongoing collaboration ensured a continuously evolving platform that adapted to the dynamic needs of the legal industry. Legal Ace and Tekvill’s joint efforts resulted in a system that remains at the forefront of legal practice management, incorporating emerging technologies and addressing industry challenges.",
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
    title:
      "Enhancing Customer Experience through Mobile App Development for Digital Mall",
    heroTitle:
      "Enhancing Customer Experience through Mobile App Development for Digital Mall",
    cardTitle: "Enhancing Customer Experience for Digital Mall",
    summary:
      "Digital Mall partnered with Tekvill to build a mobile marketplace uniting multiple brands into one seamless shopping experience.",
    cover: "/case-studies/mobile-app-developed-by-tekvill-cover.png",
    coverAlt: "Digital Mall mobile app case study",
    categories: [
      "design-development",
      "mobile-app-development",
      "product-design",
      "product-development",
      "software-development",
    ],
    techStack: ["React", "Android", "IOS", "Java", "MySQL"],
    overview:
      "Digital Mall, an emerging online shopping mall, aimed to revolutionize the retail experience by consolidating a multitude of popular brands within a single online marketplace. Their objective was to offer customers the convenience of accessing diverse brands and products through a seamless mobile application. To achieve this goal, Digital Mall partnered with Tekvill, a renowned tech solution provider, to develop a comprehensive mobile app that facilitates effortless shopping experiences for users.",
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
            body: "Digital Mal required a robust system to comprehensively track user behavior, encompassing shopping history, inquiries, cart activities, reviews, and ratings, while ensuring data security and privacy.",
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
            body: "Tekvill utilized a tech stack comprising React for frontend development, IOS and Android platforms for mobile app deployment, Java for backend processes, and MySQL for database management. This strategic selection ensured scalability, compatibility, and optimal performance.",
          },
          {
            heading: "Seamless Brand Integration:",
            body: "Tekvill devised a robust API integration strategy to connect diverse brand ecosystems. Through meticulous API development and integration, they unified disparate inventory systems, ensuring a unified shopping experience.",
          },
          {
            heading: "Comprehensive Customer Behavior Tracking:",
            body: "Leveraging MySQL, Tekvill designed a sophisticated tracking system that captured and analysed customer activities comprehensively. This system tracked browsing history, cart behaviour, purchase patterns, inquiries, reviews, and ratings. Additionally, robust encryption methods were implemented to safeguard sensitive user data.",
          },
          {
            heading: "User-Centric Interface:",
            body: "Tekvill focused on user experience (UX) design, employing React to craft an intuitive interface. Iterative user testing ensured a seamless and engaging shopping journey, accommodating various user preferences and simplifying the overall shopping experience.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The collaboration between Digital Mall and Tekvill resulted in the successful development and launch of a feature-rich mobile app. The app empowered users with a convenient and personalized shopping experience, enabled by: Seamless navigation across diverse brand offerings. Personalized recommendations based on user behavior analysis. Secure and efficient transaction processes. Detailed insights into user preferences for targeted marketing strategies.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Through Tekvill’s expertise in leveraging cutting-edge technologies and strategic development methodologies, Digital Mall realized its vision of providing a unified and user-centric online shopping experience. The collaboration culminated in a robust mobile application that not only met but exceeded the client’s expectations, establishing Digital Mall as a prominent player in the online retail landscape.",
          },
        ],
      },
    ],
    metric: "App",
    metricLabel: "digital mall",
    sector: "Mobile App Development",
    tags: ["Mobile App Development", "Product Design", "Software Development"],
  },
  {
    slug: "smart-meal-plan-food-order-management-system",
    title: "Smart Meal Plan – Food Order Management System",
    heroTitle: "Smart Meal Plan – Food Order Management System",
    summary:
      "Tekvill built custom WooCommerce plugins for Smart Meal Plan — cooking reports, label printing, and a chef dashboard.",
    cover:
      "/case-studies/smart-meal-plan-food-order-management-system-cover.webp",
    coverAlt: "Smart Meal Plan food order management case study",
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
      "Smart Meal Plan is a meal preparation and delivery service that offers nutritious and customized meal plans to its customers. Tekvill collaborated with Smart Meal Plan to develop custom WooCommerce plugins, including cooking report generation, label printing, and a chef dashboard.",
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Cooking Reports:",
            body: "Smart Meal Plan required a streamlined process for generating cooking reports to facilitate efficient meal preparation. This involved consolidating recipe details, ingredient quantities, and cooking instructions into a printable format.",
          },
          {
            heading: "Label Printing:",
            body: "The platform needed an automated label printing solution that would allow for the quick and accurate labeling of meal containers with customer-specific details such as names, dietary restrictions, and delivery dates.",
          },
          {
            heading: "Chef Dashboard:",
            body: "Smart Meal Plan wanted a centralized chef dashboard that would provide chefs with an intuitive interface to manage recipes, track meal plan orders, and view cooking schedules.",
          },
        ],
      },
      {
        title: "Solution:",
        items: [
          {
            heading: "Cooking Report Generation:",
            body: "Tekvill created a plugin that integrated seamlessly with Smart Meal Plan Woo Commerce platform, enabling the automatic generation of cooking reports. The plugin extracted recipe details and transformed them into printable formats, saving chefs valuable time and streamlining the meal preparation process.",
          },
          {
            heading: "Label Printing Automation:",
            body: "Tekvill developed a label printing plugin that allowed Smart Meal Plan to automate the printing of customer-specific labels for meal containers. This plugin extracted order details from Woo Commerce, generated printable labels with accurate information, and optimized the labeling process.",
          },
          {
            heading: "Chef Dashboard:",
            body: "Tekvill designed and implemented a chef dashboard using PHP within WooCommerce, providing chefs with a user-friendly interface to manage recipes, track orders, and view cooking schedules. The dashboard improved collaboration and coordination among chefs, leading to increased efficiency and productivity.",
          },
        ],
      },
      {
        title: "Results/Impact:",
        items: [
          {
            heading: "Streamlined Meal Preparation:",
            body: "The cooking report generation plugin significantly reduced the time and effort required to prepare meals by automating the consolidation and formatting of recipe details. Chefs could access printable reports quickly, leading to more efficient meal preparation.",
          },
          {
            heading: "Enhanced Labeling Efficiency:",
            body: "The label printing automation plugin eliminated manual data entry and ensured accurate labelling of meal containers. This improved order accuracy, reduced errors, and saved time in the labelling process.",
          },
          {
            heading: "Improved Chef Productivity:",
            body: "The chef dashboard provided a centralized platform for chefs to manage recipes, track orders, and view cooking schedules. This streamlined communication and coordination among the culinary team, resulting in improved productivity and better collaboration.",
          },
          {
            heading: "Business Growth:",
            body: "Tekvill’s custom Woo Commerce plugins improved operational efficiency, resulting in faster meal preparation, accurate labelling, and enhanced chef productivity. This contributed to increased customer satisfaction, repeat business, and ultimately, business growth for Smart Meal Plan.",
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
    title: "Building Meta NFT Platform – A Decentralized NFT Marketplace",
    heroTitle: "Building Meta NFT Platform – A Decentralized NFT Marketplace",
    summary:
      "Tekvill built a decentralized NFT marketplace for the Metaverse — multi-chain trading across Ethereum, BSC, and Polygon.",
    cover: "/case-studies/meta-web3-and-mern-app-cover.webp",
    coverAlt: "Meta NFT Platform Web3 marketplace case study",
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
      "Meta NFT Platform is a leading decentralized NFT marketplace designed for the Metaverse. It offers its users a platform to buy, sell, and trade non-fungible tokens (NFTs) across different blockchain networks including but not limited to Ethereum, Binance Smart Chain, and Polygon. Tekvill partnered with Meta NFT Platform to develop their website using Next.js, a popular React framework for server-side rendering.",
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Multi-Blockchain Integration:",
            body: "Integrating the marketplace with multiple blockchain networks posed a significant challenge. Each blockchain has its own infrastructure and APIs, requiring meticulous implementation to ensure seamless connectivity and interoperability.",
          },
          {
            heading: "Scalability and Performance:",
            body: "As a prominent NFT marketplace, Meta NFT Platform needed to handle a high volume of transactions and user interactions without compromising performance. Scaling considerations were crucial to guarantee a smooth and responsive user experience, even during peak usage periods.",
          },
          {
            heading: "Security and Smart Contract Auditing:",
            body: "The decentralized nature of the marketplace demanded robust security measures. Tekvill conducted thorough smart contract audits and implemented best practices to ensure transaction integrity and protect user assets.",
          },
          {
            heading: "User-Friendly Interface:",
            body: "Meta NFT Platform aimed to create a user-friendly interface appealing to both experienced NFT enthusiasts and newcomers. The challenge was to design an intuitive and engaging interface that simplified the process of buying, selling, and trading NFTs.",
          },
        ],
      },
      {
        title: "Solutions:",
        items: [
          {
            heading: "Blockchain Integration:",
            body: "Tekvill leveraged their blockchain expertise to seamlessly integrate Meta NFT Platform with Ethereum, Binance Smart Chain, and Polygon. This allowed users to explore and transact with NFTs across different networks from a single platform.",
          },
          {
            heading: "Scalability and Performance Optimization:",
            body: "Tekvill implemented various performance optimization techniques, including caching mechanisms, load balancing, and efficient database management. These measures ensured the marketplace could handle high user traffic and deliver fast response times.",
          },
          {
            heading: "Security Measures:",
            body: "Tekvill conducted comprehensive smart contract audits and implemented robust security protocols to safeguard user funds and data. Thorough testing, code reviews, and adherence to industry-standard security practices were prioritized.",
          },
          {
            heading: "User-Centric Design:",
            body: "Tekvill focused on creating a user-centric design that emphasized simplicity, ease of use, and visual appeal. The marketplace interface guided users through the NFT buying and selling process with clear instructions and intuitive navigation.",
          },
        ],
      },
      {
        title: "Results/Impact:",
        items: [
          {
            heading: "Seamless Multi-Blockchain Integration:",
            body: "Meta NFT Platform provided users with a unified platform to explore and trade NFTs across different blockchain networks, enhancing accessibility and market reach.",
          },
          {
            heading: "High Performance and Scalability:",
            body: "The marketplace demonstrated robust performance, efficiently handling a significant volume of transactions and user interactions while maintaining optimal speed and responsiveness.",
          },
          {
            heading: "Enhanced Security and Trust:",
            body: "Tekvill’s security measures and smart contract auditing instilled confidence in users, fostering a secure and trusted environment for NFT transactions.",
          },
          {
            heading: "Engaging User Experience:",
            body: "The user-centric design and intuitive interface of Meta NFT Platform facilitated a smooth and enjoyable experience for users, attracting both seasoned NFT enthusiasts and newcomers to the space.",
          },
        ],
      },
    ],
    closing:
      "Through the collaboration between Tekvill and Meta NFT Platform, a decentralized NFT marketplace was successfully built, offering a seamless and secure platform for users to engage in NFT transactions across multiple blockchain networks.",
    metric: "Web3",
    metricLabel: "NFT marketplace",
    sector: "Web App Development",
    tags: ["Product Design", "Software Development", "Web App Development"],
  },
  {
    slug: "fitness-magento-site",
    title:
      "Fitness Marketplace – Transforming Fitness Equipment Sales through Scalable Web Solutions",
    heroTitle:
      "Fitness Marketplace – Transforming Fitness Equipment Sales through Scalable Web Solutions",
    summary:
      "A US fitness equipment brand needed a scalable Magento store to handle growth, traffic spikes, and a expanding catalog.",
    cover: "/case-studies/fitness-magento-site-cover.webp",
    coverAlt: "Fitness Marketplace Magento case study",
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
      "Fitness Marketplace, a prominent US-based fitness equipment manufacturer and distributor, prides itself on innovation in designing top-tier fitness gear. With an expanding operation spanning multiple states, Fitness Marketplace sought to revamp its online presence. The company aimed to develop a robust web store capable of accommodating their growing product range and effectively handling surges in web traffic.",
    sections: [
      {
        title: "Challenges Faced:",
        items: [
          {
            body: "As Fitness Marketplace experienced exponential growth, several challenges emerged:",
          },
          {
            heading: "Scalability:",
            body: "The existing web infrastructure couldn’t efficiently handle the increasing product line and sudden spikes in online visitors during peak periods.",
          },
          {
            heading: "Diverse Product Range:",
            body: "Fitness Marketplace needed a platform capable of showcasing their diverse inventory effectively, ensuring a seamless and user-friendly browsing and purchasing experience.",
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
            body: "To address Fitness Marketplace’s challenges and elevate their online platform, Tekvill employed a comprehensive tech stack and implemented strategic solutions:",
          },
          {
            heading: "Magento 2 Implementation:",
            body: "Leveraging the robust capabilities of Magento 2, Tekvill established a flexible and scalable e-commerce platform. This allowed for effortless management of the expanding product range while enhancing the overall user experience.",
          },
          {
            heading: "Elasticsearch Integration:",
            body: "By integrating Elasticsearch, Tekvill significantly improved search functionality. This empowered users to efficiently explore Fitness Marketplace’s extensive catalog with enhanced search accuracy and speed.",
          },
          {
            heading: "Utilization of PHP, CSS, and JavaScript:",
            body: "Tekvill utilized these programming languages to customize and optimize various aspects of the web store, ensuring responsiveness, speed, and a visually appealing interface.",
          },
          {
            heading: "Knockout.js and Require.js Integration:",
            body: "Leveraging the power of Knockout.js and Require.js, Tekvill enhanced the frontend functionality, enabling dynamic and responsive elements that elevated the user interface.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The collaboration between Fitness Marketplace and Tekvill resulted in a transformational web store:",
          },
          {
            heading: "Enhanced Scalability:",
            body: "The new infrastructure accommodated Fitness Marketplace’s growing product line and effectively managed fluctuations in web traffic, ensuring a seamless browsing and purchasing experience for users.",
          },
          {
            heading: "Improved User Experience:",
            body: "By optimizing performance and implementing responsive design elements, the web store provided a smoother, more engaging experience for customers, enhancing retention and conversion rates.",
          },
          {
            heading: "Streamlined Product Discovery:",
            body: "The integration of Elasticsearch facilitated efficient and accurate product searches, enabling customers to find desired items swiftly amidst the extensive inventory.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Tekvill’s strategic implementation of Magento 2, Elasticsearch, and various frontend technologies successfully addressed Fitness Marketplace’s challenges. The collaboration resulted in a highly scalable, functionally responsive web store that not only accommodated the company’s rapid growth but also enhanced the overall user experience, positioning Fitness Marketplace as a leader in the online fitness equipment market.",
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
    title:
      "Flourescent Commerce – Elevating Home Decor E-commerce through Platform Optimization",
    heroTitle:
      "Flourescent Commerce – Elevating Home Decor E-commerce through Platform Optimization",
    summary:
      "Flourescent Commerce moved from Laravel to Shopify with Tekvill — better UX, scalability, and dedicated e-commerce tools.",
    cover:
      "/case-studies/elevating-flourescent-commerce-from-laravel-to-shopify-for-enhanced-e-commerce-capabilities-cover.webp",
    coverAlt: "Flourescent Commerce Shopify migration case study",
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
      "Flourescent Commerce, a prominent home decor brand, initially operated on an E-commerce platform built with Laravel. However, they encountered hurdles in adapting to new e-commerce features and optimizing their platform’s capabilities. Seeking a more user-friendly and efficient solution, Flourescent Commerce partnered with Tekvill to upgrade and optimize their E-commerce platform.",
    sections: [
      {
        title: "Challenges Faced:",
        items: [
          {
            body: "Throughout the project, several challenges emerged:",
          },
          {
            heading: "Limited E-commerce Features:",
            body: "The existing Laravel-based platform posed constraints in integrating new e-commerce features, hindering the brand’s ability to adapt to evolving market demands.",
          },
          {
            heading: "User Experience Enhancement:",
            body: "Flourescent Commerce required a complete overhaul of the platform’s user interface and experience to improve customer engagement and conversion rates.",
          },
          {
            heading: "Scalability and Efficiency:",
            body: "With the business expanding, the need for a scalable and efficient infrastructure to support growing demands became imperative.",
          },
        ],
      },
      {
        title: "Solutions Provided by Tekvill:",
        items: [
          {
            body: "Tekvill embarked on a transformative journey for Flourescent Commerce, implementing strategic solutions:",
          },
          {
            heading: "Complete UI/UX Redesign:",
            body: "Tekvill initiated a comprehensive redesign of the platform’s user interface and experience. This overhaul aimed to enhance user engagement, simplify navigation, and improve the overall aesthetics of the site.",
          },
          {
            heading: "Backend Functionality Enhancement:",
            body: "Tekvill bolstered the backend functionality, ensuring a robust and scalable infrastructure capable of handling the growing demands of an E-commerce business. This involved optimizing performance and streamlining processes for efficient management.",
          },
          {
            heading: "Recommendation and Migration to Shopify:",
            body: "As the project progressed, Tekvill identified the potential advantages of migrating to Shopify, a specialized E-commerce platform. Tekvill recommended this transition to leverage Shopify’s dedicated E-commerce capabilities and extensive ecosystem.",
          },
          {
            heading: "Implementation:",
            body: "Tekvill employed a specific tech stack for this project, including: Theme Development and Customization using Shopify’s Liquid language; Seamless Integration of Customer Support Tools for enhanced service; Integration of Multiple Payment Methods for increased flexibility; API Integration to ensure seamless connectivity with third-party systems and services.",
          },
        ],
      },
      {
        title: "Outcome:",
        items: [
          {
            body: "The collaboration between Flourescent Commerce and Tekvill resulted in a transformational upgrade of their E-commerce platform:",
          },
          {
            heading: "Improved User Experience:",
            body: "The complete UI/UX redesign significantly enhanced user engagement and interaction, leading to improved conversion rates and customer satisfaction.",
          },
          {
            heading: "Scalability and Efficiency:",
            body: "The transition to Shopify provided Flourescent Commerce with a robust and scalable platform, enabling efficient management of their expanding business operations.",
          },
          {
            heading: "Advanced E-commerce Capabilities:",
            body: "Leveraging Shopify’s specialized features, Flourescent Commerce gained access to a wide array of tools and integrations, enhancing their E-commerce functionalities and streamlining operations.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "Tekvill’s strategic approach, encompassing UI/UX redesign, backend enhancements, and the transition to Shopify, successfully addressed Flourescent Commerce‘s challenges. The optimized E-commerce platform empowered Flourescent Commerce to provide a superior shopping experience for their customers while efficiently managing their growing business demands.",
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
    title: "Hotel Site – Scalablility",
    heroTitle: "Hotel Site – Scalablility",
    summary:
      "Lux Resort partnered with Tekvill to overhaul site performance and redesign the booking experience for modern travelers.",
    cover:
      "/case-studies/lux-scalable-ecommerce-company-built-on-woocommerce-cover.webp",
    coverAlt: "Lux Resort hotel site case study",
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
      "Lux Resort, a prominent player in the hospitality and travel industry, partnered with Tekvill to address two pressing concerns: enhancing their website’s performance and completely redesigning its user interface. The objective was to provide a superior user experience while browsing and booking accommodations and travel services.",
    sections: [
      {
        title: "Challenges:",
        items: [
          {
            heading: "Performance Issues:",
            body: "Lux Resort was grappling with severe performance issues, including slow page loading times, resulting in high bounce rates and diminished conversion rates.",
          },
          {
            heading: "Outdated User Interface:",
            body: "The existing user interface had become outdated, failing to align with the evolving preferences and expectations of contemporary travelers.",
          },
          {
            heading: "Mobile Responsiveness:",
            body: "Recognizing the increasing prevalence of mobile browsing, Lux Resort needed a responsive design that would seamlessly adapt to diverse devices and screen sizes.",
          },
          {
            heading: "Search Functionality:",
            body: "The prevailing search functionality was cumbersome, causing users to struggle with finding and booking accommodations efficiently.",
          },
        ],
      },
      {
        title: "Solution:",
        items: [
          {
            body: "Tekvill formulated a comprehensive strategy to address the challenges faced by Lux Resort:",
          },
          {
            heading: "Performance Optimization:",
            body: "Caching Strategies: Advanced caching techniques were implemented to significantly reduce page loading times. Content Delivery Network (CDN): A global CDN was integrated to expedite content delivery to users worldwide. Server Optimization: The server infrastructure underwent an upgrade to efficiently manage increased traffic and load.",
          },
          {
            heading: "Redesign:",
            body: "User-Centered Design: In-depth user research was conducted to grasp the preferences and behavior of Lux Resort target audience. The research findings guided the creation of a user-centric interface. Modern Aesthetics: The website’s visual design was completely revamped, incorporating contemporary aesthetics and a harmonious color palette. Mobile Responsiveness: A responsive design was implemented to ensure consistent functionality and aesthetics across all devices, including smartphones and tablets.",
          },
          {
            heading: "Search Functionality Enhancement:",
            body: "Advanced Filters: The search functionality was enhanced with the introduction of advanced filters, empowering users to refine their search results based on criteria like price, location, and ratings. Predictive Search: Predictive search capabilities were implemented to help users discover accommodations more quickly and accurately. Geo-Location Integration: Geo-location data was harnessed to provide users with nearby accommodation options, further streamlining the booking experience.",
          },
        ],
      },
      {
        title: "Conclusion:",
        items: [
          {
            body: "The collaboration between Lux Resort and Tekvill brought about a significant transformation, breathing new life into their online presence. With improved performance, a redesigned interface, and enhanced search functionality, Lux Resort was well-prepared to meet the demands of modern travelers. The positive outcomes underscored the value of a strategic approach to website optimization and design, ultimately leading to heightened user satisfaction and business growth for Lux Resort",
          },
        ],
      },
    ],
    metric: "Lux",
    metricLabel: "resort site",
    sector: "Web App Development",
    tags: ["Web App Development"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function filterCaseStudies(categoryId: WorkCategoryId | "all") {
  if (categoryId === "all") return caseStudies;
  return caseStudies.filter((item) => item.categories.includes(categoryId));
}
