
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('articles').del()
    .then(function () {
        // Inserts seed entries
        return knex('articles').insert([
            {
                article_id: 1,
                title: 'This is Article 1',
                author: 1,
                create_at: new Date(),
                content: 'This is Content of Article 1'
            },
            {
                article_id: 2,
                title: 'This is Article 2',
                author: 2,
                create_at: new Date(),
                content: 'This is Content of Article 2'
            },
            {
                article_id: 3,
                title: 'This is Article 3',
                author: 3,
                create_at: new Date(),
                content: 'This is Content of Article 3'
            }
        ]);
    });
};
