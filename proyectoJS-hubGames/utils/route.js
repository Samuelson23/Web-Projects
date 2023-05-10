// 1º importamos todas las funciones que nos pintan las diferentes secciones de nuestra pagina
import { printLogin } from "../pages/Login/Login";
import { printDashboard } from "../pages/dashboard/dashboard";
import { printHangman } from "../pages/hangman/hangman";
import { printMemorycard } from "../pages/memorycard/memorycard";
import { printPokemon } from "../pages/pokemon/pokemon";
import { printQuizgames } from "../pages/quizgames/quizgames";
import { printTresenraya } from "../pages/tresenraya/tresenraya";
import { printWhakatopo } from "../pages/whakatopo/whakatopo";
import { dataGlobal } from "./utilsPokemon/dataGlobal";

//2º creamos un initController para controlar a que pagina nos dirigimos y que nos la pinte
export const initController = async (route) => {
  const dataGlobalPok = await dataGlobal(); //--->cargamos los datos asyncronos de la pokeapi en este paso (previo a la llamada a printPokemon)
  const { dataPokemon } = dataGlobalPok;
  switch (route) {
    case "undefined":
      localStorage.getItem("user") ? printDashboard() : printLogin();
      break;
    case "Pokemon":
      printPokemon(dataPokemon); //--->cuando vayamos a la pagina de pokemon los datos ya los tenemos precargardos
      break;
    case "Hangman":
      printHangman();
      break;
    case "Memorycard":
      printMemorycard();
      break;
    case "Quizgames":
      printQuizgames();
      break;
    case "Tresenraya":
      printTresenraya();
      break;
    case "Whakatopo":
      printWhakatopo();
      break;
    case "Dashboard":
      printDashboard(dataGlobalPok); //--->nuevamente cuando vayamos a dashboard le seguiremos enviando la data de la pokeapi

      break;
    case "Login":
      printLogin();

      break;
  }
};
