const express = require('express');
const morgan = require('morgan');
const app = express();

// Función middleware propia
app.use((req, res, next) => {
    console.log('Solicitud recibida: ' + req.url + ' por el método: ' + req.method);
    next();
});

// Función middleware de terceros
// app.use(morgan('combined'));

app.get('/', (req, res, next) => {
    res.send('Contestando una petición GET desde Express');
});

app.post('/', (req, res, next) => {
    res.send('Contestando una petición POST desde Express');
});

app.listen(3000, () => {
console.log('servidor escuchando en http://localhost:3000/');
});