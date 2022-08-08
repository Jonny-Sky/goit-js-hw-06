const inputName = document.getElementById("validation-input");
const styleEl = document.querySelector("style");
const dataEl = document.querySelector('[data-length ="6"]');

inputName.addEventListener("blur", inputBlur);

function inputBlur(evt) {
  if (evt.currentTarget.value.length === 0) {
    return (
      inputName.classList.remove("invalid", "valid") &
      inputName.classList.add("input")
    );
  }
  if (evt.currentTarget.value.length === Number(dataEl.dataset.length)) {
    return (
      inputName.classList.remove("invalid", "input") &
      inputName.classList.add("valid")
    );
  } else evt.currentTarget.value.length != Number(dataEl.dataset.length);
  {
    return (
      inputName.classList.remove("valid") & inputName.classList.add("invalid")
    );
  }
}
