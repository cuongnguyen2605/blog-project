module.exports = {
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "1",
        database: "blog"
    },
    migrations: {
        tableName: 'migrations'
    },
    seeds: {
        directory: './seeds/dev'
    }
};
