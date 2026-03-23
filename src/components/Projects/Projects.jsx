import { useRef, useState, useEffect } from "react";
import "./projects.css";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import { homeProjectsData } from "../../../appData";

// ── Animation variants ────────────────────────────────────────
const imageVariants = {
  hidden: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    scale: 1.06,
  }),
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    scale: 1,
    transition: {
      clipPath: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
      scale: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    scale: 0.97,
    transition: {
      clipPath: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
      scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  }),
};

const ghostVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 1.04,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: "100%", skewY: 6 },
  visible: (i) => ({
    opacity: 1,
    y: "0%",
    skewY: 0,
    transition: { delay: i * 0.034, duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (i) => ({
    opacity: 0,
    y: "-70%",
    transition: { delay: i * 0.01, duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  }),
};

const titleContainerVariants = { hidden: {}, visible: {}, exit: {} };

const infoVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerTagsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  exit: {},
};

const tagItemVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.15 } },
};

const SplitTitle = ({ text }) => (
  <span aria-label={text} style={{ display: "block" }}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={charVariants}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {ch === " " ? "\u00A0" : ch}
      </motion.span>
    ))}
  </span>
);

const ProgressSegment = ({ scrollYProgress, start, end, color }) => {
  const width = useTransform(scrollYProgress, [start, end], ["0%", "100%"]);
  return (
    <div className="proj_progress_seg" style={{ "--seg-color": color }}>
      <motion.div className="proj_progress_fill" style={{ width }} />
    </div>
  );
};

