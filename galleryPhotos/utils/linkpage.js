export const linkpage = (id, pag) => {
  document.querySelector(id).addEventListener("click", (ev) => {
    pag();
  });
};
