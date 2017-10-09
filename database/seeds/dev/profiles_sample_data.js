
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('profiles').del()
    .then(function () {
        // Inserts seed entries
        return knex('profiles').insert([
            {
                profile_id: 1,
                fullname: 'John Cena',
                username: 'johncena',
                user_id: '1',
                email: 'johncena@gmail.com',
                phone: '0987654321',
                address: 'WWE',
                date: new Date()
            },
            {
                profile_id: 2,
                fullname: 'Super Hero',
                username: 'superhero',
                user_id: '2',
                email: 'superhero@gmail.com',
                phone: '0987654321',
                address: 'Crossfire',
                date: new Date()
            },
            {
                profile_id: 3,
                fullname: 'Devil Hunter',
                username: 'devilhunter',
                user_id: '3',
                email: 'devilhunter@gmail.com',
                phone: '0987654321',
                address: 'Crossfire',
                date: new Date()
            }
        ]);
    });
};