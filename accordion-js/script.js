const mEl = document.querySelector(".m");
const itemEl = document.querySelector(".item");

mEl.addEventListener("click", function () {
  itemEl.classList.toggle("open");
});
