const categoryImgs = document.querySelector(".line");

function getCategoryies(prod) {
  return `
    <a href="" onclick="${addToLocal(`${prod.name}`)}">
      <div class="card">
        <img src="${prod.image}" alt="" />
      </div>
    </a>`;
}

function getCategories() {
  categoryImgs.innerHTML = "";
  categories.map((pr) => {
    categoryImgs.innerHTML += getCategoryies(pr);
  });
}

function addToLocal(a) {
  localStorage.setItem("selectedCat", a);
}

getCategories();
