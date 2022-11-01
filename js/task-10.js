function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberRef = document.querySelector("input");
const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

let amount = 0;

numberRef.addEventListener("blur", () => (amount = numberRef.value));

createRef.addEventListener("click", () => {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + i * 10}px`;
    div.style.width = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(div);
    console.log(boxesRef.insertAdjacentHTML);
  }
});

destroyRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
});
