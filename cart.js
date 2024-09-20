var decrementButton = document.getElementsByClassName("dec");
console.log(decrementButton);
for (let i = 0; i < decrementButton.length; i++) {
  var button = decrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonDec = event.target;
    buttonDec.parentElement.parentElement.parentElement.remove();
  });
}
