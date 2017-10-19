const knex = require('../../database/knex-connection');
class CredentialService{
    insertCredential(credential){
        return knex.insert({user_id: null, username: credential.getUsername()
                            , password: credential.getPassword()
                            , role: 'member'}).into('credentials');
    }

    selectCredential(credential){
        return knex('credentials').where('username','=',credential.getUsername());
    }


}
module.exports = CredentialService;