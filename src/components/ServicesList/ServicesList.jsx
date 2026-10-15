import { motion } from "framer-motion";
import { servicesData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./servicesList.css";

const ServicesList = () => (
  <section className="services_root">
    <div className="section_inner">
      <SectionHeader eyebrow="What I do" title="Three ways I can help." />

      <motion.ol
        className="services_list"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        {servicesData.map((s) => (
          <motion.li key={s.number} className="services_row" variants={fadeInUp}>
            <span className="services_num">{s.number}</span>
            <div className="services_main">
              <h3 className="services_title">{s.title}</h3>
              <p className="services_desc">{s.summary}</p>
            </div>
            <ul className="services_deliverables" aria-label={`${s.title} includes`}>
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  </section>
);

export default ServicesList;
