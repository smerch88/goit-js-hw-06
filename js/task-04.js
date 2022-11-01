const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

decrementRef.addEventListener("click", () => {
  valueRef.innerHTML -= 1;
});
incrementRef.addEventListener("click", () => {
  valueRef.innerHTML += 1;
});
