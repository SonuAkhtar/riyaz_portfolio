import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../../appData";
import "./projects.css";

/* ── Per-project accent colors ── */
const PROJECT_COLORS = [
  "#5b8dee",  // blue
  "#a855f7",  // violet
  "#10b981",  // emerald
  "#f59e0b",  // amber
  "#ec4899",  // pink
  "#06b6d4",  // cyan
];

/* ── Animation variants ── */
const imageVariants = {
  hidden: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    scale: 1.06,
  }),
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    scale: 1,
    transition: {
      clipPath: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
      scale:    { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    scale: 0.97,
    transition: {
      clipPath: { duration: 0.52, ease: [0.76, 0, 0.24, 1] },
      scale:    { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
    },
  }),
};

const ghostVariants = {
  hidden:  { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -35, scale: 1.05,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
};

const charVariants = {
  hidden:  { opacity: 0, y: "110%", skewY: 8 },
  visible: (i) => ({
    opacity: 1, y: "0%", skewY: 0,
    transition: { delay: i * 0.038, duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (i) => ({
    opacity: 0, y: "-80%",
    transition: { delay: i * 0.012, duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  }),
};

const titleContainerVariants = { hidden: {}, visible: {}, exit: {} };

const slideFadeVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.14 } },
  exit:    { opacity: 0, y: -14,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } },
};

const staggerTagsVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.2 } },
  exit:    { transition: { staggerChildren: 0.025 } },
};

const tagItemVariants = {
  hidden:  { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.9,
    transition: { duration: 0.18 } },
};

/* ── Per-character title reveal ── */
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

/* ── Progress segment (hook per segment, avoids hook-in-loop) ── */
const ProgressSegment = ({ scrollYProgress, start, end, color }) => {
  const width = useTransform(scrollYProgress, [start, end], ["0%", "100%"]);
  return (
    <div className="proj_progress_seg" style={{ "--seg-color": color }}>
      <motion.div className="proj_progress_fill" style={{ width }} />
    </div>
  );
};

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
const Projects = () => {
  const sectionRef   = useRef(null);
  const prevIdxRef   = useRef(0);
  const dirRef       = useRef(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction,   setDirection]   = useState(1);
  const N = projectsData.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Drive active index from scroll progress */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(Math.floor(v * N), N - 1);
      if (next !== prevIdxRef.current) {
        const dir = next > prevIdxRef.current ? 1 : -1;
        dirRef.current = dir;
        setDirection(dir);
        prevIdxRef.current = next;
        setActiveIndex(next);
      }
    });
    return unsub;
  }, [scrollYProgress, N]);

  const proj  = projectsData[activeIndex];
  const color = PROJECT_COLORS[activeIndex % PROJECT_COLORS.length];

  return (
    <section
      ref={sectionRef}
      className="projects even proj_scroll_section"
      id="projects"
      style={{ height: `${N * 100}vh`, "--proj-accent": color }}
    >
      <div className="proj_sticky">

        {/* ── Backgrounds ── */}
        <div className="proj_dot_grid"  aria-hidden="true" />
        <div className="proj_orb"       aria-hidden="true" />

        {/* ── Ghost number ── */}
        <AnimatePresence mode="wait">
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

        {/* ── Section header strip ── */}
        <div className="proj_header_strip">
          <div className="proj_header_left">
            <span className="section_label">Portfolio</span>
            <h2 className="proj_section_title">
              Selected <span className="proj_title_grad">Projects.</span>
            </h2>
          </div>
          <div className="proj_header_right">
            <AnimatePresence mode="wait">
              <motion.span
                key={`idx-${activeIndex}`}
                className="proj_index_display"
                style={{ color }}
                variants={slideFadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="proj_index_total">/ {String(N).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ── Main split layout ── */}
        <div className="proj_layout">

          {/* LEFT — image */}
          <div className="proj_img_col">
            <AnimatePresence mode="wait" custom={direction}>
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
                {/* Color tint */}
                <div className="proj_img_tint" style={{ background: color }} />

                {/* Floating badge */}
                {proj.featured && (
                  <motion.div
                    className="proj_featured_badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <i className="fas fa-star" /> Featured
                  </motion.div>
                )}

                {/* Category badge */}
                <motion.div
                  className="proj_cat_badge"
                  style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {proj.category?.toUpperCase() || "PROJECT"}
                </motion.div>

                {/* Hover links */}
                <div className="proj_img_links">
                  {proj.github && (
                    <motion.a
                      href={proj.github} target="_blank" rel="noreferrer"
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
                      href={proj.live} target="_blank" rel="noreferrer"
                      className="proj_link_btn proj_link_live"
                      style={{ background: color, borderColor: color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="View Live Demo"
                    >
                      <i className="fas fa-external-link-alt" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — info */}
          <div className="proj_info_col">

            {/* Animated counter */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`counter-${activeIndex}`}
                className="proj_counter"
                variants={slideFadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="proj_counter_num" style={{ color }}>
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="proj_counter_sep"> / </span>
                <span className="proj_counter_total">{String(N).padStart(2, "0")}</span>
              </motion.div>
            </AnimatePresence>

            {/* Title — char by char */}
            <AnimatePresence mode="wait">
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

            {/* Accent divider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`div-${activeIndex}`}
                className="proj_divider"
                style={{ background: color }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.22 } }}
              />
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeIndex}`}
                className="proj_desc"
                variants={slideFadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {proj.desc}
              </motion.p>
            </AnimatePresence>

            {/* Tags */}
            <AnimatePresence mode="wait">
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
                    style={{
                      color,
                      borderColor: `${color}55`,
                      background: `${color}12`,
                    }}
                    variants={tagItemVariants}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA buttons */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${activeIndex}`}
                className="proj_cta_row"
                variants={slideFadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {proj.live && (
                  <motion.a
                    href={proj.live} target="_blank" rel="noreferrer"
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
                    href={proj.github} target="_blank" rel="noreferrer"
                    className="btn btn_outline proj_btn_gh"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="fab fa-github" /> Code
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint */}
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

        {/* ── Bottom progress bar ── */}
        <div className="proj_progress_track" aria-hidden="true">
          {projectsData.map((_, i) => (
            <ProgressSegment
              key={i}
              scrollYProgress={scrollYProgress}
              start={i / N}
              end={(i + 1) / N}
              color={PROJECT_COLORS[i % PROJECT_COLORS.length]}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
