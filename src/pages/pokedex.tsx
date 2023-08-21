import CategoryCards from "@/components/cards";
import PokedexContent from "@/components/pokedex";
import SearchBar from "@/components/searchBar";
import { ContainerMain } from "@/styles/pages/app";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Pokedex() {
  return (
    <ContainerMain>
      <SearchBar />

      <CategoryCards />

      <PokedexContent />
    </ContainerMain>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const fetchData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=500&limit=500`
    );

    console.log(fetchData.data, "aqui o data");
    return {
      props: {
        pokemon: fetchData.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        pokemon: null,
      },
    };
  }
};
