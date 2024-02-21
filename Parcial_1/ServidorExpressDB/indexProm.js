const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.json());


app.get('/pokemons', async (req, res) => {
    console.log(req.query.id_pokemon);
    let sql = 'SELECT * FROM pokemons'; // Define sql with a default value

    if (typeof req.query.id_pokemon !== 'undefined') {
        sql = `SELECT * FROM pokemons WHERE id_pokemon = ${req.query.id_pokemon}`;
    }
    
    try {
        const connection = await mysql.createConnection({
            host: 'localhost', user: 'root', database: 'pokemon'
        });

        var [rows, fields] = await connection.query(sql);
    
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(400).json({ status: 'No se encontraron pokemons' });
        }
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});

app.post('/pokemons', async (req, res) => {
    console.log(req.body);
    const { nombre, tipo, naturaleza,habilidad } = req.body;
    const sql = `INSERT INTO pokemons (id_pokemon,Nombre, Tipo, Naturaleza, Habilidad) VALUES ('NULL','${nombre}', '${tipo}', '${naturaleza}','${habilidad}')`;
    try {
        const connection = await mysql.createConnection({
            host: 'localhost', user: 'root', database: 'Pokemon'
        });
        var [rows, fields] = await connection.execute(sql);
        res.json({ status: 'Pokemon guardado' });
    }
    catch (error) {
        console.log(error);
    }
});

app.put('/pokemons', async (req, res) => {
    console.log(req.body);
    const { id_pokemon, nombre, tipo, naturaleza,habilidad } = req.body;
    const sql = `UPDATE pokemons SET Nombre = '${nombre}', Tipo = '${tipo}', Naturaleza = '${naturaleza}', Habilidad = '${habilidad}' WHERE id_pokemon = ${id_pokemon}`;
    try {
        const connection = await mysql.createConnection({
            host: 'localhost', user: 'root', database: 'Pokemon'
        });
        var [rows, fields] = await connection.execute(sql);
        res.json({ status: 'Pokemon actualizado' });
    }
    catch (error) {
        console.log(error);
    }
});

app.delete('/pokemons', async (req, res) => {
    console.log(req.body);
    const { id_pokemon } = req.body;
    const sql = `DELETE FROM pokemons WHERE id_pokemon = ${id_pokemon}`;
    try {
        const connection = await mysql.createConnection({
            host: 'localhost', user: 'root', database: 'Pokemon'
        });
        var [rows, fields] = await connection.execute(sql);
        res.json({ status: 'Pokemon eliminado' });
    }
    catch (error) {
        console.log(error);
    }
});