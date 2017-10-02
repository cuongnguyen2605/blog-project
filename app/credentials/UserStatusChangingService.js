const mysqlConnection = require('../../database/connectDB/connection');

class UserStatusChangingService {
    constructor() {

    }

    getAllCredentials() {
        return mysqlConnection('Credentials').innerJoin('Profiles', 'Credentials.user_id', '=', 'Profiles.user_id');
    };

    changeStatusUser(newRole, userId) {
        return mysqlConnection('Credentials').where('user_id', '=', userId).update({
            role: newRole,
        });
    }
}

module.exports = UserStatusChangingService;
