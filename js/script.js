// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toogle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchbutton = document.querySelector("#search-button");
const shoppingcart = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchbutton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingcart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Cart
const cartButton = document.querySelectorAll(".product-content .cta");
const cartItem1 = document.querySelector(".cart-item-1");
const cartItem2 = document.querySelector(".cart-item-2");
const cartItem3 = document.querySelector(".cart-item-3");
const removeItem1 = document.querySelector(".remove-item-1");
const removeItem2 = document.querySelector(".remove-item-2");
const removeItem3 = document.querySelector(".remove-item-3");

// Add
document.querySelector(".product-content .cta-1").onclick = (e) => {
  cartItem1.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".product-content .cta-2").onclick = (e) => {
  cartItem2.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".product-content .cta-3").onclick = (e) => {
  cartItem3.style.display = "flex";
  e.preventDefault();
};

// Remove
document.querySelector(".remove-item-1").onclick = (e) => {
  cartItem1.style.display = "none";
  e.preventDefault();
};

document.querySelector(".remove-item-2").onclick = (e) => {
  cartItem2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".remove-item-3").onclick = (e) => {
  cartItem3.style.display = "none";
  e.preventDefault();
};

// Modal box 1
const itemDetailModal1 = document.querySelector("#item-detail-modal");
const itemDetailButton1 = document.querySelector(".item-detail-button-1");
const shopcart = document.querySelector(".product-content .shopping-cart");

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

// klik di luar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
};

// Modal box 2
const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailButton2 = document.querySelector(".item-detail-button-2");

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".close-icon-2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
