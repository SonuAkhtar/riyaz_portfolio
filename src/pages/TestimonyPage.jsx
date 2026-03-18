import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, scaleIn, viewportOptions } from "../utils/animations";
import Footer from "../components/Footer/Footer";
import "./testimonyPage.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const CATEGORY_COLORS = {
  Leadership: "#5b8dee",
  Technical:  "#7c6ff7",
  Product:    "#5bdc8e",
  Design:     "#f0a04b",
};

const FILTERS = ["All", "Leadership", "Technical", "Product", "Design"];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Chief Technology Officer",
    company: "TechVista Solutions",
    category: "Leadership",
    initials: "AM",
    avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #7c6ff7 100%)",
    rating: 5,
    quote: "Riyaz is one of the most technically sharp engineers I've had the pleasure of working with. He rebuilt our legacy monolith into a clean microservices architecture on Azure — cutting deployment time by 60% and developer onboarding from two weeks to three days. What truly sets him apart is that he communicated every architectural decision clearly to non-technical stakeholders. That's rare.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Product Manager",
    company: "Sapient Technologies",
    category: "Product",
    initials: "PS",
    avatarGrad: "linear-gradient(135deg, #c471ed 0%, #7c6ff7 100%)",
    rating: 5,
    quote: "Working with Riyaz transformed how our team approaches frontend development. He introduced a design system that reduced sprint delivery time by 35%. His attention to UX detail is exceptional and he bridges the gap between design and engineering better than anyone I've worked with.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "VP of Engineering",
    company: "DataFlow Inc",
    category: "Technical",
    initials: "MC",
    avatarGrad: "linear-gradient(135deg, #5bdc8e 0%, #5b8dee 100%)",
    rating: 5,
    quote: "The AI integration Riyaz built for our document processing pipeline was genuinely impressive. GPT-4 with RAG, custom chunking logic, and vector database search — shipped on time and scaling to 10,000 documents a day without a single production incident. This is senior engineering at its best.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Tech Lead",
    company: "Infosys Digital",
    category: "Technical",
    initials: "NK",
    avatarGrad: "linear-gradient(135deg, #f0a04b 0%, #fc5c7d 100%)",
    rating: 5,
    quote: "Riyaz's code quality sets the bar for the entire team. His PRs are thorough, his documentation is always current, and his mentorship of junior developers is genuinely patient and effective. He made our engineering culture measurably better during his tenure.",
  },
  {
    id: 5,
    name: "Liam O'Brien",
    role: "Engineering Manager",
    company: "Accenture Technology",
    category: "Leadership",
    initials: "LO",
    avatarGrad: "linear-gradient(135deg, #0078d4 0%, #5b8dee 100%)",
    rating: 5,
    quote: "Delivered a complex Azure-based reporting dashboard three weeks ahead of schedule. When post-UAT bugs surfaced, he owned them completely and had fixes deployed within hours — no blame, no excuses. Exactly the kind of senior engineer every delivery team needs.",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    role: "Principal Designer",
    company: "Publicis Sapient",
    category: "Design",
    initials: "AI",
    avatarGrad: "linear-gradient(135deg, #fd1d1d 0%, #fcb045 100%)",
    rating: 5,
    quote: "Riyaz is the rare engineer who genuinely understands design. He pushes back constructively when something isn't feasible, proposes smart alternatives, and implements Framer Motion animations that match the Figma prototype exactly. An absolute dream collaboration partner.",
  },
  {
    id: 7,
    name: "Rahul Gupta",
    role: "Director of Technology",
    company: "WNS Global Services",
    category: "Leadership",
    initials: "RG",
    avatarGrad: "linear-gradient(135deg, #7c6ff7 0%, #5bdc8e 100%)",
    rating: 5,
    quote: "We brought Riyaz in for a 3-month contract and extended him twice. His ability to context-switch between React, Node.js, and Azure infrastructure — while maintaining code quality across all three — is remarkable. He's full-stack in the truest, most rigorous sense.",
  },
  {
    id: 8,
    name: "Sophie Williams",
    role: "Product Owner",
    company: "Capgemini Engineering",
    category: "Product",
    initials: "SW",
    avatarGrad: "linear-gradient(135deg, #5b8dee 0%, #5bdc8e 100%)",
    rating: 5,
    quote: "Riyaz's estimation accuracy is exceptional — a genuine rarity in software delivery. He hit every milestone and proactively flagged scope changes the moment they emerged. That kind of transparency and accountability saved our project from going sideways twice.",
  },
];

