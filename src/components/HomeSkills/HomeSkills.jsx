import { motion } from "framer-motion";
import { skillsData, skillCategoryBlurb } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./homeSkills.css";

const HomeSkills = () => (
  <section className="hskills_root" id="skills">
    <div className="section_inner">
      <SectionHeader eyebrow="Skills" title="What I work with." />

      <motion.ul
        className="hskills_list"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        {skillsData.map((cat, i) => (
          <motion.li key={cat.id} className="hskills_row" variants={fadeInUp}>
            <span className="hskills_row-years">{cat.subtitle}</span>
            <h3 className="hskills_row-title">{cat.title}</h3>
            <div className="hskills_row-detail">
              <p className="hskills_row-desc">{skillCategoryBlurb[i]}</p>
              <ul className="hskills_row-tools" aria-label={`${cat.title} tools`}>
                {cat.data.map((tool) => (
                  <li key={tool.name}>{tool.name}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default HomeSkills;
