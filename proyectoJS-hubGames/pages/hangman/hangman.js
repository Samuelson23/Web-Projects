import { initTablero } from "../../components/hangman/initTablero";
import "./hangman.css";

const template = () => {
  return `
    <div class="ahorcado">
      
      <h2>Bienvenido al Hangman!</h2>
      <h3>Intenta adivinar todas las palabras</h3>
      <button class="playHangman">Jugar</button>
      
    </div>
    `;
};

const listenersPlay = () => {
  const btPlay = document.querySelector(".playHangman");
  btPlay.addEventListener("click", (ev) => {
    initTablero();
  });
};

export const printHangman = () => {
  document.querySelector("main").innerHTML = template();
  listenersPlay();
};
