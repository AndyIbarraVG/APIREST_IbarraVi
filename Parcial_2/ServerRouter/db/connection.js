const mysql2 = require('mysql2/promise');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokemon'
});

module.exports = connection;