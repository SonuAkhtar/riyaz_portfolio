import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const HAS_HOVER =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover)").matches;

const MagneticButton = ({ children, strength = 0.38, className = "", ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 18 });
  const springY = useSpring(y, { stiffness: 280, damping: 18 });
  const reduceMotion = useReducedMotion();
  const canMagnet = HAS_HOVER && !reduceMotion;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      {...(canMagnet
        ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
        : {})}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
