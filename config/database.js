const {createPool} = require('mysql2');
const pool = createPool({
    port: 3306,
    host: '127.0.0.1',
    user:'root',
    password: '12345678',
    database: 'Museum_Survey',
    connectionLimit: 10
});

module.exports = pool;