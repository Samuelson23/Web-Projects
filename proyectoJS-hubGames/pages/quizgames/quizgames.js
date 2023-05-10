import { crearTablero } from "../../utils/utilsQuiz/crearTablero";
import "./quizgames.css";

const template = () => {
  return `
    <div class="quizGame">
      
    </div>
    `;
};

//listeners

export const printQuizgames = () => {
  document.querySelector("main").innerHTML = template();
  crearTablero();
  //listeners
};
