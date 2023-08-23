import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  padding: "2rem 0",

  "@media (min-width: 1023px)": {
    padding: "2rem",
  },
});

export const ContainerHead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",

  "& > svg#goBackButton, & > svg#addToPokedex": {
    cursor: "pointer",
    transition: "all .15s linear",
    color: "$gray300",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  "& > svg#goBackButton:hover": {
    color: "$white",
  },

  "svg#addToPokedex:hover": {
    color: "red",
  },

  "& > span": {
    color: "$gray300",
  },
});

export const ImageHolder = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "40vh",
  background:
    "radial-gradient(circle, rgba(44,180,134,.3) 0%, rgba(18,18,20,1) 50%)",

  "@media (min-width: 1279px)": {
    height: "50vh",
    background:
      "radial-gradient(circle, rgba(44,180,134,.3) 0%, rgba(18,18,20,1) 45%)",
  },
});

export const TitleHolder = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "2rem 0",
  gap: "1.5rem",

  "& > div": {
    display: "flex",
    gap: "1rem",
  },

  "& > div#locationId": {
    alignItems: "center",

    span: {
      color: "$gray500",
    },
  },
});

export const TitleTag = styled("div", {
  border: "1px solid $$borderColor",
  padding: ".75rem",
  borderRadius: "25px",

  span: {
    color: "$gray300",
    fontSize: "clamp(.875rem, 3vw, 1.125rem)",
  },
});

export const ContainerBody = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1279px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@media (min-width: 1400px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
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

  "& > div#moveContainer": {
    padding: ".5rem",

    "@media (min-width: 768px)": {
      padding: "2rem",
    },
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
