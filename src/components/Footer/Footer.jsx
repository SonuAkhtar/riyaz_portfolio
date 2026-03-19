import { Link, useLocation } from "react-router-dom";
import "./footer.css";

import { motion } from "framer-motion";
import { socialIconsData, navLinks, marqueeItems } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const contactHref = isHome ? "#contact" : "/#contact";
  const topHref = isHome ? "#" : "/";

  return (
    <footer className="footer">
      <span className="fh_aurora fha1" aria-hidden="true" />
      <span className="fh_aurora fha2" aria-hidden="true" />

      <div className="footer_hero">
        <motion.div
          className="fh_content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            className="fh_name"
            variants={fadeInUp}
            aria-label="Riyaz Akhtar"
          >
            <span className="fhn_outline" aria-hidden="true">
              RIYAZ
            </span>
          </motion.div>

          <motion.div className="fh_meta" variants={fadeInUp}>
            <span className="fh_avail">
              <span className="fh_avail_ring" aria-hidden="true" />
              <span className="fh_avail_dot" aria-hidden="true" />
              Available
            </span>
            <span className="fh_meta_sep" aria-hidden="true">
              |
            </span>
            <span className="fh_role">Lead Engineer @ Publicis Sapient</span>
            <span className="fh_meta_sep" aria-hidden="true">
              |
            </span>
            <span className="fh_loc">
              <i className="fas fa-map-pin" aria-hidden="true" />
              Gurgaon, India
            </span>
          </motion.div>

          <motion.a
            href={contactHref}
            className="fh_cta"
            variants={fadeInUp}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Start a Conversation</span>
            <span className="fh_cta_arrow">
              <i className="fas fa-arrow-right" />
            </span>
          </motion.a>
        </motion.div>
      </div>

      <div className="footer_marquee" aria-hidden="true">
        <div className="fmq_track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span key={i} className="fmq_item">
                <span className="fmq_bullet" />
                {item}
              </span>
            ),
          )}
        </div>
      </div>

      <motion.div
        className="footer_bar"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.div variants={fadeInUp}>
          <Link to="/" className="footer_logo">
            Riyaz<span>.</span>
          </Link>
        </motion.div>

        <motion.nav
          className="footer_nav"
          variants={fadeInUp}
          aria-label="Footer navigation"
        >
          {navLinks.map((l) => (
            <Link key={l.id} to={l.href} className="footer_link">
              {l.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div className="footer_social" variants={fadeInUp}>
          {socialIconsData.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer_soc"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <i className={s.class} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="footer_copy">
        <span>© {year} Riyaz Akhtar. All rights reserved.</span>
        <span className="footer_copy_dot" aria-hidden="true" />
        <span className="footer_made">
          Crafted with <i className="fas fa-heart" aria-hidden="true" /> in
          India
        </span>
        <a href={topHref} className="footer_totop" aria-label="Back to top">
          <i className="fas fa-arrow-up" />
          <span>Top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
