import "./Home.css";

const template = () => {
  return `
  
  `;
};

let numPag = 1;

const input = document.createElement("input");
const inpBt = document.createElement("button");
inpBt.innerText = "Search";
const btNext = document.createElement("button");
const btPrev = document.createElement("button");
const divBt = document.createElement("div");
const divChar = document.createElement("div");
const btPage = document.createElement("button");
const divBuscar = document.createElement("div");
const divPages = document.createElement("div");
btPage.classList.add("btNumPag");
btNext.innerText = "Next";
btPrev.innerText = "Previous";
btPage.innerText = numPag;
divBuscar.appendChild(input);
divBuscar.appendChild(inpBt);
divBt.appendChild(divBuscar);
divPages.appendChild(btPrev);
divPages.appendChild(btPage);
divPages.appendChild(btNext);
divBt.appendChild(divPages);
divBt.classList.add("divBuscador");
numPag == 1 ? (btPrev.disabled = true) : (btPrev.disabled = false);

const getData = async (page) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const dataJson = await data.json();
  const totalPag = dataJson.info.pages;
  console.log(dataJson.results);
  const main = document.querySelector("main");
  main.appendChild(divBt);
  main.appendChild(divChar);
  divChar.innerHTML = "";
  btPage.innerText = numPag;

  dataJson.results.forEach((elem) => {
    const section = document.createElement("section");
    section.innerHTML = "";
    section.innerHTML = `
        <h3>${elem.name}</h3>
        <img src ="${elem.image}" alt= "imagen del personaje  ${elem.name}" />
        <div class="personaje">
            <p>GENERO: ${elem.gender}</p>
            <p>ESPECIE: ${elem.species}</p>
            <p>LOCALIZACION: ${elem.location.name}</p>
            <p>STATUS: ${elem.status}</p>
        </div>`;
    divChar.appendChild(section);

    switch (elem.status) {
      case "Alive":
        section.classList.add("alive");
        break;
      case "Dead":
        section.classList.add("dead");
        break;
      case "unknown":
        section.classList.add("unk");
    }
  });
  page == 1 ? divBt.disabled : divBt.enabled;
};

btNext.addEventListener("click", (ev) => {
  numPag++;
  numPag == 1 ? (btPrev.disabled = true) : (btPrev.disabled = false);
  getData(numPag);
});
btPrev.addEventListener("click", (ev) => {
  numPag--;
  numPag == 1 ? (btPrev.disabled = true) : (btPrev.disabled = false);
  getData(numPag);
});

inpBt.addEventListener("click", (ev) => {
  divChar.innerHTML = "";
  const data = fetch("https://rickandmortyapi.com/api/character?")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.info.pages; i++) {
        const dataPj = fetch(
          `https://rickandmortyapi.com/api/character?page=${i}`
        )
          .then((datos) => datos.json())
          .then((datos) => {
            const main = document.querySelector("main");
            datos.results.forEach((elem) => {
              const section = document.createElement("section");
              if (elem.name.includes(input.value)) {
                section.innerHTML = `
                  <h3>${elem.name}</h3>
                  <img src ="${elem.image}" alt= "imagen del personaje  ${elem.name}" />
                  <div class="personaje">
                      <p>GENERO: ${elem.gender}</p>
                      <p>ESPECIE: ${elem.species}</p>
                      <p>LOCALIZACION: ${elem.location.name}</p>
                      <p>STATUS: ${elem.status}</p>
                  </div>`;
                divChar.appendChild(section);

                main.appendChild(divChar);
                switch (elem.status) {
                  case "Alive":
                    section.classList.add("alive");
                    break;
                  case "Dead":
                    section.classList.add("dead");
                    break;
                  case "unknown":
                    section.classList.add("unk");
                }
              }
            });
          });
      }
    });
});

export const printTemplate = () => {
  const main = document.createElement("main");
  document.querySelector("#app").appendChild(main);
  document.querySelector("main").innerHTML = template();
  getData(numPag);
};
