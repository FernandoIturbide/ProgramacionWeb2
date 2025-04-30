//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 3009;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el puerto 3009');
})

app.listen(port);