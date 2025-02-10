document.addEventListener("DOMContentLoaded", function () {
  const gapYearYes = document.getElementById("gapYearYes");
  const gapYearNo = document.getElementById("gapYearNo");
  const gapYearField = document.getElementById("gapYearField");

  // Hide gap year input initially
  gapYearField.style.display = "none";

  // Show input field when "Yes" is selected, hide when "No" is selected
  gapYearYes.addEventListener("change", function () {
    gapYearField.style.display = "block";
  });

  gapYearNo.addEventListener("change", function () {
    gapYearField.style.display = "none";
  });
});
