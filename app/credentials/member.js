const Credentials = require('./credential');
class Member extends Credentials{
    constructor(username, password, role){
        super(username, password);
        this.role = role;
    }

}

module.exports = Member;