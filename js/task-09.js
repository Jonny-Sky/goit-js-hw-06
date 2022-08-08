function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btmEl = document.querySelector("button");
const backgroundBody = document.querySelector("body");
const colorValue = document.querySelector(".color");

btmEl.addEventListener("click", changeColor);

function changeColor(evt) {
  evt.preventDefault();
  backgroundBody.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = `${getRandomHexColor()}`;
}
