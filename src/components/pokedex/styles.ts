import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
  display: "grid",

  gridTemplateColumns: "repeat(3, 1fr)",

  "@bp1": {
    gridTemplateColumns: "1fr",
  },
  "@bp3": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@bp4": {},

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

  h2: {
    color: "$gray300",
  },

  div: {
    padding: ".5rem",

    display: "flex",
    gap: "1rem",

    div: {
      border: "1px solid",
      borderRadius: "10px",

      span: {
        fontSize: "clamp(12px, 1.5vw, 15px)",
        color: "$$fontColor",
      },
    },
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
      fontSize: "clamp(12px, 1.5vw, 15px)",
      color: "$gray300",
    },

    h4: {
      color: "$green300",
      fontWeight: "normal",
    },
  },
});

export const RedirectButton = styled("div", {
  // position: "absolute",
  display: "flex",
  justifyContent: "center",
  // bottom: "-.85rem",

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
