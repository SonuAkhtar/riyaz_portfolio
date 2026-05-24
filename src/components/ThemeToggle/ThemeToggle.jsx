import React, { useState } from "react";
import "./themeToggle.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const [burst, setBurst] = useState(false);

  const handleClick = () => {
    setBurst(true);
    toggleTheme();
    setTimeout(() => setBurst(false), 500);
  };

  return (
    <button
      className={`theme_toggle ${isDark ? "dark" : "light"}${burst ? " burst" : ""}`}
      onClick={handleClick}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme_toggle_track">
        <span className="theme_toggle_thumb">
          <i className={isDark ? "fas fa-moon" : "fas fa-sun"} />
        </span>
        <span className="theme_toggle_ripple" aria-hidden="true" />
      </span>
    </button>
  );
};

export default ThemeToggle;
