import { dashboardData } from "./dataDashboard";

//funcion que inyecta html al div principal del dashboard, para así tener un div dinámico y si añadimos más categorías no hay que meterlas a mano, sino en el array donde están almacenados los objetos con la info de cada categoria
export const printDash = () => {
  let user = localStorage.getItem("user");
  user === null ? (user = "") : (user = user); //------------> VERIFICAMOS SI SE HAN LOGEADO A NO, PARA NO MOSTRAR "NULL" EN PANTALLA
  const divDash = document.querySelector(".divDash");
  const textoDash = document.querySelector(".textoDash");

  //una vez obtenidos los elementos generales del dashboard les inyectamos el html correspondiente
  textoDash.innerHTML = `
    <h1>BIENVENIDO/A A GAMESHUB ${user}</h1>
      <h2>
        Disfruta recordando míticos juegos que no pasan de moda, pero esta en
        vez, en formato digital. Tambien tienes una pequeña Pokédex si eres fan
        de los graciosos pokemons
      </h2>
      <h2>
        A continuación tienes una breve descripción de los juegos. Si quieres
        jugar a alguno puedes hacerlo desde la pestaña de "Games"
      </h2>

`;

  //inyectamos al html todo el contenido de cada uno de los juegos. Cada info esta en un objeto con su titulo, descripcion, imagen...etc
  dashboardData.forEach((elem) => {
    const section = document.createElement("section");
    section.innerHTML = `
    <img
              src= ${elem.img}
              alt= ${elem.altImg}
            />
            <div>
              <h3>${elem.titulo}</h3>
              <p>
                ${elem.descripcion}
              </p>
            </div>
    `;
    divDash.appendChild(section);
  });
};
