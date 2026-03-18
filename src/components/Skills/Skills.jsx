import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillsData } from "../../../appData";
import { fadeInLeft, fadeInRight, fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import "./skills.css";

/* ── Level helper ── */
const getLevel = (n) => {
  if (n >= 80) return { label: "Expert",     cls: "expert"     };
  if (n >= 65) return { label: "Proficient", cls: "proficient" };
  if (n >= 45) return { label: "Familiar",   cls: "familiar"   };
  return             { label: "Learning",   cls: "learning"   };
};

/* ── Level fill colors ── */
const LEVEL_COLORS = {
  expert:     { fill: "#5bdc8e", glow: "rgba(91,220,142,0.4)",  bg: "rgba(91,220,142,0.1)"  },
  proficient: { fill: "#5b8dee", glow: "rgba(91,141,238,0.4)",  bg: "rgba(91,141,238,0.1)"  },
  familiar:   { fill: "#f0a04b", glow: "rgba(240,160,75,0.4)",  bg: "rgba(240,160,75,0.1)"  },
  learning:   { fill: "#4b5e75", glow: "rgba(75,94,117,0.25)",  bg: "rgba(75,94,117,0.08)"  },
};

/* ── Per-category accent colors ── */
const CAT_COLORS = ["#5b8dee", "#10b981", "#a855f7", "#f59e0b"];

/* ── Horizontal skill bar ── */
const SkillBar = ({ name, icon, number, delay, catColor }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const level  = getLevel(Number(number));
  const lc     = LEVEL_COLORS[level.cls];
  const pct    = Number(number);

  return (
    <motion.div
      ref={ref}
      className="hsk_bar_item"
      initial={{ opacity: 0, x: 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ x: 5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      {/* Icon */}
      <div
        className="hsk_bar_icon"
        style={{ color: catColor, background: `${catColor}14`, borderColor: `${catColor}35` }}
      >
        <i className={icon} />
      </div>

      {/* Name + bar */}
      <div className="hsk_bar_body">
        <div className="hsk_bar_meta">
          <span className="hsk_bar_name">{name}</span>
          <span className="hsk_bar_pct" style={{ color: lc.fill }}>{pct}%</span>
        </div>
        <div className="hsk_bar_track">
          <motion.div
            className="hsk_bar_fill"
            style={{
              background: `linear-gradient(90deg, ${lc.fill}bb, ${lc.fill})`,
              boxShadow: `0 0 12px ${lc.glow}`,
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${pct}%` } : { width: 0 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: delay + 0.18 }}
          />
          <span className="hsk_bar_tick" style={{ left: "25%" }} />
          <span className="hsk_bar_tick" style={{ left: "50%" }} />
          <span className="hsk_bar_tick" style={{ left: "75%" }} />
        </div>
      </div>

      {/* Level badge */}
      <span
        className="hsk_bar_lvl"
        style={{ color: lc.fill, borderColor: `${lc.fill}45`, background: lc.bg }}
      >
        {level.label}
      </span>
    </motion.div>
  );
};

/* ── Panel transition variants ── */
const panelVariants = {
  enter:  { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
const Skills = () => {
  const [active, setActive] = useState(0);
  const cat      = skillsData[active];
  const catColor = CAT_COLORS[active];

  return (
    <section className="skills" id="skills">
      <div className="container hsk_container">

        {/* Ghost watermark */}
        <span className="hsk_ghost_wm" aria-hidden="true">SKILLS</span>

        {/* ── Stats strip ── */}
        <motion.div
          className="hsk_stats_strip"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {[
            { val: "8+",  lbl: "Years Exp."      },
            { val: "15+", lbl: "Technologies"    },
            { val: "4",   lbl: "Skill Domains"   },
            { val: "5",   lbl: "Certifications"  },
          ].map((s, i) => (
            <motion.div key={s.lbl} className="hsk_stat" variants={fadeInUp}>
              <span className="hsk_stat_val">{s.val}</span>
              <span className="hsk_stat_lbl">{s.lbl}</span>
              {i < 3 && <span className="hsk_stat_sep" aria-hidden="true" />}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Main grid ── */}
        <div className="hsk_main_grid">

          {/* LEFT — title + vertical tabs */}
          <motion.div
            className="hsk_left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Section heading */}
            <div className="hsk_title_block">
              <span className="section_label">Expertise</span>
              <h2 className="skills_title">
                Technical<br />
                <span className="skills_title_grad">Expertise.</span>
              </h2>
              <p className="skills_subtitle">
                Core competencies built through years of shipping real production systems.
              </p>
            </div>

            {/* Vertical category tabs */}
            <div className="hsk_cat_tabs">
              {skillsData.map((c, i) => (
                <button
                  key={c.id}
                  className={`hsk_cat_tab${active === i ? " hsk_active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {/* Active accent bar */}
                  {active === i && (
                    <motion.span
                      className="hsk_tab_accent_bar"
                      layoutId="hsk_tab_accent"
                      style={{ background: CAT_COLORS[i] }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  {/* Icon */}
                  <span
                    className="hsk_tab_icon"
                    style={active === i ? {
                      color: CAT_COLORS[i],
                      background: `${CAT_COLORS[i]}18`,
                      borderColor: `${CAT_COLORS[i]}40`,
                    } : {}}
                  >
                    <i className={c.icon} />
                  </span>

                  {/* Labels */}
                  <span className="hsk_tab_labels">
                    <span className="hsk_tab_name">{c.title}</span>
                    <span className="hsk_tab_sub">{c.subtitle}</span>
                  </span>

                  {/* Count */}
                  <span
                    className="hsk_tab_count"
                    style={active === i ? {
                      color: CAT_COLORS[i],
                      background: `${CAT_COLORS[i]}18`,
                      borderColor: `${CAT_COLORS[i]}40`,
                    } : {}}
                  >
                    {c.data.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Active category blurb */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className="hsk_cat_blurb"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.32 } }}
                exit={{ opacity: 0, y: -5, transition: { duration: 0.18 } }}
              >
                <span className="hsk_cat_blurb_dot" style={{ background: catColor }} />
                {cat.data.length} skills · {cat.subtitle}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — animated bars panel */}
          <motion.div
            className="hsk_right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Panel category header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`hdr-${active}`}
                className="hsk_panel_hdr"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.32 } }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.18 } }}
              >
                <span className="hsk_panel_cat" style={{ color: catColor }}>
                  <i className={cat.icon} />
                  {cat.title}
                </span>
                <div
                  className="hsk_panel_line"
                  style={{ background: `linear-gradient(90deg, ${catColor}80, transparent)` }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Bars */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="hsk_bars_list"
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {cat.data.map((item, i) => (
                  <SkillBar
                    key={`${active}-${item.id}`}
                    name={item.name}
                    icon={item.icon}
                    number={item.number}
                    delay={i * 0.055}
                    catColor={catColor}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

        {/* ── Legend ── */}
        <motion.div
          className="skills_legend"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {[
            { cls: "expert",     label: "Expert ≥ 80%"     },
            { cls: "proficient", label: "Proficient ≥ 65%" },
            { cls: "familiar",   label: "Familiar ≥ 45%"   },
            { cls: "learning",   label: "Learning"          },
          ].map((l) => (
            <span key={l.cls} className={`leg_item li_${l.cls}`}>
              <span className="leg_dot" />
              {l.label}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
