const mysql2 = require('mysql2/promise');

// Configuración de conexión individual
async function getConnection() {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pokemon'
    });
    return connection;
}

module.exports = getConnection;
