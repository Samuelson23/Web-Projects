import { pokemonLimpio } from "./dataPokemon";

/*export const mapeoPokemon = async () => {
  const resp = await axiosPokemon();
  console.log(resp);
};*/

export const mapeoPokemon = async () => {
  /* const todosPokemons = [];
  for (let i = 1; i < 151; i++) {
    todosPokemons.push(await axiosPokemon(i));
  } */
  //console.log(todosPokemons);
  const arrayPok = await pokemonLimpio();
  let dataPokemons = arrayPok.map((elem) => {
    let idCompleto = "";
    if (elem.id < 10) {
      idCompleto = `00${elem.id}`;
    } else if (elem.id < 100) {
      idCompleto = `0${elem.id}`;
    } else {
      idCompleto = `${elem.id}`;
    }
    return {
      id: idCompleto,
      name: elem.name,
      img: elem.sprites.other.dream_world.front_default,
      types: elem.types, //[0].type.name,
      //type2: elem.types[1].type.name,
      altura: elem.height * 10,
      peso: elem.weight / 10,
    };
  });
  return dataPokemons;
};
