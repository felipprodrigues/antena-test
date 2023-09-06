export const getColorForType = (typeName: string) => {
  const typeColorMap: { [key: string]: string } = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    flying: "#A890F0",
    fighting: "#C03028",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    rock: "#B8A038",
    psychic: "#F85888",
    ice: "#98D8D8",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  return typeColorMap[typeName] || "#A8A878";
};
