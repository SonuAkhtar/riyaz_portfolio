import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillsData, skillCategoryBlurb, certificationsData } from "../../appData";
import { fadeInUp, stagger, viewportOptions } from "../utils/animations";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./skillsPage.css";

const EASE = [0.22, 1, 0.36, 1];

const LEVELS = [
  { min: 88, label: "Expert", dots: 3 },
  { min: 75, label: "Advanced", dots: 2 },
  { min: 0, label: "Working knowledge", dots: 1 },
];
const levelOf = (n) => LEVELS.find((l) => Number(n) >= l.min);

const toolCount = skillsData.reduce((sum, c) => sum + c.data.length, 0);

const SUMMARY = [
  { value: skillsData.length, label: "Disciplines" },
  { value: `${Math.floor(toolCount / 10) * 10}+`, label: "Tools" },
  { value: certificationsData.length, label: "Certifications" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const Meter = ({ dots }) => (
  <span className="sp_meter" aria-hidden="true">
    {[1, 2, 3].map((d) => (
      <span key={d} className={d <= dots ? "is-on" : ""} />
    ))}
  </span>
);

const SkillsPage = () => {
  const [active, setActive] = useState(0);
  const cat = skillsData[active];

  return (
    <div className="sp_root">
      <section className="sp_hero">
        <div className="sp_hero_aurora" aria-hidden="true" />
        <div className="section_inner sp_hero_inner">
          <motion.span className="section_label" {...fadeUp(0.05)}>
            Skills
          </motion.span>
          <h1 className="sp_hero_title">
            <span className="sp_reveal">
              <motion.span
                className="sp_reveal-inner"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.1, ease: EASE }}
              >
                Tools I use
              </motion.span>
            </span>
            <span className="sp_reveal">
              <motion.span
                className="sp_reveal-inner"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.22, ease: EASE }}
              >
                every day.
              </motion.span>
            </span>
          </h1>
          <motion.p className="sp_hero_sub" {...fadeUp(0.45)}>
            The languages, frameworks and tools behind my work, grouped by
            discipline and rated by how deeply I&apos;ve used them.
          </motion.p>
          <motion.dl className="sp_summary" {...fadeUp(0.6)}>
            {SUMMARY.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="sp_stack">
        <div className="section_inner">
          <SectionHeader eyebrow="Stack" title="By discipline." />

          <div className="sp_tabs" role="tablist" aria-label="Disciplines">
            {skillsData.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  id={`sp-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="sp-panel"
                  className={`sp_tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sp-tab-bg"
                      className="sp_tab-bg"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="sp_tab-text">{c.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id="sp-panel"
              role="tabpanel"
              aria-labelledby={`sp-tab-${active}`}
              className="sp_panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="sp_panel-head">
                <h3 className="sp_panel-title">{cat.title}</h3>
                <span className="sp_panel-years">{cat.subtitle}</span>
                <p className="sp_panel-desc">{skillCategoryBlurb[active]}</p>
              </div>

              <ul className="sp_tools">
                {cat.data.map((tool) => {
                  const level = levelOf(tool.number);
                  return (
                    <li key={tool.name} className="sp_tool">
                      <span className="sp_tool-icon" aria-hidden="true">
                        <i className={tool.icon} />
                      </span>
                      <span className="sp_tool-name">{tool.name}</span>
                      <span className="sp_tool-level">
                        <Meter dots={level.dots} />
                        {level.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="sp_certs">
        <div className="section_inner">
          <SectionHeader eyebrow="Certifications" title="Recent courses." />
          <motion.ol
            className="sp_cert_list"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={stagger}
          >
            {certificationsData.map((c) => (
              <motion.li key={c.id} className="sp_cert" variants={fadeInUp}>
                <span className="sp_cert-year">{c.year}</span>
                <div className="sp_cert-main">
                  <h3 className="sp_cert-name">{c.name}</h3>
                  <p className="sp_cert-desc">{c.desc}</p>
                </div>
                <span className="sp_cert-issuer">{c.issuer}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default SkillsPage;