const COMPANIES = [
  { name: "Publicis Sapient" },
  { name: "Infosys Digital" },
  { name: "Accenture Technology" },
  { name: "Capgemini Engineering" },
  { name: "WNS Global Services" },
  { name: "TechVista Solutions" },
  { name: "DataFlow Inc" },
  { name: "Sapient Technologies" },
];

/* ══════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════ */

/* Animated counter */
const AnimatedCounter = ({ target, suffix = "+" }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const end      = parseFloat(target);
    const duration = 1600;
    const start    = performance.now();
    let rafId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(suffix === ".0" ? (eased * end).toFixed(1) : Math.floor(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, suffix]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* Stars row */
const Stars = ({ count = 5 }) => (
  <div className="tp_stars">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fas fa-star" />
    ))}
  </div>
);

/* Avatar circle */
const Avatar = ({ initials, grad, size = "" }) => (
  <div
    className={`tp_avatar${size ? ` tp_avatar_${size}` : ""}`}
    style={{ background: grad }}
    aria-hidden="true"
  >
    {initials}
  </div>
);

/* ── Featured rotating quote ── */
const FeaturedCarousel = ({ items }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[idx];

  return (
    <div className="tp_featured">
      <span className="tp_featured_wm" aria-hidden="true">TRUST</span>

      {/* decorative quote mark */}
      <div className="tp_qmark" aria-hidden="true">&ldquo;</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="tp_featured_inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="tp_featured_quote">{current.quote}</p>

          <div className="tp_featured_person">
            <Avatar initials={current.initials} grad={current.avatarGrad} size="lg" />
            <div className="tp_person_text">
              <span className="tp_person_name">{current.name}</span>
              <span className="tp_person_role">{current.role}</span>
              <span className="tp_person_company">
                <i className="fas fa-building" />
                {current.company}
              </span>
            </div>
            <span
              className="tp_cat_badge"
              style={{ "--cat": CATEGORY_COLORS[current.category] }}
            >
              {current.category}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* progress dots */}
      <div className="tp_featured_dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`tp_fdot${i === idx ? " tp_fdot_active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Quote ${i + 1}`}
          />
        ))}
      </div>

      {/* auto-progress bar */}
      <div className="tp_featured_progress_track">
        <motion.div
          key={idx}
          className="tp_featured_progress_fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
};

/* ── Individual testimonial card with 3D tilt ── */
const TestimonyCard = ({ item }) => {
  const cardRef = useRef(null);
  const rotX    = useMotionValue(0);
  const rotY    = useMotionValue(0);

  const onMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    rotX.set(-(e.clientY - cy) / (rect.height / 2) * 5);
    rotY.set( (e.clientX - cx) / (rect.width  / 2) * 5);
    cardRef.current.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty("--my", `${((e.clientY - rect.top)  / rect.height * 100).toFixed(1)}%`);
  }, [rotX, rotY]);

  const onMouseLeave = useCallback(() => {
    animate(rotX, 0, { type: "spring", stiffness: 300, damping: 22 });
    animate(rotY, 0, { type: "spring", stiffness: 300, damping: 22 });
  }, [rotX, rotY]);

  return (
    <motion.article
      ref={cardRef}
      className="tp_card"
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 22 } }}
    >
      {/* spotlight glow that follows cursor */}
      <div className="tp_card_spotlight" />

      {/* top row: stars + category */}
      <div className="tp_card_top">
        <Stars count={item.rating} />
        <span
          className="tp_card_cat"
          style={{ "--cat": CATEGORY_COLORS[item.category] }}
        >
          <span className="tp_cat_dot" />
          {item.category}
        </span>
      </div>

      {/* quote text */}
      <p className="tp_card_quote">&ldquo;{item.quote}&rdquo;</p>

      {/* person row */}
      <div className="tp_card_foot">
        <Avatar initials={item.initials} grad={item.avatarGrad} />
        <div className="tp_card_person">
          <p className="tp_card_name">{item.name}</p>
          <p className="tp_card_role">{item.role}</p>
          <p className="tp_card_company">{item.company}</p>
        </div>
      </div>
    </motion.article>
  );
};

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
const TestimonyPage = () => {
  const [filter,  setFilter]  = useState("All");

  const filtered = filter === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === filter);

  const countFor = (f) => f === "All"
    ? TESTIMONIALS.length
    : TESTIMONIALS.filter((t) => t.category === f).length;

  return (
    <div className="tp_root">

      {/* ══════════════════════
          HERO
      ══════════════════════ */}
      <section className="tp_hero">
        <div className="tp_orb tp_orb1" aria-hidden="true" />
        <div className="tp_orb tp_orb2" aria-hidden="true" />
        <div className="tp_orb tp_orb3" aria-hidden="true" />
        <div className="tp_hero_grid"   aria-hidden="true" />

        <div className="tp_hero_inner">
          <motion.div
            className="tp_hero_content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Link to="/" className="tp_back_link">
                <i className="fas fa-arrow-left" />
                Back to Portfolio
              </Link>
            </motion.div>

            <motion.span className="section_label tp_label" variants={fadeInUp}>
              What People Say
            </motion.span>

            <motion.h1 className="tp_hero_title" variants={fadeInUp}>
              Built on<br />
              <span className="tp_hero_grad">Trust &amp; Respect.</span>
            </motion.h1>

            <motion.p className="tp_hero_sub" variants={fadeInUp}>
              Eight years of shipping with teams that trust each other. These are the
              words of colleagues, managers, and partners who've seen the work up close.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="tp_stats_row"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              { val: 20,  suffix: "+",  label: "Collaborators" },
              { val: 8,   suffix: "+",  label: "Years" },
              { val: 5,   suffix: ".0", label: "Avg Rating" },
              { val: 60,  suffix: "+",  label: "Projects" },
            ].map((s) => (
              <motion.div key={s.label} className="tp_stat" variants={scaleIn}>
                <span className="tp_stat_val">
                  <AnimatedCounter target={s.val} suffix={s.suffix} />
                </span>
                <span className="tp_stat_label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="tp_scroll_cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="tp_scroll_wheel"><span /></span>
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════
          FEATURED ROTATING QUOTE
      ══════════════════════ */}
      <section className="tp_featured_section">
        <FeaturedCarousel items={TESTIMONIALS} />
      </section>

      {/* ══════════════════════
          FILTERABLE GRID
      ══════════════════════ */}
      <section className="tp_grid_section">
        <div className="tp_container">
          <span className="tp_ghost_wm" aria-hidden="true">VOICES</span>

          <motion.div
            className="tp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>All Testimonials</motion.span>
            <motion.h2 className="tp_section_title" variants={fadeInUp}>
              Every Voice<br />
              <span className="tp_grad">Matters.</span>
            </motion.h2>
            <motion.p className="tp_section_sub" variants={fadeInUp}>
              Filtered by the kind of impact delivered — from engineering leadership
              to hands-on technical execution.
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="tp_filters"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`tp_filter_btn${filter === f ? " tp_filter_active" : ""}`}
                onClick={() => setFilter(f)}
                style={filter === f && f !== "All"
                  ? { "--active-color": CATEGORY_COLORS[f] }
                  : undefined}
              >
                {f !== "All" && (
                  <span
                    className="tp_filter_dot"
                    style={{ background: CATEGORY_COLORS[f] }}
                  />
                )}
                {f}
                <span className="tp_filter_count">{countFor(f)}</span>
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <motion.div className="tp_grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -16 }}
                  transition={{ duration: 0.38, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TestimonyCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════
          COMPANIES MARQUEE
      ══════════════════════ */}
      <div className="tp_marquee_wrap" aria-hidden="true">
        <div className="tp_marquee_label">Trusted by teams at</div>
        <div className="tp_marquee_outer">
          <div className="tp_marquee_track">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span key={i} className="tp_company_item">
                {c.name}
                <span className="tp_company_sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════
          CTA
      ══════════════════════ */}
      <section className="tp_cta_section">
        <div className="tp_cta_orb" aria-hidden="true" />

        <motion.div
          className="tp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>Ready to collaborate?</motion.span>
          <motion.h2 className="tp_cta_title" variants={fadeInUp}>
            Let's Write Your<br />
            <span className="tp_cta_grad">Story Together.</span>
          </motion.h2>
          <motion.p className="tp_cta_sub" variants={fadeInUp}>
            Great work speaks for itself. Let's build something remarkable —
            and add your voice to this list.
          </motion.p>
          <motion.div className="tp_cta_btns" variants={stagger}>
            <motion.a
              href="/#contact"
              className="btn btn_primary"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch <i className="fas fa-arrow-right" />
            </motion.a>
            <motion.div variants={scaleIn}>
              <Link to="/" className="btn btn_outline">
                <i className="fas fa-home" /> Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonyPage;
