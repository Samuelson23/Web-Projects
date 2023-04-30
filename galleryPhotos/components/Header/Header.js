import "./Header.css";

const template = () => {
  return `
  <img src="public/images/logo.svg" alt="Phototype logo"/>
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
