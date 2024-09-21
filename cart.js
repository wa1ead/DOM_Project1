var cartItem = document.getElementsByClassName("cart-item");
cartItemArray = Array.from(cartItem);

cartItemArray.forEach((item) => {
  console.log(item);
  var price = item.querySelector(".item-price p").textContent;
  console.log(price);
  var quantity = item.querySelector(".item-quantity input").value;
  console.log(quantity);
});
