import { useState } from "react";
import { motion } from "framer-motion";
import { workedWith, siteStats } from "../../../appData";
import "./testimonials.css";

const EASE = [0.22, 1, 0.36, 1];

const CompanyLogo = ({ item }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const logoUrl = item.domain
    ? `https://logo.clearbit.com/${item.domain}?size=128`
    : null;

  return (
    <span
      className="ww_logo"
      style={{
        color: item.color,
        background: `${item.color}14`,
        borderColor: `${item.color}40`,
      }}
      aria-hidden="true"
    >
      {logoUrl && !imgFailed ? (
        <img
          src={logoUrl}
          alt=""
          className="ww_logo-img"
          loading="lazy"
          decoding="async"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="ww_logo-initials">{item.initials}</span>
      )}
    </span>
  );
};

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

      <motion.div
        className="ww_foot"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
      >
        <div className="ww_foot-stats">
          <div className="ww_foot-stat">
            <span className="ww_foot-value">{siteStats.corporate.years}</span>
            <span className="ww_foot-label">Years</span>
          </div>
          <div className="ww_foot-stat">
            <span className="ww_foot-value">{siteStats.corporate.companies}</span>
            <span className="ww_foot-label">Companies</span>
          </div>
          <div className="ww_foot-stat">
            <span className="ww_foot-value">{siteStats.corporate.clients}</span>
            <span className="ww_foot-label">Enterprise clients</span>
          </div>
          <div className="ww_foot-stat">
            <span className="ww_foot-value">{siteStats.freelance.projects}</span>
            <span className="ww_foot-label">Freelance projects</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkedWith;
