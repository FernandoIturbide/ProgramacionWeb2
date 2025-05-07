const express = require('express');
const path = require('path');
const routes = require("./routes/routes");//importamos las rutas

const app = express();
const port = 5656;
//sirve para archivos estaticos en css, img, etc
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});

