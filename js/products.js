const allRow = document.querySelector(".all-row");
const searchInput = document.querySelector(".search-input");
const totalProducts = document.querySelector(".allProductsTotal");

let search = "";

function getAllCard({ id, images, name, description }) {
  let check = cart.find((pr) => pr.id === id);

  return `
    <div class="all-card">
      <img
        src="${images[0]}"
        alt="${name}"
      />
      <h3>${name}</h3>
      <p> ${description} </p>
      <button class="${
        check ? "active-cart" : ""
      }" onClick="addToCart(${id})">В корзину</button>
    </div>
  `;
}

function getAllProducts() {
  let res = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  totalProducts.textContent = res.length;

  allRow.innerHTML = "";

  if (res.length !== 0) {
    res.map((product) => {
      allRow.innerHTML += getAllCard(product);
    });
  } else {
    allRow.innerHTML = `<div style="
      padding: 15px 20px;
      width: 100%;
      color: yellowgreen;
      font-size: 16px;
      border: 2px solid yellowgreen;
      border-radius: 5px";
    >No products !</div>`;
  }
}
getAllProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getAllProducts();
});

function addToCart(id) {
  let product = products.find((pr) => pr.id === id);
  let check = cart.find((pr) => pr.id === id);

  if (check) {
    cart = cart.map((product) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartTotal();
}
