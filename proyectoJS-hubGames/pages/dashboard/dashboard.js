import { printDash } from "../../components/Dashboard/printDashboard";
import "./dashboard.css";

const template = () => {
  return `
    <div class="textoDash">
      
    </div>
    <div class="divDash"></div>
  `;
};

export const printDashboard = async () => {
  document.querySelector("main").innerHTML = template();
  printDash(); // -----------------------------------------------------> PINTADO DINÁMICO DEL DASHBOARD
};
