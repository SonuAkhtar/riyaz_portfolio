import { motion } from "framer-motion";
import { principlesData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./philosophy.css";

const Philosophy = () => (
  <section className="philosophy_root">
    <div className="section_inner">
      <SectionHeader eyebrow="Principles" title="How I approach the work." />

      <motion.ol
        className="philosophy_list"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        {principlesData.map((p) => (
          <motion.li key={p.index} className="philosophy_item" variants={fadeInUp}>
            <span className="philosophy_num" aria-hidden="true">
              {p.index}
            </span>
            <h3 className="philosophy_title">{p.title}</h3>
            <p className="philosophy_body">{p.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  </section>
);

export default Philosophy;
