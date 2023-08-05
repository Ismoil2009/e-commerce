const categoryMenuToggleBtn = document.querySelector("button img");
const categoriesMenuDropdown = document.querySelector(".categories-menu");

categoryMenuToggleBtn.addEventListener("click", () => {
  categoriesMenuDropdown.classList.toggle("hidden");
});
