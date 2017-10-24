
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("articles", function (table) {
        table.increments("article_id").primary();
        table.string("images");
        table.string("title");
        table.integer("author");
        table.date("create_at");
        table.text("content");
        table.string("status");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("articles");
};
