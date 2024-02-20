const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Pokemon'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
}
);

app.get('/pokemons', (req, res) => {
    connection.query('SELECT * FROM pokemon', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});