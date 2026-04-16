let products = [
  {
    id: 1,
    name: "Elegant Saree",
    price: 1200,
    img: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Designer Kurti",
    price: 900,
    img: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    name: "Luxury Handbag",
    price: 1500,
    img: "https://via.placeholder.com/300"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY PRODUCTS
function displayProducts(list = products) {
  let container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

// UPDATE COUNT
function updateCartCount() {
  let count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

// SEARCH
let search = document.getElementById("search");
if (search) {
  search.addEventListener("input", e => {
    let value = e.target.value.toLowerCase();
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
  });
}

// INIT
displayProducts();
updateCartCount();
