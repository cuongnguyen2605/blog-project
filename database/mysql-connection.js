const mysqlConnection = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    }
});

module.exports = mysqlConnection;
const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "blog"
    });

mysqlConnection.connect((err) => {
if (err) throw err;
console.log("Connected!");
});

module.exports = mysqlConnection;