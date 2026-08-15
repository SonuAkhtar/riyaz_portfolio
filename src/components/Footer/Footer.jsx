import { useRef } from "react";
import { Link } from "react-router-dom";
import RollText from "../RollText/RollText";
import { navLinks, socialIconsData, profile } from "../../../appData";
import "./footer.css";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const ArrowRight = () => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

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
  const now = new Date();
  const currentMonth = MONTHS[now.getMonth()];
  const currentYear = now.getFullYear();

  return (
    <footer ref={ref} className="footer_root">
      <div className="footer_aurora" aria-hidden />

      <div className="footer_inner">
        <div className="footer_grid">
          <div className="footer_grid-brand">
            <Link
              to="/"
              className="footer_brand"
              aria-label={`${profile.name}, back to home`}
            >
              <span className="footer_brand-mark">{profile.initials}</span>
              <span className="footer_brand-stack">
                <span className="footer_brand-name">{profile.name}</span>
                <span className="footer_brand-hint">
                  Back to home <ArrowRight />
                </span>
              </span>
            </Link>
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
            Available for select projects in {profile.availabilityShort}
          </span>
          <span className="footer_meta-row">
            Last updated {currentMonth} {currentYear}
          </span>
          <span className="footer_meta-row">
            © {currentYear} {profile.name}. All rights reserved.
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
