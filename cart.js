var cartItem = document.getElementsByClassName("cart-item");
cartItemArray = Array.from(cartItem);

cartItemArray.forEach((item) => {
  console.log(item);
  var price = Number(
    item.querySelector(".item-price p").textContent.replace("$", "")
  );
  console.log(price);
  var quantity = item.querySelector(".item-quantity input").value;
  console.log(quantity);
  var total = price * quantity;
  console.log(total);
});
