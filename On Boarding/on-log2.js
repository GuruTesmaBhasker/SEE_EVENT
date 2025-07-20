function goToPage(pageId) {
  // Hide all onboarding pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show the target page
  document.getElementById(pageId).classList.add('active');
}

function goToLogin() {
  // Redirect to login.html (or whatever your login page is)
  window.location.href = 'Login page/Login Page.html';
}
