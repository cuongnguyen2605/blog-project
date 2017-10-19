const knex = require('../../database/knex-connection');
class CredentialService{
    insertCredential(credential){
        return knex.insert({user_id: null, username: credential.getUsername()
                            , password: credential.getPassword()
                            , role: 'member'}).into('credentials');
    }

    selectCredentials(credential){
        return knex('credentials').where('username','=',credential.getUsername());
    }
    selectCredential(credential){
        return knex('credentials').where('username','=',credential.getUsername())
                .andWhere('password','=',credential.getPassword());
    }


}
module.exports = CredentialService;