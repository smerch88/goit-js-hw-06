const validationRef = document.querySelector("#validation-input");
const lengthRef = validationRef.dataset.length;

validationRef.addEventListener("blur", () => {
  if (validationRef.value.length >= lengthRef) {
    if (validationRef.classList.contains("invalid")) {
      validationRef.classList.replace("invalid", "valid");
    } else {
      validationRef.classList.add("valid");
    }
  } else {
    if (validationRef.classList.contains("valid")) {
      validationRef.classList.replace("valid", "invalid");
    } else {
      validationRef.classList.add("invalid");
    }
  }
});
