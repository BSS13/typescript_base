const clickButton = document.querySelector("button");

function clickHandler() {
  console.log("Button clicked");
}
if (clickButton) {
  clickButton.addEventListener("click", clickHandler);
}
