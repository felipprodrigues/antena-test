import { styled } from "..";

export const Container = styled("div", {
  minHeight: "100vh",
  maxWidth: "100%",
  padding: "0 3.5rem ",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > *": {
    width: "100%",
  },
});

export const Header = styled("header", {
  padding: "2rem",
  // width: "100%",
  width: "calc(80% - 3.5rem)",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

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

  width: "calc(80% - 3.5rem)",
  gap: "2.5rem",
});
