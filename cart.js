var cartItem = document.getElementsByClassName("cart-item");
cartItemArray = Array.from(cartItem);
var total = 0;

cartItemArray.forEach((item) => {
  console.log(item);
  var price = Number(
    item.querySelector(".item-price p").textContent.replace("$", "")
  );
  console.log(price);
  var quantity = item.querySelector(".item-quantity input").value;
  console.log(quantity);
  total += price * quantity;
  console.log(total);
});
document.getElementsByClassName("total-price").textContent = total;
