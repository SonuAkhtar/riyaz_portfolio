import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { projectsData } from "../../../appData";
import "./projects.css";
const PROJECT_COLORS = [
  "#5b8dee",
  "#a855f7",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#06b6d4",
];
const imageVariants = {
  hidden: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    scale: 1.06,
  }),
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    scale: 1,
    transition: {
      clipPath: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      scale: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (dir) => ({
    clipPath: dir >= 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    scale: 0.96,
    transition: {
      clipPath: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      scale: { duration: 0.5 },
    },
  }),
};

const fadeSlidePanelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: "110%", skewY: 6 },
  visible: (i) => ({
    opacity: 1,
    y: "0%",
    skewY: 0,
    transition: { delay: i * 0.032, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (i) => ({
    opacity: 0,
    y: "-70%",
    transition: { delay: i * 0.01, duration: 0.2 },
  }),
};
const SplitTitle = ({ text }) => (
  <span aria-label={text} style={{ display: "block" }}>
    {text.toUpperCase().split("").map((ch, i) => (
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
    <div className="proj_seg" style={{ "--seg-color": color }}>
      <motion.div className="proj_seg_fill" style={{ width }} />
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const prevIdxRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const N = projectsData.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(Math.floor(v * N), N - 1);
      if (next !== prevIdxRef.current) {
        setDirection(next > prevIdxRef.current ? 1 : -1);
        prevIdxRef.current = next;
        setActiveIndex(next);
      }
    });
    return unsub;
  }, [scrollYProgress, N]);

  const proj = projectsData[activeIndex];
  const color = PROJECT_COLORS[activeIndex % PROJECT_COLORS.length];

  return (
    <section
      ref={sectionRef}
      className="proj_scroll_section even"
      id="projects"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="proj_sticky" style={{ "--proj-color": color }}>

        <div className="proj_label_strip">
          <span className="proj_section_label">Selected Work</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              className="proj_count"
              style={{ color }}
              variants={fadeSlidePanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="proj_main">
          <div className="proj_img_col">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`img-${activeIndex}`}
                className="proj_img_wrap"
                custom={direction}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img src={proj.image} alt={proj.name} className="proj_img" loading="lazy" decoding="async" />
                <div className="proj_img_tint" style={{ background: color }} />

                <div className="proj_img_links">
                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj_icon_btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github" />
                    </motion.a>
                  )}
                  {proj.live && (
                    <motion.a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj_icon_btn proj_icon_live"
                      style={{ background: color, borderColor: color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="Live"
                    >
                      <i className="fas fa-external-link-alt" />
                    </motion.a>
                  )}
                </div>

                {proj.featured && (
                  <div className="proj_featured_tag">
                    <i className="fas fa-star" /> Featured
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="proj_info_col">

            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${activeIndex}`}
                className="proj_meta_row"
                variants={fadeSlidePanelVariants}
                initial="hidden" animate="visible" exit="exit"
              >
                <span className="proj_idx" style={{ color }}>
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="proj_cat_tag" style={{ color, borderColor: `${color}44`, background: `${color}12` }}>
                  {proj.category?.toUpperCase() || "PROJECT"}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${activeIndex}`}
                className="proj_name"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SplitTitle text={proj.name} />
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`rule-${activeIndex}`}
                className="proj_rule"
                style={{ background: color }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
                exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.2 } }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${activeIndex}`}
                className="proj_desc"
                variants={fadeSlidePanelVariants}
                initial="hidden" animate="visible" exit="exit"
              >
                {proj.desc}
              </motion.p>
            </AnimatePresence>

            {proj.impact && (
              <AnimatePresence mode="wait">
                <motion.p
                  key={`impact-${activeIndex}`}
                  className="proj_impact"
                  style={{ color, borderColor: `${color}30`, background: `${color}0e` }}
                  variants={fadeSlidePanelVariants}
                  initial="hidden" animate="visible" exit="exit"
                >
                  <i className="fas fa-chart-line" /> {proj.impact}
                </motion.p>
              </AnimatePresence>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={`tags-${activeIndex}`}
                className="proj_tags"
                variants={fadeSlidePanelVariants}
                initial="hidden" animate="visible" exit="exit"
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="proj_tag"
                    style={{ color, borderColor: `${color}44`, background: `${color}0e` }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${activeIndex}`}
                className="proj_cta_row"
                variants={fadeSlidePanelVariants}
                initial="hidden" animate="visible" exit="exit"
              >
                {proj.live && (
                  <motion.a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj_btn_primary"
                    style={{ background: color }}
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
                    className="proj_btn_outline"
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
                <span className="proj_scroll_dot" style={{ background: color }} />
              </span>
              <span>Scroll</span>
            </motion.div>
          </div>
        </div>

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
