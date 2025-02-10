function validateForm() {
  let password = document.getElementById("currentPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset errors
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  // Password complexity regex (8 chars, 1 uppercase, 1 lowercase, 1 number)
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!password) {
    passwordError.innerHTML = "Password cannot be empty.";
    return false;
  } else if (!passwordPattern.test(password)) {
    passwordError.innerHTML =
      "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.";
    return false;
  }

  if (!confirmPassword) {
    confirmPasswordError.innerHTML = "Please confirm your password.";
    return false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Passwords do not match.";
    return false;
  }

  alert("Password successfully changed!");
  return true;
}
