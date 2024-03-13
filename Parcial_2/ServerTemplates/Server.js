const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.pug', { nombre: "Andy"});
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto http://localhost:3000');
});