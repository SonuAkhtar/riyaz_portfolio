import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { socialIconsData, profile } from "../../../appData";
import "./contact.css";

const EMAIL = profile.email;
const PHONE = profile.phoneDisplay;
const PHONE_TEL = profile.phone;

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <motion.div
        className="contact_card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="contact_card_top">
          <h2 className="contact_big_hl">
            Let's build
            <br />
            something people
            <br />
            remember
          </h2>
          <p className="contact_sub">
            from global tech companies to growing startups.
          </p>
        </div>

        <div className="contact_divider" aria-hidden="true" />

        <div className="contact_card_bottom">
          <div className="ccb_default">
            <a
              href={`mailto:${EMAIL}`}
              className="contact_arrow"
              aria-label="Send email"
            >
              <i className="fas fa-arrow-right" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="contact_lets_talk"
              aria-label="Let's talk - send email"
            >
              Let's talk
            </a>
          </div>

          <div className="ccb_reveal" aria-hidden="true">
            <a href={`mailto:${EMAIL}`} className="ccb_email">
              {EMAIL}
            </a>

            <div className="ccb_socials">
              {socialIconsData.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ccb_soc"
                >
                  <i className={s.class} />
                </a>
              ))}
            </div>

            <a href={`tel:${PHONE_TEL}`} className="ccb_phone">
              {PHONE}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
