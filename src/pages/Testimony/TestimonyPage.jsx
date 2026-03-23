import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./testimonyPage.css";

// libraries
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import {
  fadeInUp,
  stagger,
  scaleIn,
  viewportOptions,
} from "../../utils/animations";

// appData
import { testimonyPageData } from "../../../appData";

// components
import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/common/PageHero/PageHero";

const FILTERS = ["All", "Leadership", "Technical", "Product"];

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
              style={{ "--cat": testimonyPageData.catColors[current.category] }}
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
          style={{ "--cat": testimonyPageData.catColors[item.category] }}
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
      ? testimonyPageData.testimony
      : testimonyPageData.testimony.filter((t) => t.category === filter);

  const countFor = (f) =>
    f === "All"
      ? testimonyPageData.testimony.length
      : testimonyPageData.testimony.filter((t) => t.category === f).length;

  return (
    <div className="tp_root">
      <PageHero heroData={testimonyPageData.hero} />

      <section className="tp_featured_section">
        <FeaturedCarousel items={testimonyPageData.testimony} />
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
              Filtered by the kind of impact delivered - from engineering
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
                    ? { "--active-color": testimonyPageData.catColors[f] }
                    : undefined
                }
              >
                {f !== "All" && (
                  <span
                    className="tp_filter_dot"
                    style={{ background: testimonyPageData.catColors[f] }}
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
            {[
              ...testimonyPageData.companies,
              ...testimonyPageData.companies,
            ].map((c, i) => (
              <span key={i} className="tp_company_item">
                {c.name}
                <span className="tp_company_sep">✦</span>
              </span>
            ))}
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
            Great work speaks for itself. Let's build something remarkable - and
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
                <i className="fas fa-house" /> Back to Home
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
