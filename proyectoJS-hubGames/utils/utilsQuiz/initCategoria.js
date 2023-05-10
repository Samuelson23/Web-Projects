import {
  preguntasDeporte,
  preguntasEconomia,
  preguntasGeografia,
  preguntasTecnologia,
} from "../../components/quizGamesPreguntas/preguntas";
import { initGame } from "./initGame";

export const initCategoria = (indice) => {
  switch (indice) {
    case 0:
      initGame(preguntasTecnologia, 0);
      break;
    case 1:
      initGame(preguntasDeporte, 0);
      break;
    case 2:
      initGame(preguntasEconomia, 0);
      break;
    case 3:
      initGame(preguntasGeografia, 0);
      break;
  }
};
