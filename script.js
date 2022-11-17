const galleryImg = document.querySelectorAll(".gallery__item");
const cartBtn = document.querySelectorAll(".product__button");
const cart = document.querySelector(".cart");

let cartCount = 1;
let increaseCart = () => (cart.innerHTML = "Cart" + `(${cartCount++})`);

galleryImg.forEach((elem) =>
  elem.addEventListener("click", () =>
    elem.classList.toggle("gallery__item_big")
  )
);
cartBtn.forEach((elem) => elem.addEventListener("click", increaseCart));

