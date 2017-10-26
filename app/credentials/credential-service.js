const knex = require('../../database/knex-connection');
const md5  = require('md5');
class CredentialService{

    insertCredential(credentialRaw){
        return knex.insert({user_id: null, username: credentialRaw.username
                            , password: md5(credentialRaw.password)
                            , role: 'member'}).into('credentials');
    }
    checkUsername(credentialRaw){
         return knex('credentials').where('username','=',credentialRaw.username);
    }
    getCredential(credentialRaw){
        return knex('credentials').where('username','=',credentialRaw.username)
                .andWhere('password','=',md5(credentialRaw.password));
    }

}
module.exports = CredentialService;