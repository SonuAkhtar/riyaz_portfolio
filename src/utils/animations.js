const EASE = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
};

export const viewportOptions = { once: true, margin: "-60px" };
