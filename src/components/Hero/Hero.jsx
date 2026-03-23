import { useRef } from "react";
import "./hero.css";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import TypewriteComponent from "typewriter-effect";

import heroImage from "/assets/hero/hero.png";
import { homeHeroTypewriter, socialIconsData, appTechs, appStats } from "../../../appData";
import Available from "../common/Available/Available";

const Word = ({ text, className, delay = 0 }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 80, skewY: 10 }}
        animate={{ opacity: 1, y: 0, skewY: 0 }}
        transition={{
          delay: delay + i * 0.05,
          duration: 0.72,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ display: "inline-block" }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const StatChip = ({ num, label, modifier, delay }) => (
  <motion.div
    className={`hero__stat hero__stat--${modifier}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="hero__stat-num">{num}</span>
    <span className="hero__stat-label">{label}</span>
  </motion.div>
);

const Hero = () => {
  const sceneRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 24 });
  const sy = useSpring(my, { stiffness: 90, damping: 24 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  const onMove = (e) => {
    if (!sceneRef.current) return;
    const { left, top, width, height } = sceneRef.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width - 0.5);
    my.set((e.clientY - top) / height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-grid" />
        <div className="hero__bg-noise" />
        <div className="hero__bg-vignette" />
      </div>

      <span className="hero__ghost" aria-hidden="true">ENGINEER</span>

      <div className="hero__body">
        <div className="hero__inner">
          <div className="hero__grid">
            <div className="hero__left">
              <Available />

              <h1 className="hero__name">
                <span className="hero__name-line">
                  <Word text="RIYAZ" className="hero__name-outline" delay={0.1} />
                </span>
                <span className="hero__name-line">
                  <Word text="AKHTAR" className="hero__name-fill" delay={0.22} />
                </span>
              </h1>

              <motion.div
                className="hero__role"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.88, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero__role-bracket">&lt;</span>
                <span className="hero__role-text">Lead Engineer</span>
                <span className="hero__role-bracket">&nbsp;/&gt;</span>
              </motion.div>

              <motion.div
                className="hero__typewriter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero__typewriter-pre">I build</span>
                <span className="hero__typewriter-val">
                  <TypewriteComponent
                    options={{
                      strings: homeHeroTypewriter,
                      delay: 52,
                      deleteSpeed: 26,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </motion.div>

              <motion.div
                className="hero__actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a
                  href="#contact"
                  className="btn btn--primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Connect <i className="fas fa-arrow-right" />
                </motion.a>
                <motion.a
                  href="/assets/Riyaz_Akhtar_Resume.pdf"
                  download
                  className="btn btn--outline"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download CV <i className="fas fa-download" />
                </motion.a>
              </motion.div>

              <motion.div
                className="hero__social"
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
                    className="hero__social-link"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.07 }}
                    aria-label={s.label}
                  >
                    <i className={s.class} />
                  </motion.a>
                ))}
                <span className="hero__social-sep" aria-hidden="true" />
                <span className="hero__location">
                  <i className="fas fa-map-pin" aria-hidden="true" />
                  Gurgaon, India
                </span>
              </motion.div>
            </div>

            <div className="hero__right">
              <motion.div
                className="hero__visual"
                ref={sceneRef}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  rotateX: rotX,
                  rotateY: rotY,
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="hero__image-glow hero__image-glow--1" aria-hidden="true" />
                <span className="hero__image-glow hero__image-glow--2" aria-hidden="true" />

                <div className="hero__image-frame">
                  <img src={heroImage} alt="Riyaz Akhtar" />
                  <div className="hero__image-sheen" aria-hidden="true" />
                </div>

                <StatChip
                  num={`${appStats.years}+`}
                  label="Years Exp."
                  modifier="exp"
                  delay={1.1}
                />
                <StatChip
                  num={`${appStats.projects}+`}
                  label="Projects"
                  modifier="projects"
                  delay={1.2}
                />
                <StatChip
                  num={appStats.companies}
                  label="Companies"
                  modifier="companies"
                  delay={1.3}
                />
                <StatChip
                  num={appStats.rating}
                  label="Rating ★"
                  modifier="rating"
                  delay={1.4}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.a
          href="#about"
          className="hero__scroll"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <span className="hero__scroll-mouse">
            <span className="hero__scroll-wheel" />
          </span>
          <span className="hero__scroll-label">Scroll</span>
        </motion.a>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...appTechs, ...appTechs].map((t, i) => (
            <span key={i} className="hero__ticker-item">
              <span className="hero__ticker-dot">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
