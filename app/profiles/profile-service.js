const Promise = require('bluebird');
const knex = require('../../database/knex-connection');
const mysql = require('../../database/mysql-connection');
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
        console.log(profile);
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
    insertProfile(profileRaw, user_id){
        let query = 'INSERT INTO profiles VALUES(?,?,?,?,?,?,?,NOW())';
        return this.mysqlConnection.query(query,
            [   null,
                profileRaw.fullname,
                profileRaw.username,
                user_id,
                profileRaw.email,
                profileRaw.phone,
                profileRaw.address,

            ]);
    }
}
//
// const Profile = require('../../app/profiles/profile');
// let profile = new Profile();
// profile.setFullname("ahahha");
// profile.setAddress('ha noi');
// profile.setPhone('090900909');
// profile.setUserId('40');
// profile.setEmail('dohuy171@@@@@');
// let obj = new ProfileService(mysql);
// obj.insertProfile(profile);
module.exports = ProfileService;