export const experienceData = [
  {
    id: 0,
    title: "Lead Experience Engineer",
    company: "Publicis Sapient",
    logo: "/assets/companies/publicissapient.svg",
    location: "Gurgaon",
    period: "Jun 2024 to Present",
    current: true,
  },
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Optum (UnitedHealth Group)",
    logo: "/assets/companies/optum.svg",
    location: "Gurgaon",
    period: "Dec 2021 to Jun 2024",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer",
    company: "Evalueserve",
    logo: "/assets/companies/evalueserve.svg",
    location: "Gurgaon",
    period: "Nov 2020 to Dec 2021",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tech Mahindra",
    logo: "/assets/companies/techmahindra.svg",
    location: "Noida",
    period: "Aug 2018 to Nov 2020",
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Amazon",
    logo: "/assets/companies/amazon.svg",
    location: "Hyderabad",
    period: "Aug 2017 to Aug 2018",
  },
];

const [currentRole] = experienceData;
const availableFrom = "Q3 2026";

export const profile = {
  name: "Riyaz Akhtar",
  initials: "RA",
  role: currentRole.title,
  currentCompany: currentRole.company,
  location: "Gurgaon, India",
  availableFrom,
  availability: `Open for ${availableFrom}`,
  email: "riyaz.sa03@gmail.com",
  phone: "+91-7009003062",
  phoneDisplay: "+91 7009 003 062",
  hours: "Mon to Fri, 09:00 to 19:00 IST",
  replyTime: "two business days",
};

export const siteStats = {
  years: 9,
  companies: experienceData.length,
  clients: 9,
  projects: 20,
};

export const heroStats = [
  { value: `${siteStats.years}+`, label: "Years" },
  { value: String(siteStats.companies), label: "Companies" },
  { value: `${siteStats.projects}+`, label: "Projects shipped" },
];

export const navLinks = [
  { id: 0, label: "Home", href: "/" },
  { id: 1, label: "About", href: "/about" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "Projects", href: "/projects" },
  { id: 4, label: "Skills", href: "/skills" },
  { id: 5, label: "Contact", href: "/contact" },
];

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

export const heroLede =
  "I build fast, reliable React products and lead the teams that ship them.";

export const educationData = [
  {
    id: 0,
    title: "B.Tech. in Computer Science",
    org: "Lovely Professional University",
    period: "2013 to 2017",
  },
  {
    id: 1,
    title: "Senior Secondary (XII)",
    org: "Sai Dass Senior Secondary",
    period: "2012 to 2013",
  },
  {
    id: 2,
    title: "Higher Secondary (X)",
    org: "Bhartiya Bal Vidhya Mandir",
    period: "2010 to 2011",
  },
];

export const servicesData = [
  {
    number: "01",
    title: "Product Engineering",
    summary:
      "I take a product from design to launch with React, Next.js and TypeScript, with tests and CI set up from day one.",
    deliverables: [
      "Web apps and dashboards",
      "Design systems",
      "Accessibility",
      "CI/CD pipelines",
    ],
  },
  {
    number: "02",
    title: "Frontend Architecture",
    summary:
      "I set up micro-frontends, shared components and design tokens so several teams can build in one codebase without slowing each other down.",
    deliverables: [
      "Micro-frontend setup",
      "Component libraries",
      "Theming and tokens",
      "Legacy migrations",
    ],
  },
  {
    number: "03",
    title: "Performance & Quality",
    summary:
      "I find what makes an app slow or fragile and fix it, then add the tests and checks that keep it that way.",
    deliverables: [
      "Performance audits",
      "Test suites",
      "Security scanning",
      "WCAG 2.2 compliance",
    ],
  },
];

export const aboutHome = {
  eyebrow: "About",
  title: "I turn complex problems into products that ship.",
  bio: [
    "I've built React products for e-commerce, healthcare and consulting teams, from Amazon to UnitedHealth's Optum.",
    "I care about the parts users never see: clean architecture, fast pages, solid tests, and knowing what not to build.",
  ],
  currently: `Leading full-stack projects at ${currentRole.company}, since ${currentRole.period.match(/\d{4}/)[0]}`,
  industries: [
    "E-commerce",
    "Telecom",
    "Cloud computing",
    "Healthcare",
    "Consulting",
    "SaaS",
    "Analytics",
  ],
  principles: [
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance is a feature",
      body: "I set performance budgets early and check them on every pull request.",
    },
    {
      icon: "fas fa-layer-group",
      title: "Systems over screens",
      body: "Shared components and design systems, so teams build faster and stay consistent.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality by default",
      body: "Tests, accessibility and security checks ship with the feature, not after it.",
    },
    {
      icon: "fas fa-users",
      title: "Lead by unblocking",
      body: "Clear plans, honest estimates and hands-on help for the people I work with.",
    },
  ],
};

export const aboutPage = {
  intro: [
    `I'm a ${profile.role} in ${profile.location}. For ${siteStats.years} years I've built React products for companies like Amazon, Optum and Publicis Sapient.`,
    "Today I lead full-stack projects: planning the architecture, writing code with the team, and making sure what we ship is fast, accessible and easy to maintain.",
  ],
  gallery:
    "I photograph architecture and everyday moments around Delhi.",
};

