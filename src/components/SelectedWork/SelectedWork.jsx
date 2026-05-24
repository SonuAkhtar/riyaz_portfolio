import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../../appData";
import { PROJECT_COLORS } from "../../utils/themeColors";
import "./selectedWork.css";

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

const SelectedWork = () => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    const compute = () => {
      const track = trackRef.current;
      if (!track) return;
      const distance = track.scrollWidth - window.innerWidth;
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
  }, []);

  const featured = projectsData.slice(0, 3);

  return (
    <section
      className="selectedwork_root"
      id="selected-work"
      style={{ "--card-count": featured.length + 1 }}
    >
      <div ref={wrapRef} className="selectedwork_scroll">
        <div className="selectedwork_scroll-sticky">
          <div className="selectedwork_intro">
            <span className="selectedwork_eyebrow">
              <span /> Selected work, 2022 to 2026
            </span>
            <motion.h2
              className="selectedwork_title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Work I am proud of.
            </motion.h2>
          </div>

          <div className="selectedwork_track-wrap">
            <motion.div
              ref={trackRef}
              className="selectedwork_scroll-track"
              style={{ x }}
            >
              {featured.map((p, i) => {
                const accent = PROJECT_COLORS[i % PROJECT_COLORS.length];
                const href = p.live || p.github || "/projects";
                const isExternal = href.startsWith("http");
                const CardWrap = isExternal ? "a" : Link;
                const linkProps = isExternal
                  ? {
                      href,
                      target: "_blank",
                      rel: "noreferrer noopener",
                    }
                  : { to: href };

                return (
                  <CardWrap
                    key={p.id}
                    {...linkProps}
                    className="selectedwork_card"
                    style={{ "--accent": accent }}
                  >
                    <div className="selectedwork_card-meta">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{p.year}</span>
                    </div>
                    <div
                      className="selectedwork_card-image"
                      style={{ backgroundImage: `url(${p.image})` }}
                    >
                      <div className="selectedwork_card-image-overlay" />
                    </div>
                    <div className="selectedwork_card-body">
                      <div>
                        <h3 className="selectedwork_card-title">{p.name}</h3>
                        <p className="selectedwork_card-subtitle">{p.desc}</p>
                      </div>
                      <div className="selectedwork_card-foot">
                        <div className="selectedwork_card-tags">
                          {p.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        <span className="selectedwork_card-arrow">
                          <ArrowUpRight />
                        </span>
                      </div>
                    </div>
                  </CardWrap>
                );
              })}

              <Link to="/projects" className="selectedwork_more">
                <span>View all projects</span>
                <ArrowUpRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="selectedwork_footer">
        <Link to="/projects" className="selectedwork_viewall">
          <span>View all projects</span>
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
};

export default SelectedWork;
