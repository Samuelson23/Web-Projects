import { comprobarLetra } from "../../utils/utilsHangman/comprobarLetra";
import { comprobarWin } from "../../utils/utilsHangman/comprobarWin";
import { arrayAhorcado, arrayPalabras } from "./arrayAhorcado";
let fallos = 0;

export const initTablero = () => {
  let indexRandom = randomWord(arrayPalabras);
  let palabra = arrayPalabras[indexRandom];
  palabra.toLowerCase();

  let palabraOculta = [];
  console.log(palabra);
  const divAhorcado = document.querySelector(".ahorcado");
  divAhorcado.innerHTML = `
    <div class="tablero">
      <img class="imgAhorcado" src="${arrayAhorcado[0]}" alt="" />

        <div class="palabra"><h2>Adivina la palabra</h2>
            <div class="palabraOculta"></div>
            <div class="busqueda">
                <input type="text" placeholder="letra"></input>
                <button class="btBuscar">Comprobar</button>
            </div>
            <div class="letrasUsadas"></div>
        </div>
    </div>
  `;
  const divPalabra = document.querySelector(".palabra");
  const divPalabraOculta = document.querySelector(".palabraOculta");

  for (const letra of palabra) {
    const p = document.createElement("p");
    p.innerText = "_";
    divPalabraOculta.appendChild(p);
    p.classList.add(letra.toLowerCase());
    palabraOculta.push("_");
    //console.log(p);
  }
  console.log(palabraOculta);
  listenersBusqueda(palabra, fallos, palabraOculta);
};

//random index para coger una palabra aleatoria del array de palabras
const randomWord = (array) => {
  let min = 0;
  let max = array.length;

  return Math.floor(Math.random() * (max - min) + min);
};

//add listeners

const listenersBusqueda = (palabra, fallos, palabraOculta) => {
  const btBusqueda = document.querySelector(".btBuscar");
  const input = document.querySelector("input");

  btBusqueda.addEventListener("click", (ev) => {
    if (!palabra.toLowerCase().includes(input.value.toLowerCase())) {
      fallos++;
      comprobarWin(palabra, fallos, palabraOculta);
    } else {
      comprobarWin(palabra, fallos, palabraOculta);
    }
  });
};
