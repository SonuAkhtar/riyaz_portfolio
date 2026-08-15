export const profile = {
  name: "Riyaz Akhtar",
  initials: "RA",
  role: "Lead Experience Engineer",
  currentCompany: "Publicis Sapient",
  location: "Gurgaon, India",
  practicingSince: 2017,
  availability: "Open for Q3 2026",
  availabilityShort: "Q3 2026",
  email: "riyaz.sa03@gmail.com",
  phone: "+91-7009003062",
  phoneDisplay: "+91 7009 003 062",
  hours: "Mon to Fri, 09:00 to 19:00 IST",
};

export const siteStats = {
  corporate: { years: "9+", companies: 5, clients: 9 },
  freelance: { years: "7+", clients: "12+", projects: "20+" },
  certifications: 3,
  yearsExp: 9,
  projectsShipped: 20,
  companies: 5,
  techDomains: 3,
};

export const navLinks = [
  { id: 0, label: "Home",     href: "/",         icon: "fas fa-home" },
  { id: 1, label: "About",    href: "/about",    icon: "fas fa-user" },
  { id: 2, label: "Services", href: "/services", icon: "fas fa-briefcase" },
  { id: 3, label: "Projects", href: "/projects", icon: "fas fa-rocket" },
  { id: 4, label: "Skills",   href: "/skills",   icon: "fas fa-code" },
  { id: 5, label: "Contact",  href: "/contact",  icon: "fas fa-envelope" },
];

export const socialIconsData = [
  { id: 0, label: "GitHub",   class: "fab fa-github",      href: "https://github.com/SonuAkhtar" },
  { id: 1, label: "LinkedIn", class: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/riyaz-akhtar-03bb59129" },
  { id: 2, label: "Twitter",  class: "fab fa-twitter",     href: "https://twitter.com/SonuA007" },
];

export const contactData = [
  { id: 0, icon: "/assets/contact/call.gif",     name: "Call",     info: profile.phoneDisplay, href: `tel:${profile.phone}`,     alt: "call" },
  { id: 1, icon: "/assets/contact/email.gif",    name: "Email",    info: profile.email,        href: `mailto:${profile.email}`, alt: "email" },
  { id: 2, icon: "/assets/contact/location.gif", name: "Location", info: profile.location,                                       alt: "location" },
];

export const heroStats = [
  { value: siteStats.corporate.years,             label: "Years engineering" },
  { value: String(siteStats.corporate.companies), label: "Companies worked with" },
  { value: siteStats.freelance.projects,          label: "Projects shipped" },
];

export const marqueeTech = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Tailwind",
  "Redux",
  "Zustand",
  "Micro-Frontend",
  "Framer Motion",
];

export const heroLede =
  "Nine years building React frontends, micro-frontend architectures, and performance-tuned products for teams that want a partner, not a contractor.";

export const portraitTag = "Lead Engineer, React, Next.js, TypeScript";

export const workedWith = [
  { id: 0, name: "Publicis Sapient",           role: "Lead Experience Engineer", period: "2024-Present", initials: "PS", color: "#e6007e", domain: "publicissapient.com" },
  { id: 1, name: "Optum (UnitedHealth Group)", role: "Senior Software Developer", period: "2021-2024",   initials: "O",  color: "#f47920", domain: "optum.com" },
  { id: 2, name: "Evalueserve",                role: "Senior Frontend Engineer",  period: "2020-2021",   initials: "E",  color: "#0066b3", domain: "evalueserve.com" },
  { id: 3, name: "Tech Mahindra",              role: "Software Engineer",         period: "2018-2020",   initials: "TM", color: "#e31837", domain: "techmahindra.com" },
  { id: 4, name: "Amazon",                     role: "Software Engineer",         period: "2017-2018",   initials: "A",  color: "#ff9900", domain: "amazon.com" },
];

