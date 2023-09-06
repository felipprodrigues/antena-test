import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/lib/axios";

// Styles
import { Container } from "./styles";

// Helpers
import { capitalize } from "@/helpers/capitalize";

import { RotatingLines } from "react-loader-spinner";
import { Move } from "@/interfaces";

const PokemonMoves = ({ pokemonId }: any) => {
  const [moves, setMoves] = useState<Move[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonMoves = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);

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

          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching moves:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonMoves();
  }, [pokemonId]);

  return (
    <Container id="moveContainer">
      {loading ? (
        <div id="isLoader">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="0.75"
            width="48"
            visible={true}
          />
        </div>
      ) : (
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
      )}
    </Container>
  );
};

export default PokemonMoves;
