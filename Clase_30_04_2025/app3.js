//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 5757;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el puerto 5757');
})

app.listen(port);