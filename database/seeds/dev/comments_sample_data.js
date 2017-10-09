
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
    .then(function () {
        // Inserts seed entries
        return knex('comments').insert([
            {
                comment_id: 1,
                article_id: 1,
                user_id: 1,
                text: 'This is Comment.',
                create_at: new Date()
            },
            {
                comment_id: 2,
                article_id: 2,
                user_id: 3,
                text: 'This is Comment.',
                create_at: new Date()
            },
            {
                comment_id: 3,
                article_id: 3,
                user_id: 3,
                text: 'This is Comment.',
                create_at: new Date()
            }
        ]);
    });
};
