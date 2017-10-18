const Promise = require('bluebird');
const knex = require('../../database/knex-connection');

class ProfileService {
    constructor (mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
        this.mysqlConnection.query = Promise.promisify(mysqlConnection.query);
    }

    getProfile (username) {
        let query = 'SELECT * FROM profiles WHERE username = ?';
        return this.mysqlConnection.query(query, [username]);
    }

    updateProfile (profile) {
        let query = 'UPDATE profiles SET fullname = ?, email = ?, phone = ?, address = ? WHERE username = ?';
        return this.mysqlConnection.query(query,
            [
                profile.fullname,
                profile.email,
                profile.phone,
                profile.address,
                profile.username,
            ]
        );
    }
    insertProfile(profile){
        return knex.insert({profile_id: null},{fullname: profile.getFullname()}
                            ,{email: profile.getEmail()}, {phone: profile.getPhone()}
                            , {address: profile.getAddress()}
                            ,{created: knex.fn.now()}
                            ,{user_id: profile.getUserId()}).into('profiles');
    }
}

module.exports = ProfileService;