const express = require('express');
const router = express.Router();
const path = require('path');

//defincion de las rutas y menejadores

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});

router.get("/registro.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registro.html"));
});


module.exports=router;

