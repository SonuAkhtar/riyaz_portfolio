import { useState } from "react";
import "./works.css";

import { motion } from "framer-motion";
import WorkModal from "../WorkModal/WorkModal";

import { homeWorkTags, worksData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Works = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [activeCard, setActiveCard] = useState(null);

  const handleViewClick = (data) => {
    setOpenModal(true);
    setModalData(data);
  };

  return (
    <section className="works even" id="works">
      <div className="container">
        <motion.div
          className="works_header"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            What I Do
          </motion.span>
          <motion.h2 className="works_title" variants={fadeInUp}>
            Crafting Digital
            <br />
            <span className="works_title_accent">Experiences.</span>
          </motion.h2>
          <motion.p className="works_subtitle" variants={fadeInUp}>
            End-to-end solutions — from pixel-perfect interfaces to robust,
            scalable backend systems.
          </motion.p>
        </motion.div>

        <motion.div
          className="works_grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {worksData.map((data, i) => (
            <motion.article
              key={i}
              className={`work_card${activeCard === i ? " hovered" : ""}`}
              variants={cardVariant}
              onHoverStart={() => setActiveCard(i)}
              onHoverEnd={() => setActiveCard(null)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="wc_flood" aria-hidden="true" />

              <span className="wc_ghost_num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="wc_top">
                <div className="wc_icon_wrap">
                  <i className={data.icon} />
                </div>
              </div>

              <h3 className="wc_title">{data.name}</h3>

              <div className="wc_divider">
                <span className="wc_divider_line" />
                <span className="wc_divider_dot" />
              </div>

              <ul className="wc_features">
                {data.features.slice(0, 3).map((feat, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.07 }}
                  >
                    <span className="wc_feat_bullet" />
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="wc_tags">
                {homeWorkTags[i].map((tag, j) => (
                  <span key={j} className="wc_tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="wc_btn" onClick={() => handleViewClick(data)}>
                <span>Explore Service</span>
                <span className="wc_btn_arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="works_cta_strip"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="cta_strip_text">
            <span className="cta_strip_eyebrow">Got a project in mind?</span>
            <p className="cta_strip_title">
              Let's build something <span className="cts_grad">remarkable</span>{" "}
              together.
            </p>
          </div>
          <motion.a
            href="#contact"
            className="btn btn_primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project <i className="fas fa-arrow-right" />
          </motion.a>
        </motion.div>
      </div>

      <WorkModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalData={modalData}
      />
    </section>
  );
};

export default Works;
