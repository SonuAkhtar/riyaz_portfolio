import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./skillsPage.css";

// libraries
import { motion, AnimatePresence, useInView } from "framer-motion";

// appData
import { skillsPageData } from "../../../appData";
import {
  fadeInUp,
  stagger,
  scaleIn,
  viewportOptions,
} from "../../utils/animations";

// components
import PageHero from "../../components/common/PageHero/PageHero";
import Footer from "../../components/Footer/Footer";

const R = 38;
const CIRC = 2 * Math.PI * R;

const getLevel = (n) => {
  if (n >= 80) return { label: "Expert", cls: "expert" };
  if (n >= 65) return { label: "Proficient", cls: "proficient" };
  if (n >= 45) return { label: "Familiar", cls: "familiar" };
  return { label: "Learning", cls: "learning" };
};

const CountUp = ({ to, inView }) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 40;
    const inc = to / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= to) {
        setVal(to);
        clearInterval(timer);
      } else setVal(Math.floor(start));
    }, 28);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <>{val}</>;
};

const SkillCard = ({ name, number, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const level = getLevel(Number(number));
  const offset = CIRC - (Number(number) / 100) * CIRC;

  return (
    <motion.div
      className={`skill_card sc_${level.cls}`}
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 280, damping: 20 },
      }}
    >
      <div className="ring_wrap">
        <svg width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={R}
            strokeWidth="6"
            fill="none"
            className="ring_track"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={R}
            strokeWidth="6"
            fill="none"
            className={`ring_fill rf_${level.cls}`}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={
              inView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRC }
            }
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + 0.15,
            }}
            style={{ transformOrigin: "48px 48px", rotate: -90 }}
          />
        </svg>
        <div className="ring_center">
          <span className="ring_pct">
            <CountUp to={Number(number)} inView={inView} />
          </span>
          <span className="ring_sym">%</span>
        </div>
      </div>
      <p className="skill_card_name">{name}</p>
      <span className={`skill_card_lvl lvl_${level.cls}`}>{level.label}</span>
    </motion.div>
  );
};

const panelAnim = {
  enter: { opacity: 0, y: 18 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

const StatItem = ({ value, label }) => {
  const ref = useRef(null);
  const vis = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div className="sp_stat" ref={ref} variants={scaleIn}>
      <span className="sp_stat_value">{value}</span>
      <span className="sp_stat_label">{label}</span>
    </motion.div>
  );
};

const SkillsPage = () => {
  const [active, setActive] = useState(0);
  const certs =
    skillsPageData.cersData && skillsPageData.cersData.length
      ? skillsPageData.cersData
      : skillsPageData.certs;
  const cat = skillsPageData.skills[active];

  return (
    <div className="sp_root">
      <PageHero heroData={skillsPageData.hero} />

      <section className="sp_section sp_even">
        <div className="sp_container">
          <motion.div
            className="sp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              Verified Credentials
            </motion.span>
            <motion.h2 className="sp_section_title" variants={fadeInUp}>
              Certifications
              <br />
              <span className="sp_grad">&amp; Badges.</span>
            </motion.h2>
            <motion.p className="sp_section_sub" variants={fadeInUp}>
              Staying ahead through continuous learning and industry-recognized
              certifications.
            </motion.p>
          </motion.div>

          <div className="sp_cert_grid">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id || i}
                className={`sp_cert_card sp_cert_${cert.color}`}
                initial={{ opacity: 0, y: 48, clipPath: "inset(12% 4% 0% 4% round 1.25rem)" }}
                whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.25rem)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.62,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 4) * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
              >
                <div className="sp_cert_accent_bar" />
                <div className={`sp_cert_icon_wrap sp_cert_icon_${cert.color}`}>
                  <i className={cert.icon} />
                </div>
                <span className="sp_cert_issuer">{cert.issuer}</span>
                <h3 className="sp_cert_name">{cert.name}</h3>
                <div className="sp_cert_footer">
                  <span className="sp_cert_year">{cert.year}</span>
                  <span className="sp_cert_verified">
                    <i className="fas fa-circle-check" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp_section">
        <div className="sp_container">
          <motion.div
            className="sp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              Technical Stack
            </motion.span>
            <motion.h2 className="sp_section_title" variants={fadeInUp}>
              Core
              <br />
              <span className="sp_grad">Competencies.</span>
            </motion.h2>
            <motion.p className="sp_section_sub" variants={fadeInUp}>
              A snapshot of mastery built through shipping real products —
              ranked by depth of production use.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="sktabs"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {skillsPageData.skills.map((c, i) => (
              <motion.button
                key={c.id}
                className={`sktab${active === i ? " active" : ""}`}
                variants={fadeInUp}
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="sktab_icon">
                  <i className={c.icon} />
                </span>
                <span className="sktab_body">
                  <span className="sktab_name">{c.title}</span>
                  <span className="sktab_yrs">{c.subtitle}</span>
                </span>
                <span className="sktab_badge">{c.data.length}</span>
              </motion.button>
            ))}
            <motion.span
              className="sktab_ink"
              layout
              layoutId="sp_sktab_ink"
              style={{
                left: `calc(${active} * (100% / ${skillsPageData.skills.length}) + 4px)`,
                width: `calc(100% / ${skillsPageData.skills.length} - 8px)`,
              }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
            />
          </motion.div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="skills_panel"
              variants={panelAnim}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="skills_grid">
                {cat.data.map((item, i) => (
                  <SkillCard
                    key={`${active}-${item.id}`}
                    name={item.name}
                    number={item.number}
                    delay={i * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <motion.div
            className="skills_legend"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {skillsPageData.stats.map((l) => (
              <span key={l.cls} className={`leg_item li_${l.cls}`}>
                <span className="leg_dot" />
                {l.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="sp_section sp_even">
        <div className="sp_container">
          <motion.div
            className="sp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              Engineering Mindset
            </motion.span>
            <motion.h2 className="sp_section_title" variants={fadeInUp}>
              How I<br />
              <span className="sp_grad">Think &amp; Build.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="sp_philosophy_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {skillsPageData.philisophy.map((p, i) => (
              <motion.div
                key={p.title}
                className="sp_phil_card"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
              >
                <div className="sp_phil_accent_bar" />
                <div
                  className="sp_phil_icon_wrap"
                  style={{ "--phil-color": p.accent }}
                >
                  <i className={p.icon} />
                </div>
                <span className="sp_phil_num">0{i + 1}</span>
                <h3 className="sp_phil_title">{p.title}</h3>
                <p className="sp_phil_body">{p.body}</p>
                <div
                  className="sp_phil_bottom_line"
                  style={{ background: p.accent }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="sp_cta_section">
        <div className="sp_cta_orb" aria-hidden="true" />

        <motion.div
          className="sp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            Ready to work together?
          </motion.span>
          <motion.h2 className="sp_cta_title" variants={fadeInUp}>
            Let's Build
            <br />
            <span className="sp_cta_grad">Something Impactful.</span>
          </motion.h2>
          <motion.p className="sp_cta_sub" variants={fadeInUp}>
            Lead Engineer with 8+ years of expertise, ready for the next
            challenge. Open to leadership roles, AI projects, and Azure-scale
            systems.
          </motion.p>
          <motion.div className="sp_cta_btns" variants={stagger}>
            <motion.a
              href="/#contact"
              className="btn btn_primary"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch <i className="fas fa-arrow-right" />
            </motion.a>
            <motion.div variants={scaleIn}>
              <Link to="/" className="btn btn_outline">
                <i className="fas fa-house" /> Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillsPage;
