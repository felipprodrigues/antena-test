import { styled } from "@stitches/react";

export const Container = styled("div", {
  "& > div#isLoader": {
    display: "flex",
    justifyContent: "center",
  },

  overflow: "hidden",
  overflowX: "scroll",

  table: {
    borderCollapse: "collapse",
    width: "100%",

    th: {
      color: "$gray300",
      textAlign: "center",
    },

    "th,td": {
      border: "1px solid #ddd",
      padding: "1rem",
      fontSize: "$sm",
    },

    "td#label": {
      textAlign: "center",
    },
  },
});
