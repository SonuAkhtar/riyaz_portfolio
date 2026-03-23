import "./available.css";
import { motion } from "framer-motion";

const Available = () => {
  return (
    <motion.span
      className="available"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
    >
      <span className="available__ring" aria-hidden="true" />
      <span className="available__dot" aria-hidden="true" />
      Available for opportunities
    </motion.span>
  );
};

export default Available;
