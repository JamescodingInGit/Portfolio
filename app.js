const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// EJS dynamic pages
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    heading: 'Hi, I\'m Wbb',
    message: 'A developer passionate about building real-world web solutions.'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    heading: 'About Us',
    message: 'Learn more about our company.'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    heading: 'Contact Us',
    message: 'You can email us at hello@example.com'
  });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page not found</h1><a href="/">Go Home</a>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
