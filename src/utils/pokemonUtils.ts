export interface Pokemon {
  id: any;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
}

export function getBaseStat(pokemon: Pokemon, statName: string): number {
  const stat = pokemon?.stats.find((stat) => stat.stat.name === statName);
  return stat ? stat.base_stat : 0;
}
