const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3005;
app.listen(port, () => {
  console.log(`El servidor estápor el puerto http://localhost:${port}`);
});