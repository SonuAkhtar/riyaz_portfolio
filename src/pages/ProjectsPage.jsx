import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, scaleIn, viewportOptions } from "../utils/animations";
import Footer from "../components/Footer/Footer";
import "./projectsPage.css";
import { projectsData as appProjects } from "../../appData";

/* ════════════════════════════════════
   INLINE PROJECTS DATA
   (overridden by projectsPageData from appData when available)
════════════════════════════════════ */
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Chat Interface",
    description: "A full-stack chat application with GPT-4 integration, streaming responses, conversation history, and context-aware RAG search over documents.",
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
    description: "A comprehensive React component library with 60+ components, Storybook docs, accessibility compliance, and automated visual regression testing.",
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
    description: "A Node.js microservices architecture deployed on Azure Container Apps with service mesh, distributed tracing, and Application Insights telemetry.",
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
    description: "An AI-powered document intelligence system using Retrieval-Augmented Generation — upload PDFs, ask questions, get cited answers in seconds.",
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
    description: "A feature-rich SaaS analytics dashboard with real-time data, role-based access, Dark/Light theme, and an integrated notification system.",
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
    description: "A HIPAA-compliant healthcare portal — member dashboards, claim tracking, and AI-assisted search across benefits data at enterprise scale.",
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
    description: "A multi-agent orchestration system where specialized AI agents collaborate to process complex tasks — built with LangChain and Azure AI.",
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
    description: "A cross-platform mobile application for event management with offline support, push notifications, and Azure Functions for serverless backend.",
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
    description: "A federated GraphQL API gateway unifying multiple microservices with schema stitching, caching, rate limiting, and observability dashboards.",
    image: null,
    category: "Full-Stack",
    tags: ["Node.js", "GraphQL", "Apollo", "Redis", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
];

/* ── Filter categories ── */
const FILTERS = ["All", "AI/ML", "Frontend", "Full-Stack", "Mobile"];

/* ── Card colour palettes by category ── */
const CAT_COLORS = {
  "AI/ML":       { text: "#9d96ff", bg: "rgba(124,111,247,0.1)", border: "rgba(124,111,247,0.25)", num: "#7c6ff7" },
  "Frontend":    { text: "#5b8dee", bg: "rgba(91,141,238,0.1)",  border: "rgba(91,141,238,0.25)",  num: "#5b8dee" },
  "Full-Stack":  { text: "#5bdc8e", bg: "rgba(91,220,142,0.1)",  border: "rgba(91,220,142,0.25)",  num: "#5bdc8e" },
  "Mobile":      { text: "#f0a04b", bg: "rgba(240,160,75,0.1)",  border: "rgba(240,160,75,0.25)",  num: "#f0a04b" },
};

const getCatColor = (cat) => CAT_COLORS[cat] || CAT_COLORS["Frontend"];

/* ── Card animation variants ── */
const cardVariant = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Project card ── */
const ProjectCard = ({ project, index }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const cc     = getCatColor(project.category);
  const num    = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      className="pp_card"
      variants={cardVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      layout
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 280, damping: 20 } }}
    >
      {/* Left accent bar */}
      <div className="pp_card_accent_bar" />

      {/* Image / placeholder */}
      <div className="pp_card_img_wrap">
        {project.image ? (
          <img src={project.image} alt={project.title} className="pp_card_img" />
        ) : (
          <div className="pp_card_img_placeholder">
            <span className="pp_card_ghost_num" aria-hidden="true">{num}</span>
            <div className="pp_card_img_pattern" aria-hidden="true" />
          </div>
        )}

        {/* Category badge on image */}
        <span
          className="pp_card_cat_badge"
          style={{ background: cc.bg, border: `1px solid ${cc.border}`, color: cc.text }}
        >
          {project.category}
        </span>

        {project.featured && (
          <span className="pp_card_featured_badge">
            <i className="fas fa-star" /> Featured
          </span>
        )}

        {/* Hover overlay */}
        <div className="pp_card_overlay">
          <div className="pp_card_overlay_links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pp_overlay_btn"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github" /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pp_overlay_btn pp_overlay_btn_primary"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-external-link-alt" /> Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="pp_card_body">
        <div className="pp_card_top">
          <span
            className="pp_card_num"
            style={{ color: cc.num }}
          >
            {num}
          </span>
          <div className="pp_card_links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pp_icon_link"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pp_icon_link pp_icon_link_accent"
                aria-label="Live Demo"
              >
                <i className="fas fa-external-link-alt" />
              </a>
            )}
          </div>
        </div>

        <h3 className="pp_card_title">{project.title}</h3>
        <p className="pp_card_desc">{project.description}</p>

        {/* Tech tags */}
        <div className="pp_card_tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pp_card_tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

