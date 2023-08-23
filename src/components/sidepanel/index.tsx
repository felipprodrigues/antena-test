import { PokedexContext } from "@/pages/_app";
import { useContext } from "react";
import Image from "next/image";

// Helpers
import { capitalize } from "@/helpers/capitalize";
import { toast } from "react-toastify";

// Icons
import { Trash, X } from "phosphor-react";

// Styles
import {
  Container,
  ContainerInfo,
  ContainerImage,
  ContainerDetails,
  DeleteButton,
} from "./styles";

export default function Sidepanel() {
  const {
    isSidepanelOpen,
    toggleSidepanel,
    myPokedexPokemons,
    setMyPokedexPokemons,
  } = useContext(PokedexContext);

  const removeFromPokedex = (id: number) => {
    const updatedPokemons = myPokedexPokemons.filter(
      (pokemon: any) => pokemon.id !== id
    );

    setMyPokedexPokemons(updatedPokemons);

    toast.success("Pokemon successfully removed from your list!");
  };

  return (
    <Container
      css={{
        transform: isSidepanelOpen ? "translateX(0%)" : "translateX(100%)",
        display: isSidepanelOpen ? "flex" : "none",
      }}
    >
      <div>
        <X size={24} onClick={toggleSidepanel} />{" "}
      </div>

      <div>
        <ContainerInfo>
          <h2>My Pokemons</h2>

          {myPokedexPokemons.map((pokemon: any) => (
            <div key={pokemon.id}>
              {" "}
              <ContainerImage>
                <Image
                  src={pokemon.img}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </ContainerImage>
              <ContainerDetails>
                <span>{capitalize(pokemon.name)}</span>
                <span>
                  {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
                </span>

                <DeleteButton onClick={() => removeFromPokedex(pokemon.id)}>
                  <Trash size={16} />
                  Remove
                </DeleteButton>
              </ContainerDetails>
            </div>
          ))}
        </ContainerInfo>
      </div>
    </Container>
  );
}
