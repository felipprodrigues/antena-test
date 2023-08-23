import { styled } from "@stitches/react";

export const Container = styled("div", {
  ul: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "2rem",

    listStyleType: "none",

    li: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      small: {
        color: "$gray300",
      },

      span: {
        fontSize: "$md",
        color: "$gray200",
      },
    },

    "& > li:last-of-type": {
      gridColumn: "span 2",
    },
  },
});
