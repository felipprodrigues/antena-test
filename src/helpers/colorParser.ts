export const getColorForType = (typeName: any) => {
  const typeColorMap = {
    Normal: "#A8A878",
    Fire: "#F08030",
    Water: "#6890F0",
    Grass: "#78C850",
    Flying: "#A890F0",
    Fighting: "#C03028",
    Poison: "#A040A0",
    Electric: "#F8D030",
    Ground: "#E0C068",
    Rock: "#B8A038",
    Psychic: "#F85888",
    Ice: "#98D8D8",
    Bug: "#A8B820",
    Ghost: "#705898",
    Steel: "#B8B8D0",
    Dragon: "#7038F8",
    Dark: "#705848",
    Fairy: "#EE99AC",
  };

  return typeColorMap[typeName] || "#A8A878";
};
