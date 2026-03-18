import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import "./qualifications.css";

const eduData = [
  {
    id: 0,
    title: "B.Tech. in Computer Science",
    org: "Lovely Professional University",
    year: "2013 – 2017",
    field: "Computer Science & Engineering",
  },
  {
    id: 1,
    title: "Senior Secondary (XII)",
    org: "Sai Dass Senior Secondary",
    year: "2012 – 2013",
    field: "Science",
  },
  {
    id: 2,
    title: "Higher Secondary (X)",
    org: "Bhartiya Bal Vidhya Mandir",
    year: "2010 – 2011",
    field: "General",
  },
];

const workData = [
  {
    id: 0,
    title: "Lead Experience Engineer",
    org: "Publicis Sapient",
    year: "2024 – Present",
    current: true,
    tag: "Leadership",
  },
  {
    id: 1,
    title: "Senior Software Engineer",
    org: "Optum (UHG)",
    year: "2021 – 2024",
    tag: "Full-Stack",
  },
  {
    id: 2,
    title: "Senior Business Analyst",
    org: "Evalueserve",
    year: "2020 – 2021",
    tag: "Analytics",
  },
  {
    id: 3,
    title: "Software Engineer — Frontend",
    org: "Tech Mahindra",
    year: "2018 – 2020",
    tag: "Frontend",
  },
  {
    id: 4,
    title: "Technical Engineer",
    org: "Tele-Performance",
    year: "2017 – 2018",
    tag: "Support",
  },
];

/* ── Animated spine line ── */
const Spine = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.span
      ref={ref}
      className="tl_spine"
      initial={{ scaleY: 0 }}
      animate={inView ? { scaleY: 1 } : {}}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      style={{ transformOrigin: "top" }}
      aria-hidden="true"
    />
  );
};

/* ── Single timeline card ── */
const TLItem = ({ item, index, isEdu }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className={`tl_item${item.current ? " tl_current" : ""}`}
      initial={{ opacity: 0, x: isEdu ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      {/* dot */}
      <div className="tl_dot_wrap">
        <span className="tl_dot">
          <span className="tl_dot_inner" />
        </span>
        {item.current && <span className="tl_dot_ring" aria-hidden="true" />}
      </div>

      {/* card */}
      <div className="tl_card">
        {/* top row */}
        <div className="tl_card_top">
          <span className="tl_year">
            <i className="fas fa-calendar-alt" aria-hidden="true" />
            {item.year}
          </span>
          {item.current
            ? <span className="tl_now"><span className="tl_now_dot" />Now</span>
            : <span className="tl_tag">{item.tag || item.field}</span>
          }
        </div>

        {/* title */}
        <h3 className="tl_title">{item.title}</h3>

        {/* org */}
        <span className="tl_org">
          <i className={isEdu ? "fas fa-university" : "fas fa-building"} aria-hidden="true" />
          {item.org}
        </span>
      </div>
    </motion.div>
  );
};

/* ── Column header ── */
const ColHead = ({ icon, label, count, accent }) => (
  <div className={`qcol_head${accent ? " qcol_head_accent" : ""}`}>
    <span className="qcol_icon">
      <i className={icon} />
    </span>
    <span className="qcol_label">{label}</span>
    <span className="qcol_count">{count} entries</span>
  </div>
);

/* ── Main component ── */
const Qualifications = () => (
  <section className="qualification even" id="qualification">
    <div className="container">

      {/* ghost watermark */}
      <span className="qual_wm" aria-hidden="true">CAREER</span>

      {/* ── header ── */}
      <motion.div
        className="qual_header"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.span className="section_label" variants={fadeInUp}>Background</motion.span>
        <motion.h2 className="qual_title" variants={fadeInUp}>
          Career<br />
          <span className="qual_title_grad">Journey.</span>
        </motion.h2>
        <motion.p className="qual_subtitle" variants={fadeInUp}>
          {workData.length} roles across product companies, agencies, and consulting firms —
          building for scale since 2017.
        </motion.p>
      </motion.div>

      {/* ── stats strip ── */}
      <motion.div
        className="qual_stats"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {[
          { num: "6+",               label: "Years in Tech"     },
          { num: workData.length,    label: "Companies"         },
          { num: eduData.length,     label: "Qualifications"    },
          { num: "2024",             label: "Currently At"      },
        ].map((s, i, arr) => (
          <React.Fragment key={i}>
            <div className="qstat">
              <span className="qstat_num">{s.num}</span>
              <span className="qstat_label">{s.label}</span>
            </div>
            {i < arr.length - 1 && <span className="qstat_sep" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </motion.div>

      {/* ── dual timeline grid ── */}
      <div className="qual_grid">

        {/* ─ Education ─ */}
        <motion.div
          className="qual_col"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <ColHead icon="fas fa-graduation-cap" label="Education" count={eduData.length} />
          <div className="tl_wrap">
            <Spine />
            {eduData.map((item, i) => (
              <TLItem key={item.id} item={item} index={i} isEdu={true} />
            ))}
          </div>
        </motion.div>

        {/* ─ Experience ─ */}
        <motion.div
          className="qual_col"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <ColHead icon="fas fa-briefcase" label="Experience" count={workData.length} accent />
          <div className="tl_wrap">
            <Spine />
            {workData.map((item, i) => (
              <TLItem key={item.id} item={item} index={i} isEdu={false} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Qualifications;
