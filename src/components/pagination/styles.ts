import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  marginBottom: "3.5rem",
  gap: "1.5rem",

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "transparent",
    border: "none",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