export const principlesData = [
  {
    index: "01",
    title: "Agree on the problem first",
    body: "A short conversation before any code saves weeks of rework later.",
  },
  {
    index: "02",
    title: "Choose proven tools",
    body: "Well-supported tech keeps the focus on the product, not the stack.",
  },
  {
    index: "03",
    title: "Build quality in",
    body: "Tests, accessibility and performance checks ship with the feature.",
  },
  {
    index: "04",
    title: "Own the outcome",
    body: "My job isn't done when the ticket closes. It's done when users are better off.",
  },
];

export const processData = [
  {
    step: "01",
    title: "Discover",
    description: "We agree on the problem, the users and how we'll measure success.",
  },
  {
    step: "02",
    title: "Plan",
    description: "I outline the architecture, the data and the delivery plan before coding.",
  },
  {
    step: "03",
    title: "Build",
    description: "Typed, tested code, reviewed and deployed to staging every day.",
  },
  {
    step: "04",
    title: "Launch",
    description: "A monitored release with a rollback plan ready if anything goes wrong.",
  },
  {
    step: "05",
    title: "Support",
    description: "I stay on after launch to fix issues and hand over cleanly to your team.",
  },
];

export const faqData = [
  {
    q: "How do you price your work?",
    a: "Either a fixed price for a clearly scoped project, or a monthly retainer for ongoing work. I'll suggest the one that fits once I understand what you need.",
  },
  {
    q: "How long does a project take?",
    a: "A focused feature usually takes 6 to 10 weeks. A larger product build takes 3 to 6 months. We agree on the timeline before we start.",
  },
  {
    q: "Do you work with in-house teams?",
    a: "Yes, most of my work is alongside engineers, designers and product managers. I aim to leave your team stronger, not dependent on me.",
  },
  {
    q: "Where are you based?",
    a: `${profile.location}. I work remotely with teams in India, Europe and the US.`,
  },
  {
    q: "Can you handle backend and infrastructure too?",
    a: "Yes. I build Node.js services and set up CI/CD with Azure DevOps or GitHub Actions, fitting in with the tools you already use.",
  },
];

export const skillsData = [
  {
    id: 0,
    icon: "fab fa-react",
    title: "Frontend",
    subtitle: "9+ years",
    data: [
      { id: 0, name: "React.js", number: "95" },
      { id: 1, name: "Next.js", number: "90" },
      { id: 2, name: "TypeScript", number: "92" },
      { id: 3, name: "JavaScript", number: "95" },
      { id: 4, name: "HTML5", number: "95" },
      { id: 5, name: "CSS3", number: "92" },
      { id: 6, name: "Tailwind", number: "88" },
      { id: 7, name: "Redux", number: "85" },
      { id: 8, name: "Zustand", number: "80" },
      { id: 9, name: "Micro-Frontend", number: "82" },
    ],
  },
  {
    id: 1,
    icon: "fab fa-node-js",
    title: "Backend",
    subtitle: "5+ years",
    data: [
      { id: 0, name: "Node.js", number: "82" },
      { id: 1, name: "GraphQL", number: "80" },
      { id: 2, name: "REST APIs", number: "88" },
      { id: 3, name: "SQL Basics", number: "70" },
      { id: 4, name: "Java", number: "55" },
    ],
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "DevOps & Tooling",
    subtitle: "6+ years",
    data: [
      { id: 0, name: "Git", number: "95" },
      { id: 1, name: "GitHub Actions", number: "88" },
      { id: 2, name: "Azure DevOps", number: "85" },
      { id: 3, name: "Bitbucket", number: "85" },
      { id: 4, name: "Bamboo", number: "65" },
      { id: 5, name: "Webpack", number: "78" },
      { id: 6, name: "Babel", number: "72" },
      { id: 7, name: "AWS", number: "68" },
      { id: 8, name: "ServiceNow", number: "60" },
    ],
  },
  {
    id: 3,
    icon: "fas fa-shield-alt",
    title: "Quality & Security",
    subtitle: "4+ years",
    data: [
      { id: 0, name: "Vitest", number: "82" },
      { id: 1, name: "Jest", number: "88" },
      {
        id: 2,
        icon: "fas fa-check-double",
        name: "React Testing Lib",
        number: "85",
      },
      { id: 3, name: "Lighthouse", number: "88" },
      { id: 4, name: "Chrome DevTools", number: "92" },
      { id: 5, name: "Splunk", number: "72" },
      { id: 6, name: "Veracode", number: "75" },
      { id: 7, name: "Mend", number: "70" },
      { id: 8, name: "SonarQube", number: "80" },
    ],
  },
  {
    id: 4,
    icon: "fas fa-robot",
    title: "AI-Driven Development",
    subtitle: "3+ years",
    data: [
      { id: 0, name: "Claude Code", number: "90" },
      { id: 1, name: "GitHub Copilot", number: "88" },
      { id: 2, name: "Cursor", number: "85" },
      { id: 3, name: "ChatGPT", number: "88" },
      { id: 4, name: "Claude API", number: "82" },
      { id: 5, name: "OpenAI API", number: "80" },
      { id: 6, name: "Prompt Engineering", number: "85" },
      { id: 7, name: "LLM Integrations", number: "80" },
    ],
  },
];

