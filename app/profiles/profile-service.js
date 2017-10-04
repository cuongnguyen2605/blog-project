const Promise = require('bluebird');

class ProfileService {
    constructor (mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
        this.mysqlConnection.query = Promise.promisify(mysqlConnection.query);
    }

    getProfile (profile_id) {
        let query = 'SELECT * FROM profiles WHERE profile_id = ?';
        return this.mysqlConnection.query(query, [profile_id]);
    }

    getProfiles () {
        let query = 'SELECT * FROM profiles';
        return this.mysqlConnection.query(query);
    }

    createProfile (profile) {
        let query = 'INSERT INTO profiles SET ?';
        return this.mysqlConnection.query(query, [profile]);
    }

    updateProfile (profile) {
        let query = 'UPDATE profiles SET fullname = ?, email = ?, phone = ?, address = ?';
        return this.mysqlConnection.query(query, [profile.fullname], [profile.email], [profile.phone], [profile.address]);
    }

    deleteProfile (profile_id) {
        let query = 'DELETE FROM profiles WHERE profile_id = ?';
        return this.mysqlConnection.query(query, [profile_id])
    }

}

module.exports = ProfileService;