import { styled } from "@stitches/react";

export const ContainerStats = styled("div", {
  "& > div#stats_container": {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",

    "@media (min-width: 767px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (min-width: 1279px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },

    div: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: ".5rem",

      h4: {
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
      },
    },
  },
});
