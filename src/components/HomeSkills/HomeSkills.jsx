import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { skillsData, skillCategoryBlurb } from "../../../appData";
import { SKILL_TAB_ACCENTS } from "../../utils/themeColors";
import "./homeSkills.css";

const EASE = [0.22, 1, 0.36, 1];

const TAB_META = [
  { icon: "fab fa-react",          stat: { value: "8y", label: "In practice" } },
  { icon: "fas fa-server",         stat: { value: "6y", label: "Shipping pipelines" } },
  { icon: "fas fa-shield-halved",  stat: { value: "4y", label: "Hardening systems" } },
];

const TABS = TAB_META.map((meta, i) => ({ ...meta, ...SKILL_TAB_ACCENTS[i] }));

const CATEGORY_BLURB = skillCategoryBlurb;

const panelMotion = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.12, ease: EASE } },
};

const FRONTEND_CODE = [
  [
    { t: "kw", v: "import" },
    { t: "txt", v: " { " },
    { t: "var", v: "motion" },
    { t: "txt", v: " } " },
    { t: "kw", v: "from" },
    { t: "txt", v: " " },
    { t: "str", v: "\"framer-motion\"" },
    { t: "punc", v: ";" },
  ],
  [],
  [
    { t: "kw", v: "export const" },
    { t: "txt", v: " " },
    { t: "fn", v: "Hero" },
    { t: "txt", v: " = () " },
    { t: "punc", v: "=>" },
    { t: "txt", v: " (" },
  ],
  [
    { t: "txt", v: "  <" },
    { t: "tag", v: "motion.section" },
    { t: "txt", v: " " },
    { t: "attr", v: "initial" },
    { t: "punc", v: "={{ " },
    { t: "var", v: "opacity" },
    { t: "punc", v: ": " },
    { t: "num", v: "0" },
    { t: "punc", v: ", " },
    { t: "var", v: "y" },
    { t: "punc", v: ": " },
    { t: "num", v: "30" },
    { t: "punc", v: " }}" },
  ],
  [
    { t: "txt", v: "    " },
    { t: "attr", v: "animate" },
    { t: "punc", v: "={{ " },
    { t: "var", v: "opacity" },
    { t: "punc", v: ": " },
    { t: "num", v: "1" },
    { t: "punc", v: ", " },
    { t: "var", v: "y" },
    { t: "punc", v: ": " },
    { t: "num", v: "0" },
    { t: "punc", v: " }}" },
  ],
  [
    { t: "txt", v: "  >" },
  ],
  [
    { t: "txt", v: "    <" },
    { t: "tag", v: "h1" },
    { t: "txt", v: ">Hi, I'm Riyaz</" },
    { t: "tag", v: "h1" },
    { t: "txt", v: ">" },
  ],
  [
    { t: "txt", v: "  </" },
    { t: "tag", v: "motion.section" },
    { t: "txt", v: ">" },
  ],
  [
    { t: "txt", v: ");" },
  ],
];

const FrontendPreview = () => (
  <div className="hskills_preview hskills_preview-editor" aria-hidden="true">
    <div className="hskills_preview-editor-head">
      <span className="hskills_preview-dot" />
      <span className="hskills_preview-dot" />
      <span className="hskills_preview-dot" />
      <span className="hskills_preview-editor-tab">
        <i className="fab fa-react" /> Hero.jsx
      </span>
    </div>
    <div className="hskills_preview-editor-body">
      {FRONTEND_CODE.map((line, i) => (
        <div
          key={i}
          className="hskills_preview-code-line"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          <span className="hskills_preview-code-num">{i + 1}</span>
          <span className="hskills_preview-code-content">
            {line.length === 0 ? (
              " "
            ) : (
              line.map((tok, j) => (
                <span key={j} className={`tok tok-${tok.t}`}>{tok.v}</span>
              ))
            )}
          </span>
        </div>
      ))}
      <span className="hskills_preview-code-caret" />
    </div>
  </div>
);

