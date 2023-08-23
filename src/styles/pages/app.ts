import { styled } from "..";

export const Container = styled("div", {
  minHeight: "100vh",
  maxWidth: "100%",
  padding: "0 3.5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "calc(100% - 1rem)",

  "@media (min-width: 1023px)": {
    width: "calc(85% - 3.5rem)",
    padding: "2rem",
  },

  "@media (min-width: 1279px)": {
    width: "calc(80% - 3.5rem)",
  },

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& > h1": {
    fontSize: "clamp(1.25rem, 3vw, 2rem)",
  },

  "& > div": {
    backgroundColor: "$gray800",
    padding: ".75rem",
    borderRadius: "8px",
    cursor: "pointer",
    filter: "brightness(.9)",
    transition: "all .25s linear",

    img: { transform: "scale(.9)" },
  },

  "& > div:hover": {
    filter: "brightness(1)",

    img: {
      transform: "scale(1)",
    },
  },
});

export const ContainerMain = styled("main", {
  display: "flex",
  flexDirection: "column",

  gap: "2.5rem",
  width: "90%",

  "@media (min-width: 767px)": {
    width: "calc(95% - 2.5rem)",
  },

  "@media (min-width: 1023px)": {
    width: "calc(85% - 3.5rem)",
  },

  "@media (min-width: 1279px)": {
    width: "calc(80% - 3.5rem)",
  },
});
