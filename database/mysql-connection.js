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