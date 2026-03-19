import "./contact.css";

import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
  viewportOptions,
} from "../../utils/animations";

import {
  contactData,
  homeContactIcons,
  homeSocialIcons,
  socialIconsData,
} from "../../../appData";

const Contact = () => {
  return (
    <section className="contact even" id="contact">
      <div className="container">
        <motion.div
          className="contact_header"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span className="section_label" variants={fadeInUp}>
            Reach Out
          </motion.span>
        </motion.div>

        <div className="contact_body">
          <motion.div
            className="contact_left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="avail_badge">
              <span className="avail_ring" aria-hidden="true" />
              <span className="avail_dot" aria-hidden="true" />
              Open for new opportunities
            </div>

            <h2 className="contact_hl">
              Let's Build
              <br />
              <span className="contact_hl_grad">Something</span>
              <br />
              Remarkable.
            </h2>

            <p className="contact_bio">
              Open to full-time roles, freelance projects, and interesting
              collaborations. I love turning ideas into polished digital
              experiences.
            </p>

            <div className="contact_socials">
              {socialIconsData.map((s) => {
                const meta = homeSocialIcons[s.class] || {
                  label: "Link",
                  short: "",
                };
                return (
                  <motion.a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="csoc_btn"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={s.class} />
                    <span>{meta.label}</span>
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href="mailto:sonua981@gmail.com"
              className="btn btn_primary contact_cta"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fas fa-paper-plane" />
              Send a Message
            </motion.a>
          </motion.div>

          <motion.div
            className="contact_right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="cchannels">
              {contactData.map((item, i) => {
                const meta = homeContactIcons[item.alt] || {
                  icon: "fas fa-info",
                  color: "cc_blue",
                };
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.id}
                    className="cchannel_wrap"
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
                      className={`cchannel${item.href ? " cc_link" : ""}`}
                      href={item.href}
                      {...(item.href
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className={`cc_icon_wrap ${meta.color}`}>
                        <i className={meta.icon} />
                      </span>
                      <span className="cc_body">
                        <span className="cc_label">{item.name}</span>
                        <span className="cc_value">{item.info}</span>
                      </span>
                      {item.href && (
                        <span className="cc_arrow" aria-hidden="true">
                          <i className="fas fa-arrow-right" />
                        </span>
                      )}
                    </Tag>
                  </motion.div>
                );
              })}

              <div className="cc_meta_row">
                <span className="cc_meta_item">
                  <i className="fas fa-clock" />
                  Replies within <strong>24 hrs</strong>
                </span>
                <span className="cc_meta_sep" aria-hidden="true" />
                <span className="cc_meta_item">
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
