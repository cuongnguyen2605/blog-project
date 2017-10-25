// const md5 = require('md5');
// const knex = require('../../database/knex-connection');
const CredentialService = require('../../app/credentials/credential-service');
const ProfileService = require('../../app/profiles/profile-service');
const mysqlConnection = require('../../database/mysql-connection');
const Profile = require('../../app/profiles/profile');
let credentialService = new CredentialService();
let profileService = new ProfileService(mysqlConnection);

class Registrator{
    register(dataRaw){
        return credentialService.insertCredential(dataRaw)
            .then(()=>{
                return credentialService.getCredential(dataRaw);
            })
            .then(result=>{
               return profileService.insertProfile(dataRaw, result[0].user_id);
            })
            .then(()=>{
                return profileService.getProfile(dataRaw.username);
            })
            .then(result=>{
                let profile = new Profile();
                profile.setUsername(result[0].username);
                return profile;
            })

    }
}

module.exports = Registrator;
//
