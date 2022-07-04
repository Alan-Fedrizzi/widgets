const icon1El = document.querySelector(".icon-1");
const item1El = document.querySelector(".item-1");
const icon2El = document.querySelector(".icon-2");
const item2El = document.querySelector(".item-2");
const icon3El = document.querySelector(".icon-3");
const item3El = document.querySelector(".item-3");

icon1El.addEventListener("click", function () {
  item1El.classList.toggle("open");
});
icon2El.addEventListener("click", function () {
  item2El.classList.toggle("open");
});
icon3El.addEventListener("click", function () {
  item3El.classList.toggle("open");
});
