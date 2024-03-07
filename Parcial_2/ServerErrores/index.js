const express = require('express');
const app = express();

app.get('/maestros', (req, res, next) => {
    if(tru){
        res.send('Servidor Express contestando en la ruta /maestros')
    }
    else{
        res.send('Servidor Express contestando en la ruta /maestros')
    }
});

app.get('/alumnos', (req, res, next) => {
    // res.send('Servidor Express contestando en la ruta /alumnos')

    try {
        throw new Error('Error en la ruta /alumnos');
    } catch (error) {
        next(error);
    }
});

app.use( (req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.use( (err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto http://localhost:3000');
});