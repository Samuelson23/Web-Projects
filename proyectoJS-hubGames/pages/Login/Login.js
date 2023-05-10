import { changeLogin } from "../../components/Header/Header";
import { initController } from "../../utils/route";
import "./Login.css";

// 1º declarar la funcion que imprime en el main
const template = () => {
  return `
    <h1>Bienvenido a mi hub de games!</h1>
    <h2>Por favor, introduce tu nombre de usuario para poder acceder</h2>
    <div class="verification">
      <label>
        <input class="login" type="text" placeholder="Username" />
      </label>
      <button class="btAcceso">
        <img
          src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1683019038/ProyectoJS-hubGames/lock_FILL0_wght400_GRAD0_opsz48_etxsmj.png"
          alt="icono login"
        />
        Login
      </button>
    </div>
  `;
};

// 2º eventos para recoger los datos del input
const addListeners = () => {
  const inputLogin = document.querySelector(".login");
  const buttonLogin = document.querySelector(".btAcceso");
  buttonLogin.addEventListener("click", (ev) => {
    const userName = inputLogin.value;
    console.log(userName);
    changeLogin("Login");
    localStorage.setItem("user", userName);
    initController("undefined");
    return userName;
  });
};

// 3º exportar la funcion para imprimir en el main
export const printLogin = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
