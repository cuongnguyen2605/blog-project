const md5 = require('md5');
const knex = require('../../database/knex-connection');
const CredentialService = require('../../app/credentials/credential-service');
const ProfileService = require('../../app/profiles/profile-service');
const mysqlConnection = require('../../database/mysql-connection');
let credentialService = new CredentialService();
let profileService = new ProfileService(mysqlConnection);
class Registrator{
    checkExistedAcount(credential){
        return credentialService.selectCredential(credential)
            .then(result=>{
                if(!result[0]){
                    return true;
                }
                return false;
            })
    }
    register(credential, profile){
        credentialService.insertCredential(credential)
            .then(()=>{
                return credentialService.selectCredentials(credential);
            })
            .then(result=>{
                profile.setUserId(result[0].user_id);
                profileService.insertProfile(profile);
            })

    }
}

module.exports = Registrator;
//
