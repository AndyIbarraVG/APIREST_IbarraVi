const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pokemon'
});

app.get('/pokemons', (req, res) => {
    if (typeof req.query.id_pokemon === 'undefined') {
        connection.query('SELECT * FROM pokemons', (err, rows) => {
            if (err) throw err;
            res.json(rows);
        });
    } else {
        connection.query(`SELECT * FROM pokemons WHERE id_pokemon = ${req.query.id_pokemon}`, (err, rows) => {
            if (err) throw err;
            res.json(rows);
        });
    }
});

app.post('/pokemons', (req, res) => {
    const { nombre, tipo, naturaleza, habilidad } = req.body;
    connection.query(`INSERT INTO pokemons (Nombre, Tipo, Naturaleza, Habilidad) VALUES ('${nombre}', '${tipo}', '${naturaleza}', '${habilidad}')`, (err, rows) => {
        if (err) throw err;
        res.json({ status: 'Pokemon guardado' });
    });
});

app.put('/pokemons', (req, res) => {
    const { id_pokemon, nombre, tipo, naturaleza, habilidad } = req.body;
    connection.query(`UPDATE pokemons SET Nombre = '${nombre}', Tipo = '${tipo}', Naturaleza = '${naturaleza}', Habilidad = '${habilidad}' WHERE id_pokemon = ${id_pokemon}`, (err, rows) => {
        if (err) throw err;
        res.json({ status: 'Pokemon actualizado' });
    });
});

app.delete('/pokemons', (req, res) => {
    const { id_pokemon } = req.body;
    connection.query(`DELETE FROM pokemons WHERE id_pokemon = ${id_pokemon}`, (err, rows) => {
        if (err) throw err;
        res.json({ status: 'Pokemon eliminado' });
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});