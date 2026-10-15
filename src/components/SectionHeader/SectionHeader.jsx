import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import "./sectionHeader.css";

const SectionHeader = ({ eyebrow, title, accent, aside, className = "" }) => (
  <motion.header
    className={`sh_root${aside ? " sh_root-split" : ""} ${className}`.trim()}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOptions}
    variants={stagger}
  >
    <div className="sh_main">
      <motion.span className="section_label" variants={fadeInUp}>
        {eyebrow}
      </motion.span>
      <motion.h2 className="sh_title" variants={fadeInUp}>
        {title}
        {accent && <span className="sh_accent">{accent}</span>}
      </motion.h2>
    </div>
    {aside && (
      <motion.div className="sh_aside" variants={fadeInUp}>
        {aside}
      </motion.div>
    )}
  </motion.header>
);

export default SectionHeader;
