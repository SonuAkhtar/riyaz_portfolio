import "./worksPage.css";

import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeInUp,
  stagger,
  scaleIn,
  viewportOptions,
} from "../../utils/animations";
import { worksPageData } from "../../../appData";

import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/common/PageHero/PageHero";

const StatBox = ({ value, label }) => (
  <div className="wp_stat">
    <span className="wp_stat_value">{value}</span>
    <span className="wp_stat_label">{label}</span>
  </div>
);

const WorksPage = () => {
  return (
    <div className="wp_root">
      <PageHero heroData={worksPageData.hero} />

      <section className="wp_section">
        <div className="wp_container">
          <motion.div
            className="wp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              What I Offer
            </motion.span>
            <motion.h2 className="wp_section_title" variants={fadeInUp}>
              Six Ways I<br />
              <span className="wp_grad">Deliver Value.</span>
            </motion.h2>
            <motion.p className="wp_section_sub" variants={fadeInUp}>
              Specialized capabilities that combine into end-to-end product
              engineering. Every service backed by 8+ years of production
              experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="wp_services_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {worksPageData.works.map((svc, i) => (
              <motion.article
                key={svc.number}
                className="wp_svc_card"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
              >
                {/* Accent bar */}
                <div className="wp_svc_accent_bar" />

                {/* Ghost number */}
                <span className="wp_svc_ghost_num" aria-hidden="true">
                  {svc.number}
                </span>

                {/* Icon */}
                <div
                  className="wp_svc_icon_wrap"
                  style={{ "--svc-color": svc.accent }}
                >
                  <i className={svc.icon} />
                </div>

                {/* Header */}
                <div className="wp_svc_head">
                  <h3 className="wp_svc_title">{svc.title}</h3>
                  <span className="wp_svc_num_badge">{svc.number}</span>
                </div>

                <p className="wp_svc_summary">{svc.summary}</p>

                {/* Features */}
                <ul className="wp_svc_features">
                  {svc.features.map((f) => (
                    <li key={f}>
                      <span
                        className="wp_svc_bullet"
                        style={{ background: svc.accent }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="wp_svc_tags">
                  {svc.tags.map((t) => (
                    <span key={t} className="wp_svc_tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div
                  className="wp_svc_bottom_line"
                  style={{ background: svc.accent }}
                />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="wp_section wp_even">
        <div className="wp_container">
          <motion.div
            className="wp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.span className="section_label" variants={fadeInUp}>
              How I Work
            </motion.span>
            <motion.h2 className="wp_section_title" variants={fadeInUp}>
              The Engineering
              <br />
              <span className="wp_grad">Process.</span>
            </motion.h2>
            <motion.p className="wp_section_sub" variants={fadeInUp}>
              A proven 4-step approach that takes ideas from fuzzy concept to
              production-deployed reality. No surprises, no scope creep — just
              clean execution.
            </motion.p>
          </motion.div>

          <motion.div
            className="wp_process_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {worksPageData.process.map((step, i) => (
              <motion.div
                key={step.num}
                className="wp_process_card"
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
              >
                <div className="wp_process_top">
                  <div
                    className="wp_process_icon"
                    style={{ "--step-color": step.color }}
                  >
                    <i className={step.icon} />
                  </div>
                  <span
                    className="wp_process_num"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="wp_process_title">{step.title}</h3>
                <p className="wp_process_body">{step.body}</p>
                {i < worksPageData.process.length - 1 && (
                  <span className="wp_process_connector" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="wp_section">
        <div className="wp_container">
          <div className="wp_highlight_grid">
            {/* AI column */}
            <motion.div
              className="wp_highlight_col"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div
                className="wp_highlight_card wp_ai_card"
                variants={fadeInUp}
              >
                <div className="wp_highlight_accent_bar wp_ai_bar" />

                <div className="wp_highlight_icon_row">
                  <div className="wp_highlight_icon wp_ai_icon">
                    <i className="fas fa-robot" />
                  </div>
                  <span className="wp_highlight_badge wp_ai_badge">
                    AI Integration
                  </span>
                </div>

                <h2 className="wp_highlight_title">
                  Building with
                  <br />
                  <span className="wp_ai_grad">Intelligence.</span>
                </h2>

                <p className="wp_highlight_body">
                  AI isn't a feature I add after the fact — it's an
                  architectural decision I make from the start. From GPT-4
                  completions to RAG pipelines backed by vector databases, I
                  integrate LLMs at the system level with proper context
                  management, retry logic, and cost controls.
                </p>

                <div className="wp_highlight_chips">
                  {["GPT-4", "LangChain", "RAG", "Embeddings", "Copilot"].map(
                    (c) => (
                      <span key={c} className="wp_chip wp_ai_chip">
                        {c}
                      </span>
                    ),
                  )}
                </div>

                <ul className="wp_highlight_list">
                  <li>
                    <i className="fas fa-check" /> Streaming AI chat interfaces
                  </li>
                  <li>
                    <i className="fas fa-check" /> Document Q&amp;A with RAG
                  </li>
                  <li>
                    <i className="fas fa-check" /> AI-powered search &amp;
                    summarization
                  </li>
                  <li>
                    <i className="fas fa-check" /> Custom AI Agents &amp;
                    automation
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Azure column */}
            <motion.div
              className="wp_highlight_col"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div
                className="wp_highlight_card wp_azure_card"
                variants={fadeInUp}
              >
                <div className="wp_highlight_accent_bar wp_azure_bar" />

                <div className="wp_highlight_icon_row">
                  <div className="wp_highlight_icon wp_azure_icon">
                    <i className="fab fa-microsoft" />
                  </div>
                  <span className="wp_highlight_badge wp_azure_badge">
                    Cloud Platform
                  </span>
                </div>

                <h2 className="wp_highlight_title">
                  Shipped on
                  <br />
                  <span className="wp_azure_grad">Azure.</span>
                </h2>

                <p className="wp_highlight_body">
                  Cloud-native by default. Every application I ship lives on
                  Azure — auto-scaling, zero-downtime deploys, and full
                  observability via Application Insights. Three Azure
                  certifications (AZ-204, AI-102, AZ-900) back this expertise
                  with formal recognition.
                </p>

                <div className="wp_highlight_chips">
                  {[
                    "DevOps",
                    "Functions",
                    "Static Web Apps",
                    "AI Services",
                    "Insights",
                  ].map((c) => (
                    <span key={c} className="wp_chip wp_azure_chip">
                      {c}
                    </span>
                  ))}
                </div>

                <ul className="wp_highlight_list">
                  <li>
                    <i className="fas fa-check" /> CI/CD pipelines from day one
                  </li>
                  <li>
                    <i className="fas fa-check" /> Serverless Functions &amp;
                    triggers
                  </li>
                  <li>
                    <i className="fas fa-check" /> Application Insights
                    monitoring
                  </li>
                  <li>
                    <i className="fas fa-check" /> Container Apps &amp;
                    microservices
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="wp_cta_section">
        <div className="wp_cta_orb" aria-hidden="true" />

        <motion.div
          className="wp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            Ready to ship?
          </motion.span>
          <motion.h2 className="wp_cta_title" variants={fadeInUp}>
            Start a Project
            <br />
            <span className="wp_cta_grad">Today.</span>
          </motion.h2>
          <motion.p className="wp_cta_sub" variants={fadeInUp}>
            Whether you need a React app, an AI integration, or a full Azure
            deployment — let's build something that scales.
          </motion.p>
          <motion.div className="wp_cta_btns" variants={stagger}>
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

export default WorksPage;
