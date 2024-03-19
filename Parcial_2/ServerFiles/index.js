const express = require('express');
const app = express();
const path = require('path');

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/img/Tabla_Naturaleza.png'));
});

app.get('/send', (req, res) => { 
    res.sendFile(path.join(__dirname, '/img/Tabla_Naturaleza.png'));
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});