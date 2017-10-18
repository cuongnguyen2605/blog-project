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
                return credentialService.selectCredential(credential);
            })
            .then(result=>{
                profile.setUserId(result[0].user_id);
                profileService.insertProfile(profile);
            })

    }
}
// //
// const Credential = require('../../app/credentials/credential');
// const Profile = require('../../app/profiles/profile');
// let credential = new Credential('lol', 'Anhhuy12');
// let profile = new Profile();
// profile.setFullname('Do Manh LOL');
// profile.setEmail('');
// profile.setPhone('');
// profile.setAddress('');
// let regis = new Registrator();
// regis.register(credential, profile);

module.exports = Registrator;
//
