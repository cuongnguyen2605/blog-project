const knex = require('../../database/knex-connection');
const Admin = require('../../app/credentials/admin');
const Member = require('../../app/credentials/member');
const Moderator = require('../../app/credentials/moderator');
const Banner = require('../../app/credentials/banner');
const CredentialService = require('../../app/credentials/credential-service');
let credentialService = new CredentialService();

class Authenticator {
    authenticate(credential) { // return new promise
        return knex('credentials').where('username', credential.getUsername())
            .andWhere('password', credential.getPassword())
            .then(result => {
                if (!result[0]) {
                    return 0;
                }
                if (result[0].role === 'banner') {
                    let obj = new Banner(result[0].username, result[0].password, result[0].role);
                    obj.setUserId(result[0].user_id);
                    return obj;
                }
                if (result[0].role === 'admin') {
                    let obj = new Admin(result[0].username, result[0].password, result[0].role);
                    obj.setUserId(result[0].user_id);
                    return obj;
                }
                if (result[0].role === 'moderator') {
                    let obj = new Moderator(result[0].username, result[0].password, result[0].role);
                    obj.setUserId(result[0].user_id);
                    return obj;
                }
                if (result[0].role === 'member') {
                    let obj = new Member(result[0].username, result[0].password, result[0].role);
                    obj.setUserId(result[0].user_id);
                    return obj;
                }

            });
    }
}

module.exports = Authenticator;