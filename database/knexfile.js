// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: "localhost",
            user: "root",
            password: "root",
            database: "blog"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host: "localhost",
            user: "root",
            password: "root",
            database: "blog"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    }
};
