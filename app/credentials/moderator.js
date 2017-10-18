const Credentials = require('./credential');
class Moderator extends Credentials{
    constructor(username, password, role){
        super(username, password);
        this.role = role;
    }

}

module.exports = Moderator;