const express = require('express'); 
const router = express.Router(); //segmenta las rutas
const path = require('path'); //modulo de node para manejar rutas

//Definicion de rutas y manejadores

router.get('/', (req, res) => {
    // res.send('Hola mundo desde express'); //respuesta al cliente
    res.sendFile(path.join(__dirname+"/../index3.html"));
});

//exportar el modulo para usarlo en app.js
module.exports = router; 