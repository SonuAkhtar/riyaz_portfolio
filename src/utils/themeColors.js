export const palette = {
  violet300: "#a78bfa",
  violet400: "#8b5cf6",
  violet500: "#7C3AED",
  violet600: "#6D28D9",
  purple500: "#a855f7",

  blue400: "#5b8dee",
  blue500: "#3b82f6",
  blue600: "#4f7cff",
  sky500:  "#0ea5e9",

  cyan300: "#67e8f9",
  cyan400: "#22D3EE",
  cyan500: "#06B6D4",

  green300: "#5bdc8e",
  green400: "#5ee297",
  green600: "#10B981",
  green700: "#4ade80",

  amber400: "#fbbf24",
  amber500: "#F59E0B",
  amber600: "#f0a04b",

  pink500: "#ec4899",
  rose500: "#f43f5e",

  slate600: "#4b5e75",

  success: "#10B981",
  warning: "#F59E0B",
  error:   "#EF4444",
};

export const PROJECT_COLORS = [
  palette.blue500,
  palette.violet400,
  palette.green600,
  palette.amber500,
  palette.rose500,
  palette.sky500,
];

export const PROJECT_VARIANTS = PROJECT_COLORS.map((hex) => ({
  dot:        hex,
  bg:         `${hex}17`,
  pillBg:     `${hex}17`,
  pillBorder: `${hex}38`,
}));

export const SKILL_TAB_ACCENTS = [
  { accent: palette.violet400, accentSoft: "rgba(139, 92, 246, 0.18)" },
  { accent: palette.blue600,   accentSoft: "rgba(79, 124, 255, 0.18)" },
  { accent: palette.cyan300,   accentSoft: "rgba(103, 232, 249, 0.18)" },
];

export const CAT_COLORS = [
  palette.blue400,
  palette.green600,
  palette.purple500,
];

export const LEVEL_COLORS = {
  expert: {
    fill: palette.green300,
    glow: "rgba(91, 220, 142, 0.4)",
    bg:   "rgba(91, 220, 142, 0.1)",
  },
  proficient: {
    fill: palette.blue400,
    glow: "rgba(91, 141, 238, 0.4)",
    bg:   "rgba(91, 141, 238, 0.1)",
  },
  familiar: {
    fill: palette.amber600,
    glow: "rgba(240, 160, 75, 0.4)",
    bg:   "rgba(240, 160, 75, 0.1)",
  },
  learning: {
    fill: palette.slate600,
    glow: "rgba(75, 94, 117, 0.25)",
    bg:   "rgba(75, 94, 117, 0.08)",
  },
};