export const experienceData = [
  {
    id: 0,
    title: "Lead Experience Engineer",
    company: "Publicis Sapient",
    location: "Gurgaon",
    period: "Jun 2024 to Present",
    current: true,
    tag: "Leadership",
  },
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Optum (UnitedHealth Group)",
    location: "Gurgaon",
    period: "Dec 2021 to Jun 2024",
    tag: "Full-Stack",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer",
    company: "Evalueserve",
    location: "Gurgaon",
    period: "Nov 2020 to Dec 2021",
    tag: "Frontend",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tech Mahindra",
    location: "Noida",
    period: "Aug 2018 to Nov 2020",
    tag: "Frontend",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Amazon",
    location: "Hyderabad",
    period: "Aug 2017 to Aug 2018",
    tag: "Frontend",
  },
];

export const educationData = [
  {
    id: 0,
    title: "B.Tech. in Computer Science",
    org: "Lovely Professional University",
    period: "2013 to 2017",
    field: "Computer Science & Engineering",
  },
  {
    id: 1,
    title: "Senior Secondary (XII)",
    org: "Sai Dass Senior Secondary",
    period: "2012 to 2013",
    field: "Science",
  },
  {
    id: 2,
    title: "Higher Secondary (X)",
    org: "Bhartiya Bal Vidhya Mandir",
    period: "2010 to 2011",
    field: "General",
  },
];

