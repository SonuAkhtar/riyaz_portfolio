import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./workModal.css";

const WorkModal = ({ openModal, setOpenModal, modalData }) => {
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          className="worksModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.target === e.currentTarget && setOpenModal(false)}
        >
          <motion.div
            className="worksModal_wrapper"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="worksModal_header">
              <div className="modal_icon">
                <i className={modalData.icon} />
              </div>
              <div className="modal_header_text">
                <h4>{modalData.name}</h4>
                <span>What I offer</span>
              </div>
              <button
                className="modal_close"
                onClick={() => setOpenModal(false)}
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>

            <div className="worksModal_main">
              <ul>
                {modalData.features?.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.15 }}
                  >
                    <i className="fas fa-check" />
                    <p>{feat}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
