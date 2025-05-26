const express = require('express');
const rutas = require("./routes");
const path = require('path');

const app = express();
app.use("/",rutas);

app.use(express.static(path.join(__dirname,"public")));

const port= 9090;

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});