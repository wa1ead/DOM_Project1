var cartContainer = document.querySelectorAll(".cart-items");
console.log(cartContainer);
var cartItem = document.getElementsByClassName("cart-item");
console.log(cartItem);
Array.from(cartItem).forEach((item) => {
  console.log(item);
  var price = item.querySelector(".item-price p").textContent;
  console.log(price);
});
