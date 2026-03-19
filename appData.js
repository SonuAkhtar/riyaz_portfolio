export const siteStats = {
  yearsExp: 8,
  projectsShipped: 22,
  companies: 5,
  techDomains: 8,
  certifications: 12,
};

export const TECHS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind",
  "Redux",
  "MongoDB",
  "GraphQL",
  "AWS",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind",
  "Redux",
  "MongoDB",
  "GraphQL",
  "AWS",
];

/* ----- Social links ----- */
export const socialIconsData = [
  { id: 0, class: "fab fa-github", href: "https://github.com/SonuAkhtar" },
  {
    id: 1,
    class: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/riyaz-akhtar-03bb59129",
  },
  { id: 2, class: "fab fa-twitter", href: "https://twitter.com/SonuA007" },
];

/* ----- Navigation ----- */
export const navLinks = [
  { id: 0, label: "Home", href: "/", icon: "fas fa-home" },
  { id: 1, label: "Skills", href: "/skills", icon: "fas fa-code" },
  { id: 2, label: "Work", href: "/work", icon: "fas fa-briefcase" },
  { id: 3, label: "Projects", href: "/projects", icon: "fas fa-rocket" },
  { id: 4, label: "About", href: "/about-me", icon: "fas fa-user" },
  { id: 5, label: "Testimony", href: "/testimony", icon: "fas fa-quote-right" },
];

export const menuDeskData = [
  { id: 0, class: "one", number: "01", name: "About", href: "/#about" },
  { id: 1, class: "two", number: "02", name: "Skills", href: "/skills" },
  { id: 2, class: "three", number: "03", name: "Work", href: "/work" },
  { id: 3, class: "four", number: "04", name: "Projects", href: "/projects" },
  { id: 4, class: "five", number: "05", name: "Hobbies", href: "/#hobbies" },
  { id: 5, class: "six", number: "06", name: "Contact", href: "/#contact" },
];

export const menuMobileData = [
  { id: 0, class: "one", icon: "fas fa-home", name: "Home", href: "/" },
  { id: 1, class: "two", icon: "fas fa-user", name: "About", href: "/#about" },
  {
    id: 2,
    class: "three",
    icon: "fas fa-code",
    name: "Skills",
    href: "/skills",
  },
  {
    id: 3,
    class: "four",
    icon: "fas fa-briefcase",
    name: "Work",
    href: "/work",
  },
  {
    id: 4,
    class: "five",
    icon: "fas fa-rocket",
    name: "Projects",
    href: "/projects",
  },
  {
    id: 5,
    class: "six",
    icon: "fas fa-camera",
    name: "Hobbies",
    href: "/#hobbies",
  },
  {
    id: 6,
    class: "seven",
    icon: "fas fa-envelope",
    name: "Contact",
    href: "/#contact",
  },
];

/* ----- Certifications ----- */
export const certificationsData = [
  {
    id: 0,
    icon: "fab fa-microsoft",
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    badge: "AZ-204",
    year: "2023",
    color: "#0078d4",
    verified: true,
    desc: "Building and deploying cloud-native solutions on Microsoft Azure.",
  },
  {
    id: 1,
    icon: "fas fa-brain",
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    badge: "AI-102",
    year: "2023",
    color: "#0078d4",
    verified: true,
    desc: "Designing and implementing AI solutions using Azure Cognitive Services.",
  },
  {
    id: 2,
    icon: "fab fa-microsoft",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    badge: "AZ-900",
    year: "2022",
    color: "#0078d4",
    verified: true,
    desc: "Core Azure concepts, services, security, and pricing.",
  },
  {
    id: 3,
    icon: "fas fa-robot",
    name: "Claude AI Professional",
    issuer: "Anthropic",
    badge: "Claude",
    year: "2024",
    color: "#e65f35",
    verified: true,
    desc: "Building production applications with Claude models and the Anthropic API.",
  },
  {
    id: 4,
    icon: "fas fa-network-wired",
    name: "AI Agents Development",
    issuer: "DeepLearning.AI",
    badge: "Agents",
    year: "2024",
    color: "#7c6ff7",
    verified: true,
    desc: "Designing multi-agent systems, tool use, and autonomous AI workflows.",
  },
];

