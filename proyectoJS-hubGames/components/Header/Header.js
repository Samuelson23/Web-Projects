import { printAbout } from "../../pages/About/About";
import { printGames } from "../../pages/Games/Games";
import { initController } from "../../utils/route";
import "./Header.css";

const template = () => {
  return `
    <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682969275/ProyectoJS-hubGames/Games-PNG-File_n9nh9b.png" alt="logo games" class="imgLogo"/>
    
    <ul>
        <a href="#null" class="linkHome">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964372/ProyectoJS-hubGames/home_FILL0_wght400_GRAD0_opsz48_amqopm.png" alt="logo home"/>
                <p>Home</p>
            </li>
        </a>
        <a href="#null" class="linkGames">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964368/ProyectoJS-hubGames/stadia_controller_FILL0_wght400_GRAD0_opsz48_fe6tao.png" alt="logo games"/>
                <p>Games</p>
            </li>
        </a>
        <a href="#null" class="linkAbout">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964627/ProyectoJS-hubGames/live_help_FILL0_wght400_GRAD0_opsz48_swth07.png" alt="logo about"/>
                <p>About</p>
            </li>
        </a>
        <a href="#null" class="linkLogin">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964376/ProyectoJS-hubGames/login_FILL0_wght400_GRAD0_opsz48_o6pn4r.png" alt="logo login" class="iconLogin"/>
                
                <p>Login</p>
            </li>
        </a>
        <a href="#null" class="linkLogout">
            <li>
                <img src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1682964374/ProyectoJS-hubGames/logout_FILL0_wght400_GRAD0_opsz48_snteb5.png" alt="logo logout" class="iconLogout"/>
                <p>Logout</p>
            </li>
        </a>
    </ul>
    <button type="button" class="claroOscuro" "onclick="changeMode()">Tema</button>
    `;
};

//añadimos eventListeners para que cuando clickemos en algun icono del header nos dirija a esa sección
const headerListeners = () => {
  const linkHome = document.querySelector(".linkHome");
  linkHome.addEventListener("click", (ev) => {
    initController("Dashboard");
  });
  const linkGames = document.querySelector(".linkGames");
  linkGames.addEventListener("click", (ev) => {
    !localStorage.getItem("user") ? initController("Login") : printGames(); //-----> si el usuario no esta logeado no puede entrar a esta seccion
  });
  const linkAbout = document.querySelector(".linkAbout");
  linkAbout.addEventListener("click", (ev) => {
    !localStorage.getItem("user") ? initController("Login") : printAbout(); //-----> si el usuario no esta logeado no puede entrar a esta seccion
  });
  const linkLogin = document.querySelector(".linkLogin");
  linkLogin.addEventListener("click", (ev) => {
    //changeLogin("Login");
    initController();
  });

  //una vez el usuario se logee cambiamos al icono "Logout" y cuando clickemos en él nos borra el user y nos redirige a la pagina del login again
  const linkLogout = document.querySelector(".linkLogout");
  linkLogout.addEventListener("click", (ev) => {
    localStorage.removeItem("user");
    changeLogin("Logout");
    initController("Login");
  });

  //creamos un modo oscuro mediante un toggle de la clase del css
  const temaOscuro = document.querySelector(".claroOscuro");
  temaOscuro.addEventListener("click", (ev) => {
    document.querySelector("main").classList.toggle("darkMode");
  });
};

//funcion para cambiar el login por el logout si el usuario está registrado
export const changeLogin = (authentication) => {
  const login = document.querySelector(".linkLogin");
  const logout = document.querySelector(".linkLogout");

  switch (authentication) {
    case "Login":
      logout.style.display = "flex";
      login.style.display = "none";
      break;

    case "Logout":
      login.style.display = "flex";
      logout.style.display = "none";
      break;
  }
};

export const printHeader = () => {
  document.querySelector("header").innerHTML = template();
  headerListeners();
  changeLogin();
};
