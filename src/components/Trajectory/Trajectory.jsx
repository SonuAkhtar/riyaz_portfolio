import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData, educationData } from "../../../appData";
import "./trajectory.css";

const eduEntries = educationData.map((e) => ({
  period: e.period,
  primary: e.title,
  secondary: e.org,
  highlights: e.field ? [e.field] : [],
}));

const workEntries = experienceData.map((e) => ({
  period: e.period,
  primary: e.title,
  secondary: e.company,
  location: e.location,
  current: e.current,
  highlights: e.tag ? [e.tag] : [],
}));

const Timeline = ({ label, entries }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 25%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="trajectory_group">
      <div className="trajectory_group-head">
        <span className="trajectory_group-label">
          <span /> {label}
        </span>
        <span className="trajectory_group-count">
          {String(entries.length).padStart(2, "0")} entries
        </span>
      </div>

      <div ref={ref} className="trajectory_timeline">
        <div className="trajectory_timeline-rail">
          <motion.span style={{ scaleY: lineScale }} />
        </div>

        <ol className="trajectory_timeline-list">
          {entries.map((item, i) => (
            <motion.li
              key={item.period + item.secondary}
              className="trajectory_item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.85,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="trajectory_item-dot" />
              <div className="trajectory_item-period">{item.period}</div>
              <div className="trajectory_item-body">
                <h3 className="trajectory_item-role">{item.primary}</h3>
                <div className="trajectory_item-meta">
                  <span>{item.secondary}</span>
                  {item.location && (
                    <span className="trajectory_item-loc">
                      <i className="fas fa-map-pin" aria-hidden="true" />
                      {item.location}
                    </span>
                  )}
                  {item.current && (
                    <span className="trajectory_item-now">
                      <span className="trajectory_item-now-dot" />
                      Now
                    </span>
                  )}
                </div>
                {item.highlights.length > 0 && (
                  <ul className="trajectory_item-highlights">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const Trajectory = () => (
  <section className="trajectory_root" id="trajectory">
    <div className="trajectory_inner">
      <header className="trajectory_header">
        <span className="trajectory_eyebrow">
          <span /> Trajectory
        </span>
        <motion.h2
          className="trajectory_title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          A practice shaped
          <br />
          <span className="trajectory_title-soft">by study and work.</span>
        </motion.h2>
      </header>

      <Timeline label="Education" entries={eduEntries} />
      <Timeline label="Experience" entries={workEntries} />
    </div>
  </section>
);

export default Trajectory;
