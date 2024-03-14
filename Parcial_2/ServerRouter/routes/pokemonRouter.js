const express = require('express');
const getConnection = require('../db/connection');
const pokemonRouter = express.Router();

pokemonRouter.use(express.json());

// Ruta GET para listar todos los pokemons
pokemonRouter.get('/', async (req, res) => {
    const connection = await getConnection();
    let sql = 'SELECT * FROM pokemons';

    if (typeof req.query.id_pokemon !== 'undefined') {
        sql = `SELECT * FROM pokemons WHERE id_pokemon = ${req.query.id_pokemon}`;
    }

    try {
        const [rows] = await connection.query(sql);
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(404).send('Pokemon no encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrió un error al buscar el pokemon');
    } finally {
        await connection.end();
    }
});



// Ruta POST para crear un nuevo pokemon
pokemonRouter.post('/', async (req, res) => {
    const { nombre, tipo, habilidad, naturaleza } = req.body;
    const connection = await getConnection();
    try {
        const [result] = await connection.query(`INSERT INTO pokemons (id_pokemon,Nombre, Tipo, Naturaleza, Habilidad) VALUES ('NULL','${nombre}', '${tipo}', '${naturaleza}','${habilidad}')`);
        res.status(201).send(`Pokemon creado con ID: ${result.insertId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrió un error al crear el pokemon');
    } finally {
        await connection.end();
    }
});

// Ruta PUT para actualizar un pokemon por ID
pokemonRouter.put('/', async (req, res) => {
    const {id_pokemon,nombre, tipo, habilidad, naturaleza } = req.body;
    const connection = await getConnection();
    try {
        await connection.query(`UPDATE pokemons SET Nombre = '${nombre}', Tipo = '${tipo}', Naturaleza = '${naturaleza}', Habilidad = '${habilidad}' WHERE id_pokemon = ${id_pokemon}`);
        res.send(`Pokemon con ID: ${id_pokemon} actualizado`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrió un error al actualizar el pokemon');
    } finally {
        await connection.end();
    }
});

// Ruta DELETE para eliminar un pokemon por ID
pokemonRouter.delete('/', async (req, res) => {
    const { id_pokemon } = req.body;
    const connection = await getConnection();
    try {
        await connection.query(`DELETE FROM pokemons WHERE id_pokemon = ${id_pokemon}`);
        res.send(`Pokemon eliminado`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrió un error al eliminar el pokemon');
    } finally {
        await connection.end();
    }
});

module.exports = pokemonRouter;
