import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import { ContainerMain } from "@/styles/pages/app";
import {
  Container,
  ContainerBody,
  ContainerHead,
  ContainerToggleBody,
  ContainerToggleHead,
  ImageHolder,
  TitleHolder,
} from "@/styles/pages/pokedex";

import {
  CaretLeft,
  Compass,
  Fire,
  FireSimple,
  Heart,
  Lightning,
  Shield,
  ShieldPlus,
} from "phosphor-react";
import { capitalize } from "@/helpers/capitalize";
import { Pokemon, getBaseStat } from "@/utils/pokemonUtils";

function PokemonDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [pokemonData, setPokemonData] = useState(null);
  const [activeSection, setActiveSection] = useState("Stats");
  const [pokemonSpecies, setPokemonSpecies] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          setPokemonData(response.data);

          axios.get(response.data.species.url).then((speciesResponse) => {
            setPokemonSpecies(speciesResponse.data);
          });
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const habitatDescription = pokemonSpecies?.habitat
    ? pokemonSpecies?.habitat?.name
    : "Unknown";

  return (
    <ContainerMain>
      {/* <pre>{JSON.stringify(pokemonData, null, 2)}</pre> */}
      <Container>
        <ContainerHead>
          <CaretLeft size={24} />

          <span>#00{pokemonData.id}</span>

          <Heart size={24} />
        </ContainerHead>

        <ImageHolder>
          <Image
            src={pokemonData.sprites.front_default}
            alt={`Imagem do ${pokemonData.name}`}
            width={180}
            height={180}
          />
        </ImageHolder>

        <TitleHolder>
          <h1>{capitalize(pokemonData?.name)}</h1>

          <div>
            {pokemonData?.types.map((item: { type: { name: string } }) => {
              return (
                <>
                  <span>{item.type.name}</span>
                </>
              );
            })}
          </div>

          <div>
            <Compass size={16} />
            <span>{capitalize(habitatDescription)}</span>
          </div>
        </TitleHolder>

        <ContainerBody>
          <ContainerToggleHead>
            <ul>
              {["Stats", "Moves", "Evolutions"].map((section) => (
                <li
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section}
                </li>
              ))}
            </ul>
          </ContainerToggleHead>

          <ContainerToggleBody>
            {activeSection === "Stats" && (
              <>
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
              </>
            )}
            {activeSection === "Moves" && <div>Moves section content</div>}
            {activeSection === "Evolutions" && (
              <div>Evolutions section content</div>
            )}
          </ContainerToggleBody>
        </ContainerBody>
      </Container>
    </ContainerMain>
  );
}

export default PokemonDetails;
