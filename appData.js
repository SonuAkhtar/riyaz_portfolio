export const appStats = {
  years: 8,
  projects: 22,
  technologies: 15,
  companies: 5,
  domains: 8,
  certifications: 12,
  ai: "AI",
  azure: "☁",
  collabs: 12,
  rating: 4.8,
};

export const appTechs = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Azure",
  "ChatGPT",
  "Node.js",
  "Anthropic",
  "Claude Code",
  "Figma",
  "Tailwind",
  "Redux",
  "MongoDB",
  "GraphQL",
  "AWS",
];

/* ----- Social links ----- */
export const socialIconsData = [
  {
    id: 0,
    label: "GitHub",
    class: "fab fa-github",
    href: "https://github.com/SonuAkhtar",
  },
  {
    id: 1,
    label: "LinkedIn",
    class: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/riyaz-akhtar-03bb59129",
  },
  {
    id: 2,
    label: "Twitter",
    class: "fab fa-twitter",
    href: "https://twitter.com/SonuA007",
  },
];

/* ----- Navigation ----- */
export const navLinks = [
  { id: 1, label: "Skills", href: "/skills", icon: "fas fa-code" },
  { id: 2, label: "Work", href: "/work", icon: "fas fa-briefcase" },
  { id: 3, label: "Projects", href: "/projects", icon: "fas fa-rocket" },
  { id: 4, label: "About", href: "/about", icon: "fas fa-user" },
  {
    id: 5,
    label: "Testimony",
    href: "/testimony",
    icon: "fas fa-quote-right",
  },
];

/* ----- Certifications ----- */

/* ----- Skills ----- */


/* ----- Hobbies ----- */
export const hobbiesData = [
  {
    id: 0,
    image: "/assets/hobbies/image_1.jpg",
    title: "Humayun's Tomb",
    desc: "Mughal-era architecture through a contemporary lens - Delhi's most serene monument at golden hour.",
  },
  {
    id: 1,
    image: "/assets/hobbies/image_2.jpg",
    title: "Palm Tree",
    desc: "Finding geometry in nature - the perfect symmetry of a lone palm against a clear sky.",
  },
  {
    id: 2,
    image: "/assets/hobbies/image_3.jpg",
    title: "Flying Birds",
    desc: "Capturing motion in stillness - the split-second a murmuration shifts direction.",
  },
  {
    id: 3,
    image: "/assets/hobbies/image_4.jpg",
    title: "Safdarjung's Tomb",
    desc: "History carved in sandstone - the intricate craftsmanship of a 270-year-old monument.",
  },
  {
    id: 4,
    image: "/assets/hobbies/image_5.jpg",
    title: "Eyes on the Book",
    desc: "Quiet moments make the best frames - concentration and light in perfect harmony.",
  },
  {
    id: 5,
    image: "/assets/hobbies/image_7.jpg",
    title: "Flower in the Woods",
    desc: "Solitude and beauty coexist - a single bloom standing calm amid the undergrowth.",
  },
];

/* ----- Contact ----- */
export const contactData = [
  {
    id: 0,
    icon: "/assets/contact/call.gif",
    name: "Call",
    info: "+91-7009003062",
    href: "tel:+917009003062",
    alt: "call",
  },
  {
    id: 1,
    icon: "/assets/contact/email.gif",
    name: "Email",
    info: "sonua981@gmail.com",
    href: "mailto:sonua981@gmail.com",
    alt: "email",
  },
  {
    id: 2,
    icon: "/assets/contact/location.gif",
    name: "Location",
    info: "Gurgaon, India",
    alt: "location",
  },
];

export const homeContactIcons = {
  call: { icon: "fas fa-phone", color: "cc_green" },
  email: { icon: "fas fa-envelope", color: "cc_blue" },
  location: { icon: "fas fa-location-dot", color: "cc_purple" },
};

export const hobbyCat = [
  { icon: "fas fa-camera", label: "Photography" },
  { icon: "fas fa-plane", label: "Travel" },
  { icon: "fas fa-eye", label: "Visual Art" },
];

export const marqueeItems = [
  "Lead Engineer",
  "React",
  "Next.js",
  "TypeScript",
  "Azure Certified",
  "AI Integration Expert",
  "Open to Opportunities",
  "Full-Stack Developer",
  "Anthropic Claude",
  "8+ Years Experience",
];

// ---------- Home Page Data ----------
export const homeHeroTypewriter = [
  "Frontend Experiences",
  "UI / UX Designs",
  "Full‑Stack Apps",
  "AI Integrated Apps",
  "Scalable Products",
];

