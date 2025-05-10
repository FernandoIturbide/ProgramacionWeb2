//importar express
const espress = require('express');
const rutas = require('./routes/index3.js'); //importar el modulo de rutas


//intanciar express
const app = espress();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 8000;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});
