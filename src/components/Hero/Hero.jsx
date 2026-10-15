import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { heroStats, heroLede, profile } from "../../../appData";
import RollText from "../RollText/RollText";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./hero.css";
import heroImage from "/assets/hero/hero.png";

const EASE = [0.22, 1, 0.36, 1];

const HAS_HOVER =
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

const [FIRST_NAME, ...REST] = profile.name.split(" ");
const LAST_NAME = REST.join(" ");

const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const NameLine = ({ children, delay }) => (
  <span className="hero_name_line">
    <motion.span
      className="hero_name_inner"
      initial={{ y: "105%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const canParallax = HAS_HOVER && !reduceMotion;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.6 });
  const imgX = useTransform(x, [-0.5, 0.5], [-14, 14]);
  const imgY = useTransform(y, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(x, [-0.5, 0.5], [24, -24]);
  const glowY = useTransform(y, [-0.5, 0.5], [16, -16]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      className="hero_root"
      id="hero"
      {...(canParallax ? { onMouseMove: onMove, onMouseLeave: onLeave } : {})}
    >
      <div className="hero_aurora" aria-hidden="true" />

      <div className="hero_inner section_inner">
        <div className="hero_left">
          <motion.span className="section_label hero_eyebrow" {...fadeUp(0.1)}>
            <span className="hero_avail_dot" aria-hidden="true" />
            {profile.availability}
            <span className="hero_eyebrow_sep" aria-hidden="true" />
            {profile.location}
          </motion.span>

          <h1 className="hero_name" aria-label={profile.name}>
            <NameLine delay={0.15}>{FIRST_NAME}</NameLine>
            <NameLine delay={0.27}>{LAST_NAME}.</NameLine>
          </h1>

          <motion.p className="hero_role" {...fadeUp(0.45)}>
            {profile.role}
            <em> at {profile.currentCompany}</em>
          </motion.p>

          <motion.p className="hero_lede" {...fadeUp(0.55)}>
            {heroLede}
          </motion.p>

          <motion.div className="hero_ctas" {...fadeUp(0.65)}>
            <MagneticButton strength={0.32}>
              <Link
                to="/contact"
                className="hero_cta_primary"
                aria-label="Start a project"
              >
                <RollText text="Start a project" />
                <span className="hero_cta_arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.22}>
              <a
                href="/assets/Riyaz_Akhtar_Resume.pdf"
                download
                className="hero_cta_ghost"
                aria-label="Download CV"
              >
                <RollText text="Download CV" />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.dl className="hero_stats" {...fadeUp(0.8)}>
            {heroStats.map((s) => (
              <div key={s.label} className="hero_stat">
                <dt className="hero_stat_label">{s.label}</dt>
                <dd className="hero_stat_value">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hero_visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
        >
          <motion.div
            className="hero_glow"
            aria-hidden="true"
            style={canParallax ? { x: glowX, y: glowY } : undefined}
          />
          <motion.img
            src={heroImage}
            alt={`${profile.name}, ${profile.role}`}
            className="hero_photo"
            fetchpriority="high"
            decoding="async"
            width="1195"
            height="1200"
            style={canParallax ? { x: imgX, y: imgY } : undefined}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
