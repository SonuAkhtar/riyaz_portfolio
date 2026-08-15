import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import SplitType from "split-type";
import { gsap } from "../utils/gsapSetup";
import { skillsData, certificationsData, siteStats } from "../../appData";
import {
  fadeInUp,
  stagger,
  scaleIn,
  viewportOptions,
} from "../utils/animations";
import MagneticButton from "../components/MagneticButton/MagneticButton";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import "./skillsPage.css";

const getLevel = (n) => {
  if (n >= 80) return { label: "Expert", cls: "expert" };
  if (n >= 65) return { label: "Proficient", cls: "proficient" };
  if (n >= 45) return { label: "Familiar", cls: "familiar" };
  return { label: "Learning", cls: "learning" };
};

const CAT_COLORS = ["#818cf8", "#22d3ee", "#f59e0b", "#ec4899"];

const panelAnim = {
  enter: { opacity: 0, y: 18 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const useTilt = (strength = 12) => {
  const ref = useRef(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glX = useMotionValue(50);
  const glY = useMotionValue(50);
  const springX = useSpring(rotX, { stiffness: 320, damping: 28 });
  const springY = useSpring(rotY, { stiffness: 320, damping: 28 });
  const glare = useMotionTemplate`radial-gradient(circle at ${glX}% ${glY}%, rgba(255,255,255,0.09), transparent 65%)`;

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * strength * 2);
    glX.set(((e.clientX - r.left) / r.width) * 100);
    glY.set(((e.clientY - r.top) / r.height) * 100);
  };

  const onMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return { ref, springX, springY, glare, onMouseMove, onMouseLeave };
};

const CountUp = ({ to, inView }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const steps = 48;
    const inc = to / steps;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= to) {
        setVal(to);
        clearInterval(timer);
      } else setVal(Math.floor(cur));
    }, 22);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <>{val}</>;
};

