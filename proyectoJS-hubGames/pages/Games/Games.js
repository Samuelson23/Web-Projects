import { printHangman } from "../hangman/hangman";
import { printMemorycard } from "../memorycard/memorycard";
import { printQuizgames } from "../quizgames/quizgames";
import { printTresenraya } from "../tresenraya/tresenraya";
import { printWhakatopo } from "../whakatopo/whakatopo";
import "./Games.css";
import { printPokemon } from "../pokemon/pokemon";
import { initController } from "../../utils/route";

const template = () => {
  return `
    <div id="mainGames">
      <section id="gameSection" class="linkPokemon">
        <h3>Pokédex</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033113/ProyectoJS-hubGames/International_Pok%C3%A9mon_logo.svg_mivwok.png"
          alt="imagen de pokemon"
        />
      </section>
      <section id="gameSection" class="linkHangman">
        <h3>El ahorcado</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033353/ProyectoJS-hubGames/6168680_ww70ev.png"
          alt="imagen del ahorcado"
        />
      </section>
      <section id="gameSection" class="linkQuizgames">
        <h3>Quiz Game</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033538/ProyectoJS-hubGames/png-clipart-quiz-guess-word-trivia-history-quiz-game-quiz-miscellaneous-game_imcfur.png"
          alt="imagen quiz game"
        />
      </section>
      <section id="gameSection" class="linkWhakatopo">
        <h3>¡Atrapa el topo!</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683035663/ProyectoJS-hubGames/pngwing.com_uksjgm.png"
          alt="imagen atrapa el topo"
        />
      </section>
      <section id="gameSection" class="linkTresenraya">
        <h3>Tres en raya</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683033578/ProyectoJS-hubGames/Tic_tac_toe.svg_fsymts.png"
          alt="imagen tres en raya"
        />
      </section>
      <section id="gameSection" class="linkMemorycard">
        <h3>Match the Cards!</h3>
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683034645/ProyectoJS-hubGames/kisspng-material-yellow-orange-referee-cards-5ab0c13f260580.8581438515215332471558_cw24fl.png"
          alt="imagen memoriza las cartas"
        />
      </section>
    </div>
  `;
};

//listeners
const listenersGames = () => {
  document.querySelector(".linkPokemon").addEventListener("click", (ev) => {
    initController("Pokemon");
  });
  document.querySelector(".linkHangman").addEventListener("click", (ev) => {
    initController("Hangman");
  });
  document.querySelector(".linkMemorycard").addEventListener("click", (ev) => {
    initController("MemoryCard");
  });
  document.querySelector(".linkQuizgames").addEventListener("click", (ev) => {
    initController("Quizgames");
  });
  document.querySelector(".linkWhakatopo").addEventListener("click", (ev) => {
    initController("Whakatopo");
  });
  document.querySelector(".linkTresenraya").addEventListener("click", (ev) => {
    initController("Tresenraya");
  });
};

export const printGames = () => {
  document.querySelector("main").innerHTML = template();
  listenersGames();
};
