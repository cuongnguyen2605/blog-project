const knex = require('../../database/knex-connection');
const Credential = require('../../app/credentials/credential');
const CredentialService = require('../../app/credentials/credential-service');
let credentialService = new CredentialService();

class Authenticator {
    authenticate(credentialRaw) { // return new promise
        return credentialService.getCredential(credentialRaw)
            .then(result=>{
                console.log(result);
                if(!result){
                    return false;
                }
                let user = new Credential(result[0].username, result[0].password);
                user.setUserId(result[0].user_id);
                user.setRole(result[0].role);
                return user;
            });

    }
}
module.exports = Authenticator;