import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "1.5rem",

  h3: {
    color: "$gray300",
  },

  div: {
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    backgroundColor: "$gray800",
    borderRadius: "50px",
  },

  input: {
    padding: "1rem",
    borderRadius: "8px",
    backgroundColor: "$gray800",
    border: "none",
    width: "100%",

    color: "$gray300",

    "&:focus": {
      outline: "none",
    },
  },
});
