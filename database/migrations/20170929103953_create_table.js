
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists("profiles", function (table) {
            table.increments("profile_id").primary();
            table.string("fullname");
            table.string("username");
            table.string("email");
            table.string("phone");
            table.string("address");
        }),

        knex.schema.createTableIfNotExists("credentials", function (table) {
            table.increments("user_id").primary();
            table.string("username");
            table.string("password");
            table.string("role");
        }),

        knex.schema.createTableIfNotExists("articles", function (table) {
            table.increments("article_id").primary();
            table.string("title");
            table.integer("author");
            table.date("create_at");
            table.text("content");
            table.string("status");
        }),

        knex.schema.createTableIfNotExists("comments", function (table) {
            table.increments("comment_id").primary();
            table.integer("article_id");
            table.integer("commenters");
            table.text("content");
            table.timestamps("create_at");
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("profiles"),
        knex.schema.dropTableIfExists("credentials"),
        knex.schema.dropTableIfExists("articles"),
        knex.schema.dropTableIfExists("comments")
    ])
};
