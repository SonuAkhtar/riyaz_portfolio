import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processData } from "../../../appData";
import "./processTimeline.css";

const EASE = [0.22, 1, 0.36, 1];

const process = processData;

const RevealLine = ({ children, delay = 0 }) => (
  <span className="process_reveal">
    <motion.span
      className="process_reveal-inner"
      initial={{ y: "110%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const ProcessTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="process_root">
      <div className="process_inner">
        <header className="process_header">
          <span className="process_eyebrow">
            <span /> The process
          </span>
          <h2 className="process_title">
            <RevealLine>From brief to launch,</RevealLine>
            <br />
            <span className="process_title-soft">
              <RevealLine delay={0.15}>five deliberate stages.</RevealLine>
            </span>
          </h2>
        </header>

        <div ref={ref} className="process_timeline">
          <div className="process_timeline-rail">
            <motion.span style={{ scaleX: railScale }} />
          </div>

          <ol className="process_timeline-grid">
            {process.map((step, i) => (
              <motion.li
                key={step.step}
                className="process_step"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.07,
                  ease: EASE,
                }}
              >
                <span className="process_step-dot" />
                <span className="process_step-number">{step.step}</span>
                <h3 className="process_step-title">{step.title}</h3>
                <p className="process_step-desc">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
