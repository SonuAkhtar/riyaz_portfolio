import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursor.css";

const Cursor = () => {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const ringX = useSpring(mx, { stiffness: 140, damping: 18 });
  const ringY = useSpring(my, { stiffness: 140, damping: 18 });

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const role = e.target.getAttribute("role");
      if (
        tag === "a" ||
        tag === "button" ||
        role === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setHovered(true);
      }
    };

    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [visible, mx, my]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className={`cursor__dot${hovered ? " cursor__dot--hovered" : ""}`}
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className={`cursor__ring${hovered ? " cursor__ring--hovered" : ""}`}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default Cursor;
