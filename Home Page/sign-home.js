// Replace with your form IDs
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // ✅ Signup success!
      console.log("User signed up:", userCredential.user);

      // 👉 Redirect to homepage
      window.location.href = "Home Page.html";
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
      alert("Signup failed: " + error.message);
    });
});
