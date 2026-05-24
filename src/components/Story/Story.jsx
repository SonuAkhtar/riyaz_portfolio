import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { storyData } from "../../../appData";
import "./story.css";

const EASE = [0.22, 1, 0.36, 1];

const chapters = storyData;

const ArrowLeft = () => (
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
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

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

const RevealLine = ({ children, delay = 0 }) => (
  <span className="story_reveal">
    <motion.span
      className="story_reveal-inner"
      initial={{ y: "110%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const ChapterCard = ({ c, total }) => (
  <li className="story_chapter" style={{ "--accent": c.accent }}>
    <span className="chapter_aurora" aria-hidden="true" />

    <header className="chapter_head">
      <span className="chapter_index">
        <span className="chapter_dot" aria-hidden="true" />
        Chapter {c.index}
      </span>
      <span className="chapter_location">{c.location}</span>
    </header>

    <div className="chapter_year-block">
      <span className="chapter_year">{c.year}</span>
      <span className="chapter_year-line" aria-hidden="true" />
      <span className="chapter_tag">{c.chapter}</span>
    </div>

    <div className="chapter_body">
      <h3 className="chapter_title">{c.title}</h3>
      <p className="chapter_text">{c.body}</p>
    </div>

    <footer className="chapter_footer">
      <ul className="chapter_milestones">
        {c.milestones.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <span className="chapter_counter">
        {c.index}
        <span>/ {String(total).padStart(2, "0")}</span>
      </span>
    </footer>
  </li>
);

const Story = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const carouselRef = useRef(null);
  const [travel, setTravel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (isMobile) return;
    const compute = () => {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.scrollWidth - track.clientWidth;
      setTravel(Math.max(0, distance));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      const cards = Array.from(el.querySelectorAll(".story_chapter"));
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIdx(closest);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const goTo = useCallback((idx) => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll(".story_chapter"));
    const target = cards[idx];
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <section ref={sectionRef} className="story_root">
      <div className="story_pin">
        <header className="story_intro">
          <div className="story_head">
            <span className="story_eyebrow">
              <span /> Story in {chapters.length} chapters
            </span>
            <h2 className="story_title">
              <RevealLine>Eight years,</RevealLine>
              <br />
              <span className="story_title-soft">
                <RevealLine delay={0.2}>shaping a practice.</RevealLine>
              </span>
            </h2>
          </div>

          {!isMobile && (
            <div className="story_progress">
              <span className="story_progress-label">Scroll to advance</span>
              <div className="story_progress-track">
                <motion.span
                  className="story_progress-bar"
                  style={{ scaleX: progress }}
                />
              </div>
            </div>
          )}
        </header>

        {!isMobile && (
          <div className="story_track_wrap">
            <motion.ol
              ref={trackRef}
              className="story_track"
              style={{ x }}
            >
              {chapters.map((c) => (
                <ChapterCard key={c.year} c={c} total={chapters.length} />
              ))}
            </motion.ol>
          </div>
        )}

        {isMobile && (
          <div className="story_carousel_wrap">
            <ol ref={carouselRef} className="story_carousel">
              {chapters.map((c) => (
                <ChapterCard key={c.year} c={c} total={chapters.length} />
              ))}
            </ol>

            <div className="story_carousel_foot">
              <button
                type="button"
                aria-label="Previous chapter"
                onClick={() => goTo(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                className="story_carousel_btn"
                data-cursor-hover
              >
                <ArrowLeft />
              </button>

              <div
                className="story_carousel_dots"
                role="tablist"
                aria-label="Story chapters"
              >
                {chapters.map((c, i) => (
                  <button
                    key={c.year}
                    type="button"
                    role="tab"
                    aria-label={`Chapter ${i + 1}`}
                    aria-selected={i === activeIdx}
                    onClick={() => goTo(i)}
                    className={`story_carousel_dot${
                      i === activeIdx ? " story_carousel_dot-active" : ""
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next chapter"
                onClick={() =>
                  goTo(Math.min(chapters.length - 1, activeIdx + 1))
                }
                disabled={activeIdx === chapters.length - 1}
                className="story_carousel_btn"
                data-cursor-hover
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Story;
