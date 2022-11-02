const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = { email: email.value, password: password.value };
  console.log(data);
  console.log(typeof data);
  event.currentTarget.reset();
}
