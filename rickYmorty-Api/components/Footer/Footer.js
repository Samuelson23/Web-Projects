import "./Footer.css";

const template = () => {
  return `
      <div>
        <a
          href="https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/"
        >
          <img src="public/images/icon-linkedin.jpg" alt="link a mi linkedin" />
        </a>
        <a href="https://github.com/Samuelson23">
          <img src="public/images/icon-github.png" alt="link a mi github" />
        </a>
        <p>Samuel Martinez<sup>©</sup> 2023</p>
      </div>
      <div>
        <p>Neoland<sup>©</sup></p>
        <a href="https://https://www.neoland.es/">
          <img src="public/images/neoland-n-logotipo.png" alt="link a Neoland" />
        </a>
      </div>
  `;
};

export const printTemplate = () => {
  const footer = document.createElement("footer");
  document.querySelector("#app").appendChild(footer);
  document.querySelector("footer").innerHTML = template();
};
