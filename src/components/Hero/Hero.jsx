import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  socialIconsData,
  heroStats,
  marqueeTech,
  heroLede,
  portraitTag,
  profile,
} from "../../../appData";
import RollText from "../RollText/RollText";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./hero.css";
import heroImage from "/assets/hero/hero.png";

const EASE = [0.22, 1, 0.36, 1];

const HAS_HOVER =
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

const TiltPortrait = () => {
  const frameRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const canTilt = HAS_HOVER && !reduceMotion;

  const x = useSpring(rawX, { stiffness: 220, damping: 22, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 220, damping: 22, mass: 0.5 });

  const rotateY = useTransform(x, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);

  const shineX = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);

  const imgX = useTransform(x, [-0.5, 0.5], ["-3%", "3%"]);
  const imgY = useTransform(y, [-0.5, 0.5], ["-2%", "2%"]);

  const onMove = (e) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={frameRef}
      className="hero_portrait_frame"
      {...(canTilt ? { onMouseMove: onMove, onMouseLeave: onLeave } : {})}
      style={
        canTilt ? { rotateX, rotateY, transformPerspective: 1200 } : undefined
      }
    >
      <motion.img
        src={heroImage}
        alt="Riyaz Akhtar portrait"
        className="hero_portrait_img"
        style={{ x: imgX, y: imgY }}
      />
      <div className="hero_portrait_overlay" aria-hidden="true" />
      <motion.div
        className="hero_portrait_shine"
        aria-hidden="true"
        style={{
          background: useTransform(
            [shineX, shineY],
            ([sx, sy]) =>
              `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.18) 0%, transparent 50%)`,
          ),
        }}
      />
      <span className="hero_portrait_tag">
        <span className="hero_portrait_tag_dot" aria-hidden="true" />
        {portraitTag}
      </span>
    </motion.div>
  );
};

const STATS = heroStats;
const MARQUEE_TRIPLED = [...marqueeTech, ...marqueeTech, ...marqueeTech];

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

const Hero = () => (
  <section className="hero_root" id="hero">
    <div className="hero_aurora" aria-hidden="true" />
    <div className="hero_grid_lines" aria-hidden="true" />

    <div className="hero_inner">
      <div className="hero_left">
        <motion.span
          className="section_label hero_eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          {profile.availability}
        </motion.span>

        <h1 className="hero_title">
          <motion.span
            className="hero_title_line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
          >
            Hi, I'm Riyaz -
          </motion.span>
          <motion.span
            className="hero_title_line hero_title_em"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: EASE }}
          >
            a lead engineer who ships.
          </motion.span>
        </h1>

        <motion.p
          className="hero_lede"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: EASE }}
        >
          {heroLede}
        </motion.p>

        <motion.div
          className="hero_ctas"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65, ease: EASE }}
        >
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

        <motion.div
          className="hero_meta_row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <div className="hero_socials" aria-label="Social links">
            {socialIconsData.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hero_soc"
                aria-label={s.class}
              >
                <i className={s.class} />
              </a>
            ))}
          </div>
          <span className="hero_meta_sep" aria-hidden="true" />
          <span className="hero_loc">
            <i className="fas fa-map-pin" aria-hidden="true" />
            {profile.location}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero_right"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
      >
        <TiltPortrait />

        <motion.div
          className="hero_stats"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.85 },
            },
          }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              className="hero_stat"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
            >
              <span className="hero_stat_value">{s.value}</span>
              <span className="hero_stat_label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    <div className="hero_marquee" aria-hidden="true">
      <div className="hero_marquee_inner">
        {MARQUEE_TRIPLED.map((s, i) => (
          <span key={i} className="hero_marquee_item">
            <span className="hero_marquee_dot">●</span> {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
