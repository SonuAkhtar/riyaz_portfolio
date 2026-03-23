import { useState, useRef } from "react";
import "./works.css";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import { homeWorksData } from "../../../appData";

const SERVICE_META = [
  {
    color: "#61dafb",
    desc: "Pixel-perfect React & Next.js apps, design systems, and Core Web Vitals-optimized experiences.",
  },
  {
    color: "#a855f7",
    desc: "GPT-4, LangChain, and RAG pipelines woven into products — AI that ships to production.",
  },
  {
    color: "#0078d4",
    desc: "CI/CD, serverless functions, and Application Insights monitoring on Azure at scale.",
  },
  {
    color: "#10b981",
    desc: "RESTful & GraphQL APIs, Node.js microservices, and battle-tested data layer architecture.",
  },
];

const WorksRow = ({ data, index, tags, isLast }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const meta = SERVICE_META[index];

  return (
    <motion.div
      ref={ref}
      className={`works__row${open ? " works__row--open" : ""}`}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      style={{ "--row-color": meta.color }}
    >
      {/* left accent bar */}
      <span className="works__row-bar" aria-hidden="true" />

      {/* clickable main row */}
      <button
        className="works__row-main"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="works__row-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="works__row-icon">
          <i className={data.icon} />
        </span>

        <span className="works__row-body">
          <span className="works__row-title">{data.name}</span>
          <span className="works__row-desc">{meta.desc}</span>
        </span>

        <span className="works__row-tags" aria-hidden="true">
          {tags.map((tag, j) => (
            <span key={j} className="works__row-tag">
              {tag}
            </span>
          ))}
        </span>

        <motion.span
          className="works__row-chevron"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <i className="fas fa-plus" />
        </motion.span>
      </button>

      {/* expandable features */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="works__row-expand"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="works__row-features">
              {data.features.map((feat, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: j * 0.07,
                  }}
                >
                  <span className="works__row-feat-dot" aria-hidden="true" />
                  {feat}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLast && <span className="works__row-divider" aria-hidden="true" />}
    </motion.div>
  );
};

const Works = () => (
  <section className="works even" id="works">
    <div className="container">
      {/* ── Header ── */}
      <motion.div
        className="works__header"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.span className="section_label" variants={fadeInUp}>
          What I Do
        </motion.span>
        <motion.h2 className="works__title" variants={fadeInUp}>
          Crafting Digital
          <br />
          <span className="works__title-accent">Experiences.</span>
        </motion.h2>
        <motion.p className="works__subtitle" variants={fadeInUp}>
          End-to-end solutions — from pixel-perfect interfaces to robust,
          scalable backend systems.
        </motion.p>
      </motion.div>

      {/* ── Service rows ── */}
      <div className="works__list">
        {homeWorksData.stacks.map((data, i) => (
          <WorksRow
            key={data.id}
            data={data}
            index={i}
            tags={homeWorksData.tags[i]}
            isLast={i === homeWorksData.stacks.length - 1}
          />
        ))}
      </div>

      {/* ── CTA ── */}
      <motion.div
        className="works__cta"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="works__cta-text">
          <span className="works__cta-eyebrow">Got a project in mind?</span>
          <p className="works__cta-title">
            Let's build something{" "}
            <span className="works__cta-grad">remarkable</span> together.
          </p>
        </div>
        <motion.a
          href="#contact"
          className="btn btn_primary"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Start a Project <i className="fas fa-arrow-right" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Works;
