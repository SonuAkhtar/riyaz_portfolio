import { motion } from "framer-motion";
import { experienceData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./testimonials.css";

const yearRange = (period) => period.match(/\d{4}|Present/g).join(" to ");

const WorkedWith = () => (
  <section className="testimonials_root">
    <div className="section_inner">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked."
        aside="From Amazon in 2017 to Publicis Sapient today."
      />

      <motion.ol
        className="ww_timeline"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        {experienceData.map((w) => {
          const { current } = w;
          return (
            <motion.li
              key={w.id}
              className={`ww_entry${current ? " ww_entry-current" : ""}`}
              variants={fadeInUp}
            >
              <span className="ww_when">{yearRange(w.period)}</span>
              <span className="ww_rail" aria-hidden="true">
                <span className="ww_node" />
              </span>
              <div className="ww_body">
                <span className="ww_logo">
                  <img
                    src={w.logo}
                    alt={`${w.company} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="ww_text">
                  <span className="ww_company">{w.company}</span>
                  <span className="ww_role">{w.title}</span>
                </span>
                {current && <span className="ww_badge">Current</span>}
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  </section>
);

export default WorkedWith;
