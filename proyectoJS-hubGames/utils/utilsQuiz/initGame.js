import { crearTablero } from "./crearTablero";
import { printPregunta } from "./printPregunta";

export const initGame = (array, indice) => {
  //console.log(array);

  printPregunta(array, indice);
  //comprobarRespuesta();
};

export const jugarAgain = () => {
  const btAgain = document.querySelector(".playAgain");
  const div = document.querySelector(".quizGame");
  btAgain.addEventListener("click", (ev) => {
    div.innerHTML = "";
    crearTablero();
  });
};
