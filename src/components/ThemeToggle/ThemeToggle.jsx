import React from "react";
import "./themeToggle.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      className={`theme_toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme_toggle_track">
        <span className="theme_toggle_thumb">
          <i className={isDark ? "fas fa-moon" : "fas fa-sun"} />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