/* ════════════════════════════════════
   PAGE
════════════════════════════════════ */
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  /* Use appData projects, fall back to inline data if needed */
  const projects = (appProjects && appProjects.length) ? appProjects.map(p => ({
    ...p,
    title: p.name,
    description: p.desc,
    category: p.category === "ai" ? "AI/ML" : p.category === "fullstack" ? "Full-Stack" : "Frontend",
  })) : FALLBACK_PROJECTS;

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filterIdx = FILTERS.indexOf(activeFilter);

  return (
    <div className="pp_root">

      {/* ══════════════════════
          HERO
      ══════════════════════ */}
      <section className="pp_hero">
        <div className="pp_hero_orb pp_orb1" aria-hidden="true" />
        <div className="pp_hero_orb pp_orb2" aria-hidden="true" />
        <div className="pp_hero_grid"        aria-hidden="true" />

        <div className="pp_hero_inner">
          <motion.div
            className="pp_hero_content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Link to="/" className="pp_back_link">
                <i className="fas fa-arrow-left" />
                Back to Portfolio
              </Link>
            </motion.div>

            <motion.span className="section_label pp_label" variants={fadeInUp}>
              Portfolio
            </motion.span>

            <motion.h1 className="pp_hero_title" variants={fadeInUp}>
              Selected<br />
              <span className="pp_hero_grad">Projects.</span>
            </motion.h1>

            <motion.p className="pp_hero_sub" variants={fadeInUp}>
              Production-ready work spanning AI-powered apps, enterprise frontend systems,
              and cloud-deployed solutions. Every project is a story of solving real problems.
            </motion.p>
          </motion.div>

          <motion.div
            className="pp_stats_row"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: "60+", label: "Projects" },
              { value: "8+",  label: "Years" },
              { value: "AI",  label: "Powered" },
              { value: "☁",   label: "Azure Deployed" },
            ].map((s) => (
              <motion.div className="pp_stat" key={s.label} variants={scaleIn}>
                <span className="pp_stat_value">{s.value}</span>
                <span className="pp_stat_label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pp_scroll_cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="pp_scroll_wheel"><span /></span>
          <span>Browse Projects</span>
        </motion.div>
      </section>

      {/* ══════════════════════
          PROJECTS SECTION
      ══════════════════════ */}
      <section className="pp_section">
        <div className="pp_container">
          <span className="pp_ghost_wm" aria-hidden="true">WORK</span>

          {/* Filter bar */}
          <motion.div
            className="pp_filters"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="pp_filter_pills">
              {FILTERS.map((f, i) => (
                <motion.button
                  key={f}
                  className={`pp_filter_pill${activeFilter === f ? " active" : ""}`}
                  variants={fadeInUp}
                  onClick={() => setActiveFilter(f)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {f}
                  <span className="pp_filter_count">
                    {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
                  </span>
                </motion.button>
              ))}
              {/* sliding indicator */}
              <motion.span
                className="pp_filter_ink"
                layout
                layoutId="pp_filter_ink"
                style={{
                  left:  `calc(${filterIdx} * (100% / ${FILTERS.length}) + 4px)`,
                  width: `calc(100% / ${FILTERS.length} - 8px)`,
                }}
                transition={{ type: "spring", stiffness: 340, damping: 30 }}
              />
            </div>

            <span className="pp_results_count">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="pp_grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              className="pp_empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <i className="fas fa-folder-open" />
              <p>No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════════════════
          FEATURED CTA
      ══════════════════════ */}
      <section className="pp_cta_section">
        <div className="pp_cta_orb" aria-hidden="true" />

        <motion.div
          className="pp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div className="pp_cta_icon" variants={scaleIn}>
            <i className="fas fa-lightbulb" />
          </motion.div>

          <motion.span className="section_label" variants={fadeInUp}>
            Got something interesting?
          </motion.span>

          <motion.h2 className="pp_cta_title" variants={fadeInUp}>
            Let's Build It<br />
            <span className="pp_cta_grad">Together.</span>
          </motion.h2>

          <motion.p className="pp_cta_sub" variants={fadeInUp}>
            Have a challenging problem or an exciting idea? I'm always open to
            discussing new projects, creative work, or opportunities to be part of something great.
          </motion.p>

          <motion.div className="pp_cta_btns" variants={stagger}>
            <motion.a
              href="/#contact"
              className="btn btn_primary"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Conversation <i className="fas fa-arrow-right" />
            </motion.a>
            <motion.div variants={scaleIn}>
              <Link to="/" className="btn btn_outline">
                <i className="fas fa-home" /> Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
