
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("credentials", function (table) {
        table.increments("user_id").primary();
        table.string("username");
        table.string("password");
        table.string("role");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("credentials")
};
