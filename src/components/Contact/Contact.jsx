import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { socialIconsData, profile } from "../../../appData";
import "./contact.css";

const EMAIL = profile.email;
const PHONE = profile.phoneDisplay;
const PHONE_TEL = profile.phone;

const Contact = () => (
  <section className="contact" id="contact">
    <div className="section_inner">
      <motion.div
        className="contact_card"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="contact_card_top">
          <span className="section_label">Contact</span>
          <h2 className="contact_big_hl">Have a project in mind?</h2>
          <p className="contact_sub">
            Tell me what you&apos;re building. I usually reply within{" "}
            {profile.replyTime}.
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
              aria-label="Let's talk, send email"
            >
              Let's talk
            </a>
          </div>

          <div className="ccb_reveal">
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
                  aria-label={s.label}
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
