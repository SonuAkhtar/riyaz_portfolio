import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import SplitType from "split-type";
import { gsap } from "../utils/gsapSetup";
import MagneticButton from "../components/MagneticButton/MagneticButton";
import RollText from "../components/RollText/RollText";
import { fadeInUp, viewportOptions } from "../utils/animations";
import { palette } from "../utils/themeColors";
import {
  servicesData,
  worksPrinciples,
  siteStats,
  profile,
} from "../../appData";
import Footer from "../components/Footer/Footer";
import ServicesList from "../components/ServicesList/ServicesList";
import ProcessTimeline from "../components/ProcessTimeline/ProcessTimeline";
import ServicesFAQ from "../components/ServicesFAQ/ServicesFAQ";
import "./worksPage.css";

const EASE = [0.22, 1, 0.36, 1];

const SERVICE_ACCENTS = [
  palette.violet400,
  palette.blue600,
  palette.amber400,
];
const SERVICES = servicesData.map((s, i) => ({
  ...s,
  accent: SERVICE_ACCENTS[i % SERVICE_ACCENTS.length],
}));


const RESULTS = [
  { value: siteStats.corporate.years, label: "Years engineering" },
  { value: String(siteStats.corporate.companies), label: "Companies" },
  { value: String(siteStats.corporate.clients), label: "Clients (corporate)" },
  { value: siteStats.freelance.projects, label: "Freelance projects" },
];

const PRINCIPLES = worksPrinciples;

