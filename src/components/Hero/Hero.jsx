import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import TypewriteComponent from "typewriter-effect";
import { socialIconsData } from "../../../appData";
import "./hero.css";
import heroImage from "/assets/hero/hero.png";

/* ── per-char reveal ── */
const Word = ({ text, className, delay = 0 }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 60, skewY: 8 }}
        animate={{ opacity: 1, y: 0, skewY: 0 }}
        transition={{
          delay: delay + i * 0.048,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ display: "inline-block" }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const TECHS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind",
  "Redux",
  "MongoDB",
  "GraphQL",
  "AWS",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "Tailwind",
  "Redux",
  "MongoDB",
  "GraphQL",
  "AWS",
];

const Hero = () => {
  /* 3-D tilt */
  const sceneRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 24 });
  const sy = useSpring(my, { stiffness: 90, damping: 24 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  const onMove = (e) => {
    if (!sceneRef.current) return;
    const { left, top, width, height } =
      sceneRef.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width - 0.5);
    my.set((e.clientY - top) / height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="hero_section" id="hero">
      {/* ── background ── */}
      <div className="h_dot_grid" aria-hidden="true" />
      <div className="h_orb h_o1" aria-hidden="true" />
      <div className="h_orb h_o2" aria-hidden="true" />
      <div className="h_noise" aria-hidden="true" />
      <span className="h_wm" aria-hidden="true">
        ENGINEER
      </span>

      {/* ══ BODY — 1fr row ══ */}
      <div className="h_body">
        <div className="h_inner">
          <div className="h_grid">
            {/* ─── LEFT ─── */}
            <div className="h_left">
              {/* availability */}
              <motion.span
                className="h_avail"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
              >
                <span className="avail_ring" aria-hidden="true" />
                <span className="avail_dot" aria-hidden="true" />
                Available for opportunities
              </motion.span>

              {/* name */}
              <h1 className="h_name">
                <span className="nl nl1">
                  <Word text="RIYAZ" className="w_outline" delay={0.12} />
                </span>
                <span className="nl nl2">
                  <Word text="AKHTAR" className="w_fill" delay={0.26} />
                </span>
              </h1>

              {/* code-tag role */}
              <motion.div
                className="h_code_role"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.88,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="cr_bracket">&lt;</span>
                <span className="cr_text">LeadEngineer</span>
                <span className="cr_bracket">&nbsp;/&gt;</span>
              </motion.div>

              {/* typewriter */}
              <motion.div
                className="h_tw"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.0,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="tw_pre">I build</span>
                <span className="tw_val">
                  <TypewriteComponent
                    options={{
                      strings: [
                        "Frontend Experiences",
                        "UI / UX Designs",
                        "Full‑Stack Apps",
                        "Scalable Products",
                      ],
                      delay: 52,
                      deleteSpeed: 26,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </motion.div>

              {/* CTA row */}
              <motion.div
                className="h_cta_row"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.a
                  href="#contact"
                  className="btn btn_primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Connect <i className="fas fa-arrow-right" />
                </motion.a>
                <motion.a
                  href="/assets/Riyaz_Akhtar_Resume.pdf"
                  download
                  className="btn btn_outline"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download CV <i className="fas fa-download" />
                </motion.a>
              </motion.div>

              {/* social + location */}
              <motion.div
                className="h_social_row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {socialIconsData.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h_soc"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.07 }}
                  >
                    <i className={s.class} />
                  </motion.a>
                ))}
                <span className="h_soc_sep" aria-hidden="true" />
                <span className="h_loc">
                  <i className="fas fa-map-pin" aria-hidden="true" />
                  Gurgaon, India
                </span>
              </motion.div>
            </div>

            {/* ─── RIGHT ─── */}
            <div className="h_right">
              <motion.div
                className="h_img_scene"
                ref={sceneRef}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  rotateX: rotX,
                  rotateY: rotY,
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* glow */}
                <span className="img_glow ig1" aria-hidden="true" />
                <span className="img_glow ig2" aria-hidden="true" />

                {/* photo */}
                <div className="img_frame">
                  <img src={heroImage} alt="Riyaz Akhtar" />
                  <div className="img_sheen" aria-hidden="true" />
                </div>

                {/* floating card */}
                <motion.div
                  className="img_card"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.15,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="ic_num">
                    8<span>+</span>
                  </span>
                  <span className="ic_info">
                    <span className="ic_title">Years of</span>
                    <span className="ic_sub">Experience</span>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          className="h_scroll"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="sc_mouse">
            <span className="sc_wheel" />
          </span>
          <span className="sc_lbl">Scroll</span>
        </motion.a>
      </div>

      {/* ══ TICKER — auto row (always inside 100vh) ══ */}
      <div className="h_ticker" aria-hidden="true">
        <div className="h_ticker_track">
          {TECHS.map((t, i) => (
            <span key={i} className="h_tick_item">
              <span className="h_tick_dot">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
