export interface PageHandler {
  handlePrev: () => void;
  handleNext: () => void;
}

export interface Move {
  name: string;
  description: string;
}

export interface Evolution {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonStatsProps {
  pokemonData: any;
}

export interface PokemonList {
  name: string;
  id: number;
  img: string;
}

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

export interface HomeProps {
  isSidepanelOpen: boolean;
  toggleSidepanel: () => void;
  setHandleInputChange: (string: string) => void;
  handleInputChange: string;
  pokemonData: any;
  setMyPokedexPokemons: React.Dispatch<React.SetStateAction<PokemonList[]>>;
  myPokedexPokemons: PokemonList[];
}
