import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.5rem",
});

export const Card = styled("div", {
  display: "flex",
  alignItems: "center",

  position: "relative",
  borderRadius: "10px",

  background: "$$bgColor",

  minHeight: "100px",
  padding: "2rem",

  cursor: "pointer",
  transition: "all .15s linear",

  border: "2px solid",
  borderColor: "$$borderColor",

  "&:hover": {
    opacity: "brightness(.7)",
  },

  span: {
    fontWeight: "bold",
  },

  img: {
    position: "absolute",
    right: "-10px",
    top: "-10px",
  },
});
