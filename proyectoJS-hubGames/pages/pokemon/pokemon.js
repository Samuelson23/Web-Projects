import { getButtons } from "../../components/pokemon/getBotones";
import { printCard } from "../../components/pokemon/printCards";
import "./pokemon.css";

const template = () => ` 
<div class="divBusqueda">
<label><input placeholder="  Buscar Pokemon..."></input></label>
<div class="botonesPok"></div>
</div>
<div class="galleryPokemon"></div>`;

// ----> 2) Eventos de nuestros elementos html
/* const dataService = async () => {
  const getData = await dataPokemon();
  getData.map((pokemon) => {
    const templateFigure = `
      <figure class="figurePokemon">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
      </figure>
    `;

    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};

const addListeners = () => {};

// ----> 3) Pintar */

export const printPokemon = (data) => {
  const { pokemon, type } = data;
  document.querySelector("main").innerHTML = template();
  getButtons(pokemon, type);
  printCard(pokemon);
};
