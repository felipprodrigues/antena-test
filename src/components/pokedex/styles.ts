import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
  display: "grid",

  gridTemplateColumns: "1fr",

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1279px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@media (min-width: 1400px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  gap: "5rem 1.5rem",
});

export const Card = styled("div", {
  backgroundColor: "$gray800",
  borderRadius: "10px",

  padding: "2rem 1.5rem",

  position: "relative",

  "& > div:first-of-type": {
    position: "absolute",
    top: "-3.5rem",
    left: "2.5rem",

    width: "100%",

    display: "flex",
    justifyContent: "center",
  },

  "&#isLoader": {
    display: "flex !important",
    justifyContent: "center !important",
  },
});

export const CardStats = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  margin: "2rem 0",
  gap: "2rem",
});

export const TitleTag = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  h2: {
    color: "$gray300",
  },

  div: {
    display: "flex",
    gap: "1rem",
  },
});

export const TitleTagLabel = styled("div", {
  border: "1px solid $$borderColor",
  padding: ".5rem",
  borderRadius: "10px",

  span: {
    color: "$gray300",
    fontSize: "clamp(.875rem, 3vw, 1.125rem)",
  },
});

export const Stats = styled("div", {
  display: "flex",
  gap: "1.5rem",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",

    span: {
      fontSize: "clamp(0.875rem, 3vw, 1.125rem)",
      color: "$gray300",
    },

    h4: {
      color: "$green300",
      fontWeight: "normal",
    },
  },
});

export const RedirectButton = styled("div", {
  display: "flex",
  justifyContent: "center",

  width: "100%",

  border: "none",
  cursor: "pointer",

  a: {
    color: "$white",
    textDecoration: "none",

    padding: ".5rem",
    borderRadius: "10px",

    backgroundColor: "$green500",

    transition: "all .15s linear",

    "&:hover": {
      backgroundColor: "$green300",
      filter: "brightness(.9)",
    },
  },
});
