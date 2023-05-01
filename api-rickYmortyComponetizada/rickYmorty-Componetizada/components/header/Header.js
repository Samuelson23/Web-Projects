import "./Header.css";

const template = () => {
  return `
    <div id="logo">
        <img src="images/imagenheader.png" alt="logo rick y morty"  />
    </div>
    <div id="himg">
    <img src="images/logoheader.png" alt="logo rick y morty" />
  </div>
    <div>
        <p>Docs</p>
        <p>About</p>
        <p>Suport us</p>
    </div>
     `;
};

export const printTemplate = () => {
  const header = document.createElement("header");
  document.querySelector("#app").appendChild(header);
  document.querySelector("header").innerHTML = template();
};
