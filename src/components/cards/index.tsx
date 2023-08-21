import Image from "next/image";
import { Container, Card } from "./styles";

import Pokeball from "@/assets/poke.png";
import { useState } from "react";

interface CardsProps {
  id: number;
  label: string;
  imgUrl: string;
  bgColor: string;
}

export default function CategoryCards() {
  const [activeLabel, setActiveLabel] = useState("pokedex");

  const allCards: CardsProps[] = [
    {
      id: 1,
      label: "Pokedex",
      imgUrl: "",
      bgColor:
        "linear-gradient(171deg, rgba(242,55,54,1) 0%, rgba(157,33,33,1) 70%);",
    },
    {
      id: 2,
      label: "Habilidades",
      imgUrl: "",
      bgColor:
        "linear-gradient(171deg, rgba(242,155,39,1) 0%, rgba(200,100,20,1) 70%)",
    },
    {
      id: 3,
      label: "Evolução",
      imgUrl: "",
      bgColor:
        "linear-gradient(171deg, rgba(44,180,134,1) 0%, rgba(3,109,73,1) 70%)",
    },
    {
      id: 4,
      label: "Localização",
      imgUrl: "",
      bgColor:
        "linear-gradient(171deg, rgba(80,174,223,1) 0%, rgba(31,62,168,1) 70%)",
    },
  ];

  function toggleCardContent(label: string) {
    setActiveLabel(label);
  }

  return (
    <Container>
      {allCards.map((card) => {
        return (
          <>
            <Card
              css={{
                $$bgColor: card.bgColor,
                $$borderColor: activeLabel === card.label && "#d53a9d",
              }}
              onClick={() => toggleCardContent(card.label)}
            >
              <span>{card.label}</span>

              <Image src={Pokeball} alt="" height={50} width={50} />
            </Card>
          </>
        );
      })}
    </Container>
  );
}
