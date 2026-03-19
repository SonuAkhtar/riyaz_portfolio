import { useRef, useState, useEffect, useCallback } from "react";
import "./hobbies.css";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";

import { hobbiesData, hobbyCat } from "../../../appData";

const WIDE = new Set([0, 5]);

const PhotoCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`hcard${WIDE.has(index) ? " hcard_wide" : ""}`}
      initial={{ opacity: 0, scale: 0.93, y: 18 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="hcard_img"
        loading="lazy"
      />
      <span className="hcard_idx" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="hcard_cam" aria-hidden="true">
        <i className="fas fa-camera" />
      </span>
      <div className="hcard_overlay" aria-hidden="true">
        <div className="hcard_info">
          <p className="hcard_info_label">Photography</p>
          <h3 className="hcard_info_title">{item.title}</h3>
          <p className="hcard_info_desc">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileCarousel = ({ items }) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [cw, setCw] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setCw(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const GAP = 12;

  const getTargetX = useCallback(
    (idx) => {
      if (!cw) return 0;
      const cardW = cw * 0.82;
      const margin = (cw - cardW) / 2;
      return margin - idx * (cardW + GAP);
    },
    [cw],
  );

  useEffect(() => {
    animate(x, getTargetX(active), {
      type: "spring",
      stiffness: 320,
      damping: 32,
    });
  }, [active, cw]);

  const handleDragEnd = useCallback(
    (_, info) => {
      const { offset, velocity } = info;
      if ((offset.x < -50 || velocity.x < -500) && active < items.length - 1) {
        setActive((p) => p + 1);
      } else if ((offset.x > 50 || velocity.x > 500) && active > 0) {
        setActive((p) => p - 1);
      } else {
        animate(x, getTargetX(active), {
          type: "spring",
          stiffness: 400,
          damping: 40,
        });
      }
    },
    [active, items.length, x, getTargetX],
  );

  const CARD_W = cw ? `${Math.floor(cw * 0.82)}px` : "82%";

  return (
    <div className="hcarousel" ref={containerRef}>
      <motion.div
        className="hcarousel_track"
        style={{ x }}
        drag="x"
        dragMomentum={false}
        onDragEnd={handleDragEnd}
      >
        {items.map((item, i) => {
          const isActive = i === active;
          const dist = Math.abs(i - active);

          return (
            <motion.div
              key={item.id}
              className={`hcc${isActive ? " hcc_active" : ""}`}
              style={{ width: CARD_W, flexShrink: 0 }}
              animate={{
                scale: isActive ? 1 : dist === 1 ? 0.88 : 0.82,
                opacity: isActive ? 1 : dist === 1 ? 0.48 : 0.18,
                rotateY: i < active ? 6 : i > active ? -6 : 0,
              }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => !isActive && setActive(i)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="hcc_img"
                loading="lazy"
              />

              <span className="hcc_idx">{String(i + 1).padStart(2, "0")}</span>

              <span className="hcc_cam_icon">
                <i className="fas fa-camera" />
              </span>

              <div className="hcc_overlay">
                <motion.div
                  className="hcc_info"
                  animate={
                    isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }
                  }
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="hcc_label">Photography</p>
                  <h3 className="hcc_title">{item.title}</h3>
                  <p className="hcc_desc">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="hcarousel_controls">
        <span className="hcarousel_counter">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <span className="hcc_sep"> / </span>
          {String(items.length).padStart(2, "0")}
        </span>

        <div
          className="hcarousel_dots"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              className={`hcarousel_dot${i === active ? " hcd_active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>

        <div className="hcarousel_arrows">
          <button
            className="hca_btn"
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            disabled={active === 0}
            aria-label="Previous photo"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="hca_btn"
            onClick={() => setActive((p) => Math.min(items.length - 1, p + 1))}
            disabled={active === items.length - 1}
            aria-label="Next photo"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>

      <div className="hcarousel_progress_track">
        <motion.div
          className="hcarousel_progress_fill"
          animate={{ scaleX: (active + 1) / items.length }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};

const Hobbies = () => (
  <section className="hobbies even" id="hobbies">
    <div className="container">
      <motion.div
        className="hobbies_header"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <motion.span className="section_label" variants={fadeInUp}>
          Beyond Code
        </motion.span>
        <div className="hobbies_head_row">
          <div>
            <motion.h2 className="hobbies_title" variants={fadeInUp}>
              Through
              <br />
              <span className="hobbies_title_grad">My Lens.</span>
            </motion.h2>
            <motion.p className="hobbies_subtitle" variants={fadeInUp}>
              Photography is how I slow down and see the world differently - one
              still frame at a time.
            </motion.p>
          </div>

          <motion.div className="hobbies_chips" variants={fadeInUp}>
            {hobbyCat.map((c) => (
              <span key={c.label} className="hchip">
                <i className={c.icon} />
                {c.label}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hobbies_grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {hobbiesData.map((item, i) => (
          <PhotoCard key={item.id} item={item} index={i} />
        ))}
      </motion.div>

      <MobileCarousel items={hobbiesData} />

      <motion.div
        className="hobbies_cta"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <span className="hobbies_cta_text">
          <i className="fab fa-instagram" />
          More shots on Instagram
        </span>
        <motion.a
          href="https://www.instagram.com/just_about_clicks/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn_outline hobbies_ig_btn"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="fab fa-instagram" />
          @just_about_clicks
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Hobbies;
