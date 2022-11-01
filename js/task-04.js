const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");
let counter = 0;

decrementRef.addEventListener("click", () => {
  valueRef.textContent = --counter;
});

incrementRef.addEventListener("click", () => {
  valueRef.textContent = ++counter;
});
