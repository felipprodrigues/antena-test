import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Styles
import { Container } from "./styles";

// Helpers
import { capitalize } from "@/helpers/capitalize";

interface Evolution {
  id: number;
  name: string;
  sprite: string;
}

const PokemonEvolutions: React.FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const [evolutions, setEvolutions] = useState<Evolution[]>([]);

  useEffect(() => {
    const fetchPokemonEvolutions = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );

        if (response.status === 200) {
          const speciesData = response.data;
          const evolutionChainUrl = speciesData.evolution_chain.url;

          const evolutionChainResponse = await axios.get(evolutionChainUrl);
          const evolutionChainData = evolutionChainResponse.data;

          const evolutionsInfo = extractEvolutions(evolutionChainData.chain);
          setEvolutions(evolutionsInfo);
        }
      } catch (error) {
        console.error("Error fetching evolutions:", error);
      }
    };

    fetchPokemonEvolutions();
  }, [pokemonId]);

  const extractEvolutions = (chain: any): Evolution[] => {
    const evolutionsInfo: Evolution[] = [];

    const extractEvolutionInfo = (node: any) => {
      const speciesData = node.species;
      const evolutionId = parseInt(speciesData.url.split("/").slice(-2, -1)[0]);
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionId}.png`;
      evolutionsInfo.push({
        id: evolutionId,
        name: speciesData.name,
        sprite: spriteUrl,
      });

      if (node.evolves_to.length > 0) {
        node.evolves_to.forEach((nextNode: any) => {
          extractEvolutionInfo(nextNode);
        });
      }
    };

    extractEvolutionInfo(chain);

    return evolutionsInfo;
  };

  return (
    <Container>
      <ul>
        {evolutions.map((evolution) => (
          <li key={evolution.id}>
            <Image
              src={evolution.sprite}
              alt={`${evolution.name} sprite`}
              height={100}
              width={100}
            />
            <small>Pokemon</small>
            <span>{capitalize(evolution.name)}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PokemonEvolutions;
