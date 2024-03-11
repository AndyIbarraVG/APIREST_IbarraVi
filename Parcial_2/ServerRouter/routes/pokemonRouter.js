const express = require('express');
const promisePool = require('../db/connection');
const pokemonRouter = express.Router();

pokemonRouter.get('/', (req, res) => {
    res.send('Lista de pokemons');
    return promisePool.query('SELECT * FROM pokemons');
});

pokemonRouter.get('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id);
    return promisePool.query(`SELECT * FROM pokemons WHERE id_pokemon = ${id_pokemon}`);
});

pokemonRouter.post('/', (req, res) => {
    res.send('Pokemon creado');
    return promisePool.query(`INSERT INTO pokemons (nombre, tipo, habilidad, naturaleza) VALUES ('${nombre}', '${tipo}', '${habilidad}', '${naturaleza}')`);
});

pokemonRouter.put('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id + ' actualizado');
    return promisePool.query(`UPDATE pokemons SET nombre = '${nombre}', tipo = '${tipo}', habilidad = '${habilidad}', naturaleza = '${naturaleza}' WHERE id_pokemon = ${id_pokemon}`);
});

pokemonRouter.delete('/:id', (req, res) => {
    res.send('Pokemon con id: ' + req.params.id + ' eliminado');
    return promisePool.query(`DELETE FROM pokemons WHERE id_pokemon = ${id_pokemon}`);
});

module.exports = pokemonRouter;