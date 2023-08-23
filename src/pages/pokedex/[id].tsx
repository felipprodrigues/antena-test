import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import { ContainerMain } from "@/styles/pages/app";
import {
  Container,
  ContainerBody,
  ContainerHead,
  ContainerToggleBody,
  ContainerToggleHead,
  ContainerToggleItems,
  ImageHolder,
  TitleHolder,
} from "@/styles/pages/pokedex";

// Icons
import { CaretLeft, Compass, Heart } from "phosphor-react";

// Helpers
import { capitalize } from "@/helpers/capitalize";

// Components
import PokemonMoves from "@/components/pokemonSpecs/pokemonMoves";
import PokemonEvolutions from "@/components/pokemonSpecs/pokemonEvolutions";
import PokemonStats from "@/components/pokemonSpecs/pokemonStats";

function PokemonDetails() {
  const [pokemonData, setPokemonData] = useState(null);
  const [activeSection, setActiveSection] = useState("Stats");
  const [pokemonSpecies, setPokemonSpecies] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchDataForPokemon(id);
    }
  }, [id]);

  const fetchDataForPokemon = (id: string) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemonData(response.data);

        axios.get(response.data.species.url).then((speciesResponse) => {
          setPokemonSpecies(speciesResponse.data);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const habitatDescription = pokemonSpecies?.habitat
    ? pokemonSpecies?.habitat?.name
    : "Unknown";

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerMain>
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
                  <div>
                    <span>{item.type.name}</span>
                  </div>
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
                <ContainerToggleItems
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section}
                </ContainerToggleItems>
              ))}
            </ul>
          </ContainerToggleHead>

          <ContainerToggleBody>
            {activeSection === "Stats" && (
              <PokemonStats pokemonData={pokemonData} />
            )}
            {activeSection === "Moves" && <PokemonMoves pokemonId={id} />}
            {activeSection === "Evolutions" && (
              <PokemonEvolutions pokemonId={id} />
            )}
          </ContainerToggleBody>
        </ContainerBody>
      </Container>
    </ContainerMain>
  );
}

export default PokemonDetails;
