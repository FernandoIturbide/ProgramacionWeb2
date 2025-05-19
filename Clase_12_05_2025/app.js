const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5656;

app.use(bodyParser.urlencoded({ extended: false }));

//configuracion de plantillas
app.set('view engine', 'ejs');

//Conexion a la base de datos
const db = mysql.createConnection({
  host: 'localhost',// server
  user: 'root', // usuario
  password: '12345678', // contraseña
  database: 'isdbmyj',
  port: 3306 // puerto
});

// Validacion de la conexion a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

//Levantar el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Mostrar en lista
app.get('/', (req, res) => {
  const consulta = 'SELECT * FROM usuarios';

  //usamos la DB para conectarnos a la base de datos
  db.query(consulta, (err, results) => {
    if (err) {
      console.error('No se encontró al usuario', err);
      res.send('Error. Comunicate con soporte')
      return;
    }else{
      res.render('index', { users: results });
    }
  });
});

//Agregar un nuevo usuario
app.post('/add', (req, res) => {
  const { name, email} = req.body;
  const insertarRegistrosUsuarios = 'INSERT INTO usuarios (name, email) VALUES (?, ?)';
  db.query(insertarRegistrosUsuarios, [name, email], (err, results) => {
    if (err) {
      console.error('Error al agregar el usuario:', err);
      res.send('No se pudo agregar el usuario');
      return;
    }else{
    res.redirect('/');
    }
  });
});

//Editar un usuario
app.get('/edit/:id', (req, res) => {
  const {id} = req.params;
  const consulta = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(consulta, [id], (err, results) => {
    if (err) {
      console.error('Error al editar el usuario:', err);
      res.send('No se pudo editar el usuario');
      return;
    }else{
      res.render('edit', { user: results[0] });
    }
  });
});

//Actualizar un usuario
app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const consulta = 'UPDATE usuarios SET name = ?, email = ? WHERE id = ?';
  db.query(consulta, [name, email, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el usuario:', err);
      res.send('No se pudo actualizar el usuario');
      return;
    }else{
      res.redirect('/');
    }
  });
});

//Eliminar un usuario
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const consulta = 'DELETE FROM usuarios WHERE id = ?';
  db.query(consulta, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      res.send('No se pudo eliminar el usuario');
      return;
    }else{
      res.redirect('/');
    }
  });
});