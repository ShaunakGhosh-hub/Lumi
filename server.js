const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());  // Parses JSON request bodies
app.use(cors());  // Allows cross-origin requests from the frontend

// Mock database (for demonstration)
let users = [];

// Route for signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: "User  already exists" });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.json({ message: "User  signed up successfully" });
  console.log("Login attempt for:", email);
});

// Route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt for:", email);

  // Find user
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  res.json({ message: "User  logged in successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
