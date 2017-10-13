const knex = require('../../database/knex-connection');
const md5 = require('md5');
class Authenticator{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }
    getPassword(){

        return md5(this.password);
    }
    authenticate(){
        return knex('credentials').where('username', this.getUsername())
            .andWhere('password',this.getPassword());
    }
}
//
module.exports = Authenticator;