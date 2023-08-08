const salesRow = document.querySelector(".sales-row");
const newRow = document.querySelector(".new-row");
const popularRow = document.querySelector(".popular-row");

const specialOffer = document.querySelector(".special-row");

function getProductCard(product) {
  const salesCard = document.createElement("div");
  salesCard.className = "card";

  const salesCardImg = document.createElement("img");
  salesCardImg.src = product.images[0];
  salesCardImg.alt = product.name;

  const salesCardPrice = document.createElement("div");
  salesCardPrice.className = "price";

  const salesCardPriceP = document.createElement("p");
  salesCardPriceP.innerHTML = product.price;

  const salesCardPriceH4 = document.createElement("h4");
  salesCardPriceH4.innerHTML = product.discount;

  salesCardPrice.append(salesCardPriceP, salesCardPriceH4);

  const salesCardTitle = document.createElement("h3");
  salesCardTitle.innerHTML = product.description;

  const salesCardBtn = document.createElement("button");
  salesCardBtn.innerHTML = "В корзину";

  salesCard.append(salesCardImg, salesCardPrice, salesCardTitle, salesCardBtn);

  salesRow.append(salesCard);

  return salesCard;
}

// sales mapping start

let salesProducts = products.filter((pr) => pr.discount).slice(-4);
salesProducts.map((product) => {
  let card = getProductCard(product);
  salesRow.append(card);
});

// sales mapping finish

// new mapping start

let newProducts = products.slice(-4);
newProducts.map((product) => {
  let card = getProductCard(product);
  newRow.append(card);
});

// new mapping finish

// recently mapping start

let recentlyProducts = products
  .toSorted((a, b) => a.rating - b.rating)
  .slice(-4);
recentlyProducts.map((product) => {
  let card = getProductCard(product);
  popularRow.append(card);
});

// recently mapping finish

// function getSpecialCard(product) {
//   const specialCard = document.querySelector("div");
//   // specialCard.className = "special-card";

//   specialCard.append(specialTxt, specialImg);

//   const specialTxt = document.createElement("div");
//   specialTxt.className = "txt";

//   const specialTxtH3 = document.createElement("h3");
//   specialTxtH3.innerHTML = "Оформите карту «Северяночка»";

//   const specialTxtP = document.createElement("p");
//   specialTxtP.innerHTML =
//     "И получайте бонусы при покупке в магазинах и на сайте";

//   specialTxt.append(specialTxtH3, specialTxtP);

//   const specialImg = document.createElement("img");
//   specialImg.src = product.images[10];
//   specialImg.alt = product.name;
// }

// let speciaCard = products.slice(-2);
// speciaCard.map((product) => {
//   let card = getSpecialCard(product);
//   specialOffer.append(card);
// });
