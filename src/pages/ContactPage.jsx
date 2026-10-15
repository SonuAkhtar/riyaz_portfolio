import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer/Footer";
import RollText from "../components/RollText/RollText";
import { servicesData, socialIconsData, profile } from "../../appData";
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

// Web3Forms relays submissions to the inbox the access key was created for
// (riyaz.sa03@gmail.com). The key is public by design and safe to ship.
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "36a68433-8307-49cd-9b2a-8bd41a88b224";

const services = [
  ...servicesData.map((s) => s.title),
  "Engineering Advisory",
  "Not sure yet",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MESSAGE_MIN = 20;
const MESSAGE_MAX = 5000;

const EMPTY_VALUES = { name: "", email: "", company: "", message: "" };
const EMPTY_FLAGS = { name: false, email: false, company: false, message: false };
const REQUIRED_FIELDS = ["name", "email", "message"];

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  else if (name.trim().length > 100) errors.name = "Please keep your name under 100 characters.";

  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email.trim()))
    errors.email = "Please enter a valid email, like name@company.com.";

  const msg = message.trim();
  if (!msg) errors.message = "Please tell me a little about your project.";
  else if (msg.length < MESSAGE_MIN)
    errors.message = `Please add a bit more detail (at least ${MESSAGE_MIN} characters, ${MESSAGE_MIN - msg.length} to go).`;
  return errors;
};

