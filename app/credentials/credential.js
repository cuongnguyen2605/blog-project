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
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    setRole(role) {
        this.role = role;
        return this;
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