/* ----- Skills ----- */
export const skillsData = [
  {
    id: 0,
    icon: "fab fa-react",
    title: "Frontend",
    subtitle: "8+ years",
    data: [
      { id: 0, icon: "fab fa-react", name: "React.js", number: "92" },
      { id: 1, icon: "fab fa-react", name: "Next.js", number: "85" },
      { id: 2, icon: "fab fa-js", name: "TypeScript", number: "90" },
      { id: 3, icon: "fab fa-html5", name: "HTML5", number: "95" },
      { id: 4, icon: "fab fa-css3-alt", name: "CSS3", number: "92" },
      { id: 5, icon: "fab fa-react", name: "Redux", number: "82" },
      { id: 6, icon: "fas fa-wind", name: "Tailwind", number: "88" },
      { id: 7, icon: "fas fa-code", name: "GraphQL", number: "72" },
    ],
  },
  {
    id: 1,
    icon: "fab fa-node-js",
    title: "Backend",
    subtitle: "4+ years",
    data: [
      { id: 0, icon: "fab fa-node-js", name: "Node.js", number: "78" },
      { id: 1, icon: "fas fa-server", name: "Express.js", number: "75" },
      { id: 2, icon: "fas fa-database", name: "MongoDB", number: "74" },
      { id: 3, icon: "fas fa-database", name: "PostgreSQL", number: "68" },
      { id: 4, icon: "fas fa-code", name: "REST APIs", number: "88" },
      { id: 5, icon: "fab fa-python", name: "Python", number: "62" },
    ],
  },
  {
    id: 2,
    icon: "fas fa-robot",
    title: "AI / Cloud",
    subtitle: "2+ years",
    data: [
      { id: 0, icon: "fas fa-robot", name: "OpenAI API", number: "82" },
      { id: 1, icon: "fas fa-comments", name: "Prompt Eng.", number: "88" },
      { id: 2, icon: "fas fa-link", name: "LangChain", number: "72" },
      { id: 3, icon: "fab fa-microsoft", name: "Azure DevOps", number: "82" },
      { id: 4, icon: "fas fa-bolt", name: "Azure Fncts.", number: "78" },
      { id: 5, icon: "fas fa-brain", name: "Azure AI Svcs", number: "76" },
    ],
  },
  {
    id: 3,
    icon: "fab fa-figma",
    title: "UI / UX",
    subtitle: "4+ years",
    data: [
      { id: 0, icon: "fab fa-figma", name: "Figma", number: "82" },
      { id: 1, icon: "fas fa-paint-brush", name: "Adobe XD", number: "70" },
      {
        id: 2,
        icon: "fas fa-layer-group",
        name: "Design Systems",
        number: "85",
      },
      { id: 3, icon: "fas fa-universal-access", name: "A11y", number: "80" },
      { id: 4, icon: "fas fa-film", name: "Motion Design", number: "75" },
    ],
  },
];

