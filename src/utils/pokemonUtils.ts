import { Pokemon } from "@/interfaces";

export function getBaseStat(pokemon: Pokemon, statName: string): number {
  const stat = pokemon?.stats.find((stat) => stat.stat.name === statName);
  return stat ? stat.base_stat : 0;
}
