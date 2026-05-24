import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../../../appData";
import "./servicesFAQ.css";

const EASE = [0.22, 1, 0.36, 1];

const faqs = faqData;

const PlusIcon = () => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion_root">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="accordion_item">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="accordion_item-head"
              aria-expanded={isOpen}
              data-cursor-hover
            >
              <span className="accordion_item-q">{item.q}</span>
              <span
                className={`accordion_item-icon${
                  isOpen ? " accordion_item-icon-open" : ""
                }`}
              >
                <PlusIcon />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="accordion_item-content"
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const ServicesFAQ = () => (
  <section className="faq_root">
    <div className="faq_inner">
      <header className="faq_header">
        <span className="faq_eyebrow">
          <span /> Common questions
        </span>
        <h2 className="faq_title">Frequently asked.</h2>
      </header>
      <div className="faq_content">
        <Accordion items={faqs} />
      </div>
    </div>
  </section>
);

export default ServicesFAQ;
