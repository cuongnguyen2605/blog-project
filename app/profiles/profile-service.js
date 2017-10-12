const Promise = require('bluebird');

class ProfileService {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
        this.mysqlConnection.query = Promise.promisify(mysqlConnection.query);
    }

    getProfile(username) {
        let query = 'SELECT * FROM profiles WHERE username = ?';
        return this.mysqlConnection.query(query, [username]);
    }

    updateProfile(profile) {
        let query = 'UPDATE profiles SET fullname = ?, email = ?, phone = ?, address = ? WHERE username = ?';
        return this.mysqlConnection.query(query,
            [
                profile.fullname,
                profile.email,
                profile.phone,
                profile.address,
                profile.username
            ]
        );
    }

}

module.exports = ProfileService;