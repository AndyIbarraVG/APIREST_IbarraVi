const express = require('express');
const {check, validationResult} = require('express-validator');
const mysql = require('mysql2');   
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pokemon'
});

app.post('/usuariopkm',[
    check('nombre').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('correo').isEmail().withMessage('El correo no es valido'),
    check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres')],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errores: errors.array()});
        }

        const {nombre, correo, password} = req.body;

        connection.query(`INSERT INTO usuariopkm (Nombre, Correo, Password) VALUES ('${nombre}', '${correo}', '${password}')`, (err, rows) => {
            if (err) {
                return res.status(500).json({mensaje: "Error en la base de datos"});
            }
            res.json({mensaje: "Usuario creado"});
        });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});