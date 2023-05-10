import "./About.css";
const template = () => {
  return `
    <div class="pageAbout"><h2>GAMES HUB</h2>
    <h3>by Samuel Martinez Gonzalez</h3>
    <p>
      Este es mi proyecto final de JavaScript. Después de dedicarle más de 40
      horas espero que os gusten los resultados. Todo el proyecto está
      componetizado y he intentado que tenga una buena performance a nivel de
      rendimiento, ya que al llamar a la API de pokemon y trabajar sobre ella se
      podía relentizar algún segundo la carga de los 150 pokemons.
    </p>
    <h3>
      Espero que disfrutes visitando esta página. Tanto a nivel visual como a
      nivel práctico
    </h3></div>
  `;
};

export const printAbout = () => {
  document.querySelector("main").innerHTML = template();
};
