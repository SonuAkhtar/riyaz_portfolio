import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import { aboutHome, profile } from "../../../appData";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./aboutMe.css";

const AboutMe = () => {
  const { bio, currently, industries, principles } = aboutHome;
  const facts = [
    { label: "Currently", value: currently },
    { label: "Based in", value: profile.location },
    { label: "Industries", value: industries.join(", ") },
  ];

  return (
    <section className="about" id="about">
      <div className="section_inner about_layout">
        <div className="about_aside">
          <SectionHeader eyebrow={aboutHome.eyebrow} title={aboutHome.title} />
          <Link to="/about" className="about_more">
            Read the full story
            <span className="about_more-icon" aria-hidden="true">
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
        </div>

        <motion.div
          className="about_main"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={stagger}
        >
          <motion.p className="about_lede" variants={fadeInUp}>
            {bio[0]}
          </motion.p>
          <motion.p className="about_body" variants={fadeInUp}>
            {bio[1]}
          </motion.p>

          <motion.dl className="about_facts" variants={fadeInUp}>
            {facts.map((f) => (
              <div key={f.label} className="about_fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className="about_principles" variants={fadeInUp}>
            <h3 className="about_principles-title">How I work</h3>
            <ul>
              {principles.map((p) => (
                <li key={p.title} className="about_principle">
                  <span className="about_principle-icon" aria-hidden="true">
                    <i className={p.icon} />
                  </span>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
