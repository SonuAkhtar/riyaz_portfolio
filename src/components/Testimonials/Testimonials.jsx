import { motion } from "framer-motion";
import { workedWith } from "../../../appData";
import "./testimonials.css";

const EASE = [0.22, 1, 0.36, 1];

const CompanyLogo = ({ item }) => (
  <span
    className="ww_logo"
    style={{
      color: item.color,
      background: `${item.color}14`,
      borderColor: `${item.color}40`,
    }}
    aria-hidden="true"
  >
    <span className="ww_logo-initials">{item.initials}</span>
  </span>
);

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
        Teams that shipped<br />
        <span className="ww_title-soft">serious work with me.</span>
      </motion.h2>

      <motion.ul
        className="ww_grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
      >
        {workedWith.map((w) => (
          <motion.li
            key={w.id}
            className="ww_item"
            style={{ "--ww-accent": w.color }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            <div className="ww_head">
              <CompanyLogo item={w} />
              <span className="ww_period">{w.period}</span>
            </div>
            <span className="ww_company">{w.name}</span>
            <span className="ww_role">{w.role}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default WorkedWith;
