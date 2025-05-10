//importar express
const espress = require('express');
//importar path
const path = require('path');

//intanciar express
const app = espress();

//Puerto
const port = 2323;
app.get('/', (req, res) => {
    // res.send('Hola Mundo desde Express');
    // res.sendFile('C:/Users/ffera/Documents/Programación web 2/Clase_05_05_2025/index.html');
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});

