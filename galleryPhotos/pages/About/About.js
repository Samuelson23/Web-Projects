import "./About.css";

const template = () => {
  return `
    <div class="divHome">
      <div class="gridHome"></div>
    </div>
    `;
};

const getData = () => {
  fetch(`https://picsum.photos/v2/list?page=1&limit=100`)
    .then((photos) => photos.json())
    .then((photos) => {
      let contName = []; //array para guardar el nombre de los fotografos
      for (let i = 0; i < photos.length; i++) {
        if (!contName.includes(photos[i].author)) {
          contName.push(photos[i].author);
        }
      }
      contName.sort();
      console.log(contName);
      const h3 = document.createElement("h3");
      const grid = document.querySelector(".gridHome");
      for (const user of contName) {
        const boton = document.createElement("button");
        const h3 = document.createElement("h3");
        boton.classList.add("btname");
        boton.innerText = user;

        grid.appendChild(boton);
      }

      const bt = document.querySelectorAll("button");
      bt.forEach((elem) => {
        elem.addEventListener("click", (ev) => {
          const borraDiv = document.querySelector(".divHome");

          const nameClick = ev.target.textContent;
          grid.remove();
          buscar(nameClick);
        });
      });
    });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  getData();
};

const buscar = (name) => {
  fetch(`https://picsum.photos/v2/list?page=1&limit=100`)
    .then((photos) => photos.json())
    .then((photos) => {
      const div = document.querySelector("div");
      const h3 = document.createElement("h3");
      /* h3.innerText = `${name}`;
      div.appendChild(h3); */
      for (const foto of photos) {
        if (foto.author == name) {
          const figure = document.createElement("figure");

          figure.innerHTML = `<img src="${foto.download_url}" alt="${foto.author}">`;
          div.appendChild(figure);
        }
      }
    });
};
