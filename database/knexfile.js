module.exports = {
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "blog"
    },
    migrations: {
        tableName: 'migrations'
    },
    seeds: {
        directory: './seeds/dev'
    }
};
