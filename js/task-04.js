const incrementNumberBtn = document.querySelector('[data-action="increment"]');
const decrementNumberBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

incrementNumberBtn.addEventListener("click", increment);
decrementNumberBtn.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
