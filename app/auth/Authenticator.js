const knex = require('../../database/knex-connection');
const Admin = require('../../app/credentials/admin');
const Member = require('../../app/credentials/member');
const Moderator = require('../../app/credentials/moderator');
const Banner = require('../../app/credentials/banner');
// const Credential = require('../../app/credentials/credential');
class Authenticator{
    authenticate(credential){ // return new promise
        return knex('credentials').where('username',credential.getUsername())
            .andWhere('password',credential.getPassword())
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
//
// let credential = new Credential('toanreu', 'Anhhuy12');
// let auth = new Authenticator();
// auth.authenticate(credential).then(result=>{
//     console.log(result.getRole());
// })
module.exports = Authenticator;