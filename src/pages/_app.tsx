// Styles
import { globalStyles } from "@/styles/globals";
import { Container, ContainerMain, Header } from "@/styles/pages/app";

// Next
import type { AppProps } from "next/app";
import Image from "next/image";

// img
import pokedexImage from "../assets/pokedexImage.png";

// React utils
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Components
import Sidepanel from "@/components/sidepanel";

interface HomeProps {
  isSidepanelOpen: boolean;
  toggleSidepanel: () => void;
  setHandleInputChange: (string: string) => void;
}

export const PokedexContext = createContext({} as HomeProps);

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);
  const [handleInputChange, setHandleInputChange] = useState("");

  const [pokemonData, setPokemonData] = useState([]);

  function toggleSidepanel() {
    setIsSidepanelOpen(() => !isSidepanelOpen);
  }

  async function fetchPokemonApi() {
    try {
      const fetchData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`
      );
      setPokemonData(fetchData.data);

      console.log(fetchData.data, "dados pokemno");
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  console.log(handleInputChange, "aqui");

  useEffect(() => {
    fetchPokemonApi();
  }, []);
  return (
    <PokedexContext.Provider
      value={{
        isSidepanelOpen,
        toggleSidepanel,
        setHandleInputChange,
        handleInputChange,
        pokemonData,
      }}
    >
      <Container>
        <Header>
          <h1>Pokedex</h1>

          <div onClick={() => toggleSidepanel()}>
            <Image src={pokedexImage} alt="" width={32} height={32} />
          </div>
        </Header>

        <Sidepanel />

        {/* <ContainerMain>
          <SearchBar />


          <PokedexContent />
        </ContainerMain> */}

        <Component {...pageProps} />
      </Container>
    </PokedexContext.Provider>
  );
}
