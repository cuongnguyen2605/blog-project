const md5 = require('md5');
class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setUserId(user_id) {
        this.user_id = user_id;
    }

    setPassword(password) {
        this.password = password;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }
    getUserId(){
        return this.user_id;
    }
    getPassword(){
        return md5(this.password);
    }
    getUsername() {
        return this.username;
    }
}


module.exports = Credentials;