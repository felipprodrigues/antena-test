import React from "react";

// Icons
import {
  Heart,
  Fire,
  Shield,
  FireSimple,
  ShieldPlus,
  Lightning,
} from "phosphor-react";

// Utils
import { getBaseStat } from "@/utils/pokemonUtils";

// Styles
import { ContainerStats } from "./styles";
import { PokemonStatsProps } from "@/interfaces";

const PokemonStats = ({ pokemonData }: PokemonStatsProps) => {
  return (
    <ContainerStats>
      <div id="stats_container">
        <div>
          <span>HP</span>
          <h4>
            <Heart size={16} color={"#FF7377"} />
            {getBaseStat(pokemonData, "hp")}
          </h4>
        </div>
        <div>
          <span>Attack</span>
          <h4>
            <Fire size={16} color={"#fdcf58"} />
            {getBaseStat(pokemonData, "attack")}
          </h4>
        </div>
        <div>
          <span>Defense</span>
          <h4>
            <Shield size={16} color={"#00FFFF"} />
            {getBaseStat(pokemonData, "defense")}
          </h4>
        </div>
        <div>
          <span>Special Attack</span>
          <h4>
            <FireSimple size={16} color={"#fdcf58"} />
            {getBaseStat(pokemonData, "special-attack")}
          </h4>
        </div>
        <div>
          <span>Special Defense</span>
          <h4>
            <ShieldPlus size={16} color={"#00FFFF"} />
            {getBaseStat(pokemonData, "special-defense")}
          </h4>
        </div>
        <div>
          <span>Speed</span>
          <h4>
            <Lightning size={16} color={"#8B95C9"} />
            {getBaseStat(pokemonData, "speed")}
          </h4>
        </div>
      </div>
    </ContainerStats>
  );
};

export default PokemonStats;
