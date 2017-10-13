const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

mysqlConnection.connect(function (error) {
    if (error) throw error;
    console.log('Mysql Connected!');
});

module.exports = mysqlConnection;