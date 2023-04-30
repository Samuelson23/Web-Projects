import "./Footer.css";

const template = () => {
  return `
  <p>Samuel Martinez </p>
  `;
};

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template();
};
