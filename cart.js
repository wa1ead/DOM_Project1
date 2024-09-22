if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var cartItem = document.getElementsByClassName("cart-item");
  var cartItemArray = Array.from(cartItem);
  console.log(cartItemArray);
  updateTotal()
}

function updateTotal() {
  var total = 0;

  cartItemArray.forEach((item) => {
    console.log(item);
    var priceElement = item.querySelector(".item-price p").textContent;
    var price = Number(priceElement.replace("$", ""));
    console.log(price);
    var quantityElement = item.querySelector(".item-quantity input");
    var quantity = quantityElement.value;
    console.log(quantity);
    total += price * quantity;
    console.log(total);
  });
  document.getElementsByClassName("total-price").textContent = total;
  console.log(total);
}

cartItemArray.forEach((item) => {});