const Spinner = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="cp_spinner">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

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
  error,
  valid,
  hint,
  autoComplete = "off",
  maxLength,
}) => {
  const errorId = `${id}-error`;
  const inputProps = {
    id,
    name: id,
    value,
    onChange: (e) => onChange(e.target.value),
    onFocus,
    onBlur,
    required,
    maxLength,
    autoComplete,
    className: "cp_field-input",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="cp_field-wrap">
      <label
        htmlFor={id}
        className={`cp_field${textarea ? " cp_field-textarea" : ""}${
          error ? " cp_field-invalid" : ""
        }${valid ? " cp_field-valid" : ""}`}
      >
        <span
          className={`cp_field-label${floating ? " cp_field-label-floating" : ""}`}
        >
          {label}
          {required ? " *" : ""}
        </span>
        {textarea ? (
          <textarea rows={3} {...inputProps} />
        ) : (
          <input type={type} {...inputProps} />
        )}
        <span className="cp_field-line" />
      </label>
      {(error || hint) && (
        <div className="cp_field-meta">
          <AnimatePresence initial={false}>
            {error && (
              <motion.p
                key="error"
                id={errorId}
                className="cp_field-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <AlertIcon />
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          {hint}
        </div>
      )}
    </div>
  );
};

const COMPANY_TYPES = [
  { value: "Startup", hint: "Early-stage, finding product-market fit" },
  { value: "Scale-up or enterprise", hint: "Established product, growing teams" },
  { value: "Agency or studio", hint: "Delivering work for your own clients" },
  { value: "Individual or other", hint: "Founder, side project or something else" },
];

const ChevronDown = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TickIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Select-only combobox (WAI-ARIA APG pattern): focus stays on the trigger and
// the highlighted option is exposed through aria-activedescendant.
const SelectField = ({ id, label, value, options, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const listId = `${id}-listbox`;
  const labelId = `${id}-label`;
  const selectedIndex = options.findIndex((o) => o.value === value);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document
        .getElementById(`${id}-opt-${active}`)
        ?.scrollIntoView({ block: "nearest" });
    }
  }, [open, active, id]);

  const openList = () => {
    setActive(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };
  const choose = (i) => {
    onChange(options[i].value);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    const last = options.length - 1;
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (e.key.length === 1) {
          const ch = e.key.toLowerCase();
          const start = active + 1;
          const order = [...options.slice(start), ...options.slice(0, start)];
          const hit = order.find((o) => o.value.toLowerCase().startsWith(ch));
          if (hit) setActive(options.indexOf(hit));
        }
    }
  };

  const floating = open || Boolean(value);

  return (
    <div className="cp_field-wrap cp_select" ref={rootRef}>
      <div className={`cp_field${open ? " cp_field-open" : ""}`}>
        <span
          id={labelId}
          className={`cp_field-label${floating ? " cp_field-label-floating" : ""}`}
        >
          {label}
        </span>
        <button
          type="button"
          id={id}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-activedescendant={open ? `${id}-opt-${active}` : undefined}
          className="cp_field-input cp_select-trigger"
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onKeyDown}
        >
          <span className={value ? "" : "cp_select-placeholder"}>
            {value || (open ? placeholder : "")}
          </span>
          <span className="cp_select-chevron">
            <ChevronDown />
          </span>
        </button>
        <span className="cp_field-line" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            key="list"
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            className="cp_select-list"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: EASE }}
          >
            {options.map((o, i) => (
              <li
                key={o.value}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={o.value === value}
                className={`cp_select-option${i === active ? " cp_select-option-active" : ""}`}
                onPointerEnter={() => setActive(i)}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
              >
                <span className="cp_select-option-text">
                  <span className="cp_select-option-title">{o.value}</span>
                  <span className="cp_select-option-hint">{o.hint}</span>
                </span>
                {o.value === value && (
                  <span className="cp_select-option-tick">
                    <TickIcon />
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [focused, setFocused] = useState(EMPTY_FLAGS);
  const [touched, setTouched] = useState(EMPTY_FLAGS);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [service, setService] = useState(services[0]);
  const [status, setStatus] = useState("idle");
  const [honeypot, setHoneypot] = useState("");
  const [sendError, setSendError] = useState("");
  const [sent, setSent] = useState({ name: "", email: "" });

  const errors = validate(values);
  const completed = REQUIRED_FIELDS.filter((f) => !errors[f]).length;

  const visibleError = (field) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  const setValue = (field, v) => setValues((s) => ({ ...s, [field]: v }));
  const setFocus = (field, f) => {
    setFocused((s) => ({ ...s, [field]: f }));
    if (!f) setTouched((s) => ({ ...s, [field]: true }));
  };
  const isFloating = (field) =>
    focused[field] || (values[field] && values[field].length > 0);

  const fieldProps = (field) => ({
    id: field,
    value: values[field],
    onChange: (v) => setValue(field, v),
    onFocus: () => setFocus(field, true),
    onBlur: () => setFocus(field, false),
    floating: isFloating(field),
    error: visibleError(field),
    valid: REQUIRED_FIELDS.includes(field) && !errors[field],
  });

  const messageLength = values.message.trim().length;
  const messageHint = (
    <span
      className={`cp_field-count${messageLength >= MESSAGE_MIN ? " cp_field-count-ok" : ""}`}
    >
      {messageLength < MESSAGE_MIN
        ? `${messageLength} / ${MESSAGE_MIN} min`
        : `${values.message.length} / ${MESSAGE_MAX}`}
    </span>
  );

  const reset = () => {
    setValues(EMPTY_VALUES);
    setFocused(EMPTY_FLAGS);
    setTouched(EMPTY_FLAGS);
    setSubmitAttempted(false);
    setService(services[0]);
    setHoneypot("");
    setSendError("");
    setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setSubmitAttempted(true);
    const firstInvalid = REQUIRED_FIELDS.find((f) => errors[f]);
    if (firstInvalid) {
      const el = document.getElementById(firstInvalid);
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company || "-",
      service,
      message: values.message.trim(),
    };
    if (honeypot) {
      setSent(payload);
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio enquiry from ${payload.name}`,
          from_name: "Portfolio contact form",
          ...payload,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      setSent(payload);
      setStatus("success");
    } catch (err) {
      setSendError(err.message);
      setStatus("send-error");
    }
  };

  const submitting = status === "submitting";

  return (
    <form className="cp_form" onSubmit={onSubmit} noValidate>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="cp_form_success"
            role="status"
          >
            <span className="cp_form_success-icon">
              <span className="cp_form_success-ring" aria-hidden="true" />
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
                />
              </svg>
            </span>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            >
              Message received.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
            >
              Thank you, {sent.name || "friend"}. I&apos;ll reply to{" "}
              <strong>{sent.email}</strong> within {profile.replyTime}. You can
              also reach me at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </motion.p>
            <motion.button
              type="button"
              className="cp_form_again"
              onClick={reset}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
            >
              <i className="fas fa-redo" aria-hidden="true" /> Send another message
            </motion.button>
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
            <div className="cp_form_head">
              <span className="cp_form_head-status">
                <span className="cp_form_head-dot" aria-hidden="true" />
                Replies within {profile.replyTime}
              </span>
              <span
                className={`cp_form_head-progress cp_form_head-progress-${
                  completed === 0
                    ? "empty"
                    : completed === REQUIRED_FIELDS.length
                      ? "done"
                      : "partial"
                }`}
                aria-live="polite"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={completed}
                    className="cp_form_head-count"
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    {completed}
                  </motion.span>
                </AnimatePresence>
                /{REQUIRED_FIELDS.length} required
              </span>
            </div>

            <div className="cp_form_row">
              <FloatingField
                {...fieldProps("name")}
                label="Your name"
                autoComplete="name"
                maxLength={100}
                required
              />
              <FloatingField
                {...fieldProps("email")}
                type="email"
                label="Email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <SelectField
              id="company"
              label="Company or team"
              placeholder="Select the best fit"
              value={values.company}
              options={COMPANY_TYPES}
              onChange={(v) => setValue("company", v)}
            />

            <div className="cp_pills_label">
              <span /> What do you need?
            </div>
            <div className="cp_pills">
              {services.map((s) => {
                const active = service === s;
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setService(s)}
                    className={`cp_pill${active ? " cp_pill-active" : ""}`}
                    aria-pressed={active}
                  >
                    {active && (
                      <motion.span
                        layoutId="cp-pill-active"
                        className="cp_pill-bg"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="cp_pill-text">{s}</span>
                  </button>
                );
              })}
            </div>

            <FloatingField
              {...fieldProps("message")}
              label="Project details"
              textarea
              maxLength={MESSAGE_MAX}
              hint={messageHint}
              required
            />

            <input
              type="text"
              name="botcheck"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="cp_honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <AnimatePresence>
              {status === "send-error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="cp_form_error"
                  role="alert"
                >
                  <AlertIcon />
                  <span>
                    {sendError || "Something went wrong sending your message."}{" "}
                    Please try again, or email me directly at{" "}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="cp_form_actions">
              <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="cp_form_submit"
                aria-label={submitting ? "Sending" : "Send message"}
              >
                <RollText text={submitting ? "Sending..." : "Send message"} />
                <span className="cp_form_submit-icon">
                  {submitting ? (
                    <Spinner />
                  ) : (
                    <>
                      <span className="cp_arrow cp_arrow-current">
                        <ArrowUpRight />
                      </span>
                      <span className="cp_arrow cp_arrow-next" aria-hidden="true">
                        <ArrowUpRight />
                      </span>
                    </>
                  )}
                </span>
              </button>
              <span className="cp_form_required-note">* Required</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

const FormCard = ({ children }) => {
  // Feeds the cursor position to CSS for the spotlight; no React re-renders.
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className="cp_form_wrap" onPointerMove={onPointerMove}>
      {children}
    </div>
  );
};

const ContactPage = () => {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
    { label: "Location", value: profile.location },
    { label: "Hours", value: profile.hours },
  ];

  return (
    <div className="cp_root">
      <div className="cp_aurora" aria-hidden />
      <article className="cp_article">
        <div className="cp_grid">
          <header className="cp_header">
            <motion.span
              className="section_label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              Contact
            </motion.span>

            <h1 className="cp_title">
              <RevealLine delay={0.2}>Let&apos;s work</RevealLine>
              <RevealLine delay={0.32}>together.</RevealLine>
            </h1>

            <motion.p
              className="cp_lede"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.6 }}
            >
              Tell me what you&apos;re building, your timeline and budget.
              The more detail you share, the better my reply.
            </motion.p>
          </header>
          <FormCard>
            <ContactForm />
          </FormCard>
          <aside className="cp_side">
            <div className="cp_side_block">
              <span className="cp_side_label">
                <span /> Contact details
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
                <span /> Social
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
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ContactPage;
