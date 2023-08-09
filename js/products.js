const allRow = document.querySelector(".all-row");
const searchInput = document.querySelector(".search-input");
const totalProducts = document.querySelector(".allProductsTotal");

let search = "";

function getAllCard(pr) {
  return `
    <div class="all-card">
      <img
        src="${pr.images[0]}"
        alt="${pr.name}"
      />
      <h3>${pr.name}</h3>
      <p> ${pr.description} </p>
      <button>В корзину</button>
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
      padding: 15px 70px;
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
