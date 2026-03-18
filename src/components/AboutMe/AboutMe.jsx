import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight, stagger, scaleIn, viewportOptions } from "../../utils/animations";
import "./aboutMe.css";
import aboutImage from "/assets/about/about_pic.jpg";

/* ── Count-up triggered by visibility ── */
const CountUp = ({ to, suffix = "", visible }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = to / 32;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(iv); }
      else setVal(Math.floor(cur));
    }, 1000 / 32);
    return () => clearInterval(iv);
  }, [visible, to]);
  return <>{val}{suffix}</>;
};

const stats = [
  { to: 8,  suffix: "+", label: "Years of Experience" },
  { to: 60, suffix: "+", label: "Projects Delivered"  },
  { to: 5,  suffix: "",  label: "Companies Worked"    },
];

const traits = [
  { icon: "fas fa-bolt",        label: "Performance First"  },
  { icon: "fas fa-layer-group", label: "Design Systems"     },
  { icon: "fas fa-code-branch", label: "Clean Architecture" },
  { icon: "fas fa-users",       label: "Team Leadership"    },
];

const AboutMe = () => {
  const statsRef   = useRef(null);
  const statsVisible = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="about even" id="about">
      <div className="container">
        <div className="about_grid">

          {/* ═══════════ LEFT — VISUAL ═══════════ */}
          <motion.div
            className="about_visual"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Large ghost number */}
            <span className="about_ghost_num" aria-hidden="true">06</span>

            {/* Dot grid */}
            <div className="about_dot_grid" aria-hidden="true" />

            {/* Photo stack */}
            <div className="about_photo_stack">
              {/* Offset card 2 (back) */}
              <div className="stack_card c2" />
              {/* Offset card 1 (mid) */}
              <div className="stack_card c1" />

              {/* Main photo */}
              <div className="about_photo">
                <img src={aboutImage} alt="Riyaz Akhtar" />
                {/* Bottom gradient fade */}
                <div className="photo_fade" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="photo_badge badge_role"
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="badge_icon"><i className="fas fa-briefcase" /></span>
                <div className="badge_body">
                  <span className="badge_title">Publicis Sapient</span>
                  <span className="badge_sub">Lead Engineer</span>
                </div>
              </motion.div>

              <motion.div
                className="photo_badge badge_exp"
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="exp_num">8+</span>
                <span className="exp_lbl">Yrs</span>
              </motion.div>
            </div>

            {/* Tech stack chips */}
            <motion.div
              className="about_stack"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {["React", "Next.js", "TypeScript", "Node.js", "AWS"].map((t, i) => (
                <motion.span key={i} className="stack_chip" variants={scaleIn}>
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════ RIGHT — CONTENT ═══════════ */}
          <motion.div
            className="about_content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Watermark */}
            <span className="about_watermark" aria-hidden="true">ABOUT</span>

            {/* Section header */}
            <motion.div className="about_header" variants={fadeInRight}>
              <span className="section_label">Who I Am</span>
              <h2 className="about_title">
                The Person<br />
                <span className="about_title_grad">Behind the Code.</span>
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.div className="about_bio" variants={fadeInRight}>
              <span className="bio_quote_mark">"</span>
              <p className="bio_text">
                I'm a{" "}
                <span className="hl">Senior Software Engineer</span>{" "}
                specializing in building exceptional digital experiences.
                With over 8 years in the industry, I bring deep expertise in{" "}
                <span className="hl">frontend architecture</span>,{" "}
                <span className="hl">design systems</span>, and full-stack
                development to every project I touch.
              </p>
            </motion.div>

            <motion.p className="bio_text bio_text_sm" variants={fadeInRight}>
              Currently leading frontend initiatives at{" "}
              <span className="hl">Publicis Sapient</span> — delivering
              enterprise-scale digital experiences with a focus on performance,
              accessibility, and scalable component architecture.
            </motion.p>

            {/* Traits */}
            <motion.div className="about_traits" variants={stagger}>
              {traits.map((t, i) => (
                <motion.div key={i} className="trait_chip" variants={scaleIn} whileHover={{ y: -3 }}>
                  <span className="trait_icon"><i className={t.icon} /></span>
                  <span className="trait_label">{t.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="about_stats_row"
              ref={statsRef}
              variants={fadeInRight}
            >
              {stats.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="astat">
                    <span className="astat_num">
                      <CountUp to={s.to} suffix={s.suffix} visible={statsVisible} />
                    </span>
                    <span className="astat_lbl">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <span className="astat_sep" />}
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInRight}>
              <motion.a
                href="/assets/Riyaz_Akhtar_Resume.pdf"
                download
                className="btn btn_primary about_cta"
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
