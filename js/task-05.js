const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.log(inputRef);

inputRef.addEventListener("input", () => {
  if (!inputRef.value) {
    return (outputRef.textContent = "Anonymous");
  }
  outputRef.textContent = inputRef.value;
});
