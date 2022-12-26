const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1337',
  database: 'imbaza',
});

module.exports = connection;
