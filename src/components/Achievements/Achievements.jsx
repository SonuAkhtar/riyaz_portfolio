import { motion } from "framer-motion";
import { siteStats } from "../../../appData";
import "./achievements.css";

const EASE = [0.22, 1, 0.36, 1];

const achievements = [
  { value: siteStats.yearsExp,        label: "Years engineering",  suffix: "+" },
  { value: siteStats.companies,       label: "Companies",          suffix: "" },
  { value: siteStats.corporate.clients, label: "Clients (corporate)", suffix: "" },
  { value: siteStats.projectsShipped, label: "Freelance projects", suffix: "+" },
];

const RollDigit = ({ digit, delay }) => (
  <span className="achievements_digit">
    <motion.span
      className="achievements_digit-col"
      initial={{ y: "0%" }}
      whileInView={{ y: `${-digit * 10}%` }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.5, ease: EASE, delay }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className="achievements_digit-cell">
          {i}
        </span>
      ))}
    </motion.span>
  </span>
);

const RollNumber = ({ value, suffix = "", baseDelay = 0 }) => {
  const digits = String(value).split("");
  return (
    <span className="achievements_roll">
      {digits.map((d, i) => (
        <RollDigit
          key={`${i}-${d}`}
          digit={Number(d)}
          delay={baseDelay + i * 0.12}
        />
      ))}
      {suffix && <span className="achievements_suffix">{suffix}</span>}
    </span>
  );
};

const Achievements = () => (
  <section className="achievements_root">
    <div className="achievements_inner">
      <span className="achievements_eyebrow">
        <span /> By the numbers
      </span>

      <ul className="achievements_grid">
        {achievements.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            className="achievements_item"
          >
            <span className="achievements_item-value">
              <RollNumber
                value={item.value}
                suffix={item.suffix}
                baseDelay={0.1 + i * 0.08}
              />
            </span>
            <span className="achievements_item-label">{item.label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements;
