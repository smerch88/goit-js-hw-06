function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

buttonRef.addEventListener(
  "click",
  () => (
    (bodyRef.style.backgroundColor = getRandomHexColor()),
    (spanRef.textContent = bodyRef.style.backgroundColor)
  )
);
