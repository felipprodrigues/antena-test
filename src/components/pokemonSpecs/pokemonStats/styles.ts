import { styled } from "@stitches/react";

export const ContainerStats = styled("div", {
  "& > div#stats_container": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",

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
