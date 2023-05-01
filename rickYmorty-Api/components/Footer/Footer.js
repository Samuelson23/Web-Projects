import "./Footer.css";

const template = () => {
  return `
      <div>
        <a
          href="https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/"
        >
          <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947750/API-rickYmorty/icon-linkedin_mpzklx.jpg" alt="link a mi linkedin" />
        </a>
        <a href="https://github.com/Samuelson23">
          <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947750/API-rickYmorty/icon-github_wtmynv.png" alt="link a mi github" />
        </a>
        <p>Samuel Martinez<sup>©</sup> 2023</p>
      </div>
      <div>
        <p>Neoland<sup>©</sup></p>
        <a href="https://www.neoland.es/">
          <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682947750/API-rickYmorty/neoland-n-logotipo_uobwtv.png" alt="link a Neoland" />
        </a>
      </div>
  `;
};

export const printTemplate = () => {
  const footer = document.createElement("footer");
  document.querySelector("#app").appendChild(footer);
  document.querySelector("footer").innerHTML = template();
};
