//Importacion de express
const express= require('express');
const path = require('path');
//instanaciar Express
const app = express();

//Puerto
const port = 5656;

app.get("/",(req,res)=>{

    res.sendFile( path.join(__dirname+"/index.html"));

});


app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

