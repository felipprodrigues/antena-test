import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import { PokedexContext } from "@/pages/_app";

import { capitalize } from "@/helpers/capitalize";

import {
  Card,
  CardContainer,
  CardStats,
  RedirectButton,
  Stats,
  TitleTag,
} from "./styles";

import { getColorForType } from "@/helpers/colorParser";
import Link from "next/link";
import Pagination from "../pagination";
import { getBaseStat } from "@/utils/pokemonUtils";

interface Pokemon {
  id: any;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
  // Add other properties as needed
}

export default function PokedexContent() {
  const { handleInputChange }: any = useContext(PokedexContext);

  console.log(handleInputChange, "dentro do pokedex");

  const [detailedPokemonData, setDetailedPokemonData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  useEffect(() => {
    async function fetchDetailedPokemonData() {
      const offset = (currentPage - 1) * itemsPerPage;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`
      );
      const detailedData = await Promise.all(
        response.data.results.map(async (result: any) => {
          const response = await axios.get(result.url);
          return response.data;
        })
      );

      const filteredData = handleInputChange
        ? detailedData.filter((pokemon: Pokemon) =>
            pokemon.name.includes(handleInputChange)
          )
        : detailedData;

      setDetailedPokemonData(filteredData);
    }

    fetchDetailedPokemonData();
  }, [currentPage, handleInputChange]);

  if (!detailedPokemonData || !detailedPokemonData.length) {
    return <Card>No Pokemon data available.</Card>;
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <CardContainer>
        {detailedPokemonData.map((pokemon: Pokemon) => {
          return (
            <Card key={pokemon.name}>
              <div>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={`Imagem do ${pokemon.name}`}
                  width={110}
                  height={110}
                />
              </div>

              <div>
                <CardStats>
                  <TitleTag>
                    <h2>{capitalize(pokemon.name)}</h2>

                    <div>
                      {pokemon.types.map((type: any) => (
                        <div key={type.type.name}>
                          <span
                            css={{
                              $$fontColor: getColorForType(type.type.name),
                            }}
                          >
                            {type.type.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TitleTag>

                  <Stats>
                    <div>
                      <span>HP</span>
                      <h4>{getBaseStat(pokemon, "hp")}</h4>
                    </div>
                    <div>
                      <span>Atq.</span>
                      <h4>{getBaseStat(pokemon, "attack")}</h4>
                    </div>
                    <div>
                      <span>Defesa</span>
                      <h4>{getBaseStat(pokemon, "defense")}</h4>
                    </div>
                  </Stats>

                  {/* <div>
            abilities:
            {pokemon.abilities.map((ability: any) => (
              <span key={ability.ability.name}>{ability.ability.name}</span>
            ))}
          </div> */}
                </CardStats>
              </div>

              <RedirectButton>
                <Link
                  href={`/pokedex/${pokemon.id}`}
                  as={`/pokedex/${pokemon.id}`}
                  passHref
                >
                  Saber mais
                </Link>
              </RedirectButton>
            </Card>
          );
        })}
      </CardContainer>

      <Pagination handlePrev={handlePreviousPage} handleNext={handleNextPage} />
    </>
  );
}
