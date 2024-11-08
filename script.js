
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // Use addEventListener for click event
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  // Use addEventListener for scroll event
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

// Function to open a modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Simulate login functionality
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (email === "test@example.com" && password === "password123") {
    alert("Login successful!");
    closeModal('loginModal');
  } else {
    alert("Invalid login credentials.");
  }
}

// Simulate signup functionality
function handleSignup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  
  // Normally, here you'd send these details to a server for validation
  alert("Sign up successful! You can now log in.");
  closeModal('signupModal');
}
