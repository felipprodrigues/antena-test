import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";
import { useContext } from "react";
import { PokedexContext } from "@/pages/_app";

export default function SearchBar() {
  const { setHandleInputChange } = useContext(PokedexContext);

  return (
    <Container>
      <h3>Qual Pokémon você está procurando?</h3>

      <div>
        <div>
          <MagnifyingGlass size={16} />
        </div>
        <input
          type="text"
          onChange={({ target }) => setHandleInputChange(target.value)}
          placeholder="Procurar pokémon"
        />
      </div>
    </Container>
  );
}
