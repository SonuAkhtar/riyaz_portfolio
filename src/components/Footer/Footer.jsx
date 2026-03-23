import { Link, useLocation } from "react-router-dom";
import "./footer.css";

import { motion } from "framer-motion";
import { socialIconsData, navLinks } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const contactHref = isHome ? "#contact" : "/#contact";
  const topHref = isHome ? "/" : "#";

  return (
    <footer className="footer">
      <span className="footer__aurora footer__aurora--1" aria-hidden="true" />
      <span className="footer__aurora footer__aurora--2" aria-hidden="true" />

      <div className="footer__hero">
        <motion.div
          className="footer__hero-content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            className="footer__hero-name"
            variants={fadeInUp}
            aria-label="Riyaz Akhtar"
          >
            <span className="footer__name-outline" aria-hidden="true">
              RIYAZ
            </span>
          </motion.div>

          <motion.div className="footer__hero-meta" variants={fadeInUp}>
            <span className="footer__avail">
              <span className="footer__avail-ring" aria-hidden="true" />
              <span className="footer__avail-dot" aria-hidden="true" />
              Available
            </span>
            <span className="footer__meta-sep" aria-hidden="true">
              |
            </span>
            <span className="footer__role">Lead Engineer @ Publicis Sapient</span>
            <span className="footer__meta-sep" aria-hidden="true">
              |
            </span>
            <span className="footer__loc">
              <i className="fas fa-map-pin" aria-hidden="true" />
              Gurgaon, India
            </span>
          </motion.div>

          <motion.a
            href={contactHref}
            className="footer__cta"
            variants={fadeInUp}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Start a Conversation</span>
            <span className="footer__cta-arrow">
              <i className="fas fa-arrow-right" />
            </span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="footer__bar"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.nav
          className="footer__nav"
          variants={fadeInUp}
          aria-label="Footer navigation"
        >
          {navLinks.map((l) => (
            <Link key={l.id} to={l.href} className="footer__link">
              {l.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div className="footer__social" variants={fadeInUp}>
          {socialIconsData.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__soc"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <i className={s.class} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="footer__copy">
        <span>© {year} Riyaz Akhtar. All rights reserved.</span>
        <span className="footer__copy-dot" aria-hidden="true" />
        <a href={topHref} className="footer__totop" aria-label="Back to top">
          <i className="fas fa-arrow-up" />
          <span>Top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
