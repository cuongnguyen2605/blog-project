const Credentials = require('./credential');
class banner extends Credentials{
    constructor(username, password, role){
        super(username, password);
        this.role = role;
    }

    getRole(){
        return this.role;
    }
}

module.exports = banner;