export const skillCategoryBlurb = [
  "React, Next.js and TypeScript apps, from design systems to micro-frontends.",
  "Node.js services and the REST and GraphQL APIs behind them.",
  "Pipelines and tooling that take code from commit to production.",
  "Tests, security scans and performance checks before every release.",
  "Coding with AI assistants and shipping LLM-powered features.",
];

export const certificationsData = [
  {
    id: 0,
    name: "Generative AI with ChatGPT",
    issuer: "Udemy",
    year: "2024",
    desc: "Building features with generative AI and the GPT APIs.",
  },
  {
    id: 1,
    name: "Prompt Engineering for Developers",
    issuer: "Udemy",
    year: "2024",
    desc: "Writing reliable prompts for production LLM features.",
  },
  {
    id: 2,
    name: "Claude AI Fundamentals",
    issuer: "Udemy",
    year: "2024",
    desc: "Building applications with Claude and the Anthropic API.",
  },
];

export const projectsData = [
  {
    id: 0,
    year: "2026",
    image: "/assets/projects/smartres.jpg",
    name: "SmartRes",
    desc: "An AI resume tool. It reads your CV, tailors it to a job description and exports it as PDF or DOCX.",
    impact:
      "Covers the whole job search in one account: profile builder, job matching, cover letters, interview prep and an application tracker.",
    github: "https://github.com/SonuAkhtar/smartRes",
    live: "https://smart-res-one.vercel.app/",
    tags: ["React 19", "TypeScript", "Supabase"],
  },
  {
    id: 1,
    year: "2025",
    image: "/assets/projects/triphouse.jpg",
    name: "Trip House",
    desc: "A private travel journal where trips, photos and notes are saved to your own account.",
    impact:
      "Everything sits behind sign-in, so each journal stays private to its owner.",
    github: "https://github.com/SonuAkhtar/photoHouse",
    live: "https://photo-house-azure.vercel.app/",
    tags: ["React", "Vite", "Auth"],
  },
  {
    id: 2,
    year: "2026",
    image: "/assets/projects/doomsday.jpg",
    name: "Doomsday",
    desc: "A Marvel watch-order tracker leading up to Avengers: Doomsday, with a film timeline, progress tracking and a release countdown.",
    impact:
      "Tracks progress across 18 films and about 48 hours of viewing, shown on every page.",
    github: "https://github.com/SonuAkhtar/doomsday",
    live: "https://doomsday-map.vercel.app/",
    tags: ["Next.js", "React", "Framer Motion"],
  },
  {
    id: 3,
    year: "2026",
    image: "/assets/projects/talknet.jpg",
    name: "Talking Networks",
    desc: "An HTTP status code reference for developers, covering 41 codes with real examples, side-by-side comparison and a troubleshooting guide.",
    impact:
      "Built search, category filters and keyboard shortcuts so any code can be found in seconds.",
    github: "https://github.com/SonuAkhtar/talkingnetwork",
    live: "https://talknet-tan.vercel.app/",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 4,
    year: "2026",
    image: "/assets/projects/analyticshala.jpg",
    name: "AnalyticShala",
    desc: "A website for a data analytics training institute in India, with courses, weekend workshops, student reviews and online enrolment.",
    impact:
      "Presents ten courses, from Advanced Excel to GenAI, to a community of 300+ students, with light and dark themes.",
    github: "https://github.com/SonuAkhtar/analyticshala-1",
    live: "https://www.analyticshala.in/",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 5,
    year: "2025",
    image: "/assets/projects/24chambers.jpg",
    name: "24 Chambers",
    desc: "A website for a New Delhi law firm founded in 1975, with practice areas, team profiles, publications and an enquiry form.",
    impact:
      "Follows Bar Council of India rules by showing a disclaimer before any content.",
    github: "https://github.com/SonuAkhtar/24chambers",
    live: "https://24chambers.in/about-us",
    tags: ["React", "Vite", "CSS"],
  },
];

export const hobbiesData = [
  {
    id: 0,
    image: "/assets/hobbies/image_1.jpg",
    title: "Humayun's Tomb",
  },
  {
    id: 1,
    image: "/assets/hobbies/image_2.jpg",
    title: "Palm Tree",
  },
  {
    id: 2,
    image: "/assets/hobbies/image_3.jpg",
    title: "Flying Birds",
  },
  {
    id: 3,
    image: "/assets/hobbies/image_4.jpg",
    title: "Safdarjung's Tomb",
  },
  {
    id: 4,
    image: "/assets/hobbies/image_5.jpg",
    title: "Eyes on the Book",
  },
  {
    id: 5,
    image: "/assets/hobbies/image_7.jpg",
    title: "Flower in the Woods",
  },
];
