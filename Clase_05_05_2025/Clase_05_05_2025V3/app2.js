//importar express
const espress = require('express');
const rutas = require('./routes/index2.js'); //importar el modulo de rutas


//intanciar express
const app = espress();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 7000;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});
