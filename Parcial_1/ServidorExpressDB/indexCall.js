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

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});