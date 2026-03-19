import { useRef } from "react";
import "./pageHero.css";

import { motion, useInView } from "framer-motion";

import { fadeInUp, stagger, scaleIn } from "../../../utils/animations";

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

const PageHero = ({ heroData }) => {
  return (
    <section className="sp_hero">
      <div className="sp_hero_inner">
        <motion.div
          className="sp_hero_content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="sp_hero_title" variants={fadeInUp}>
            {heroData.title1}
            <br />
            <span className="sp_hero_grad">{heroData.title2}</span>
          </motion.h1>

          <motion.p className="sp_hero_sub" variants={fadeInUp}>
            {heroData.desc}
          </motion.p>
        </motion.div>

        <motion.div
          className="sp_stats_row"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {heroData.details.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="sp_scroll_cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="sp_scroll_wheel">
          <span />
        </span>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default PageHero;
