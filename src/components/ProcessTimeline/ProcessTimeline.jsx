import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./processTimeline.css";

const ProcessTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="process_root">
      <div className="section_inner">
        <SectionHeader eyebrow="Process" title="How a project runs." />

        <div ref={ref} className="process_track">
          <span className="process_rail" aria-hidden="true">
            <motion.span className="process_rail-fill" style={{ scaleX: fill }} />
          </span>

          <motion.ol
            className="process_steps"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={stagger}
          >
            {processData.map((step) => (
              <motion.li key={step.step} className="process_step" variants={fadeInUp}>
                <span className="process_dot" aria-hidden="true" />
                <span className="process_num">{step.step}</span>
                <h3 className="process_title">{step.title}</h3>
                <p className="process_desc">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
