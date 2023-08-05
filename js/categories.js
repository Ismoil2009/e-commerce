// const productsRow = document.querySelector(".products-row");

// function getProductCard(product) {
//   const productCard = document.createElement("div");
//   productCard.className = "product-card";

//   const productCardBody = document.createElement("div");
//   productCardBody.className = "product-card-body";

//   const productImg = document.createElement("img");
//   productImg.src = product.images[0];
//   productImg.alt = product.name;

//   productCardBody.appendChild(productImg);

//   const productCardFooter = document.createElement("div");
//   productCardFooter.className = "product-card-footer";

//   const productTitle = document.createElement("h3");
//   const productTitleText = document.createTextNode(product.name);

//   productTitle.appendChild(productTitleText);

//   const productPrice = document.createElement("p");
//   productPrice.innerHTML = `<i> ${product.price} </i>`;

//   const productBtn = document.createElement("button");
//   productBtn.innerHTML = "<b> Add to the cart </b>";

//   productCardFooter.prepend(productBtn);
//   productCardFooter.prepend(productPrice);
//   productCardFooter.prepend(productTitle);

//   productCard.append(productCardBody, productCardFooter);

//   return productCard;
// }

// products.map((product) => {
//   let card = getProductCard(product);
//   productsRow.append(card);
// });
