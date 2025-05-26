//importar express
const espress = require('express');
const rutas = require('./routes/index.js');


//intanciar express
const app = espress();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 1313;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});