export const servicesData = [
  {
    number: "01",
    icon: "fas fa-cube",
    title: "Product Engineering",
    eyebrow: "End to end build",
    summary:
      "From a Figma file to a shipped product. React, Next.js, and TypeScript front-ends with telemetry, tests, and CI from commit one.",
    features: [
      "React, Next.js, TypeScript",
      "Design systems & accessibility",
      "Core Web Vitals, Lighthouse 95+",
      "CI/CD from day one",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    deliverables: [
      "Frontend architecture",
      "Design systems",
      "Performance & A11y",
      "CI/CD pipelines",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: "fas fa-layer-group",
    title: "Frontend Architecture",
    eyebrow: "Built to scale",
    summary:
      "Micro-frontend systems, shared design tokens, and component libraries that survive a team of 10 and a roadmap of three years.",
    features: [
      "Micro-frontend with module federation",
      "Reusable component libraries",
      "Design tokens & theming",
      "Migration from legacy stacks",
    ],
    tags: ["Micro-Frontend", "Webpack", "Design Systems", "TypeScript"],
    deliverables: [
      "Module federation setup",
      "Shared component libraries",
      "Token / theme architecture",
      "Migration playbooks",
    ],
  },
  {
    number: "03",
    icon: "fas fa-gauge-high",
    title: "Performance & Quality",
    eyebrow: "Fast where it counts",
    summary:
      "Web Vitals work, bundle audits, accessibility reviews, plus the test and security discipline that keeps production calm. Vitest, Jest, Veracode, SonarQube.",
    features: [
      "Lighthouse & Web Vitals tuning",
      "Bundle + runtime profiling",
      "Unit / integration test suites",
      "Security scans (Veracode, Sonar)",
    ],
    tags: ["Performance", "Vitest", "Jest", "SonarQube"],
    deliverables: [
      "Perf audit + fix plan",
      "Test suite buildout",
      "Security pipeline hardening",
      "WCAG 2.2 passes",
    ],
  },
];

export const principlesData = [
  {
    index: "01",
    title: "Slow craft, fast decisions",
    body: "I take time on the parts that matter (typography, motion, copy, polish) and move quickly on everything else.",
  },
  {
    index: "02",
    title: "Boring tech, ambitious work",
    body: "Proven tools in the right shape. The interesting part should be the product, not the stack.",
  },
  {
    index: "03",
    title: "Quiet, premium, precise",
    body: "I am not interested in loud. I am interested in confident. Work that looks effortless and ages well.",
  },
  {
    index: "04",
    title: "I ship what I design",
    body: "I design and build with the same hands. Hand-offs are where work loses its life, so I keep it close.",
  },
];

export const worksPrinciples = [
  { title: "Ship is the verb.",
    body: "Strategy decks are easy. Shipping a system that survives Monday morning is the real game, and that is where I live." },
  { title: "Boring tech, ambitious work.",
    body: "I pick proven tools and put them in the right shape. The interesting part should be the product, not the stack." },
  { title: "Own the outcome.",
    body: "Not the ticket, not the sprint, the outcome. I work best with teams that want a partner, not a contractor." },
];

export const processData = [
  { step: "01", title: "Frame",
    description: "Two-week sprint to map the real problem, the people in the room, and the success metric we will both judge by." },
  { step: "02", title: "Architect",
    description: "Data models, component trees, API contracts, and delivery pipelines, written down before a line of code lands." },
  { step: "03", title: "Build",
    description: "Production-grade from commit one. TypeScript, tests, code reviews, and daily deploys to a real staging environment." },
  { step: "04", title: "Ship",
    description: "Zero-downtime releases through your CI/CD of choice, monitored end-to-end, with rollback rehearsed before launch day." },
  { step: "05", title: "Sustain",
    description: "Stay on after launch to babysit telemetry, fix what real users break, and hand off the keys properly." },
];

export const faqData = [
  { q: "How do you price your work?",
    a: "I scope based on outcomes, complexity, and time. Most engagements sit between fixed-scope project work and monthly retainers, depending on the shape of the problem and the room you are walking me into." },
  { q: "What does a typical timeline look like?",
    a: "A focused product feature usually takes 6 to 10 weeks. Larger end-to-end engagements run 3 to 6 months. We always agree on the calendar and the success metric before kickoff." },
  { q: "Do you work with in-house teams?",
    a: "Always. I expect to integrate closely with your team. Engineers, product, design, and leadership. The point is to leave your team stronger than I found it, not to build alone." },
  { q: "Where are you based?",
    a: `${profile.location}. I work remotely with collaborators across IST, EU, and US-East timezones, and travel for kick-offs and key milestones when it matters.` },
  { q: "Can you handle backend and infra too?",
    a: "Yes. Node.js services and CI/CD pipelines (Azure DevOps, GitHub Actions) are part of the full delivery. I bias toward integrating with your existing infra rather than evangelising mine." },
];

export const skillsData = [
  {
    id: 0,
    icon: "fab fa-react",
    title: "Frontend",
    subtitle: "9+ years",
    data: [
      { id: 0,  icon: "fab fa-react",           name: "React.js",        number: "95" },
      { id: 1,  icon: "fab fa-react",           name: "Next.js",         number: "90" },
      { id: 2,  icon: "fab fa-js",              name: "TypeScript",      number: "92" },
      { id: 3,  icon: "fab fa-js",              name: "JavaScript",      number: "95" },
      { id: 4,  icon: "fab fa-html5",           name: "HTML5",           number: "95" },
      { id: 5,  icon: "fab fa-css3-alt",        name: "CSS3",            number: "92" },
      { id: 6,  icon: "fas fa-wind",            name: "Tailwind",        number: "88" },
      { id: 7,  icon: "fab fa-react",           name: "Redux",           number: "85" },
      { id: 8,  icon: "fab fa-react",           name: "Zustand",         number: "80" },
      { id: 9,  icon: "fas fa-cubes",           name: "Micro-Frontend",  number: "82" },
    ],
  },
  {
    id: 1,
    icon: "fab fa-node-js",
    title: "Backend",
    subtitle: "5+ years",
    data: [
      { id: 0, icon: "fab fa-node-js",         name: "Node.js",     number: "82" },
      { id: 1, icon: "fas fa-project-diagram", name: "GraphQL",     number: "80" },
      { id: 2, icon: "fas fa-server",          name: "REST APIs",   number: "88" },
      { id: 3, icon: "fas fa-database",        name: "SQL Basics",  number: "70" },
      { id: 4, icon: "fab fa-java",            name: "Java",        number: "55" },
    ],
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "DevOps & Tooling",
    subtitle: "6+ years",
    data: [
      { id: 0, icon: "fab fa-git-alt",   name: "Git",            number: "95" },
      { id: 1, icon: "fab fa-github",    name: "GitHub Actions", number: "88" },
      { id: 2, icon: "fab fa-microsoft", name: "Azure DevOps",   number: "85" },
      { id: 3, icon: "fab fa-bitbucket", name: "Bitbucket",      number: "85" },
      { id: 4, icon: "fas fa-cog",       name: "Bamboo",         number: "65" },
      { id: 5, icon: "fas fa-box",       name: "Webpack",        number: "78" },
      { id: 6, icon: "fas fa-code",      name: "Babel",          number: "72" },
      { id: 7, icon: "fab fa-aws",       name: "AWS",            number: "68" },
      { id: 8, icon: "fas fa-cogs",      name: "ServiceNow",     number: "60" },
    ],
  },
  {
    id: 3,
    icon: "fas fa-shield-halved",
    title: "Quality & Security",
    subtitle: "4+ years",
    data: [
      { id: 0, icon: "fas fa-vial",         name: "Vitest",            number: "82" },
      { id: 1, icon: "fas fa-flask",        name: "Jest",              number: "88" },
      { id: 2, icon: "fas fa-check-double", name: "React Testing Lib", number: "85" },
      { id: 3, icon: "fas fa-gauge-high",   name: "Lighthouse",        number: "88" },
      { id: 4, icon: "fab fa-chrome",       name: "Chrome DevTools",   number: "92" },
      { id: 5, icon: "fas fa-chart-line",   name: "Splunk",            number: "72" },
      { id: 6, icon: "fas fa-shield-halved",name: "Veracode",          number: "75" },
      { id: 7, icon: "fas fa-bug",          name: "Mend",              number: "70" },
      { id: 8, icon: "fas fa-circle-check", name: "SonarQube",         number: "80" },
    ],
  },
];

export const skillCategoryBlurb = [
  "The modern frontend stack. React, Next.js, TypeScript at production scale, including micro-frontend systems.",
  "Node.js services, GraphQL gateways, and REST APIs. Java touch for legacy integrations.",
  "Build pipelines, version control, and deployment tooling that ship code from commit to cloud.",
  "Testing, security scans, and performance discipline that keep production work calm.",
];

export const certificationsData = [
  {
    id: 0,
    icon: "fas fa-brain",
    name: "Generative AI with ChatGPT",
    issuer: "Udemy",
    badge: "Gen AI",
    year: "2024",
    color: "#e65f35",
    verified: true,
    desc: "Generative AI concepts, prompt design, and building intelligent applications with ChatGPT and GPT APIs.",
  },
  {
    id: 1,
    icon: "fas fa-comments",
    name: "Prompt Engineering for Developers",
    issuer: "Udemy",
    badge: "Prompt Eng.",
    year: "2024",
    color: "#7c6ff7",
    verified: true,
    desc: "Techniques for crafting precise, context-aware prompts for production LLM workflows and integrations.",
  },
  {
    id: 2,
    icon: "fas fa-robot",
    name: "Claude AI Fundamentals",
    issuer: "Udemy",
    badge: "Claude",
    year: "2024",
    color: "#5b8dee",
    verified: true,
    desc: "Building production applications with Claude models and the Anthropic API ecosystem.",
  },
];

export const projectsData = [
  {
    id: 0,
    year: "2024",
    image: "/assets/projects/project1.PNG",
    name: "TalkEasy AI",
    desc: "AI-powered conversational platform with GPT-4 integration, context memory, and real-time streaming responses.",
    impact: "Built streaming chat from scratch. Token-by-token rendering cut perceived latency by ~60% vs. full-response loading.",
    github: "https://github.com/SonuAkhtar/talkeasy",
    live: "https://talkeasy-ai.vercel.app/",
    tags: ["React", "OpenAI", "Node.js"],
    category: "ai",
    featured: true,
  },
  {
    id: 1,
    year: "2024",
    image: "/assets/projects/project2.PNG",
    name: "WorkBuddy",
    desc: "Freelancer workspace with project tracking, time logging, invoice generation, and client portal.",
    impact: "Replaced a spreadsheet workflow for a 5-person team. Invoice generation time dropped from 45 min to under 2 min.",
    github: "https://github.com/SonuAkhtar/BikeHomeUI",
    live: "https://sonuakhtar.github.io/BikeHomeUI/",
    tags: ["React", "TypeScript", "MongoDB"],
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    year: "2023",
    image: "/assets/projects/project3.PNG",
    name: "Start UI",
    desc: "Modern SaaS landing page with animated hero, feature showcases, pricing tables, and CTA optimizations.",
    impact: "Motion-first layout achieving Lighthouse performance score of 97 on desktop across all Core Web Vitals.",
    github: "https://github.com/SonuAkhtar/Start",
    live: "https://start-sonu.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind"],
    category: "frontend",
  },
  {
    id: 3,
    year: "2023",
    image: "/assets/projects/project4.PNG",
    name: "Landing UI",
    desc: "High-performance product landing page with custom animations, responsive layout, and Lighthouse 98+ score.",
    impact: "Zero JavaScript dependencies for animations. Pure CSS transitions kept the bundle under 12 KB gzipped.",
    github: "https://github.com/SonuAkhtar/Start",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
  },
  {
    id: 4,
    year: "2023",
    image: "/assets/projects/project5.PNG",
    name: "RealState UI",
    desc: "Real estate marketplace UI with property filtering, map integration, virtual tour previews, and lead capture.",
    impact: "Map-first browsing pattern reduced user drop-off by showing location context before property details.",
    github: "https://github.com/SonuAkhtar/LandingPageUI",
    tags: ["React", "Maps API", "CSS Grid"],
    category: "frontend",
  },
  {
    id: 5,
    year: "2022",
    image: "/assets/projects/project6.PNG",
    name: "BikeCar UI",
    desc: "Automotive showcase with 3D product cards, scroll-triggered animations, and a configurator-style UI.",
    impact: "GSAP ScrollTrigger-driven reveal animations render at 60 fps. Hardware-accelerated compositing throughout.",
    github: "https://github.com/SonuAkhtar/CarsBikeUI",
    live: "https://sonuakhtar.github.io/CarsBikeUI/",
    tags: ["React", "GSAP", "Framer Motion"],
    category: "frontend",
  },
];

export const hobbiesData = [
  { id: 0, image: "/assets/hobbies/image_1.jpg", title: "Humayun's Tomb",
    desc: "Mughal-era architecture through a contemporary lens. Delhi's most serene monument at golden hour." },
  { id: 1, image: "/assets/hobbies/image_2.jpg", title: "Palm Tree",
    desc: "Finding geometry in nature. The perfect symmetry of a lone palm against a clear sky." },
  { id: 2, image: "/assets/hobbies/image_3.jpg", title: "Flying Birds",
    desc: "Capturing motion in stillness. The split-second a murmuration shifts direction." },
  { id: 3, image: "/assets/hobbies/image_4.jpg", title: "Safdarjung's Tomb",
    desc: "History carved in sandstone. The intricate craftsmanship of a 270-year-old monument." },
  { id: 4, image: "/assets/hobbies/image_5.jpg", title: "Eyes on the Book",
    desc: "Quiet moments make the best frames. Concentration and light in perfect harmony." },
  { id: 5, image: "/assets/hobbies/image_7.jpg", title: "Flower in the Woods",
    desc: "Solitude and beauty coexist. A single bloom standing calm amid the undergrowth." },
];
