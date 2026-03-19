import { useState, useEffect, useRef, useCallback } from "react";
import "./testimonyPage.css";

import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeInUp,
  stagger,
  scaleIn,
  viewportOptions,
} from "../../utils/animations";
import {
  testimonyPageCatColors,
  testimonyPageCompanies,
  testimonyPageData,
} from "../../../appData";

import Footer from "../../components/Footer/Footer";

const FILTERS = ["All", "Leadership", "Technical", "Product", "Design"];

const AnimatedCounter = ({ target, suffix = "+" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const end = parseFloat(target);
    const duration = 1600;
    const start = performance.now();
    let rafId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(
        suffix === ".0" ? (eased * end).toFixed(1) : Math.floor(eased * end),
      );
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, suffix]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stars = ({ count = 5 }) => (
  <div className="tp_stars">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fas fa-star" />
    ))}
  </div>
);

const Avatar = ({ initials, grad, size = "" }) => (
  <div
    className={`tp_avatar${size ? ` tp_avatar_${size}` : ""}`}
    style={{ background: grad }}
    aria-hidden="true"
  >
    {initials}
  </div>
);

const FeaturedCarousel = ({ items }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[idx];

  return (
    <div className="tp_featured">
      <div className="tp_qmark" aria-hidden="true">
        &ldquo;
      </div>

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
            <Avatar
              initials={current.initials}
              grad={current.avatarGrad}
              size="lg"
            />
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
              style={{ "--cat": testimonyPageCatColors[current.category] }}
            >
              {current.category}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

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

const TestimonyCard = ({ item }) => {
  const cardRef = useRef(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const onMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rotX.set((-(e.clientY - cy) / (rect.height / 2)) * 5);
      rotY.set(((e.clientX - cx) / (rect.width / 2)) * 5);
      cardRef.current.style.setProperty(
        "--mx",
        `${(((e.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`,
      );
      cardRef.current.style.setProperty(
        "--my",
        `${(((e.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`,
      );
    },
    [rotX, rotY],
  );

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
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
    >
      <div className="tp_card_spotlight" />

      <div className="tp_card_top">
        <Stars count={item.rating} />
        <span
          className="tp_card_cat"
          style={{ "--cat": testimonyPageCatColors[item.category] }}
        >
          <span className="tp_cat_dot" />
          {item.category}
        </span>
      </div>

      <p className="tp_card_quote">&ldquo;{item.quote}&rdquo;</p>

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

const TestimonyPage = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? testimonyPageData
      : testimonyPageData.filter((t) => t.category === filter);

  const countFor = (f) =>
    f === "All"
      ? testimonyPageData.length
      : testimonyPageData.filter((t) => t.category === f).length;

  return (
    <div className="tp_root">
      <section className="tp_hero">
        <div className="tp_orb tp_orb1" aria-hidden="true" />
        <div className="tp_orb tp_orb2" aria-hidden="true" />
        <div className="tp_orb tp_orb3" aria-hidden="true" />
        <div className="tp_hero_grid" aria-hidden="true" />

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

            <motion.h1 className="tp_hero_title" variants={fadeInUp}>
              Built on
              <br />
              <span className="tp_hero_grad">Trust &amp; Respect.</span>
            </motion.h1>

            <motion.p className="tp_hero_sub" variants={fadeInUp}>
              Eight years of shipping with teams that trust each other. These
              are the words of colleagues, managers, and partners who've seen
              the work up close.
            </motion.p>
          </motion.div>

          <motion.div
            className="tp_stats_row"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              { val: 20, suffix: "+", label: "Collaborators" },
              { val: 8, suffix: "+", label: "Years" },
              { val: 5, suffix: ".0", label: "Avg Rating" },
              { val: 60, suffix: "+", label: "Projects" },
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
          <span className="tp_scroll_wheel">
            <span />
          </span>
          <span>Scroll</span>
        </motion.div>
      </section>

      <section className="tp_featured_section">
        <FeaturedCarousel items={testimonyPageData} />
      </section>

      <section className="tp_grid_section">
        <div className="tp_container">
          <motion.div
            className="tp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              All Testimonials
            </motion.span>
            <motion.h2 className="tp_section_title" variants={fadeInUp}>
              Every Voice
              <br />
              <span className="tp_grad">Matters.</span>
            </motion.h2>
            <motion.p className="tp_section_sub" variants={fadeInUp}>
              Filtered by the kind of impact delivered — from engineering
              leadership to hands-on technical execution.
            </motion.p>
          </motion.div>

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
                style={
                  filter === f && f !== "All"
                    ? { "--active-color": testimonyPageCatColors[f] }
                    : undefined
                }
              >
                {f !== "All" && (
                  <span
                    className="tp_filter_dot"
                    style={{ background: testimonyPageCatColors[f] }}
                  />
                )}
                {f}
                <span className="tp_filter_count">{countFor(f)}</span>
              </button>
            ))}
          </motion.div>

          <motion.div className="tp_grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -16 }}
                  transition={{
                    duration: 0.38,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TestimonyCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <div className="tp_marquee_wrap" aria-hidden="true">
        <div className="tp_marquee_label">Trusted by teams at</div>
        <div className="tp_marquee_outer">
          <div className="tp_marquee_track">
            {[...testimonyPageCompanies, ...testimonyPageCompanies].map(
              (c, i) => (
                <span key={i} className="tp_company_item">
                  {c.name}
                  <span className="tp_company_sep">✦</span>
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <section className="tp_cta_section">
        <div className="tp_cta_orb" aria-hidden="true" />

        <motion.div
          className="tp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            Ready to collaborate?
          </motion.span>
          <motion.h2 className="tp_cta_title" variants={fadeInUp}>
            Let's Write Your
            <br />
            <span className="tp_cta_grad">Story Together.</span>
          </motion.h2>
          <motion.p className="tp_cta_sub" variants={fadeInUp}>
            Great work speaks for itself. Let's build something remarkable — and
            add your voice to this list.
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
