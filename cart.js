if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}


function ready() {
  attachQuantityListeners();
  updateTotal()
}


function updateTotal() {
  var cartItem = document.getElementsByClassName("cart-item");
  var cartItemArray = Array.from(cartItem);
  console.log(cartItemArray);
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
  document.getElementsByClassName("total-price")[0].textContent = `$${total}`;
  console.log(total);
}
// Attach event listeners to update the total when quantity changes
const attachQuantityListeners = () => {
  var cartItem = document.getElementsByClassName("cart-item");
  var cartItemArray = Array.from(cartItem);

  cartItemArray.forEach((item) => {
    // Get the quantity input
    var quantityInput = item.querySelector(".item-quantity input");

    // Add event listener to recalculate the total on quantity change
    quantityInput.addEventListener('input', updateTotal);
  });
};