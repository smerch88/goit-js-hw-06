const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const content = ingredients.map((element) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = element;
  return (element = listItem);
});
ingredientsList.append(...content);
