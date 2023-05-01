import "./Gallery.css";

const template = () => {
  return `
    <div class="cabecera">
      <h2>GALLERY</h2>
    </div>
    <div class="galeria">DIV</div>

    `;
};

let numeroPagina = 1;

const divBt = document.createElement("div");
divBt.classList.add("divbotones");

const botPrev = document.createElement("button");
botPrev.innerText = "Previous";
const botNext = document.createElement("button");
botNext.innerText = "Next";

botPrev.value = numeroPagina;
botNext.value = numeroPagina;

divBt.appendChild(botPrev);
divBt.appendChild(botNext);

const getFotos = (page) => {
  numeroPagina == 1 ? (botPrev.disabled = true) : (botPrev.disabled = false);
  console.log("n", page);
  //console.log("p", botPrev.value);
  const div = document.querySelector(".galeria");
  div.innerHTML = "";
  const divCab = document.querySelector(".cabecera");
  div.innerHTML = "";
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    .then((photos) => photos.json())
    .then((photos) => {
      //console.log(photos);
      for (const foto of photos) {
        const figure = document.createElement("figure");
        const h3 = document.createElement("h3");
        figure.innerHTML = `<img src="${foto.download_url}" alt="${foto.author}">
        <h3>${foto.author}</h3>`;
        div.appendChild(figure);
      }

      divCab.appendChild(divBt);

      /*  for (let i = 1; i <= photos.length; i++) {
        const bt = document.createElement("button");
        bt.innerText = "1";
        divBt.appendChild(bt);
      } */

      /*divBt.addEventListener("click", (ev) => {
        const newPage = ev.target.innerText;
        getFotos(newPage);
        divBt.innerText = "";
      });*/
    })
    .catch((err) => {
      div.innerHTML = `<h3>No se ha podido completar la carga de fotos</h3>`;
    });
};

botNext.addEventListener("click", (ev) => {
  numeroPagina++;
  console.log(numeroPagina);
  numeroPagina == 1 ? (botPrev.disabled = true) : (botPrev.disabled = false);
  getFotos(numeroPagina);
  //botPrev.value = nextPage;
});

botPrev.addEventListener("click", (ev) => {
  numeroPagina--;
  console.log(numeroPagina);
  numeroPagina == 1 ? (botPrev.disabled = true) : (botPrev.disabled = false);
  getFotos(numeroPagina);
});

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  numeroPagina = 1;
  getFotos(numeroPagina);
};
