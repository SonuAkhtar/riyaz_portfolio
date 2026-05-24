import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import { palette } from "../../utils/themeColors";
import { servicesPreview } from "../../../appData";
import "./works.css";

const SLOT_ACCENTS = [
  palette.violet400,
  palette.blue600,
  palette.green400,
  palette.amber400,
];
const SERVICES_PREVIEW = servicesPreview.map((s, i) => ({
  ...s,
  accent: SLOT_ACCENTS[i % SLOT_ACCENTS.length],
}));

const Works = () => (
  <section className="works" id="works">
    <div className="works_inner">
      <motion.div
        className="works_head"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        <motion.span className="section_label" variants={fadeInUp}>
          What I do
        </motion.span>
        <motion.h2 className="works_title" variants={fadeInUp}>
          Four disciplines.
          <br />
          <em className="works_title_em">One opinionated builder.</em>
        </motion.h2>
        <motion.p className="works_subtitle" variants={fadeInUp}>
          I don't sell hours, I sell shipped outcomes. Pick the surface area
          that fits your problem; I'll bring the rest.
        </motion.p>
      </motion.div>

      <motion.div
        className="works_grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
          },
        }}
      >
        {SERVICES_PREVIEW.map((s) => (
          <motion.article
            key={s.num}
            className="work_card"
            style={{ "--svc-color": s.accent }}
            variants={{
              hidden: { opacity: 0, y: 48, scale: 0.96, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="wc_glow" aria-hidden="true" />
            <div className="wc_head">
              <span className="wc_num">{s.num}</span>
              <div className="wc_icon_wrap">
                <i className={s.icon} />
              </div>
            </div>

            <h3 className="wc_title">{s.title}</h3>
            <p className="wc_summary">{s.summary}</p>

            {s.tech && (
              <ul className="wc_tech">
                {s.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}

            {s.deliverables && (
              <ul className="wc_deliverables">
                {s.deliverables.map((d) => (
                  <li key={d}>
                    <span className="wc_deliverable-dot" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="works_footer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/services"
          className="works_more_cta"
          aria-label="See all services"
        >
          See all services
          <i className="fas fa-arrow-right" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Works;
