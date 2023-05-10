export const initTablero = () => {
  const divGame = document.querySelector(".game");
  for (let i = 1; i <= 6; i++) {
    const divHole = document.createElement("div");
    const divMole = document.createElement("div");
    divHole.classList.add(`hole${i}`);
    divMole.classList.add("mole");
    divHole.appendChild(divMole);
    divGame.appendChild(divHole);
  }
};
