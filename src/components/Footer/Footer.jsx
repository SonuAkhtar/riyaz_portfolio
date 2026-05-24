import { useRef } from "react";
import { Link } from "react-router-dom";
import RollText from "../RollText/RollText";
import { navLinks, socialIconsData } from "../../../appData";
import "./footer.css";

const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Footer = () => {
  const ref = useRef(null);

  return (
    <footer ref={ref} className="footer_root">
      <div className="footer_aurora" aria-hidden />

      <div className="footer_inner">
        <div className="footer_grid">
          <div className="footer_grid-brand">
            <Link to="/" className="footer_brand">
              Riyaz Akhtar
            </Link>
            <p className="footer_tagline">
              Independent creative studio crafting cinematic digital products,
              brand systems, and immersive web experiences.
            </p>
            <Link
              to="/contact"
              className="footer_cta"
              aria-label="Start a project"
            >
              <RollText text="Start a project" />
              <ArrowUpRight />
            </Link>
          </div>

          <div className="footer_grid-cols">
            <div className="footer_col">
              <h4 className="footer_col-title">Navigate</h4>
              <ul className="footer_col-list">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="footer_col-link footer_col-link--nav"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_col">
              <h4 className="footer_col-title">Connect</h4>
              <ul className="footer_col-list">
                {socialIconsData.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer_col-link footer_col-link--social"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_meta">
          <span className="footer_meta-row">
            <span className="footer_meta-pulse" />
            Available for select projects in Q3 2026
          </span>
          <span className="footer_meta-row">
            © {new Date().getFullYear()} Riyaz Akhtar. All rights reserved.
          </span>
        </div>

        <div className="footer_wordmark" aria-hidden>
          RIYAZ AKHTAR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
