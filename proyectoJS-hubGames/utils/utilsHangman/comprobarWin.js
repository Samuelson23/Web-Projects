import { arrayAhorcado } from "../../components/hangman/arrayAhorcado";
import { initTablero } from "../../components/hangman/initTablero";
import { comprobarLetra } from "./comprobarLetra";

export const comprobarWin = (palabra, fallos, palabraOculta) => {
  const tablero = document.querySelector(".tablero");
  const h2 = document.createElement("h2");
  const boton = document.createElement("button");
  boton.innerText = "Jugar de nuevo";
  boton.classList.add("playHangman");
  h2.innerText = "Has perdido!";

  if (!palabraOculta.includes("_")) {
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.appendChild(h2);
      h2.innerText = "Has ganado!!";
      tablero.appendChild(boton);
      boton.addEventListener("click", (ev) => {
        initTablero();
      });
    }, 200);
  } else if (fallos <= 6) {
    comprobarLetra(palabra, fallos, palabraOculta);
  } else {
    setTimeout(() => {
      tablero.innerHTML = "";
      tablero.appendChild(h2);
      tablero.appendChild(boton);
      boton.addEventListener("click", (ev) => {
        initTablero();
      });
    }, 200);
  }
};
