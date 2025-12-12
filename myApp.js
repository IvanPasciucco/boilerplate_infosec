const express = require('express');
const app = express();

// 1. Requerir Helmet (Tu solución)
const helmet = require('helmet');

module.exports = app;

// 2. Archivos estáticos
app.use(express.static('public'));
app.disable('strict-transport-security');

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Listener básico (por si ejecutas este archivo directamente, aunque Render usa server.js)
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});