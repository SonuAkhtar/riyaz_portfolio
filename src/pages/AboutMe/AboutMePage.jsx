import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./aboutMePage.css";

import { motion, useInView } from "framer-motion";

import Footer from "../../components/Footer/Footer";
import { aboutMePageData } from "../../../appData";

const CountUp = ({ to, suffix = "", visible }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = to / 36;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) {
        setVal(to);
        clearInterval(iv);
      } else setVal(Math.floor(cur));
    }, 1000 / 36);
    return () => clearInterval(iv);
  }, [visible, to]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const vp = { once: true, margin: "-60px" };

const SkillBar = ({ skill, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="am_skill_bar"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="am_skill_bar_top">
        <span className="am_skill_bar_icon" style={{ color: skill.color }}>
          <i className={skill.icon} />
        </span>
        <span className="am_skill_bar_name">{skill.name}</span>
        <span className="am_skill_bar_pct" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="am_skill_bar_track">
        <motion.div
          className="am_skill_bar_fill"
          style={{
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{
            delay: delay + 0.2,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
};

const AboutMePage = () => {
  const statsRef = useRef(null);
  const statsVis = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <div className="amp_root">
      <section className="amp_hero">
        <div className="amp_hero_noise" aria-hidden="true" />
        <div className="amp_hero_orb amp_o1" aria-hidden="true" />
        <div className="amp_hero_orb amp_o2" aria-hidden="true" />
        <div className="amp_hero_grid" aria-hidden="true" />

        <div className="amp_hero_inner">
          <motion.div
            className="amp_hero_content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="amp_hero_title" variants={fadeUp}>
              Riyaz
              <br />
              <span className="amp_hero_grad">Akhtar.</span>
            </motion.h1>

            <motion.p className="amp_hero_sub" variants={fadeUp}>
              Lead Engineer · Frontend Architect · AI Integrator
            </motion.p>

            <motion.p className="amp_hero_bio" variants={fadeUp}>
              I build the interfaces people live in. With 8+ years engineering
              high-scale web applications, I specialize in React ecosystems,
              design systems, and now — crafting AI-powered experiences on
              Azure. Based in Gurgaon, India. Currently at{" "}
              <span className="amp_hl">Publicis Sapient</span>, delivering
              enterprise-grade digital products for global clients.
            </motion.p>

            <motion.div className="amp_hero_tags" variants={stagger}>
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Azure",
                "OpenAI",
                "Node.js",
              ].map((t) => (
                <motion.span key={t} className="amp_tag" variants={scaleIn}>
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="amp_stats"
            ref={statsRef}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {aboutMePageData.stats.map((s, i) => (
              <motion.div key={i} className="amp_stat" variants={fadeUp}>
                <span className="amp_stat_num">
                  <CountUp to={s.to} suffix={s.suffix} visible={statsVis} />
                </span>
                <span className="amp_stat_label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="amp_scroll_cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="amp_scroll_wheel">
            <span />
          </span>
          <span>Scroll</span>
        </motion.div>
      </section>

      <section className="amp_section amp_even">
        <div className="amp_container">
          <motion.div
            className="amp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.span className="amp_label" variants={fadeUp}>
              Core Expertise
            </motion.span>
            <motion.h2 className="amp_section_title" variants={fadeUp}>
              What I Do
              <br />
              <span className="amp_grad">Best.</span>
            </motion.h2>
            <motion.p className="amp_section_sub" variants={fadeUp}>
              8+ years of crafting production-grade applications has sharpened
              these skills to a fine edge.
            </motion.p>
          </motion.div>

          <div className="amp_skills_grid">
            <div className="amp_skills_bars">
              {aboutMePageData.coreSkills.map((sk, i) => (
                <SkillBar key={sk.name} skill={sk} delay={i * 0.08} />
              ))}
            </div>

            <motion.div
              className="amp_skills_story"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="amp_story_card">
                <div className="amp_story_icon">
                  <i className="fas fa-terminal" />
                </div>
                <h3 className="amp_story_title">Frontend Architect</h3>
                <p className="amp_story_text">
                  I don't just write React components — I architect component
                  libraries, define design token systems, and enforce code
                  contracts that scale teams from 2 to 20 engineers without
                  chaos.
                </p>
              </div>

              <div className="amp_story_card amp_story_card_accent">
                <div className="amp_story_icon amp_story_icon_accent">
                  <i className="fas fa-layer-group" />
                </div>
                <h3 className="amp_story_title">Full-Stack Fluency</h3>
                <p className="amp_story_text">
                  While UI is my home, I'm equally comfortable in Node.js APIs,
                  MongoDB schemas, GraphQL resolvers, and serverless Azure
                  Functions — bridging frontend and backend seamlessly.
                </p>
              </div>

              <div className="amp_story_card">
                <div className="amp_story_icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                <h3 className="amp_story_title">Performance Obsessed</h3>
                <p className="amp_story_text">
                  Code splitting, lazy loading, virtualized lists, memoization —
                  I treat every Lighthouse report as a personal challenge.
                  Sub-2s LCP is the standard, not the goal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="amp_section">
        <div className="amp_container">
          <motion.div
            className="amp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.span className="amp_label" variants={fadeUp}>
              Artificial Intelligence
            </motion.span>
            <motion.h2 className="amp_section_title" variants={fadeUp}>
              Building with
              <br />
              <span className="amp_grad">Intelligence.</span>
            </motion.h2>
            <motion.p className="amp_section_sub" variants={fadeUp}>
              AI isn't the future — it's the present. I integrate LLMs, vision
              models, and intelligent APIs to build products that feel like
              they're thinking alongside the user.
            </motion.p>
          </motion.div>

          <motion.div
            className="amp_ai_banner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="amp_ai_banner_left">
              <span className="amp_ai_pulse_ring" aria-hidden="true" />
              <span className="amp_ai_pulse_dot" aria-hidden="true" />
              <div>
                <p className="amp_ai_banner_title">
                  AI-First Development Mindset
                </p>
                <p className="amp_ai_banner_sub">
                  Integrating intelligence at every layer of the stack
                </p>
              </div>
            </div>
            <div className="amp_ai_banner_right">
              {["GPT-4", "LangChain", "RAG", "Copilot", "Embeddings"].map(
                (t) => (
                  <span key={t} className="amp_ai_chip">
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            className="amp_ai_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {aboutMePageData.aiStack.map((item, i) => (
              <motion.div
                key={item.name}
                className={`amp_ai_card amp_ai_${item.color}`}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="amp_ai_card_icon">
                  <i className={item.icon} />
                </div>
                <div className="amp_ai_card_badge">{item.badge}</div>
                <h3 className="amp_ai_card_name">{item.name}</h3>
                <p className="amp_ai_card_desc">{item.desc}</p>
                <div className="amp_ai_card_bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="amp_section amp_even amp_azure_section">
        <div className="amp_container">
          <div className="amp_azure_layout">
            <motion.div
              className="amp_azure_left"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.span className="amp_label" variants={fadeUp}>
                Cloud Platform
              </motion.span>
              <motion.h2 className="amp_section_title" variants={fadeUp}>
                Living on
                <br />
                <span className="amp_grad">Azure.</span>
              </motion.h2>
              <motion.p className="amp_azure_body" variants={fadeUp}>
                From CI/CD pipelines that deploy in minutes, to serverless
                functions that scale to zero and back — Azure is the cloud layer
                powering my production applications. I build cloud-native by
                default.
              </motion.p>
              <motion.div className="amp_azure_badges" variants={stagger}>
                {[
                  "Azure Certified",
                  "CI/CD Expert",
                  "Serverless",
                  "Cloud-Native",
                ].map((b) => (
                  <motion.span
                    key={b}
                    className="amp_azure_badge"
                    variants={scaleIn}
                  >
                    <i className="fas fa-check-circle" /> {b}
                  </motion.span>
                ))}
              </motion.div>

              {/* Azure logo block */}
              <motion.div className="amp_azure_logo_block" variants={fadeUp}>
                <div className="amp_azure_logo_icon">
                  <i className="fab fa-microsoft" />
                </div>
                <div>
                  <p className="amp_azure_logo_name">Microsoft Azure</p>
                  <p className="amp_azure_logo_sub">Cloud · AI · DevOps</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="amp_azure_right"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {aboutMePageData.azureStack.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="amp_azure_card"
                  variants={fadeLeft}
                  whileHover={{ x: 6, borderColor: "var(--border-accent)" }}
                >
                  <div className="amp_azure_card_icon">
                    <i className={item.icon} />
                  </div>
                  <div className="amp_azure_card_body">
                    <h3 className="amp_azure_card_name">{item.name}</h3>
                    <p className="amp_azure_card_desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="amp_section">
        <div className="amp_container">
          <motion.div
            className="amp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.span className="amp_label" variants={fadeUp}>
              How I Work
            </motion.span>
            <motion.h2 className="amp_section_title" variants={fadeUp}>
              Engineering
              <br />
              <span className="amp_grad">Philosophy.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="amp_phil_grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {aboutMePageData.philisophy.map((p, i) => (
              <motion.div
                key={p.num}
                className="amp_phil_card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <span className="amp_phil_num">{p.num}</span>
                <h3 className="amp_phil_title">{p.title}</h3>
                <p className="amp_phil_body">{p.body}</p>
                <div className="amp_phil_bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="amp_section amp_even">
        <div className="amp_container">
          <motion.div
            className="amp_section_head"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.span className="amp_label" variants={fadeUp}>
              Career Timeline
            </motion.span>
            <motion.h2 className="amp_section_title" variants={fadeUp}>
              The Road
              <br />
              <span className="amp_grad">Here.</span>
            </motion.h2>
          </motion.div>

          <div className="amp_timeline">
            {aboutMePageData.journey.map((item, i) => (
              <motion.div
                key={i}
                className={`amp_tl_item${item.current ? " amp_tl_current" : ""}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="amp_tl_dot_wrap">
                  <div className="amp_tl_dot">
                    <span className="amp_tl_dot_inner" />
                    {item.current && <span className="amp_tl_ring" />}
                  </div>
                </div>

                <div className="amp_tl_card">
                  <div className="amp_tl_top">
                    <span className="amp_tl_year">
                      <i className="fas fa-clock" /> {item.year}
                    </span>
                    <span
                      className={`amp_tl_tag${item.current ? " amp_tl_tag_now" : ""}`}
                    >
                      {item.current ? (
                        <>
                          <span className="amp_tl_now_dot" />
                          Now
                        </>
                      ) : (
                        item.type
                      )}
                    </span>
                  </div>
                  <h3 className="amp_tl_title">{item.title}</h3>
                  <p className="amp_tl_org">
                    <i className="fas fa-building" /> {item.org}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="amp_cta_section">
        <div className="amp_cta_noise" aria-hidden="true" />
        <div className="amp_cta_orb" aria-hidden="true" />

        <motion.div
          className="amp_cta_inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.span className="amp_label" variants={fadeUp}>
            Ready to build together?
          </motion.span>
          <motion.h2 className="amp_cta_title" variants={fadeUp}>
            Let's Create
            <br />
            <span className="amp_cta_grad">Something Great.</span>
          </motion.h2>
          <motion.p className="amp_cta_sub" variants={fadeUp}>
            Open to senior roles, contract work, and interesting side projects.
            Based in Gurgaon · Available globally.
          </motion.p>

          <motion.div className="amp_cta_btns" variants={stagger}>
            <motion.a
              href="/#contact"
              className="btn btn_primary"
              variants={scaleIn}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch <i className="fas fa-arrow-right" />
            </motion.a>
            <motion.a
              href="/assets/Riyaz_Akhtar_Resume.pdf"
              download
              className="btn btn_outline"
              variants={scaleIn}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV <i className="fas fa-download" />
            </motion.a>
            <motion.div variants={scaleIn}>
              <Link to="/" className="btn btn_ghost">
                <i className="fas fa-home" /> Back to Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMePage;
