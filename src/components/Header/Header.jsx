import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../utils/useTheme";
import { navLinks, socialIconsData } from "../../../appData";
import "./header.css";

const drawerVariant = {
  hidden: { x: "100%",  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  visible: { x: 0,      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};
const overlayVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};
const itemVariant = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
};

const Header = () => {
  const [drawerOpen,     setDrawerOpen]     = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme }              = useTheme();
  const location                            = useLocation();

  /* close drawer on route change */
  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  /* scroll listener — state + progress bar */
  useEffect(() => {
    const onScroll = () => {
      const y     = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 50);
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const toggle = useCallback(() => setDrawerOpen(v => !v), []);
  const close  = useCallback(() => setDrawerOpen(false),  []);

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        className={`header${scrolled ? " scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="nav_inner">

          {/* Logo */}
          <Link to="/" className="nav_logo">
            <span className="logo_text">Riyaz</span>
            <span className="logo_dot">.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="nav_links_desk">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) => `nav_link${isActive ? " nav_link_active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side: theme + CTA + hamburger */}
          <div className="nav_right">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Hamburger */}
            <button
              className={`nav_ham${drawerOpen ? " nav_ham_open" : ""}`}
              onClick={toggle}
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* scroll progress bar */}
        <div
          className="nav_progress_bar"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </motion.header>

      {/* ── Mobile Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* backdrop */}
            <motion.div
              className="drawer_backdrop"
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={close}
            />

            {/* drawer panel */}
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
              {/* drawer header */}
              <div className="drawer_head">
                <Link to="/" className="drawer_logo" onClick={close}>
                  <span>Riyaz</span><span className="drawer_logo_dot">.</span>
                </Link>
                <button className="drawer_close" onClick={close} aria-label="Close menu">
                  <i className="fas fa-times" />
                </button>
              </div>

              {/* nav links */}
              <nav className="drawer_nav">
                <p className="drawer_section_label">Pages</p>
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
                      className={({ isActive }) => `drawer_link${isActive ? " drawer_link_active" : ""}`}
                      onClick={close}
                    >
                      <span className="drawer_link_icon">
                        <i className={link.icon} />
                      </span>
                      <span className="drawer_link_label">{link.label}</span>
                      <i className="fas fa-chevron-right drawer_link_arrow" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* divider */}
              <div className="drawer_divider" />

              {/* section links for homepage */}
              {isHome && (
                <nav className="drawer_nav drawer_nav_sections">
                  <p className="drawer_section_label">On this page</p>
                  {[
                    { label: "About",   href: "#about"   },
                    { label: "Hobbies", href: "#hobbies" },
                    { label: "Contact", href: "#contact" },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="drawer_link drawer_link_sm"
                      onClick={close}
                      custom={navLinks.length + i}
                      variants={itemVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      <span className="drawer_link_label">{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              )}

              {/* footer area */}
              <div className="drawer_foot">
                <div className="drawer_socials">
                  {socialIconsData.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="drawer_soc"
                    >
                      <i className={s.class} />
                    </a>
                  ))}
                </div>
                <Link to="/#contact" className="drawer_cta btn btn_primary" onClick={close}>
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
