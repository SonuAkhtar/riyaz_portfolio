import { useRef } from "react";
import "./career.css";

import { motion, useInView } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
  viewportOptions,
} from "../../utils/animations";

import { homeCareerData } from "../../../appData";

const Spine = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.span
      ref={ref}
      className="career__spine"
      initial={{ scaleY: 0 }}
      animate={inView ? { scaleY: 1 } : {}}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      style={{ transformOrigin: "top" }}
      aria-hidden="true"
    />
  );
};

const TimelineItem = ({ item, index, isEdu }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className={`career__item${item.current ? " career__item--current" : ""}`}
      initial={{ opacity: 0, x: isEdu ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <div className="career__dot-wrap">
        <span className="career__dot">
          <span className="career__dot-inner" />
        </span>
        {item.current && <span className="career__dot-ring" aria-hidden="true" />}
      </div>

      <div className="career__card">
        <div className="career__card-top">
          <span className="career__year">
            <i className="fas fa-calendar-days" aria-hidden="true" />
            {item.year}
          </span>
          {item.current ? (
            <span className="career__now">
              <span className="career__now-dot" />
              Now
            </span>
          ) : (
            <span className="career__tag">{item.tag || item.field}</span>
          )}
        </div>

        <h3 className="career__card-title">{item.title}</h3>

        <span className="career__org">
          <i
            className={isEdu ? "fas fa-building-columns" : "fas fa-building"}
            aria-hidden="true"
          />
          {item.org}
        </span>
      </div>
    </motion.div>
  );
};

const ColHead = ({ icon, label, count, accent }) => (
  <div className={`career__col-head${accent ? " career__col-head--accent" : ""}`}>
    <span className="career__col-icon">
      <i className={icon} />
    </span>
    <span className="career__col-label">{label}</span>
    <span className="career__col-count">{count} entries</span>
  </div>
);

const Career = () => (
  <section className="qualification" id="qualification">
    <div className="container">
      <motion.div
        className="career__header"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.span className="section_label" variants={fadeInUp}>
          Background
        </motion.span>
        <motion.h2 className="career__title" variants={fadeInUp}>
          Career
          <br />
          <span className="career__title-grad">Journey.</span>
        </motion.h2>
        <motion.p className="career__subtitle" variants={fadeInUp}>
          {homeCareerData.companies.length} roles across product companies,
          building for scale since 2017.
        </motion.p>
      </motion.div>


      <div className="career__grid">
        <motion.div
          className="career__col"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <ColHead
            icon="fas fa-briefcase"
            label="Experience"
            count={homeCareerData.companies.length}
            accent
          />
          <div className="career__timeline">
            <Spine />
            {homeCareerData.companies.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} isEdu={false} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="career__col"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <ColHead
            icon="fas fa-graduation-cap"
            label="Education"
            count={homeCareerData.education.length}
          />
          <div className="career__timeline">
            <Spine />
            {homeCareerData.education.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} isEdu={true} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Career;
