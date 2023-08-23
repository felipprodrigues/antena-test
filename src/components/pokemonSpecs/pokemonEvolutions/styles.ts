import { styled } from "@stitches/react";

export const Container = styled("div", {
  ul: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",

    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },

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
      "@media (min-width: 768px) and (max-width: 1023px)": {
        gridColumn: "span 2",
      },
    },
  },
});
