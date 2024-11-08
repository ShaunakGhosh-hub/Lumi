// JavaScript code

// Menu toggle functionality
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // Toggle menu visibility
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

// Function to open a modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex'; // Show modal
}

// Function to close a modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none'; // Hide modal
}

// Handle login functionality
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Send login request to the backend
  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === "User logged in successfully") {
      alert("Login successful!");
      closeModal('loginModal');
    } else {
      alert("Invalid login credentials.");
    }
  })
  .catch(error => {
    alert("Error: " + error);
  });
}

// Handle signup functionality
function handleSignup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Send signup request to the backend
  fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === "User signed up successfully") {
      alert("Sign up successful! You can now log in.");
      closeModal('signupModal');
    } else {
      alert("Error during sign up.");
    }
  })
  .catch(error => {
    alert("Error: " + error);
  });
}
