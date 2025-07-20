function nextPage(currentPage) {
  // Hide current page
  document.getElementById("page" + currentPage).classList.remove("active");
  // Show next page
  document.getElementById("page" + (currentPage + 1)).classList.add("active");
}

function finishOnboarding() {
  // Redirect to signup/home/login or wherever
  window.location.href = "signup.html"; // change this to your actual page
}
    