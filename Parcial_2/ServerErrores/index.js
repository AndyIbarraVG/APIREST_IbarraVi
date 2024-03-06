const express = require('express');
const app = express();

app.get('/maestros', (req, res, next) => {
    res.send('Servidor Express contestando en la ruta /maestros')
});

app.get('/alumnos', (req, res, next) => {
    res.send('Servidor Express contestando en la ruta /alumnos')
});

app.use( (req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto http://localhost:3000');
});