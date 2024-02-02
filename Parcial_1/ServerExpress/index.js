const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Contestando una petición GET desde Express');
});

app.post('/', (req, res) => {
res.send('Contestando una petición POST desde Express');
});

app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});