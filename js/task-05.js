const inputName = document.getElementById("name-input");

const outputName = document.getElementById("name-output");

inputName.addEventListener("input", (evt) => {
  if (inputName.value === "") {
    return (outputName.textContent = "Anonymous");
  } else outputName.textContent = evt.currentTarget.value;
});

console.log(inputName);
console.log(outputName);