export const homeAboutData = {
  tech: ["Next.js", "React", "TypeScript", "AI Integration", "AWS"],
  traits: [
    { icon: "fas fa-bolt", label: "Performance First" },
    { icon: "fas fa-layer-group", label: "Design Systems" },
    { icon: "fas fa-code-branch", label: "Clean Architecture" },
    { icon: "fas fa-users", label: "Team Leadership" },
  ],
  stats: [
    { to: 8, suffix: "+", label: "Years of Experience" },
    { to: 22, suffix: "+", label: "Projects Delivered" },
    { to: 5, suffix: "", label: "Companies Worked" },
  ],
};

export const homeCareerData = {
  companies: [
    {
      id: 0,
      title: "Lead Experience Engineer",
      org: "Publicis Sapient",
      year: "2024 – Present",
      current: true,
      tag: "Leadership",
    },
    {
      id: 1,
      title: "Senior Software Engineer",
      org: "Optum (UHG)",
      year: "2021 – 2024",
      tag: "Full-Stack",
    },
    {
      id: 2,
      title: "Senior Business Analyst",
      org: "Evalueserve",
      year: "2020 – 2021",
      tag: "Analytics",
    },
    {
      id: 3,
      title: "Software Engineer - Frontend",
      org: "Tech Mahindra",
      year: "2018 – 2020",
      tag: "Frontend",
    },
    {
      id: 4,
      title: "Technical Engineer",
      org: "Tele-Performance",
      year: "2017 – 2018",
      tag: "Support",
    },
  ],
  education: [
    {
      id: 0,
      title: "Bachelor of Technology",
      org: "Lovely Professional University",
      year: "2013 – 2017",
      field: "Computer Science & Engineering",
    },
  ],
};