const SkillCard = ({ name, icon, number, delay, catColor }) => {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, margin: "-10px" });
  const level = getLevel(Number(number));
  const tilt = useTilt(10);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={tilt.ref}
        className="skill_card_v2"
        style={{
          rotateX: tilt.springX,
          rotateY: tilt.springY,
          transformStyle: "preserve-3d",
          "--card-accent": catColor,
        }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <motion.div className="sc2_glare" style={{ background: tilt.glare }} />

        <div className="sc2_inner">
          <div className="sc2_top">
            <div
              className="sc2_icon_wrap"
              style={{
                color: catColor,
                background: `${catColor}18`,
                borderColor: `${catColor}35`,
              }}
            >
              <i className={icon} />
            </div>
            <span className={`sc2_badge lvl2_${level.cls}`}>{level.label}</span>
          </div>

          <span className="sc2_pct">
            <CountUp to={Number(number)} inView={inView} />
            <sup>%</sup>
          </span>

          <p className="sc2_name">{name}</p>

          <div className="sc2_bar_track">
            <motion.div
              className={`sc2_bar_fill sc2_fill_${level.cls}`}
              initial={{ width: 0 }}
              animate={inView ? { width: `${number}%` } : { width: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + 0.28,
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertCard = ({ cert, delay }) => {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, margin: "-20px" });
  const tilt = useTilt(8);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={tilt.ref}
        className="sp_cert_card_v2"
        style={{
          rotateX: tilt.springX,
          rotateY: tilt.springY,
          transformStyle: "preserve-3d",
          "--cert-color": cert.color,
        }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <div className="sp_cert_holo" />
        <div className="sp_cert_scanline" />
        <motion.div className="sc2_glare" style={{ background: tilt.glare }} />

        <div className="sp_cert_inner">
          <div
            className="sp_cert_icon_v2"
            style={{
              color: cert.color,
              background: `${cert.color}18`,
              borderColor: `${cert.color}35`,
            }}
          >
            <i className={cert.icon} />
          </div>

          <span className="sp_cert_code" style={{ color: cert.color }}>
            {cert.badge}
          </span>

          <h3 className="sp_cert_name_v2">{cert.name}</h3>

          <div className="sp_cert_footer_v2">
            <span className="sp_cert_issuer_v2">{cert.issuer}</span>
            <span className="sp_cert_year_v2" style={{ color: cert.color }}>
              {cert.year}
            </span>
          </div>

          {cert.verified && (
            <span
              className="sp_cert_verified_v2"
              style={{
                color: cert.color,
                borderColor: `${cert.color}40`,
                background: `${cert.color}12`,
              }}
            >
              <i className="fas fa-check-circle" /> Verified
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SnapBar = ({ label, years, pct, color, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="sp_snap_row">
      <div className="sp_snap_meta">
        <span className="sp_snap_label">{label}</span>
        <span className="sp_snap_years" style={{ color }}>
          {years}
        </span>
      </div>
      <div className="sp_snap_track">
        <motion.div
          className="sp_snap_fill"
          style={{ background: color, boxShadow: `0 0 8px ${color}80` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
      <span className="sp_snap_pct" style={{ color }}>
        {pct}%
      </span>
    </div>
  );
};

const PRINCIPLES = [
  {
    num: "01",
    icon: "fas fa-layer-group",
    title: "Build Once, Scale Forever",
    body: "Every component, hook, and design token is built as if it will be shared across 10 teams. Composable, documented, and version-controlled from day one.",
    color: "#818cf8",
  },
  {
    num: "02",
    icon: "fas fa-shield-halved",
    title: "Quality Is The Default",
    body: "Tests, security scans, and Lighthouse budgets ship with every feature. Vitest, Jest, Veracode, SonarQube. Production stays calm because nothing reaches it untested.",
    color: "#22d3ee",
  },
  {
    num: "03",
    icon: "fas fa-gauge-high",
    title: "Performance Is A Feature",
    body: "Bundle size, render cost, and Web Vitals are tracked on every PR. Fast pages are not an afterthought, they are part of the brief.",
    color: "#a78bfa",
  },
];

const SkillsPage = () => {
  const [active, setActive] = useState(0);
  const heroTitleRef = useRef(null);
  const skillsGridRef = useRef(null);
  const cat = skillsData[active];
  const catColor = CAT_COLORS[active];
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    if (!heroTitleRef.current) return;
    const split = new SplitType(heroTitleRef.current, { types: "chars,words" });
    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      skewY: 5,
      duration: 0.78,
      ease: "power4.out",
      stagger: 0.026,
      delay: 0.35,
    });
    return () => split.revert();
  }, []);
  useEffect(() => {
    if (!skillsGridRef.current) return;
    const cards = skillsGridRef.current.querySelectorAll(".skill_card_v2");
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.48,
        ease: "power3.out",
        stagger: 0.055,
        clearProps: "all",
      },
    );
  }, [active]);

  return (
    <div className="sp_root">
      <section className="sp_hero">
        <div className="sp_hero_aurora" aria-hidden="true" />

        <div className="sp_hero_main">
          <motion.div
            className="sp_hero_left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="section_label sp_eyebrow"
              variants={fadeInUp}
            >
              Technical Arsenal
            </motion.span>

            <h1 ref={heroTitleRef} className="sp_hero_title">
              Skills &amp;
              <br />
              <span className="sp_title_accent">Expertise.</span>
            </h1>

            <motion.p className="sp_hero_sub" variants={fadeInUp}>
              Nine years shipping production-grade React frontends,
              micro-frontend systems, and the CI/CD, testing, and security
              discipline that holds them up. Every skill is battle-tested, not
              just box-checked.
            </motion.p>
          </motion.div>

          <motion.div
            className="sp_hero_right"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.55,
            }}
          >
            <div className="sp_snapshot_card">
              <div className="sp_snapshot_head">
                <span className="sp_snapshot_label">Technical Snapshot</span>
                <span className="sp_snapshot_dot" />
              </div>

              <SnapBar
                label="Frontend Stack"
                years="8+ yrs"
                pct={92}
                color="#818cf8"
                delay={0.75}
              />
              <SnapBar
                label="DevOps & Tooling"
                years="6+ yrs"
                pct={85}
                color="#22d3ee"
                delay={0.85}
              />
              <SnapBar
                label="Quality & Security"
                years="4+ yrs"
                pct={82}
                color="#f59e0b"
                delay={0.95}
              />

              <div className="sp_snapshot_footer">
                <span>{siteStats.freelance.projects} Projects</span>
                <span className="sp_snap_sep" />
                <span>{siteStats.certifications} Certifications</span>
                <span className="sp_snap_sep" />
                <span>{siteStats.corporate.companies} Companies</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="sp_stats_bar"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: siteStats.corporate.years, label: "Years" },
            { value: "30+", label: "Technologies" },
            { value: String(siteStats.techDomains), label: "Domains" },
            {
              value: String(siteStats.certifications),
              label: "Certifications",
            },
            { value: siteStats.freelance.projects, label: "Projects" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="sp_stat_item"
              variants={scaleIn}
            >
              <span className="sp_stat_val">{s.value}</span>
              <span className="sp_stat_lbl">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="sp_scroll_cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="sp_scroll_wheel">
            <span />
          </span>
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      <section className="sp_section sp_skills_section">
        <div className="sp_container">
          <span className="sp_ghost_wm sp_ghost_right" aria-hidden="true">
            SKILLS
          </span>

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
              A snapshot of mastery built through shipping real products,
              ranked by depth of production use.
            </motion.p>
          </motion.div>

          <div className="sp_hs_tabs" role="tablist" aria-label="Skill categories">
            {skillsData.map((c, i) => {
              const isActive = active === i;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`sp_hs_tab${isActive ? " sp_hs_tab-active" : ""}`}
                  style={{ "--tab-accent": CAT_COLORS[i] }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sp_active_pill"
                      className="sp_hs_tab-bg"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="sp_hs_tab-icon">
                    <i className={c.icon} />
                  </span>
                  <span className="sp_hs_tab-label">
                    <span className="sp_hs_tab-index">0{i + 1}</span>
                    {c.title}
                  </span>
                  <span className="sp_hs_tab-count">{c.data.length}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelAnim}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="sp_skills_grid" ref={skillsGridRef}>
                {cat.data.map((item, i) => (
                  <SkillCard
                    key={`${active}-${item.id}`}
                    name={item.name}
                    icon={item.icon}
                    number={item.number}
                    delay={i * 0.05}
                    catColor={catColor}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="sp_legend"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {[
              { cls: "expert", label: "Expert >= 80%" },
              { cls: "proficient", label: "Proficient >= 65%" },
              { cls: "familiar", label: "Familiar >= 45%" },
              { cls: "learning", label: "Learning" },
            ].map((l) => (
              <span key={l.cls} className={`sp_leg_item sp_leg_${l.cls}`}>
                <span className="sp_leg_dot" />
                {l.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="sp_section sp_even">
        <div className="sp_container">
          <span className="sp_ghost_wm" aria-hidden="true">
            CERTS
          </span>

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
              Continuous learning and industry-recognised credentials.
            </motion.p>
          </motion.div>

          <div className="sp_cert_list">
            {certificationsData.map((cert, i) => (
              <motion.a
                key={cert.id}
                className="sp_cert_row"
                style={{ "--cert-color": cert.color }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                <span
                  className="sp_cert_row-icon"
                  style={{
                    color: cert.color,
                    background: `${cert.color}18`,
                    borderColor: `${cert.color}40`,
                  }}
                >
                  <i className={cert.icon} />
                </span>
                <div className="sp_cert_row-body">
                  <span className="sp_cert_row-badge" style={{ color: cert.color }}>
                    {cert.badge}
                  </span>
                  <h3 className="sp_cert_row-name">{cert.name}</h3>
                  <span className="sp_cert_row-issuer">{cert.issuer}</span>
                </div>
                <div className="sp_cert_row-meta">
                  <span className="sp_cert_row-year" style={{ color: cert.color }}>
                    {cert.year}
                  </span>
                  {cert.verified && (
                    <span
                      className="sp_cert_row-verified"
                      style={{
                        color: cert.color,
                        borderColor: `${cert.color}40`,
                        background: `${cert.color}12`,
                      }}
                    >
                      <i className="fas fa-check-circle" /> Verified
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="sp_section sp_even">
        <div className="sp_container">
          <span className="sp_ghost_wm" aria-hidden="true">
            MINDSET
          </span>

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
            className="sp_principles_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                key={p.title}
                className="sp_principle"
                variants={fadeInUp}
                style={{ "--p-color": p.color }}
              >
                <span className="sp_principle_num">{p.num}</span>
                <div
                  className="sp_principle_icon"
                  style={{
                    color: p.color,
                    background: `${p.color}15`,
                    borderColor: `${p.color}30`,
                  }}
                >
                  <i className={p.icon} />
                </div>
                <h3 className="sp_principle_title">{p.title}</h3>
                <p className="sp_principle_body">{p.body}</p>
                <span
                  className="sp_principle_line"
                  style={{ background: p.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default SkillsPage;
