
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("profiles", function (table) {
        table.increments("profile_id").primary();
        table.string("fullname");
        table.string("username");
        table.string("email");
        table.string("phone");
        table.string("address");
        table.date("created");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("profiles")
};
