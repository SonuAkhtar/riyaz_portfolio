import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./projectsPage.css";
import { projectsData } from "../../appData";
import { PROJECT_VARIANTS } from "../utils/themeColors";

const EASE = [0.22, 1, 0.36, 1];

const getColor = (i) => PROJECT_VARIANTS[i % PROJECT_VARIANTS.length];

const PROJECTS = projectsData.map((p, i) => ({
  ...p,
  title: p.name,
  year: p.year || "2024",
  challenge: p.desc,
  services: p.tags,
  role: p.impact || p.desc,
  color: getColor(i),
}));
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: EASE, delay },
  }),
};

const RevealLine = ({ children, delay = 0 }) => (
  <span className="pp_reveal">
    <motion.span
      className="pp_reveal-inner"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);
const ProjectSection = React.forwardRef(({ project }, ref) => (
  <section ref={ref} className="pp_section">
    <div className="pp_proj_top">
      <motion.div
        className="pp_proj_title_col"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="pp_proj_title">{project.title}</h2>
        <span className="pp_proj_year_badge">{project.year}</span>
      </motion.div>

      <motion.div
        className="pp_meta_col"
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <span className="pp_meta_label">Challenge:</span>
        <p className="pp_meta_text">{project.challenge}</p>
      </motion.div>

      <motion.div
        className="pp_meta_col"
        variants={fadeUp}
        custom={0.18}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <span className="pp_meta_label">Services:</span>
        <div className="pp_services_list">
          {project.services.map((s) => (
            <span key={s} className="pp_service_pill">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="pp_meta_col"
        variants={fadeUp}
        custom={0.26}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <span className="pp_meta_label">Role:</span>
        <p className="pp_meta_text">{project.role}</p>
      </motion.div>
    </div>

    {project.image && (
      <motion.div
        className="pp_proj_img_wrap"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
      >
        <div className="pp_proj_img_links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pp_img_btn"
            >
              <i className="fas fa-external-link-alt" /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pp_img_btn"
            >
              <i className="fab fa-github" /> Code
            </a>
          )}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="pp_proj_img"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    )}
  </section>
));

ProjectSection.displayName = "ProjectSection";

const ProjectsPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const sectionRefs = useRef([]);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const mid = vh / 2;

      if (mainRef.current) {
        const r = mainRef.current.getBoundingClientRect();
        setNavVisible(r.top <= 0 && r.bottom > vh);
      }

      let closestIdx = 0;
      let minDist = Infinity;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - mid);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = i;
        }
      });
      setActiveIdx(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProject = useCallback((i) => {
    const el = sectionRefs.current[i];
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  }, []);

  const activeColor = PROJECTS[activeIdx]?.color;

  return (
    <div className="pp_root">
      <header className="pp_hero">
        <div className="pp_hero_aurora" aria-hidden />

        <div className="pp_hero_inner">
          <motion.span
            className="pp_hero_eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <span /> Selected work, 2022 to 2026
          </motion.span>

          <h1 className="pp_hero_title">
            <RevealLine delay={0.2}>A catalogue of</RevealLine>
            <br />
            <em>
              <RevealLine delay={0.35}>shipped work.</RevealLine>
            </em>
          </h1>

          <motion.p
            className="pp_hero_lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.6 }}
          >
            Production-grade engineering across AI integrations, enterprise
            frontend systems, and cloud-deployed applications. Scroll the
            catalogue. Every entry is a working application, not a mock.
          </motion.p>

          <motion.div
            className="pp_hero_foot"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
          >
            <span className="pp_hero_count">
              {String(PROJECTS.length).padStart(2, "0")} projects
            </span>
            <button
              type="button"
              className="pp_hero_jump"
              onClick={() => scrollToProject(0)}
              aria-label="Jump to first project"
            >
              <span>Begin reading</span>
              <i className="fas fa-arrow-down" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </header>

      <aside
        className={`pp_sidenav${navVisible ? " visible" : ""}`}
        aria-label="Project navigation"
      >
        <div className="pp_sidenav_track">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              className={`pp_dot_item${i === activeIdx ? " active" : ""}`}
              style={{
                "--dot-color": p.color.dot,
                "--dot-pill-bg": p.color.pillBg,
                "--dot-border": p.color.pillBorder,
              }}
              onClick={() => scrollToProject(i)}
              aria-label={`Go to ${p.title}`}
            >
              <span className="pp_dot" aria-hidden="true" />
              <span className="pp_dot_label">{p.title}</span>
            </button>
          ))}
        </div>

        <div className="pp_nav_counter" aria-live="polite">
          <span className="pp_count_cur" style={{ color: activeColor?.dot }}>
            {String(activeIdx + 1).padStart(2, "0")}
          </span>
          <span className="pp_count_sep">/</span>
          <span className="pp_count_tot">
            {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>
      </aside>

      <main
        className="pp_main"
        ref={mainRef}
        style={{ "--proj-bg": activeColor?.bg }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectSection
            key={p.id}
            ref={(el) => (sectionRefs.current[i] = el)}
            project={p}
          />
        ))}
      </main>

      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
