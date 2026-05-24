import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { principlesData } from "../../../appData";
import "./philosophy.css";

const principles = principlesData;

const Philosophy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="philosophy_root">
      <div className="philosophy_inner">
        <header className="philosophy_header">
          <span className="philosophy_eyebrow">
            <span /> How I work
          </span>
          <motion.h2 style={{ y }} className="philosophy_title">
            Principles
            <br />
            <span className="philosophy_title-soft">I return to.</span>
          </motion.h2>
        </header>

        <ul className="philosophy_grid">
          {principles.map((p, i) => (
            <motion.li
              key={p.index}
              className="philosophy_card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="philosophy_card-index">{p.index}</span>
              <h3 className="philosophy_card-title">{p.title}</h3>
              <p className="philosophy_card-body">{p.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Philosophy;
