import { motion } from "framer-motion";
import { aboutPage, profile, siteStats } from "../../../appData";
import "./aboutHero.css";

const EASE = [0.22, 1, 0.36, 1];

const STATS = [
  { value: `${siteStats.years}+`, label: "Years" },
  { value: siteStats.companies, label: "Companies" },
  { value: siteStats.clients, label: "Enterprise clients" },
  { value: `${siteStats.projects}+`, label: "Freelance projects" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const AboutHero = () => (
  <section className="about_hero_root">
    <div className="about_hero_aurora" aria-hidden="true" />

    <div className="section_inner about_hero_inner">
      <div className="about_hero_text">
        <motion.span className="section_label" {...fadeUp(0.05)}>
          About
        </motion.span>

        <h1 className="about_hero_title">
          <span className="about_hero_reveal">
            <motion.span
              className="about_hero_reveal-inner"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.1, ease: EASE }}
            >
              Hi, I&apos;m {profile.name.split(" ")[0]}.
            </motion.span>
          </span>
        </h1>

        <motion.p className="about_hero_lede" {...fadeUp(0.35)}>
          {aboutPage.intro[0]}
        </motion.p>
        <motion.p className="about_hero_body" {...fadeUp(0.45)}>
          {aboutPage.intro[1]}
        </motion.p>

        <motion.dl className="about_hero_stats" {...fadeUp(0.55)}>
          {STATS.map((s) => (
            <div key={s.label} className="about_hero_stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.figure
        className="about_hero_photo"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
      >
        <img
          src="/assets/about/about_photo.jpg"
          alt={profile.name}
          width="821"
          height="807"
          decoding="async"
        />
        <figcaption>{profile.location}</figcaption>
      </motion.figure>
    </div>
  </section>
);

export default AboutHero;
