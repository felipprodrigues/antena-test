import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",

      // borderBottomHover: "#c4c4cc", // Change to your desired hover color
      // borderBottomActive: "#e1e1e6", // Change to your desired active color
    },
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    breakpoints: {
      bp1: `(min-width: 640px)`,
      bp2: `(min-width: 768px)`,
      bp3: `(min-width: 1024px)`,
      bp4: `(min-width: 1280px)`,
    },
  },
});