const MARQUEE_ITEMS = servicesData.map((s) => s.title);
const SpotlightCard = ({
  children,
  className = "",
  accentColor = "#fff",
  style,
}) => {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`wp_spotlight_card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
      style={{
        "--spot-x": `${spot.x}px`,
        "--spot-y": `${spot.y}px`,
        "--spot-opacity": spot.visible ? 1 : 0,
        "--spot-color": accentColor,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const RevealLine = ({ children, delay = 0 }) => (
  <span className="wp_reveal">
    <motion.span
      className="wp_reveal-inner"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.95, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const StatBox = ({ value, label, delay = 0 }) => (
  <motion.div
    className="wp_stat"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOptions}
    transition={{ duration: 0.7, ease: EASE, delay }}
  >
    <span className="wp_stat_value">{value}</span>
    <span className="wp_stat_label">{label}</span>
  </motion.div>
);

const WorksPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const auroraScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 3),
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
    if (!heroTitleRef.current || !heroSubRef.current) return;
    const titleSplit = new SplitType(heroTitleRef.current, {
      types: "words,chars",
    });
    const subSplit = new SplitType(heroSubRef.current, { types: "words" });
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(titleSplit.chars, {
      opacity: 0,
      y: "110%",
      rotateX: 80,
      duration: 0.95,
      ease: "power4.out",
      stagger: 0.02,
    }).from(
      subSplit.words,
      { opacity: 0, y: 18, duration: 0.55, ease: "power3.out", stagger: 0.04 },
      "-=0.4",
    );
    return () => {
      titleSplit.revert();
      subSplit.revert();
    };
  }, []);

  return (
    <div className="wp_root">
      <section className="wp_hero" ref={heroRef}>
        <motion.div
          className="wp_hero_aurora"
          aria-hidden="true"
          style={{ y: auroraY, scale: auroraScale }}
        />

        <div className="wp_hero_inner">
          <div className="wp_hero_content">
            <motion.span
              className="section_label wp_label"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            >
              Independent studio, {profile.availability}
            </motion.span>

            <h1 className="wp_hero_title" ref={heroTitleRef}>
              Engineering that ships.
              <br />
              <em className="wp_hero_grad">Design that lasts.</em>
            </h1>

            <p className="wp_hero_sub" ref={heroSubRef}>
              I help product teams ship serious work. React frontends,
              micro-frontend architectures, and performance-tuned products
              built to outlast the quarter they were planned in.
            </p>

            <motion.div
              className="wp_hero_ctas"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
            >
              <MagneticButton strength={0.32}>
                <Link
                  to="/contact"
                  className="wp_cta_primary"
                  aria-label="Start a project"
                >
                  <RollText text="Start a project" />
                  <span className="wp_cta_arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.22}>
                <Link
                  to="/projects"
                  className="wp_cta_ghost"
                  aria-label="See case studies"
                >
                  <RollText text="See case studies" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="wp_stats_row"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
            }}
          >
            {RESULTS.map((s, i) => (
              <StatBox
                key={s.label}
                value={s.value}
                label={s.label}
                delay={0.1 * i}
              />
            ))}
          </motion.div>
        </div>

        <div className="wp_marquee_strip" aria-hidden="true">
          <div className="wp_marquee_inner">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (s, i) => (
                <span key={i} className="wp_marquee_item">
                  <span className="wp_marquee_dot">●</span> {s}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <ServicesList />
      <ProcessTimeline />

      <section className="wp_section wp_services_section">
        <div className="wp_container">
          <span className="wp_ghost_wm" aria-hidden="true">
            SERVICES
          </span>

          <motion.div
            className="wp_section_head"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              What I do
            </motion.span>
            <motion.h2 className="wp_section_title" variants={fadeInUp}>
              Three disciplines.
              <br />
              <em className="wp_grad">One opinionated builder.</em>
            </motion.h2>
            <motion.p className="wp_section_sub" variants={fadeInUp}>
              I don't sell hours. I sell shipped outcomes. Pick the surface
              area that fits your problem; I'll bring the rest.
            </motion.p>
          </motion.div>

          <motion.div
            className="wp_services_grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.number}
                className={`wp_svc_motion${svc.featured ? " wp_svc_motion--featured" : ""}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 56,
                    scale: 0.95,
                    filter: "blur(12px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.9, ease: EASE },
                  },
                }}
              >
                <SpotlightCard
                  accentColor={svc.accent}
                  className={`wp_svc_card${svc.featured ? " wp_svc_card--featured" : ""}`}
                  style={{ "--svc-color": svc.accent }}
                >
                  <div className="wp_svc_accent_bar" />

                  <div className="wp_svc_topline">
                    <span className="wp_svc_num">{svc.number}</span>
                    <span className="wp_svc_eyebrow">{svc.eyebrow}</span>
                  </div>

                  <div className="wp_svc_icon_wrap">
                    <i className={svc.icon} />
                  </div>

                  <h3 className="wp_svc_title">{svc.title}</h3>
                  <p className="wp_svc_summary">{svc.summary}</p>

                  <ul className="wp_svc_features">
                    {svc.features.map((f) => (
                      <li key={f}>
                        <span className="wp_svc_bullet" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="wp_svc_tags">
                    {svc.tags.map((t) => (
                      <span key={t} className="wp_svc_tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="wp_section wp_principles_section">
        <div className="wp_container">
          <span className="wp_ghost_wm wp_ghost_right" aria-hidden="true">
            PRINCIPLES
          </span>

          <motion.div
            className="wp_section_head wp_section_head_wide"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              How I think about the work
            </motion.span>
            <motion.h2 className="wp_section_title" variants={fadeInUp}>
              Three things I won't
              <br />
              <em className="wp_grad">compromise on.</em>
            </motion.h2>
          </motion.div>

          <motion.div
            className="wp_principles_grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
          >
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                className="wp_principle"
                variants={{
                  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.85, ease: EASE },
                  },
                }}
              >
                <span className="wp_principle_num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="wp_principle_title">{p.title}</h3>
                <p className="wp_principle_body">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="wp_cta_section">
        <div className="wp_cta_aurora" aria-hidden="true" />
        <motion.div
          className="wp_cta_inner"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            {profile.availability}
          </motion.span>
          <motion.h2 className="wp_cta_title" variants={fadeInUp}>
            Got a product worth
            <br />
            <em className="wp_grad">shipping right?</em>
          </motion.h2>
          <motion.p className="wp_cta_sub" variants={fadeInUp}>
            Tell me the shape of the room you're walking into: the timeline,
            the stakeholders, what's at stake. I'll come back within two
            business days.
          </motion.p>
          <motion.div className="wp_cta_btns" variants={fadeInUp}>
            <MagneticButton strength={0.32}>
              <Link
                to="/contact"
                className="wp_cta_primary"
                aria-label="Start a project"
              >
                <RollText text="Start a project" />
                <span className="wp_cta_arrow" aria-hidden="true">
                  <i className="fas fa-arrow-right" />
                </span>
              </Link>
            </MagneticButton>
            <a href={`mailto:${profile.email}`} className="wp_cta_email">
              {profile.email}
            </a>
          </motion.div>
        </motion.div>
      </section>

      <ServicesFAQ />

      <Footer />
    </div>
  );
};

export default WorksPage;
