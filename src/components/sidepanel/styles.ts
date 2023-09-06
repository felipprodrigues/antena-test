import { styled } from "@stitches/react";

export const Container = styled("aside", {
  padding: "2rem",
  minHeight: "100vh",
  height: "100%",

  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,

  gap: "1rem",

  background: "$gray800",
  boxShadow: "rgba(114, 114, 120, .4)0 0px 11px 0px",
  width: "100%",
  maxWidth: "80%",

  "@media (min-width: 768px)": {
    maxWidth: "50%",
  },

  "@media (min-width: 1279px)": {
    maxWidth: "40%",
  },

  "@media (min-width: 1400px)": {
    maxWidth: "30%",
  },

  flexDirection: "column",

  transition: "all .15s linear",

  "& > div:first-of-type": {
    display: "flex",
    justifyContent: "flex-end",

    cursor: "pointer",

    svg: {
      color: "$gray300",
    },
  },

  "& > div:first-of-type:hover": {
    svg: {
      transform: "scale(1.2)",
    },
  },

  "& > div:last-of-type": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export const ContainerInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  overflow: "scroll",
  paddingBottom: "2rem",

  h2: {
    textAlign: "center",
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
  },

  "& > div": {
    display: "flex",
    gap: "1rem",
  },
});

export const ContainerImage = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, #1ea4b3 0%, #7465d4 100%)",
  borderRadius: 8,
});

export const ContainerDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "span:first-of-type": {
    color: "$gray300",
    fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
  },

  "span:last-of-type": {
    color: "$white",
    fontWeight: "bold",

    fontSize: "clamp(.875rem, 3vw, 1.125rem)",
  },
});

export const DeleteButton = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".25rem",
  cursor: "pointer",

  color: "$gray500",

  transition: "all .15s linear",

  "&:hover": {
    color: "red",
  },
});
