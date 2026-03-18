/* ═══════════════════════════════════════════════════════
   APP DATA  —  Single source of truth for all content
   Riyaz Akhtar · Lead Engineer @ Publicis Sapient
═══════════════════════════════════════════════════════ */

/* ─── Site-wide stats ─────────────────────────────── */
export const siteStats = {
  yearsExp:          8,
  projectsShipped:  60,
  companies:         5,
  techDomains:      15,
  certifications:    5,
};

/* ─── Social links ────────────────────────────────── */
export const socialIconsData = [
  { id: 0, class: "fab fa-github",      href: "https://github.com/SonuAkhtar" },
  { id: 1, class: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/riyaz-akhtar-03bb59129" },
  { id: 2, class: "fab fa-twitter",     href: "https://twitter.com/SonuA007" },
];

/* ─── Navigation ──────────────────────────────────── */
export const navLinks = [
  { id: 0, label: "Home",     href: "/",         icon: "fas fa-home" },
  { id: 1, label: "Skills",   href: "/skills",   icon: "fas fa-code" },
  { id: 2, label: "Work",     href: "/work",     icon: "fas fa-briefcase" },
  { id: 3, label: "Projects", href: "/projects", icon: "fas fa-rocket" },
  { id: 4, label: "About",      href: "/about-me",  icon: "fas fa-user"        },
  { id: 5, label: "Testimony",  href: "/testimony", icon: "fas fa-quote-right" },
];

/* Legacy — used by old MenuDesk / MenuMobile (kept for compatibility) */
export const menuDeskData = [
  { id: 0, class: "one",   number: "01", name: "About",    href: "/#about"    },
  { id: 1, class: "two",   number: "02", name: "Skills",   href: "/skills"    },
  { id: 2, class: "three", number: "03", name: "Work",     href: "/work"      },
  { id: 3, class: "four",  number: "04", name: "Projects", href: "/projects"  },
  { id: 4, class: "five",  number: "05", name: "Hobbies",  href: "/#hobbies"  },
  { id: 5, class: "six",   number: "06", name: "Contact",  href: "/#contact"  },
];

export const menuMobileData = [
  { id: 0, class: "one",   icon: "fas fa-home",          name: "Home",     href: "/"          },
  { id: 1, class: "two",   icon: "fas fa-user",          name: "About",    href: "/#about"    },
  { id: 2, class: "three", icon: "fas fa-code",          name: "Skills",   href: "/skills"    },
  { id: 3, class: "four",  icon: "fas fa-briefcase",     name: "Work",     href: "/work"      },
  { id: 4, class: "five",  icon: "fas fa-rocket",        name: "Projects", href: "/projects"  },
  { id: 5, class: "six",   icon: "fas fa-camera",        name: "Hobbies",  href: "/#hobbies"  },
  { id: 6, class: "seven", icon: "fas fa-envelope",      name: "Contact",  href: "/#contact"  },
];

/* ─── Certifications ──────────────────────────────── */
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

/* ─── Skills ──────────────────────────────────────── */
export const skillsData = [
  {
    id: 0,
    icon: "fab fa-react",
    title: "Frontend",
    subtitle: "8+ years",
    data: [
      { id: 0, icon: "fab fa-react",    name: "React.js",   number: "92" },
      { id: 1, icon: "fab fa-react",    name: "Next.js",    number: "85" },
      { id: 2, icon: "fab fa-js",       name: "TypeScript", number: "90" },
      { id: 3, icon: "fab fa-html5",    name: "HTML5",      number: "95" },
      { id: 4, icon: "fab fa-css3-alt", name: "CSS3",       number: "92" },
      { id: 5, icon: "fab fa-react",    name: "Redux",      number: "82" },
      { id: 6, icon: "fas fa-wind",     name: "Tailwind",   number: "88" },
      { id: 7, icon: "fas fa-code",     name: "GraphQL",    number: "72" },
    ],
  },
  {
    id: 1,
    icon: "fab fa-node-js",
    title: "Backend",
    subtitle: "4+ years",
    data: [
      { id: 0, icon: "fab fa-node-js",    name: "Node.js",   number: "78" },
      { id: 1, icon: "fas fa-server",     name: "Express.js",number: "75" },
      { id: 2, icon: "fas fa-database",   name: "MongoDB",   number: "74" },
      { id: 3, icon: "fas fa-database",   name: "PostgreSQL",number: "68" },
      { id: 4, icon: "fas fa-code",       name: "REST APIs", number: "88" },
      { id: 5, icon: "fab fa-python",     name: "Python",    number: "62" },
    ],
  },
  {
    id: 2,
    icon: "fas fa-robot",
    title: "AI / Cloud",
    subtitle: "2+ years",
    data: [
      { id: 0, icon: "fas fa-robot",       name: "OpenAI API",    number: "82" },
      { id: 1, icon: "fas fa-comments",    name: "Prompt Eng.",   number: "88" },
      { id: 2, icon: "fas fa-link",        name: "LangChain",     number: "72" },
      { id: 3, icon: "fab fa-microsoft",   name: "Azure DevOps",  number: "82" },
      { id: 4, icon: "fas fa-bolt",        name: "Azure Fncts.",  number: "78" },
      { id: 5, icon: "fas fa-brain",       name: "Azure AI Svcs", number: "76" },
    ],
  },
  {
    id: 3,
    icon: "fab fa-figma",
    title: "UI / UX",
    subtitle: "4+ years",
    data: [
      { id: 0, icon: "fab fa-figma",         name: "Figma",         number: "82" },
      { id: 1, icon: "fas fa-paint-brush",   name: "Adobe XD",      number: "70" },
      { id: 2, icon: "fas fa-layer-group",   name: "Design Systems",number: "85" },
      { id: 3, icon: "fas fa-universal-access", name: "A11y",       number: "80" },
      { id: 4, icon: "fas fa-film",          name: "Motion Design", number: "75" },
    ],
  },
];

/* ─── Works / Services ────────────────────────────── */
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

/* ─── Works page data (extra services for /work page) ─ */
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

/* ─── Work process ────────────────────────────────── */
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

/* ─── Projects ────────────────────────────────────── */
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

/* ─── Projects page filter categories ─────────────── */
export const projectCategories = [
  { id: "all",      label: "All Projects" },
  { id: "ai",       label: "AI / ML"      },
  { id: "fullstack",label: "Full-Stack"   },
  { id: "frontend", label: "Frontend"     },
];

/* ─── Hobbies ──────────────────────────────────────── */
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

/* ─── Contact ──────────────────────────────────────── */
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
