const fetchProducts = async () => {
  try {
    const response = await fetch("/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Function to render products
const renderProducts = async () => {
  const data = await fetchProducts();
  const productContainer = document.querySelector(".product-container");

  if (data && productContainer) {
    data.forEach((product) => {
      const productCardDiv = document.createElement("div");
      productCardDiv.classList.add("product-card");
      productCardDiv.innerHTML = `
             <div
              class="card shadow-sm"
              style=" background-color: #faf6f1; border-radius: 8px"
            >
              <img
                src="${product.image}"
                class="product-card-img"
                alt="${product.name}"
                style="
                  object-fit: cover;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
                "
              />
              <hr class="m-0" />
              <div class="card-body" style="color: #333333">
                <h5 class="card-title productcardTitle">${product.name}</h5>
                <p class="card-text text-muted mb-3 productcardPrice">₹${product.price} INR</p>
              </div>
            </div>
        `;
      productContainer.appendChild(productCardDiv);
    });
  } else {
    document.body.innerHTML = "<p>Service Unavailable</p>";
  }
};

// Call renderProducts to fetch and display the products
renderProducts();
