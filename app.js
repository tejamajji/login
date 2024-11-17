const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.redirect('/login'); // Redirect root to the login page
});

app.get('/login', (req, res) => {
  res.render('login'); // Render the login.ejs file
});

app.get('/signup', (req, res) => {
  res.render('signup'); // Render the signup.ejs file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
