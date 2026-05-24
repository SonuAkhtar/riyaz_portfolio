import { useEffect, useRef, useState } from "react";
import { hobbiesData } from "../../../appData";
import "./gallery.css";

const Arrow = ({ dir }) => (
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
    {dir === "left" ? (
      <>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </>
    ) : (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    )}
  </svg>
);

const Gallery = () => {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth - 1;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".gallery_item");
    const cardWidth = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * cardWidth * 1.2, behavior: "smooth" });
  };

  return (
    <section className="gallery_root">
      <div className="gallery_head">
        <div className="gallery_intro">
          <span className="gallery_eyebrow">
            <span /> Behind the work
          </span>
          <h2 className="gallery_title">Off the clock.</h2>
        </div>

        <div className="gallery_controls">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="gallery_ig-pill"
          >
            <i className="fab fa-instagram" aria-hidden="true" />
            <span>Follow on Instagram</span>
          </a>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => step(-1)}
            disabled={!canPrev}
            className={`gallery_btn gallery_btn--head${!canPrev ? " gallery_btn-disabled" : ""}`}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => step(1)}
            disabled={!canNext}
            className={`gallery_btn gallery_btn--head${!canNext ? " gallery_btn-disabled" : ""}`}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="gallery_scroller">
        <ul className="gallery_track">
          {hobbiesData.map((img, i) => (
            <li
              key={img.id}
              className="gallery_item"
              style={{ "--stagger": `${i * 0.05}s` }}
            >
              <div
                className="gallery_item-image"
                style={{ backgroundImage: `url(${img.image})` }}
              />
              <span className="gallery_item-caption">
                {String(i + 1).padStart(2, "0")} - {img.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="gallery_foot">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => step(-1)}
          disabled={!canPrev}
          className={`gallery_btn gallery_btn--foot${!canPrev ? " gallery_btn-disabled" : ""}`}
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => step(1)}
          disabled={!canNext}
          className={`gallery_btn gallery_btn--foot${!canNext ? " gallery_btn-disabled" : ""}`}
        >
          <Arrow dir="right" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