export const homeWorksData = {
  tags: [
    ["React", "Next.js", "TypeScript", "Tailwind"],
    ["Node.js", "REST APIs", "MongoDB", "PostgreSQL"],
    ["Figma", "Adobe XD", "Prototyping", "A11y"],
    ["Illustrator", "Branding", "SVG", "Motion"],
  ],
  stacks: [
    {
      id: 0,
      icon: "fab fa-react",
      name: "Frontend Engineering",
      features: [
        "Pixel-perfect React & Next.js applications",
        "Design system architecture & component libraries",
        "Performance optimization - Core Web Vitals",
        "TypeScript-first, fully tested codebases",
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      id: 1,
      icon: "fas fa-robot",
      name: "AI Integration",
      features: [
        "OpenAI GPT-4 & Claude API integrations",
        "RAG pipelines with vector databases",
        "Intelligent UI components & chatbots",
        "Prompt engineering & fine-tuning",
      ],
      tags: ["OpenAI", "LangChain", "RAG", "Copilot"],
    },
    {
      id: 2,
      icon: "fab fa-microsoft",
      name: "Azure Cloud",
      features: [
        "CI/CD pipelines via Azure DevOps",
        "Serverless APIs with Azure Functions",
        "Azure Static Web Apps deployment",
        "Application Insights monitoring",
      ],
      tags: ["Azure DevOps", "Functions", "Static Web Apps", "AI Services"],
    },
    {
      id: 3,
      icon: "fab fa-node-js",
      name: "Backend Development",
      features: [
        "RESTful & GraphQL API design",
        "Scalable Node.js microservices",
        "MongoDB & PostgreSQL data modeling",
        "Authentication & authorization systems",
      ],
      tags: ["Node.js", "REST", "GraphQL", "MongoDB"],
    },
  ],
};

export const homeSkillsData = {
  catColors: ["#5b8dee", "#10b981", "#a855f7", "#f59e0b"],

  skills: [
    {
      id: 0,
      icon: "fab fa-react",
      title: "Frontend",
      subtitle: "8+ years",
      data: [
        { id: 0, icon: "fab fa-react", name: "React.js", number: "90" },
        { id: 1, icon: "fab fa-react", name: "Next.js", number: "85" },
        { id: 2, icon: "fab fa-js", name: "TypeScript", number: "85" },
        { id: 2, icon: "fab fa-js", name: "JavaScript", number: "90" },
        { id: 3, icon: "fab fa-html5", name: "HTML5", number: "90" },
        { id: 4, icon: "fab fa-css3-alt", name: "CSS3", number: "90" },
        { id: 5, icon: "fab fa-react", name: "Redux", number: "80" },
        { id: 7, icon: "fas fa-code", name: "Zustand", number: "70" },
        { id: 6, icon: "fas fa-wind", name: "Tailwind", number: "80" },
        { id: 6, icon: "fas fa-wind", name: "ShadCn", number: "75" },
      ],
    },
    {
      id: 1,
      icon: "fab fa-node-js",
      title: "Backend",
      subtitle: "4+ years",
      data: [
        { id: 0, icon: "fab fa-node-js", name: "Node.js", number: "75" },
        { id: 1, icon: "fas fa-server", name: "Express.js", number: "70" },
        { id: 2, icon: "fas fa-database", name: "MongoDB", number: "70" },
        {
          id: 3,
          icon: "fas fa-database",
          name: "PostgreSQL",
          number: "65",
        },
        { id: 4, icon: "fas fa-code", name: "REST APIs", number: "75" },
        { id: 5, icon: "fab fa-python", name: "Python", number: "70" },
      ],
    },
    {
      id: 2,
      icon: "fas fa-robot",
      title: "AI / Cloud",
      subtitle: "2+ years",
      data: [
        { id: 0, icon: "fas fa-robot", name: "OpenAI API", number: "75" },
        {
          id: 1,
          icon: "fas fa-comments",
          name: "Prompt Eng.",
          number: "88",
        },
        { id: 2, icon: "fas fa-link", name: "LangChain", number: "70" },
        {
          id: 3,
          icon: "fab fa-microsoft",
          name: "Azure DevOps",
          number: "82",
        },
        { id: 4, icon: "fas fa-bolt", name: "Claude Code", number: "70" },
        {
          id: 5,
          icon: "fas fa-brain",
          name: "Azure AI Svcs",
          number: "70",
        },
      ],
    },
    {
      id: 3,
      icon: "fab fa-figma",
      title: "UI / UX",
      subtitle: "4+ years",
      data: [
        { id: 0, icon: "fab fa-figma", name: "Figma", number: "82" },
        {
          id: 1,
          icon: "fas fa-paintbrush",
          name: "Adobe XD",
          number: "70",
        },
        {
          id: 2,
          icon: "fas fa-layer-group",
          name: "Design Systems",
          number: "85",
        },
        {
          id: 4,
          icon: "fas fa-film",
          name: "Motion Design",
          number: "75",
        },
      ],
    },
  ],

  levelColors: {
    expert: {
      fill: "#5bdc8e",
      glow: "rgba(91,220,142,0.4)",
      bg: "rgba(91,220,142,0.1)",
    },
    proficient: {
      fill: "#5b8dee",
      glow: "rgba(91,141,238,0.4)",
      bg: "rgba(91,141,238,0.1)",
    },
    familiar: {
      fill: "#f0a04b",
      glow: "rgba(240,160,75,0.4)",
      bg: "rgba(240,160,75,0.1)",
    },
    learning: {
      fill: "#4b5e75",
      glow: "rgba(75,94,117,0.25)",
      bg: "rgba(75,94,117,0.08)",
    },
  },

  stats: [
    { cls: "expert", label: "Expert ≥ 80%" },
    { cls: "proficient", label: "Proficient ≥ 65%" },
    { cls: "familiar", label: "Familiar ≥ 45%" },
    { cls: "learning", label: "Learning" },
  ],
};

export const homeProjectsData = {
  colors: ["#5b8dee", "#a855f7", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"],

  projects: [
    {
      id: 0,
      image: "/assets/projects/project1.PNG",
      name: "TalkEasy AI",
      desc: "AI-powered conversational platform with GPT-4 integration, context memory, and real-time streaming responses.",
      github: "https://github.com/SonuAkhtar/talkeasy",
      live: "https://talkeasy-ai.vercel.app/",
      tags: ["React", "OpenAI", "Node.js"],
      category: "ai",
      featured: true,
    },
    {
      id: 1,
      image: "/assets/projects/project2.PNG",
      name: "WorkBuddy",
      desc: "Freelancer workspace with project tracking, time logging, invoice generation, and client portal.",
      github: "https://github.com/SonuAkhtar/BikeHomeUI",
      live: "https://sonuakhtar.github.io/BikeHomeUI/",
      tags: ["React", "TypeScript", "MongoDB"],
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      image: "/assets/projects/project3.PNG",
      name: "Start UI",
      desc: "Modern SaaS landing page with animated hero, feature showcases, pricing tables, and CTA optimizations.",
      github: "https://github.com/SonuAkhtar/Start",
      live: "https://start-sonu.vercel.app/",
      tags: ["React", "Framer Motion", "Tailwind"],
      category: "frontend",
    },
    {
      id: 3,
      image: "/assets/projects/project4.PNG",
      name: "Landing UI",
      desc: "High-performance product landing page with custom animations, responsive layout, and Lighthouse 98+ score.",
      github: "https://github.com/SonuAkhtar/Start",
      live: "https://talkeasy-ai.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
    },
    {
      id: 4,
      image: "/assets/projects/project5.PNG",
      name: "RealState UI",
      desc: "Real estate marketplace UI with property filtering, map integration, virtual tour previews, and lead capture.",
      github: "https://github.com/SonuAkhtar/LandingPageUI",
      live: "https://sonuakhtar.github.io/BikeHomeUI/",
      tags: ["React", "Maps API", "CSS Grid"],
      category: "frontend",
    },
    {
      id: 5,
      image: "/assets/projects/project6.PNG",
      name: "BikeCar UI",
      desc: "Automotive showcase with 3D product cards, scroll-triggered animations, and a configurator-style UI.",
      github: "https://github.com/SonuAkhtar/CarsBikeUI",
      live: "https://sonuakhtar.github.io/CarsBikeUI/",
      tags: ["React", "GSAP", "Framer Motion"],
      category: "frontend",
    },
  ],
};

// ---------- Skills Page Data ----------
export const skillsPageData = {
  hero: {
    title1: "Skills &",
    title2: "Expertise.",
    desc: "8 years of shipping production-grade applications across frontend, backend, AI, and cloud. Every skill is battle-tested, not just box-checked.",
    details: [
      { value: `${appStats.years}+`, label: "Years" },
      { value: `${appStats.technologies}+`, label: "Technologies" },
      { value: `${appStats.domains}`, label: "Domains" },
      { value: `${appStats.certifications}`, label: "Certifications" },
    ],
    color: "",
  },

  cersData: [
    {
      id: 0,
      icon: "fas fa-robot",
      name: "Claude Code in Action",
      issuer: "Anthropic",
      badge: "Claude",
      year: "2026",
      color: "claude",
      verified: true,
      desc: "Building production applications with Claude models and the Anthropic API.",
    },
    {
      id: 1,
      icon: "fas fa-brain",
      name: "LangChain 101 for Beginners",
      issuer: "Udemy",
      badge: "AI",
      year: "2026",
      color: "ai",
      verified: true,
      desc: "LangChain agents, chains, memory, and RAG pipeline architecture.",
    },
    {
      id: 2,
      icon: "fab fa-aws",
      name: "AWS Partner: Generative AI Essentials",
      issuer: "AWS",
      badge: "AWS",
      year: "2026",
      color: "azure",
      verified: true,
      desc: "Generative AI foundations, Amazon Bedrock, and responsible AI practices.",
    },
    {
      id: 3,
      icon: "fas fa-robot",
      name: "Intro to AI Agents and Agentic AI",
      issuer: "Udemy",
      badge: "Agents",
      year: "2026",
      color: "claude",
      verified: true,
      desc: "Designing multi-agent systems, tool use, and autonomous AI workflows.",
    },
    {
      id: 4,
      icon: "fab fa-js",
      name: "Understanding TypeScript",
      issuer: "Udemy",
      badge: "TypeScript",
      year: "2025",
      color: "ai",
      verified: true,
      desc: "Advanced TypeScript: generics, decorators, strict typing, and real-world patterns.",
    },
    {
      id: 5,
      icon: "fas fa-microchip",
      name: "AI Trends - Emerging Technologies",
      issuer: "Publicis Groupe",
      badge: "Internal",
      year: "2025",
      color: "azure",
      verified: true,
      desc: "Enterprise AI adoption, LLM integration strategy, and responsible AI governance.",
    },
  ],

  philisophy: [
    {
      icon: "fas fa-layer-group",
      title: "Build Once, Scale Forever",
      body: "Every component, API, and design token is built as if it will be shared across 10 teams. Composable, documented, and version-controlled from day one.",
      accent: "#5b8dee",
    },
    {
      icon: "fas fa-brain",
      title: "AI-First Mindset",
      body: "LLMs aren't a bolt-on feature - they're architectural decisions. I plan AI integration at the system level: embeddings, context windows, and inference latency.",
      accent: "#7c6ff7",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud by Default",
      body: "Every application I ship is cloud-native on Azure: CI/CD pipelines, containerized deployments, serverless functions, and Application Insights observability.",
      accent: "#0078d4",
    },
  ],

  stats: homeSkillsData.stats,
  skills: homeSkillsData.skills,
};

// ---------- Work Page Data ----------
export const worksPageData = {
  hero: {
    title1: "Crafting Digital",
    title2: "Experiences.",
    desc: "From AI-powered web apps to Azure-deployed microservices - I deliver end-to-end engineering that scales. Every project is production-grade from commit one.",
    details: [
      { value: `${appStats.years}+`, label: "Years" },
      { value: `${appStats.projects}+`, label: "Projects" },
      { value: `${appStats.ai}`, label: "Integrations" },
      { value: `${appStats.azure}`, label: "Azure Deploys" },
    ],
    color: "",
  },

  works: [
    ...homeWorksData.stacks,
    {
      id: 4,
      icon: "fas fa-paintbrush",
      name: "UI / UX Design",
      features: [
        "Figma prototypes & design systems",
        "Accessible, WCAG-compliant interfaces",
        "Motion design & micro-interactions",
        "User research & usability testing",
      ],
      tags: ["Figma", "Design Systems", "A11y", "Motion"],
    },
    {
      id: 5,
      icon: "fas fa-layer-group",
      name: "Full-Stack Solutions",
      features: [
        "End-to-end product engineering",
        "React frontend + Node.js backend + Azure",
        "AI-powered features baked into every layer",
        "Production-ready from day one",
      ],
      tags: ["React", "Node.js", "Azure", "AI"],
    },
  ],

  works2: [
    {
      icon: "fab fa-react",
      title: "Frontend Engineering",
      number: "01",
      summary:
        "Pixel-perfect, performant UIs built with React, Next.js, and TypeScript. Design systems, Core Web Vitals, and Lighthouse 95+.",
      features: [
        "React / Next.js / TypeScript",
        "Tailwind CSS + CSS Modules",
        "Design Systems & Component Libraries",
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      accent: "#61dafb",
    },
    {
      icon: "fas fa-robot",
      title: "AI Integration",
      number: "02",
      summary:
        "Embedding intelligence into products - from GPT-4 chat interfaces to RAG pipelines, LangChain agents, and Azure AI Services.",
      features: [
        "OpenAI API / GPT-4 / Embeddings",
        "LangChain + RAG Pipelines",
        "Copilot & AI Agents",
      ],
      tags: ["OpenAI", "LangChain", "RAG", "Copilot"],
      accent: "#7c6ff7",
    },
    {
      icon: "fab fa-microsoft",
      title: "Azure Cloud",
      number: "03",
      summary:
        "Cloud-native architectures on Azure - CI/CD pipelines, serverless Functions, Static Web Apps, and Application Insights monitoring.",
      features: [
        "Azure DevOps CI/CD",
        "Azure Functions + Static Web Apps",
        "Application Insights Telemetry",
      ],
      tags: ["Azure DevOps", "Functions", "Static Web", "AI Services"],
      accent: "#0078d4",
    },
    {
      icon: "fab fa-node-js",
      title: "Backend APIs",
      number: "04",
      summary:
        "Scalable REST and GraphQL APIs built with Node.js, Express, and NestJS. PostgreSQL, MongoDB, and Redis at scale.",
      features: [
        "Node.js / Express / NestJS",
        "REST + GraphQL APIs",
        "PostgreSQL / MongoDB / Redis",
      ],
      tags: ["Node.js", "GraphQL", "REST", "PostgreSQL"],
      accent: "#5bdc8e",
    },
    {
      icon: "fas fa-paintbrush",
      title: "UI/UX Design",
      number: "05",
      summary:
        "Figma-first design thinking - from wireframes to polished prototypes. Accessibility, motion design, and handoff-ready specs.",
      features: [
        "Figma Prototyping & Design Systems",
        "WCAG 2.1 Accessibility (A11y)",
        "Framer Motion Animations",
      ],
      tags: ["Figma", "A11y", "Motion", "Design Tokens"],
      accent: "#f0a04b",
    },
    {
      icon: "fas fa-layer-group",
      title: "Full-Stack Solutions",
      number: "06",
      summary:
        "End-to-end delivery: React frontend + Node.js backend + Azure deployment + AI integration - shipped as a single coherent product.",
      features: [
        "Full-stack React + Node.js",
        "Azure Cloud Deployment",
        "AI-Powered Features",
      ],
      tags: ["React", "Node.js", "Azure", "AI"],
      accent: "#5b8dee",
    },
  ],

  process: [
    {
      num: "01",
      icon: "fas fa-search",
      title: "Discovery",
      body: "Understanding goals, constraints, and the user's core problem. Stakeholder interviews, competitive analysis, and defining success metrics.",
      color: "#5b8dee",
    },
    {
      num: "02",
      icon: "fas fa-sitemap",
      title: "Architecture",
      body: "Planning the system: data models, component trees, API contracts, and cloud resource design. Decisions documented before a line of code is written.",
      color: "#7c6ff7",
    },
    {
      num: "03",
      icon: "fas fa-code",
      title: "Build",
      body: "Writing clean, tested, production-ready code with CI/CD from day one. TypeScript, unit tests, code reviews, and daily deployments.",
      color: "#5bdc8e",
    },
    {
      num: "04",
      icon: "fas fa-rocket",
      title: "Deliver",
      body: "Deployed to Azure, monitored with Application Insights, and iterated based on real user data. Zero-downtime releases and rollback-ready.",
      color: "#f0a04b",
    },
  ],
};

// ---------- Projects Page Data ----------
export const projectsPageData = {
  hero: {
    title1: "Selected",
    title2: "Projects.",
    desc: "Production-ready work spanning AI-powered apps, enterprise frontend systems, and cloud-deployed solutions. Every project is a story of solving real problems.",
    details: [
      { value: `${appStats.projects}+`, label: "Projects" },
      { value: `${appStats.years}+`, label: "Years" },
      { value: `${appStats.ai}`, label: "Powered" },
      { value: `${appStats.azure}`, label: "Azure Deployed" },
    ],
    color: "",
  },

  projects: [
    {
      id: 1,
      title: "TalkEasy AI",
      description:
        "AI-powered conversational platform with GPT-4 integration, context memory, and real-time streaming responses.",
      image: "/assets/projects/project1.PNG",
      category: "AI/ML",
      tags: ["React", "OpenAI", "Node.js"],
      github: "https://github.com/SonuAkhtar/talkeasy",
      live: "https://talkeasy-ai.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "WorkBuddy",
      description:
        "Freelancer workspace with project tracking, time logging, invoice generation, and client portal.",
      image: "/assets/projects/project2.PNG",
      category: "Full-Stack",
      tags: ["React", "TypeScript", "MongoDB"],
      github: "https://github.com/SonuAkhtar/BikeHomeUI",
      live: "https://sonuakhtar.github.io/BikeHomeUI/",
      featured: true,
    },
    {
      id: 3,
      title: "Start UI",
      description:
        "Modern SaaS landing page with animated hero, feature showcases, pricing tables, and CTA optimizations.",
      image: "/assets/projects/project3.PNG",
      category: "Frontend",
      tags: ["React", "Framer Motion", "Tailwind"],
      github: "https://github.com/SonuAkhtar/Start",
      live: "https://start-sonu.vercel.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Landing UI",
      description:
        "High-performance product landing page with custom animations, responsive layout, and Lighthouse 98+ score.",
      image: "/assets/projects/project4.PNG",
      category: "Frontend",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/SonuAkhtar/Start",
      live: "https://talkeasy-ai.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      title: "RealState UI",
      description:
        "Real estate marketplace UI with property filtering, map integration, virtual tour previews, and lead capture.",
      image: "/assets/projects/project5.PNG",
      category: "Frontend",
      tags: ["React", "Maps API", "CSS Grid"],
      github: "https://github.com/SonuAkhtar/LandingPageUI",
      live: "https://sonuakhtar.github.io/BikeHomeUI/",
      featured: false,
    },
    {
      id: 6,
      title: "BikeCar UI",
      description:
        "Automotive showcase with 3D product cards, scroll-triggered animations, and a configurator-style UI.",
      image: "/assets/projects/project6.PNG",
      category: "Frontend",
      tags: ["React", "GSAP", "Framer Motion"],
      github: "https://github.com/SonuAkhtar/CarsBikeUI",
      live: "https://sonuakhtar.github.io/CarsBikeUI/",
      featured: false,
    },
  ],

  categories: [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI / ML" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
  ],

  catColors: {
    "AI/ML": {
      text: "#9d96ff",
      bg: "rgba(124,111,247,0.1)",
      border: "rgba(124,111,247,0.25)",
      num: "#7c6ff7",
    },
    Frontend: {
      text: "#5b8dee",
      bg: "rgba(91,141,238,0.1)",
      border: "rgba(91,141,238,0.25)",
      num: "#5b8dee",
    },
    "Full-Stack": {
      text: "#5bdc8e",
      bg: "rgba(91,220,142,0.1)",
      border: "rgba(91,220,142,0.25)",
      num: "#5bdc8e",
    },
    Mobile: {
      text: "#f0a04b",
      bg: "rgba(240,160,75,0.1)",
      border: "rgba(240,160,75,0.25)",
      num: "#f0a04b",
    },
  },
};

// ---------- About Page Data ----------
export const aboutPageData = {
  stats: [
    { to: appStats.years, suffix: "+", label: "Years Experience" },
    { to: appStats.projects, suffix: "+", label: "Projects Shipped" },
    { to: appStats.companies, suffix: "", label: "Companies" },
    { to: appStats.technologies, suffix: "+", label: "Tech Stack" },
  ],
  coreSkills: [
    {
      icon: "fab fa-react",
      name: "React / Next.js",
      level: 90,
      color: "#5b8dee",
    },
    {
      icon: "fas fa-code",
      name: "TypeScript / JavaScript",
      level: 90,
      color: "#7c6ff7",
    },
    {
      icon: "fab fa-node-js",
      name: "Node.js",
      level: 80,
      color: "#5bdc8e",
    },
    {
      icon: "fas fa-mobile-screen",
      name: "Open AI / Anthropic",
      level: 80,
      color: "#61dafb",
    },
    {
      icon: "fas fa-database",
      name: "AI Integration",
      level: 70,
      color: "#e06c75",
    },
    {
      icon: "fas fa-paintbrush",
      name: "UI / UX Design",
      level: 75,
      color: "#f5a623",
    },
    {
      icon: "fas fa-database",
      name: "MongoDB / GraphQL",
      level: 70,
      color: "#e06c75",
    },
    {
      icon: "fas fa-mobile-screen",
      name: "Responsive Web",
      level: 90,
      color: "#61dafb",
    },
  ],

  tagPills: [
    "GPT-4",
    "Claude Code",
    "LangChain",
    "RAG",
    "Copilot",
    "Embeddings",
  ],
  aiStack: [
    {
      icon: "fas fa-robot",
      name: "OpenAI API",
      desc: "GPT-4, Embeddings & DALL·E integration - building intelligent UI components, AI-powered search, and contextual chat interfaces.",
      badge: "Integration",
      color: "green",
    },
    {
      icon: "fas fa-brain",
      name: "Prompt Engineering",
      desc: "Crafting precise, context-aware prompts for production LLM workflows. Few-shot learning, chain-of-thought, and RAG patterns.",
      badge: "Proficient",
      color: "purple",
    },
    {
      icon: "fas fa-link",
      name: "LangChain / RAG",
      desc: "Retrieval-Augmented Generation pipelines for knowledge-grounded AI features - pairing LLMs with vector databases.",
      badge: "Applied",
      color: "blue",
    },
    {
      icon: "fas fa-wand-magic-sparkles",
      name: "GitHub Copilot",
      desc: "AI-accelerated development workflows - code completion, test generation, and refactoring at scale across large codebases.",
      badge: "Daily",
      color: "amber",
    },
    {
      icon: "fas fa-eye",
      name: "Anthropic Claude",
      desc: "Multimodal AI integration: image analysis, OCR, and computer vision APIs embedded in web applications.",
      badge: "Applied",
      color: "pink",
    },
    {
      icon: "fas fa-microphone",
      name: "Speech & NLP",
      desc: "Whisper API transcription, sentiment analysis, and NLP-driven features for richer, more accessible user experiences.",
      badge: "Applied",
      color: "teal",
    },
  ],
  azureStack: [
    {
      icon: "fas fa-infinity",
      name: "Azure DevOps",
      desc: "End-to-end CI/CD pipelines - build, test, and deploy automation for React and Node.js applications across multiple environments.",
    },
    {
      icon: "fas fa-bolt",
      name: "Azure Functions",
      desc: "Serverless backend logic: event-driven APIs, webhook handlers, and scheduled jobs - zero infrastructure management.",
    },
    {
      icon: "fas fa-globe",
      name: "Azure Static Web Apps",
      desc: "Global CDN deployment for React/Next.js apps with built-in authentication, preview environments, and automatic SSL.",
    },
    {
      icon: "fas fa-brain",
      name: "Azure AI Services",
      desc: "Cognitive Services suite: Language Understanding, Form Recognizer, Translator, and Custom Vision APIs integrated into apps.",
    },
    {
      icon: "fas fa-chart-line",
      name: "Application Insights",
      desc: "Full observability: performance monitoring, error tracking, user behavior analytics, and custom telemetry dashboards.",
    },
  ],
  philisophy: [
    {
      num: "01",
      title: "Performance is a Feature",
      body: "Every millisecond matters. I obsess over Core Web Vitals, bundle sizes, and render performance - because fast apps convert and retain users.",
    },
    {
      num: "02",
      title: "Design Thinking First",
      body: "Code is the medium, not the goal. I start from user needs and design intent, then write the minimum code needed to bring that experience to life.",
    },
    {
      num: "03",
      title: "Scalable by Default",
      body: "Whether it's a design system or a data-fetching layer, I build for the next engineer - clean abstractions, clear contracts, zero magic.",
    },
    {
      num: "04",
      title: "AI-Augmented Development",
      body: "I don't wait for AI to replace my job - I use it to amplify it. Copilot, GPT-4, and intelligent tooling are part of my daily workflow.",
    },
  ],
  journey: [
    {
      year: "2013",
      title: "Started the Journey",
      org: "B.Tech Computer Science",
      type: "Education",
    },
    {
      year: "2018",
      title: "First React App",
      org: "Freelance Projects",
      type: "Milestone",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      org: "Tech mahindra, Noida",
      type: "Work",
    },
    {
      year: "2021",
      title: "React & TypeScript Deep Dive",
      org: "EvalueServe",
      type: "Work",
    },
    {
      year: "2022",
      title: "Senior Frontend Developer - Design System",
      org: "Optum",
      type: "Work",
    },
    {
      year: "2024",
      title: "AI Integration Explorer",
      org: "Publicis Sapient",
      type: "Milestone",
    },
    {
      year: "2026",
      title: "Lead Engineer",
      org: "Publicis Sapient",
      type: "Work",
      current: true,
    },
  ],
  expertise: [
    {
      class: "fas fa-terminal",
      title: "Frontend Architect",
      detail:
        "I don't just write React components - I architect component libraries, define design token systems, and enforce code contracts that scale teams from 2 to 20 engineers without chaos.",
    },

    {
      class: "fas fa-layer-group",
      title: "Full-Stack Fluency",
      detail:
        "While UI is my home, I'm equally comfortable in Node.js APIs, MongoDB schemas, GraphQL resolvers, and serverless Azure Functions - bridging frontend and backend seamlessly.",
    },

    {
      class: "fas fa-gauge",
      title: "Performance Obsessed",
      detail:
        "Code splitting, lazy loading, virtualized lists, memoization - I treat every Lighthouse report as a personal challenge. Sub-2s LCP is the standard, not the goal.",
    },
  ],

  bullets: [
    "Azure Certified",
    "AWA Certified",
    "Anthropic Certified",
    "CI/CD Expert",
    "Serverless",
    "Cloud-Native",
  ],
};

// ---------- Testimony Page Data ----------
export const testimonyPageData = {
  hero: {
    title1: "Built on",
    title2: "Trust.",
    desc: "Eight years of shipping with teams that trust each other. These are the words of colleagues, managers, and partners who've seen the work up close.",
    details: [
      { value: `${appStats.collabs}+`, label: "Collaborators" },
      { value: `${appStats.years}+`, label: "Years" },
      { value: `${appStats.rating}+`, label: "Avg Rating" },
      { value: `${appStats.projects}+`, label: "Projects" },
    ],
    color: "",
  },

  catColors: {
    Leadership: "#5b8dee",
    Technical: "#7c6ff7",
    Product: "#5bdc8e",
    Design: "#f0a04b",
  },

  testimony: [
    {
      id: 1,
      name: "Varun Chawla",
      role: "Assistant Manager",
      company: "Fidelity International",
      category: "Leadership",
      initials: "VC",
      avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz  is one of the most passionate person for his work I have ever seen. His attitude towards work is always positive and tries to come up with unique ideas in his work. Sound knowledge of backend technologies and HTML. Always had a pleasure working with him. Hope to partner again in near future !!",
    },
    {
      id: 2,
      name: "Aishvarya Joshi",
      role: "Senior Data Analyst",
      company: "Evalueserve",
      category: "Product",
      initials: "AJ",
      avatarGrad: "linear-gradient(135deg, #c471ed 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz is a developer in the truest sense. He completes every task that comes his way with utmost dedication. Having worked with him in the past, I can say that Riyaz has developed his skills constantly even while working on an active project. He has guided me in many areas and as an added benefit, he is very fluent with his words and hence people working with him enjoy the poems he comes up with at the spur-of-moment!",
    },
    {
      id: 3,
      name: "Varun Chawla",
      role: "Assistant Manager",
      company: "Fidelity International",
      category: "Leadership",
      initials: "VC",
      avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz  is one of the most passionate person for his work I have ever seen. His attitude towards work is always positive and tries to come up with unique ideas in his work. Sound knowledge of backend technologies and HTML. Always had a pleasure working with him. Hope to partner again in near future !!",
    },
    {
      id: 4,
      name: "Aishvarya Joshi",
      role: "Senior Data Analyst",
      company: "Evalueserve",
      category: "Product",
      initials: "AJ",
      avatarGrad: "linear-gradient(135deg, #c471ed 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz is a developer in the truest sense. He completes every task that comes his way with utmost dedication. Having worked with him in the past, I can say that Riyaz has developed his skills constantly even while working on an active project. He has guided me in many areas and as an added benefit, he is very fluent with his words and hence people working with him enjoy the poems he comes up with at the spur-of-moment!",
    },
    {
      id: 5,
      name: "Varun Chawla",
      role: "Assistant Manager",
      company: "Fidelity International",
      category: "Leadership",
      initials: "VC",
      avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz  is one of the most passionate person for his work I have ever seen. His attitude towards work is always positive and tries to come up with unique ideas in his work. Sound knowledge of backend technologies and HTML. Always had a pleasure working with him. Hope to partner again in near future !!",
    },
    {
      id: 6,
      name: "Aishvarya Joshi",
      role: "Senior Data Analyst",
      company: "Evalueserve",
      category: "Product",
      initials: "AJ",
      avatarGrad: "linear-gradient(135deg, #c471ed 0%, #7c6ff7 100%)",
      rating: 5,
      quote:
        "Riyaz is a developer in the truest sense. He completes every task that comes his way with utmost dedication. Having worked with him in the past, I can say that Riyaz has developed his skills constantly even while working on an active project. He has guided me in many areas and as an added benefit, he is very fluent with his words and hence people working with him enjoy the poems he comes up with at the spur-of-moment!",
    },
  ],

  companies: [
    { name: "Publicis Sapient" },
    { name: "Optum (UHG)" },
    { name: "EvalueServe" },
    { name: "Wells Fargo" },
    { name: "IBM" },
    { name: "Code Craft Crew" },
    { name: "British Telecom" },
    { name: "Tech Mahindra" },
    { name: "Amazon" },
  ],
};
