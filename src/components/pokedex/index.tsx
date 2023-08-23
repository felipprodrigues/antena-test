import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Components
import { PokedexContext } from "@/pages/_app";
import Pagination from "../pagination";

// Utils
import { RotatingLines } from "react-loader-spinner";
import { getBaseStat } from "@/utils/pokemonUtils";

// Helpers
import { capitalize } from "@/helpers/capitalize";
import { getColorForType } from "@/helpers/colorParser";

// Styles
import {
  Card,
  CardContainer,
  CardStats,
  RedirectButton,
  Stats,
  TitleTag,
  TitleTagLabel,
} from "./styles";
interface Pokemon {
  id: any;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
}

export default function PokedexContent() {
  const { handleInputChange }: any = useContext(PokedexContext);

  const [detailedPokemonData, setDetailedPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  if (!detailedPokemonData || !detailedPokemonData.length) {
    return (
      <Card id="isLoader">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="4"
          animationDuration="0.75"
          width="84"
          visible={true}
        />
      </Card>
    );
  }

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
                        <TitleTagLabel
                          key={type.type.name}
                          css={{
                            $$borderColor: getColorForType(type.type.name),
                          }}
                        >
                          <span>{type.type.name}</span>
                        </TitleTagLabel>
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
