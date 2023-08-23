import { styled } from "@stitches/react";

export const Container = styled("div", {
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginBottom: "20px",

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
