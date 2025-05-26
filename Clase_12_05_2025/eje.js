const express = require('express');
const bodyParser = require('body-parser');
const rutas = require("./routes");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { user, contraseña } = req.body;

  if (contraseña === '12345') {
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: 'Usuario o contraseña incorrectos' });
  }
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
