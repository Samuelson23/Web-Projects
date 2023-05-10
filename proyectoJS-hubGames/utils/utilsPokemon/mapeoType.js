import { pokemonLimpio } from "./dataPokemon";
import { mapeoPokemon } from "./mapeoPokemons";

export const mapeoTipos = async () => {
  const arrayTipos = [];
  const arrayPokemon = await mapeoPokemon();

  arrayPokemon.filter((elem) => {
    elem.types.forEach((type) => {
      !arrayTipos.includes(type.type.name) && arrayTipos.push(type.type.name);
    });
  });
  return arrayTipos;
};
