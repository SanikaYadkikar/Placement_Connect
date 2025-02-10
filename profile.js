document.addEventListener("DOMContentLoaded", function () {
  const uploadInput = document.getElementById("upload");
  const profilePic = document.getElementById("profile-pic");
  const form = document.querySelector("form");
  const updateButton = document.querySelector(".update-btn");

  // Image Preview with Animation
  uploadInput.addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      profilePic.src = reader.result;
      profilePic.style.opacity = "0";
      setTimeout(() => {
        profilePic.style.opacity = "1";
        profilePic.style.transform = "scale(1.05)";
        setTimeout(() => {
          profilePic.style.transform = "scale(1)";
        }, 300);
      }, 100);
    };
    if (event.target.files.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  // Form Validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    const inputs = form.querySelectorAll(
      "input[type='text'], input[type='date']"
    );

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        isValid = false;
      } else {
        input.style.borderColor = "";
      }
    });

    if (isValid) {
      updateButton.innerText = "Updating...";
      updateButton.style.backgroundColor = "#028a8a";
      setTimeout(() => {
        updateButton.innerText = "Updated!";
        updateButton.style.backgroundColor = "#037988";
        setTimeout(() => {
          updateButton.innerText = "Update";
        }, 2000);
      }, 1000);
    }
  });

  // Button Hover Effect
  updateButton.addEventListener("mouseover", () => {
    updateButton.style.transform = "scale(1.05)";
  });

  updateButton.addEventListener("mouseout", () => {
    updateButton.style.transform = "scale(1)";
  });
});
