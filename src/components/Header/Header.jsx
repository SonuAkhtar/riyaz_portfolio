import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../utils/useTheme";
import { navLinks, socialIconsData } from "../../../appData";
import "./header.css";
import heroImage from "/assets/hero/hero.png";

const NAV_ITEMS = navLinks.filter((l) => l.href !== "/");
const SCROLL_THRESHOLD = 60;

const ROUTE_PREFETCH = {
  "/about":    () => import("../../pages/AboutMePage"),
  "/services": () => import("../../pages/WorksPage"),
  "/projects": () => import("../../pages/ProjectsPage"),
  "/skills":   () => import("../../pages/SkillsPage"),
  "/contact":  () => import("../../pages/ContactPage"),
};

const prefetched = new Set();
const prefetchRoute = (path) => {
  if (prefetched.has(path)) return;
  const load = ROUTE_PREFETCH[path];
  if (!load) return;
  prefetched.add(path);
  load().catch(() => prefetched.delete(path));
};
const RollText = ({ text }) => (
  <span className="roll_wrap" aria-hidden="true">
    {[...text].map((char, i) => (
      <span
        key={i}
        className="roll_char"
        style={{ transitionDelay: `${i * 0.018}s` }}
      >
        {char === " " ? "\u00a0" : char}
      </span>
    ))}
  </span>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navState, setNavState] = useState("top");
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= SCROLL_THRESHOLD) {
        setNavState("top");
      } else if (y > lastScrollY.current) {
        setNavState("hidden");
      } else {
        setNavState("compact");
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const open = useCallback(() => setMenuOpen(true), []);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <motion.header
        className={`site_header ${navState}${menuOpen ? " menu_open" : ""}`}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: navState === "hidden" ? "-110%" : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="site_logo">RA.</Link>
        <nav className="site_nav_desk" aria-hidden={navState !== "top"}>
          {NAV_ITEMS.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              tabIndex={navState !== "top" ? -1 : 0}
              aria-label={link.label}
              onMouseEnter={() => prefetchRoute(link.href)}
              onFocus={() => prefetchRoute(link.href)}
              className={({ isActive }) =>
                `site_nav_link${isActive ? " active" : ""}`
              }
            >
              <RollText text={link.label.toUpperCase()} />
            </NavLink>
          ))}
        </nav>
        <button
          className={`site_menu_btn${menuOpen ? " is_open" : ""}`}
          onClick={menuOpen ? close : open}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          tabIndex={navState === "compact" || menuOpen ? 0 : -1}
        >
          <RollText text="Menu" />
          <span className="site_menu_btn_icon" aria-hidden="true">
            <span /><span />
          </span>
        </button>

        <div className="site_nav_right">
          <Link to="/contact" className="site_cta" aria-label="Start a project">
            <img src={heroImage} className="site_cta_thumb" alt="" aria-hidden="true" />
            <RollText text="Start a project" />
          </Link>
          <button
            className={`site_ham${menuOpen ? " open" : ""}`}
            onClick={menuOpen ? close : open}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span />
          </button>
        </div>
      </motion.header>

      <div
        className={`fullmenu${menuOpen ? " active" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="fullmenu_tile">
          <div className="fullmenu_head">
            <Link to="/" className="fullmenu_logo" onClick={close}>RA.</Link>
            <button className="fullmenu_close" onClick={close} aria-label="Close menu">
              <span /><span />
            </button>
          </div>

          <nav className="fullmenu_nav">
            {NAV_ITEMS.map((link, i) => (
              <div key={link.id} className="fullmenu_item_outer">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `fullmenu_item${isActive ? " fm_active" : ""}`
                  }
                  aria-label={link.label}
                  onClick={close}
                  onMouseEnter={() => prefetchRoute(link.href)}
                  onFocus={() => prefetchRoute(link.href)}
                >
                  <span className="fullmenu_item_num" aria-hidden="true">0{i + 1}</span>
                  <span className="fullmenu_item_label" aria-hidden="true">
                    <RollText text={link.label.toUpperCase()} />
                  </span>
                  <span className="fullmenu_item_arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                </NavLink>
              </div>
            ))}
          </nav>

          <div className="fullmenu_foot">
            <div className="fullmenu_foot_left">
              <div className="fullmenu_socials">
                {socialIconsData.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="fullmenu_soc">
                    <i className={s.class} />
                  </a>
                ))}
              </div>
              <span className="fullmenu_foot_sep" aria-hidden="true" />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <Link to="/contact" className="fullmenu_cta" onClick={close}>
              Let's Connect <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
