import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import { profile } from "../../../appData";
import "./aboutMe.css";

const TRAITS = [
  { icon: "fas fa-bolt", label: "Performance-first" },
  { icon: "fas fa-layer-group", label: "Design systems" },
  { icon: "fas fa-code-branch", label: "Clean architecture" },
  { icon: "fas fa-users", label: "Team leadership" },
];

const AboutMe = () => (
  <section className="about" id="about">
    <div className="about_inner">
      <span className="about_wm" aria-hidden="true">
        ABOUT
      </span>

      <motion.div
        className="about_head"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        <motion.span
          className="section_label about_section_label"
          variants={fadeInUp}
        >
          Who I am
        </motion.span>
        <motion.h2 className="about_statement" variants={fadeInUp}>
          I build digital products
          <br />
          <em className="about_stmt_accent">that actually ship.</em>
        </motion.h2>
      </motion.div>

      <motion.div
        className="about_rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />

      <div className="about_body">
        <motion.div
          className="about_bio_col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <p className="about_bio_text">
            I lead frontend at <strong>{profile.currentCompany}</strong> -
            turning ambiguous problems into clean, scalable systems. My work
            spans React frontends, micro-frontend architecture, and the testing
            and security discipline that keeps enterprise products calm in
            production, across healthcare, consulting, and SaaS teams.
          </p>
          <p className="about_bio_text">
            The hard part isn't writing the code. It's knowing what to ship,
            what to cut, and what to keep boring on purpose.
          </p>

          <Link
            to="/about"
            className="about_more_cta"
            aria-label="Read the full story"
          >
            Read the full story
            <i className="fas fa-arrow-right" />
          </Link>
        </motion.div>

        <motion.div
          className="about_traits_col"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={stagger}
        >
          {TRAITS.map((t) => (
            <motion.div
              key={t.label}
              className="about_trait"
              variants={fadeInUp}
            >
              <span className="about_trait_icon">
                <i className={t.icon} />
              </span>
              <span className="about_trait_label">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;
