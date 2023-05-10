import { mapeoPokemon } from "./mapeoPokemons";
import { printCard } from "../../components/pokemon/printCards";

export const getPokemons = async () => {
  return await mapeoPokemon();
};
