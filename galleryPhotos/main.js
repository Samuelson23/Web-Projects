import "./style.css";
import { printTemplate as Footer } from "./components/Footer/Footer";
import { printTemplate as Header } from "./components/Header/Header";
//import { printTemplate as Main } from "./components/Main/Main";
import { linkpage } from "./utils/linkpage";
import { printTemplate as About } from "./pages/About/About";
import { printTemplate as Gallery } from "./pages/Gallery/Gallery";
import { printTemplate as Home } from "./pages/Home/Home";
import { printTemplate as First } from "./pages/First/First";

Header();
Home();
//First();
Footer();

//linkpage("#firstlink", First);
linkpage("#homelink", Home);
linkpage("#gallerylink", Gallery);
linkpage("#aboutlink", About);
/* document.querySelector(".homelink").addEventListener("click", (ev) => {
  Header();
});
document.querySelector(".gallerylink").addEventListener("click", (ev) => {
  Main();
});
document.querySelector(".aboutlink").addEventListener("click", (ev) => {
  Footer();
});
 */
