const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const texteEl = document.querySelector("#text");
console.log(texteEl);

inputEl.addEventListener("input", changeTextSize);

function changeTextSize(evt) {
  texteEl.style.fontSize = `${evt.currentTarget.value}px`;
}
