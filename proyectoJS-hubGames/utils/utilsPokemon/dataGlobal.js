import { mapeoPokemon } from "./mapeoPokemons";
import { mapeoTipos } from "./mapeoType";

//Obtenemos los datos mapeados y los guardamos en un objeto un unico, con las claves de pokemon y tipo

export const dataGlobal = async () => {
  const dataPokemon = {
    pokemon: await mapeoPokemon(),
    type: await mapeoTipos(),
  };
  return {
    dataPokemon: dataPokemon,
  };
};
