const shopCategories = [
  {
    name: "Fruits",
    images: "/assets/categories/fruits.webp",
    availability: "12",
  },
  {
    name: "Juice",
    images: "/assets/categories/juice.webp",
    availability: "10",
  },
  {
    name: "Meat & Egg",
    images: "/assets/categories/meat.webp",
    availability: "10",
  },
  {
    name: "Nakery",
    images: "/assets/categories/bakery.webp",
    availability: "10",
  },
  {
    name: "Vegetabels",
    images: "/assets/categories/vegetabels.webp",
    availability: "10",
  },
];

const cardContainer = document.querySelector(".categories-container");

shopCategories.forEach((item) => {
  cardContainer.innerHTML += `
         <div
            class="card border-0 shadow-lg p-3 d-flex justify-content-center align-items-center categories-card w-100"
          >
            <h5 class="card-title">${item.name}</h5>
            <div
              class="d-flex justify-content-center align-items-center border rounded-circle overflow-hidden serviceCard"
            >
              <img
                src="${item.images}"
                class="img-fluid card-img-top rounded-circle"
                alt="${item.name}"
              />
            </div>

            <div class="card-body">
              <a href="#" class="btn btn-warning">${item.availability} Product</a>
            </div>
          </div>
  `;
});
