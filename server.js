const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());  // Parses JSON request bodies
app.use(cors());  // Allows cross-origin requests from the frontend

// Mock database (for demonstration)
let users = [];

// Route for signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Save user data (in a real app, you would hash the password and store it securely)
  users.push({ email, password });
  res.json({ message: "User signed up successfully" });
});

// Route for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user and validate password
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  res.json({ message: "User logged in successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function handleSignup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error(error));
  }
  
  function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error(error));
  }
  