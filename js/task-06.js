const validationRef = document.querySelector("#validation-input");
const lengthRef = validationRef.dataset.length;

validationRef.addEventListener("blur", () => {
  if (validationRef.value.length === parseInt(lengthRef))
    return validationRef.classList.contains("invalid")
      ? validationRef.classList.replace("invalid", "valid")
      : validationRef.classList.add("valid");

  return validationRef.classList.contains("valid")
    ? validationRef.classList.replace("valid", "invalid")
    : validationRef.classList.add("invalid");
});
