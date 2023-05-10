export const printCard = (array) => {
  const divGaleria = document.querySelector(".galleryPokemon");
  divGaleria.innerHTML = "";

  array.forEach((elem) => {
    if (elem.types.length == 2) {
      const section = document.createElement("section");
      section.classList.add("pokemonCard");
      section.innerHTML = `
        <figure class=${elem.types[0].type.name}>
          <div>
            <h3 class="numPokemon">#${elem.id}</h3>
            <h2>${elem.name.toUpperCase()}</h2>
          </div>
          <img src="${elem.img}" alt="imagen de ${elem.name}" />
          <div class="datosPokemon"><p>Height: ${elem.altura} cm.</p>
          <p>Weight ${elem.peso} kg.</p>
          <h4>Type: ${elem.types[0].type.name} / ${
        elem.types[1].type.name
      }</h4></div>
        </figure>
      `;
      divGaleria.appendChild(section);
    } else {
      const section = document.createElement("section");
      section.classList.add("pokemonCard");
      section.innerHTML = `
        <figure class=${elem.types[0].type.name}>
          <div>
            <h3 class="numPokemon">#${elem.id}</h3>
            <h2>${elem.name.toUpperCase()}</h2>
          </div>
          <img src="${elem.img}" alt="imagen de ${elem.name}" />
          <div class="datosPokemon"><p>Height: ${elem.altura} cm.</p>
          <p>Weight ${elem.peso} kg.</p>
          <h4>Type: ${elem.types[0].type.name}</h4></div>
        </figure>
      `;
      divGaleria.appendChild(section);
    }
  });
};
