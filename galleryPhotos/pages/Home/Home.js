import { printTemplate as Gallery } from "../Gallery/Gallery";
import { printTemplate as About } from "../About/About";
import { linkpage } from "../../utils/linkpage";
import "./Home.css/";

const template = () => {
  return `
    <div class = "global">
    
    </div>
    
    `;
};

const printHome = () => {
  const divGlobal = document.querySelector(".global");
  const printArt = document.createElement("div");
  printArt.innerHTML = `
  
  <div class="text">
  <h2>PHOTOTECA</h2>
  <p class="phome">Bienvenido a la Phototeca! La mejor biblioteca fotográfica.</p/>
  <p class="phome">Accede a Gallary para ver todas las obras de arte, o accede a Artists para ver a todos los artistas que componen esta biblioteca fotográfica</p>
  </div>
  <img
        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947387/API-phototeca/galleryPhoto_nuwvae.jpg"
        alt="imagen acceso a los artistas"
      />
  

    `;
  divGlobal.appendChild(printArt);
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  printHome();
};
