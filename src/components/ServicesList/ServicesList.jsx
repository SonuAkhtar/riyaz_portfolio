import { motion } from "framer-motion";
import { servicesData } from "../../../appData";
import { palette } from "../../utils/themeColors";
import "./servicesList.css";

const accents = [palette.violet400, palette.blue600, palette.amber400, palette.cyan300];

const services = servicesData.map((s) => ({
  index: s.number,
  title: s.title,
  description: s.summary,
  deliverables: s.deliverables,
}));

const ServicesList = () => (
  <section className="services_root">
    <div className="services_inner">
      <ul className="services_list">
        {services.map((service, i) => (
          <motion.li
            key={service.index}
            className="services_row"
            style={{ "--accent": accents[i % accents.length] }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="services_row-index">{service.index}</span>
            <div className="services_row-body">
              <h3 className="services_row-title">{service.title}</h3>
              <p className="services_row-desc">{service.description}</p>
            </div>
            <ul className="services_row-deliverables">
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <span className="services_row-glow" aria-hidden="true" />
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServicesList;
