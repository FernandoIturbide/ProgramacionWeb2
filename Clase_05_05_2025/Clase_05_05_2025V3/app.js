//importar express
const espress = require('express');
const rutas = require('./routes/');


//intanciar express
const app = espress();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 6565;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});


