import { createContext, useEffect, useState } from "react";
import axios from "axios";
import type { AppProps } from "next/app";
import Image from "next/image";

// Styles
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// img
import pokedexImage from "../assets/pokedexImage.png";

// Components
import Sidepanel from "@/components/sidepanel";
import { PokemonList } from "./pokedex/[id]";

interface HomeProps {
  isSidepanelOpen: boolean;
  toggleSidepanel: () => void;
  setHandleInputChange: (string: string) => void;
  handleInputChange: string;
  pokemonData: any;
  setMyPokedexPokemons: React.Dispatch<React.SetStateAction<PokemonList[]>>;
  myPokedexPokemons: PokemonList;
}

export const PokedexContext = createContext({} as HomeProps);

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);
  const [handleInputChange, setHandleInputChange] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [myPokedexPokemons, setMyPokedexPokemons] = useState([]);

  useEffect(() => {
    fetchPokemonApi();
  }, []);

  async function fetchPokemonApi() {
    try {
      const fetchData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=400`
      );
      setPokemonData(fetchData.data);
    } catch (error) {
      console.error("Erro fetching pokemons:", error);
    }
  }

  function toggleSidepanel() {
    setIsSidepanelOpen(() => !isSidepanelOpen);
  }

  return (
    <PokedexContext.Provider
      value={{
        isSidepanelOpen,
        toggleSidepanel,
        setHandleInputChange,
        handleInputChange,
        pokemonData,
        setMyPokedexPokemons,
        myPokedexPokemons,
      }}
    >
      <ToastContainer position="top-left" />
      <Container>
        <Header>
          <h1>Pokedex</h1>

          <div onClick={() => toggleSidepanel()}>
            <Image src={pokedexImage} alt="" width={32} height={32} />
          </div>
        </Header>

        <Sidepanel />

        <Component {...pageProps} />
      </Container>
    </PokedexContext.Provider>
  );
}
