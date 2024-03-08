const express = require('express');
const pokemonRouter = require('./routes/pokemonRouter');
const app = express();

app.use('/pokemons', pokemonRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});