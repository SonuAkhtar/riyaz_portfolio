import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";
import RollText from "../components/RollText/RollText";
import { socialIconsData, contactData, profile } from "../../appData";
import "./contactPage.css";

const EASE = [0.22, 1, 0.36, 1];

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

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const RevealLine = ({ children, delay = 0 }) => (
  <span className="cp_reveal">
    <motion.span
      className="cp_reveal-inner"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const services = [
  "Product Engineering",
  "Frontend Architecture",
  "Performance & Quality",
  "Engineering Advisory",
  "Not sure yet",
];

const FloatingField = ({
  id,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  floating,
  type = "text",
  required,
  textarea,
}) => (
  <label
    htmlFor={id}
    className={`cp_field${textarea ? " cp_field-textarea" : ""}`}
  >
    <span
      className={`cp_field-label${floating ? " cp_field-label-floating" : ""}`}
    >
      {label}
      {required ? " *" : ""}
    </span>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className="cp_field-input"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        autoComplete="off"
        className="cp_field-input"
      />
    )}
    <span className="cp_field-line" />
  </label>
);

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    company: false,
    message: false,
  });
  const [service, setService] = useState(services[0]);
  const [status, setStatus] = useState("idle");

  const setValue = (field, v) => setValues((s) => ({ ...s, [field]: v }));
  const setFocus = (field, f) => setFocused((s) => ({ ...s, [field]: f }));
  const isFloating = (field) =>
    focused[field] || (values[field] && values[field].length > 0);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.email.includes("@") || values.message.length < 10) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <form className="cp_form" onSubmit={onSubmit} noValidate>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="cp_form_success"
          >
            <span className="cp_form_success-icon">
              <CheckIcon />
            </span>
            <h3>Message received.</h3>
            <p>
              Thank you, {values.name || "friend"}. I&apos;ll be in touch within
              two business days from{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="cp_form_inner"
          >
            <div className="cp_form_row">
              <FloatingField
                id="name"
                label="Your name"
                value={values.name}
                onChange={(v) => setValue("name", v)}
                onFocus={() => setFocus("name", true)}
                onBlur={() => setFocus("name", false)}
                floating={isFloating("name")}
                required
              />
              <FloatingField
                id="email"
                type="email"
                label="Email"
                value={values.email}
                onChange={(v) => setValue("email", v)}
                onFocus={() => setFocus("email", true)}
                onBlur={() => setFocus("email", false)}
                floating={isFloating("email")}
                required
              />
            </div>

            <FloatingField
              id="company"
              label="Company or team"
              value={values.company}
              onChange={(v) => setValue("company", v)}
              onFocus={() => setFocus("company", true)}
              onBlur={() => setFocus("company", false)}
              floating={isFloating("company")}
            />

            <div className="cp_pills_label">
              <span /> What do you need?
            </div>
            <div className="cp_pills">
              {services.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setService(s)}
                  className={`cp_pill${service === s ? " cp_pill-active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <FloatingField
              id="message"
              label="Tell me about your project"
              textarea
              value={values.message}
              onChange={(v) => setValue("message", v)}
              onFocus={() => setFocus("message", true)}
              onBlur={() => setFocus("message", false)}
              floating={isFloating("message")}
              required
            />

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="cp_form_error"
              >
                <AlertIcon />
                <span>
                  Please double-check your email and add a little more context
                  to your message.
                </span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="cp_form_submit"
              aria-label={status === "submitting" ? "Sending" : "Send message"}
            >
              <RollText
                text={status === "submitting" ? "Sending..." : "Send message"}
              />
              <span className="cp_form_submit-icon">
                <ArrowUpRight />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

const ContactPage = () => {
  const emailEntry = contactData.find((c) => c.name === "Email");
  const phoneEntry = contactData.find((c) => c.name === "Call");
  const locationEntry = contactData.find((c) => c.name === "Location");

  const channels = [
    emailEntry && {
      label: "Email",
      value: emailEntry.info,
      href: emailEntry.href,
    },
    phoneEntry && {
      label: "Phone",
      value: phoneEntry.info,
      href: phoneEntry.href,
    },
    locationEntry && {
      label: "Based",
      value: locationEntry.info,
    },
    {
      label: "Hours",
      value: profile.hours,
    },
  ].filter(Boolean);

  return (
    <div className="cp_root">
      <article className="cp_article">
        <div className="cp_aurora" aria-hidden />

        <header className="cp_header">
          <motion.span
            className="cp_eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <span className="cp_eyebrow-dot" />
            {profile.availability}, accepting select engagements
          </motion.span>

          <h1 className="cp_title">
            <RevealLine delay={0.2}>Tell me about</RevealLine>
            <br />
            <em>
              <RevealLine delay={0.35}>your project.</RevealLine>
            </em>
          </h1>

          <motion.p
            className="cp_lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.6 }}
          >
            The more context you can share, the better. Timeline, budget,
            stakeholders, links, anything that helps me understand the room
            you&apos;re bringing me into.
          </motion.p>
        </header>

        <section className="cp_grid">
          <aside className="cp_side">
            <div className="cp_side_block">
              <span className="cp_side_label">
                <span /> Channels
              </span>
              <dl className="cp_channels">
                {channels.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>
                      {c.href ? (
                        <a href={c.href} className="cp_channels-link">
                          {c.value} <ArrowUpRight />
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cp_side_block">
              <span className="cp_side_label">
                <span /> Elsewhere
              </span>
              <ul className="cp_socials">
                {socialIconsData.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cp_socials-link"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cp_side_block">
              <span className="cp_side_label">
                <span /> Availability
              </span>
              <p className="cp_availability">
                I accept four to six engagements per year. Most start one to two
                quarters in advance. Earlier conversations get the better
                slots.
              </p>
            </div>
          </aside>

          <div className="cp_form_wrap">
            <ContactForm />
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default ContactPage;
