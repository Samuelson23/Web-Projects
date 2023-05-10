import { printFooter } from "./components/Footer/Footer";
import { changeLogin, printHeader } from "./components/Header/Header";

import "./style.css";
import { initBody } from "./utils/initBody";
import { initController } from "./utils/route";

initBody();

printFooter();

initController("undefined");
printHeader();
changeLogin();
