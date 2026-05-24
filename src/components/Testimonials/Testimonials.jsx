import { motion } from "framer-motion";
import { workedWith, siteStats } from "../../../appData";
import "./testimonials.css";

const EASE = [0.22, 1, 0.36, 1];

const WorkedWith = () => (
  <section className="testimonials_root">
    <div className="testimonials_inner">
      <div className="testimonials_eyebrow">
        <span /> Worked with
      </div>

      <motion.h2
        className="ww_title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        Teams that shipped
        <br />
        <span className="ww_title-soft">serious work with me.</span>
      </motion.h2>

      <motion.ul
        className="ww_grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {workedWith.map((w) => (
          <motion.li
            key={w.id}
            className="ww_item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            <span className="ww_period">{w.period}</span>
            <span className="ww_company">{w.name}</span>
            <span className="ww_role">{w.role}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        className="ww_foot"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
      >
        {siteStats.corporate.years} years across {siteStats.corporate.companies}{" "}
        companies and {siteStats.corporate.clients} client engagements - plus{" "}
        {siteStats.freelance.projects} freelance projects on the side.
      </motion.p>
    </div>
  </section>
);

export default WorkedWith;
