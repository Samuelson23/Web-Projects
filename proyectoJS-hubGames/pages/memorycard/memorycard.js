import "./memorycard.css";

const template = () => {
  return `
    <p>pagina del juego memoriza las cartas</p>
    `;
};

//listeners

export const printMemorycard = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
