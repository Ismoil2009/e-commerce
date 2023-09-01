const allRow = document.querySelector(".all-row");
const searchInput = document.querySelector(".search-input");
const totalProducts = document.querySelector(".allProductsTotal");
const pagination = document.querySelector(".pagination");

let search = "";

let activePage = 1;

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

  let pages = Math.ceil(res.length / 10);

  totalProducts.textContent = res.length;

  if (pages > 1) {
    pagination.innerHTML = `
      <li class="page-item disabled">
        <button class="page-link">Previous</button>
      </li>
    `;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${i === activePage ? "active" : ""}">
          <button onclick="getPage(${i})" class="page-link">${i}</button>
        </li>
      `;
    }

    pagination.innerHTML += `
      <li class="page-item">
        <button class="page-link">Next</button>
      </li>
    `;
  } else {
    pagination.innerHTML = "";
  }

  let start = (activePage - 1) * 10;
  let end = activePage * 10;

  let pageResults = res.slice(start, end);

  allRow.innerHTML = "";

  if (res.length !== 0) {
    pageResults.map((product) => {
      allRow.innerHTML += getAllCard(product);
    });
  } else {
    allRow.innerHTML = `<div style="
      padding: 15px 20px;
      width: 100%;
      color: black;
      font-size: 16px;
      border: 2px solid black;
      border-radius: 5px";
    >No products !</div>`;
  }
}
getAllProducts();

searchInput.addEventListener("keyup", function () {
  activePage = 1;
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

function getPage(page) {
  activePage = page;
  getAllProducts();
}