const DevOpsPreview = () => {
  const lines = [
    { prompt: "$", text: "git push origin feat/checkout",    tone: "cmd" },
    { prompt: "$", text: "4 files changed, 184 insertions",  tone: "log" },
    { prompt: "$", text: "pushed in 0.8s",                   tone: "ok" },
    { prompt: "$", text: "gh workflow run deploy.yml",       tone: "cmd" },
    { prompt: "$", text: "queued azure-devops pipeline",     tone: "log" },
    { prompt: "$", text: "deployed in 2m 14s",               tone: "ok" },
  ];
  return (
    <div className="hskills_preview hskills_preview-terminal" aria-hidden="true">
      <div className="hskills_preview-terminal-head">
        <span>ci deploy pipeline</span>
        <span className="hskills_preview-pulse" />
      </div>
      <div className="hskills_preview-terminal-body">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`hskills_preview-term-line hskills_preview-term-${l.tone}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="hskills_preview-term-prompt">{l.prompt}</span>
            <span className="hskills_preview-term-text">{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const QualityPreview = () => {
  const lines = [
    { prompt: "$", text: "vitest run --coverage",          tone: "cmd" },
    { prompt: "$", text: "142 tests, 8 files",             tone: "log" },
    { prompt: "$", text: "all passed in 4.2s, 87% cov",    tone: "ok" },
    { prompt: "$", text: "sonar-scanner + veracode scan",  tone: "cmd" },
    { prompt: "$", text: "0 critical, 2 minor",            tone: "log" },
    { prompt: "$", text: "quality gate passed",            tone: "ok" },
  ];
  return (
    <div className="hskills_preview hskills_preview-terminal" aria-hidden="true">
      <div className="hskills_preview-terminal-head">
        <span>quality tests and scans</span>
        <span className="hskills_preview-pulse" />
      </div>
      <div className="hskills_preview-terminal-body">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`hskills_preview-term-line hskills_preview-term-${l.tone}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="hskills_preview-term-prompt">{l.prompt}</span>
            <span className="hskills_preview-term-text">{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Preview = ({ tab }) => {
  if (tab === 0) return <FrontendPreview />;
  if (tab === 1) return <DevOpsPreview />;
  return <QualityPreview />;
};

const HomeSkills = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false });

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setSpot({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        visible: true,
      });
    };
    const onLeave = () => setSpot((s) => ({ ...s, visible: false }));

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const current = skillsData[active];
  const meta = TABS[active];

  return (
    <section
      ref={sectionRef}
      className="hskills_root"
      style={{
        "--accent": meta.accent,
        "--accent-soft": meta.accentSoft,
      }}
    >
      <div className="hskills_aurora" aria-hidden="true" />

      <div className="hskills_inner">
        <header className="hskills_header">
          <span className="hskills_eyebrow">
            <span /> What I make
          </span>
          <h2 className="hskills_title">
            A multi-disciplinary practice
            <br />
            <span className="hskills_title-soft">built around craft.</span>
          </h2>
        </header>

        <div className="hskills_tabs" role="tablist" aria-label="Disciplines">
          {skillsData.map((cat, i) => {
            const tab = TABS[i];
            const isActive = active === i;
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`hskills_tab${isActive ? " hskills_tab-active" : ""}`}
                style={{ "--tab-accent": tab.accent }}
                data-cursor-hover
              >
                {isActive && (
                  <motion.span
                    layoutId="hskills_active_pill"
                    className="hskills_tab-bg"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
                <span className="hskills_tab-icon">
                  <i className={tab.icon} />
                </span>
                <span className="hskills_tab-label">
                  <span className="hskills_tab-index">
                    0{i + 1}
                  </span>
                  {cat.title}
                </span>
                <span className="hskills_tab-dot" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div ref={panelRef} className="hskills_panel">
          <span
            className="hskills_panel-spotlight"
            style={{
              opacity: spot.visible ? 1 : 0,
              background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, var(--accent-soft), transparent 60%)`,
            }}
            aria-hidden="true"
          />

          <span className="hskills_panel-watermark" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: EASE }}
              >
                0{active + 1}
              </motion.span>
            </AnimatePresence>
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="hskills_panel-grid"
            >
              <div className="hskills_panel-left">
                <div className="hskills_panel-titlewrap">
                  <h3 className="hskills_panel-title">{current.title}</h3>
                  <span className="hskills_panel-stat">
                    <span className="hskills_panel-stat-value">{meta.stat.value}</span>
                    <span className="hskills_panel-stat-label">{meta.stat.label}</span>
                  </span>
                </div>

                <p className="hskills_panel-desc">{CATEGORY_BLURB[active]}</p>

                <ul className="hskills_list">
                  {current.data.slice(0, 6).map((skill, i) => {
                    const level = Number(skill.number);
                    return (
                      <motion.li
                        key={skill.name}
                        className="hskills_row"
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.28,
                          delay: 0.04 + i * 0.02,
                          ease: EASE,
                        }}
                      >
                        <div className="hskills_row-meta">
                          <span className="hskills_row-name">{skill.name}</span>
                          <span className="hskills_row-years">{current.subtitle}</span>
                        </div>
                        <div className="hskills_row-bar">
                          <motion.span
                            key={`${active}-${skill.name}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: level / 100 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.06 + i * 0.025,
                              ease: EASE,
                            }}
                          />
                        </div>
                        <span className="hskills_row-level">
                          {level}
                          <span>%</span>
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="hskills_panel-right">
                <Preview tab={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
