import "./contact.css";

import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
  viewportOptions,
} from "../../utils/animations";

import { contactData, homeContactIcons, socialIconsData } from "../../../appData";

const Contact = () => {
  return (
    <section className="contact even" id="contact">
      <div className="container">
        <motion.div
          className="contact__header"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            Reach Out
          </motion.span>
        </motion.div>

        <div className="contact__body">
          <motion.div
            className="contact__left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="contact__avail">
              <span className="contact__avail-ring" aria-hidden="true" />
              <span className="contact__avail-dot" aria-hidden="true" />
              Open for new opportunities
            </div>

            <h2 className="contact__heading">
              Let's Build
              <br />
              <span className="contact__heading-grad">Something</span>
              <br />
              Remarkable.
            </h2>

            <p className="contact__bio">
              Open to full-time roles, freelance projects, and interesting
              collaborations. I love turning ideas into polished digital
              experiences.
            </p>

            <div className="contact__socials">
              {socialIconsData.map((s) => (
                <motion.a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__soc-btn"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={s.class} />
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:sonua981@gmail.com"
              className="btn btn_primary contact__cta"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fas fa-paper-plane" />
              Send a Message
            </motion.a>
          </motion.div>

          <motion.div
            className="contact__right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="contact__channels">
              {contactData.map((item, i) => {
                const meta = homeContactIcons[item.alt] || {
                  icon: "fas fa-info",
                  color: "contact__channel-icon--blue",
                };
                const colorClass = `contact__channel-icon--${
                  meta.color.replace("cc_", "")
                }`;
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.id}
                    className="contact__channel-wrap"
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.1,
                    }}
                  >
                    <Tag
                      className={`contact__channel${item.href ? " contact__channel--link" : ""}`}
                      href={item.href}
                      {...(item.href
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className={`contact__channel-icon ${colorClass}`}>
                        <i className={meta.icon} />
                      </span>
                      <span className="contact__channel-body">
                        <span className="contact__channel-label">{item.name}</span>
                        <span className="contact__channel-value">{item.info}</span>
                      </span>
                      {item.href && (
                        <span className="contact__channel-arrow" aria-hidden="true">
                          <i className="fas fa-arrow-right" />
                        </span>
                      )}
                    </Tag>
                  </motion.div>
                );
              })}

              <div className="contact__meta-row">
                <span className="contact__meta-item">
                  <i className="fas fa-clock" />
                  Replies within <strong>24 hrs</strong>
                </span>
                <span className="contact__meta-sep" aria-hidden="true" />
                <span className="contact__meta-item">
                  <i className="fas fa-map-pin" />
                  Based in <strong>Gurgaon, India</strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
