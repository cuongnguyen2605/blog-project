const knex = require('../../database/knex-connection');

class PasswordChangingService {
    constructor(){

    }

    getOldPassword(userId) {
        return knex.select('credentials.password')
            .table('credentials')
            .where('credentials.user_id', '=', userId);
    }

    changePassword(userId, newPassword) {
        return knex('credentials')
            .update('credentials.password', newPassword)
            .where('user_id','=', userId);
    }
}

module.exports = PasswordChangingService;