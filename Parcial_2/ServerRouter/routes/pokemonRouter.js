const express = require('express');
const pokemonRouter = express.Router();

pokemonRouter.get('/', (req, res) => {
    res.send('Lista de pokemons');
}); 

pokemonRouter.get('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id);
});

pokemonRouter.post('/', (req, res) => {
    res.send('Pokemon creado');
});

pokemonRouter.put('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id + ' actualizado');
});

pokemonRouter.delete('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id + ' eliminado');
});

module.exports = pokemonRouter;