const express = require('express');
const path = require('path');

const routes = require('./routes/routes'); //importamos las rutas
const app = express();
const port = 5656;

app.use(express.static(path.join(__dirname, 'public'))); //para servir archivos estaticos en css, js, img, etc
app.use("/", routes); //para usar las rutas que hemos creado en routes.js
app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})