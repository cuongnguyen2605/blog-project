
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('credentials').del()
    .then(function () {
        // Inserts seed entries
        return knex('credentials').insert([
            {
                user_id: 1,
                username: 'johncena',
                password: '1',
                role: 'member'
            },
            {
                user_id: 2,
                username: 'superhero',
                password: '1',
                role: 'member'
            },
            {
                id: 3,
                colName: 'devilhunter',
                password: '1',
                role: 'member'
            }
        ]);
    });
};
