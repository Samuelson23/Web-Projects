import { arrayAhorcado } from "../../components/hangman/arrayAhorcado";

export const comprobarLetra = (palabra, fallos, palabraOculta) => {
  const pal = palabra.split("");
  console.log("entro palabra", pal);
  console.log("oculta", palabraOculta);
  const imgArc = document.querySelector(".imgAhorcado");
  const input = document.querySelector("input");
  const p = document.querySelectorAll("p");
  const divPalabraOculta = document.querySelector(".palabraOculta");

  p.forEach((elem, index) => {
    if (elem.className == input.value.toLowerCase()) {
      console.log(index - 5);
      elem.innerText = input.value.toUpperCase();
      console.log("pal index", palabraOculta[index - 5]);
      palabraOculta[index - 5] = input.value.toUpperCase();
      console.log("post index", palabraOculta);
    }
  });

  console.log("fallo", fallos);
  imgArc.setAttribute("src", arrayAhorcado[fallos]);
};
