const categoryMenuToggleBtn = document.querySelector("button img");
const categoriesMenuDropdown = document.querySelector(".categories-menu");

const loginBtn = document.querySelector(".login");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-close");
const vxodBtn = document.querySelector(".vxod");

const cartTotal = document.querySelector(".cart");

// const categoryDropMap = document.querySelector(".wrapper");

categoryMenuToggleBtn.addEventListener("click", () => {
  categoriesMenuDropdown.classList.toggle("hidden");
});

// function getCategoriesM(product) {
//   const categoriesMCol = document.createElement("div");
//   categoriesMCol.className = "mns";

//   const categoriesCol1 = document.createElement("div");
//   categoriesCol1.className = "as";

//   const categoriesCol1_1 = document.createElement("a");
//   categoriesCol1_1.innerHTML = product.name;

//   categoriesCol1.append(categoriesCol1_1);

//   const categoriesCol2 = document.createElement("div");
//   categoriesCol2.className = "as";

//   const categoriesCol1_2 = document.createElement("a");
//   categoriesCol1_2.innerHTML = product.name;

//   categoriesCol1.append(categoriesCol1_2);

//   const categoriesCol3 = document.createElement("div");
//   categoriesCol3.className = "as";

//   const categoriesCol1_3 = document.createElement("a");
//   categoriesCol1_3.innerHTML = product.name;

//   categoriesCol1.append(categoriesCol1_3);

//   const categoriesCol4 = document.createElement("div");
//   categoriesCol4.className = "as";

//   const categoriesCol1_4 = document.createElement("a");
//   categoriesCol1_4.innerHTML = product.name;

//   categoriesCol1.append(categoriesCol1_4);

//   categoryDropMap.append(
//     categoriesCol1,
//     categoriesCol2,
//     categoriesCol3,
//     categoriesCol4
//   );

//   return categoriesMCol;
// }

// let cateCol = products.slice(-4);
// cateCol.map((product) => {
//   let card = getCategoriesM(product);
//   categoryDropMap.append(card);
// });

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartTotal() {
  cartTotal.textContent = cart.length;
}

getCartTotal();

loginBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show");
});

vxodBtn.addEventListener("click", () => {
  let isDelete = confirm("Хотите войти в аккаунт?");
  console.log(isDelete);
});
