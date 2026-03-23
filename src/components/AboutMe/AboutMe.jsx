import React, { useEffect, useRef, useState } from "react";
import "./aboutMe.css";

import { motion, useInView } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  stagger,
  scaleIn,
  viewportOptions,
} from "../../utils/animations";

import { homeAboutData } from "../../../appData";
import aboutImage from "/assets/about/about_pic.jpg";

const CountUp = ({ to, suffix = "", visible }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = to / 32;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) {
        setVal(to);
        clearInterval(iv);
      } else setVal(Math.floor(cur));
    }, 1000 / 32);
    return () => clearInterval(iv);
  }, [visible, to]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
};

const AboutMe = () => {
  const statsRef = useRef(null);
  const statsVisible = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="about even" id="about">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__visual"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="about__dot-grid" aria-hidden="true" />

            <div className="about__photo-stack">
              <div className="about__stack-card about__stack-card--back" />
              <div className="about__stack-card about__stack-card--mid" />

              <div className="about__photo">
                <img src={aboutImage} alt="Riyaz Akhtar" />
                <div className="about__photo-fade" />
              </div>

              <motion.div
                className="about__badge about__badge--role"
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="about__badge-icon">
                  <i className="fas fa-briefcase" />
                </span>
                <div className="about__badge-body">
                  <span className="about__badge-title">Publicis Sapient</span>
                  <span className="about__badge-sub">Lead Engineer</span>
                </div>
              </motion.div>

              <motion.div
                className="about__badge about__badge--exp"
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="about__badge-exp-num">8+</span>
                <span className="about__badge-exp-lbl">Yrs</span>
              </motion.div>
            </div>

            <motion.div
              className="about__tech-chips"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {homeAboutData.tech.map((t, i) => (
                <motion.span key={i} className="about__tech-chip" variants={scaleIn}>
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about__content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div className="about__header" variants={fadeInRight}>
              <span className="section_label">Who I Am</span>
              <h2 className="about__title">
                Behind the
                <br />
                <span className="about__title-grad">Code.</span>
              </h2>
            </motion.div>

            <motion.div className="about__bio" variants={fadeInRight}>
              <span className="about__bio-quote" aria-hidden="true">"</span>
              <p className="about__bio-text">
                I'm a <span className="hl">Senior Software Engineer</span>{" "}
                specialising in building exceptional digital experiences. With
                over 8 years in the industry, I bring deep expertise in{" "}
                <span className="hl">frontend architecture</span>,{" "}
                <span className="hl">design systems</span>, and full-stack
                development.
              </p>
            </motion.div>

            <motion.p className="about__bio-text about__bio-text--accent" variants={fadeInRight}>
              Currently leading frontend initiatives at{" "}
              <span className="hl">Publicis Sapient</span> — delivering
              enterprise-scale digital experiences.
            </motion.p>

            <motion.div className="about__traits" variants={stagger}>
              {homeAboutData.traits.map((t, i) => (
                <motion.div
                  key={i}
                  className="about__trait"
                  variants={scaleIn}
                  whileHover={{ y: -3 }}
                >
                  <span className="about__trait-icon">
                    <i className={t.icon} />
                  </span>
                  <span className="about__trait-label">{t.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="about__stats"
              ref={statsRef}
              variants={fadeInRight}
            >
              {homeAboutData.stats.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="about__stat">
                    <span className="about__stat-num">
                      <CountUp to={s.to} suffix={s.suffix} visible={statsVisible} />
                    </span>
                    <span className="about__stat-label">{s.label}</span>
                  </div>
                  {i < homeAboutData.stats.length - 1 && (
                    <span className="about__stat-sep" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div variants={fadeInRight}>
              <motion.a
                href="/assets/Riyaz_Akhtar_Resume.pdf"
                download
                className="btn btn--primary about__cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Résumé <i className="fas fa-download" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
