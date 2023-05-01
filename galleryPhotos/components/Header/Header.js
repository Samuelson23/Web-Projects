import "./Header.css";

const template = () => {
  return `
  <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947387/API-phototeca/logo_owvpdy.svg" alt="Phototype logo"/>
  <h1>Phototeca</h1>
  <ul>
      <li><a href="#null" id="homelink">Home</a></li>
      <li><a href="#null" id="gallerylink">Gallery</a></li>
      <li><a href="#null" id="aboutlink">Artists</a></li>
  </ul>
    `;
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
