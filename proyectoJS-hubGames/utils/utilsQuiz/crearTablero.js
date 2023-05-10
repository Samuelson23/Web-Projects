import { initCategoria } from "./initCategoria";

export const crearTablero = () => {
  const divQuiz = document.querySelector(".quizGame");
  const h2titulo = document.createElement("h2");
  const divPregunta = document.createElement("div");
  divPregunta.classList.add("quizPregunta");

  h2titulo.innerText = `Bienvenido al QUIZ GAME!
  Selecciona una categoría:`;
  divQuiz.appendChild(h2titulo);
  divQuiz.appendChild(divPregunta);

  for (let i = 0; i < 4; i++) {
    const button = document.createElement("button");
    switch (i) {
      case 0:
        button.innerText = "Steve Jobs";
        button.classList.add("tecnologia");
        break;
      case 1:
        button.innerText = "Lionel Messi";
        button.classList.add("deporte");
        break;
      case 2:
        button.innerText = "La Caixa";
        button.classList.add("economia");
        break;
      case 3:
        button.innerText = "Europa";
        button.classList.add("geografia");
        break;
    }
    divPregunta.appendChild(button);
  }

  const botonTecnologia = document.querySelector(".tecnologia");
  const botonDeporte = document.querySelector(".deporte");
  const botonEconomia = document.querySelector(".economia");
  const botonGeografia = document.querySelector(".geografia");
  botonTecnologia.addEventListener("click", (ev) => {
    divPregunta.innerHTML = "";
    h2titulo.innerText = ev.srcElement.className.toUpperCase();
    console.log(ev);
    initCategoria(0);
  });
  botonDeporte.addEventListener("click", (ev) => {
    divPregunta.innerHTML = "";
    h2titulo.innerText = ev.srcElement.className.toUpperCase();
    console.log(ev);
    initCategoria(1);
  });
  botonEconomia.addEventListener("click", (ev) => {
    divPregunta.innerHTML = "";
    h2titulo.innerText = ev.srcElement.className.toUpperCase();
    console.log(ev);
    initCategoria(2);
  });
  botonGeografia.addEventListener("click", (ev) => {
    divPregunta.innerHTML = "";
    h2titulo.innerText = ev.srcElement.className.toUpperCase();
    console.log(ev);
    initCategoria(3);
  });
};
