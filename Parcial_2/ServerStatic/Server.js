const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const app = express();

app.use(basicAuth({
    users: { 'AndyIbarra': 'Admin123*' },
    challenge: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    if(req.auth.user === 'AndyIbarra'){
        res.send('Login exitoso');
    }
    else{
        res.send('Login fallido');
    }
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto http://localhost:3000');
});