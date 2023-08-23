import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import { Container } from "./styles";

// Helpers
import { capitalize } from "@/helpers/capitalize";

interface Move {
  name: string;
  description: string;
}

const PokemonMoves: React.FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const [moves, setMoves] = useState<Move[]>([]);

  useEffect(() => {
    const fetchPokemonMoves = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        if (response.status === 200) {
          const pokemonData = response.data;
          const movesData = pokemonData.moves;

          const moveInfoPromises = movesData.map(async (move: any) => {
            const moveName = move.move.name;
            const moveResponse = await axios.get(move.move.url);
            const moveDescription =
              moveResponse.data.effect_entries.find(
                (entry: any) => entry.language.name === "en"
              )?.effect || "Description not available";

            return { name: moveName, description: moveDescription };
          });

          const moveInfo = await Promise.all(moveInfoPromises);
          setMoves(moveInfo);
        }
      } catch (error) {
        console.error("Error fetching moves:", error);
      }
    };

    fetchPokemonMoves();
  }, [pokemonId]);

  return (
    <Container id="moveContainer">
      <table>
        <thead>
          <tr>
            <th>Move Name</th>
            <th>Move Description</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move, index) => (
            <tr key={index}>
              <td id="label">{capitalize(move.name)}</td>
              <td>{move.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default PokemonMoves;
