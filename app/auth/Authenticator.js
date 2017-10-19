const knex = require('../../database/knex-connection');
const Admin = require('../../app/credentials/admin');
const Member = require('../../app/credentials/member');
const Moderator = require('../../app/credentials/moderator');
const Banner = require('../../app/credentials/banner');
const CredentialService = require('../../app/credentials/credential-service');
let credentialService = new CredentialService();
class Authenticator{
    authenticate(credential){ // return new promise
        return credentialService.selectCredential(credential)
        .then(result =>{
            if(!result[0]){
                return 0;
            }
            if(result[0].role === 'banner'){
                return new Banner(result[0].username, result[0].password, result[0].role);
            }
            if(result[0].role === 'admin'){
                return new Admin(result[0].username, result[0].password, result[0].role);
            }
            if(result[0].role === 'moderator'){
                return new Moderator(result[0].username, result[0].password, result[0].role);
            }
            if(result[0].role === 'member'){
                return new Member(result[0].username, result[0].password, result[0].role);
            }

        });
    }
}
module.exports = Authenticator;