import { getPokemon } from "../../services/pokemon.service";

export const pokemonLimpio = async () => {
  const todosPokemons = [];
  for (let i = 1; i < 151; i++) {
    todosPokemons.push(await getPokemon(i));
  }
  return todosPokemons;
};
