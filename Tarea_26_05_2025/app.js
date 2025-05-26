const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 9090;

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'isdbmyj',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

// --- RUTAS ---

// Página de inicio HTML plana
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Página de registro
app.get('/registro.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/registro.html'));
});

// Página login con EJS
app.get('/login', (req, res) => {
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

// DASHBOARD - Lista usuarios (vista con base de datos)
app.get('/dashboard', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err || results.length === 0) {
      return res.send('No se encontraron usuarios');
    }
    res.render('dashboard', { users: results });
  });
});



// Agregar usuario
app.post('/add', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO usuarios (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err) => {
    if (err) return res.send('Error al agregar usuario');
    res.redirect('/dashboard');
  });
});

// Editar usuario
app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.send('Error al cargar el usuario');
    res.render('edit', { user: results[0] });
  });
});

// Actualizar usuario
app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE usuarios SET name = ?, email = ? WHERE id = ?';
  db.query(query, [name, email, id], (err) => {
    if (err) return res.send('Error al actualizar');
    res.redirect('/dashboard');
  });
});

// Eliminar usuario
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.send('Error al eliminar');
    res.redirect('/dashboard');
  });
});

// --- Servidor ---
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://127.0.0.1:${PORT}`);
});
