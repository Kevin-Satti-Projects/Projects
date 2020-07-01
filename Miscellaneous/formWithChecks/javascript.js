let password = document.getElementById("password");
let confirmPassword = document.getElementById("passwordConfirm");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

document.getElementById("form").addEventListener("click", function () {
  console.log("running");
  if (
    document.getElementById("email").checkValidity() === true &&
    document.getElementById("country").checkValidity() === true &&
    document.getElementById("zipCode").checkValidity() === true &&
    document.getElementById("password").checkValidity() === true &&
    document.getElementById("passwordConfirm").checkValidity() === true
  ) {
    alert("High Five! Successful Submit!");
  }
});
