const express = require('express');
const pokemonRouter = require('./routes/pokemonRouter');
const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use('/pokemons', pokemonRouter);

app.get('/', (req, res) => {
    res.send('Bienvenido a Pokemon Showdown 2!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});