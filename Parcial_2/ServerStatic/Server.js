const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const app = express();

app.use(basicAuth({
    users: { 'AndyIbarra': 'Admin123*' },
    challenge: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use( (req, res, next) => {
    res.status(401).send('Solicitud no autorizada');
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto http://localhost:3000');
});