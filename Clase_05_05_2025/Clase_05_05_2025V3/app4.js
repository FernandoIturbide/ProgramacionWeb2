//importar express
const espress = require('express');
const rutas = require('./routes/index4.js'); //importar el modulo de rutas


//intanciar express
const app = espress();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 1212;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});
