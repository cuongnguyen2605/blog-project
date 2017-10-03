
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("comments", function (table) {
        table.increments("comment_id").primary();
        table.integer("article_id");
        table.integer("user_id");
        table.text("content");
        table.timestamps("create_at");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comments")
};
