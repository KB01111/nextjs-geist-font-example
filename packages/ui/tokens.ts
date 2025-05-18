export const tokens = {
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    gray: "#8E8E93",
    // Add other colors as per OKLCH theme
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  fontSizes: {
    small: 14,
    medium: 16,
    large: 20,
  },
};

export const theme = {
  light: {
    background: tokens.colors.background,
    primary: tokens.colors.primary,
    text: "#000000",
  },
  dark: {
    background: "#000000",
    primary: tokens.colors.primary,
    text: "#FFFFFF",
  },
  auto: {
    // Auto mode will switch based on system preference
  },
};
