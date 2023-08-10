// selectors start

const salesRow = document.querySelector(".sales-row");
const newRow = document.querySelector(".new-row");
const popularRow = document.querySelector(".popular-row");

const specialRow = document.querySelector(".special-row");

const articleRow = document.querySelector(".article-row");

// selectors finish

function getProductCard(product) {
  let check = cart.find((pr) => pr.id === product.id);

  const salesCard = document.createElement("div");
  salesCard.className = "card";

  const specialImg = document.createElement("img");
  specialImg.src = product.images[0];
  specialImg.alt = product.name;

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
  salesCardBtn.className = check ? "active-cart" : "";
  salesCardBtn.innerHTML = "В корзину";

  salesCardBtn.addEventListener("click", () => addToCart(product.id));

  salesCard.append(specialImg, salesCardPrice, salesCardTitle, salesCardBtn);

  salesRow.append(salesCard);

  return salesCard;
}

function getSpecialCard(product) {
  const specialCard = document.createElement("div");
  specialCard.className = "special-card";

  const specialTxt = document.createElement("div");
  specialTxt.className = "txt";

  const specialTxtH3 = document.createElement("h3");
  specialTxtH3.innerHTML = product.name;

  const specialTxtP = document.createElement("p");
  specialTxtP.innerHTML = product.description;

  specialTxt.append(specialTxtH3, specialTxtP);

  const specialImg = document.createElement("img");
  specialImg.src = product.images[0];
  specialImg.alt = product.name;

  specialCard.append(specialTxt, specialImg);

  return specialCard;
}

function getArticleCard(product) {
  const articleCard = document.createElement("div");
  articleCard.className = "article-card";

  const articleImg = document.createElement("img");
  articleImg.src = product.images[2];
  articleImg.alt = product.name;

  const articleH6 = document.createElement("h6");
  articleH6.innerHTML = product.rating;

  const articleH2 = document.createElement("h2");
  articleH2.innerHTML = product.name;

  const articleP = document.createElement("p");
  articleP.innerHTML = product.description;

  const articleBtn = document.createElement("button");
  articleBtn.innerHTML = "Подробнее";

  articleCard.append(articleImg, articleH6, articleH2, articleP, articleBtn);

  return articleCard;
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

// special mapping start

let specialProducts = products.slice(-2);
specialProducts.map((product) => {
  let card = getSpecialCard(product);
  specialRow.append(card);
});

// special mapping finish

// articles mapping start

let articleProducts = products.slice(-3);
articleProducts.map((product) => {
  let card = getArticleCard(product);
  articleRow.append(card);
});

// articles mapping finish
