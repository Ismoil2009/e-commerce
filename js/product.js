const indicators = document.querySelector(".sml-imgs");
const main = document.querySelector(".bgim img");

indicators.addEventListener("click", (e) => {
  main.src = e.target.src;
});