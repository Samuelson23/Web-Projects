import "./First.css";

const template = () => {
  return `
    <p>PAGINA INICIAL</p>
    
    `;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
