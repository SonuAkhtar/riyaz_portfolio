import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experienceData, educationData } from "../../../appData";
import { gsap, ScrollTrigger } from "../../utils/gsapSetup";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./trajectory.css";

const EASE = [0.22, 1, 0.36, 1];

const roles = experienceData.map((e) => ({
  key: `${e.company}-${e.period}`,
  period: e.period,
  startYear: (e.period.match(/\d{4}/) || [""])[0],
  title: e.title,
  company: e.company,
  location: e.location,
  current: e.current,
}));

// The degree is what matters at this stage of a career, so school years are
// left out of the page.
const degree = educationData[0];

const pad = (n) => String(n).padStart(2, "0");

const Trajectory = () => {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".trajectory_row");
      // The wipe runs on each row's body so the rail node outside it stays visible.

      gsap.fromTo(
        ".trajectory_rail-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );

      rows.forEach((row, i) => {
        if (!reduceMotion) {
          gsap.fromTo(
            row.querySelector(".trajectory_row-body"),
            { opacity: 0, y: 70, clipPath: "inset(0% 0% 100% 0%)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 95%",
                end: "top 65%",
                scrub: 0.8,
              },
            },
          );
        }

        ScrollTrigger.create({
          trigger: row,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const current = roles[active];

  return (
    <section className="trajectory_root" id="career" ref={rootRef}>
      <div className="section_inner">
        <SectionHeader eyebrow="Career" title="Where I've worked and studied." />

        <div className="trajectory_story">
          <aside className="trajectory_aside" aria-hidden="true">
            <span className="trajectory_aside-label">
              {current.current ? "Since" : "From"}
            </span>
            <div className="trajectory_year">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={current.startYear + active}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {current.startYear}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="trajectory_aside-company">{current.company}</span>
            <span className="trajectory_aside-count">
              {pad(active + 1)} / {pad(roles.length)}
            </span>
          </aside>

          <ol className="trajectory_list" ref={listRef}>
            <span className="trajectory_rail" aria-hidden="true">
              <span className="trajectory_rail-fill" />
            </span>
            {roles.map((r, i) => (
              <li
                key={r.key}
                className={`trajectory_row${i === active ? " is-active" : ""}`}
              >
                <span className="trajectory_node" aria-hidden="true" />
                <div className="trajectory_row-body">
                  <div className="trajectory_row-top">
                    <span className="trajectory_period">{r.period}</span>
                    {r.current && (
                      <span className="trajectory_badge">Current</span>
                    )}
                  </div>
                  <h3 className="trajectory_title">{r.title}</h3>
                  <span className="trajectory_meta">
                    {r.company}, {r.location}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="trajectory_edu">
          <h3 className="trajectory_edu-label">Education</h3>
          <div className="trajectory_edu-row">
            <span className="trajectory_period">
              {degree.period}
            </span>
            <span className="trajectory_edu-title">{degree.title}</span>
            <span className="trajectory_meta">{degree.org}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trajectory;
