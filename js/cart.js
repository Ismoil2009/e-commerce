const cartRow = document.querySelector(".m-left");

function getCartCard({ id, images, name, price, description, quantity }) {
  return `
    <div class="cart-card">
      <div class="left">
        <img src="${images[0]}" alt="" />
        <div class="bottom">
          <h3>${name}</h3>
          <div class="pr">
            <p>${description}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <button onClick="decreaseQuantity(${id})" class="f">-</button>
        <span>${quantity}</span>
        <button onClick="increaseQuantity(${id})"class="s">+</button>
        <h4>${price}$</h4>
      </div>
    </div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
  });
}

getCartProducts();

function decreaseQuantity(id) {
  let product = cart.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Do you want to delete this product ?");
    console.log(isDelete);
    if (isDelete) {
      cart = cart.filter((pr) => pr.id !== id);
    }
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function increaseQuantity(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}
