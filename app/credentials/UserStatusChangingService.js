const mysqlConnection = require('../../database/knexfile');

class UserStatusChangingService {
    constructor() {

    }

    getAllCredentials() {
        return mysqlConnection('credentials').innerJoin('profiles', 'credentials.user_id', '=', 'profiles.user_id');
    };

    changeStatusUser(newRole, userId) {
        return mysqlConnection('credentials').where('user_id', '=', userId).update({
            role: newRole,
        });
    }
}

module.exports = UserStatusChangingService;
