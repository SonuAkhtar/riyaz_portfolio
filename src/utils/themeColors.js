// All color values live in src/styles/tokens.css. This module only maps
// tokens into the accent sequences components cycle through.

// Translucent variant of any color (token reference or hex), e.g. alpha(c, 9).
export const alpha = (color, percent) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;

export const PROJECT_COLORS = [1, 2, 3, 4, 5, 6].map((n) => `var(--proj-${n})`);

export const PROJECT_VARIANTS = PROJECT_COLORS.map((color) => ({
  dot: color,
  bg: alpha(color, 9),
  pillBorder: alpha(color, 22),
}));
