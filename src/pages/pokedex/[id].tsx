/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";

// Context
import { PokedexContext } from "../_app";

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
  TitleTag,
} from "@/styles/pages/pokedex";

// Icons
import { CaretLeft, Compass, Heart } from "phosphor-react";

// Helpers
import { capitalize } from "@/helpers/capitalize";
import { toast } from "react-toastify";

// Components
import PokemonMoves from "@/components/pokemonSpecs/pokemonMoves";
import PokemonEvolutions from "@/components/pokemonSpecs/pokemonEvolutions";
import PokemonStats from "@/components/pokemonSpecs/pokemonStats";

import { getColorForType } from "@/helpers/colorParser";

export interface PokemonList {
  name: string;
  id: number;
  img: string;
}

function PokemonDetails() {
  const [pokemonData, setPokemonData] = useState(null);
  const [activeSection, setActiveSection] = useState("Stats");
  const [pokemonSpecies, setPokemonSpecies] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const { setMyPokedexPokemons, myPokedexPokemons } =
    useContext(PokedexContext);

  useEffect(() => {
    if (id) {
      fetchDataForPokemon(id);
    }

    const savedPokedex = localStorage.getItem("mypokedex");
    if (savedPokedex) {
      setMyPokedexPokemons(JSON.parse(savedPokedex));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("mypokedex", JSON.stringify(myPokedexPokemons));
  }, [myPokedexPokemons]);

  const fetchDataForPokemon = async (id: string) => {
    try {
      const pokemonResponse = await api.get(`/pokemon/${id}`);
      setPokemonData(pokemonResponse.data);

      const speciesResponse = await axios.get(pokemonResponse.data.species.url);
      setPokemonSpecies(speciesResponse.data);
    } catch (error) {
      console.error(`Error fetching pokemon ${id}:`, error);
    }
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

  const navigateBack = () => {
    router.back();
  };

  const addPokemonToCollection = () => {
    const newFavoritePokemon: PokemonList = {
      name: pokemonData.name,
      id: pokemonData.id,
      img: pokemonData.sprites.front_default,
    };

    const isAlreadyAdded = myPokedexPokemons.some(
      (pokemon: PokemonList) => pokemon.id === newFavoritePokemon.id
    );

    if (isAlreadyAdded) {
      toast.warning("This Pokemon is already in your collection!");
    } else {
      toast.success("Pokemon successfully added to your list!");

      setMyPokedexPokemons((prevPokedex: PokemonList[]) => [
        ...prevPokedex,
        newFavoritePokemon,
      ]);
    }
  };

  return (
    <ContainerMain>
      <Container>
        <ContainerHead>
          <CaretLeft id="goBackButton" size={24} onClick={navigateBack} />

          <span>
            <b>
              {pokemonData.id < 10
                ? `#0${pokemonData.id}`
                : `#${pokemonData.id}`}
            </b>
          </span>

          <Heart id="addToPokedex" size={24} onClick={addPokemonToCollection} />
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
                  <TitleTag
                    css={{ $$borderColor: getColorForType(item.type.name) }}
                  >
                    <span>{item.type.name}</span>
                  </TitleTag>
                </>
              );
            })}
          </div>

          <div id="locationId">
            <Compass size={20} color="#727278" />
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