// ── Component ─────────────────────────────────────────────────
const Projects = () => {
  const sectionRef = useRef(null);
  const prevIdxRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  );
  const N = homeProjectsData.projects.length;

  // Track mobile breakpoint — debounced so address-bar resize flicker
  // doesn't toggle the 600vh desktop section and reset scroll position
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    let timer;
    const handler = (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => setIsMobile(e.matches), 200);
    };
    mq.addEventListener("change", handler);
    return () => {
      mq.removeEventListener("change", handler);
      clearTimeout(timer);
    };
  }, []);

  // Desktop: scroll-driven index
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (isMobile) return;
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(Math.floor(v * N), N - 1);
      if (next !== prevIdxRef.current) {
        const dir = next > prevIdxRef.current ? 1 : -1;
        setDirection(dir);
        prevIdxRef.current = next;
        setActiveIndex(next);
      }
    });
    return unsub;
  }, [scrollYProgress, N, isMobile]);

  const proj = homeProjectsData.projects[activeIndex];
  const color = homeProjectsData.colors[activeIndex % homeProjectsData.colors.length];

  // Mobile: button navigation
  const navigateMobile = (dir) => {
    const next = activeIndex + dir;
    if (next < 0 || next >= N) return;
    setDirection(dir);
    prevIdxRef.current = next;
    setActiveIndex(next);
  };

  // ── MOBILE CAROUSEL ─────────────────────────────────────────
  if (isMobile) {
    return (
      <section
        className="projects even proj_mobile_section"
        id="projects"
        style={{ "--proj-accent": color }}
      >
        <div className="container">

          {/* Header — counter updates directly, no AnimatePresence */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="section_label">Portfolio</span>
              <h2 className="proj_section_title">
                Selected <span className="proj_title_grad">Projects.</span>
              </h2>
            </div>
            <div className="proj_header_right">
              <span className="proj_index_display" style={{ color }}>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="proj_index_total">
                / {String(N).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Image — AnimatePresence sync (no mode="wait") */}
          <AnimatePresence custom={direction}>
            <motion.div
              key={`mob-img-${activeIndex}`}
              custom={direction}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                borderRadius: "1.25rem",
                overflow: "hidden",
                marginBottom: "1.25rem",
                flexShrink: 0,
              }}
            >
              <img
                src={proj.image}
                alt={proj.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div className="proj_img_tint" style={{ background: color }} />

              {proj.featured && (
                <div className="proj_featured_badge">
                  <i className="fas fa-star" /> Featured
                </div>
              )}

              <div
                className="proj_cat_badge"
                style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}
              >
                {proj.category?.toUpperCase() || "PROJECT"}
              </div>

              <div
                className="proj_img_links"
                style={{ opacity: 1, transform: "none", flexDirection: "row", bottom: "1rem", right: "1rem" }}
              >
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj_link_btn" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj_link_btn proj_link_live"
                    style={{ background: color, borderColor: color }}
                    aria-label="View Live"
                  >
                    <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Info — sync mode, no "wait" */}
          <AnimatePresence>
            <motion.div
              key={`mob-info-${activeIndex}`}
              variants={infoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3 className="proj_title" style={{ fontSize: "clamp(1.4rem, 6.5vw, 1.9rem)", margin: 0 }}>
                {proj.name}
              </h3>

              <div
                className="proj_divider"
                style={{ background: color, transform: "scaleX(1)", opacity: 0.8 }}
              />

              <p className="proj_desc" style={{ maxWidth: "100%" }}>{proj.desc}</p>

              <motion.div
                className="proj_tags"
                variants={staggerTagsVariants}
                initial="hidden"
                animate="visible"
              >
                {proj.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="proj_tag"
                    style={{ color, borderColor: `${color}55`, background: `${color}12` }}
                    variants={tagItemVariants}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <div className="proj_cta_row">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="proj_btn_live" style={{ "--live-color": color }}>
                    View Live <i className="fas fa-arrow-right" />
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn_outline proj_btn_gh">
                    <i className="fab fa-github" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              paddingTop: "0.75rem",
            }}
          >
            <button
              type="button"
              onClick={() => navigateMobile(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: `1.5px solid ${activeIndex === 0 ? "var(--border)" : color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                color: activeIndex === 0 ? "var(--text-muted)" : color,
                fontSize: "0.85rem",
                flexShrink: 0,
                opacity: activeIndex === 0 ? 0.35 : 1,
                transition: "all 0.2s",
                padding: 0,
                boxShadow: activeIndex === 0 ? "none" : `0 2px 12px ${color}33`,
              }}
            >
              <i className="fas fa-chevron-left" />
            </button>

            <div
              role="tablist"
              aria-label="Project navigation"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", flex: 1, justifyContent: "center" }}
            >
              {homeProjectsData.projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    prevIdxRef.current = i;
                    setActiveIndex(i);
                  }}
                  aria-label={`Project ${i + 1}`}
                  style={{
                    height: "6px",
                    width: i === activeIndex ? "22px" : "6px",
                    borderRadius: "3px",
                    background: i === activeIndex ? color : "var(--border-accent)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigateMobile(1)}
              disabled={activeIndex === N - 1}
              aria-label="Next project"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: activeIndex === N - 1 ? "var(--bg-card)" : color,
                border: `1.5px solid ${activeIndex === N - 1 ? "var(--border)" : color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: activeIndex === N - 1 ? "not-allowed" : "pointer",
                color: activeIndex === N - 1 ? "var(--text-muted)" : "#fff",
                fontSize: "0.85rem",
                flexShrink: 0,
                opacity: activeIndex === N - 1 ? 0.35 : 1,
                transition: "all 0.2s",
                padding: 0,
                boxShadow: activeIndex === N - 1 ? "none" : `0 2px 12px ${color}55`,
              }}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

        </div>
      </section>
    );
  }

  // ── DESKTOP STICKY SCROLL ────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="projects even proj_scroll_section"
      id="projects"
      style={{ height: `${N * 100}vh`, "--proj-accent": color }}
    >
      <div className="proj_sticky">
        <div className="proj_dot_grid" aria-hidden="true" />
        <div className="proj_orb" aria-hidden="true" />

        {/* Ghost number — sync mode so it doesn't queue */}
        <AnimatePresence>
          <motion.span
            key={`ghost-${activeIndex}`}
            className="proj_ghost_num"
            variants={ghostVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-hidden="true"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        {/* Header — counter renders directly, no AnimatePresence */}
        <div className="proj_header_strip">
          <div className="proj_header_left">
            <span className="section_label">Portfolio</span>
            <h2 className="proj_section_title">
              Selected <span className="proj_title_grad">Projects.</span>
            </h2>
          </div>
          <div className="proj_header_right">
            <span className="proj_index_display" style={{ color }}>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="proj_index_total">
              / {String(N).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="proj_layout">
          {/* Left: image */}
          <div className="proj_img_col">
            <AnimatePresence custom={direction}>
              <motion.div
                key={`img-${activeIndex}`}
                className="proj_img_frame"
                custom={direction}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img src={proj.image} alt={proj.name} className="proj_img" />
                <div className="proj_img_tint" style={{ background: color }} />

                {proj.featured && (
                  <motion.div
                    className="proj_featured_badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.35 }}
                  >
                    <i className="fas fa-star" /> Featured
                  </motion.div>
                )}

                <motion.div
                  className="proj_cat_badge"
                  style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.35 }}
                >
                  {proj.category?.toUpperCase() || "PROJECT"}
                </motion.div>

                <div className="proj_img_links">
                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj_link_btn"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="View on GitHub"
                    >
                      <i className="fab fa-github" />
                    </motion.a>
                  )}
                  {proj.live && (
                    <motion.a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj_link_btn proj_link_live"
                      style={{ background: color, borderColor: color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="View Live Demo"
                    >
                      <i className="fas fa-arrow-up-right-from-square" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: info — counter renders directly, content uses sync AnimatePresence */}
          <div className="proj_info_col">

            {/* Counter: no AnimatePresence — updates immediately */}
            <div className="proj_counter">
              <span className="proj_counter_num" style={{ color }}>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="proj_counter_sep"> / </span>
              <span className="proj_counter_total">
                {String(N).padStart(2, "0")}
              </span>
            </div>

            {/* Title — keep split-char animation, sync mode */}
            <AnimatePresence>
              <motion.h3
                key={`title-${activeIndex}`}
                className="proj_title"
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SplitTitle text={proj.name} />
              </motion.h3>
            </AnimatePresence>

            {/* Divider */}
            <AnimatePresence>
              <motion.div
                key={`div-${activeIndex}`}
                className="proj_divider"
                style={{ background: color }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.2 } }}
              />
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence>
              <motion.p
                key={`desc-${activeIndex}`}
                className="proj_desc"
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {proj.desc}
              </motion.p>
            </AnimatePresence>

            {/* Tags */}
            <AnimatePresence>
              <motion.div
                key={`tags-${activeIndex}`}
                className="proj_tags"
                variants={staggerTagsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {proj.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="proj_tag"
                    style={{ color, borderColor: `${color}55`, background: `${color}12` }}
                    variants={tagItemVariants}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence>
              <motion.div
                key={`cta-${activeIndex}`}
                className="proj_cta_row"
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {proj.live && (
                  <motion.a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj_btn_live"
                    style={{ "--live-color": color }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Live <i className="fas fa-arrow-right" />
                  </motion.a>
                )}
                {proj.github && (
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn_outline proj_btn_gh"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fab fa-github" /> Code
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="proj_scroll_hint"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <span className="proj_scroll_wheel">
                <span className="proj_scroll_dot" />
              </span>
              <span>Scroll</span>
            </motion.div>
          </div>
        </div>

        {/* Progress track */}
        <div className="proj_progress_track" aria-hidden="true">
          {homeProjectsData.projects.map((_, i) => (
            <ProgressSegment
              key={i}
              scrollYProgress={scrollYProgress}
              start={i / N}
              end={(i + 1) / N}
              color={homeProjectsData.colors[i % homeProjectsData.colors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
