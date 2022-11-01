const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.log(inputRef);

inputRef.addEventListener("input", () => {
  outputRef.textContent = inputRef.value;
});
