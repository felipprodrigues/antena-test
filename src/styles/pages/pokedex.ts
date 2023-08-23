import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "2rem",
});

export const ContainerHead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const ImageHolder = styled("div", {
  height: "40vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background:
    "radial-gradient(circle, rgba(44,180,134,.3) 0%, rgba(18,18,20,1) 45%)",
});

export const TitleHolder = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "2rem 0",
});

export const ContainerBody = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const ContainerToggleHead = styled("div", {
  padding: "1rem",

  ul: {
    gap: "1rem",
    display: "flex",
    listStyleType: "none",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const ContainerToggleItems = styled("li", {
  cursor: "pointer",
  padding: "1rem",
  borderBottom: "2px solid transparent",
  transition: "border-color 0.3s",

  "&:hover": {
    borderColor: "$green300",
  },

  "&.active": {
    borderColor: "$green500",
  },
});

export const ContainerToggleBody = styled("div", {
  minHeight: "300px",

  "& > div": {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    backgroundColor: "$gray800",
  },

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

export const StatsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
});
