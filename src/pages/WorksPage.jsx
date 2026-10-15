import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton/MagneticButton";
import RollText from "../components/RollText/RollText";
import ServicesList from "../components/ServicesList/ServicesList";
import ProcessTimeline from "../components/ProcessTimeline/ProcessTimeline";
import ServicesFAQ from "../components/ServicesFAQ/ServicesFAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { profile } from "../../appData";
import "./worksPage.css";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const WorksPage = () => (
  <div className="wp_root">
    <section className="wp_hero">
      <div className="wp_hero_aurora" aria-hidden="true" />

      <div className="section_inner wp_hero_inner">
        <motion.span className="section_label" {...fadeUp(0.05)}>
          Services
        </motion.span>

        <h1 className="wp_hero_title">
          <span className="wp_reveal">
            <motion.span
              className="wp_reveal-inner"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.1, ease: EASE }}
            >
              How I can help
            </motion.span>
          </span>
          <span className="wp_reveal">
            <motion.span
              className="wp_reveal-inner"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.22, ease: EASE }}
            >
              your team.
            </motion.span>
          </span>
        </h1>

        <motion.p className="wp_hero_sub" {...fadeUp(0.45)}>
          I work with product teams to build, scale and speed up React apps,
          either as part of your team or leading the frontend.
        </motion.p>

        <motion.div className="wp_hero_ctas" {...fadeUp(0.6)}>
          <MagneticButton strength={0.32}>
            <Link to="/contact" className="wp_cta_primary" aria-label="Start a project">
              <RollText text="Start a project" />
              <span className="wp_cta_arrow" aria-hidden="true">
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.22}>
            <Link to="/projects" className="wp_cta_ghost" aria-label="See my work">
              <RollText text="See my work" />
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.span className="wp_hero_note" {...fadeUp(0.75)}>
          <span className="wp_hero_dot" aria-hidden="true" />
          {profile.availability}
        </motion.span>
      </div>
    </section>

    <ServicesList />
    <ProcessTimeline />
    <ServicesFAQ />
    <Contact />
    <Footer />
  </div>
);

export default WorksPage;
