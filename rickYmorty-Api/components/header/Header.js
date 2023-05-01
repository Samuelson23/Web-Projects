import "./Header.css";

const template = () => {
  return `
    <div id="logo">
        <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947750/API-rickYmorty/imagenheader_pq89dn.png" alt="logo rick y morty"  />
    </div>
    <div id="himg">
    <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947750/API-rickYmorty/logoheader_glwo7p.png" alt="logo rick y morty" />
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
