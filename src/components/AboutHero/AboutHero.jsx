import { motion } from "framer-motion";
import { profile } from "../../../appData";
import "./aboutHero.css";

const EASE = [0.22, 1, 0.36, 1];

const RevealLine = ({ children, delay = 0 }) => (
  <span className="about_hero_reveal">
    <motion.span
      className="about_hero_reveal-inner"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.95, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const AboutHero = () => (
  <section className="about_hero_root">
    <div className="about_hero_aurora" aria-hidden />

    <div className="about_hero_inner">
      <span className="about_hero_eyebrow">
        <span /> About {profile.name}
      </span>

      <h1 className="about_hero_title">
        <RevealLine>An engineer</RevealLine>
        <br />
        <RevealLine delay={0.15}>building serious work</RevealLine>
        <br />
        <span className="about_hero_title-italic">
          <RevealLine delay={0.3}>for serious teams.</RevealLine>
        </span>
      </h1>

      <div className="about_hero_grid">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
          className="about_hero_lede"
        >
          {profile.name.split(" ")[0]} is a {profile.role} based in{" "}
          {profile.location}, working with enterprise product teams on the
          things that matter most - flagship launches, micro-frontend
          architecture, design systems, and quality-first delivery.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
          className="about_hero_meta"
        >
          <dl className="about_hero_meta-list">
            <div>
              <dt>Practicing</dt>
              <dd>Since {profile.practicingSince}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>{profile.currentCompany}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </div>

    <div className="about_hero_portrait">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="about_hero_portrait-frame"
        style={{ backgroundImage: "url(/assets/about/about_pic.webp)" }}
      />
      <div className="about_hero_portrait-caption">
        <span>
          {profile.name.split(" ")[0]}, {profile.role.split(" ").slice(-1)[0]}{" "}
          Engineer
        </span>
        <span>
          {profile.location.split(",")[0]}, {new Date().getFullYear()}
        </span>
      </div>
    </div>
  </section>
);

export default AboutHero;
