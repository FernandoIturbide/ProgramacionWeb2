//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hola mundo');
})

app.listen(port);