const knex = require('../../database/knex-connection');

class UserStatusChangingService {
    constructor() {

    }

    getAllCredentials() {
        return knex('credentials').innerJoin('profiles', 'credentials.user_id', '=', 'profiles.user_id');
    }

    changeStatusUser(newRole, userId) {
        return knex('credentials').where('user_id', '=', userId).update({
            role: newRole,
        });
    }
}

module.exports = UserStatusChangingService;
