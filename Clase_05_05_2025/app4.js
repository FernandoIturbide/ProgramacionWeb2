
const espress = require('express');

const path = require('path');


const app = espress();


const port = 3232;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});

