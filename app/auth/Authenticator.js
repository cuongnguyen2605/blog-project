const knex = require('../../database/knex-connection');
const ServiceDatabase = require('../reposity-service/service');
class Authenticator{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    authenticate(username, password){
        let obj = new ServiceDatabase();
        return obj.getServiceSelect('select', username, password);

    }
}
//
module.exports = Authenticator;