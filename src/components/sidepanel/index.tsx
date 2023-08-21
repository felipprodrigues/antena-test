import { PokedexContext } from "@/pages/_app";

import { useContext } from "react";
import {
  Container,
  ContainerButton,
  ContainerInfo,
  ContainerImage,
  ContainerDetails,
} from "./styles";
import { X } from "phosphor-react";

import pokedexImage from "@/assets/pokedexImage.png";
import Image from "next/image";

export default function Sidepanel() {
  const { isSidepanelOpen, toggleSidepanel } = useContext(PokedexContext);

  return (
    <Container
      css={{
        transform: isSidepanelOpen ? "translateX(0%)" : "translateX(100%)",
        display: isSidepanelOpen ? "flex" : "none",
      }}
    >
      <div>
        <X size={24} onClick={toggleSidepanel} />
      </div>

      <div>
        <ContainerInfo>
          <h2>Meus Pokemons</h2>
          {/* {cart.map((product: any) => {
            return (
              <> */}
          <div>
            <ContainerImage>
              <Image src={pokedexImage} width={100} height={100} alt="" />
            </ContainerImage>

            <ContainerDetails>
              <span>Pokemon name</span>

              {/* <a onClick={() => removeItemFromCart(product.id)}>Remover</a> */}
            </ContainerDetails>
          </div>
          {/* </>
            );
          })} */}
        </ContainerInfo>

        <ContainerButton>
          {/* <div>
            <span>Quantidade</span>
            <span>{cart.length} itens</span>
          </div>
          <div>
            <span>Valor total</span>
            <h2>{formattedUnitPrice}</h2>
          </div>

          <a onClick={handlePurchase}>Finalizar compra</a> */}
        </ContainerButton>
      </div>
    </Container>
  );
}
