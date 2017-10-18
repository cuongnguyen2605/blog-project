const Credentials = require('./credential');
class Admin extends Credentials{
    constructor(username, password, role){
        super(username, password);
        this.role = role;
    }

}

module.exports = Admin;