const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsEl = (ingredient) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = ingredient;
  ingredientsRef.classList.add("item");

  return ingredientsRef;
};

const element = ingredients.map(ingredientsEl);
list.append(...element);