/* ----- Works ----- */
export const worksData = [
  {
    id: 0,
    icon: "fab fa-react",
    name: "Frontend Engineering",
    features: [
      "Pixel-perfect React & Next.js applications",
      "Design system architecture & component libraries",
      "Performance optimization — Core Web Vitals",
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
];

export const worksPageData = [
  ...worksData,
  {
    id: 4,
    icon: "fas fa-paint-brush",
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
];

/* ----- Work process ----- */
export const workProcessData = [
  {
    num: "01",
    icon: "fas fa-search",
    title: "Discovery",
    desc: "Deep-dive into your goals, users, and constraints. Define success metrics before writing a single line.",
  },
  {
    num: "02",
    icon: "fas fa-sitemap",
    title: "Architecture",
    desc: "Design system data flows, component trees, API contracts, and cloud infrastructure before building.",
  },
  {
    num: "03",
    icon: "fas fa-code",
    title: "Build",
    desc: "Clean, tested, production-ready code. CI/CD pipelines live on day one. No technical debt trade-offs.",
  },
  {
    num: "04",
    icon: "fas fa-chart-line",
    title: "Deliver",
    desc: "Azure-deployed, monitored with Application Insights, and iterated based on real user data.",
  },
];

/* ----- Projects ----- */
export const projectsData = [
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
];

/* ----- Projects page filter categories ----- */
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
];

/* ----- Hobbies ----- */
export const hobbiesData = [
  {
    id: 0,
    image: "/assets/hobbies/image_1.jpg",
    title: "Humayun's Tomb",
    desc: "Mughal-era architecture through a contemporary lens — Delhi's most serene monument at golden hour.",
  },
  {
    id: 1,
    image: "/assets/hobbies/image_2.jpg",
    title: "Palm Tree",
    desc: "Finding geometry in nature — the perfect symmetry of a lone palm against a clear sky.",
  },
  {
    id: 2,
    image: "/assets/hobbies/image_3.jpg",
    title: "Flying Birds",
    desc: "Capturing motion in stillness — the split-second a murmuration shifts direction.",
  },
  {
    id: 3,
    image: "/assets/hobbies/image_4.jpg",
    title: "Safdarjung's Tomb",
    desc: "History carved in sandstone — the intricate craftsmanship of a 270-year-old monument.",
  },
  {
    id: 4,
    image: "/assets/hobbies/image_5.jpg",
    title: "Eyes on the Book",
    desc: "Quiet moments make the best frames — concentration and light in perfect harmony.",
  },
  {
    id: 5,
    image: "/assets/hobbies/image_7.jpg",
    title: "Flower in the Woods",
    desc: "Solitude and beauty coexist — a single bloom standing calm amid the undergrowth.",
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

export const AboutStats = [
  { to: 8, suffix: "+", label: "Years of Experience" },
  { to: 22, suffix: "+", label: "Projects Delivered" },
  { to: 5, suffix: "", label: "Companies Worked" },
];

export const AboutTraits = [
  { icon: "fas fa-bolt", label: "Performance First" },
  { icon: "fas fa-layer-group", label: "Design Systems" },
  { icon: "fas fa-code-branch", label: "Clean Architecture" },
  { icon: "fas fa-users", label: "Team Leadership" },
];

export const educationData = [
  {
    id: 0,
    title: "Bechelors of Technology",
    org: "Lovely Professional University",
    year: "2013 – 2017",
    field: "Computer Science & Engineering",
  },
  {
    id: 1,
    title: "Senior Secondary (XII)",
    org: "Sai Dass Senior Secondary",
    year: "2012 – 2013",
    field: "Science",
  },
  {
    id: 2,
    title: "Higher Secondary (X)",
    org: "Bhartiya Bal Vidhya Mandir",
    year: "2010 – 2011",
    field: "General",
  },
];

export const homeWorkData = [
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
    title: "Software Engineer — Frontend",
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
];

export const heroQual = [
  { num: "8+", label: "Years in Tech" },
  { num: homeWorkData.length, label: "Companies" },
  { num: educationData.length, label: "Qualifications" },
];

export const homeWorkTags = [
  ["React", "Next.js", "TypeScript", "Tailwind"],
  ["Node.js", "REST APIs", "MongoDB", "PostgreSQL"],
  ["Figma", "Adobe XD", "Prototyping", "A11y"],
  ["Illustrator", "Branding", "SVG", "Motion"],
];

export const homeContactIcons = {
  call: { icon: "fas fa-phone", color: "cc_green" },
  email: { icon: "fas fa-envelope", color: "cc_blue" },
  location: { icon: "fas fa-map-marker-alt", color: "cc_purple" },
};

export const homeSocialIcons = {
  "fab fa-github": { label: "GitHub", short: "SonuAkhtar" },
  "fab fa-linkedin-in": { label: "LinkedIn", short: "riyaz-akhtar" },
  "fab fa-twitter": { label: "Twitter", short: "@SonuA007" },
};

export const skillsLevelColors = {
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
};

export const skillsCatColors = ["#5b8dee", "#10b981", "#a855f7", "#f59e0b"];

export const skillsStats = [
  { cls: "expert", label: "Expert ≥ 80%" },
  { cls: "proficient", label: "Proficient ≥ 65%" },
  { cls: "familiar", label: "Familiar ≥ 45%" },
  { cls: "learning", label: "Learning" },
];

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

export const skillsPageCerts = [
  {
    id: 1,
    name: "Azure Developer Associate",
    code: "AZ-204",
    issuer: "Microsoft",
    icon: "fab fa-microsoft",
    color: "azure",
    year: "2024",
  },
  {
    id: 2,
    name: "Azure AI Engineer Associate",
    code: "AI-102",
    issuer: "Microsoft",
    icon: "fas fa-brain",
    color: "azure",
    year: "2024",
  },
  {
    id: 3,
    name: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: "fab fa-microsoft",
    color: "azure",
    year: "2023",
  },
  {
    id: 4,
    name: "Claude AI Professional",
    code: "Anthropic",
    issuer: "Anthropic",
    icon: "fas fa-robot",
    color: "claude",
    year: "2024",
  },
  {
    id: 5,
    name: "AI Agents Development",
    code: "Agents",
    issuer: "Certification Body",
    icon: "fas fa-network-wired",
    color: "ai",
    year: "2024",
  },
];

export const skillsPagePhilisophy = [
  {
    icon: "fas fa-layer-group",
    title: "Build Once, Scale Forever",
    body: "Every component, API, and design token is built as if it will be shared across 10 teams. Composable, documented, and version-controlled from day one.",
    accent: "#5b8dee",
  },
  {
    icon: "fas fa-brain",
    title: "AI-First Mindset",
    body: "LLMs aren't a bolt-on feature — they're architectural decisions. I plan AI integration at the system level: embeddings, context windows, and inference latency.",
    accent: "#7c6ff7",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud by Default",
    body: "Every application I ship is cloud-native on Azure: CI/CD pipelines, containerized deployments, serverless functions, and Application Insights observability.",
    accent: "#0078d4",
  },
];

export const worksPageData2 = [
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
      "Embedding intelligence into products — from GPT-4 chat interfaces to RAG pipelines, LangChain agents, and Azure AI Services.",
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
      "Cloud-native architectures on Azure — CI/CD pipelines, serverless Functions, Static Web Apps, and Application Insights monitoring.",
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
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    number: "05",
    summary:
      "Figma-first design thinking — from wireframes to polished prototypes. Accessibility, motion design, and handoff-ready specs.",
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
      "End-to-end delivery: React frontend + Node.js backend + Azure deployment + AI integration — shipped as a single coherent product.",
    features: [
      "Full-stack React + Node.js",
      "Azure Cloud Deployment",
      "AI-Powered Features",
    ],
    tags: ["React", "Node.js", "Azure", "AI"],
    accent: "#5b8dee",
  },
];

export const worksPageProcess = [
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
];

export const projectsPageProjects = [
  {
    id: 1,
    title: "AI-Powered Chat Interface",
    description:
      "A full-stack chat application with GPT-4 integration, streaming responses, conversation history, and context-aware RAG search over documents.",
    image: null,
    category: "AI/ML",
    tags: ["React", "GPT-4", "LangChain", "Node.js", "Azure"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Enterprise Design System",
    description:
      "A comprehensive React component library with 60+ components, Storybook docs, accessibility compliance, and automated visual regression testing.",
    image: null,
    category: "Frontend",
    tags: ["React", "TypeScript", "Storybook", "CSS Modules"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Azure-Deployed Microservices",
    description:
      "A Node.js microservices architecture deployed on Azure Container Apps with service mesh, distributed tracing, and Application Insights telemetry.",
    image: null,
    category: "Full-Stack",
    tags: ["Node.js", "Azure", "Docker", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "RAG Document Search",
    description:
      "An AI-powered document intelligence system using Retrieval-Augmented Generation — upload PDFs, ask questions, get cited answers in seconds.",
    image: null,
    category: "AI/ML",
    tags: ["Python", "LangChain", "Pinecone", "Next.js", "OpenAI"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Next.js SaaS Dashboard",
    description:
      "A feature-rich SaaS analytics dashboard with real-time data, role-based access, Dark/Light theme, and an integrated notification system.",
    image: null,
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Health Tech Platform",
    description:
      "A HIPAA-compliant healthcare portal — member dashboards, claim tracking, and AI-assisted search across benefits data at enterprise scale.",
    image: null,
    category: "Full-Stack",
    tags: ["React", "TypeScript", "Azure", "REST APIs"],
    github: null,
    live: "#",
    featured: false,
  },
  {
    id: 7,
    title: "AI Agents Workflow Engine",
    description:
      "A multi-agent orchestration system where specialized AI agents collaborate to process complex tasks — built with LangChain and Azure AI.",
    image: null,
    category: "AI/ML",
    tags: ["LangChain", "OpenAI", "Azure AI", "Python", "FastAPI"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 8,
    title: "React Native Mobile App",
    description:
      "A cross-platform mobile application for event management with offline support, push notifications, and Azure Functions for serverless backend.",
    image: null,
    category: "Mobile",
    tags: ["React Native", "Expo", "Azure Functions", "TypeScript"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 9,
    title: "GraphQL API Gateway",
    description:
      "A federated GraphQL API gateway unifying multiple microservices with schema stitching, caching, rate limiting, and observability dashboards.",
    image: null,
    category: "Full-Stack",
    tags: ["Node.js", "GraphQL", "Apollo", "Redis", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export const projectsCatColors = {
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
};

export const testimonyPageCatColors = {
  Leadership: "#5b8dee",
  Technical: "#7c6ff7",
  Product: "#5bdc8e",
  Design: "#f0a04b",
};

export const testimonyPageData = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Chief Technology Officer",
    company: "TechVista Solutions",
    category: "Leadership",
    initials: "AM",
    avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #7c6ff7 100%)",
    rating: 5,
    quote:
      "Riyaz is one of the most technically sharp engineers I've had the pleasure of working with. He rebuilt our legacy monolith into a clean microservices architecture on Azure — cutting deployment time by 60% and developer onboarding from two weeks to three days. What truly sets him apart is that he communicated every architectural decision clearly to non-technical stakeholders. That's rare.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Product Manager",
    company: "Sapient Technologies",
    category: "Product",
    initials: "PS",
    avatarGrad: "linear-gradient(135deg, #c471ed 0%, #7c6ff7 100%)",
    rating: 5,
    quote:
      "Working with Riyaz transformed how our team approaches frontend development. He introduced a design system that reduced sprint delivery time by 35%. His attention to UX detail is exceptional and he bridges the gap between design and engineering better than anyone I've worked with.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "DataFlow Inc",
    category: "Technical",
    initials: "MC",
    avatarGrad: "linear-gradient(135deg, #5bdc8e 0%, #5b8dee 100%)",
    rating: 5,
    quote:
      "The AI integration Riyaz built for our document processing pipeline was genuinely impressive. GPT-4 with RAG, custom chunking logic, and vector database search — shipped on time and scaling to 10,000 documents a day without a single production incident. This is senior engineering at its best.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Tech Lead",
    company: "Infosys Digital",
    category: "Technical",
    initials: "NK",
    avatarGrad: "linear-gradient(135deg, #f0a04b 0%, #fc5c7d 100%)",
    rating: 5,
    quote:
      "Riyaz's code quality sets the bar for the entire team. His PRs are thorough, his documentation is always current, and his mentorship of junior developers is genuinely patient and effective. He made our engineering culture measurably better during his tenure.",
  },
  {
    id: 5,
    name: "Liam O'Brien",
    role: "Engineering Manager",
    company: "Accenture Technology",
    category: "Leadership",
    initials: "LO",
    avatarGrad: "linear-gradient(135deg, #0078d4 0%, #5b8dee 100%)",
    rating: 5,
    quote:
      "Delivered a complex Azure-based reporting dashboard three weeks ahead of schedule. When post-UAT bugs surfaced, he owned them completely and had fixes deployed within hours — no blame, no excuses. Exactly the kind of senior engineer every delivery team needs.",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    role: "Principal Designer",
    company: "Publicis Sapient",
    category: "Design",
    initials: "AI",
    avatarGrad: "linear-gradient(135deg, #fd1d1d 0%, #fcb045 100%)",
    rating: 5,
    quote:
      "Riyaz is the rare engineer who genuinely understands design. He pushes back constructively when something isn't feasible, proposes smart alternatives, and implements Framer Motion animations that match the Figma prototype exactly. An absolute dream collaboration partner.",
  },
  {
    id: 7,
    name: "Rahul Gupta",
    role: "Director of Technology",
    company: "WNS Global Services",
    category: "Leadership",
    initials: "RG",
    avatarGrad: "linear-gradient(135deg, #7c6ff7 0%, #5bdc8e 100%)",
    rating: 5,
    quote:
      "We brought Riyaz in for a 3-month contract and extended him twice. His ability to context-switch between React, Node.js, and Azure infrastructure — while maintaining code quality across all three — is remarkable. He's full-stack in the truest, most rigorous sense.",
  },
  {
    id: 8,
    name: "Sophie Williams",
    role: "Product Owner",
    company: "Capgemini Engineering",
    category: "Product",
    initials: "SW",
    avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #5bdc8e 100%)",
    rating: 5,
    quote:
      "Riyaz's estimation accuracy is exceptional — a genuine rarity in software delivery. He hit every milestone and proactively flagged scope changes the moment they emerged. That kind of transparency and accountability saved our project from going sideways twice.",
  },
];

export const testimonyPageCompanies = [
  { name: "Publicis Sapient" },
  { name: "Infosys Digital" },
  { name: "Accenture Technology" },
  { name: "Capgemini Engineering" },
  { name: "WNS Global Services" },
  { name: "TechVista Solutions" },
  { name: "DataFlow Inc" },
  { name: "Sapient Technologies" },
];
