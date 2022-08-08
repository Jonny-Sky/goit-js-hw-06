const categoryList = document.querySelectorAll("li.item").length;
console.log("Number of categories:", categoryList);

const itemEl = document.querySelectorAll("li.item");
itemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
