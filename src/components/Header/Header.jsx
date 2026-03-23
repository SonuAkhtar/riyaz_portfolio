import { useEffect, useState, useCallback } from "react";
import "./header.css";

import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../utils/useTheme";
import { navLinks, socialIconsData } from "../../../appData";

const drawerVariant = {
  hidden: {
    x: "100%",
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  visible: { x: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};
const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
const itemVariant = {
  hidden: { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06 + 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 50);
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const toggle = useCallback(() => setDrawerOpen((v) => !v), []);
  const close = useCallback(() => setDrawerOpen(false), []);

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        className={`header${scrolled ? " header--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            <span className="header__logo-text">Riyaz</span>
            <span className="header__logo-dot">.</span>
          </Link>

          <div className="header__links">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `header__link${isActive ? " header__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="header__right">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              className={`header__ham${drawerOpen ? " header__ham--open" : ""}`}
              onClick={toggle}
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        <div
          className="header__progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </motion.header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="drawer__backdrop"
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={close}
            />

            <motion.div
              className="drawer"
              variants={drawerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="drawer__head">
                <Link to="/" className="drawer__logo" onClick={close}>
                  <span>Riyaz</span>
                  <span className="drawer__logo-dot">.</span>
                </Link>
                <button
                  className="drawer__close"
                  onClick={close}
                  aria-label="Close menu"
                >
                  <i className="fas fa-xmark" />
                </button>
              </div>

              <nav className="drawer__nav">
                <p className="drawer__label">Pages</p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    custom={i}
                    variants={itemVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      className={({ isActive }) =>
                        `drawer__link${isActive ? " drawer__link--active" : ""}`
                      }
                      onClick={close}
                    >
                      <span className="drawer__link-icon">
                        <i className={link.icon} />
                      </span>
                      <span className="drawer__link-label">{link.label}</span>
                      <i className="fas fa-chevron-right drawer__link-arrow" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="drawer__divider" />

              {isHome && (
                <nav className="drawer__nav drawer__nav--sections">
                  <p className="drawer__label">On this page</p>
                  {[
                    { label: "About", href: "#about" },
                    { label: "Hobbies", href: "#hobbies" },
                    { label: "Contact", href: "#contact" },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="drawer__link drawer__link--sm"
                      onClick={close}
                      custom={navLinks.length + i}
                      variants={itemVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      <span className="drawer__link-label">{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              )}

              <div className="drawer__foot">
                <div className="drawer__socials">
                  {socialIconsData.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="drawer__soc"
                    >
                      <i className={s.class} />
                    </a>
                  ))}
                </div>
                <Link
                  to="/#contact"
                  className="drawer__cta btn btn_primary"
                  onClick={close}
                >
                  Let's Connect <i className="fas fa-arrow-right" />
                </Link>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
